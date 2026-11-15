# -*- coding: utf-8 -*-
"""오사카 라멘 맛집 후보를 Claude·Codex 가 각각 웹 조사 → Google Places 로 장소 확정 → 둘 다 고른 같은 Place ID 만 채택.
결과: tools/menu_research/_ramen_pick.json"""
import json, os, sys
from concurrent.futures import ThreadPoolExecutor
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import menu_research as M

SCHEMA = {"type": "object", "additionalProperties": False, "required": ["shops", "note"], "properties": {
    "note": {"type": "string"},
    "shops": {"type": "array", "items": {"type": "object", "additionalProperties": False,
        "required": ["name_ja", "name_ko", "address_ja", "why_ko", "source_urls"],
        "properties": {"name_ja": {"type": "string"}, "name_ko": {"type": "string"}, "address_ja": {"type": "string"},
                       "why_ko": {"type": "string"}, "source_urls": {"type": "array", "items": {"type": "string"}}}}}}}

PROMPT = """오사카 시내 라멘 맛집을 웹 검색으로 조사해 10곳을 골라줘. 여행자가 갈 만한 곳으로,
숙소가 난바·닛폰바시·신세카이·사카이스지혼마치·기타하마 쪽이라 미나미(난바·신사이바시·닛폰바시)·텐노지·텐마·우메다 지역 위주.
기준: 타베로그 라멘 百名店(ラーメン 百名店 OSAKA) 선정, 또는 타베로그/구글 평점이 높고 여러 출처에서 유명하다고 확인되는 곳. 현재 영업 중인 곳만(폐업·이전 주의).
각 가게: name_ja(일본어 정식 상호+지점명), name_ko, address_ja(실제 주소), why_ko(선정 근거 한 줄), source_urls(실제로 연 페이지).
추측으로 가게를 만들지 말고, 확인한 곳만. 체인점 본점/지점 구분 정확히."""

def resolve(shop):
    j = M.gpost("https://places.googleapis.com/v1/places:searchText",
                "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.businessStatus,places.primaryType,places.types",
                {"textQuery": f"{shop['name_ja']} {shop['address_ja']}", "languageCode": "ja", "regionCode": "JP", "pageSize": 1})
    x = (j.get("places") or [None])[0]
    if not x or x.get("businessStatus") not in (None, "OPERATIONAL"): return None
    if "大阪" not in x.get("formattedAddress", ""): return None
    return x

if __name__ == "__main__":
    with ThreadPoolExecutor(2) as ex:
        fa = ex.submit(M.retry, M.claude, PROMPT, SCHEMA)
        fb = ex.submit(M.retry, M.codex, PROMPT, SCHEMA)
        a, b = fa.result(), fb.result()
    ra = {}; rb = {}
    for s in a["shops"]:
        x = resolve(s)
        if x: ra[x["id"]] = (s, x)
    for s in b["shops"]:
        x = resolve(s)
        if x: rb[x["id"]] = (s, x)
    both = [{"claude": ra[k][0], "codex": rb[k][0], "google": ra[k][1]} for k in ra if k in rb]
    json.dump({"claude": a, "codex": b, "agreed": both,
               "only_claude": [v[1]["displayName"]["text"] for k, v in ra.items() if k not in rb],
               "only_codex": [v[1]["displayName"]["text"] for k, v in rb.items() if k not in ra]},
              open(os.path.join(M.RAW, "_ramen_pick.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    for x in both: print("AGREED", x["google"]["displayName"]["text"], x["google"]["formattedAddress"], x["google"].get("rating"), x["google"].get("userRatingCount"))
    print("only claude:", [v[1]["displayName"]["text"] for k, v in ra.items() if k not in rb])
    print("only codex:", [v[1]["displayName"]["text"] for k, v in rb.items() if k not in ra])
