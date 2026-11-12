import json,sys
jobs=json.load(open(sys.argv[1]))
n=int(sys.argv[2]) if len(sys.argv)>2 else 25
done=set()
for l in open('raw_routes.jsonl',encoding='utf-8'):
    r=json.loads(l)
    if 'mode' not in r or not (r.get('summary') or '').strip(): continue
    if r['mode']=='transit' and '캘린더에 추가' not in r.get('detail','') and '도보 경로가 실제 상황과' not in r.get('detail',''): continue
    done.add((r['o'],r['d'],r['mode']))
rem=[j for j in jobs if (j['o'],j['d'],j['m']) not in done]
json.dump(rem[:n],open('jobs_remaining.json','w')); print(len(rem),'remaining')
