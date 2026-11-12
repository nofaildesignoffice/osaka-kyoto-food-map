# Parse raw Google Maps directions panel text (raw_routes*.jsonl) into structured routes.
# Only values literally present in the captured text are extracted; anything missing stays None.
import json, re, sys, glob

TIME = re.compile(r'^(오전|오후)\s?\d{1,2}:\d{2}$')
DUR = re.compile(r'^(?:(\d+)시간\s*)?(?:(\d+)분)?$')


def minutes(s):
    h = re.search(r'(\d+)\s*시간', s)
    mm = re.search(r'(\d+)\s*분', s)
    if not h and not mm:
        return None
    return (int(h.group(1)) * 60 if h else 0) + (int(mm.group(1)) if mm else 0)


def dist_m(s):
    m = re.search(r'([\d.,]+)\s*(미터|km|킬로미터)', s)
    if not m:
        return None
    v = float(m.group(1).replace(',', ''))
    return round(v * 1000) if m.group(2) != '미터' else round(v)


def lines_of(text):
    return [l.strip() for l in text.split('\n') if l.strip()]


def split_lines(txt):
    out = []
    for part in [x.strip() for x in re.split(r'[-]|\s{2,}', txt) if x.strip()]:
        pieces = re.findall(r'.+?(?:선|号)(?=\S|$)', part)
        if pieces and ''.join(pieces).replace(' ', '') == part.replace(' ', ''):
            for pc in (p.strip() for p in pieces):
                if out and pc.startswith(('･', '・')):
                    out[-1] += pc
                else:
                    out.append(pc)
        else:
            out.append(part)
    return out


def parse_options(summary):
    """Transit alternatives from the summary list: duration, line names, first-option fare."""
    L = lines_of(summary)
    opts = []
    i = 0
    while i < len(L):
        if DUR.match(L[i]) and minutes(L[i]) is not None and i + 1 < len(L) and '~' in L[i + 1] and ('오전' in L[i + 1] or '오후' in L[i + 1]):
            o = {"min": minutes(L[i]), "lines": [], "fare": None, "from": None}
            j = i + 2
            if j < len(L) and not DUR.match(L[j]):
                o["lines"] = split_lines(L[j])
                j += 1
            while j < len(L) and not (DUR.match(L[j]) and j + 1 < len(L) and '~' in L[j + 1]):
                if '부터' in L[j] and o["from"] is None:
                    o["from"] = L[j].split('부터')[0].strip()
                fm = re.search(r'JP¥\s?([\d,]+)', L[j])
                if fm and o["fare"] is None:
                    o["fare"] = int(fm.group(1).replace(',', ''))
                if L[j].endswith('주변 탐색'):
                    break
                j += 1
            opts.append(o)
            i = j
        else:
            i += 1
    return opts


def parse_detail(detail):
    """Step-by-step legs of the first transit option."""
    L = lines_of(detail)
    res = {"total": None, "fare": None, "legs": [], "walkOnly": False}
    for l in L:
        m = re.search(r'\((\d+시간\s*\d*분?|\d+분)\)$', l)
        if m and res["total"] is None and ('오전' in l or '오후' in l):
            res["total"] = minutes(m.group(1))
        fm = re.match(r'요금:\s*JP¥\s?([\d,]+)', l)
        if fm:
            res["fare"] = int(fm.group(1).replace(',', ''))
    if '캘린더에 추가' not in L and any('도보 경로가 실제 상황과' in l for l in L):
        # Google returned walking as the transit answer (very short distance)
        for l in L:
            m = re.match(r'^(.+?)\(([\d.,]+\s*(?:미터|km))\)$', l)
            if m:
                res["walkOnly"] = True
                res["total"] = minutes(m.group(1))
                res["legs"].append({"mode": "walk", "min": minutes(m.group(1)), "m": dist_m(m.group(2))})
                break
        return res
    if '캘린더에 추가' not in L:
        res["incomplete"] = True
        return res
    L = L[L.index('캘린더에 추가') + 1:]
    # tokens: time, stopName, [address], legDesc..., time, stopName ...
    stops, segs, cur = [], [], None
    i = 0
    while i < len(L):
        if TIME.match(L[i]):
            name = L[i + 1] if i + 1 < len(L) else None
            stops.append({"time": L[i], "name": name})
            if cur is not None:
                segs.append(cur)
            cur = []
            i += 2
            continue
        if cur is not None:
            cur.append(L[i])
        i += 1
    if cur:
        segs.append(cur)
    for k, seg in enumerate(segs):
        if k + 1 >= len(stops):
            break
        a, b = stops[k]["name"], stops[k + 1]["name"]
        # drop the address line Google prints under the origin/destination name
        seg = [s for s in seg if not (s.startswith('일본 〒') or s.endswith(' 일본') or re.search(r'\w+ Ward, Osaka', s))]
        if not seg:
            continue
        if seg[0] == '도보':
            d = next((s for s in seg[1:] if '분' in s), '')
            res["legs"].append({"mode": "walk", "from": a, "to": b, "min": minutes(d), "m": dist_m(d)})
        else:
            line = seg[0]
            mins = next((minutes(s) for s in seg[1:] if DUR.match(s) and minutes(s) is not None), None)
            mst = next((re.search(r'정류장/역 (\d+)개', s) for s in seg if re.search(r'정류장/역 (\d+)개', s)), None)
            msid = next((re.search(r'정거장 ID:\s*(\S+)', s) for s in seg if re.search(r'정거장 ID:\s*(\S+)', s)), None)
            # Only treat as a ride when Google showed a ride duration AND a stop count for it
            nonstop = any(s.strip() == '(무정차)' for s in seg)
            if mins is not None and (mst or nonstop):
                res["legs"].append({"mode": "ride", "line": line, "from": a, "to": b, "min": mins,
                                    "stops": int(mst.group(1)) if mst else None, "nonstop": nonstop, "stationId": msid.group(1) if msid else None})
            else:
                res["legs"].append({"mode": "unknown", "from": a, "to": b, "raw": " / ".join(seg)[:200]})
    return res


def parse_walk(summary):
    L = lines_of(summary)
    for i, l in enumerate(L):
        if DUR.match(l) and minutes(l) is not None and i + 1 < len(L) and dist_m(L[i + 1]) is not None:
            via = L[i + 2] if i + 2 < len(L) and L[i + 2].endswith('경유') else None
            return {"min": minutes(l), "m": dist_m(L[i + 1]), "via": via}
    return None


def main(paths, out):
    routes = {}
    for p in paths:
        for line in open(p, encoding='utf-8'):
            r = json.loads(line)
            if 'mode' not in r:
                continue
            key = f"{r['o']}|{r['d']}"
            ent = routes.setdefault(key, {"o": r['o'], "d": r['d']})
            if r['mode'] == 'walking':
                ent["walk"] = parse_walk(r['summary'])
                ent["walkAt"] = r['at']
            else:
                d = parse_detail(r['detail'])
                d["options"] = parse_options(r['summary'])
                rides = [l for l in d["legs"] if l["mode"] == "ride"]
                clean = d["options"][0]["lines"] if d["options"] else []
                for idx, leg in enumerate(rides):
                    leg["raw"] = leg["line"]
                    cand = clean[idx] if idx < len(clean) else None
                    if cand and leg["raw"].startswith(cand):
                        leg["line"] = cand
                    else:
                        hit = next((c for c in clean if leg["raw"].startswith(c)), None)
                        leg["line"] = hit if hit else leg["raw"]
                        leg["lineUnverified"] = hit is None
                d["at"] = r['at']
                ent["transit"] = d
    # walking was collected for one direction only; reuse it for the reverse pair, flagged
    for key, ent in list(routes.items()):
        if not ent.get("walk"):
            rev = routes.get(f"{ent['d']}|{ent['o']}")
            if rev and rev.get("walk") and not rev.get("walkFromReverse"):
                ent["walk"] = dict(rev["walk"]); ent["walkAt"] = rev.get("walkAt"); ent["walkFromReverse"] = True
    for ent in routes.values():
        t = ent.get("transit")
        if t and t.get("walkOnly") and not ent.get("walk") and t["legs"]:
            ent["walk"] = {"min": t["legs"][0]["min"], "m": t["legs"][0]["m"], "via": None}
            ent["walkAt"] = t["at"]
    json.dump(routes, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    return routes


if __name__ == '__main__':
    rs = main(sorted(glob.glob(sys.argv[1])), sys.argv[2])
    print(len(rs), 'pairs')
