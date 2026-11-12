# 오사카·교토 맛집 지도

오사카 거주자가 유튜브 댓글로 추천한 맛집과 숙소 위치를 지도에 표시하고, 출발/도착을 골라 이동 방법(도보·대중교통, 소요시간, 요금)을 확인하는 정적 페이지.

- 지도: Google 내 지도(My Maps) 임베드 — https://www.google.com/maps/d/viewer?mid=1HcytTfswQ8eT6mKa0_MPwfZjCFWzHgI
  - 핀 데이터는 Google 시트(mymaps/places.tsv 를 붙여넣음)에서 가져옴. 숙소 추가 시 시트에 행 추가 → 내 지도 레이어 '데이터 업데이트'
- 관광지 28곳: 좌표·주소는 2026-11-12 Google 지도 장소 페이지에서 확인하고 Wikidata/OSM 좌표와 대조 (tools/verify_spots.py, tools/build_spots.py → data/spots.js)
- 지역 음영 13곳: 오사카는 OSM 町丁目 행정경계(admin_level=10)를 합침, 교토는 OSM에 町 경계가 없어 町 중심점을 감싼 대략 범위(기온은 OSM 역사지구 경계). tools/fetch_districts.py, fetch_kyoto_nodes.py, build_districts.py → mymaps/districts.tsv (WKT). © OpenStreetMap contributors (ODbL)
- 음영 켜기/끄기: 음영 있는 내 지도(mid 1HcytTfswQ8eT6mKa0_MPwfZjCFWzHgI)와 음영 레이어만 뺀 사본(mid 1iovZdjIqgczi0szkajegoqPq1BC9z0c)을 바꿔 끼움 — 두 지도에 같은 데이터를 유지할 것
- 가게 좌표·주소: 2026-11-12 Google 지도 장소 페이지에서 확인
- 대중교통/도보 시간·노선·요금: 2026-11-12 평일 오후 출발 기준으로 Google 지도 길찾기 화면에서 조회한 값 (실시간 값은 페이지의 Google 지도 버튼으로 확인)
- 경로선: 출발/도착을 고르면 Google 지도 길찾기 임베드(output=embed)를 표시 — 실시간 기준이라 저장값과 다를 수 있음

## 숙소 추가
`data/hotels.js`에 숙소를 추가한 뒤 `tools/` 스크립트로 경로를 다시 수집·빌드.
