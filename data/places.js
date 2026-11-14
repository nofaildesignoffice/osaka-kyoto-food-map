// 장소 데이터 — 좌표/주소는 2026-11-12 Google 지도 장소 페이지에서 직접 조회한 값.
// comment: 유튜브 댓글 캡처 이미지(4장)에서 옮겨 적은 전사(오타·구어체 유지). notes: 별도 출처로 확인한 사실만 기재.
// candidate:true → 댓글에 지점이 명시되지 않아 "후보"로만 표시.
window.PLACES = [
  {
    id: "harukoma-honten", type: "food", city: "osaka", group: "스시", emoji: "🍣", branchUnsure: true,
    name: "하루코마 본점", nameJa: "春駒 本店", area: "텐마 (天満)",
    address: "大阪府大阪市北区天神橋5-5-2", lat: 34.707734, lng: 135.5116005,
    menu: "스시",
    comment: "싸고 크고 존맛",
    notes: ["댓글엔 '하루코마(텐마)'만 적혀 있어 본점/지점 중 어디인지는 미확인 — 두 곳 모두 표시 (약 100m 거리)"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270103/27002205/" }]
  },
  {
    id: "harukoma-shiten", type: "food", city: "osaka", group: "스시", emoji: "🍣", branchUnsure: true,
    name: "하루코마 지점", nameJa: "春駒 支店", area: "텐마 (天満)",
    address: "大阪府大阪市北区天神橋5-6-8", lat: 34.7068306, lng: 135.5114674,
    menu: "스시",
    comment: "싸고 크고 존맛",
    notes: ["댓글엔 '하루코마(텐마)'만 적혀 있어 본점/지점 중 어디인지는 미확인 — 두 곳 모두 표시 (약 100m 거리)"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270103/27023038/" }]
  },
  {
    id: "sushi-center", type: "food", city: "osaka", group: "스시", emoji: "🍣",
    name: "스시센터 우라텐노지", nameJa: "すしセンター 裏天王寺", area: "텐노지 (天王寺)",
    address: "大阪府大阪市天王寺区堀越町13-6", lat: 34.6485886, lng: 135.5142928,
    menu: "우마키(장어 계란말이)",
    comment: "여기도 가성비 괜춘\n우마키(장어 계란말이) 꼭꼭 드시길\n부모님 마음처럼 부드럽고 걍 맛있음",
    notes: ["행렬이 자주 생기는 가게(타베로그 리뷰)", "우마키 현재 판매 여부는 미확인"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270203/27110196/" }]
  },
  {
    id: "nikudoushi", type: "food", city: "osaka", group: "고기", emoji: "🥩",
    name: "야키니쿠 니쿠도우시 우라난바점", nameJa: "焼肉 肉どうし 裏難波店", area: "난바 (難波)",
    address: "大阪府大阪市中央区難波千日前14-6 太星食器ビル別館 B区画", lat: 34.6638061, lng: 135.503264,
    menu: "서비스 사로인 (サービスサーロイン)",
    comment: "서비스살로인 강추\n밥에다가 등심이랑 노른자 올라가 있음\n말은 필요없음 다들...아시죠....",
    notes: ["예약 사이트 hamoni 가게 소개: '名物サービスサーロインを卵黄とご飯で味わえる' (2026-11-12 확인)"],
    sources: [{ label: "hamoni", url: "https://hamoni.jp/shop/BaIDS1CQR8WHmivXWw71" }, { label: "운영사", url: "https://oz-company.com/shop/nikudoushi-uranamba/" }]
  },
  {
    id: "genbe-abeno", type: "food", city: "osaka", group: "고기", emoji: "🥩",
    name: "겐베에 텐노지 아베노점", nameJa: "源兵衛 天王寺あべの店", area: "텐노지·아베노 (天王寺)",
    address: "大阪府大阪市阿倍野区阿倍野筋2-4-45", lat: 34.6433187, lng: 135.5126276,
    menu: "덩어리 고기 스테이크, 오이무침(きゅうり)",
    comment: "여기가 제 1등 맛집\n고기 통으로 구워주고 게다가 싸요...\n오이무침도 한국분한텐 좀 짤수도 있지만 전 매번 시킴",
    notes: ["댓글에 '텐노지, 난바' 두 곳이 적혀 있어 두 지점 모두 표시", "가장 가까운 역은 아베노역(타베로그)"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270203/27102430/" }]
  },
  {
    id: "genbe-namba", type: "food", city: "osaka", group: "고기", emoji: "🥩",
    name: "겐베에 난바점", nameJa: "源兵衛 なんば店", area: "난바 (難波)",
    address: "大阪府大阪市中央区難波千日前7-15", lat: 34.6634987, lng: 135.5041752,
    menu: "덩어리 고기 스테이크, 오이무침(きゅうり)",
    comment: "여기가 제 1등 맛집\n고기 통으로 구워주고 게다가 싸요...\n오이무침도 한국분한텐 좀 짤수도 있지만 전 매번 시킴",
    notes: ["댓글에 '텐노지, 난바' 두 곳이 적혀 있어 두 지점 모두 표시"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270202/27108460/" }]
  },
  {
    id: "sumikara", type: "food", city: "osaka", group: "고기", emoji: "🍢",
    name: "스미카라 스미마데 난바신사이바시점", nameJa: "炭焼きと焼き鳥 炭から隅まで 難波心斎橋店", area: "신사이바시 (心斎橋)",
    address: "大阪府大阪市中央区東心斎橋2-6-19 三ツ寺ギャラクシービル5号館 1F", lat: 34.6704726, lng: 135.5033343,
    menu: "야키토리 — 안창살 꼬치",
    comment: "야키토리집인데 여기 안창살꼬치 꼭 꼭 드세요\n제가 27년 인생에서 젤 부드럽고 고소한 안창살이었어요....가격도 별로 비싸지 않고 추천\n전자담배 흡연 가능🥹🥹",
    notes: ["'안창살 꼬치'의 정확한 일본어 메뉴명은 미확인"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270202/27134304/" }]
  },
  {
    id: "allegro-umeda", type: "food", city: "osaka", group: "피자·카페", emoji: "🍕", candidate: true,
    name: "아레그로 우메다점 (후보)", nameJa: "トラットリア ピッツェリア アレグロ 梅田店", area: "우메다 (梅田)",
    address: "大阪府大阪市北区曽根崎2-14-7 グランデ曽根崎ビル1F", lat: 34.7009583, lng: 135.5010896,
    menu: "피자, 멸치 브루스케타",
    comment: "피자가 맛있는데 여긴 치즈가 맛있어요\n그리고 멸치 브루스케타 꼭 시켜죠요",
    notes: ["댓글에 지역이 없어 어느 지점인지 미확인 — 오사카 시내 같은 이름의 피자집 3곳을 후보로 표시"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270101/27073823/" }]
  },
  {
    id: "allegro-temma", type: "food", city: "osaka", group: "피자·카페", emoji: "🍕", candidate: true,
    name: "아레그로 텐마점 (후보)", nameJa: "大衆イタリア食堂 アレグロ 天満店", area: "텐마 (天満)",
    address: "大阪府大阪市北区同心2-5-20 森下ビル1F", lat: 34.7025697, lng: 135.5138147,
    menu: "피자, 멸치 브루스케타",
    comment: "피자가 맛있는데 여긴 치즈가 맛있어요\n그리고 멸치 브루스케타 꼭 시켜죠요",
    notes: ["댓글에 지역이 없어 어느 지점인지 미확인 — 후보"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270103/27018209/" }]
  },
  {
    id: "allegro-namba", type: "food", city: "osaka", group: "피자·카페", emoji: "🍕", candidate: true,
    name: "아레그로 난바점 (후보)", nameJa: "トラットリア ピッツェリア アレグロ 難波店", area: "난바 (難波)",
    address: "大阪府大阪市中央区千日前2-6-6", lat: 34.6664345, lng: 135.5044933,
    menu: "피자, 멸치 브루스케타",
    comment: "피자가 맛있는데 여긴 치즈가 맛있어요\n그리고 멸치 브루스케타 꼭 시켜죠요",
    notes: ["댓글에 지역이 없어 어느 지점인지 미확인 — 후보"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270202/27108977/" }]
  },
  {
    id: "henrys-pizza", type: "food", city: "osaka", group: "피자·카페", emoji: "🍕",
    name: "헨리스 피자", nameJa: "Henry's PIZZA", area: "타니마치4초메 (谷町四丁目)",
    address: "大阪府大阪市中央区谷町4-2-2", lat: 34.6805967, lng: 135.5184751,
    menu: "미국식(뉴욕 스타일) 피자, 감자튀김",
    comment: "굴 유명한 verdy가 시작한 피자샵\n너ㅓ무 바삭바삭하고 맛있어요\n미국식피자라면 여기 1등\n감튀도 추천굿",
    notes: ["디자이너 VERDY가 만든 뉴욕 스타일 피자 가게(Time Out)", "완전 캐시리스 — 현금 불가(Time Out)", "타니마치4초메역 도보 약 3분"],
    sources: [{ label: "Time Out", url: "https://www.timeout.jp/osaka/ja/レストラン/henrys-pizza" }]
  },
  {
    id: "amoya", type: "food", city: "osaka", group: "피자·카페", emoji: "🍡",
    name: "아모야 미나미카스가 시텐노지점", nameJa: "あもや南春日 四天王寺店", area: "텐노지 (天王寺)",
    address: "大阪府大阪市天王寺区堀越町8-15 吉田ビル", lat: 34.6507216, lng: 135.513946,
    menu: "카린토 만쥬 (かりんとう饅頭)",
    comment: "카린토만쥬 너ㅓㅓ무 맛있음\n거기 젤 맛있음",
    notes: ["텐노지역에서 다니마치스지 북쪽으로 도보 약 5분(타베로그)"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270203/27056343/" }]
  },
  {
    id: "spanola", type: "food", city: "osaka", group: "피자·카페", emoji: "☕",
    name: "커피점 스파뇨라", nameJa: "珈琲店 スパニョラ", area: "우메다 (梅田)",
    address: "大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F", lat: 34.6991301, lng: 135.4990767,
    menu: "몽블랑 토스트",
    comment: "몽블랑 토스트 최고임\n몽블랑페스트가 올라온 토스트인데 걍 식빵이 쫄깃하고...\n오이시...\n흡연 가능 🥹🥹",
    notes: ["오사카역전 제3빌딩 지하 2층", "타베로그: 월~토 흡연 가능, 일·공휴일 금연"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270101/27010558/" }]
  },
  {
    id: "king-of-kings", type: "food", city: "osaka", group: "피자·카페", emoji: "🍨",
    name: "킹 오브 킹스", nameJa: "King of Kings（キングオブキングス）", area: "우메다 (梅田)",
    address: "大阪府大阪市北区梅田1-3-1 大阪駅前第1ビル B1F", lat: 34.6987126, lng: 135.4965419,
    menu: "프루트 파르페, 주류",
    comment: "사진이 넘 잘나와요\n벽이 유리로 되어있고 피아노 연주도 있음\n프루트 파르페 먹었는데 과일 가득 올려주시고 신선한 맛이나서 파르페인데도 시원함\n연업 23시까지하고 흡연가능\n주류도 종류 마니 있슴다",
    notes: ["⚠️ 댓글은 23시까지라고 했지만, 확인된 게시 정보는 12:00~22:30(L.O. 22:15), 일·공휴일 휴무", "오사카역전 제1빌딩 지하 1층, 기타신치역/니시우메다역 인근"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270101/27043454/" }]
  },
  {
    id: "jinbee", type: "food", city: "osaka", group: "피자·카페", emoji: "🥟",
    name: "교자노 진베에", nameJa: "ぎょうざのじんべえ", area: "난바 (難波)",
    address: "大阪府大阪市中央区難波千日前2-17", lat: 34.665107, lng: 135.5044994,
    menu: "가라아게, 시소(차조기) 교자",
    comment: "가라아게랑 시소(차조기?) 교자 진짜 맛있어요!\n2명으로 가서 시소교자 6인분 먹었음\n기본은 걍 기본이라 비교용으로 1인분만 시키세요..음....\n전자 담배만 흡연 가능🥹🥹",
    notes: ["공식 표기는 'ぎょうざのじんべえ'", "타베로그 표기: 가열식 담배 한정 분연", "근처역: 킨테츠닛폰바시·닛폰바시"],
    sources: [{ label: "타베로그", url: "https://tabelog.com/osaka/A2701/A270202/27117757/" }]
  }
];

// 숙소: 아고다 링크를 받으면 여기에 추가 (type: "hotel", agoda: "<url>")
window.PLACES.push(...(window.HOTELS || []));

// 2026-11-14 추가: origin 'list' = 사용자가 채팅으로 보낸 가게 이름(typed에 원문), 'blog' = 사용자가 보낸 네이버 블로그 캡처.
// 이름→가게 매칭은 Google 지도 한글/일본어 검색 + Codex 독립 조사로 교차 확인. 좌표·주소는 Google 지도 장소 페이지 값.
window.PLACES.push(...([
 {
  "id": "nedoko",
  "city": "osaka",
  "group": "장어",
  "emoji": "🍱",
  "name": "스미비야키 네도코 신사이바시 본점",
  "nameJa": "炭火焼 寝床 心斎橋本店",
  "area": "신사이바시 (心斎橋)",
  "address": "大阪府大阪市中央区東心斎橋2-6-11 三津寺リーズビル 2F",
  "lat": 34.6703997,
  "lng": 135.5040005,
  "menu": "지야키 장어(地焼きうなぎ), 장어 꼬치",
  "origin": "blog",
  "blog": "오사카에서 가장 좋아하는 지야키 장어 전문점, 오사카의 노포들과 최근 핫한 오사카의 장어 전문점들과는 차별화되는 특유의 식감을 느낄 수 있는 곳이다.",
  "notes": [
   "네이버 블로그 캡처의 타베로그 링크(27015767)로 가게 확인"
  ],
  "sources": [
   {
    "label": "타베로그",
    "url": "https://tabelog.com/kr/osaka/A2701/A270202/27015767/"
   }
  ],
  "type": "food",
  "comment": ""
 },
 {
  "id": "panel-cafe",
  "city": "kyoto",
  "group": "카페",
  "emoji": "☕",
  "name": "패널 카페 교토",
  "nameJa": "Panel Cafe 京都店",
  "area": "기온 시라카와 (祇園白川)",
  "address": "京都府京都市東山区常盤町165 ジェイ・プライド祇園白川 1階",
  "lat": 35.0051395,
  "lng": 135.772634,
  "menu": "",
  "origin": "list",
  "typed": "패널카페",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "uoshin-minami",
  "city": "osaka",
  "group": "스시",
  "emoji": "🍣",
  "name": "우오신 미나미점",
  "nameJa": "元祖ぶっち切り寿司 魚心 南店",
  "area": "난바·센니치마에 (千日前)",
  "address": "大阪府大阪市中央区千日前1-7-9 あじびる南 1F",
  "lat": 34.6680994,
  "lng": 135.503607,
  "menu": "",
  "origin": "list",
  "typed": "우오신미나미",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "kitada",
  "city": "kyoto",
  "group": "라멘",
  "emoji": "🍜",
  "name": "카이다시멘 키타다",
  "nameJa": "貝だし麺 きた田",
  "area": "교토역 (京都駅)",
  "address": "京都府京都市下京区北不動堂町570-3",
  "lat": 34.9872701,
  "lng": 135.7547545,
  "menu": "조개 육수 라멘",
  "origin": "list",
  "typed": "교토역 카이다시멘 키타다",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "goku-kawaramachi",
  "city": "kyoto",
  "group": "고기",
  "emoji": "🥩",
  "candidate": true,
  "name": "고쿠 교토 가와라마치점 (후보)",
  "nameJa": "WAGYU SUKIYAKI 極〜GOKU〜 京都河原町店",
  "area": "가와라마치 (河原町)",
  "address": "京都府京都市中京区大黒町46-5",
  "lat": 35.0083995,
  "lng": 135.7698789,
  "menu": "와규 스키야키",
  "origin": "list",
  "typed": "코쿠 고베규스키야키",
  "notes": [
   "'코쿠'는 와규 스키야키 체인 GOKU(極)로 보이지만 지점이 적혀 있지 않아 교토·오사카 지점을 후보로 표시",
   "공식 홍보 문구는 'A5 와규' — 고베규인지는 미확인"
  ],
  "type": "food",
  "sources": [],
  "comment": ""
 },
 {
  "id": "goku-dotonbori",
  "city": "osaka",
  "group": "고기",
  "emoji": "🥩",
  "candidate": true,
  "name": "고쿠 오사카 도톤보리점 (후보)",
  "nameJa": "WAGYU SUKIYAKI 極〜GOKU〜 道頓堀",
  "area": "도톤보리 (道頓堀)",
  "address": "大阪府大阪市中央区道頓堀1-8-5 こいさんセンタービル 1F2F",
  "lat": 34.6682838,
  "lng": 135.5022036,
  "menu": "와규 스키야키",
  "origin": "list",
  "typed": "코쿠 고베규스키야키",
  "notes": [
   "'코쿠'는 와규 스키야키 체인 GOKU(極)로 보이지만 지점이 적혀 있지 않아 교토·오사카 지점을 후보로 표시",
   "공식 홍보 문구는 'A5 와규' — 고베규인지는 미확인"
  ],
  "type": "food",
  "sources": [],
  "comment": ""
 },
 {
  "id": "tonemon",
  "city": "kyoto",
  "group": "돈카츠",
  "emoji": "🍖",
  "name": "미야가와 토네몬",
  "nameJa": "宮川豚衛門",
  "area": "미야가와초 (宮川町)",
  "address": "京都府京都市東山区西御門町440-10",
  "lat": 34.9984709,
  "lng": 135.7708535,
  "menu": "돈카츠",
  "origin": "list",
  "typed": "마야가와 토네몬",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "sashisu-namba",
  "city": "osaka",
  "group": "스시",
  "emoji": "🍣",
  "name": "스시 사카바 사시스 난바점",
  "nameJa": "すし酒場 さしす なんばウォーク店",
  "area": "난바 (なんばウォーク)",
  "address": "大阪府大阪市中央区千日前1丁目 虹の街5-11 なんばウォーク3番街南通り",
  "lat": 34.6669629,
  "lng": 135.5051421,
  "menu": "",
  "origin": "list",
  "typed": "스시사카바사시스 난바점",
  "notes": [
   "난바 지하상가 '난바워크' 안에 있음"
  ],
  "type": "food",
  "sources": [],
  "comment": ""
 },
 {
  "id": "momiji",
  "city": "osaka",
  "group": "오코노미야키",
  "emoji": "🥞",
  "name": "모미지",
  "nameJa": "お好み焼き もみじ",
  "area": "다니마치9초메 (谷町九丁目)",
  "address": "大阪府大阪市天王寺区生玉町9-19",
  "lat": 34.6664623,
  "lng": 135.5139638,
  "menu": "오코노미야키",
  "origin": "list",
  "typed": "모미지",
  "notes": [
   "'모미지'라는 이름의 가게가 많아, 구글 지도에서 같은 한글 이름으로 나오는 오코노미야키집으로 표시 — 다른 가게라면 알려주세요"
  ],
  "type": "food",
  "sources": [],
  "comment": ""
 },
 {
  "id": "hashiba-nikusara",
  "city": "osaka",
  "group": "고기",
  "emoji": "🥩",
  "name": "하시바케 니쿠사라",
  "nameJa": "羽柴家 肉皿",
  "area": "텐마 (天五横町)",
  "address": "大阪府大阪市北区天神橋5-6-23 一松食品センター 天五横町",
  "lat": 34.7075188,
  "lng": 135.5116608,
  "menu": "샤토브리앙",
  "origin": "list",
  "typed": "하시바케니쿠사라 고배",
  "tip": "샤토브리앙을 미리 예약하면 1인분 50% 할인 (보통 4,378엔 → 2,178엔, 세금 포함). 구글 예약이면 요청사항에 샤토브리앙 미리 예약이라고 적기. 예약 사이트(ResReserve) 조건: ① '샤토브리앙 반값' 플랜으로 전날까지 예약 — 반값은 1인분만, 다른 메뉴 3개 이상 주문 필요 ② '좌석만 예약' 플랜이면 전날까지 가게에 전화로 따로 알려야 함 (1팀 1개).",
  "sources": [
   {
    "label": "샤토브리앙 반값 예약 플랜",
    "url": "https://res-reserve.com/en/restaurants/148586-45948efc/plans/bd761015-b7f0-40c4-ba36-e0f6d359e977"
   }
  ],
  "type": "food",
  "notes": [],
  "comment": ""
 },
 {
  "id": "nidosando",
  "city": "osaka",
  "group": "야키토리",
  "emoji": "🍢",
  "name": "야키토리 니도산도 텐마점",
  "nameJa": "純けい焼鳥 ニドサンド 天満店",
  "area": "텐마 (天満)",
  "address": "大阪府大阪市北区天神橋5-2-6",
  "lat": 34.7073285,
  "lng": 135.5118408,
  "menu": "야키토리",
  "origin": "list",
  "typed": "야키토리니도산도",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "sukiyanen",
  "city": "osaka",
  "group": "오코노미야키",
  "emoji": "🥞",
  "name": "스키야넨",
  "nameJa": "好きやねん",
  "area": "나가호리바시 (島之内)",
  "address": "大阪府大阪市中央区島之内2-12-15",
  "lat": 34.671198,
  "lng": 135.507576,
  "menu": "오코노미야키",
  "origin": "list",
  "typed": "스끼야넨 : 오꼬노모야끼",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 },
 {
  "id": "sushi-kazu",
  "city": "osaka",
  "group": "스시",
  "emoji": "🍣",
  "name": "스시도코로 카즈",
  "nameJa": "寿司処 かず",
  "area": "우메다·도야마초 (堂山町)",
  "address": "大阪府大阪市北区堂山町8-16",
  "lat": 34.7036493,
  "lng": 135.5028341,
  "menu": "",
  "origin": "list",
  "typed": "스시도코로카주",
  "type": "food",
  "notes": [],
  "sources": [],
  "comment": ""
 }
]));
