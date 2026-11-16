# Google 지도 길찾기 화면 텍스트(raw_routes_gm2.jsonl) → 사이트 지하철 경로 형식(nvcache 항목)으로 변환해 공용 저장소에 올림.
# 화면에 실제로 나온 값만 사용. 해석이 불완전한 구간(unknown 단계, 총 시간 없음)은 올리지 않음.
import json, sys, re, urllib.request
sys.path.insert(0, '.')
import parse_routes as P
SYNC = 'https://osaka-map-sync.osaka-kyoto-map.workers.dev'
# 오사카 메트로·JR 공식 노선 색
COLOR = {'미도스지선':'#e5171f','다니마치선':'#522886','요쓰바시선':'#0078ba','주오선':'#019a66','센니치마에선':'#e44d93','사카이스지선':'#814721',
         '나가호리쓰루미료쿠치선':'#a9cc51','이마자토스지선':'#ee7b1a','뉴트램':'#00b2e5','오사카 순환선':'#f15a22','JR 오사카 순환선':'#f15a22'}
JOBS = next((a.split('=',1)[1] for a in sys.argv if a.startswith('--jobs=')), 'jobs_gm2.json')
jobs = {f"{j['o']}|{j['d']}": j for j in json.load(open(JOBS, encoding='utf-8'))}
out, skipped = {}, []
for line in open(sys.argv[1] if len(sys.argv) > 1 else 'raw_routes_gm2.jsonl', encoding='utf-8'):
    r = json.loads(line); k = f"{r['o']}|{r['d']}"; j = jobs.get(k)
    if not j: continue
    d = P.parse_detail(r['detail']); opts = P.parse_options(r['summary'])
    legs = d['legs']
    if d.get('incomplete') or d['total'] is None or not legs or any(l['mode'] == 'unknown' for l in legs) or any(l.get('min') is None for l in legs):
        skipped.append((k, 'parse')); continue
    clean = opts[0]['lines'] if opts else []
    steps, lines = [], []
    rides = [l for l in legs if l['mode'] == 'ride']
    for i, l in enumerate(legs):
        last = i == len(legs) - 1
        if l['mode'] == 'walk':
            steps.append({'kind': 'walk', 'min': l['min'], 'm': l.get('m'), 'to': '도착지' if last else (l.get('to') or ''), 'gate': '', 'fromGate': ''})
        else:
            raw = l['line']; ln = next((c for c in clean if raw.startswith(c)), raw)
            lines.append(ln)
            steps.append({'kind': 'ride', 'line': ln, 'color': COLOR.get(ln, '#555'), 'type': '', 'min': l['min'], 'from': l.get('from') or '',
                          'fromNo': '', 'to': '도착지' if last else (l.get('to') or ''), 'toNo': '', 'dir': ''})
    walkM = sum((l.get('m') or 0) for l in legs if l['mode'] == 'walk')
    route = {'min': d['total'], 'fare': d['fare'], 'ic': None, 'transfers': max(0, len(rides) - 1), 'walkM': walkM, 'walkOnly': d['walkOnly'] or not rides,
             'longWalk': any(l['mode'] == 'walk' and l['min'] >= 20 for l in legs), 'lines': lines, 'steps': steps}
    out[k] = {'routes': [route], 'at': r['at'], 'basis': r['at'][:19], 'c': f"{j['ol']}>{j['dl']}", 'src': 'google'}
print('ok', len(out), 'skipped', skipped)
for k, v in list(out.items())[:3]: print(k, json.dumps(v['routes'][0], ensure_ascii=False)[:300])
if '--push' in sys.argv and out:
    req = urllib.request.Request(SYNC + '/kv/nvcache', data=json.dumps(out, ensure_ascii=False).encode(), method='PUT',
                                 headers={'Content-Type': 'application/json', 'Origin': 'https://nofaildesignoffice.github.io', 'User-Agent': 'osaka-map-gm'})
    print(urllib.request.urlopen(req).read())
