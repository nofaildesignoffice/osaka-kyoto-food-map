# Build a KML for Google My Maps import from data/places.js + data/hotels.js (verified data only).
import json, re, os, subprocess, html
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
js = "const window={};" + open(os.path.join(ROOT,'data','hotels.js'),encoding='utf-8').read() + open(os.path.join(ROOT,'data','places.js'),encoding='utf-8').read() + ";console.log(JSON.stringify(window.PLACES));"
P = json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True,encoding='utf-8').stdout)
# My Maps native icon styles (same format My Maps uses when exporting)
STY = {'food':('1577','E53935'), 'cand':('1577','F9A825'), 'hotel':('1602','1E5BD6')}
def style(k):
    code,col=STY[k]; abgr='ff'+col[4:6]+col[2:4]+col[0:2]
    return f'<Style id="icon-{code}-{col}"><IconStyle><color>{abgr}</color><scale>1</scale><Icon><href>https://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href></Icon></IconStyle></Style>'
def pm(p):
    k = 'hotel' if p['type']=='hotel' else ('cand' if p.get('candidate') else 'food')
    code,col=STY[k]
    desc=[]
    if p.get('nameJa'): desc.append(p['nameJa'])
    if p.get('menu'): desc.append('추천: '+p['menu'])
    if p.get('comment'): desc.append('댓글: '+p['comment'].replace('\n',' / '))
    for n in p.get('notes',[]): desc.append('· '+n)
    desc.append('주소: '+p['address'])
    if p.get('agoda'): desc.append('아고다: '+p['agoda'])
    for s in p.get('sources',[]): desc.append(s['label']+': '+s['url'])
    d='<br>'.join(html.escape(x) for x in desc)
    return f'<Placemark><name>{html.escape(p["name"])}</name><description><![CDATA[{d}]]></description><styleUrl>#icon-{code}-{col}</styleUrl><Point><coordinates>{p["lng"]},{p["lat"]},0</coordinates></Point></Placemark>'
groups=[('오사카 맛집',[p for p in P if p['type']=='food' and not p.get('candidate')]),
        ('맛집 후보 (아레그로 지점 미확정)',[p for p in P if p['type']=='food' and p.get('candidate')]),
        ('숙소',[p for p in P if p['type']=='hotel'])]
out='<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>오사카·교토 맛집 지도</name>'+''.join(style(k) for k in STY)
for name,items in groups:
    if items: out+=f'<Folder><name>{html.escape(name)}</name>'+''.join(pm(p) for p in items)+'</Folder>'
out+='</Document></kml>'
fn=os.path.join(ROOT,'mymaps','osaka-kyoto-places.kml'); open(fn,'w',encoding='utf-8').write(out); print(fn, sum(len(i) for _,i in groups),'placemarks')
