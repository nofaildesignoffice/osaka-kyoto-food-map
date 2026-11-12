# Collect station names used in transit legs and resolve their coordinates on Wikidata (Korean label match,
# Osaka-area bbox). Results with their Wikidata id / Japanese label go to stations_meta.json for auditing.
import json, os, glob, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from parse_routes import main as parse_main
from wd_station import lookup
H=os.path.dirname(os.path.abspath(__file__))
routes=parse_main(sorted(glob.glob(os.path.join(H,'raw_routes*.jsonl'))), os.path.join(H,'routes_parsed.json'))
names=set()
for r in routes.values():
    t=r.get('transit') or {}
    legs=t.get('legs') or []
    for i,l in enumerate(legs):
        if i>0: names.add(l.get('from'))
        if i<len(legs)-1: names.add(l.get('to'))
names.discard(None)
mp=os.path.join(H,'stations_meta.json')
meta=json.load(open(mp,encoding='utf-8')) if os.path.exists(mp) else {}
for n in sorted(names):
    if n in meta: continue
    meta[n]=lookup(n)
    print(n, meta[n] and meta[n]['ja'])
    json.dump(meta,open(mp,'w',encoding='utf-8'),ensure_ascii=False,indent=1)
st={n:[round(v['lat'],6),round(v['lng'],6)] for n,v in meta.items() if v}
json.dump(st,open(os.path.join(H,'stations.json'),'w',encoding='utf-8'),ensure_ascii=False,indent=1)
print('resolved',len(st),'of',len(meta),'unresolved:',[n for n,v in meta.items() if not v])
