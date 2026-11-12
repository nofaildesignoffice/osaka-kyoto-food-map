# Kyoto has no 町 polygons in OSM (only place=neighbourhood nodes). Fetch those nodes for our listed 町 + the 祇園 historic relation.
import json, os, time, urllib.request, urllib.parse
HERE=os.path.dirname(os.path.abspath(__file__)); OUT=os.path.join(HERE,'osm')
MIRRORS=['https://overpass.private.coffee/api/interpreter','https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter']
D=json.load(open(os.path.join(HERE,'districts_def.json'),encoding='utf-8'))
need={}
for d in D:
    if d['city']!='kyoto': continue
    for w,names in d['wards'].items(): need.setdefault(w,set()).update(names)
parts=[]
for w,names in need.items():
    rx='^('+'|'.join(sorted(names))+')$'
    parts.append(f'area["name"="京都市"]["admin_level"="7"]->.c;area["name"="{w}"]["admin_level"="8"](area.c)->.w{len(parts)};node["place"]["name"~"{rx}"](area.w{len(parts)});')
query='[out:json][timeout:170];('+''.join(f'{p}' for p in [])+');'
# build union query
body='[out:json][timeout:170];'
sets=[]
for i,(w,names) in enumerate(need.items()):
    rx='^('+'|'.join(sorted(names))+')$'
    body+=f'area["name"="京都市"]["admin_level"="7"]->.c{i};area["name"="{w}"]["admin_level"="8"](area.c{i})->.w{i};node["place"]["name"~"{rx}"](area.w{i})->.n{i};'
    sets.append(f'.n{i};')
body+='('+''.join(sets)+'relation(9541222););out geom;'
for a in range(9):
    url=MIRRORS[a%3]
    try:
        req=urllib.request.Request(url,data=urllib.parse.urlencode({'data':body}).encode(),headers={'User-Agent':'personal-travel-map-builder/1.0'})
        d=json.load(urllib.request.urlopen(req,timeout=180)); break
    except Exception as e: print('retry',url.split('/')[2],str(e)[:60],flush=True); time.sleep(4*(a+1))
json.dump(d,open(os.path.join(OUT,'kyoto_nodes.json'),'w',encoding='utf-8'),ensure_ascii=False)
got={}
for e in d['elements']:
    if e['type']=='node': got.setdefault(e['tags']['name'],[]).append((e['lat'],e['lon']))
print('relations',[e['tags'].get('name') for e in d['elements'] if e['type']=='relation'])
for w,names in need.items(): print(w,'missing',sorted(names-set(got)),'dupes',{k:len(v) for k,v in got.items() if k in names and len(v)>1})
