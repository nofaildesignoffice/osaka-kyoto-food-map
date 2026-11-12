# Download OSM admin_level=10 (町丁目) boundaries, with geometry, for the wards we shade. Cached in tools/osm/.
import json, os, sys, time, urllib.request, urllib.parse
HERE=os.path.dirname(os.path.abspath(__file__)); OUT=os.path.join(HERE,'osm')
MIRRORS=['https://overpass.kumi.systems/api/interpreter','https://overpass.private.coffee/api/interpreter','https://overpass-api.de/api/interpreter']
WARDS={'osaka':['北区','中央区','浪速区','天王寺区','阿倍野区','西区','此花区','港区','都島区'],
       'kyoto':['東山区','下京区','中京区','右京区','北区','左京区','伏見区','上京区','南区','西京区']}
CITYNAME={'osaka':'大阪市','kyoto':'京都市'}
def q(query):
    for attempt in range(6):
        url=MIRRORS[attempt%len(MIRRORS)]
        try:
            req=urllib.request.Request(url,data=urllib.parse.urlencode({'data':query}).encode(),headers={'User-Agent':'personal-travel-map-builder/1.0'})
            return json.load(urllib.request.urlopen(req,timeout=180))
        except Exception as e:
            print('  retry',url,str(e)[:80]); time.sleep(4*(attempt+1))
    raise SystemExit('overpass failed')
for city,wards in WARDS.items():
    for w in wards:
        fn=os.path.join(OUT,f'{city}_{w}.json')
        if os.path.exists(fn): continue
        query=f'[out:json][timeout:170];area["name"="{CITYNAME[city]}"]["admin_level"="7"]->.c;area["name"="{w}"]["admin_level"="8"](area.c)->.w;relation["boundary"="administrative"]["admin_level"="10"](area.w);out geom;'
        d=q(query); json.dump(d,open(fn,'w',encoding='utf-8'),ensure_ascii=False)
        print(city,w,len(d['elements'])); time.sleep(2)
