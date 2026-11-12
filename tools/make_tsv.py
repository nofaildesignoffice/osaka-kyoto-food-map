# TSV for pasting into a Google Sheet that My Maps imports (lat/lng columns, verified data only).
import json, os, subprocess
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
js="const window={};"+open(os.path.join(ROOT,'data','hotels.js'),encoding='utf-8').read()+open(os.path.join(ROOT,'data','places.js'),encoding='utf-8').read()+";console.log(JSON.stringify(window.PLACES));"
P=json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True,encoding='utf-8').stdout)
cl=lambda s:(s or '').replace('\t',' ').replace('\n',' / ')
rows=[['이름','구분','위도','경도','일본어 상호','지역','추천 메뉴','댓글','메모','주소','링크']]
for p in P:
    kind='숙소' if p['type']=='hotel' else ('맛집 후보(지점 미확정)' if p.get('candidate') else '맛집 · '+p['group'])
    link=p.get('agoda') or (p.get('sources') or [{}])[0].get('url','')
    rows.append([p['name'],kind,str(p['lat']),str(p['lng']),p.get('nameJa',''),p.get('area',''),p.get('menu',''),cl(p.get('comment')),cl(' · '.join(p.get('notes',[]))),p['address'],link])
open(os.path.join(ROOT,'mymaps','places.tsv'),'w',encoding='utf-8').write('\n'.join('\t'.join(cl(c) for c in r) for r in rows))
print(len(rows)-1,'rows')
