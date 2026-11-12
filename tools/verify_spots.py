# Look up tourist-spot coordinates from two independent sources and keep only agreeing ones.
#  1) Wikidata P625 (by QID, or by searching the Japanese label)  2) OSM Nominatim search
# Input: tools/spots_in.json [{id, city, name, nameJa, qid?, q?}]  Output: tools/spots_verified.json
import json, os, sys, time, math, urllib.request, urllib.parse
HERE=os.path.dirname(os.path.abspath(__file__))
UA={'User-Agent':'personal-travel-map-builder/1.0'}
def get(url):
    for i in range(4):
        try: return json.load(urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=40))
        except Exception as e: time.sleep(3*(i+1))
    return None
def dist(a,b):
    R=6371000; p1,p2=math.radians(a[0]),math.radians(b[0]); dp=p2-p1; dl=math.radians(b[1]-a[1])
    return 2*R*math.asin(math.sqrt(math.sin(dp/2)**2+math.cos(p1)*math.cos(p2)*math.sin(dl/2)**2))
def wd_entity(qid):
    d=get(f'https://www.wikidata.org/wiki/Special:EntityData/{qid}.json')
    if not d: return None
    e=d['entities'][qid]; c=e['claims'].get('P625')
    v=c[0]['mainsnak']['datavalue']['value'] if c else None
    return {'qid':qid,'ja':e['labels'].get('ja',{}).get('value'),'ko':e['labels'].get('ko',{}).get('value'),'coord':[v['latitude'],v['longitude']] if v else None}
def wd_search(label):
    d=get('https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=ja&limit=5&search='+urllib.parse.quote(label))
    return [x['id'] for x in (d or {}).get('search',[])]
CITY_BOX={'osaka':(34.55,34.80,135.35,135.62),'kyoto':(34.88,35.10,135.62,135.85)}
inb=lambda c,box: c and box[0]<=c[0]<=box[1] and box[2]<=c[1]<=box[3]
spots=json.load(open(os.path.join(HERE,'spots_in.json'),encoding='utf-8'))
out=[]
for s in spots:
    box=CITY_BOX[s['city']]
    cands=[s['qid']] if s.get('qid') and s['qid']!='?' else []
    cands+= [q for q in wd_search(s['nameJa']) if q not in cands]
    wd=None
    for q in cands[:5]:
        e=wd_entity(q); time.sleep(.3)
        if e and inb(e['coord'],box): wd=e; break
    nm=get('https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=jp&limit=3&q='+urllib.parse.quote(s.get('q') or s['nameJa'])); time.sleep(1.2)
    osm=next(([float(x['lat']),float(x['lon'])] for x in (nm or []) if inb([float(x['lat']),float(x['lon'])],box)),None)
    d=round(dist(wd['coord'],osm)) if wd and osm else None
    r={**s,'wikidata':wd,'osm':osm,'gap_m':d,'ok':d is not None and d<=600}
    out.append(r); print(('OK ' if r['ok'] else 'CHK'),s['id'],wd and wd['qid'],d,flush=True)
json.dump(out,open(os.path.join(HERE,'spots_verified.json'),'w',encoding='utf-8'),ensure_ascii=False,indent=1)
