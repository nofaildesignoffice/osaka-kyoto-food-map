# -*- coding: utf-8 -*-
"""저장된 지하철+도보 경로(공용 저장소 nvcache)마다 지도에 그릴 실제 모양을 만들어 /shape/<구간> 에 올린다.
- 역·정류장 위치: Google Places 검색 → 걷는 거리·탄 시간과 맞는 후보만 채택 (안 맞으면 그 구간은 만들지 않음)
- 걷는 구간: Google Routes 도보 경로 / 버스: Google Routes 차도 경로
- 철도·지하철: 국토교통성 国土数値情報 鉄道データ(N02-25, 2025-12-31 시점) 선로를 따라 최단 경로 (tools/osm/rail_rel.json)
결과 형식은 사이트가 이미 그리는 NAVITIME GeoJSON 과 같음: [FeatureCollection]
사용: python build_shapes.py [--push] [--only key1,key2]"""
import json, math, os, re, sys, heapq, urllib.request, urllib.parse
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SYNC = 'https://osaka-map-sync.osaka-kyoto-map.workers.dev'
GKEY = re.search(r"GKEY\s*=\s*'([^']+)'", open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()).group(1)
CACHE_F = os.path.join(HERE, 'osm', 'shape_cache.json')
CACHE = json.load(open(CACHE_F, encoding='utf-8')) if os.path.exists(CACHE_F) else {}
CACHE.setdefault('st', {}); CACHE.setdefault('rt', {})
HDR = {'Content-Type': 'application/json', 'X-Goog-Api-Key': GKEY, 'Referer': 'https://nofaildesignoffice.github.io/'}

def gpost(url, mask, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers={**HDR, 'X-Goog-FieldMask': mask})
    return json.loads(urllib.request.urlopen(req, timeout=30).read())

def dist(a, b):
    R = 6371000; t = math.radians
    h = math.sin(t(b[0] - a[0]) / 2) ** 2 + math.cos(t(a[0])) * math.cos(t(b[0])) * math.sin(t(b[1] - a[1]) / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))

def decode(enc):
    pts, i, lat, lng = [], 0, 0, 0
    while i < len(enc):
        for which in (0, 1):
            shift = res = 0
            while True:
                b = ord(enc[i]) - 63; i += 1; res |= (b & 0x1f) << shift; shift += 5
                if b < 0x20: break
            d = ~(res >> 1) if res & 1 else res >> 1
            if which == 0: lat += d
            else: lng += d
        pts.append((lat / 1e5, lng / 1e5))
    return pts

BUS = re.compile(r'(バス|Bus|버스|号$|^\D*\d+\s*City Bus|八田)', re.I)
def is_bus(line, to=''): return bool(BUS.search(line or '')) or '（バス）' in (to or '')

# ---------- 역·정류장 후보 ----------
STJ = json.load(open(os.path.join(HERE, 'stations.json'), encoding='utf-8')) if os.path.exists(os.path.join(HERE, 'stations.json')) else {}
def clean(n): return re.sub(r'（.*?）|\(.*?\)|〔.*?〕', '', n).replace(' 역', '').replace('駅', '').strip()
def candidates(name, near, bus):
    key = f"{name}|{bus}"
    if key in CACHE['st']: return [tuple(c) for c in CACHE['st'][key]]
    ko = bool(re.search('[가-힣]', name)); base = clean(name)
    qs = []
    if bus: qs += [base + (' 정류장' if ko else ' バス停'), base]
    else: qs += [base + ('역' if ko else '駅'), name]
    out = []
    for q in qs:
        try:
            j = gpost('https://places.googleapis.com/v1/places:searchText', 'places.location,places.types,places.displayName',
                      {'textQuery': q, 'languageCode': 'ko' if ko else 'ja', 'regionCode': 'JP', 'pageSize': 8,
                       'locationBias': {'circle': {'center': {'latitude': near[0], 'longitude': near[1]}, 'radius': 30000}}})
        except Exception as e:
            print('  places err', q, e); continue
        for p in j.get('places', []):
            ty = ' '.join(p.get('types', []))
            if re.search('station|transit|bus_stop|subway', ty):
                c = (round(p['location']['latitude'], 6), round(p['location']['longitude'], 6))
                if c not in out: out.append(c)
    for k, v in STJ.items():   # Wikidata 역 좌표 (이전 수집분)
        if clean(k) == base and tuple(v) not in out: out.append(tuple(v))
    CACHE['st'][key] = out
    return out

# ---------- Google 경로 (도보 / 버스는 차도) ----------
def groute(a, b, mode):
    k = f"{mode}|{a[0]:.5f},{a[1]:.5f}|{b[0]:.5f},{b[1]:.5f}"
    if k in CACHE['rt']: return decode(CACHE['rt'][k]) if CACHE['rt'][k] else [a, b]
    enc = ''
    try:
        body = {'origin': {'location': {'latLng': {'latitude': a[0], 'longitude': a[1]}}}, 'destination': {'location': {'latLng': {'latitude': b[0], 'longitude': b[1]}}}, 'travelMode': mode}
        j = gpost('https://routes.googleapis.com/directions/v2:computeRoutes', 'routes.polyline.encodedPolyline', body)
        enc = j['routes'][0]['polyline']['encodedPolyline']
    except Exception as e: print('  route err', mode, e)
    CACHE['rt'][k] = enc
    return decode(enc) if enc else [a, b]

# ---------- 철도 선로 (OSM) ----------
# 노선 이름(구글 한국어 / NAVITIME 일본어) → 국토교통성 N02 노선명 일부 ('|' = 여러 노선 선로를 합침: 직통 운행 구간)
LINE_JA = [('堺筋', '堺筋線'), ('사카이스지', '堺筋線'), ('御堂筋', '御堂筋線'), ('미도스지', '御堂筋線'), ('環状', '大阪環状線'), ('순환', '大阪環状線'),
           ('谷町', '谷町線'), ('다니마치', '谷町線'), ('千日前', '千日前線'), ('센니치마에', '千日前線'), ('四つ橋', '四つ橋線'), ('요쓰바시', '四つ橋線'),
           ('長堀', '長堀鶴見緑地線'), ('나가호리', '長堀鶴見緑地線'), ('中央線', '(中央線)'), ('주오선', '(中央線)'), ('고야선', '南海電気鉄道 南海本線|南海電気鉄道 高野線'),
           ('난카이 본선', '南海電気鉄道 南海本線'), ('야마토지', '西日本旅客鉄道 関西線'), ('関西本線', '西日本旅客鉄道 関西線'), ('嵯峨野', '西日本旅客鉄道 山陰線'), ('산인', '西日本旅客鉄道 山陰線'),
           ('京都市営東西線', '京都市 東西線'), ('도자이', '京都市 東西線'), ('한큐 고베', '阪急電鉄 神戸線'), ('긴테쓰 나라', '近畿日本鉄道 難波線|近畿日本鉄道 奈良線'),
           ('나라선', '西日本旅客鉄道 奈良線'), ('유메사키', '桜島線'), ('京阪本線', '京阪電気鉄道 京阪本線'), ('게이한 본선', '京阪電気鉄道 京阪本線'),
           ('한신 난바', '阪神電気鉄道 阪神なんば線'), ('이마자토', '今里筋線'), ('뉴트램', '南港ポートタウン線')]
RAIL = None
def rail_graph(ja):
    """노선 이름(일본어 일부)이 들어간 OSM 노선의 선로 그래프"""
    global RAIL
    if RAIL is None:
        try: RAIL = json.load(open(os.path.join(HERE, 'osm', 'rail_rel.json'), encoding='utf-8'))['elements']
        except Exception: RAIL = []
    adj = {}
    for e in RAIL:
        t = e.get('tags', {}); nm = ' '.join([t.get('name', ''), t.get('name:ja', ''), t.get('ref', '')])
        if ja not in nm: continue
        for m in e.get('members', []):
            if m.get('type') != 'way' or not m.get('geometry') or m.get('role') in ('stop', 'platform', 'stop_entry_only', 'stop_exit_only'): continue
            g = [(round(p['lat'], 6), round(p['lon'], 6)) for p in m['geometry']]
            for a, b in zip(g, g[1:]):
                d = dist(a, b); adj.setdefault(a, {})[b] = d; adj.setdefault(b, {})[a] = d
    return adj
GRAPHS = {}
def line_graph(line):
    g = {}
    for part in line.split(' → '):
        ja = next((v for k, v in LINE_JA if k in part), None)
        for x in (ja.split('|') if ja else []):
            for u, nb_ in (GRAPHS.get(x) or GRAPHS.setdefault(x, rail_graph(x))).items(): g.setdefault(u, {}).update(nb_)
    return g
def line_dist(line, c):
    g = line_graph(line)
    return min((dist(u, c) for u in g), default=1e9)
def rail_path(line, a, b):
    jas = []   # 직통(A → B)이면 두 노선 선로를 합침
    for part in line.split(' → '):
        ja = next((v for k, v in LINE_JA if k in part), None)
        for x in (ja.split('|') if ja else []):
            if x not in jas: jas.append(x)
    if not jas: return None, 'no line map'
    g = {}
    for ja in jas:
        for u, nb_ in (GRAPHS.get(ja) or GRAPHS.setdefault(ja, rail_graph(ja))).items(): g.setdefault(u, {}).update(nb_)
    if not g: return None, 'no osm'
    # 상·하행 선로가 따로 그려져 서로 안 이어진 경우가 많음 → 두 역이 모두 가까운 '연결된 선로 묶음'을 고름
    comp, cid = {}, 0
    for u in g:
        if u in comp: continue
        stack = [u]; comp[u] = cid
        while stack:
            x = stack.pop()
            for y in g[x]:
                if y not in comp: comp[y] = cid; stack.append(y)
        cid += 1
    best_c = None
    for c in range(cid):
        nodes = [u for u in g if comp[u] == c]
        if len(nodes) < 2: continue
        ua = min(nodes, key=lambda p: dist(p, a)); ub = min(nodes, key=lambda p: dist(p, b))
        sc = dist(ua, a) + dist(ub, b)
        if best_c is None or sc < best_c[0]: best_c = (sc, ua, ub)
    na, nb = best_c[1], best_c[2]
    if dist(na, a) > 700 or dist(nb, b) > 700: return None, f'snap {dist(na,a):.0f}/{dist(nb,b):.0f}m'
    best = {na: 0}; prev = {}; pq = [(0, na)]
    while pq:
        d, u = heapq.heappop(pq)
        if u == nb: break
        if d > best.get(u, 1e18): continue
        for v, w in g[u].items():
            nd = d + w
            if nd < best.get(v, 1e18): best[v] = nd; prev[v] = u; heapq.heappush(pq, (nd, v))
    if nb not in best: return None, 'disconnected'
    path = [nb]
    while path[-1] != na: path.append(prev[path[-1]])
    path.reverse()
    return [a] + path + [b], None

# ---------- 경로 1개 → GeoJSON ----------
def build(key, ent, pl):
    o, d = key.split('|'); A = (pl[o]['lat'], pl[o]['lng']); B = (pl[d]['lat'], pl[d]['lng'])
    r = ent['routes'][0]; steps = r['steps']; mid = ((A[0] + B[0]) / 2, (A[1] + B[1]) / 2)
    pts = [A]
    for i, s in enumerate(steps):
        if s['to'] == '도착지' or i == len(steps) - 1: pts.append(B); continue
        nxt = steps[i + 1] if i + 1 < len(steps) else None
        bus = is_bus(s.get('line', ''), s['to']) or (nxt and nxt['kind'] == 'ride' and is_bus(nxt.get('line', ''), s['to']))
        cs = candidates(s['to'], mid, bool(bus))
        cur = pts[-1]
        # 앞 구간과 맞는지: 걷기면 걸은 거리, 타기면 탄 시간
        if s['kind'] == 'walk': lim = (s.get('m') or 80 * (s.get('min') or 5)) * 1.4 + 350
        else: lim = max(3000, (s.get('min') or 5) * 1300)
        ok = [c for c in cs if dist(cur, c) <= lim]
        # 다음이 도착지까지 걷기면 그 거리와도 맞아야 함
        if nxt and nxt['kind'] == 'walk' and (nxt['to'] == '도착지' or i + 1 == len(steps) - 1):
            lim2 = (nxt.get('m') or 80 * (nxt.get('min') or 5)) * 1.4 + 350
            ok = [c for c in ok if dist(c, B) <= lim2]
        if not ok and nxt and nxt['kind'] == 'walk' and (nxt.get('m') or 999) <= 120 and i + 1 == len(steps) - 1:
            ok = [B]   # 내리자마자 도착(걷기 120m 이하): 정류장 = 도착지 바로 앞
        if not ok: return None, f"역 위치 확인 실패: {s['to']} (후보 {len(cs)})"
        ok.sort(key=lambda c: dist(cur, c) if s['kind'] == 'walk' else abs(dist(cur, c) - (s.get('min') or 5) * 600))
        # 같은 이름 역이 여러 노선에 있을 때(本町 등): 이 역에서 타거나 내리는 철도 노선 선로에 가장 가까운 역
        rl = [x.get('line', '') for x in (s, nxt) if x and x['kind'] == 'ride' and not is_bus(x.get('line', ''), x.get('to', ''))]
        if rl and len(ok) > 1:
            ok.sort(key=lambda c: round(max(line_dist(l, c) for l in rl) / 150))   # 갈아타는 역이면 두 노선 모두에 가까워야 함
        pts.append(ok[0])
    feats = []
    for s, a, b in zip(steps, pts, pts[1:]):
        if s['kind'] == 'walk':
            path = groute(a, b, 'WALK') if dist(a, b) > 40 else [a, b]; ways = 'walk'
        elif is_bus(s.get('line', ''), s.get('to', '')) or is_bus(s.get('line', ''), s.get('from', '')):
            path = groute(a, b, 'DRIVE'); ways = 'bus'
        else:
            path, err = rail_path(s.get('line', ''), a, b); ways = 'rail'
            if not path: return None, f"선로 실패: {s.get('line')} {err}"
        feats.append({'type': 'Feature', 'properties': {'ways': ways, 'inline': {'color': s.get('color') or '#555'}},
                      'geometry': {'type': 'LineString', 'coordinates': [[round(p[1], 5), round(p[0], 5)] for p in path]}})
    return [{'type': 'FeatureCollection', 'features': feats}], None

def places():
    import subprocess
    js = "global.window={};for(const f of ['hotels','places','spots','added'])require('./data/'+f+'.js');window.PLACES.push(...(window.SPOTS||[]));const o={};[...window.PLACES,...(window.ADDED||[])].forEach(p=>o[p.id]={lat:p.lat,lng:p.lng});console.log(JSON.stringify(o))"
    o = json.loads(subprocess.run(['node', '-e', js], cwd=ROOT, capture_output=True, text=True, encoding='utf-8').stdout)
    st = json.loads(urllib.request.urlopen(urllib.request.Request(SYNC + '/state', headers={'User-Agent': 'osaka-map-shapes'})).read())
    for p in st.get('added', []): o[p['id']] = {'lat': p['lat'], 'lng': p['lng']}
    return o, st['nvcache']

if __name__ == '__main__':
    pl, nv = places()
    only = next((a.split('=', 1)[1].split(',') for a in sys.argv if a.startswith('--only=')), None)
    keys = [k for k, v in nv.items() if v.get('routes') and not v['routes'][0].get('walkOnly') and (not only or k in only)
            and all(x in pl for x in k.split('|'))]
    out, fails = {}, []
    for n, k in enumerate(keys):
        try: v, err = build(k, nv[k], pl)
        except Exception as e: v, err = None, 'error ' + repr(e)[:200]
        if v: out[k] = v
        else: fails.append((k, err))
        if n % 20 == 0:
            print(n, len(keys), 'ok', len(out), 'fail', len(fails)); json.dump(CACHE, open(CACHE_F, 'w', encoding='utf-8'), ensure_ascii=False)
    json.dump(CACHE, open(CACHE_F, 'w', encoding='utf-8'), ensure_ascii=False)
    json.dump(out, open(os.path.join(HERE, 'osm', 'shapes_out.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    print('ok', len(out), 'fail', len(fails))
    for f in fails: print('FAIL', f)
    if '--push' in sys.argv:
        def put(kv):
            k, v = kv
            req = urllib.request.Request(SYNC + '/shape/' + urllib.parse.quote(k, safe=''), data=json.dumps(v).encode(), method='PUT',
                                         headers={'Content-Type': 'application/json', 'Origin': 'https://nofaildesignoffice.github.io', 'User-Agent': 'osaka-map-shapes'})
            return urllib.request.urlopen(req, timeout=30).status
        with ThreadPoolExecutor(8) as ex: print('pushed', list(ex.map(put, out.items())).count(200))
