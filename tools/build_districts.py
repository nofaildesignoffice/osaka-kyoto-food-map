# Build district shading polygons.
#  Osaka: union of OSM admin_level=10 町丁目 boundary relations (exact official-ish boundaries).
#  Kyoto: OSM has only 町 centre nodes -> convex hull of the listed 町 nodes + 120 m buffer ("대략 범위").
#         祇園 uses the OSM boundary=historic relation 9541222.
import json, os, glob, math, statistics
from shapely.geometry import LineString, Polygon, MultiPoint, mapping
import warnings; warnings.filterwarnings('ignore')
from shapely.ops import polygonize, unary_union, transform
H=os.path.dirname(os.path.abspath(__file__)); R=os.path.dirname(H)
D=json.load(open(os.path.join(H,'districts_def.json'),encoding='utf-8'))
def rel_polys(rel):
    lines=[LineString([(p['lon'],p['lat']) for p in m['geometry']]) for m in rel['members'] if m['type']=='way' and m.get('role') in ('outer','') and m.get('geometry')]
    return unary_union(list(polygonize(unary_union(lines))))
# metric helpers (local equirectangular)
def to_m(lat0): k=math.cos(math.radians(lat0)); return (lambda x,y,z=None:(x*111320*k,y*110540)), (lambda x,y,z=None:(x/(111320*k),y/110540))
osaka_rels={}
for fn in glob.glob(os.path.join(H,'osm','sel_osaka_*.json')):
    ward=os.path.basename(fn)[len('sel_osaka_'):-5]
    for e in json.load(open(fn,encoding='utf-8'))['elements']:
        osaka_rels[(ward,e['tags']['name'])]=e
K=json.load(open(os.path.join(H,'osm','kyoto_nodes.json'),encoding='utf-8'))['elements']
knodes={}
for e in K:
    if e['type']=='node': knodes.setdefault(e['tags']['name'],[]).append((e['lon'],e['lat']))
gion_rel=next(e for e in K if e['type']=='relation')
out=[]
for d in D:
    names=[(w,n) for w,ns in d['wards'].items() for n in ns]
    if d['city']=='osaka':
        geoms=[rel_polys(osaka_rels[k]) for k in names if k in osaka_rels]
        missing=[n for k in names for n in [k[1]] if k not in osaka_rels]
        g=unary_union(geoms); method='町丁目 경계 합침 (OSM 행정경계)'
        lat0=g.centroid.y; f,b=to_m(lat0)
        g=transform(b,transform(f,g).buffer(2).buffer(-2).simplify(4))  # close slivers between adjacent 町丁目 (river/road gaps <4 m)
    else:
        if d['id']=='gion':
            g=rel_polys(gion_rel); method='OSM 祇園 역사지구 경계'; missing=[]
        else:
            pts=[];missing=[]
            uniq=[knodes[n][0] for w,n in names if n in knodes and len(knodes[n])==1]
            cx=statistics.median(p[0] for p in uniq); cy=statistics.median(p[1] for p in uniq)
            for w,n in names:
                if n not in knodes: missing.append(n); continue
                pts.append(min(knodes[n],key=lambda p:(p[0]-cx)**2+(p[1]-cy)**2))
            f,b=to_m(cy)
            g=transform(b,transform(f,MultiPoint(pts)).convex_hull.buffer(120,quad_segs=6).simplify(6))
            method='町 중심점을 감싼 대략 범위 (OSM 町 위치 기준)'
    c=g.representative_point()
    out.append({**d,'method':method,'missing':missing,'center':[round(c.y,6),round(c.x,6)],'geojson':mapping(g),'wkt':g.wkt})
    print(d['id'],g.geom_type,round(transform(to_m(g.centroid.y)[0],g).area/1e4,1),'ha','missing',missing,'wkt',len(g.wkt))
js=[{k:v for k,v in o.items() if k not in ('wkt',)} for o in out]
open(os.path.join(R,'data','districts.js'),'w',encoding='utf-8').write('// 지역 음영 (tools/build_districts.py) — 경계 출처: © OpenStreetMap contributors (ODbL)\nwindow.DISTRICTS = '+json.dumps(js,ensure_ascii=False)+';\n')
def r6(w): 
    import re; return re.sub(r'(\d+\.\d{6})\d+',r'\1',w)
rows=[['지역','일본어','도시','구성 町丁目','범위 방식','WKT']]
for o in out:
    rows.append([o['ko'],o['ja'],'오사카' if o['city']=='osaka' else '교토',' · '.join(n for ns in o['wards'].values() for n in ns if n not in o['missing']),o['method'],r6(o['wkt'])])
open(os.path.join(R,'mymaps','districts.tsv'),'w',encoding='utf-8').write('\n'.join('\t'.join(r) for r in rows))
