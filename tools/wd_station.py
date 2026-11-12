# Look up station coordinates on Wikidata by Korean label (as displayed by Google Maps), restricted to Osaka area bbox.
import json, sys, urllib.request, urllib.error, urllib.parse, time
UA={'User-Agent':'personal-travel-map/1.0 (station lookup)'}
def get(url):
    for a in range(6):
        try:
            time.sleep(1.0)
            return json.load(urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=30))
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(5+a*5); continue
            raise
    raise RuntimeError('rate limited')
def lookup(name):
    base=name.replace(' 역','').replace('역','') if name.endswith('역') else name
    base=base.split('（')[0].strip()
    import re
    NUM={'이치':'1','잇':'1','니':'2','산':'3','욘':'4','고':'5','로쿠':'6','나나':'7','하치':'8','큐':'9'}
    alt=base
    for k,v in sorted(NUM.items(),key=lambda x:-len(x[0])):
        if alt.endswith(k+'초메'):
            alt=alt[:-len(k+'초메')]+' '+v+'초메'; break
    tries=[]
    for b in dict.fromkeys([base,alt]):
        tries+= [b+'역', b+' 역', b]
    for q in tries:
        r=get('https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=ko&uselang=ko&type=item&limit=7&search='+urllib.parse.quote(q))
        ids=[x['id'] for x in r.get('search',[])]
        if not ids: continue
        ents=get('https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims|labels&languages=ko|ja&ids='+'|'.join(ids))['entities']
        for i in ids:
            e=ents[i]; c=e.get('claims',{}).get('P625')
            if not c: continue
            v=c[0]['mainsnak'].get('datavalue',{}).get('value')
            if not v: continue
            lat,lng=v['latitude'],v['longitude']
            if 34.55<lat<34.85 and 135.40<lng<135.65:   # Osaka city area
                return {"lat":lat,"lng":lng,"wikidata":i,"ko":e['labels'].get('ko',{}).get('value'),"ja":e['labels'].get('ja',{}).get('value')}
        time.sleep(0.3)
    return None
if __name__=='__main__':
    for n in sys.argv[1:]: print(n, lookup(n))
