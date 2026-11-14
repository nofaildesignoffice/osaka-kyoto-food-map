# 오사카·교토 맛집 지도

오사카 거주자가 유튜브 댓글로 추천한 맛집과 숙소 위치를 지도에 표시하고, 출발/도착을 골라 이동 방법을 확인하는 정적 페이지.

## 2026-11-14 Google Maps Platform 전환
- 지도: Maps JavaScript API (AdvancedMarkerElement, mapId DEMO_MAP_ID, gestureHandling greedy). 키는 index.html의 GKEY — 콘솔에서 HTTP 리퍼러(nofaildesignoffice.github.io/*, 127.0.0.1:8766/*) + API 제한(Maps JavaScript / Routes / Places (New)).
- 도보: Routes API computeRouteMatrix / computeRoutes 를 브라우저에서 실시간 호출.
- 지하철+도보: Routes API는 일본 대중교통 미지원(Google 공식 FAQ: Routes API transit partners "except ... those in Japan"; 2026-11-14 직접 호출로도 확인). 그래서 NAVITIME Route(totalnavi) on RapidAPI(Basic 무료, 월 500회 hard limit)의 /route_transit 을 누를 때 브라우저에서 호출(CORS 허용 확인). 응답: 노선·승하차역(번호)·출구·환승·소요시간·운임(unit_0)·IC운임·지도 도형(shape=true). 한계: 철도는 시간표가 아닌 평균 소요시간, 버스 미포함(RapidAPI 제공 범위). 결과는 localStorage('nvcache')에 30일 보관(좌표 키 포함) — 같은 구간 재조회 방지.
- data/routes.js(예전에 Google 지도 화면에서 수집한 값)는 더 이상 페이지에서 쓰지 않음.
- 순위 ①②③: 맛집 카드에서 지정, localStorage('ranks')에 저장(기기별). 데이터 기본값은 places의 rank 필드.
- 숙소 선택 → 순위 맛집까지 순위 색 점선 + 도보 시간 라벨, 순위별 평균 도보 시간.
- 장소 정보: Places API (New) searchText 결과 중 우리 좌표 250m 이내만 채택 → 사진(최대 4장, 작성자 표시)·평점·영업시간·홈페이지·전화·Google 지도(예약) 링크.

- 지도: Google 내 지도(My Maps) 임베드 — https://www.google.com/maps/d/viewer?mid=1HcytTfswQ8eT6mKa0_MPwfZjCFWzHgI
  - 핀 데이터는 Google 시트(mymaps/places.tsv 를 붙여넣음)에서 가져옴. 숙소 추가 시 시트에 행 추가 → 내 지도 레이어 '데이터 업데이트'
- 관광지 28곳: 좌표·주소는 2026-11-12 Google 지도 장소 페이지에서 확인하고 Wikidata/OSM 좌표와 대조 (tools/verify_spots.py, tools/build_spots.py → data/spots.js)
- 지역 음영 13곳: 오사카는 OSM 町丁目 행정경계(admin_level=10)를 합침, 교토는 OSM에 町 경계가 없어 町 중심점을 감싼 대략 범위(기온은 OSM 역사지구 경계). tools/fetch_districts.py, fetch_kyoto_nodes.py, build_districts.py → mymaps/districts.tsv (WKT). © OpenStreetMap contributors (ODbL)
- 음영 켜기/끄기: 음영 있는 내 지도(mid 1HcytTfswQ8eT6mKa0_MPwfZjCFWzHgI)와 음영 레이어만 뺀 사본(mid 1iovZdjIqgczi0szkajegoqPq1BC9z0c)을 바꿔 끼움 — 두 지도에 같은 데이터를 유지할 것
- 가게 좌표·주소: 2026-11-12 Google 지도 장소 페이지에서 확인
- 2026-11-14 추가: 숙소 5곳(아고다 공유 링크 → 숙소명 확인 → Google 지도 좌표), 채팅 목록 가게 12곳 + 블로그 장어집 1곳. 한글 이름→가게 매칭은 Google 지도 검색 + Codex 웹 검수로 교차 확인 (tools/new_places_20261114.json). 나라 탭 추가
- 숙소↔맛집 경로: 2026-11-14 '지금 출발' 기준 Google 지도 길찾기 화면 수집 (tools/jobs_hotels.json → raw_routes_hotels.jsonl)
- 대중교통/도보 시간·노선·요금: 2026-11-12 평일 오후 출발 기준으로 Google 지도 길찾기 화면에서 조회한 값 (실시간 값은 페이지의 Google 지도 버튼으로 확인)
- 경로선: 출발/도착을 고르면 Google 지도 길찾기 임베드(output=embed)를 표시 — 실시간 기준이라 저장값과 다를 수 있음

## 숙소 추가
`data/hotels.js`에 숙소를 추가한 뒤 `tools/` 스크립트로 경로를 다시 수집·빌드.
내 지도 반영: `python tools/make_tsv.py` → mymaps/places.tsv를 시트 '오사카 교토 맛집 지도 데이터' A1에 붙여넣기 → 두 내 지도(음영/무음영)의 '맛집·숙소' 레이어에서 다시 가져오기 → 모든 항목 교체 → 새 분류 아이콘 지정.

## 2026-11-14 장소 추가·삭제, 리스트 사진
- 상단 **+ 추가**: 카테고리(맛집/숙소/관광지) + 자유 입력(이름·지역·설명·전체 구글 지도 링크) → Places API(New) Text Search(간사이 범위, 링크 좌표가 있으면 400m 안만) 후보 → + 로 추가. 일본어 이름·주소는 Place Details(ja)로 채움. 짧은 공유 링크(maps.app.goo.gl)는 브라우저에서 풀 수 없어 안내만 함.
- 상단 **− 삭제**: 맛집/숙소/관광지 탭 모달, − 로 표시 → 저장 시 반영, 취소 시 원래대로. 삭제한 기본 장소는 모달 아래에서 + 로 복원.
- 저장 위치: localStorage('added', 'removed') — **기기마다 따로**. 일행 모두에게 반영하려면 data/*.js에 넣어 커밋해야 함.
- 리스트 카드 아이콘 자리에 Google 지도 첫 사진(화면에 보일 때만 조회, 250m 일치 확인, Place ID는 보관·사진 이름은 3일 캐시). USJ·신사이바시스지처럼 넓은 장소는 일치하는 사진이 없어 아이콘 유지.
