# Fetch only the 町丁目 relations listed in districts_def.json (with geometry), per ward. Cache: tools/osm/sel_<city>_<ward>.json
import json, os, time, urllib.request, urllib.parse
HERE=os.path.dirname(os.path.abspath(__file__)); OUT=os.path.join(HERE,'osm'); os.makedirs(OUT,exist_ok=True)
MIRRORS=['https://overpass-api.de/api/interpreter','https://overpass.private.coffee/api/interpreter','https://overpass.kumi.systems/api/interpreter']
CITYNAME={'osaka':'大阪市','kyoto':'京都市'}
D=json.load(open(os.path.join(HERE,'districts_def.json'),encoding='utf-8'))
need={}
for d in D:
    for w,names in d['wards'].items(): need.setdefault((d['city'],w),set()).update(names)
def q(query):
    for a in range(9):
        url=MIRRORS[a%3]
        try:
            req=urllib.request.Request(url,data=urllib.parse.urlencode({'data':query}).encode(),headers={'User-Agent':'personal-travel-map-builder/1.0'})
            return json.load(urllib.request.urlopen(req,timeout=120))
        except Exception as e: print('  retry',url.split('/')[2],str(e)[:60],flush=True); time.sleep(3*(a+1))
    raise SystemExit('failed')
for (city,w),names in need.items():
    fn=os.path.join(OUT,f'sel_{city}_{w}.json')
    if os.path.exists(fn): continue
    rx='^('+'|'.join(sorted(names))+')$'
    d=q(f'[out:json][timeout:110];area["name"="{CITYNAME[city]}"]["admin_level"="7"]->.c;area["name"="{w}"]["admin_level"="8"](area.c)->.w;relation["boundary"="administrative"]["admin_level"="10"]["name"~"{rx}"](area.w);out geom;')
    json.dump(d,open(fn,'w',encoding='utf-8'),ensure_ascii=False)
    got={e['tags'].get('name') for e in d['elements']}
    print(city,w,'got',len(got),'missing',sorted(names-got),flush=True); time.sleep(2)
