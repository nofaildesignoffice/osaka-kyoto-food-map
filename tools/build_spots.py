# data/spots.js from Google-verified coords (spots_google.json) + text (spots_meta.json) + cross-check (spots_verified.json)
import json, os
H=os.path.dirname(os.path.abspath(__file__)); R=os.path.dirname(H)
G=json.load(open(os.path.join(H,'spots_google.json'),encoding='utf-8'))
M=json.load(open(os.path.join(H,'spots_meta.json'),encoding='utf-8'))
V={x['id']:x for x in json.load(open(os.path.join(H,'spots_verified.json'),encoding='utf-8'))}
city=lambda lat: 'kyoto' if lat>34.85 else 'osaka'
out=[]
for k,(gname,lat,lng,addr) in G.items():
    m=M[k]; wd=(V.get(k,{}).get('wikidata') or {}).get('qid')
    src=[{"label":"Wikidata","url":f"https://www.wikidata.org/wiki/{wd}"}] if wd and k not in ('arashiyama-bamboo',) else []
    out.append({"id":"spot-"+k,"type":"spot","city":city(lat),"name":m['name'],"nameJa":m['nameJa'],"area":m['area'],"emoji":m['emoji'],
                "address":addr or f"Google 지도 표시명: {gname}","lat":lat,"lng":lng,"notes":[m['desc']],"sources":src,"group":"관광지"})
with open(os.path.join(R,'data','spots.js'),'w',encoding='utf-8') as f:
    f.write('// 관광지: 좌표·주소 = 2026-11-12 Google 지도 장소 페이지 / Wikidata·OSM 좌표와 대조함 (tools/build_spots.py)\n')
    f.write('window.SPOTS = '+json.dumps(out,ensure_ascii=False,indent=1)+';\n')
print(len(out), sum(1 for o in out if o['city']=='osaka'),'osaka')
