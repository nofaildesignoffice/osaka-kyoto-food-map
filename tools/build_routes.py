# Write data/routes.js from all raw_routes*.jsonl (parse only — the site no longer draws OSRM lines, so geo.js is not rebuilt).
import json, os, glob, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from parse_routes import main as parse_main
H = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(H)
routes = parse_main(sorted(glob.glob(os.path.join(H, 'raw_routes*.jsonl'))), os.path.join(H, 'routes_parsed.json'))
ats = sorted(x['transit']['at'] for x in routes.values() if x.get('transit'))
meta = {"label": "Google 지도 길찾기 조회값", "from": ats[0] if ats else None, "to": ats[-1] if ats else None}
with open(os.path.join(ROOT, 'data', 'routes.js'), 'w', encoding='utf-8') as f:
    f.write('// Google 지도 길찾기 화면에서 조회한 경로 요약 (tools/parse_routes.py 로 생성)\n')
    f.write('window.ROUTES_META = ' + json.dumps(meta, ensure_ascii=False) + ';\n')
    f.write('window.ROUTES = ' + json.dumps(routes, ensure_ascii=False) + ';\n')
print('routes', len(routes))
