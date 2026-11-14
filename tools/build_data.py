# Build data/routes.js and data/geo.js from collected raw files.
#  - routes: parsed Google Maps directions text (parse_routes.py)
#  - geo.walk: walking polylines from the FOSSGIS OSRM foot-profile server (routing.openstreetmap.de/routed-foot)
#  - geo.stations: station coordinates looked up on Google Maps (stations.json, produced by the browser lookup step)
import json, os, re, sys, time, glob, urllib.request
sys.path.insert(0, os.path.dirname(__file__))
from parse_routes import main as parse_main

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CACHE = os.path.join(HERE, 'osrm_cache.json')


def load_places():
    """Read lat/lng of every place from data/places.js and data/hotels.js (simple regex on our own files)."""
    pts = {}
    for fn in ('places.js', 'hotels.js'):
        s = open(os.path.join(ROOT, 'data', fn), encoding='utf-8').read()
        for m in re.finditer(r'"?id"?:\s*"([^"]+)".*?"?lat"?:\s*([\d.]+),\s*"?lng"?:\s*([\d.]+)', s, re.S):
            pts[m.group(1)] = (float(m.group(2)), float(m.group(3)))
    return pts


cache = json.load(open(CACHE, encoding='utf-8')) if os.path.exists(CACHE) else {}


def osrm(a, b):
    k = f"{a[0]:.6f},{a[1]:.6f}|{b[0]:.6f},{b[1]:.6f}"
    if k in cache:
        return cache[k]
    url = f"https://routing.openstreetmap.de/routed-foot/route/v1/foot/{a[1]},{a[0]};{b[1]},{b[0]}?overview=full&geometries=geojson"
    req = urllib.request.Request(url, headers={'User-Agent': 'personal-travel-map-builder/1.0'})
    for attempt in range(3):
        try:
            d = json.load(urllib.request.urlopen(req, timeout=30))
            break
        except Exception as e:
            time.sleep(2 + attempt * 3)
    else:
        return None
    time.sleep(0.4)
    if d.get('code') != 'Ok':
        cache[k] = None
        return None
    coords = [[round(c[1], 6), round(c[0], 6)] for c in d['routes'][0]['geometry']['coordinates']]
    cache[k] = coords
    return coords


def run():
    pts = load_places()
    routes = parse_main(sorted(glob.glob(os.path.join(HERE, 'raw_routes*.jsonl'))), os.path.join(HERE, 'routes_parsed.json'))
    stations = json.load(open(os.path.join(HERE, 'stations.json'), encoding='utf-8')) if os.path.exists(os.path.join(HERE, 'stations.json')) else {}
    walk = {}
    missing_st = set()
    for key, r in routes.items():
        o, d = r['o'], r['d']
        if o not in pts or d not in pts:
            continue
        A, B = pts[o], pts[d]
        w = r.get('walk')
        if w and w.get('m') is not None and w['m'] <= 5000:
            g = osrm(A, B)
            if g:
                walk[f"route:{key}"] = g
        t = r.get('transit')
        if t and not t.get('walkOnly'):
            legs = t['legs']
            for i, l in enumerate(legs):
                s = A if i == 0 else stations.get(l.get('from'))
                e = B if i == len(legs) - 1 else stations.get(l.get('to'))
                if i != 0 and l.get('from') not in stations: missing_st.add(l.get('from'))
                if i != len(legs) - 1 and l.get('to') not in stations: missing_st.add(l.get('to'))
                if l['mode'] == 'walk' and s and e:
                    g = osrm(tuple(s), tuple(e))
                    if g:
                        walk[f"leg:{l['from']}|{l['to']}|{key}"] = g
        json.dump(cache, open(CACHE, 'w', encoding='utf-8'))
    ats = sorted(x['transit']['at'] for x in routes.values() if x.get('transit'))
    meta = {"label": "2026-11-12(목) 오후에", "from": ats[0] if ats else None, "to": ats[-1] if ats else None}
    with open(os.path.join(ROOT, 'data', 'routes.js'), 'w', encoding='utf-8') as f:
        f.write('// Google 지도 길찾기 화면에서 조회한 경로 요약 (tools/parse_routes.py 로 생성)\n')
        f.write('window.ROUTES_META = ' + json.dumps(meta, ensure_ascii=False) + ';\n')
        f.write('window.ROUTES = ' + json.dumps(routes, ensure_ascii=False) + ';\n')
    with open(os.path.join(ROOT, 'data', 'geo.js'), 'w', encoding='utf-8') as f:
        f.write('// walk: OSRM foot 프로필(routing.openstreetmap.de) 도보 경로선 / stations: Google 지도 역 좌표\n')
        f.write('window.GEO = ' + json.dumps({"walk": walk, "stations": stations}, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('routes', len(routes), 'walk geoms', len(walk), 'missing stations', sorted(x for x in missing_st if x))


if __name__ == '__main__':
    run()
