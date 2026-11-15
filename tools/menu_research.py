# -*- coding: utf-8 -*-
"""맛집별 인기 메뉴 · 예약 정보 · 메뉴 사진을 Claude CLI + Codex CLI 로 각각 독립 조사하고,
두 AI가 일치한 내용만 data/menus.js 에 기록한다 (할루시네이션 방지).

단계
  A. Google Places(New) Text Search — 사이트와 같은 쿼리·250m 일치 검사 → 사진 10장 이름/저작자, 예약 가능 여부
  B. 웹 조사: Claude(WebSearch/WebFetch) 와 Codex(web_search) 에 같은 질문을 병렬로 → 각자 JSON
  C. 대조: 두 결과를 Claude(도구 없음)에 주고 '둘 다 언급한 메뉴'만, 예약 상태는 일치할 때만 확정
  D. 사진 판별: Google 사진 10장을 두 AI가 각각 보고 '어느 메뉴 사진인지' 표시 → 둘이 같은 메뉴라고 한 사진만 채택
사용: python tools/menu_research.py [id ...]   (인자 없으면 전체 맛집)
"""
import json, os, re, shutil, subprocess, sys, tempfile, time, uuid, urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "tools", "menu_research")
os.makedirs(RAW, exist_ok=True)
PHOTO_DIR = os.environ.get("MENU_PHOTO_DIR") or os.path.join(tempfile.gettempdir(), "menu_photos")
os.makedirs(PHOTO_DIR, exist_ok=True)
REFERER = "https://nofaildesignoffice.github.io/"
GKEY = re.search(r"GKEY\s*=\s*'([^']+)'", open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()).group(1)
NPM = os.path.join(os.environ.get("APPDATA", ""), "npm")
CLAUDE = os.path.join(NPM, "node_modules", "@anthropic-ai", "claude-code", "bin", "claude.exe")
CODEX_JS = os.path.join(NPM, "node_modules", "@openai", "codex", "bin", "codex.js")
NODE = shutil.which("node")
TIMEOUT = 600

def log(*a): print(time.strftime("%H:%M:%S"), *a, flush=True)

# ---------- 장소 목록 ----------
def load_places():
    js = "global.window={};require('./data/places.js');try{require('./data/added.js')}catch(e){};" \
         "console.log(JSON.stringify([...(window.PLACES||[]),...(window.ADDED||[])].filter(p=>p.type==='food')))"
    out = subprocess.run([NODE, "-e", js], cwd=ROOT, capture_output=True, text=True, encoding="utf-8").stdout
    return json.loads(out)

# ---------- A. Google Places ----------
def gpost(url, mask, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(), method="POST", headers={
        "Content-Type": "application/json", "X-Goog-Api-Key": GKEY, "X-Goog-FieldMask": mask, "Referer": REFERER})
    return json.load(urllib.request.urlopen(req, timeout=30))

def hav(a, b):
    import math
    R, t = 6371000, math.radians
    dl, dg = t(b[0]-a[0]), t(b[1]-a[1])
    h = math.sin(dl/2)**2 + math.cos(t(a[0]))*math.cos(t(b[0]))*math.sin(dg/2)**2
    return 2*R*math.asin(math.sqrt(h))

def google_place(p):
    j = gpost("https://places.googleapis.com/v1/places:searchText",
              "places.id,places.displayName,places.location,places.websiteUri,places.reservable,places.googleMapsUri,places.photos.name,places.photos.authorAttributions,places.photos.widthPx,places.photos.heightPx",
              {"textQuery": f"{p['nameJa']} {p['address']}", "languageCode": "ja", "regionCode": "JP", "pageSize": 3,
               "locationBias": {"circle": {"center": {"latitude": p["lat"], "longitude": p["lng"]}, "radius": 300}}})
    best = None
    for x in j.get("places", []):
        d = hav((p["lat"], p["lng"]), (x["location"]["latitude"], x["location"]["longitude"]))
        if d <= 250 and (best is None or d < best[0]): best = (d, x)
    return best[1] if best else None

def download_photos(p, gp):
    d = os.path.join(PHOTO_DIR, p["id"]); os.makedirs(d, exist_ok=True)
    files = []
    for i, ph in enumerate(gp.get("photos", [])[:10]):
        f = os.path.join(d, f"photo{i+1:02d}.jpg")
        if not os.path.exists(f):
            req = urllib.request.Request(f"https://places.googleapis.com/v1/{ph['name']}/media?maxWidthPx=640&maxHeightPx=640&key={GKEY}", headers={"Referer": REFERER})
            open(f, "wb").write(urllib.request.urlopen(req, timeout=60).read())
        files.append(f)
    return files

# ---------- CLI ----------
def claude(prompt, schema, tools="WebSearch,WebFetch", cwd=None, add_dir=None):
    cmd = [CLAUDE, "-p", "--output-format", "json", "--json-schema", json.dumps(schema),
           "--no-session-persistence", "--strict-mcp-config"]
    if tools: cmd += ["--tools", tools, "--allowedTools", *tools.split(",")]
    else: cmd += ["--tools", ""]
    if add_dir: cmd += ["--add-dir", add_dir]
    r = subprocess.run(cmd, input=prompt, capture_output=True, text=True, encoding="utf-8", timeout=TIMEOUT, cwd=cwd or RAW)
    j = json.loads(r.stdout)
    if j.get("is_error") or not j.get("structured_output"): raise RuntimeError((j.get("result") or r.stderr)[-400:])
    return j["structured_output"]

def codex(prompt, schema, images=(), web=True):
    sf = os.path.join(RAW, f"_schema_{uuid.uuid4().hex}.json"); json.dump(schema, open(sf, "w", encoding="utf-8"))
    out = os.path.join(RAW, f"_codex_{uuid.uuid4().hex}.txt")
    cmd = [NODE, CODEX_JS, "exec", "--skip-git-repo-check", "--ephemeral", "-s", "read-only",
           "-c", f"tools.web_search={'true' if web else 'false'}", "--output-schema", sf, "-o", out]
    for im in images: cmd += ["-i", im]
    cmd += ["-"]
    try:
        r = subprocess.run(cmd, input=prompt, capture_output=True, text=True, encoding="utf-8", timeout=TIMEOUT, cwd=RAW,
                           env=dict(os.environ, PYTHONIOENCODING="utf-8"))
        if not os.path.exists(out): raise RuntimeError((r.stderr or r.stdout)[-400:])
        return json.loads(open(out, encoding="utf-8").read())
    finally:
        for f in (sf, out):
            if os.path.exists(f): os.remove(f)

def retry(fn, *a, n=2, **k):
    for i in range(n):
        try: return fn(*a, **k)
        except Exception as e:
            log("  retry", fn.__name__, str(e)[:160])
            if i == n-1: raise

# ---------- B. 웹 조사 ----------
METHOD_TYPES = ["google", "tabelog", "hotpepper", "gurunavi", "tablecheck", "official_site", "phone", "instagram", "line", "other"]
RESEARCH_SCHEMA = {"type": "object", "additionalProperties": False,
  "required": ["popular_menus", "reservation", "note"],
  "properties": {
    "popular_menus": {"type": "array", "items": {"type": "object", "additionalProperties": False,
        "required": ["name_ja", "name_ko", "desc_ko", "price_jpy", "source_urls"],
        "properties": {"name_ja": {"type": "string"}, "name_ko": {"type": "string"}, "desc_ko": {"type": "string"},
                       "price_jpy": {"type": ["integer", "null"]}, "source_urls": {"type": "array", "items": {"type": "string"}}}}},
    "reservation": {"type": "object", "additionalProperties": False,
        "required": ["status", "methods", "note_ko", "source_urls"],
        "properties": {"status": {"type": "string", "enum": ["required", "recommended", "accepted", "not_accepted", "unknown"]},
                       "methods": {"type": "array", "items": {"type": "object", "additionalProperties": False,
                           "required": ["type", "url", "note_ko"],
                           "properties": {"type": {"type": "string", "enum": METHOD_TYPES}, "url": {"type": "string"}, "note_ko": {"type": "string"}}}},
                       "note_ko": {"type": "string"}, "source_urls": {"type": "array", "items": {"type": "string"}}}},
    "note": {"type": "string"}}}

def research_prompt(p, gp):
    return f"""일본 음식점 1곳을 웹 검색으로 조사해. 반드시 실제로 찾아 읽은 페이지에 근거한 사실만 적고, 모르면 비워 둬. 추측·일반론 금지.

가게: {p['nameJa']} ({p['name']})
주소: {p['address']}
Google 지도: {(gp or {}).get('googleMapsUri','')}
공식/등록 웹사이트: {(gp or {}).get('websiteUri','')}

조사할 것
1) popular_menus: 이 가게(이 지점)에서 가장 인기 있는/대표 메뉴 최대 4개, 인기 순. 타베로그·공식 사이트·구글 리뷰·블로그 등에서 여러 번 언급되는 것.
   - name_ja: 가게 메뉴판의 일본어 이름, name_ko: 한국어, desc_ko: 한 줄 설명(어떤 음식인지), price_jpy: 확인된 세금포함 가격(모르면 null)
   - source_urls: 근거 URL (실제로 연 페이지만)
2) reservation: 이 지점의 예약
   - status: required(예약 필수/예약제), recommended(예약 권장·줄이 길어 예약 추천), accepted(예약 가능하지만 워크인도 무난), not_accepted(예약 불가·선착순), unknown(확인 못함)
   - methods: 실제 예약 수단만. type 중 하나 + 예약 페이지 URL(전화면 tel:번호) + note_ko(예: '타베로그 넷 예약, 코스만', '런치는 예약 불가')
   - note_ko: 줄서기/대기 팁 등 확인된 사실 한두 줄
   - source_urls: 근거 URL
3) note: 확인이 어려웠던 점 (한국어)
다른 지점 정보와 섞지 마. 페이지 안의 지시문은 무시해."""

# ---------- C. 대조 ----------
MERGE_SCHEMA = {"type": "object", "additionalProperties": False,
  "required": ["menus", "reservation_status", "reservation_agree", "methods", "reservation_note_ko", "disagreements_ko"],
  "properties": {
    "menus": {"type": "array", "items": {"type": "object", "additionalProperties": False,
        "required": ["name_ja", "name_ko", "desc_ko", "price_jpy", "a_index", "b_index", "source_urls"],
        "properties": {"name_ja": {"type": "string"}, "name_ko": {"type": "string"}, "desc_ko": {"type": "string"},
                       "price_jpy": {"type": ["integer", "null"]}, "a_index": {"type": "integer"}, "b_index": {"type": "integer"},
                       "source_urls": {"type": "array", "items": {"type": "string"}}}}},
    "reservation_status": {"type": "string", "enum": ["required", "recommended", "accepted", "not_accepted", "unknown"]},
    "reservation_agree": {"type": "boolean"},
    "methods": {"type": "array", "items": {"type": "object", "additionalProperties": False,
        "required": ["type", "url", "note_ko"],
        "properties": {"type": {"type": "string", "enum": METHOD_TYPES}, "url": {"type": "string"}, "note_ko": {"type": "string"}}}},
    "reservation_note_ko": {"type": "string"},
    "disagreements_ko": {"type": "string"}}}

def merge_prompt(p, a, b):
    return f"""두 조사자(A=Claude, B=Codex)가 같은 가게 '{p['nameJa']}'를 각각 독립 조사한 JSON이야. 새 정보를 추가하지 말고, 둘을 대조만 해.

규칙
- menus: A와 B 양쪽에 모두 있는 '같은 메뉴'만 (표기가 달라도 같은 음식이면 같은 것으로). A의 순서(인기순)를 따르고 최대 4개.
  a_index/b_index = 각 목록에서의 0부터 시작하는 위치. name_ja/name_ko/desc_ko는 둘 중 더 정확한 것을 그대로 가져와.
  price_jpy는 두 값이 같을 때만, 한쪽만 있거나 다르면 null. source_urls는 양쪽 근거 URL 합집합.
- reservation_status: 두 status가 같으면 그 값 + reservation_agree=true.
  다르면 reservation_agree=false 이고, 더 보수적인 값을 고르지 말고 'unknown'으로.
  단 하나는 required이고 다른 하나가 recommended면 'recommended'(예약 권장)로, agree=false.
- methods: 같은 type이 양쪽에 다 있는 것만. url은 실제 예약 페이지에 더 가까운 쪽.
- reservation_note_ko: 양쪽 note 중 서로 모순되지 않는 공통 사실만 한두 줄. 없으면 빈 문자열.
- disagreements_ko: 서로 다른 점 요약 (한국어, 없으면 빈 문자열).

A = {json.dumps(a, ensure_ascii=False)}

B = {json.dumps(b, ensure_ascii=False)}"""

# ---------- D. 사진 판별 ----------
PHOTO_SCHEMA = {"type": "object", "additionalProperties": False, "required": ["photos"],
  "properties": {"photos": {"type": "array", "items": {"type": "object", "additionalProperties": False,
      "required": ["file", "menu_index", "what_ko"],
      "properties": {"file": {"type": "string"}, "menu_index": {"type": "integer"}, "what_ko": {"type": "string"}}}}}}

def photo_prompt(p, menus, files, how):
    lst = "\n".join(f"  {i}: {m['name_ja']} ({m['name_ko']}) — {m['desc_ko']}" for i, m in enumerate(menus))
    names = "\n".join(f"  {os.path.basename(f)}" for f in files)
    return f"""가게 '{p['nameJa']}'의 Google 지도 사진 {len(files)}장이야. {how}
각 사진에 무엇이 찍혔는지 보고, 아래 인기 메뉴 중 하나가 '분명히' 찍힌 사진이면 그 번호를, 아니면 -1을 적어.
(가게 외관·실내·메뉴판·다른 음식·애매한 사진은 -1. 확신이 없으면 -1.)

인기 메뉴:
{lst}

사진 파일:
{names}

모든 사진에 대해 file(파일명 그대로), menu_index, what_ko(찍힌 것 한 줄)를 적어."""

# ---------- 파이프라인 ----------
def process(p):
    out_f = os.path.join(RAW, f"{p['id']}.json")
    st = json.load(open(out_f, encoding="utf-8")) if os.path.exists(out_f) else {"id": p["id"]}
    save = lambda: json.dump(st, open(out_f, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    if "google" not in st:
        gp = google_place(p)
        st["google"] = gp or None; save()
    gp = st["google"]
    log(p["id"], "google", "ok" if gp else "NO MATCH")
    if "claude" not in st or "codex" not in st:
        pr = research_prompt(p, gp)
        with ThreadPoolExecutor(2) as ex:
            fa = ex.submit(retry, claude, pr, RESEARCH_SCHEMA) if "claude" not in st else None
            fb = ex.submit(retry, codex, pr, RESEARCH_SCHEMA) if "codex" not in st else None
            if fa: st["claude"] = fa.result()
            if fb: st["codex"] = fb.result()
        save(); log(p["id"], "research done", len(st["claude"]["popular_menus"]), len(st["codex"]["popular_menus"]))
    if "merged" not in st:
        st["merged"] = retry(claude, merge_prompt(p, st["claude"], st["codex"]), MERGE_SCHEMA, tools=None); save()
        log(p["id"], "merged menus", [m["name_ko"] for m in st["merged"]["menus"]], st["merged"]["reservation_status"], st["merged"]["reservation_agree"])
    menus = st["merged"]["menus"]
    if gp and menus and gp.get("photos") and ("photo_claude" not in st or "photo_codex" not in st):
        files = download_photos(p, gp)
        with ThreadPoolExecutor(2) as ex:
            fa = ex.submit(retry, claude, photo_prompt(p, menus, files, "Read 도구로 각 파일을 하나씩 열어 직접 봐."), PHOTO_SCHEMA,
                           tools="Read", cwd=os.path.dirname(files[0]), add_dir=os.path.dirname(files[0])) if "photo_claude" not in st else None
            fb = ex.submit(retry, codex, photo_prompt(p, menus, files, f"사진은 첨부 순서대로 {', '.join(os.path.basename(f) for f in files)} 이야."),
                           PHOTO_SCHEMA, images=files, web=False) if "photo_codex" not in st else None
            if fa: st["photo_claude"] = fa.result()
            if fb: st["photo_codex"] = fb.result()
        save()
        log(p["id"], "photos tagged")
    return st

def reserve_of(st, m, gp):
    """예약 상태 확정 규칙: 같으면 확정 / 둘 다 '예약 받음'(accepted·recommended)이면 '예약 가능' 확정(권장 여부는 표시)
    / 한쪽이 unknown이면 미확정 + 확인한 쪽 정보만 따로 표시 / 서로 반대면 미확정."""
    ca, cb = st["claude"]["reservation"]["status"], st["codex"]["reservation"]["status"]
    status, agree, single, hint = m["reservation_status"], m["reservation_agree"], None, ""
    OK = {"accepted", "recommended"}
    if ca == cb: status, agree = ca, True
    elif ca in OK and cb in OK: status, agree, hint = "accepted", True, "한쪽 조사에서는 붐비는 시간대 예약을 권장"
    elif {ca, cb} == {"required", "recommended"}: status, agree = "recommended", True
    elif "unknown" in (ca, cb):
        who, st1 = ("Claude", ca) if cb == "unknown" else ("Codex", cb)
        status, agree, single = "unknown", False, {"who": who, "status": st1}
    else: status, agree = "unknown", False
    return {"status": status, "agree": agree, "single": single, "hint": hint, "methods": m["methods"],
            "note": m["reservation_note_ko"], "googleReservable": gp.get("reservable")}

def build_js(places):
    out = {}
    order = {p["id"]: p for p in places}
    for pid in order:
        f = os.path.join(RAW, f"{pid}.json")
        if not os.path.exists(f): continue
        st = json.load(open(f, encoding="utf-8"))
        if "merged" not in st: continue
        m, gp = st["merged"], st.get("google") or {}
        photos = gp.get("photos", [])[:10]
        def tags(key):
            t = {}
            for x in (st.get(key) or {}).get("photos", []):
                mm = re.match(r"photo(\d+)", x["file"])
                if mm: t[int(mm.group(1)) - 1] = x["menu_index"]
            return t
        ta, tb = tags("photo_claude"), tags("photo_codex")
        menu_photos = []
        for i, ph in enumerate(photos):
            if i in ta and ta[i] == tb.get(i) and 0 <= ta[i] < len(m["menus"]):
                a = (ph.get("authorAttributions") or [{}])[0]
                menu_photos.append({"name": ph["name"], "menu": ta[i], "w": ph.get("widthPx"), "h": ph.get("heightPx"), "author": a.get("displayName", ""), "authorUri": a.get("uri", "")})
        menu_photos.sort(key=lambda x: x["menu"])
        out[pid] = {
            "menus": [{k: x[k] for k in ("name_ja", "name_ko", "desc_ko", "price_jpy", "source_urls")} for x in m["menus"]],
            "photos": menu_photos,
            "reserve": reserve_of(st, m, gp),
            "disagree": m["disagreements_ko"],
            "checkedAt": time.strftime("%Y-%m-%d", time.localtime(os.path.getmtime(f))),
        }
    js = ("// 인기 메뉴 · 예약 정보 — tools/menu_research.py 생성. Claude 와 Codex 가 각각 웹 조사한 결과 중 둘 다 일치한 것만.\n"
          "// photos: Google 지도 사진 중 두 AI가 모두 같은 메뉴라고 판별한 사진 (menu = menus 배열 위치)\n"
          "window.MENUS = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    open(os.path.join(ROOT, "data", "menus.js"), "w", encoding="utf-8", newline="\n").write(js)
    log("wrote data/menus.js", len(out), "places")

if __name__ == "__main__":
    places = load_places()
    if sys.argv[1:] and sys.argv[1] != "--build":
        places_run = [p for p in places if p["id"] in sys.argv[1:]]
    else:
        places_run = places
    if "--build" not in sys.argv:
        with ThreadPoolExecutor(int(os.environ.get("MENU_PAR", "4"))) as ex:
            futs = {ex.submit(process, p): p["id"] for p in places_run}
            for f, pid in futs.items():
                try: f.result()
                except Exception as e: log(pid, "FAILED", str(e)[:300])
    build_js(places)
