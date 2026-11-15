// 인기 메뉴 · 예약 정보 — tools/menu_research.py 생성. Claude 와 Codex 가 각각 웹 조사한 결과 중 둘 다 일치한 것만.
// photos: Google 지도 사진 중 두 AI가 모두 같은 메뉴라고 판별한 사진 (menu = menus 배열 위치)
window.MENUS = {
 "harukoma-honten": {
  "menus": [
   {
    "name_ja": "とろ",
    "name_ko": "참치 뱃살 초밥",
    "desc_ko": "참치 뱃살을 올린 니기리 초밥.",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/matome/14156/",
     "https://www.ekiten.jp/shop_711850/review/p2/",
     "https://www.ekiten.jp/shop_711850/review/p3/",
     "https://tabelog.com/osaka/A2701/A270103/27002205/dtlmenu/",
     "https://xn--88jtb2b9cgc8sdee4yf22343aopua.net/2022/03/05/harukoma/",
     "https://mahou-contents.mbs.jp/shops/4f03b3ae-02d4-497d-bd85-0f6790ffd00b"
    ]
   },
   {
    "name_ja": "上うなぎ（炙り）",
    "name_ko": "상급 장어 아부리 초밥",
    "desc_ko": "두툼한 장어를 구워 올린 니기리 초밥.",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/matome/14156/",
     "https://www.ekiten.jp/shop_711850/review/p3/",
     "https://www.ekiten.jp/shop_711850/review/p2/",
     "https://tabelog.com/osaka/A2701/A270103/27002205/dtlmenu/",
     "https://xn--88jtb2b9cgc8sdee4yf22343aopua.net/2022/03/05/harukoma/",
     "https://mahou-contents.mbs.jp/shops/4f03b3ae-02d4-497d-bd85-0f6790ffd00b"
    ]
   },
   {
    "name_ja": "赤だし",
    "name_ko": "아카다시(붉은 된장국)",
    "desc_ko": "건더기를 생선·조개·달걀 중에서 고를 수 있는 붉은 된장국(에키텐 리뷰)",
    "price_jpy": null,
    "source_urls": [
     "https://www.ekiten.jp/shop_711850/review/p3/",
     "https://tabelog.com/osaka/A2701/A270103/27002205/dtlmenu/",
     "https://mahou-contents.mbs.jp/shops/4f03b3ae-02d4-497d-bd85-0f6790ffd00b",
     "https://www.lemon8-app.com/@aiko214tiktok/7361974697959342598?region=jp"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJW7SUt7jmAGARQ_B9JgrRYVw/photos/AV-0GLfBV2MtU3gPtO8fmSzN_FJ5XQ1J900DsduGyTUmGXhC9HHOsZIsbTQ9qJFc1oe4870zS1pTFvgeQPIH0iXhsO4bCFWtVU_A1-IENweyMu4x0G4U4-ppY4uixPI__x8GzGsIGZMHGbbwWITRh7wL3EoQx5Ilo5acYDsWuONdu5PHNLsiR6bbX4OKV6SwWjI0XfbRuttm5MAy37o0wAIjpRaCzHuBW7xY1K8M1NwbMWvSrSMYvTPRE1Ur42m-kn7kmGAiw2Z-Dna8efGW1NHTK6QqrhQz4LUEySLZptw8m2-aboG_asGQiWw10T5iVcpuz48BFi1UCwr0oTqNxQ0TzRFRxBob6VKTkdEzRNjAeoYbAyk_Qo1EQx6KNisNjiX2s0R-QA5173k7XyqJPMnbr8efmqzQm42jE0-3rxwtnln1zQ",
    "menu": 2,
    "w": 4032,
    "h": 3024,
    "author": "Hung-Hsin Shih",
    "authorUri": "https://maps.google.com/maps/contrib/114466055511067050478"
   },
   {
    "name": "places/ChIJW7SUt7jmAGARQ_B9JgrRYVw/photos/AV-0GLegw40704hHc0eliGhSAQ73siZjTlb6nk-sxXfXsCw7g-BpyLXPvJljl5t1GW7jekQXDORC4LC55vTVNmSwxl1CGiCCCWIZvOvIupIqwJxSmsPerZ45ntCyrxx3BCa8fhJ9hXeLGPQOEms63QSlI1uICkQIYhNU2v8lutYD5qR_LKHwXrP0losv08PbmTm1F4Yrh2X9-egja-vv1G_6iZ_49U14ca0f9WgzvjTvtCmIwl7c-OwFgWYLU5rSvMVnn688w07wZWFXwLNXe0gFA47FyhKnhQMNmF_QeLPlNPtb7wR84PjJcxBrLGgyY2kAPyws9W-Qhoue9SIVxP1JdcRCnbh5fwjqHNlcr6ZLuNGhhDO-4iaebrCBlkHdMnfh_WExSkgvyB51TzW9WZakzOZDVzbZT7KB6RpwzJOgLOZtig",
    "menu": 2,
    "w": 4284,
    "h": 4284,
    "author": "FA8103 FA8103",
    "authorUri": "https://maps.google.com/maps/contrib/117682426412807495225"
   }
  ],
  "reserve": {
   "status": "unknown",
   "agree": false,
   "single": {
    "who": "Codex",
    "status": "not_accepted"
   },
   "hint": "",
   "methods": [],
   "note": "줄을 서서 기다리는 경우가 있다는 후기가 양쪽에 모두 있음. 확인된 예약 수단은 없음.",
   "googleReservable": false
  },
  "disagree": "예약 상태: A는 타베로그 가게 페이지를 열지 못해 unknown으로 둠(검색 요약에는 '예약 불가'로 나왔지만 직접 확인 못 함). B는 타베로그 본점 페이지에 예약 불가로 적혀 있다며 not_accepted로 봄. 메뉴: A의 まぐろ(참치 붉은살)는 B에 없음. 아카다시는 A가 생선·조개·달걀 중 건더기를 고르는 메뉴로, B는 '赤だし あさり'(바지락, 본점 한정)로 적어 표기가 다름. A는 とろ를 주토로로 봤지만 B는 그냥 참치 뱃살이라고만 함. 장어는 B만 '炙り(구운)'라고 적음. 인기 순서: A는 とろ가 먼저, B는 上うなぎ가 먼저. 가격: 양쪽 다 null이지만 A는 예전 리뷰나 캡션에 나온 가격(とろ ¥400, 上うなぎ ¥450 / 鰻 400円)을 적어 둠.",
  "checkedAt": "2026-11-15"
 },
 "harukoma-shiten": {
  "menus": [
   {
    "name_ja": "うなぎ",
    "name_ko": "장어 초밥",
    "desc_ko": "장어를 올린 니기리 초밥. Retty 리뷰에는 '우나기(나미)', 에키텐 리뷰에는 '조 우나기'로 나오며, 에키텐에서는 여러 리뷰가 추천함",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100000196764/",
     "https://www.ekiten.jp/shop_711852/review/",
     "https://tabelog.com/osaka/A2701/A270103/27023038/dtlmenu/",
     "https://ameblo.jp/s-machami/entry-10627792352.html",
     "https://sasatte.net/food/harukoma/",
     "https://tabelog.com/osaka/A2701/A270103/27023038/dtlrvwlst/B43068922/?type=0"
    ]
   },
   {
    "name_ja": "とろ",
    "name_ko": "참치 뱃살(도로) 초밥",
    "desc_ko": "두툼한 참치 뱃살을 올린 초밥으로, 방문 후기에서 식감과 맛을 호평.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100000196764/",
     "https://www.ekiten.jp/shop_711852/review/",
     "https://tabelog.com/osaka/A2701/A270103/27023038/dtlmenu/",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100000196764/",
     "https://ameblo.jp/s-machami/entry-10627792352.html",
     "https://tabelog.com/osaka/A2701/A270103/27023038/dtlrvwlst/B43068922/?type=0"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJOeauqbjmAGARLlrTb0d19mM/photos/AV-0GLcE2bLR0ji7W40A-lWiT-rHlpReEtQhqcd4cA53zXGcp9qL2tdKMP3cwBtpz8O4QZeCRFhJAuCrfQq4zCnDRsp2WbdLedmiEsjEjo-_cVIpoGzp3st40S7QQLYQvqOlmMrMkRHMCXb5Zub31nTw9QG4IOmT4RR_Em6KMohAQ2_2p1tlYLjTdHKwldWJR2m_yEG-Bxn1k8re5v1DF2AYMtNr_hrgP05uSGsfcCupWV6uJ8obqI1-sGh7pdqPLDPX7-aw2K7KjU4Nm201hJrYl1T4fZStXsEqHOuj_nEFuku3IwmklNyqC1SkFwjbBHpuCWPmgv4aJxiBqN5zcVJE3__7GXdhDJlyNYw8fq-KZFWyMTzmb7GMo_M-ZS7tMgLsHbXEd16qAzwSATH5i9XiId7dweWMIG-qUP9GH59CTao20g",
    "menu": 0,
    "w": 4320,
    "h": 2644,
    "author": "스톤",
    "authorUri": "https://maps.google.com/maps/contrib/107313539927574390475"
   },
   {
    "name": "places/ChIJOeauqbjmAGARLlrTb0d19mM/photos/AV-0GLdq97g440cMfmlWQfvaLru0c_lTHrOZanWqU2CmqQ2qBNhPEUBNebOMH2EGEBNJnWQl5AYZWqnqA4ClF6MohUi9yyHLlJDyNXiNm2ucYiZ1CHNU_hNVqLEJa5M8Whpf-Vk8zpXiaNKjYT7wG0INJ-2Z1aO-6HrvjjVQn9dZWDV-IZ1gX8Zu-g10LjqML0NoAoFNZbLn8uq62dcxclDuiiAKHNSpjcA9bp9alBzc4FUvruL8s-TNDLVymI0E56-nCef0oudoiN_kmnFn8btEiXDvZal3aOTJv7Vefvav53jHARMjzNWXrs07kGHDhlpCi2-zsZBLX2AJxkFqC_uRNkNddJqNlyKHVxG0lq7bvBxMiJl-HuBEowhRnrvjbGFXVnKno-i64Ufyu_gjTk9-0MCS6WHmQRA",
    "menu": 1,
    "w": 4800,
    "h": 3600,
    "author": "まるますこ",
    "authorUri": "https://maps.google.com/maps/contrib/109151460996071313117"
   }
  ],
  "reserve": {
   "status": "unknown",
   "agree": false,
   "single": {
    "who": "Codex",
    "status": "not_accepted"
   },
   "hint": "",
   "methods": [],
   "note": "대기 줄이 생기는 가게로, 2026년 6월 방문 후기에서도 잠시 기다린 뒤 입장한 기록이 있음. 예약 접수 수단(연락처·예약 페이지)은 양쪽 모두 확인하지 못함.",
   "googleReservable": null
  },
  "disagree": "예약: A는 타베로그가 열리지 않아(403) 예약 가능 여부를 '확인 불가(unknown)'로 두었고, B는 타베로그를 근거로 '일반 식사 예약 불가, 3층 좌식석 연회만 예약 가능(not_accepted)'으로 판단함. 참조한 타베로그 페이지도 다름(A는 27002205로 추정, B는 27023038). 장어 메뉴: A는 일반 '우나기'(리뷰상 나미/조 둘 다 언급)로, B는 '上うなぎ（炙り）'(불에 구운 특상 장어)로 표기함. 메뉴 구성: A에만 전복(내장)·하마치가 있고, B에만 성게알(우니)이 있음. A는 에키텐의 '春駒南店'(주소·전화번호 동일)을 같은 가게로 보고 인용했는데, 지점명이 다른 점이 불확실하다고 적음. A는 리뷰상 니기리 가격대(2관 100~550엔)를 언급했고, B는 가격 정보가 없음. 대기 상황: 2026년 6월 후기를 A는 '8번째로 줄 서서 금방 입장', B는 '대기실에서 약 20분 대기'로 전함.",
  "checkedAt": "2026-11-15"
 },
 "sushi-center": {
  "menus": [
   {
    "name_ja": "魚屋刺し盛り",
    "name_ko": "생선회 모둠",
    "desc_ko": "날마다 달라지는 약 7종의 해산물을 담은 2인분 회 모둠.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/theme/200245269/",
     "https://retty.me/restaurant/100001470846/",
     "https://dancyu.jp/read/2025_00009831.html",
     "https://ameblo.jp/satolin-okirakunahibi2/entry-12756712999.html",
     "https://map.yahoo.co.jp/v3/place/8OCmf0Zb78Y/menu?filter=menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJH_4rUATdAGAR8cPcSpzJH5o/photos/AV-0GLcFZCbjl2GmanhTVgiTQ9Hb-13LHx4GW8nHw6aPvWiU9L8GJuvJChScDGGKB2bO9AJHNnrab3Bbm556Q_VxEVuZRfJaixzuIQdmLI8KJRalkloSsoXbESygo74wGjTea2W2Ry4aN4eiyzpB6AZWt-cNzxyISzzNf5kGfW-BVeWXmMMIaQk2GIodwCb6S5knDZlD75xcLDfP-YZUe2zsh7_6qIBsbC9ZMMuSY6MW34sWIY7NfIBZIqUO2VUd1f7gWOZH4JTVC4KiJt182b3jAz0ui-JnzDql-EgrtFotFfbZNGxb_2b8jQhOebNCjrRSJD16K6VC_v39QBmSniT6SOOK_Au0jSAImOwYrTlU5ydy8i6U95RrKoxohX8mL9GPYFAGHl2LU1zNxtHNWxV8TRlBGhZsxDZac57hMiTEB_TSEQ",
    "menu": 0,
    "w": 4282,
    "h": 3754,
    "author": "のんびりねこさん",
    "authorUri": "https://maps.google.com/maps/contrib/100329691737708259801"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그에 예약 불가로 나와 있습니다. 가게 앞 대기 명단에 이름을 적고 기다리는 방식입니다.",
   "googleReservable": null
  },
  "disagree": "양쪽에 다 있는 메뉴는 사시미 모둠 하나뿐입니다. 가격은 B만 1,100엔(2인분)을 적었고 A는 확인하지 못해 null로 두었습니다. 튀김은 A가 '活車海老の天ぷら'(활 보리새우 튀김), B가 'サービス天ぷら'(638엔 모둠 튀김)를 골랐습니다. A가 둘이 같은 메뉴인지 알 수 없다고 적어서 같은 메뉴로 묶지 않았습니다. 마구로 삼매(654엔)와 정어리 니기리(165엔)는 A에만, 명물 육수 두부는 B에만 있습니다. 예약 쪽은 B만 dancyu 기사를 근거로 '개점 30분 전 대기 명단 게시'를 적었습니다. A만 붐비는 정도(평일 14시 전 10명 넘게 줄, 저녁 8시쯤 2~5팀 대기)와 출처마다 다른 영업시간을 적었습니다.",
  "checkedAt": "2026-11-15"
 },
 "nikudoushi": {
  "menus": [
   {
    "name_ja": "名物サーロイン",
    "name_ko": "명물 서로인",
    "desc_ko": "직원이 눈앞에서 구워 주는 커다란 서로인 한 장으로, 매장에서 명물로 소개하는 메뉴.",
    "price_jpy": 1098,
    "source_urls": [
     "https://hamoni.jp/shop/BaIDS1CQR8WHmivXWw71",
     "https://tabelog.com/en/osaka/A2701/A270202/27124795/",
     "https://tabelog.com/en/osaka/A2701/A270202/27124795/dtlmenu/",
     "https://tabelog.com/en/osaka/A2701/A270202/27124795/dtlrvwlst/",
     "https://tabelog.com/osaka/A2701/A270202/27124795/dtlmenu/",
     "https://www.hotpepper.jp/strJ001277727/",
     "https://suzakijunichi.com/nikudoushi-uranamba/"
    ]
   },
   {
    "name_ja": "和牛ユッケ",
    "name_ko": "와규 육회",
    "desc_ko": "달걀노른자를 올린 와규 육회로, 매장 소개와 방문 후기에서 대표 메뉴로 언급됨.",
    "price_jpy": 1408,
    "source_urls": [
     "https://hamoni.jp/shop/BaIDS1CQR8WHmivXWw71",
     "https://tabelog.com/en/osaka/A2701/A270202/27124795/",
     "https://tabelog.com/en/osaka/A2701/A270202/27124795/dtlmenu/",
     "https://tabelog.com/osaka/A2701/A270202/27124795/",
     "https://tabelog.com/osaka/A2701/A270202/27124795/dtlmenu/",
     "https://suzakijunichi.com/nikudoushi-uranamba/"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "tabelog",
     "url": "https://yoyaku.tabelog.com/yoyaku/net_booking_form/index?rcd=27124795",
     "note_ko": "타베로그 온라인 예약 페이지. 5명 이상은 전화로 예약."
    },
    {
     "type": "phone",
     "url": "tel:+81666309229",
     "note_ko": "공식 사이트에 나온 예약 전화(06-6630-9229). 타베로그에는 050-5600-7577로도 나옴."
    }
   ],
   "note": "예약 가능하며 타베로그 온라인 예약을 받음. 5명 이상은 전화로 예약.",
   "googleReservable": true
  },
  "disagree": "메뉴: A는 厚切り上塩タン·和牛厚切りハラミ를 1·2위로 넣었으나 B에는 없음. B의 霜降りもも肉山椒おろしポン酢는 A에 없음. 서로인 이름은 A가 영문판에서 추정한 'サービスサーロイン', B는 일본어판 표기 '名物サーロイン'. A는 서로인을 스키야키식으로 구워 노른자·밥과 먹는다고 설명함. 예약: A는 전화번호로 타베로그 050-5600-7577을 넣었고 B는 공식 06-6630-9229를 넣음. A는 Hamoni(AutoReserve) 예약 경로를 추가로 들었고, B는 핫페퍼에 현재 일반 예약을 받지 않는다고 나와서 예약 수단에서 뺌. A는 개인실(최대 6명)·통대관(최대 50명) 정보를 적음. 인기 순서는 A는 리뷰 언급 빈도 기준(표본 적음), B는 확정된 인기순이 아니라고 밝힘.",
  "checkedAt": "2026-11-15"
 },
 "genbe-abeno": {
  "menus": [
   {
    "name_ja": "塊肉ステーキ",
    "name_ko": "덩어리 고기 스테이크",
    "desc_ko": "매일 30블록 이상 준비된 350g 이상의 국산 와규 붉은살 덩어리 중에서 원하는 부위·크기를 골라 통째로 구워 주는 간판 메뉴(무게 단위 판매)",
    "price_jpy": null,
    "source_urls": [
     "https://aumo.jp/spots/81842e7b21",
     "https://aumo.jp/articles/5485084",
     "https://tabelog.com/en/osaka/A2701/A270203/27102430/",
     "https://tabelog.com/en/osaka/A2701/A270203/27102430/dtlrvwlst/",
     "https://tabelog.com/osaka/A2701/A270203/27102430/dtlmenu/",
     "https://map.yahoo.co.jp/v3/place/qFTlf0yyLtg/menu",
     "https://ameblo.jp/fukutarowing/entry-12342290958.html"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJ15tZUO7dAGAROGwk7PHjag4/photos/AV-0GLfVKwb9JGJmrElAxXpKZ9N2TU555gxpd4pmHc3WnlaJXiafipDL9Zq28enWBladFgJP7yy5SsG4EFc3WjSpwrKOjUJOQnukYLtJO66CS82ojwrwk_Rbggm7-uoO8eb09imwTeo7wqe-vTi-tcbL-cHcmgotE9KvZqQtcKKHQGxS_xu17yZ-OjXNuzbEsUQ_hf6r_-ptZ6deY57Ni58aAslTYR2Gp2Aqw7eQs3nTNPNW2PpavsaifaFUu2TMwNqZCIqld0Rel8h3buA6_9egjlSNVeGQZ2uchUxUvZLS1bEhuc60xpwFZjW48XRqCvSWJQdnqhMtHOwJosYIMF1UiEWMjOpHQuLutogWCKg-TUzisW_KMlb3v_abhtae0EKGENyihNY8TN6i7crm21cNU3UMRbE",
    "menu": 0,
    "w": 1280,
    "h": 852,
    "author": "源兵衛 天王寺あべの店",
    "authorUri": "https://maps.google.com/maps/contrib/100332260051039690221"
   },
   {
    "name": "places/ChIJ15tZUO7dAGAROGwk7PHjag4/photos/AV-0GLd9T3UCUmY4s0oumW0H4reoKgXhbcQkgi9R4qbctpi_ZJ8DfW5GedrlMgTNixK-5GCCs4090thWhMJKRDF6CMZ1R6nPXfWgC0B2ElYcmfKuOVFtmKVsUzECnG7TUa73kpz2LeAL0iCxD3TPGY1Pc9thJf6ntgQLHrIasxvDAr0Lz9SaKeWkVriohScHj2CjtEhqbrWxlez5MtWtbn_8ONvXxdjvs-Vo_Qam70gzCHIVCUc0ZVTHT2VQGfELrYQgklG_OK8JTpfCsGxE2u8TEJCyzoQEsb-Oa2D_uzpn9wRFbh53ydTflLhdaSgnCy0-ELhqegw-F5V351rfmxuJ8ZDGlFwWAnDQir6ft95UEHadR1vtbPs8YK3NRdlExz2obo7Hl5nmMb0tGDdzvNztNepfLgLq__bRwSyoIq8trh122w",
    "menu": 0,
    "w": 4800,
    "h": 3600,
    "author": "タロ（熊本四條畷太郎）",
    "authorUri": "https://maps.google.com/maps/contrib/109734733188618696975"
   },
   {
    "name": "places/ChIJ15tZUO7dAGAROGwk7PHjag4/photos/AV-0GLeQ-n9cS7qAGR4T7KuBalH_K4PrHAPZ1qabaymDE05pc94kePN0GNmh7q-b4NMrBMXSl6qybBUfYwiJ23MAfeBRB1JC8YGTG2gGl_SYRJN7L4SVvvobjpKor5byIXdxe65n3K9sj2jMonOyOU4VZTjxTPTY8jxPfVLxRVnM_CFl7XKylzY03ajh-Vz2u51Idw8TbHvBYLXJI6tbtF_7sgjcm7JPwWDeubH9UUnU6CIha8p2e38Twq8JcglCqOBCLFcALBSi5O3PyQkPy3oR149BeK4hennrRG7vkcfdDE382vyJbeagRTk5cdALgGA-BxoXMVAkCPFdvJLgg9CYQOz25MZU-VpZqUUTWHXHkolqFbEgW3ej4qM4QQfCT5RZlxbu9GCHRj3Tx_7qdIFZFSnjTiTpGYus7GWNOQxjHdJjHA",
    "menu": 0,
    "w": 4800,
    "h": 3600,
    "author": "任日岑",
    "authorUri": "https://maps.google.com/maps/contrib/111203330513965101640"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:050-5595-5650",
     "note_ko": "타베로그에 예약·문의 번호로 기재. 10명 이상 단체·대관 예약은 전화로 문의"
    }
   ],
   "note": "예약은 18~20시에 몰리고 20시 이후가 비교적 잡기 쉬움. 웹 예약이 안 되거나 예약이 없어도 입장 가능한 경우가 있음.",
   "googleReservable": true
  },
  "disagree": "메뉴: B는 차가운 무즙 소바(消化促進！冷たいおろしそば)와 소 내장·힘줄 조림(にこみ)도 대표 메뉴로 넣었지만, A는 리뷰 한 건에서만 언급됐다며 뺐음. 스테이크 설명: A는 와규 붉은살 덩어리를 부위·크기로 골라 무게 단위로 판매한다는 점을, B는 저온에서 천천히 익혀 30분 이상 걸린다는 점을 강조함. 가격: A는 10g당 121엔부터(타베로그 영어판, 세금 포함 여부 불명), B는 세금 포함 10g당 176엔부터(350g 6,160엔 예시)로 서로 다름. 전화번호: A는 타베로그 예약용 050-5595-5650, B는 매장 번호 070-9455-3561. 예약 수단: A는 ebica 웹 예약과 인스타그램(@genbe_abeno)을, B는 타베로그 인터넷 예약을 적었고, B는 ebica 페이지를 403 오류로 확인하지 못해 뺐음. A만 22시 이후 5% 심야 요금, 혼잡 시 이용 시간 제한, 코스 정보가 서로 맞지 않는다는 점(코스 4종 6,500엔부터 vs 현재 코스 없음)을 적음.",
  "checkedAt": "2026-11-15"
 },
 "genbe-namba": {
  "menus": [
   {
    "name_ja": "塊肉ステーキ",
    "name_ko": "덩어리 고기 스테이크",
    "desc_ko": "원하는 크기의 소고기 덩어리를 골라 굽는 대표 메뉴로, 조리에 30분 이상 걸립니다.",
    "price_jpy": null,
    "source_urls": [
     "https://aumo.jp/articles/5352408",
     "https://retty.me/theme/100294613/",
     "https://retty.me/theme/200245200/",
     "https://tabelog.com/osaka/A2701/A270202/27108460/dtlmenu/",
     "https://ameblo.jp/yamachang-1963/entry-12833842365.html",
     "https://www.hotpepper.jp/strJ001210238/"
    ]
   },
   {
    "name_ja": "名物 にこみ",
    "name_ko": "명물 소내장·힘줄 조림",
    "desc_ko": "소내장과 소힘줄을 레드와인과 육수로 푹 끓인 요리입니다.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/theme/200245200/",
     "https://retty.me/theme/100294613/",
     "https://tabelog.com/osaka/A2701/A270202/27108460/dtlmenu/",
     "https://ameblo.jp/yamachang-1963/entry-12833842365.html",
     "https://map.yahoo.co.jp/v3/place/HTmZxQj-ZfE/menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJb7peR8LnAGAR5XyI7m81_nk/photos/AV-0GLewbvU2sZnqzKBna9znzMAItvpXEUsdW_eRUjRYH878Nf_7bFjKsv1xmcF1cV6Yd77HJZpTOWwBT8kw5gOFDZV7pmlYOUT98iNoBL2Si2nCtMgpSksIHeM83RhES5TGruSF0RLTNW_jbcBOBQcmvh9YstaRXarGcqEVFNKPxCR9_VgrJlXd_sS6-OUyV5H8wxH4ruQZOw191Zcn6gS4Br3fa2EJbYuwzPR11XGybFX8ExDV2jJBy-TUDf0Jl6C7KNHB5WuJdQ99PvsNocj2ilZomZr1TG8pfBb6SQrD0PRg_uVhyMK4kv1JdJoMLTlJSY6hax6T_Dmzh_uBB7ZRF56QDdj_n87fJs8dbxy9GzJhAi-CMWADVA2h3Qc2qxR-G4I7UHajZBCmlRa_g9yP7iF6vQk",
    "menu": 0,
    "w": 1568,
    "h": 883,
    "author": "源兵衛 なんば店",
    "authorUri": "https://maps.google.com/maps/contrib/117784775130933389220"
   },
   {
    "name": "places/ChIJb7peR8LnAGAR5XyI7m81_nk/photos/AV-0GLc7R4A_JSKKeA8QMD5w3M07_fMgDQsi5BSmTKLBzik5-FhHYknmfJaF1TJBQlkjPH___JDS8sYkgXbeynR5cbdlgyCH1F7ugqPgkq9Xkp7uXhR-AMt2wG7k4WIQxpLtJ_G_k9Iu1OPnBRrCP0UqQiVqiTwEJ3WwQ_Pi-wKtulHhGC3Cc8FC0eYJmAEpF5iT4pQbdTSfrZKnjVO34ERcpf0R8eDvXKlwdLb6piiMLuRI3-H1go0gipcCitfpMHpId8UXfwKskw_RmysvVikbsRggFMANlQFJE5sJ1wNJaKBsd98776vETCaD1onJEYVOLwBKklrYT50i29zVuHpzE-BmJO9IxDUS3aZunkc2xkcjVKSPRRHwfaR-Muvx76aX0AKahzYWskfqVS0PT6oEc8x35j7BqIguhO48uPS-Cla7CQ",
    "menu": 0,
    "w": 4096,
    "h": 3072,
    "author": "Mikey C",
    "authorUri": "https://maps.google.com/maps/contrib/103092004183416718382"
   },
   {
    "name": "places/ChIJb7peR8LnAGAR5XyI7m81_nk/photos/AV-0GLeJTimfwOJi5IgADJ0ne7YbjZj_PmEaUf2kMkCJgcw8-JtkMbGvMHMN4ZliOHFWtlsTCXS1SDVopLZSvFnr4iOpn8l7BKGgdTJdq3WFRrp114LNTIJk3nmL1197icrC6nspizlJ02LdDQ3EkvUb_bSZjQAGwg17jhm6XWqe6rxFTjH8zPSjTuT1Zdgf_4k5D9RqTR9_WYELz32PfKCIhGtbujDD_OMLJPMfFvaSzNLtffZFCZfXouw672n6ytFVDHzfJrCyJOseLNvmoGBeBTd94KFqPA-pNxlB53ujvZY7hjIjfwvSbvP6t9DQhGscNMyxazShlyVOUFJgNITc3Q4gqcYGLAjOx8L9IZnxj5Nqe4SO37twE-f9NBQ8SvvicbdoaRMwvDWED8Z3ljQcLMXm8V_mUsyGqUsD-fvpQ5VLrg",
    "menu": 0,
    "w": 4000,
    "h": 3000,
    "author": "Sava Spasenovic",
    "authorUri": "https://maps.google.com/maps/contrib/101834706009055084164"
   },
   {
    "name": "places/ChIJb7peR8LnAGAR5XyI7m81_nk/photos/AV-0GLdpsVnn3_ZLHZlUPuiXoaNFwibJpif67nlZqsMvW32bQ4mzNgZ9cxkCwZbjcA_0ZnoJCbJ6wkWeEj2gO0FPlficvupMUVywkdilRHPhsAZFCg6I312Ul-LVS-LtEO7eztU_YUaNa1xuqPQUbjkks6KTFo-YfnEvk2W7CkU5mEdi3u_mG46MRwN3d4pOD6d_W1uByWMUvl4GLykQZiAUavnpKFXsHaQ8opWoWcZXYFe5Z_9NAN0BHMoITD-Coez1mtHqu0skQQXQrkTOA_JCYzfan_YeyvI-uj8ImLhVkPgdIw45GieQhwgBwYzChmYEKACZkaCMwzFVZDdHQWMLaVHMEf0rFDSCyOf1FCoukeRqLT3OXBDHZPui6MFJJexH7hkuO0bYYoIRR39uCv9q3ip5Po7ma1DKsBfCVgtnxLn4-w",
    "menu": 0,
    "w": 4032,
    "h": 3024,
    "author": "ウDanny",
    "authorUri": "https://maps.google.com/maps/contrib/112743312764030569383"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "한쪽 조사에서는 붐비는 시간대 예약을 권장",
   "methods": [
    {
     "type": "phone",
     "url": "tel:06-6599-8988",
     "note_ko": "매장 전화. A는 06-6599-8988(구루나비 검색 요약), B는 06643948717(11자리로 형식 오류 가능성)로 번호가 서로 다르므로 확인 필요. 10명 초과 예약·대관은 전화 문의(B)."
    }
   ],
   "note": "",
   "googleReservable": true
  },
  "disagree": "예약 상태: A는 '권장(recommended)', B는 '가능(accepted)'. 예약 수단: A는 공식 ebica·구루나비·전화, B는 타베로그·전화이며 전화번호가 서로 다름(A 06-6599-8988, B 06643948717 — B는 자릿수가 맞지 않음). 메뉴: 육회가 A는 '숯불에 구운 붉은살 육회', B는 '로스트비프 참마 육회 덮밥(1,138엔)'으로 다른 메뉴임. A에만 스탠더드 겐베에 코스(6,500엔), B에만 무즙 소바(968엔)가 있음. 니코미 가격은 B만 550엔으로 제시함. 예약 메모: A는 2층 연회석·소파석 조기 예약을 권장하고, B는 18~20시 혼잡·20시 이후 여유를 안내함.",
  "checkedAt": "2026-11-15"
 },
 "sumikara": {
  "menus": [
   {
    "name_ja": "厚切りトロ牛タン串",
    "name_ko": "두툼한 토로 우설 꼬치",
    "desc_ko": "두껍게 썬 우설을 숯불에 구운 꼬치로, 가게 대표 메뉴. 공식 사이트에 따르면 손님의 90% 이상이 주문함",
    "price_jpy": null,
    "source_urls": [
     "https://sumikarasumimade.netlify.app/",
     "https://hamoni.jp/shop/5cnq2H6v7qMiAxZierxE",
     "https://foodle.pro/restaurants/osaka/646a892e4d468",
     "https://tabelog.com/osaka/A2701/A270202/27134304/dtlmenu/",
     "https://retty.me/area/PRE27/ARE94/SUB9401/100001690420/"
    ]
   },
   {
    "name_ja": "和牛肉寿司3種盛り",
    "name_ko": "와규 고기초밥 3종 모둠",
    "desc_ko": "설로인 등 와규 세 부위를 올린 고기초밥 모둠. 가게 추천 메뉴",
    "price_jpy": null,
    "source_urls": [
     "https://www.hotpepper.jp/strJ003451218/",
     "https://foodle.pro/restaurants/osaka/646a892e4d468",
     "https://hamoni.jp/shop/5cnq2H6v7qMiAxZierxE",
     "https://tabelog.com/osaka/A2701/A270202/27134304/dtlmenu/",
     "https://retty.me/area/PRE27/ARE94/SUB9401/100001690420/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJVbFwzOHnAGARFBRMLoGDvqk/photos/AV-0GLeGvLqTETDb9SM-oRIkAkQJXJP5t4UwoW7cMiYrp1C6OZqDulLtIKijYtTFKteJfowA1PnKcGdxCm6K1aYQ7QG0wpM4__kR0rtvPwsk4O92VU0kKv606wjPin74PLla0kZuIcXYOaruoUS24Cgkaw2UshJKY5rHZGkxnqYWWBZ5YrJBy2qCG-3WPSIhpcqcgjl9sj7scgGxDOWYbnr_pQxjUM5FKybyQO9a-OW1umKRealbLbMii5BLZ36kedh0gFVE3YqcOpMUERG979HowcQOQtIP4V6ef75xIUv6dbBBaBCijg-YnLDms0hzwdurJX7iI5qu8yoE77j-HbdYct16Z4QaDIfC6zrA3FtbGEc6-yc4i6s29s8dKqNgsnxwqw67dZhqOzKTERbkoHsHJRIYFE4NZEGDdYum-8ayvCqh",
    "menu": 0,
    "w": 2240,
    "h": 2240,
    "author": "新藤",
    "authorUri": "https://maps.google.com/maps/contrib/105883897304795548432"
   },
   {
    "name": "places/ChIJVbFwzOHnAGARFBRMLoGDvqk/photos/AV-0GLeaEdGR6d0YQ21gtIvxKiayPaZDRDoh4s_kbXe1E3IqybVx_ICClrFEMf07KntvAfO3FQ6OJYrGH5Yoe0SKqk2p3S4nQQgVmCxOS2OhHHoDB2tGED7eHiu8Hkn4v4u_W3fFxJ0qYJUZE0d_xUBVlFW5BAoOIpfoAndjbQLVhUwhPDaOQZPhMKVx8a6xoxP4McCNcbd9L9M8wk91Itcn3OCYK_VQUWWa6suKQa2BgNDm4F9B7Fsdvf0-bZiJHfZqGZT-wfQFJW84AWmijzro4MDdxQspXJuYeeyKNLBgw3Kp2bpDiHOtJxettWDR5yPd9Q02BUuQSzIBSW6-BD8t1AI55jPXEXGe7ZWGKJnFoPZ_vW2P3E9ES2B1OekfX16oYAegtjpmjROhTMsC_UobFc2926TXX7HvmNKndoKAxJIm",
    "menu": 1,
    "w": 4032,
    "h": 3024,
    "author": "藤井雅浩",
    "authorUri": "https://maps.google.com/maps/contrib/104265058961938166037"
   }
  ],
  "reserve": {
   "status": "recommended",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "hotpepper",
     "url": "https://www.hotpepper.jp/strJ003451218/yoyaku/",
     "note_ko": "핫페퍼 온라인 예약. 좌석만 예약하거나 코스로 예약할 수 있음."
    },
    {
     "type": "phone",
     "url": "tel:06-4708-6960",
     "note_ko": "전화 예약"
    }
   ],
   "note": "후기에 따르면 손님이 많아 예약하고 가는 게 좋음. 핫페퍼 온라인 예약이나 전화(06-4708-6960)로 예약할 수 있음.",
   "googleReservable": true
  },
  "disagree": "· 가격: A는 우설 꼬치와 고기초밥 가격을 null로 둠(foodle 2024년 11월 기준 700엔/1,500엔이라 지금도 같은지 확인 안 됨). B는 750엔/1,750엔(타베로그, 세금 포함)으로 적음.\n· 오리 샤부샤부: A는 코스(河内鴨しゃぶしゃぶコース, 5,500엔), B는 단품(河内鴨の鴨しゃぶ, 2,450엔)이라 같은 메뉴로 보지 않고 뺌.\n· 한쪽에만 있는 메뉴: A의 숯불구이 만끽 코스(4,500엔), B의 스미스미 감자샐러드(500엔).\n· 인기 순서: B는 우설 꼬치만 인기 1위가 명시되어 있고 나머지 순서는 인기순이 아니라고 함.\n· 예약 방법: B에만 타베로그 예약이 있음. A는 타베로그 지점 페이지를 찾지 못함.\n· 예약 근거: A는 리뷰상 '사실상 필수'라는 평과 혼자 들어가기 쉽다는 평을 함께 적음. B는 Retty에 만석 후기가 있지만 가게 규정상 예약 필수는 아니라고 함.",
  "checkedAt": "2026-11-15"
 },
 "allegro-umeda": {
  "menus": [
   {
    "name_ja": "水牛マルゲリータDOC（ドック）",
    "name_ko": "물소 모차렐라 마르게리타 DOC",
    "desc_ko": "토마토소스·물소 모차렐라·생토마토·바질을 올린 피자로, 런치 메뉴의 추천 표시와 방문 후기에서 확인된다.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100001185643/",
     "https://aumo.jp/articles/60355",
     "https://tabelog.com/osaka/A2701/A270101/27073823/dtlmenu/",
     "https://tabelog.com/osaka/A2701/A270101/27073823/dtlmenu/lunch/",
     "https://tabelog.com/osaka/A2701/A270101/27073823/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJVVUlo-zmAGAR58T46gL1_oI/photos/AV-0GLeguJ1Z8bNhOmu3rUcZenA8iJN24GrimkGQ0KrkhVrY1rrH3JhQy7yV_HA0fo1l9isTeB6lBqjRAihu3D3UmDoRG6TfosqoMdirKOzmLkhhBYfXhD6b-EUe-_TY6jQxON0XzAYKvjxsr33FSWtscCQgfo9tRwvzWY4x1yupz9Ty9FmkZB6hd6gpWalzxVyDyvg5OLY5Rf5_RgP8ilPTUJu3_wqxpPxwrWCEvcQpS7NuFoDCDmOqUe6VpGls6gYo74hnmt2asPgEY1uDvDX956uYXDUwkDf763G1laMfjmKjNOga20DbSq8kmZl1vW3uSwLpSY88T7fLIcb_8-9vUYdnTMgjvSYMYOpYl6HYNNcROEBdyvDjw9zdiGfTYEa-S2iPexZguOtk5Dwzm5F05ZCBudk",
    "menu": 0,
    "w": 2738,
    "h": 1825,
    "author": "トラットリア ピッツェリア アレグロ梅田店",
    "authorUri": "https://maps.google.com/maps/contrib/114843889244011931424"
   },
   {
    "name": "places/ChIJVVUlo-zmAGAR58T46gL1_oI/photos/AV-0GLeNr9ak7vdMhTSgdLbYBAYBU-jMi-TGCc0-71XbINbeXvYLxLvzwNJALy-9GSfQo8wH5T4My_TUd6mYKtKnzZ0jPbja5FXYeCdxhrX_h639Javs7xaXWgDYgg3Yj0wv8UPKFPP8SW1XjWvf25FhqRO95JkEmUF8sWzLf0rby5c6Evz6kYcYWnscOqN6v2cz8NDI0JJv3UXdUWcc4JMtmPVx47Adi-Aud4HxjZsHdkMvn7MsiFzWG6jwpnwXaDGY2j1iwES4SMtj-2eloUgWIllAiFWY6-wHQnPfzT1OeNJTDziJu15WsK8CWGWQQSA1UHsD86SH4ph_Y9v06JZLkjrenUfNwbZrI8X4-a6hvkicpAGD2722gh0oC-hgD3NIRqZkjIqVSWNh8e-gXqsKZWug_fVrt4rGKMCH3MEqYGcuIg",
    "menu": 0,
    "w": 2554,
    "h": 1761,
    "author": "トラットリア ピッツェリア アレグロ梅田店",
    "authorUri": "https://maps.google.com/maps/contrib/114843889244011931424"
   }
  ],
  "reserve": {
   "status": "unknown",
   "agree": false,
   "single": {
    "who": "Codex",
    "status": "accepted"
   },
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:0663674100",
     "note_ko": "매장 전화(06-6367-4100). 양쪽 모두 같은 번호를 확인함."
    }
   ],
   "note": "두 조사 모두 매장 전화번호 06-6367-4100을 확인함.",
   "googleReservable": true
  },
  "disagree": "예약 상태: A는 예약 가능 여부를 확인하지 못해 unknown, B는 타베로그 온라인 예약 가능을 확인해 accepted로 봄. 예약 수단: 타베로그 온라인 예약은 B에만 있음. 메뉴: A의 '장작 화덕 나폴리 피자 런치'는 A에만 있고, B의 일반 '水牛マルゲリータ'(배달 인기 1위, 2,178엔)는 B에만 있음. 가격: 물소 마르게리타 DOC를 B는 2,838엔(세금 포함, 노르말레)으로 적었지만 A는 메뉴별 가격을 확인하지 못해 null로 둠. 참고 사항: A는 붐빔에 관한 리뷰와 미리 예약하면 생일 플레이트를 내준다는 정보를, B는 연락 없이 10분 넘게 늦으면 취소된다는 규정과 예약 변경은 전화로만 가능하다는 정보를 각각 따로 적었음.",
  "checkedAt": "2026-11-15"
 },
 "allegro-temma": {
  "menus": [
   {
    "name_ja": "ナポリピッツァの定番 マルゲリータ",
    "name_ko": "마르게리타",
    "desc_ko": "토마토소스, 모차렐라, 바질을 올린 기본 피자이며 물소 모차렐라 변경은 2,068엔.",
    "price_jpy": null,
    "source_urls": [
     "https://ameblo.jp/docoicoca0321/entry-12959689674.html",
     "https://www.hotpepper.jp/strJ000717673/report/",
     "https://gourmet-cannondale.blogspot.com/2014/07/blog-post_9600.html",
     "https://tabelog.com/osaka/A2701/A270103/27018209/dtlmenu/",
     "https://map.yahoo.co.jp/v3/place/jGahc4bf2_U/menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJqb7pzsXmAGARUaDuDJi4_Ac/photos/AV-0GLdGchbDQjl7bhByrZPXdLxxVRyRmfrJsUDOq_nQCyoQxyozQH28ypLxuGU8oT9HPgSPKxGCe4N4fB0Gn37fJAcP9US9qjRD8IFOPkieuF5H6NvoPDk2ulLAznB8VsVQHOZIZ1OkVPM0_vUsMW4uIV3zWhQitLlIU_j9OrlZU_NUDuOqwUP3oiAMtJFA_oIpBrGnpVbebnALBOuLDpj8AtZF5Td6q8t4HTVKq9HEPvscJo4qGrql_HMDieysJkF2pW5vjVRClYake70Nrfm_zG6OJkj2iZek9nL21J5KPg5KKI39S1lfCGqyTeSU97RX005LGJtRdDSQ35s8fnjrMmvOdR2JhhqmMx_TGjF0BZs3oPhz4wRInvnS9hwdWC5aMsGQbTcNltOHhi43ugsLak_fQq5dFDh2W4q19tNwALgwEg",
    "menu": 0,
    "w": 4800,
    "h": 3599,
    "author": "椚座泰行",
    "authorUri": "https://maps.google.com/maps/contrib/108923321429399966525"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "한쪽 조사에서는 붐비는 시간대 예약을 권장",
   "methods": [
    {
     "type": "phone",
     "url": "tel:05058697270",
     "note_ko": "전화 예약 가능. 토·일·공휴일 예약은 전화로 받음(B). A가 찾은 번호(06-6354-8710)와 다름."
    }
   ],
   "note": "전화로 예약할 수 있음.",
   "googleReservable": true
  },
  "disagree": "예약: A는 '권장'(블로그에 점심 예약 필수·늘 만석이라는 글이 있음), B는 '예약 가능'으로만 보고 예약 없이 들어갈 수 있는지는 확인하지 못함. 넷 예약: B는 타베로그 넷 예약(평일만)을 예약 수단으로 넣었으나, A는 타베로그 페이지가 막혀 확인하지 못해 넣지 않았음. A의 검색 요약에는 '평일 디너만'으로 나와 범위도 다름. A는 핫페퍼에 '현재 넷 예약 안 받음'이라고 나와 있다고 적음. 전화번호: A는 06-6354-8710(운영사 매장 목록), B는 050-5869-7270(타베로그). 메뉴: 겹치는 메뉴는 기본 마르게리타 하나뿐임. A의 콰트로 포르마지, 피자 런치, 파스타 런치는 B에 없고, B의 마르게리타 DOC(2,618엔)는 A 목록에 따로 없음. 가격: B는 마르게리타 1,738엔(세금 포함, 2026년 3월 타베로그 기준)이라고 했으나 A는 가격을 확인하지 못함.",
  "checkedAt": "2026-11-15"
 },
 "allegro-namba": {
  "menus": [
   {
    "name_ja": "水牛マルゲリータ",
    "name_ko": "물소 모차렐라 마르게리타",
    "desc_ko": "물소젖 모차렐라를 올려 장작가마에서 구운 나폴리식 마르게리타 피자",
    "price_jpy": null,
    "source_urls": [
     "https://naricom.net/allegronanba/602/",
     "https://map.yahoo.co.jp/v3/place/P2y25njSeJs/review",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100001459243/",
     "https://tabelog.com/osaka/A2701/A270202/27108977/dtlmenu/",
     "https://tabelog.com/osaka/A2701/A270202/27108977/",
     "https://map.yahoo.co.jp/v3/place/P2y25njSeJs/menu"
    ]
   },
   {
    "name_ja": "ローマの定番を龍のたまごで‘美味しいカルボナーラ’",
    "name_ko": "류노타마고 카르보나라",
    "desc_ko": "‘龍のたまご’ 달걀과 굵은 스파게티를 사용하는 카르보나라.",
    "price_jpy": null,
    "source_urls": [
     "https://map.yahoo.co.jp/v3/place/P2y25njSeJs/review",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100001459243/",
     "https://tabelog.com/osaka/A2701/A270202/27108977/dtlmenu/",
     "https://map.yahoo.co.jp/v3/place/P2y25njSeJs/menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJu3FeVi7nAGARsxJJOpybcrg/photos/AV-0GLevcNc8CD4Srubpfo7_9zI-D9J2BWZTPUIWoUlxnfPHQWp8lLFTg4bAlZOuhgIC9tq6wjiWCE1vrk2iKNF0a1vmvxPHGf0MtmoCi1J-mWqz2E3FYQUfYzM8d-ExL5w7JWypVO8T28hBzlg7vC0wBxIjRXFL0P2vmhLcJYUxiwLnaFlzRGX-TdRQmDwy-RQlUBAMLzPgB0FUx10PRu552Nf-0p_ukgwvepOj8FkwpGsR8j07a6R6S2VHhifYbLbrx_PkExsDd8SH_SHsrP54twj0vGMnO7aN8UVTBjz8DnWynzXmVeeqHlfyhkjpa8354KuLTF0oEbgfMBefBfh3QpyKpzMssGbBPfqXKvNYZPoq1eWd0uPf6INr40ty2WQZGN2emzLe0N6wjagdvj9Kd-2Lou6WonsvfIrOzlawJuQZ",
    "menu": 1,
    "w": 4032,
    "h": 3024,
    "author": "AKS",
    "authorUri": "https://maps.google.com/maps/contrib/115184227865977158060"
   }
  ],
  "reserve": {
   "status": "recommended",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:+81666307870",
     "note_ko": "매장 전화 06-6630-7870으로 예약"
    }
   ],
   "note": "리뷰에서 예약을 권하는 의견이 있어 예약 권장. 전화(06-6630-7870)로 예약할 수 있음.",
   "googleReservable": true
  },
  "disagree": "가격: A는 타베로그 등에 접속하지 못해 가격을 모두 null로 두었고, B는 타베로그 메뉴(2026-02-12 갱신, 세금 포함) 기준으로 마르게리타 1,628엔(피콜로 기준, 노르말레 1,958엔)과 카르보나라 2,068엔을 적음. 그래서 가격은 null로 둠. 메뉴: A에만 콰트로 포르마지와 볼로네제가 있고, B에만 가스미 게 그라탱과 이탈리아식 감자 샐러드가 있음. 예약 방법: A는 Yahoo!지도 예약 버튼을, B는 타베로그 온라인 예약(5명 이상은 전화)을 적음. 혼잡도: A는 비 오는 평일 저녁에 여유로웠다는 후기도 함께 적었고, B는 2026년 5~6월 주말에 만석이었다는 후기를 적음.",
  "checkedAt": "2026-11-15"
 },
 "henrys-pizza": {
  "menus": [
   {
    "name_ja": "Pepperoni Slice（ペパロニ）",
    "name_ko": "페퍼로니 슬라이스",
    "desc_ko": "얇은 도우에 붉은 소스, 페퍼로니와 치즈를 올린 큰 조각 피자.",
    "price_jpy": null,
    "source_urls": [
     "https://map.yahoo.co.jp/v3/place/nJsBUGm3MLo/menu",
     "https://www.lemon8-app.com/@mryuhana/7387029105726718470?region=jp",
     "https://www.timeout.jp/osaka/ja/レストラン/henrys-pizza",
     "https://tenjo.tw/henrys-pizza/",
     "https://tabelog.com/osaka/A2701/A270104/27136005/dtlrvwlst/B516400717/"
    ]
   },
   {
    "name_ja": "Cheese Slice（チーズ）",
    "name_ko": "치즈 슬라이스",
    "desc_ko": "큰 뉴욕 스타일 치즈 피자 한 조각",
    "price_jpy": null,
    "source_urls": [
     "https://map.yahoo.co.jp/v3/place/nJsBUGm3MLo/menu",
     "https://www.lemon8-app.com/@mryuhana/7387029105726718470?region=jp",
     "https://www.timeout.jp/osaka/ja/レストラン/henrys-pizza",
     "https://tabelog.com/osaka/A2701/A270104/27136005/dtlrvwlst/B516400717/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJ-VqNgTTnAGARh7laE9_JJvY/photos/AV-0GLefe80iccz2sZ_PwscMP_BEY9YE9wW14moENCagrK46xOFhyrbRDj1PeBdSGJEYM69ufyyZRKXmW9DlduS99uaPSgStLY-6f74eF0Pp-yoXoPXgpF6mdcnmspBhfm_4Zpx2o2Q61mFcsewYVaDEyvgtXiHh0GhGp-_Ft4_kcSHd8jmOcXNlxAloX8mL9n98OaIg4APxMD0I0mfkOzSjdDCIlHB7mkvMb0dJcBbtY2JNVSoEZMOC-mGZsnBVGghT_DqECu0KUBySeRfMV5hAwlkr9g84AaMoiBS6lbKt7zNrVwXTs4azbN3UYIo9WYjme4CMdPuMybZsPFcnW_39Md_nQ4WZTJvjAfxZ-A9j04qVnsPPhsPxA42d0S8dlBrCZgN-lmKobpMGAKJOlAv4GquF7OlOqrWP823w1nwg9DUnkw",
    "menu": 0,
    "w": 3840,
    "h": 2160,
    "author": "chiaki hiura",
    "authorUri": "https://maps.google.com/maps/contrib/104928922220929561465"
   },
   {
    "name": "places/ChIJ-VqNgTTnAGARh7laE9_JJvY/photos/AV-0GLcU7IEU-cq7T8Tt9CZFVQPwS8-Ik_vcVi3EGDs94ejKoJGp-qCy0uYCXKM6pDc7QXRlPU_b3HXyB28DYGlDboALsw4RrbyJj7xFBisMyyQr6gbVjdijPVD8sJHRIeVbtjrGCxLkorj8jO8v7-e9KGr9rzCA-UIm06mJtHtW5R4R44kbRzKoACYKZpkl8FacpISkKk0HpRnnq2BpJ1DplhCU_aYzQqwo6y6yDYTs1OzB-YWAKK_sywR2u246kaKdgu0invIOSfg4VNAqR8wDlViZ0FJ0IMB2ZoByiIGP-Jyz9MB2tT5OuFfzT1uZMqlv7bWy8zYt13PlZEohF6mI6PLmjuk1fomgvxKwQPxSsD0_23_0FtyB35XcFYrQ02OXOBHgC7hes4RwQhYpUgnaYcxSyExbXjssWPigC4FRvxBg3Q",
    "menu": 0,
    "w": 4032,
    "h": 3024,
    "author": "閑",
    "authorUri": "https://maps.google.com/maps/contrib/107365440198926849443"
   },
   {
    "name": "places/ChIJ-VqNgTTnAGARh7laE9_JJvY/photos/AV-0GLc3jg-WKO-EyhX7JOdxJWayMhhIkIH3Ap4rm3JHhkKzq9r8Jgc0_NfwEgk9mWv3l4LjT2ik4-y1zFVd47D9T-pqtTWR3AueQ36RARDKZKWUUyBzJsbq4kJst3X3Qm7y0AewntGfxj1Z3NJ0XCsmCKhdg_CikgHlbeppLM1XjGBnTm5LpJAbyUqep54KDr11fg-yVGv93Chu2Jk7I5q2PTvpTtKA5aNnDCbl-ge1TaRBmU0XK6cbArrE62DK4hFbk__J7aPritAz-aTdkVxspX2OUKO0O29cuLSKVjVXrgZz9RjdjOATruM4JdxdwKG8xRCz4tHqykmXqAAgYXtBnN-IllvA5fXQEg3wB01DJtZP0AcZLf7ASJFkybQ7zssip8srw7dHNJnAzYtkSGGOQm_kWkcaznXOzyiGcwyTeVI6",
    "menu": 0,
    "w": 2252,
    "h": 3594,
    "author": "Emir Kara",
    "authorUri": "https://maps.google.com/maps/contrib/108714939547821662760"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그에 예약 불가로 표시되어 있습니다. 붐비는 시간대에는 줄을 서서 기다렸다는 후기가 있습니다.",
   "googleReservable": null
  },
  "disagree": "가격: A는 페퍼로니 550엔·치즈 450엔으로 적었습니다. B도 같은 게시 가격을 확인했지만 세금 포함 여부를 몰라 null로 두었습니다. 그래서 price_jpy는 null입니다. 메뉴 수: A는 크림치즈&할라피뇨와 치킨 너겟까지 4개를 실었고, B는 2개만 실었습니다. 일본어 이름: B는 name_ja를 비워 두었습니다. 추가 정보: 현금 불가(카드·전자결제만), 전화번호, 영업시간(자료마다 다름), 세트·사이드 가격은 A에만 있습니다. 대기 후기: A는 평일 정오 전에는 대기가 없었다는 후기와 오픈 직후 만석이었다는 후기를 함께 실었고, B는 2025년 7월 일요일 점심에 약 5팀을 기다렸다는 후기만 실었습니다.",
  "checkedAt": "2026-11-15"
 },
 "amoya": {
  "menus": [
   {
    "name_ja": "かりんと饅頭",
    "name_ko": "가린토 만주",
    "desc_ko": "흑설탕 반죽으로 홋카이도산 팥소를 감싸 아침마다 갓 튀겨내는 한입 크기 만주. 겉은 바삭하고 팥소는 촉촉한 간판 상품(연간 20만 개 이상 판매)",
    "price_jpy": null,
    "source_urls": [
     "https://www.amoya.jp/",
     "https://amoyasiten.base.shop/",
     "https://tabiiro.jp/shopping/s/600045-osaka-amoya-shitennoji/",
     "https://tabelog.com/osaka/A2701/A270203/27056343/dtlmenu/",
     "https://tabelog.com/osaka/A2701/A270203/27056343/dtlrvwlst/",
     "https://map.yahoo.co.jp/v3/place/vxSD45tC6Q-/menu",
     "https://chanoyumap.jp/special/amoyaminamikasuga/"
    ]
   },
   {
    "name_ja": "豆大福",
    "name_ko": "마메다이후쿠",
    "desc_ko": "붉은 완두가 들어간 찹쌀떡에 부드럽게 거른 팥소를 채운 화과자.",
    "price_jpy": null,
    "source_urls": [
     "https://www.amoya.jp/",
     "https://tabiiro.jp/shopping/s/600045-osaka-amoya-shitennoji/",
     "https://tabelog.com/osaka/A2701/A270203/27056343/dtlmenu/",
     "https://map.yahoo.co.jp/v3/place/vxSD45tC6Q-/menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJAXYuO_fdAGARXgjJJ5ZSXL8/photos/AV-0GLcujXkddtIJ3lwCyzdKS93Aa4DgQIuHU2L6MtS5COYvucRog7s7KhVSVwXir3jz8XUTOig31zF123uQyc8fCGhQoydyL7icyFdkk_VFIu_x4K1-7VrOY3JH3r2Zi20hzFMFTKaOFEmwbDzfnO40SyQVM-j2m7YM5XVWaBM1Hi7XI1pcipHiUiCPCStswmputuvmnJP85z7XGekEPkTEbEIff5T9kfGjZFlBz6qk7QvQkqTQQQUvh0IYfaDqOx5Ld4jtnVBRk9UehvG67O10UvFwUUq1HC8o0n4ByYzCVfHOY2NxYLbNSIkD5aAg4WAMKYjTXfdSLnrZElAXfTMC0lSQi90xvT8rl7JrNNcQBUrV3HbB7GKZPJC4RB0TmtHsu6Qcf5XfAUMN1eyxXbYanEFailZNs23pTIldUVYhETSVjQ",
    "menu": 0,
    "w": 3000,
    "h": 2000,
    "author": "あもや南春日 四天王寺店",
    "authorUri": "https://maps.google.com/maps/contrib/117311827400345144236"
   },
   {
    "name": "places/ChIJAXYuO_fdAGARXgjJJ5ZSXL8/photos/AV-0GLdiZyZn90semrrwQ8H1PNRe6xPP726dK-acegzLyqsQABRNN62oPZ7mUvDId0Y8AqoBCVjhm0_cN9qliOBMQ1tREuYvrqvnlnFh7bZOABN3bG5pyUn1vHk4pdj4alHFrPKd3T2kR7S3ivYy3ZsgDAetswL3rw_zVVK7UChEkCDyLsUVtpWX9QxThBdwl6qH_7_DOTNhmIq6Geakr-GJaRkOATvkHGDgNGXQc1Yf1xyJta-F6_3ayXfKuMPcS59U3GW8XO78euS5MCKpFjiv3MvhIMZdV3-geI9KayfaraXsZaLGcm61rL7qFGsbDli6ho_LUl0M9Dbqbw-BxaW81yn55OMdIknaYbBYpmq1nRLfUVA3gMAmUGQnmwJ9swxGJRs0fg9n5aM3SWP3ZTWLEhVkMloZfD4rrjYT23LHtGgQKA",
    "menu": 0,
    "w": 3333,
    "h": 3333,
    "author": "あもや南春日 四天王寺店",
    "authorUri": "https://maps.google.com/maps/contrib/117311827400345144236"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:06-6772-1563",
     "note_ko": "매장 전화(06-6772-1563). 상품 예약·보관 가능(1개부터). 타베로그 안내상 3일 전까지 주문, 급한 경우 상담."
    }
   ],
   "note": "화과자 포장(테이크아웃) 판매점이라 좌석 예약이 아니라 상품 사전 주문·예약 개념이며, 대기·혼잡 정보는 양쪽 모두 확인하지 못함.",
   "googleReservable": null
  },
  "disagree": "인기 순서: A는 가린토 만주를 1위(공식 사이트의 간판 상품 표기 기준), B는 마메다이후쿠를 1위(Yahoo! 후기 건수 기준)로 둠. 가격: 가린토 만주가 A는 540엔(BASE 5개입, 세금 포함 여부 불명), B는 108엔(타베로그 1개 세금 포함)으로 기준 단위가 다름. 마메다이후쿠는 B만 183엔을 제시. 메뉴: A에만 시텐노지 모나카 '모치모치 카메요', 잇쇼모치(4,320엔)가 있음. 예약 수단: A에만 BASE 온라인 사전 주문(전날까지 주문, 카드 결제만 가능)이 있고, 전화는 A에서는 문의용으로만 확인됐지만 B는 전화로 상품 예약이 된다고 함(3일 전까지 주문). 주문 마감이 A(BASE)는 전날, B(타베로그)는 3일 전으로 다름.",
  "checkedAt": "2026-11-15"
 },
 "spanola": {
  "menus": [
   {
    "name_ja": "モンブラントースト",
    "name_ko": "몽블랑 토스트",
    "desc_ko": "두툼하게 구운 버터 토스트(식빵) 위에 마롱(밤) 크림을 듬뿍 올린 이 가게 명물",
    "price_jpy": null,
    "source_urls": [
     "https://www.walkerplus.com/article/205212/",
     "https://www.timeout.jp/osaka/ja/レストラン/cafe-spanola",
     "https://www.timeout.com/osaka/restaurants/spanola",
     "https://tabelog.com/osaka/A2701/A270101/27010558/dtlmenu/",
     "https://we-love-osaka.jp/umeda_jyunkissa/"
    ]
   },
   {
    "name_ja": "ウインナ・コーヒー(Hot or Ice)",
    "name_ko": "비엔나 커피",
    "desc_ko": "수제 휘핑크림을 듬뿍 올린 커피로, 따뜻하게 또는 차갑게 주문할 수 있다.",
    "price_jpy": null,
    "source_urls": [
     "https://www.timeout.jp/osaka/ja/レストラン/cafe-spanola",
     "https://www.timeout.com/osaka/restaurants/spanola",
     "https://tabelog.com/matome/14155/",
     "https://tabelog.com/osaka/A2701/A270101/27010558/dtlmenu/drink/",
     "https://we-love-osaka.jp/umeda_jyunkissa/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJrYRtAO3mAGARiOfMO6oYIas/photos/AV-0GLeDkS0YjvcGAoPKERRblFXVzc36dDhnT2uuZS3SGaFSoaqgefC3fXhzo2IYcSy9s4hpaBrlJNjsF1jONvI2RMvM_JJyAUfHeez2dhYxyPFlDfYIJ6dFIJicqIRIfugUz0cBZYvxdnyfR7mSt15AlVoVjDuQIMwVDf3S35UebOZCzeYnvFlDf-eLiz4siNJh-MKI4pzJj736_RBlKxK3u2w3SwUy2pqqwjDwnjkWTNF2swBtCCTSmOVCcj1SyevUqQG-0QRYikWJou7m8O8n6T1JpA9KhtxU82edmy5l0oWxrHR3VQVNA0yu1rNuaGj-c7I2J20E8JDHlrgFFy0bPP6Wix_RsAxuGDaxrsyG1vclAt2kqz1m4TrkLa3aSYbJjA34zXPNuYJFpfa7__twK-AMGZRKabssFrMVOyfbFCLAZw",
    "menu": 0,
    "w": 4160,
    "h": 3120,
    "author": "ビバキナコ",
    "authorUri": "https://maps.google.com/maps/contrib/104943016603341180907"
   }
  ],
  "reserve": {
   "status": "unknown",
   "agree": false,
   "single": {
    "who": "Codex",
    "status": "not_accepted"
   },
   "hint": "",
   "methods": [],
   "note": "",
   "googleReservable": null
  },
  "disagree": "가격: 몽블랑 토스트는 A 520엔(Walkerplus, 오래된 기사일 수 있음), B 700엔(2026-09-15 갱신된 타베로그, 세금 포함). 비엔나 커피는 A 650엔(Time Out, 세금 포함), B 750엔(타베로그, 세금 포함). 예약: A는 예약 정보를 찾지 못해 unknown(타베로그 403 오류로 열지 못함), B는 타베로그에 예약 불가로 명시돼 있고 4명 이상이면 나누어 앉을 수 있다고 함(not_accepted). 메뉴 구성: A에만 스트레이트 커피(11종, 가격 확인 못 함)가 있음.",
  "checkedAt": "2026-11-15"
 },
 "king-of-kings": {
  "menus": [
   {
    "name_ja": "オールドパー12年 シングル",
    "name_ko": "올드 파 12년 싱글",
    "desc_ko": "올드 파 전문점의 대표 스카치위스키로, 온더록스·하이볼·스트레이트 등으로 주문 가능.",
    "price_jpy": null,
    "source_urls": [
     "https://www.hotpepper.jp/strJ000798904",
     "https://tabelog.com/en/osaka/A2701/A270101/27043454/",
     "https://kingofkingsosaka.foodre.jp/",
     "https://www.hotpepper.jp/strJ000798904/drink/",
     "https://tabelog.com/osaka/A2701/A270101/27043454/dtlmenu/drink/"
    ]
   },
   {
    "name_ja": "クリームソーダ（メロン）",
    "name_ko": "크림소다(멜론)",
    "desc_ko": "멜론 소다 위에 아이스크림을 올린 킷사텐 음료로, 타베로그 사진 설명에 블루하와이·바이올렛·스트로베리 맛도 함께 나옵니다.",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/en/osaka/A2701/A270101/27043454/",
     "https://tabelog.com/osaka/A2701/A270101/27043454/dtlmenu/drink/",
     "https://comfy-dining.com/king-of-kings",
     "https://www.osaka2.jp/archives/34763268.html"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:06-6345-3100",
     "note_ko": "타베로그에 기재된 예약·문의 전화."
    }
   ],
   "note": "타베로그에는 '예약 가능'으로 나와 있지만, 핫페퍼에는 현재 일반 예약을 받지 않는다고 표시됩니다. 대기 시간이나 예약 권장 여부에 대한 정보는 확인되지 않았습니다.",
   "googleReservable": false
  },
  "disagree": "B는 공식 사이트에서 연결되는 Retty 예약 페이지(retty.me/reserve/100000710176)를 예약 수단으로 제시했지만, A는 검색에 나온 Retty 페이지가 다른 가게(梅田楽天地1923)라며 제외했습니다. A만 영업시간(월~토 12:00~22:30, 일요일·공휴일 휴무 등)과 핫페퍼에서 같은 번호가 FAX로 적혀 있다는 점을 언급했습니다. B만 크림소다가 17시 이후 200엔 오르고 위스키는 차지가 따로 붙는다는 점, 2026년에 갱신된 타베로그 메뉴를 언급했습니다. 반면 A는 일본어 타베로그 원문을 열지 못했습니다. 인기순 정렬도 서로 다릅니다(A는 위스키, B는 크림소다를 먼저 둠).",
  "checkedAt": "2026-11-15"
 },
 "jinbee": {
  "menus": [
   {
    "name_ja": "焼き餃子（1人前7ヶ）",
    "name_ko": "군교자 7개",
    "desc_ko": "작은 크기에 소가 꽉 찬 바삭한 군만두. 이 가게의 기본 메뉴이며 미소 소스나 식초+후추 소스로 먹는다는 리뷰가 있음",
    "price_jpy": null,
    "source_urls": [
     "https://ameblo.jp/celeste10/entry-12883762654.html",
     "https://osaka-gourmet01.com/2020/07/20/18151",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100001545121/",
     "https://www.lemon8-app.com/@oyasumi73igourmet/7347272679071973894?region=jp",
     "https://tabelog.com/osaka/A2701/A270202/27117757/dtlmenu/"
    ]
   },
   {
    "name_ja": "鳥のから揚げ（3ヶ）",
    "name_ko": "닭 가라아게 3개",
    "desc_ko": "튀김옷이 얇고 바삭하며 육즙이 많은 닭튀김(3개). 소금과 레몬을 곁들여 나옴",
    "price_jpy": null,
    "source_urls": [
     "https://osaka-gourmet01.com/2020/07/20/18151",
     "https://map.yahoo.co.jp/v3/place/etbglCFaxsE/review",
     "https://en.footinder.app/places/6551e10ad16a784df732723a",
     "https://tabelog.com/osaka/A2701/A270202/27117757/dtlmenu/",
     "https://tabelog.com/osaka/A2701/A270202/27117757/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJCdP7wpnnAGARW1KI1khjFeE/photos/AV-0GLdOlszBv11jp-JLIW7aBQ1gJpwvIbT4-x6uVTGaeyU57mb-_dgiCQSIY164zfzahDYzbI0jT7G-u9BDTlzyZ39nXZ1aejDRnKq9_xnkneT2hhyQAl9fptJfQP6F_Qkcnj6ZUbHxjlF2esX8XBORHM4UpNd7EXdMRtfo4pnAO16rTbxC58XMhvc3PAXlRmFfWDRN-E4lGc7m0KdqXnsQbUoGOywBNXuGnDrLlQzJZXclx0cSqtph3XZDy6MG4cnj7e-jO6h-3ucf1KoxAWiVPCagtYZATR-JVP4b9qGoPtiek83cHpAKAb00WuKb8o6TTMXl0R80jvAeqBx1jlCPrjJiu-wgoERw9qps0f56A0EaRg_gBZBVV6OBoW-MYrDxzJz3ta0FvHs7BahToMJD9ENRT7s",
    "menu": 0,
    "w": 1478,
    "h": 1108,
    "author": "ぎょうざのじんべえ",
    "authorUri": "https://maps.google.com/maps/contrib/116580092862889885794"
   },
   {
    "name": "places/ChIJCdP7wpnnAGARW1KI1khjFeE/photos/AV-0GLf4KZWECjnJoKkhFEVju_P9dXKX1VLuCGw_ThiLuutW8c5fqYPvj2KXYoDDmYeb4_KVucYRUVXZULGxGhWnjI8K19sYU20jG_Tq1onWTv9sRJkfVNxrxXvEV4HS5md4AqiX4oZF13iyrH5DyJUy6i6ig5DZFqZQqu1cogbTQM6e6VoeXRKzPDUxoAVYVrTfZECx3T_YJQoXG1OQF6ZLnQnqP2EX0RjmutnX90QMkVGLUsHBz-whsGnmzRQLZ67OWEsYbuxlH5OUbJpLRQW6MfijgqjFh1O68S_jDvfZLmvnN7fvSWHmEtVxrApEJERuqCxeXv592sljk_nz13glvkLP67iOzq8j5e_KvBgzeXRoWYVnWF75O8dXD7IINd4n7fl4rBlzyLRheb8b6bAXJk-NtU7gZ1uYMydZ7sWgHrHk",
    "menu": 0,
    "w": 4032,
    "h": 3024,
    "author": "Tomonori MURATA",
    "authorUri": "https://maps.google.com/maps/contrib/111603876698950442103"
   },
   {
    "name": "places/ChIJCdP7wpnnAGARW1KI1khjFeE/photos/AV-0GLeb0XieMDezRJmTeLeQGGrsS0erz8oHakcvVAZXKvY3QCwrsvPRkZJzVLp8PXGbmk_tKKQrUekyEJ0Fdr1JQmHmipA0mkII-_s6OUbg-_uDbeKbHNZaQdv_2Y2siszREsWDBb2nox3zpa13QGZwgw1FBodXGfiS8rwR8wcfq_cN3p3o7iKDwt3QJLnprAuxcPKjU92MN9-xKPs_D-7c-RKJ63S50ie9E8IoWaxDuPj8LoCmcqKjBeDaMX-byZBjW7Xc64WzRnjEy4WU2f1CZzO_wMhMEHAgvRD5ujPSGJBZhKMD-XNiAFJ5XdjH8oqU2sTDcSVeOoRCRtmKQVlqlDShmsZ5qCws9oapBTrKTK2lei2Knl-Qky2mAnO_Xj5iy37tCyuyUI0is0hfnM4RtcDkuIwJx0631OtzQZZfM3UY0Q",
    "menu": 0,
    "w": 3024,
    "h": 4032,
    "author": "大阪グルメ",
    "authorUri": "https://maps.google.com/maps/contrib/100055609421925228206"
   },
   {
    "name": "places/ChIJCdP7wpnnAGARW1KI1khjFeE/photos/AV-0GLcse4w8RNHP_qnq2-1Ih4aWB30XF_c6fb_MAytZqZjtkN7NI1f_cSr2L-vQhMBODdD4v41u-q7CY78bvnwmtNq7CaZZiIYE2fjkyRQXLybD0gSyLTfaJQyVOXDtpT66Un73CX4Ebb4wKnckIvzU8II7nEC1SFTW74oxCg4ZooRRdxY9z_3JZJBkZIApU96-GsoPb8hhv-pcvVc7rvZZ-qDJfHNEivT2g9qUIU9RUsUjlgUB4Fa11Rc4lC1sU5z7GaSNyD2x8P5miYLWZFB6x_bpJ1n_Y1fHnAQ7WHoqzJQysHeRRHv2YT6ncgI1bVCW9XL2VhK6_FyDUoCVKLkgXM4RR458Y4drb-rNJ1_GNvU_TFfEnen2eHEMjlAQ02VhdsKRks6_wTR6pnBcGiilgjdiIoeQ44Kp7REgzeC8snw2gg",
    "menu": 0,
    "w": 4032,
    "h": 3024,
    "author": "Tomonori MURATA",
    "authorUri": "https://maps.google.com/maps/contrib/111603876698950442103"
   },
   {
    "name": "places/ChIJCdP7wpnnAGARW1KI1khjFeE/photos/AV-0GLeiW_b93OSxbq_yoDgaD7fdW-9dlBMRhXBAytlAHrj6hqjQbC0v-HnOBcy7nzpo-h0oW8DIxsfi43vfg-YhYyBf08W1fpfBS1bbNqeJsregNyX9m7z3BxkNrxP_iWpd1kklfrDcNcasuukhOM6AbVOO5ujFMUQRgXsqJummv9rPkA0_SBVKlYJfK0gBln5qX0FbKt_WdYAcT-7Fa5KOCQ-WWAGcGqk89nPtXgDUcu55eIjbjw6kf4ugwwIl78EfZfcBWGLg-qeY7JI2pLKOZnounSsS4HAZw6lIwGB9kKh-z0b9hyw_jg81yomD0anSt33_h5Ah_wZNXqSdxDiH6rKIRloJOwTjc7t5zjmmaRT9JvO2xJ_iJHW7wOh_MBuqTqFhNHjtEFnXvRc4RP4rtW8PD3ZBkuHA5UkXwRrmEZ3kwQ",
    "menu": 1,
    "w": 4000,
    "h": 3000,
    "author": "増井裕",
    "authorUri": "https://maps.google.com/maps/contrib/117022841421182370762"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:05054572896",
     "note_ko": "타베로그에 표시된 예약·문의 전화번호."
    }
   ],
   "note": "예약 가능한 가게. 예약 없이 들어간 사례도 있지만 가게가 좁아 자리 여유가 적음.",
   "googleReservable": true
  },
  "disagree": "가격: 야키교자는 A가 363엔(2025년 1월 블로그 기준), B가 429엔(2026년 4월 타베로그 메뉴판, 1인분 7개 기준)이고, 가라아게는 A가 가격 미확정(390~420엔, null), B가 495엔이라 둘 다 null로 둠. 전화번호: A는 06-6586-6320(Hamoni/Retty/블로그), B는 050-5457-2896(타베로그 예약 번호). 예약 근거: A는 Hamoni의 autoreserve(제3자 대행) 안내뿐이라 신뢰도가 낮다고 했고, B는 타베로그에 예약 가능으로 명시돼 있다고 함. 메뉴: 시소 교자와 수프 교자는 A에만 있음. A는 흡연 가능, 단체 방문 어려움을 적었고, B는 늦은 평일 저녁 예약 없이 갔을 때 카운터석만 남아 있었다고 적음.",
  "checkedAt": "2026-11-15"
 },
 "nedoko": {
  "menus": [
   {
    "name_ja": "ひつまぶし",
    "name_ko": "히쓰마부시",
    "desc_ko": "간사이식으로 찌지 않고 직화로 구운(지야키) 장어를 밥에 올려 그대로, 양념을 더해, 차즈케로 즐기는 덮밥",
    "price_jpy": null,
    "source_urls": [
     "https://unagi-nedoko-shinsaibashi.com/",
     "https://tabelog.com/en/osaka/A2701/A270202/27015767/dtlrvwlst/",
     "https://unagi-nedoko-shinsaibashi.com/menu/",
     "https://r.gnavi.co.jp/6d59yk8n0000/",
     "https://tabelog.com/osaka/A2701/A270202/27015767/dtlrvwlst/B516977071/"
    ]
   },
   {
    "name_ja": "うな重",
    "name_ko": "우나주(장어 찬합덮밥)",
    "desc_ko": "숯불에 직화로 구운 장어를 찬합 속 밥 위에 올린 장어덮밥",
    "price_jpy": null,
    "source_urls": [
     "https://unagi-nedoko-shinsaibashi.com/",
     "https://tabelog.com/en/osaka/A2701/A270202/27015767/",
     "https://tabelog.com/en/osaka/A2701/A270202/27015767/dtlrvwlst/",
     "https://unagi-nedoko-shinsaibashi.com/menu/",
     "https://r.gnavi.co.jp/6d59yk8n0000/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJkdyrUhTnAGAR5FDGMq2XatU/photos/AV-0GLcORaRJSz9Inoi1CC464XkFmIvjUatOwNT9HdDdocTe752k2J_pPqic_wbhR-EO92yOv8r79Eqnwb4AVf5VQ6uXEjy0d2Ectq38sdDzTVdBiuN2n2lcU2JHMZxgY3HXejjy1I24SX1Or10NMyKIFRmXujrWNCQFGlHjjOxNCUgMWDoaNPjpW7UbrGJanflLLgj81sDT81cevpkEbGmoRAaHcOFYDkWEFBQsG1Ac9XdXBfiPan2VZnk6-i3R8hDpT3qPR9wisaPfO9rDAUGbiyf7x6iDzWP8IeojpXK3llUDqg6xroj3jIOjsSLOYC14JgYR_3v7F5RU9kz4o_LCheTcR1G1E0ZJFVh5OpjAyEEMRYpB_SJChj7SqagnAoDw6lI63IMqBi9H9Dzt8fXaOleY-apPlvVJuv2wiUNlmlIqMg",
    "menu": 0,
    "w": 4800,
    "h": 3600,
    "author": "Thatphong Phatharacharukul",
    "authorUri": "https://maps.google.com/maps/contrib/117479898067861886559"
   },
   {
    "name": "places/ChIJkdyrUhTnAGAR5FDGMq2XatU/photos/AV-0GLdplveM33LDrnueRsE76v1PnHAyZsT6qIsskzl4NGhThocE-ivrXbPdCwQnPb9g2pVG0PfQgwAJG-RIADW3r9MYjygDCy4K5qjIPytp8M44a_cZXumSbjEZS-SnEP5wWEcIF3JZqstkxW8BbcNLY3Z8dvtZICSlpt8Sgte0v75lSUs1S56BRe6ZUaYqBXJetguFMsDjApCqRMedZiDpwRRC0luHBbeR_9h0DrSigzjIHuM-TkKb8nMdOmwsmqI9iYJ0P7sSgvYhBhIt4y8Tky51R6X0BA-of3NvLIBNQql5c3OkaGGD38PZ_bU5vB8OjXZRKOb_UcVqew3CJprN2XeSya5MMfzPLcDUVGIQLKHCgEaYLepgGpQ5kz7khZEEBTsw1B0w3dsSM6at40hM7MDmGUV6b-Nn1Q_Svs3yPmz-ZQ",
    "menu": 0,
    "w": 3600,
    "h": 4800,
    "author": "Joe Wang",
    "authorUri": "https://maps.google.com/maps/contrib/115519256502421764568"
   },
   {
    "name": "places/ChIJkdyrUhTnAGAR5FDGMq2XatU/photos/AV-0GLfZMfluI_TPRp5qmK9EaxNFcOvelOfqp6YdVnnqUWGpBYaM42ukWMD53AALJgI_zJO5arlE7qiZ20WFWTZQ7WiGsSub7Ks2BigUH1VB7jOimWkgmNE9pgAOzvWQYoUhyxjIi6i0I33eL7qtf7vjBkcoDCK4HvADtN2ZjU6A9DWF9h0N8MRFgsEJV8FU0b3O0P39dkCMbT9_7MzA12bn7a7908sQRurt8oAUztkFKJys3njV5aHyj-6Xh9raS_PgPGaOsv3WynsNWnt6xKcS-Sd2uZzSNuO8K0Fpo-6Ck0n-P0M9TcBcg9i88CQ4g7AmuWZpDLXWhuuP7WBEJBC7GWur2R0BHNlBd0r1FpcDFnViQNsV8a7DQSoPvnkTbLEnbmImxV5QdD0BY9cKtD3-turS7XblsoIZ1HzwgIS8Zqbk4Q",
    "menu": 1,
    "w": 1668,
    "h": 1251,
    "author": "rena_gourmet",
    "authorUri": "https://maps.google.com/maps/contrib/114185052801775828072"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "한쪽 조사에서는 붐비는 시간대 예약을 권장",
   "methods": [
    {
     "type": "tabelog",
     "url": "https://tabelog.com/osaka/A2701/A270202/27015767/",
     "note_ko": "타베로그 인터넷 예약(24시간 접수). 당일 좌석만 예약하거나 2인 테이블석을 원하면 전화로"
    },
    {
     "type": "phone",
     "url": "tel:050-5795-0628",
     "note_ko": "공식 사이트에 적힌 예약 전화번호"
    }
   ],
   "note": "혼잡할 때는 2시간 이용 제한이 있을 수 있고, 장어가 다 팔리면 영업시간 전에도 문을 닫음. 온라인 예약은 타베로그에서 24시간 받고, 당일 좌석이나 2인 테이블석은 전화로 예약해야 함.",
   "googleReservable": true
  },
  "disagree": "예약 상태: A는 '권장'(리뷰에 미리 예약했다는 글이 많음), B는 '가능'(예약은 되지만 워크인 쉬운 정도는 확인 못 함)이라 unknown으로 둠. 예약 수단: B에만 구루나비 예약이 있고, A에만 타베로그에 적힌 다른 전화번호(06-6211-0679)가 있음. B는 공식 코스 페이지에 '예약은 2명부터'라는 안내가 있다고 함. 메뉴: A는 일반 히쓰마부시·우나주(가격 미확인)를, B는 '특선' 등급(특선 히츠마부시 6,688엔, 특선 활장어 우나주 6,358엔)을 적어서 같은 음식으로 묶되 가격은 null로 둠. A 1위인 장어 꼬치구이(일반, 880엔~)는 B의 하라미 꼬치(880엔)·5종 모둠(4,180엔)과 딱 맞는 메뉴가 아니라 뺐고, A의 오마카세 코스(8,800엔/11,000엔)는 B에 없음. 인기 순서: A는 리뷰 언급 횟수로 정했고, B는 하라미가 1위라는 것만 확인했으며 나머지 순서는 순위가 아니라고 밝힘.",
  "checkedAt": "2026-11-15"
 },
 "panel-cafe": {
  "menus": [
   {
    "name_ja": "クリームブリュレパンケーキ",
    "name_ko": "크림 브륄레 팬케이크",
    "desc_ko": "크림 위를 브륄레로 구워 고소하게 마무리한 팬케이크로, 교토점 등록 메뉴에서 인기 No.1로 소개한다.",
    "price_jpy": null,
    "source_urls": [
     "https://hamoni.jp/en/shop/hCtp2ogBb5J8LCfhxutf",
     "https://tabelog.com/en/kyoto/A2601/A260301/26033749/dtlrvwlst/",
     "https://tabelog.com/en/kyoto/A2601/A260301/26033749/",
     "https://tabelog.com/kyoto/A2601/A260301/26033749/dtlmenu/",
     "https://map.yahoo.co.jp/v3/place/gLbkyScWDxs/menu"
    ]
   },
   {
    "name_ja": "抹茶大福パンケーキ",
    "name_ko": "말차 다이후쿠 팬케이크",
    "desc_ko": "말차 규히를 얹고 생크림과 팥을 곁들인 팬케이크로, 교토점 후기에서도 인기 메뉴로 언급된다.",
    "price_jpy": null,
    "source_urls": [
     "https://hamoni.jp/en/shop/hCtp2ogBb5J8LCfhxutf",
     "https://tabelog.com/en/kyoto/A2601/A260301/26033749/dtlrvwlst/",
     "https://tabelog.com/kyoto/A2601/A260301/26033749/dtlmenu/",
     "https://tabelog.com/kyoto/A2601/A260301/26033749/dtlrvwlst/B494145611/",
     "https://map.yahoo.co.jp/v3/place/gLbkyScWDxs/menu"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJmf8HT24JAWARef1gb2-f7T8/photos/AV-0GLcwcRMXDmtkSTn6hB-BeNWzaSmG2NbdHELritlRonaNt-YgyN5hPvJbppJoUG-03_L6AFYBo5jnxO2csn2TRf5usisnV-HnXy-cEmaWp0qkD_MIHFtRxYgPI0sRtm_HanljCPa_PT43cIvffJIHLSCG0H9jQ3ZVGr1G4ntQBwV0DOud20QgpJcJk3N2n3ih6G64P96tcOim-zbb3R3Xd8gB3NzRBQHTa0pCOZxlKT-W5BBIvxSa2Xw3N98_PjdGQWJldNLDu5KlKW7mJyXyZotTTav1XtUoT5iAtC9ZAlEEonS9FqR4LMTpzILVByUfw-PW98BYTJRrDIAfW_AOKnXafIiGYT_RD7cj6V6x4oUa0puhFNTvlgK4AiOSaS_BDGvesyul4ZibrWaOGP4-s4h3PUYOEB4kxYfUock6WkfCvA",
    "menu": 0,
    "w": 4800,
    "h": 3200,
    "author": "くまの中の人",
    "authorUri": "https://maps.google.com/maps/contrib/116044828404952249219"
   },
   {
    "name": "places/ChIJmf8HT24JAWARef1gb2-f7T8/photos/AV-0GLdapcUSF3a5ssKOWTGFjWIirlBT4l7JKa7uTn6tIW4__2_FrqZ-35JswGgk5yEzP0LbVAnPk3CmBzB0szOLF6HcvqefjT6VTHUsSMH2yvw2H0cBDRj6Q3lYwmFn4DPiGBPvHz_b0tyH5B-WjyYUb0bcictebvCBcHJ7uqOWkpwlQ2ishbTHltccJ6L5n_vQrZ9uTsX4tYkYt47_4AKvmHejVb3jJ7ZD8knb9E6PeQPjbVsenDo3p2fJOI3tOAA_uB1mM6TFNQ-pgQhtnN3fHyEHO8lGmTYCSfuIhFM4Q2mduYlTTPTuvo-QZRpU1qfB2PWBk1QnGjMzrkxo29Jlbjd1w88L9GamKUumNRgeW5yJEGo2uR-pd_qxNHEfwtaiSDDv7yKFVbX9XdutFef2FxqHwMAO3UVagU3V5kCOjUg5",
    "menu": 1,
    "w": 4096,
    "h": 3072,
    "author": "タケダ樹",
    "authorUri": "https://maps.google.com/maps/contrib/118306484515399126246"
   }
  ],
  "reserve": {
   "status": "recommended",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "tablecheck",
     "url": "https://www.tablecheck.com/shops/panelcafe-kyoto/reserve",
     "note_ko": "예약은 TableCheck 온라인 예약으로 받음."
    }
   ],
   "note": "타베로그 후기에 따르면 대기 줄이 길어 예약을 권한다. 예약은 TableCheck 온라인으로만 받는다.",
   "googleReservable": true
  },
  "disagree": "- 가격: 크림 브륄레 A 1,265엔 / B 1,330엔, 말차 다이후쿠 A 1,573엔 / B 1,630엔. A는 hamoni·리뷰 기준이고 B는 2025-01 타베로그 메뉴(매장 이용, 세금 포함) 기준이다.\n- 말차 메뉴 이름: A는 '庭園抹茶大福パンケーキ'(hamoni에서만 확인), B는 '抹茶大福パンケーキ'(타베로그 메뉴판)이다. 메뉴판 쪽인 B를 따랐다.\n- 초코 브륄레 팬케이크는 A에만 있어서 뺐다.\n- 예약 조건: A는 '주말·공휴일 당일 예약 불가'라고 적었고, B는 '주말·공휴일 및 당일 예약 불가'라고 적었다. B는 또 TableCheck 예약을 평일 좌석으로 한정하고 좌석 수도 제한된다고 했다.\n- TableCheck URL: A는 /shops/panelcafe-kyoto/reserve, B는 /ja/panelcafe-kyoto/reserve/message다. 예약 양식에 더 가까운 A 쪽을 골랐다.\n- 기타: B는 예약 없이 가면 줄 선 순서대로 들어간다고 했다. A에는 영업시간·건물명이 출처마다 다르다는 점과 전화번호를 뺀 이유가 더 적혀 있다.",
  "checkedAt": "2026-11-15"
 },
 "uoshin-minami": {
  "menus": [
   {
    "name_ja": "いくらのこぼれにぎり",
    "name_ko": "연어알 코보레 니기리",
    "desc_ko": "가게 특제 양념 연어알(이쿠라)을 밥 위에 넘칠 만큼 올린 대표 니기리. 가게가 내세우는 '4대 작법' 중 '코보레'",
    "price_jpy": null,
    "source_urls": [
     "https://uoshin-minami.gorp.jp/",
     "https://www.hotpepper.jp/strJ000012933/",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100000739981/menu/",
     "https://page.line.me/tva5709t",
     "https://www.hotpepper.jp/strJ000012933/food/"
    ]
   },
   {
    "name_ja": "穴子の巴にぎり",
    "name_ko": "붕장어 도모에 초밥",
    "desc_ko": "긴 붕장어를 밥에 감아도 남을 만큼 크게 올린 초밥.",
    "price_jpy": null,
    "source_urls": [
     "https://www.hotpepper.jp/strJ000012933/",
     "https://polle.com/place/49g57r/%E9%AD%9A%E5%BF%83%20%E5%8D%97%E5%BA%97",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100000739981/menu/",
     "https://page.line.me/tva5709t",
     "https://www.hotpepper.jp/strJ000012933/food/"
    ]
   },
   {
    "name_ja": "はまちの垂れにぎり",
    "name_ko": "하마치(방어 새끼) 타레 니기리",
    "desc_ko": "큰 하마치 네타가 밥 아래로 늘어지게 쥐는 니기리. 가게의 '4대 작법' 중 하나로 공식 사이트에서 소개",
    "price_jpy": null,
    "source_urls": [
     "https://uoshin-minami.gorp.jp/",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100000739981/menu/",
     "https://www.hotpepper.jp/strJ000012933/food/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJNcRw2hTnAGARR1fMxSY-ZiQ/photos/AV-0GLeKEvj2ZVd_7ennMHqfOBK6IalLSANWJyX88gmIW524gdQ1s45mIRYUiQ6Alyf1qFHFJ-jRviErV5LJd98M1802o49qvC2GlW30M3sV_ZaEvFIO8pia80FVNiSmI1DqCXjzt68u99XxP9KNIdyHSbBk1vGDBAjJRIyaS4SrOrxHpc9q74t_SXOG3huUUuNMSDpOIdiwWKFiRf17ieWsu7M3z6vBmk-A1_WjPC6SblKOnG-FmBsKasPRsmCEgw_BXqSj6palK1YwaSwaUiDVXMMxqkCM0YMc_DPsdkG9vNTOI7eoQ9Rz_R9fl3jgcZsKRJ_APrBLcUSGBAWw-8jCQOoxlllu-8OVuzs4QPgAZfkPQo91ki73vBzbasr-gdaT1j8TJLvRqOq3p4OzMytc0rx2m_mTpEo",
    "menu": 0,
    "w": 2508,
    "h": 1672,
    "author": "元祖ぶっち切り寿司 魚心南 難波店",
    "authorUri": "https://maps.google.com/maps/contrib/109014423127569158108"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "hotpepper",
     "url": "https://www.hotpepper.jp/strJ000012933/yoyaku/",
     "note_ko": "핫페퍼 온라인 예약(인원·날짜·시간 선택). 공식 사이트에서도 연결됨."
    },
    {
     "type": "phone",
     "url": "tel:050-5489-4734",
     "note_ko": "A는 공식 사이트 예약 전화로 050-5489-4734를, B는 06-6211-9401을 제시함. 두 번호가 서로 다름."
    }
   ],
   "note": "핫페퍼 온라인 예약과 전화 예약을 받음.",
   "googleReservable": true
  },
  "disagree": "· 인기 순서: A는 이쿠라 코보레 → 아나고 → 하마치 순(언급 횟수 기준), B는 Retty 순위를 따라 아나고 도모에 → 하마치 다레 → 이쿠라 코보레 순.\n· 단새우(甘海老, 968엔)는 A에만 있음.\n· 아나고 가격: A는 780엔(핫페퍼 2관), B는 표기가 서로 충돌한다며 null로 둠(Retty 340·350·460엔, 핫페퍼 780·780·1,380엔과 '1개 가격' 표기).\n· 예약 전화번호: A는 050-5489-4734(공식 사이트 기준, 06-6211-9401은 예약 전용인지 모른다고 함), B는 06-6211-9401(공식 사이트 기준).\n· 예약 수단: 구루나비 넷 예약은 A에만(B는 연결은 확인했지만 페이지를 못 읽어 뺌), 타베로그 예약은 B에만 있음.\n· 대기: A는 2024년 리뷰 2건에서 대기 없이 바로 들어갔다고 했고, B는 대기 시간을 확인하지 못했다고 함. B는 타베로그에 가게 상황에 따라 예약을 못 받을 수 있다는 안내가 있다고 덧붙임.",
  "checkedAt": "2026-11-15"
 },
 "kitada": {
  "menus": [
   {
    "name_ja": "貝だし麺",
    "name_ko": "카이다시멘 (조개 육수 라멘)",
    "desc_ko": "대합·바지락·가리비 육수와 조갯살을 듬뿍 넣은 조개 백탕(貝白湯) 라멘으로, 이 가게의 간판 메뉴. 특제(特製)는 리뷰 시점에 따라 1,200~1,300엔으로 확인되고, 2023년 기준 일반은 950엔이었음.",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/en/kyoto/A2601/A260101/26036754/",
     "https://retty.me/area/PRE26/ARE658/SUB11101/100001605922/",
     "https://kyotopi.jp/articles/rnb0L",
     "https://baila.hpplus.jp/blogs/matsuda_misaki/59386",
     "https://genjitsutouhi.com/kaidashi-men-kitada-kyoto/",
     "https://tabelog.com/kyoto/A2601/A260101/26036754/dtlrvwlst/B519897101/",
     "https://ramenhuhu.com/ramen-kaidashimen_kitada"
    ]
   },
   {
    "name_ja": "貝のしぐれ煮ご飯",
    "name_ko": "조개 시구레니 밥",
    "desc_ko": "조개를 생강·간장에 졸인 시구레니를 얹은 밥. 남은 라멘 국물을 부어 죽처럼 먹는 방법이 인기임. 소(小)는 Retty 리뷰 시점에 200엔이었음.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/area/PRE26/ARE658/SUB11101/100001605922/",
     "https://tabelog.com/en/kyoto/A2601/A260101/26036754/",
     "https://kyotopi.jp/articles/rnb0L",
     "https://genjitsutouhi.com/kaidashi-men-kitada-kyoto/",
     "https://ramenhuhu.com/ramen-kaidashimen_kitada",
     "https://tabelog.com/kyoto/A2601/A260101/26036754/dtlrvwlst/B530065986/"
    ]
   },
   {
    "name_ja": "蛤らぁ麺（塩／醤油）",
    "name_ko": "하마구리 라멘 (대합 라멘)",
    "desc_ko": "대합 육수를 사용하며 소금맛 또는 간장맛을 선택할 수 있는 라멘.",
    "price_jpy": null,
    "source_urls": [
     "https://baila.hpplus.jp/blogs/matsuda_misaki/59386",
     "https://kyotopi.jp/articles/rnb0L",
     "https://ramenhuhu.com/ramen-kaidashimen_kitada",
     "https://norman.jp/ramen/kaidashimen-kitada/",
     "https://tabelog.com/kyoto/A2601/A260101/26036754/dtlrvwlst/B519897101/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJiYzHABEJAWAR4qy5YE9hKO0/photos/AV-0GLcVwk8gyEKxjjt5Q1dImnD-2E8V1TOEsfh-oCj6VEc4ulFCLZNLUwhE9UyeisBj80hdNizD21KeuNcNj2MPxGdylGSDCq5PJl-SmD2DyaTj3bicGCufqCwO39RPJGGAHEE82T7FmXb-MNt-PjEPhAR1xVhZQ2SFzx6Kn5ZA2nfYcjHIqPJehmit0Q8tZ7WFTZ5If1_Zv7VXQPtEBYuP_7_NBtcjqfXLBzY9kQw15RR_QzUXem8iz6klfIt2-KCeRz2QCWN4uCUiGMOmzSsqXtrzm7Z5fAFetd8dS1n50v-GjkLi3Ifb5TVJZ-9jFkdZz_l-eh8pFBZ2WFBfLItXVvZLA8maWF9sYmk87VJgU5hvA7ArdTFR5fJl_hx4pCS_Cp6-mYiauFcIxzZvHRKedaD7S0q0J2Wfeu15CaAqorBMqQ",
    "menu": 1,
    "w": 4032,
    "h": 3024,
    "author": "NMRA “ぴーにゃ”",
    "authorUri": "https://maps.google.com/maps/contrib/111319885836000402845"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "예약을 받지 않으며, 줄을 서서 기다린 뒤 식권을 구매하는 방식임.",
   "googleReservable": false
  },
  "disagree": "메뉴: 中華そば（塩／醤油）는 A에만 있음. 인기 순서도 다른데, B는 蛤らぁ麺을 2위, しぐれ煮ご飯을 3위로 둠. 가격: B는 しぐれ煮ご飯 보통(並)을 300엔으로 확정했지만, A는 가격을 비워 두고 소(小) 200엔(Retty 리뷰 시점)만 언급함. 라멘 가격도 B는 최근 방문기 기준 貝だし麺 1,100엔·蛤らぁ麺 1,200엔(세금 포함 여부 미확인)으로 적었고, A는 2023년 기준 950엔과 特製 1,200~1,300엔으로 적음. 예약 메모: A만 좌석 수(11석), 대기 사례, 결제 수단이 출처마다 다르다는 점(현금만 vs 카드·QR)을 적었고, B만 가게 앞 차도 쪽에 줄을 서고 직원이 부르면 식권을 산다는 절차를 적음.",
  "checkedAt": "2026-11-15"
 },
 "goku-kawaramachi": {
  "menus": [
   {
    "name_ja": "国産A5和牛100gセット",
    "name_ko": "국산 A5 와규 100g 세트",
    "desc_ko": "A5 와규 서로인 스키야키 1인 세트. 밥·미소국·달걀 무한 리필, 트러플 달걀밥(TKG) 포함",
    "price_jpy": 4800,
    "source_urls": [
     "https://www.tablecheck.com/ja/wagyusukiyaki-goku-kawaramachi",
     "https://kyo-soku.com/2025/04/18/wagyu-sukiyakigoku/",
     "https://tabelog.com/kyoto/A2601/A260201/26042571/"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "tablecheck",
     "url": "https://www.tablecheck.com/shops/wagyusukiyaki-goku-kawaramachi/reserve?utm_source=lp",
     "note_ko": "TableCheck 온라인 예약(공식 홈페이지 예약 버튼 연결 페이지)"
    },
    {
     "type": "phone",
     "url": "tel:+81757088156",
     "note_ko": "전화 예약·문의 (075-708-8156)"
    }
   ],
   "note": "예약 가능하며 TableCheck 온라인 예약과 전화로 예약할 수 있음. 실제 대기 시간은 양쪽 모두 확인하지 못함.",
   "googleReservable": true
  },
  "disagree": "메뉴: A는 100g·150g·250g·1파운드 세트 4종을 적었고, B는 인기 순위를 확인할 수 없다며 100g 세트만 적음. 예약 방법: B만 타베로그 온라인 예약을 적었음(A는 타베로그 가게 페이지를 찾지 못했다고 함). TableCheck URL은 A가 가게 소개 페이지, B가 예약 페이지. 비고: A만 영업시간 11:00~21:00·정기휴일 없음·1인 손님은 카운터석이라는 내용을 적었고, B만 혼잡 시 45분 이용 제한·15분 넘게 연락 없으면 취소·8명 이상은 직접 문의라는 내용을 적음.",
  "checkedAt": "2026-11-15"
 },
 "goku-dotonbori": {
  "menus": [
   {
    "name_ja": "国産A5和牛150gセット",
    "name_ko": "일본산 A5 와규 150g 세트",
    "desc_ko": "A5 등급 와규 등심 150g으로 먹는 1인 1냄비 스키야키 세트. 밥·미소된장국·달걀은 무료 리필이고 트러플 달걀밥(TKG)이 함께 나옴",
    "price_jpy": 5800,
    "source_urls": [
     "https://www.tablecheck.com/en/goku-dotonbori",
     "https://ryukyushimpo.jp/prtimes/entry-5531188.html",
     "https://www.tablecheck.com/ja/goku-dotonbori",
     "https://tabelog.com/osaka/A2701/A270202/27159164/party/"
    ]
   },
   {
    "name_ja": "国産A5和牛250gセット",
    "name_ko": "일본산 A5 와규 250g 세트",
    "desc_ko": "A5 와규 등심 250g 1인 스키야키 세트. 밥·된장국·달걀은 무료 리필, 트러플 달걀밥 포함",
    "price_jpy": 7800,
    "source_urls": [
     "https://www.tablecheck.com/en/goku-dotonbori",
     "https://ryukyushimpo.jp/prtimes/entry-5531188.html",
     "https://www.tablecheck.com/ja/goku-dotonbori",
     "https://tabelog.com/osaka/A2701/A270202/27159164/party/"
    ]
   },
   {
    "name_ja": "国産A5和牛100gセット",
    "name_ko": "일본산 A5 와규 100g 세트",
    "desc_ko": "A5 와규 서로인 100g을 사용하는 1인 냄비 스키야키로, 밥·미소시루·달걀 리필과 마무리 트러플 달걀밥이 포함된다.",
    "price_jpy": 4800,
    "source_urls": [
     "https://www.tablecheck.com/en/goku-dotonbori",
     "https://www.tablecheck.com/ja/goku-dotonbori",
     "https://tabelog.com/osaka/A2701/A270202/27159164/party/"
    ]
   },
   {
    "name_ja": "国産A5和牛1ポンドセット",
    "name_ko": "일본산 A5 와규 1파운드 세트",
    "desc_ko": "A5 와규 서로인 1파운드 스키야키에 밥·미소시루·달걀 리필과 트러플 달걀밥이 포함된 세트.",
    "price_jpy": 10800,
    "source_urls": [
     "https://www.tablecheck.com/en/goku-dotonbori",
     "https://www.tablecheck.com/ja/goku-dotonbori",
     "https://tabelog.com/osaka/A2701/A270202/27159164/party/"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "tablecheck",
     "url": "https://www.tablecheck.com/ja/goku-dotonbori",
     "note_ko": "TableCheck 도톤보리점 전용 페이지에서 날짜·인원·시간을 골라 온라인 예약"
    },
    {
     "type": "phone",
     "url": "tel:06-7777-7422",
     "note_ko": "도톤보리점 예약·문의 전화"
    }
   ],
   "note": "TableCheck 온라인 예약과 전화(06-7777-7422)로 예약할 수 있습니다.",
   "googleReservable": true
  },
  "disagree": "- 메뉴 순서: A는 체인 전체 보도자료를 근거로 150g·250g을 앞에 뒀습니다(이 지점 고유의 순위는 아님). B는 인기순이 아니라 TableCheck에 실린 순서이며 100g이 첫 번째입니다.\n- 예약 방법: B는 타베로그 온라인 예약 페이지를 제시했지만, A는 타베로그 페이지를 찾지 못했다고 했습니다.\n- 예약 조건: 붐비는 시간 45분 시간제한과 예약 시간 15분이 지나도 연락이 없으면 취소될 수 있다는 내용은 A에만 있습니다. B는 예약 필수 여부와 대기 상황을 확인하지 못했다고 했습니다.\n- 기타: 영업시간(10:00~23:00, 보도자료 기준)은 A에만 있습니다. 메뉴 이름을 A는 '국산', B는 '일본산'으로 옮겼습니다.",
  "checkedAt": "2026-11-15"
 },
 "tonemon": {
  "menus": [
   {
    "name_ja": "林 SPF ポーク ロース 150ｇ",
    "name_ko": "하야시 SPF 포크 등심 150g",
    "desc_ko": "브랜드 돼지 '하야시 SPF 포크' 등심(150g/180g) 돈카츠 정식. 밥·돼지고기 된장국(돈지루)·양배추가 나오고, 7가지 양념과 무화과 소스를 곁들여 먹음",
    "price_jpy": null,
    "source_urls": [
     "https://www.life-info.co.jp/miyagawatonemon/",
     "https://kyoto-hannarism.com/miyagawaton-emon-yoyaku/",
     "https://tabelog.com/en/kyoto/A2601/A260201/26039226/",
     "https://www.tablecheck.com/ja/miyagawatonemon",
     "https://tabelog.com/kyoto/A2601/A260201/26039226/dtlmenu/lunch/",
     "https://ameblo.jp/sorakaranotayori78/entry-12864063622.html",
     "https://osumituki.com/foodie/188005.html"
    ]
   },
   {
    "name_ja": "林 SPF ポーク ヘレ 120ｇ",
    "name_ko": "하야시 SPF 포크 안심 120g",
    "desc_ko": "지방이 적고 부드러운 하야시 SPF 돼지고기 안심 돈카츠. 가격은 점심 기준.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/area/PRE26/ARE112/SUB11201/100001698731/",
     "https://kyoto-hannarism.com/miyagawaton-emon-yoyaku/",
     "https://tabelog.com/kyoto/A2601/A260201/26039226/dtlmenu/lunch/",
     "https://tabelog.com/kyoto/A2601/A260201/26039226/",
     "https://osumituki.com/foodie/188005.html"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJRXiQ2JcJAWARlypCklgnL3Y/photos/AV-0GLc3-MX5qAOke_M4Hr-QQonO8xEwpksFQj_4YLI9uhfvYsgsANeagjqyKpgwbFVDt1EpmLM5yAKgeL97KONIFDDlhsL6-LCFaehzd-BxHgSi9QvjctQV9C-wT1GfKcdKo2zaz_4GZGdq4L0e002JIR_d7jKjfCGk-SPf2imsT_2ldcIDa4nkw6JtjMO_B4Ww0qzwvcTkMwNuA6VJ_gszg-zvrP37Eu2HWFqrhgiPCIjFVaaAyyArCJi-r0VEbfMVWXMC-5h1VDkFT2eSKhasT4OMXElfPg3inhOA77WbJQZcjnyRKRsAbaCpqt_O7ZwINOzJsLVYscCY58dScT9PbXLwiQDU3wpf-j4MYW9RMm9cTa0CNLIlHspv7ojks3-RUCl4RCbqkDMxq9mx5v4UqP5LhU0LgHnmKxl8UlOxey1AAw",
    "menu": 1,
    "w": 4800,
    "h": 3600,
    "author": "周月茹",
    "authorUri": "https://maps.google.com/maps/contrib/101875404957302419221"
   }
  ],
  "reserve": {
   "status": "recommended",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "tablecheck",
     "url": "https://www.tablecheck.com/ja/miyagawatonemon",
     "note_ko": "TableCheck 온라인 예약 (날짜·인원·시간 선택)"
    },
    {
     "type": "phone",
     "url": "tel:050-5596-6581",
     "note_ko": "타베로그에 기재된 예약·문의 전화"
    }
   ],
   "note": "예약 권장. 예약 없이 가면 대기할 수 있으며, 가게 앞에 줄 서지 말고 순번 대기 시스템에 등록하라고 안내함.",
   "googleReservable": true
  },
  "disagree": "가격: 로스는 A가 2,500엔(2024년 블로그, 180g 기준), B가 2,700엔(2026년 6월 타베로그 점심, 150g 기준). 헤레는 A에 가격이 없고 B는 2,600엔(점심). B는 저녁에 로스 3,100엔·헤레 3,000엔이라고 함. 메뉴: 돈카츠 다시 오차즈케·도쿄 멘치카츠(680엔)는 A에만 있음. 예약 방법: 타베로그 온라인 예약은 B에만, 두 번째 전화번호(080-4087-9504)는 A에만 있음. A에만 있는 내용: 15분 넘게 늦으면 자동 취소, 1인 3,000엔 취소료, 2024년 2월에 예약 없이 바로 들어갔다는 블로그 후기.",
  "checkedAt": "2026-11-15"
 },
 "sashisu-namba": {
  "menus": [
   {
    "name_ja": "エビ７-SEVEN-",
    "name_ko": "에비 세븐(새우 7)",
    "desc_ko": "붉은새우 일곱 마리를 올린 초밥.",
    "price_jpy": 1188,
    "source_urls": [
     "https://ameblo.jp/kakeimania/entry-12878778677.html",
     "https://ameblo.jp/acchi814/entry-12774826967.html",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100001663506/",
     "https://tabelog.com/osaka/A2701/A270202/27130472/dtlmenu/",
     "https://maidonanews.jp/article/14680643?page=1"
    ]
   },
   {
    "name_ja": "とろ鉄火巻",
    "name_ko": "참치 뱃살 김초밥",
    "desc_ko": "참치 뱃살이 김초밥 밖으로 크게 튀어나오도록 담은 대표 메뉴.",
    "price_jpy": 1078,
    "source_urls": [
     "https://ameblo.jp/acchi814/entry-12774826967.html",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100001663506/",
     "https://tabelog.com/osaka/A2701/A270202/27130472/dtlmenu/",
     "https://maidonanews.jp/article/14680643?page=1"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "예약을 받지 않는 가게입니다. 개점 전부터 줄이 생긴다는 후기가 있습니다.",
   "googleReservable": false
  },
  "disagree": "- 예약 불가의 근거가 다릅니다. A는 블로그 1건을 근거로 들며 타베로그 지점 페이지를 찾지 못했다고 했습니다. B는 타베로그 지점 페이지(27130472)에 예약 불가가 명시되어 있다고 했습니다.\n- 인기 메뉴가 다릅니다. A에만 있는 메뉴는 스시집 포테이토 샐러드(440엔)와 잔마이 시리즈입니다. B에만 있는 메뉴는 우니쿠(649엔)와 우나카츠 샌드(1,298엔)입니다. 이 두 메뉴는 A의 인기 메뉴 목록에는 없고 note에만 나옵니다.\n- 순위가 다릅니다. 1·2위가 A는 에비 세븐, 토로 뎃카마키 순이고 B는 그 반대입니다.\n- 에비 세븐 설명이 다릅니다. A는 노른자 소스를 곁들인 '덮밥 스타일'이라고 했고, B는 붉은새우 7마리를 올린 '초밥'이라고 했습니다.\n- 가격 설명이 다릅니다. A는 가격이 시기마다 다르다(에비 세븐 1,078엔→1,188엔, 토로 뎃카마키 980엔(세금 별도))고 적었습니다. B는 2024년 7월 타베로그 메뉴에 나온 세금 포함 금액이라고 적었습니다.\n- 전화번호와 영업시간이 출처마다 다르다는 점은 A에만 적혀 있습니다.",
  "checkedAt": "2026-11-15"
 },
 "momiji": {
  "menus": [
   {
    "name_ja": "もみじまぜ（御坊まぜ焼き）",
    "name_ko": "모미지 마제(고보 마제야키)",
    "desc_ko": "야키소바에 달걀을 섞어 굳힌 와카야마 고보 지역식 철판구이. 큰 새우·오징어·문어·가리비·돼지고기가 들어가고 반숙 달걀을 얹어 낸다",
    "price_jpy": null,
    "source_urls": [
     "http://mach-no-osusume.com/2022/03/17/1-1361/",
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/menu",
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/review",
     "https://ameblo.jp/nonnakamoto/entry-12477535109.html",
     "https://tabelog.com/matome/26313/"
    ]
   },
   {
    "name_ja": "とん平",
    "name_ko": "돈페이야키",
    "desc_ko": "바삭한 돼지고기와 튀김 부스러기(텐카스)를 부드러운 달걀로 감싸고 소스·마요네즈·파래가루를 뿌린 오믈렛식 철판요리",
    "price_jpy": null,
    "source_urls": [
     "https://ameblo.jp/nonnakamoto/entry-12477535109.html",
     "https://aumo.jp/articles/58973",
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/review",
     "https://tabelog.com/matome/25689/",
     "https://tabelog.com/matome/26313/",
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/menu"
    ]
   },
   {
    "name_ja": "もみじ玉",
    "name_ko": "모미지 타마",
    "desc_ko": "큰 새우, 관자, 문어, 오징어, 돼지고기와 달걀프라이가 들어가는 두툼한 오코노미야키.",
    "price_jpy": null,
    "source_urls": [
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/menu",
     "https://map.yahoo.co.jp/v3/place/WAxww-IZIbQ/review",
     "https://www.pretty-online.jp/news/7788/",
     "https://tabelog.com/matome/25689/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJMddDt0XnAGARTOfGR4srmtw/photos/AV-0GLcIlERBTwlrRpWSbB9GV2g_LbGe_7zlsUaEFDmXzSFKaH3hu3qk_6-7vRxEIitxr4npCDqqQN5o6lRzs9J5ARhyINirW767187tmVWaj4cBPjCEwew4mk6keXc-BIda5scI949sQezrsexczFpWyFpBP7SQo7phoqQqnyUMghc6FFt74TX73Xlbwu0O0TphEaQpqW-3L0cHRcVotwuWWvnjOtpopO4d3zOS_g6mnI-LZ5ffwwv52urRUCIc4Bv_GNiTewzb-a9-YYc5tTRWYoArrR6XcKf6RS6dTzdRkrYYpo10sBJRmBIBkObdpOa_4DshjOdp8gqEJQ8Q7slGNZbHTuKWfYBROYYY5EYzVswSNqBdCy-Zuztqn9c0ykWDrtA5sumpEQkPR3tcKaZv94R7Nb-sBijR2nFvbueSEmJldQ",
    "menu": 1,
    "w": 4000,
    "h": 2252,
    "author": "대표",
    "authorUri": "https://maps.google.com/maps/contrib/107645719070054755329"
   },
   {
    "name": "places/ChIJMddDt0XnAGARTOfGR4srmtw/photos/AV-0GLdVUgbHgiUeEUGeFv4Xkgq3EB-eV5luxy5HFrkaVxv92_KJYeTaPk5z4xEaDOgxK3jYOGtZ5UaJP0Q1uXKQyuiLajL4UrpQuTyWuoRTPPkgbFRV7qIJsP9zav4YVH2M8w-dz4ZNVuyfopY3-7PArumX3hB09wYUwbVG9i88E2zDTzuKjI2q2VjEYKd60EPDvnuUsnQLZLjaCAOVBeJ6W9SIk8-dWltpOgS7Y870B9iyadfcstgzijg68HZV_rRns9bEI_-yiD_LN4Yu4px0A6O4e5GfJJvVRv5EHlcidfGZAHlhOpODyTyCMhhhztzTv1v0zLNes6iSiqpLudW5jN7Q68LMG1EKhJFhznirBh0AH1fcpW1rVsaICFvAKE-hnrZRnE8YRHQ0YJUsR5R8gxkjDo5K9XbXGDqFn0h8JUJ6Dw",
    "menu": 1,
    "w": 3024,
    "h": 2793,
    "author": "Bakabon Foodie",
    "authorUri": "https://maps.google.com/maps/contrib/118108983178788543414"
   }
  ],
  "reserve": {
   "status": "unknown",
   "agree": false,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "phone",
     "url": "tel:+81667733080",
     "note_ko": "전화번호 06-6773-3080(타베로그 등록 번호). A는 1층 오코노미야키석은 예약 불가이고 전화 예약은 2층 몬자야키 매장만 된다는 리뷰를 근거로 들었고, B는 개점 시간에 예약할 수 있다는 안내가 있다고 함."
    }
   ],
   "note": "타베로그에는 '예약 가능'으로 등록돼 있고, 개점 시간에 예약할 수 있는 것으로 보인다는 안내가 있음. 전화번호는 06-6773-3080.",
   "googleReservable": true
  },
  "disagree": "예약: A는 not_accepted(1층은 예약 불가라는 2024년 Yahoo 리뷰, 검색 결과 요약도 '예약 불가'). B는 recommended(타베로그에 예약 가능으로 등록, 후기에서 사전 예약 권장). 그래서 unknown으로 둠. 메뉴: A에만 豚玉(902엔)이 있음. 인기 순서도 다름(A: 마제→돈페이→부타타마→모미지타마, B: 모미지타마→돈페이→마제). もみじまぜ 설명이 다름(A: 야키소바에 달걀을 섞어 굳힘, B: 오코노미야키 반죽 없이 면을 구움). もみじ玉 재료는 A가 확인하지 못했고 B만 적음. 가격: 공통 메뉴는 양쪽 모두 null. A는 참고 가격(마제 1,780~1,800엔, 모미지타마 1,780엔, 돈페이 680엔)을 메모에만 적음.",
  "checkedAt": "2026-11-15"
 },
 "hashiba-nikusara": {
  "menus": [
   {
    "name_ja": "特選和牛シャトーブリアン",
    "name_ko": "특선 와규 샤토브리앙",
    "desc_ko": "가게 간판 메뉴인 와규 안심 중심부(샤토브리앙) 구이. 하루 10팀 한정이고, 전날까지 예약하면 할인가로 준비해 줌",
    "price_jpy": null,
    "source_urls": [
     "https://keke702.gorp.jp/",
     "https://www.hotpepper.jp/strJ004004984/",
     "https://foodle.pro/restaurants/osaka/hashiba-ke-nikusara-hashiba-s-dish-of-meat",
     "https://japan-food.guide/restaurants/685",
     "https://tabelog.com/osaka/A2701/A270103/27129739/",
     "https://tabelog.com/osaka/A2701/A270103/27129739/dtlmenu/"
    ]
   },
   {
    "name_ja": "和牛炙りユッケ",
    "name_ko": "와규 아부리 육회",
    "desc_ko": "겉을 살짝 구운 와규 육회로, 샤토브리앙과 나란히 인기 상품으로 소개된다.",
    "price_jpy": null,
    "source_urls": [
     "https://keke702.gorp.jp/",
     "https://www.hotpepper.jp/strJ004004984/",
     "https://japan-food.guide/restaurants/685",
     "https://foodle.pro/restaurants/osaka/hashiba-ke-nikusara-hashiba-s-dish-of-meat",
     "https://tabelog.com/osaka/A2701/A270103/27129739/dtlmenu/",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100001561057/"
    ]
   },
   {
    "name_ja": "和牛一口バタすき（和牛クラシタ）",
    "name_ko": "한입 와규 버터 스키야키·구라시타",
    "desc_ko": "와규 구라시타를 버터에 살짝 구워 특제 스키야키 양념으로 맛낸 요리.",
    "price_jpy": null,
    "source_urls": [
     "https://keke702.gorp.jp/",
     "https://foodle.pro/restaurants/osaka/hashiba-ke-nikusara-hashiba-s-dish-of-meat",
     "https://tabelog.com/osaka/A2701/A270103/27129739/dtlmenu/",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100001561057/"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "gurunavi",
     "url": "https://r.gnavi.co.jp/plan/n52xpf5z0000/plan-reserve/plan/plan_list/?sc_cid=gorp_course_list",
     "note_ko": "라쿠텐 구루나비 넷 예약. 좌석만 예약 및 전날 예약 한정 샤토브리앙 플랜 있음"
    },
    {
     "type": "hotpepper",
     "url": "https://www.hotpepper.jp/strJ004004984/",
     "note_ko": "핫페퍼 넷 예약. 리퀘스트 예약은 방문 전날 17시까지 받음"
    },
    {
     "type": "phone",
     "url": "tel:050-5489-3245",
     "note_ko": "공식(구루나비) 페이지에 적힌 예약용 번호로 보임. 다른 번호(070-2831-9459)도 있음. 샤토브리앙 할인은 전날까지 알려야 함"
    }
   ],
   "note": "예약을 받으며, 샤토브리앙 할인가(세금 포함 2,178엔)는 전날까지 예약해야 적용됨. 줄서기·대기 시간은 두 조사 모두 확인하지 못함.",
   "googleReservable": true
  },
  "disagree": "메뉴: A의 4위 '아부리 레바'는 B에 없고, B의 3위 '두툼한 소혀 구이(厚切りタン)'는 A에 없음. 가격: 샤토브리앙(A는 출처마다 달라 null, B는 정상가 4,378엔), 육회(A null, B 1,210엔), 버터 스키야키(A 1,080엔, B 1,188엔)가 서로 다름. 전화번호: A는 050-5489-3245(공식 구루나비), B는 070-2831-9459. 구루나비 링크: A는 공식 gorp 페이지, B는 플랜 예약 페이지. 타베로그 예약은 B에만 있음(A는 타베로그를 확인하지 못함). B만 샤토브리앙 반값 플랜에 '다른 메뉴 3품 주문', '일행당 1품 한정' 조건을 적었음.",
  "checkedAt": "2026-11-15"
 },
 "nidosando": {
  "menus": [
   {
    "name_ja": "純けいもも",
    "name_ko": "준케이 모모(닭다리살) 꼬치",
    "desc_ko": "가게 대표 메뉴인 '준케이' 야키토리의 다리살 꼬치. 소금·타레·겨자타레 세 가지 맛이 있고 1개씩 주문 가능",
    "price_jpy": 198,
    "source_urls": [
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/",
     "https://tabelog.com/en/osaka/A2701/A270103/27130709/",
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/menu/",
     "https://www.hotpepper.jp/strJ003463003/",
     "https://tabelog.com/osaka/A2701/A270103/27130709/dtlmenu/"
    ]
   },
   {
    "name_ja": "謹製 デミ味噌牛煮込み",
    "name_ko": "특제 데미미소 소고기 조림",
    "desc_ko": "데미글라스와 된장 맛의 소고기 조림. 공식 사이트에서 가게 No.1 명물로 소개함",
    "price_jpy": 759,
    "source_urls": [
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/",
     "https://tabelog.com/en/osaka/A2701/A270103/27130709/",
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/menu/",
     "https://tabelog.com/osaka/A2701/A270103/27130709/dtlmenu/"
    ]
   },
   {
    "name_ja": "純けい生つくね 月見",
    "name_ko": "준케이 생 츠쿠네 츠키미",
    "desc_ko": "준케이 닭고기로 만든 츠쿠네(닭고기 완자) 꼬치에 날달걀 노른자를 곁들인 메뉴",
    "price_jpy": 275,
    "source_urls": [
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/",
     "https://www.dynacjapan.com/brands/nidosando/shops/tenma/menu/",
     "https://www.hotpepper.jp/strJ003463003/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJez_xNnznAGARKKLaNLExe-o/photos/AV-0GLeSQUZb2nMT7Wh_sFn3Z2nweY_VwEs4p9HmDCgrZi1L-MBs6PdGUCSetgQ22NCmZNxUp5VH0_Zwg_whnjM6MVWWFyvdI0PL5d2I1Xq4K43lL8hrePdU4XRZA9jMyYsLI-gm1jxPeniVXio0U0WQH1RRT34F2pStIAczwNaIOmiq4dmAyyxL_SnPVErgqRdNhiBaZcu6NUh7sTBucfBMjhXIp_UEjr1foGMLlAdEPU3IPH3SeFSglBh7w7uLguDfi6nZMvPm9wCy-M_TTmsBZI2CEP-gTqzm68-5Jo0x-SftRBQ-YBSR3jUARClpvvcYO1dQ0qLDcDdZMrPW0cm7Kw1sgOozHKMU2MzD6-JVpdYt7ITxW58cvv4C1GQmU2TNoiV17LOjeoHc4eZedFHY2cpZpr1q4D8i4S8ekeyeN8luVg",
    "menu": 2,
    "w": 1280,
    "h": 1280,
    "author": "純けい焼鳥 ニドサンド 天満店",
    "authorUri": "https://maps.google.com/maps/contrib/115466467324011552298"
   }
  ],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [
    {
     "type": "official_site",
     "url": "https://booking.ebica.jp/webrsv/search/e014001550/27891",
     "note_ko": "공식 사이트에서 연결되는 ebica 웹 예약 폼"
    },
    {
     "type": "phone",
     "url": "tel:050-5590-3274",
     "note_ko": "타베로그에 기재된 예약·문의 전화"
    }
   ],
   "note": "예약 가능(공식 사이트 ebica 웹 예약, 전화). 대기시간이나 예약 없이 방문했을 때 들어가기 쉬운지는 양쪽 모두 확인하지 못함.",
   "googleReservable": true
  },
  "disagree": "인기 순서: A는 준케이 모모를 1위로, B는 데미미소 소고기 조림(공식 'No.1 명물')을 1위로 둠. A에만 명란 다시마키 달걀말이(869엔)가 있음. 예약 수단: A에만 매장 전화(06-6355-6171)가 있고 B에만 핫페퍼 온라인 예약이 있음. A에만 코스 정보가 있음(공식 3,500엔·2,000엔부터, 영문 타베로그 3,800엔·4,500엔). B에만 '9명 이상은 문의' 안내와 '핫페퍼에는 소고기 조림이 750엔으로 적혀 있음'이라는 메모가 있음.",
  "checkedAt": "2026-11-15"
 },
 "sukiyanen": {
  "menus": [
   {
    "name_ja": "豚ねぎ焼き",
    "name_ko": "돼지고기 네기야키",
    "desc_ko": "밀가루 반죽에 파를 듬뿍 넣고 돼지고기를 더해 철판에 구운 오사카식 파전. 오징어·새우 토핑도 가능",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/en/osaka/A2701/A270201/27055414/",
     "https://tabelog.com/en/osaka/A2701/A270201/27055414/dtlrvwlst/",
     "https://tabelog.com/osaka/A2701/A270201/27055414/dtlrvwlst/B496232904/",
     "https://ameblo.jp/fahirorin/entry-12531752915.html",
     "https://map.yahoo.co.jp/v3/place/IaKU572D862/review",
     "https://www.ubereats.com/jp/store/お好み焼き好きやねん-okonomiyaki-sukiyanen/UZC45e4aRL2YZtCEr3YMKg"
    ]
   },
   {
    "name_ja": "豚玉お好み焼き",
    "name_ko": "부타타마 오코노미야키",
    "desc_ko": "돼지고기를 넣은 기본 오코노미야키. 리뷰에서는 잘게 썬 양배추가 많이 들어가 폭신하다는 평",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/en/osaka/A2701/A270201/27055414/dtlrvwlst/",
     "https://retty.me/area/PRE27/ARE94/SUB62304/100000966369/",
     "https://map.yahoo.co.jp/v3/place/IaKU572D862/review",
     "https://ameblo.jp/fahirorin/entry-12531752915.html",
     "https://www.ubereats.com/jp/store/お好み焼き好きやねん-okonomiyaki-sukiyanen/UZC45e4aRL2YZtCEr3YMKg"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "한쪽 조사에서는 붐비는 시간대 예약을 권장",
   "methods": [
    {
     "type": "phone",
     "url": "tel:+81662138688",
     "note_ko": "전화 예약(06-6213-8688). 타베로그에 예약 가능으로 등록됨. 양쪽 번호가 같아서 해외에서도 걸 수 있는 국제 형식을 사용"
    }
   ],
   "note": "타베로그에 '예약 가능'으로 등록되어 있고, 전화(06-6213-8688)로 예약할 수 있음.",
   "googleReservable": true
  },
  "disagree": "예약 상태: A는 '예약 가능(accepted)'이라는 표시만 확인했고, B는 2026년 9월 후기(개점 직후엔 예약 없이 들어갔지만 이후 예약 손님으로 자리가 참)를 근거로 '권장(recommended)'으로 봄. 둘이 달라서 unknown으로 둠. 메뉴: A는 4개(아고스지 800엔, 아마나가 750엔 포함)를 올렸고, B는 네기야키·부타타마 2개만 올림. 네기야키·부타타마 가격은 양쪽 다 확인하지 못함. A에만 있는 정보: 카운터 15석, 영업 18:00~02:00(L.O. 01:45), 화요일·공휴일 휴무, 1인 1드링크·1푸드 이상 주문, 현금만 가능.",
  "checkedAt": "2026-11-15"
 },
 "sushi-kazu": {
  "menus": [],
  "photos": [],
  "reserve": {
   "status": "accepted",
   "agree": true,
   "single": null,
   "hint": "한쪽 조사에서는 붐비는 시간대 예약을 권장",
   "methods": [
    {
     "type": "phone",
     "url": "tel:090-7555-5827",
     "note_ko": "타베로그에 예약·문의 번호로 올라 있는 번호로 전화 예약"
    }
   ],
   "note": "타베로그에는 '예약 가능'으로 나와 있고, 예약·문의 번호(090-7555-5827)로 전화 예약할 수 있습니다.",
   "googleReservable": true
  },
  "disagree": "예약 상태: A는 '예약 가능(accepted)'으로 봤고, 예약이 필수인지는 확인하지 못했다고 했습니다. B는 2026년 2월 후기(평일에도 만석이라 예약 권장)를 근거로 '예약 권장(recommended)'으로 봤습니다. 다만 B도 2026년 5월에 예약 없이 빈 카운터 2석에 들어간 후기를 함께 적었습니다. A는 대기나 만석에 대한 언급을 찾지 못했다고 했습니다. 메뉴: A는 오반자이와 스시(이쿠라·우니·엔가와 등) 2개를 적었습니다. B는 초밥과 오반자이가 후기에 나온다는 점은 인정했지만, 인기 순위와 정확한 표기를 확인하지 못해 목록을 비워 두었습니다. 그래서 양쪽에 공통으로 남은 메뉴는 없습니다. 기타: A는 타베로그 영어판만 확인했고, B는 타베로그 일본어판과 Retty를 확인했습니다. B는 Retty에 다른 전화번호가 적혀 있다고 했습니다.",
  "checkedAt": "2026-11-15"
 },
 "jouroku": {
  "menus": [
   {
    "name_ja": "中華そば（並）",
    "name_ko": "주카소바 (보통)",
    "desc_ko": "히가시오사카 다카이다식 간장 라멘. 국물 색은 검지만 맛은 의외로 깔끔하고, 굵은 자가제면을 쓴다.",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100000030435/",
     "https://foodle.pro/restaurants/osaka/jouroku",
     "https://foodle.pro/post/114350",
     "https://www.timeout.jp/osaka/ja/レストラン/menya-jouroku-namba",
     "https://retty.me/area/PRE27/ARE94/SUB9501/100000030435/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJVRkzJ2rnAGARQqsC-omixzg/photos/AV-0GLcLof6Xt7liGoD2RbJkfEEsc1YIwkjinJrVlnNbGZaa26BKhXOHIIeJvUpphgvHMmA71nXQN-2D7fgN8_SX_Xf4u0kTWIfFHqIJk6CumDk95ydnCuk7Aa9mnETe1dkeFCamsyjLdofh0H4Xqgr3iKNMzhPloCqEnF9e__88Oa4_hR4F4ipt8r18HSbU131yCGLhc_ShUw_NoR6ylXH6mhw0k_T0w0Q6hZgO7Epf-APX4cge3Qc2VsWOKXQ9oJwOvQN32Hro93Goi1AO-jjeaDpFCUMPQTJw4ZcZrTV3MhAre8dqJ25qnsbpasJBfnk0DPb0JlarHaSolEIlE64t3cch1m08fuhXHHoBIfZwom8Ga2IjCWzFofz-wBx9ZnHL0z2W4MDcLwGjoqRMEylk7S6Q_Q",
    "menu": 0,
    "w": 2048,
    "h": 1536,
    "author": "麺屋 丈六",
    "authorUri": "https://maps.google.com/maps/contrib/102848297640625068210"
   },
   {
    "name": "places/ChIJVRkzJ2rnAGARQqsC-omixzg/photos/AV-0GLfN7Z12FNbNMwZxGX8jMDtGGgFLi4ocMo0h-8_hqN_zDx1R1D9SWjoofwwfSjkUJbRsWYOn4V1VEqfOk0FMDZU901EjJS45PVorOykw9F4P9-Xnj9voWmsZQoxHP0xPkJpcpKV0waiCqL3dZROqtX7FxDe0vsrMSidWc4DQt7dsMPbdCdaoVisUdV7RRrXLTSJGmv2XsVHKRMdOb4Pv-aPh1l9EqhRRvs_1lHp1BD1PXFVbBpEhWPkecRVo8ZmuSkrLtg7gDiTfZmDnyMfcbm4a0AdC-sW3kxZxOQK9nNjhTHj8pdX-eu40BQADPWWBhFu8ihuVi7EC2D_0j75A-mEl9BY7L7j2j5AieQws6KhsBIeAQ_Bn3itfCqYnmZWiBF-l6InHmDC-IOclXYdhtqE3aH8HKSacHNLq0IJq4T_rTQ",
    "menu": 0,
    "w": 4096,
    "h": 3072,
    "author": "José María H.G.",
    "authorUri": "https://maps.google.com/maps/contrib/113641808974675574959"
   },
   {
    "name": "places/ChIJVRkzJ2rnAGARQqsC-omixzg/photos/AV-0GLdYdKlmZSiYi-8z225UKrZL1bLaLAyKmiho6rQPKhLB9RpzFOvwjFlSopKPOecGCMOS-uZDBZUEMyTTd3Xn5rRv9tD3QvRVQpYPNcF6mucNnOB5lpteKsfTDe88RpH_qf4vNyceo2hW7XqQnj50ij5WASFfwosRzrqZ2uIeg7zJCNfpLAnjaYOQv140_oL_EFGd5amAkaqxrU_yf8mvl2c2FXLEnzEVx6GOOxxSxgs5HRGZbM7xoZ7sWA4SJxnefk32GYqp937fYn6zbxCa3jw2M-o_SkFZ2zwOXQZiQL5_hLDLCSBV345pa7pNfQJDd2DuqrUWCZsYNoR_L89Ptbjs3t5VqPtsfq0vnLsPUxn1r5h10qDGFunhRclYuQnXN9wScTe_oxn-7nn8bmIy3mEmW44lP9x3mirbry3VdVJW6A",
    "menu": 0,
    "w": 4096,
    "h": 3072,
    "author": "藻日マリ",
    "authorUri": "https://maps.google.com/maps/contrib/101143144859358657895"
   },
   {
    "name": "places/ChIJVRkzJ2rnAGARQqsC-omixzg/photos/AV-0GLfg0BpxrsgodIj_nN_vhzjCD7mmq22wKHrRUrJCSrqqMdcAych2Eykmv_-wwAqttPk9MdgLqfJH2JQ846lEGDjD94CcQPmySLiRPb70VXQPjCIDc60yocLAIbfIKV-gUX3Lwbd_DIJT02nhVQbKEL5aIaR80L6T2GFOrOQOgGKANw4Vif6PVwoI11DBVaZymtzhOR0aq73rVFhM4-MjiWIc51ZHh_1jAW3pnzZCwkyRLbFv9D3tObosyWOKtGskqpOfPxatu7ZicHfVtUU3ZwQ5RKdqecTrSW6l2_vQmBO8_8x-vJxMCE7B5g7Pa7P9ej5JiRPLJ5uzqYHJXSlL60PGLV2HDE1GJoQVIqmOX9DFIvwiPh7MsQSGa1POzfw0iJACxhMhYETFeto27qbr2aYcbupR3x_X8zPK0kGIniwe9A",
    "menu": 0,
    "w": 4080,
    "h": 3072,
    "author": "池内孝夫（くみちょう）",
    "authorUri": "https://maps.google.com/maps/contrib/117944441192548460082"
   },
   {
    "name": "places/ChIJVRkzJ2rnAGARQqsC-omixzg/photos/AV-0GLeP9ngdfBhHDp1bIvxb4SJjO9ZdRWDflvIkb11BoCrVUeQC7rIsl4RNs8N-Ivooq3Ff20fODyGFlgbCrwR9i3DsHMS0oHQHIQTpuy0r6gdJMr-6H5N5mP-AFN25nMX5e_B_bEuMWRD9SCW8YS0wSuyNCCMd51qxojegxuv9-1cqI3TFuxT5ZxNJucUdfh8yX5oDYT0WD93LbLXdtfRs8CV7otssm7BISmswG-dGawcVGx3gO-1wEu49C8a8JvWNnWLWmgbPYfYtXeQkLrfEUy6GPuHf-o8zlNWVrlYcAMWOZoJHEOUWzgZrGVuAhbZCMXZ1A356lO8YaLW4-vLDBdFwvlBPb518LOA7NYlmlgWDqv3LZlrJOkW2vQbTGSvqKRu9PcLTx1FpPsC8iQrEfQ97CuhFqe5SlLlVw_W3m_Gs",
    "menu": 0,
    "w": 3024,
    "h": 4032,
    "author": "t.k",
    "authorUri": "https://maps.google.com/maps/contrib/109931853623929592977"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그에 '예약 불가'로 나와 있어 현장에서 줄을 서야 함.",
   "googleReservable": false
  },
  "disagree": "공통 메뉴는 주카소바(보통) 하나뿐임. A는 그 밖에 양념 반숙 달걀 토핑(100엔)과 날달걀 밥(350엔)을, B는 하야즈시(고등어 눌림초밥)를 넣었음. 주카소바 가격은 A가 1,000엔(2026년 후기 기준)으로 적었고, B는 2023년 기사의 900엔과 2026년 후기의 1,000엔이 달라 비워 두었음. 그래서 가격은 null로 처리함. 면 설명도 다름: A는 '굵은 자가제면', B는 '중간 굵기 스트레이트 면'이라고 적었음. 대기 정보도 결이 다름: A는 늘 줄이 서고 피크를 피하면 빨리 들어간다고 했고, B는 실내 대기 의자가 있으며 평일 저녁은 대기가 비교적 적다고 했음(2023년 타임아웃 기사).",
  "checkedAt": "2026-11-15"
 },
 "men-no-youji": {
  "menus": [
   {
    "name_ja": "鶏節極塩らーめん",
    "name_ko": "토리부시 고쿠시오 라멘 (닭가쓰오 소금 라멘)",
    "desc_ko": "닭과 채소를 바탕으로 한 소금맛 라멘으로, 공식 메뉴에서 인기 1위로 소개한다.",
    "price_jpy": 950,
    "source_urls": [
     "https://www.naralunch.com/tukemen/mennoyoji.html",
     "https://nori-net.jp/blog/?p=43248",
     "https://ameblo.jp/anpanman-gogo-gogo-gogo/entry-12883827160.html",
     "https://kansai-tabearuki.com/osaka/osaka-ramen/mennoyouji/",
     "https://tabelog.com/en/osaka/A2701/A270202/27072765/",
     "https://menno-yoji.com/menu/",
     "https://tabelog.com/osaka/A2701/A270202/27072765/"
    ]
   },
   {
    "name_ja": "鶏ドロつけ麺",
    "name_ko": "토리도로 츠케멘 (진한 닭 츠케멘)",
    "desc_ko": "걸쭉한 닭백탕 츠케지루를 돌냄비에 보글보글 끓는 상태로 내주는 찍먹 면",
    "price_jpy": 1300,
    "source_urls": [
     "https://www.naralunch.com/tukemen/mennoyoji.html",
     "https://ameblo.jp/shinya1230/entry-12955063890.html",
     "https://ameblo.jp/anpanman-gogo-gogo-gogo/entry-12883827160.html",
     "https://menno-yoji.com/menu/",
     "https://tabelog.com/osaka/A2701/A270202/27072765/"
    ]
   },
   {
    "name_ja": "鶏節極醤油らーめん",
    "name_ko": "토리부시 고쿠쇼유 라멘 (닭가쓰오 간장 라멘)",
    "desc_ko": "통닭과 닭뼈에서 우려낸 감칠맛을 강조한 간장 라멘.",
    "price_jpy": 950,
    "source_urls": [
     "https://www.naralunch.com/tukemen/mennoyoji.html",
     "https://ameblo.jp/anpanman-gogo-gogo-gogo/entry-12883827160.html",
     "https://ameblo.jp/shinya1230/entry-12955063890.html",
     "https://menno-yoji.com/menu/",
     "https://tabelog.com/osaka/A2701/A270202/27072765/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJVVUR0kbnAGAR9U9PWC5eOKQ/photos/AV-0GLfT2s4tlLEjolGeDjFraHqa3uVi8U95zFBhghuR9NpSb0WK0dZzwi0b3fHxSxOx3413Dhzs7oJJSW6BBjHkUBHeuSZbwGQdDE-N_wWBlvTw8Y90hmdnMM8NI1eN_mhNswuI6DHHw5POY43E9-1ISCNV5RS-xyQqJdEVLLXsmOFprW1PpFt9VJ9AAJ7y-_BMcdtJg67QzTZM3Pf2hFr897L6oC-TroRfny6VyX7R-FXoQVjricSOE4ia_J9JocTGMtaUDfasGp1vzapsncSFvtd33_0ewpj2BxqCLM2LlpFyOi7f_DGHMFTQOqEMa3x3YD2A_f_sw1Mjk_k0VYHjnlvvbemcd4-cgi9zcZNS6ENxD0YlurRXkwkVPZZgNlN5SND9nPCu5vD5BZlsGePmq8DbM6q9knVidzVsXLMJzZGG",
    "menu": 0,
    "w": 4771,
    "h": 3181,
    "author": "麺のようじ",
    "authorUri": "https://maps.google.com/maps/contrib/100545798900625931879"
   },
   {
    "name": "places/ChIJVVUR0kbnAGAR9U9PWC5eOKQ/photos/AV-0GLeXUQ1dIymApEFwqqJJgMxm8adiDw3FyPZrrpopZTISpWRO9v6r4rJwONUimkphRuWz5DmNS99JTzXyT_502F4q_vk-kNSAvTnZB_miyD0L1VVZdlqnf2mh0mRaLTFVX2fzuUxgrDWprM5VsYV1nCC4iHpQzsW-7O8ZNDbrmrc4t1wYcaExIdhauUEUntJW6fPd3S7N0s8U5j-rNOvSme9NP81oRKdT6lj9Y_Gl595w6AZssz7OZInGJNVR00tty6qj28JpeSEf2LiEyRnn4a175qvrKaIhboVmNtLHVUVctUKo0RLDorComKUcvXPsFHNcsrQ1x3OSuysKqWt6upxzP9f5NPliaAR18Ir3fBxT3FNaSwLB66hA34FuEAHqDzJSFsCbTPxRy7Dog-JUZ6F5dsv7XrsFsw3Ifjlq14PC",
    "menu": 1,
    "w": 4031,
    "h": 2267,
    "author": "kazu",
    "authorUri": "https://maps.google.com/maps/contrib/110890635498027122021"
   },
   {
    "name": "places/ChIJVVUR0kbnAGAR9U9PWC5eOKQ/photos/AV-0GLcS8rrHGKCz_KfCHyMgSP1gnMMn6YOI5BmQXyJjMThMoAjc6XlTaouDHTMuuEFZno6MoVKfZmZNjttRdVl2U7H_D_e0ISNz65ahMuMgbB6WJeoclN5_dI1FQfrI2jKp2JiVb66kPvPXsaBZiPog0ZK-kasmVgag3-AzISW8I77rfx6JxUZDSrgtkIZ2zCWdTK7BCeNct29231-2gmZFStHTRpaLGiKR0QsgHyOUHV_g8KXWtHcAqKDQ2zNy3hTMxLMNiF1opp1L6hlf9pyqR5LtmoypVPiHIjfHbzVXcdxWYwZUVc62tC4gEkNPv3wWdwpRkMKqVJmoWggnemPzrkjXoB6ZaKaEDpiW7tOFq-1IW9drWrTOESIalDhne8bfteb1FafhejTFMmmZcJ1RiKbZz2gp1bd9Z02kfkLBeHdb5g",
    "menu": 1,
    "w": 4800,
    "h": 3600,
    "author": "이상도",
    "authorUri": "https://maps.google.com/maps/contrib/114419292668105644144"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그에 예약 불가로 표기됨. 가게 밖 식권기에서 식권을 먼저 산 뒤 줄을 서는 방식.",
   "googleReservable": false
  },
  "disagree": "A에는 鶏塩らーめん(950엔)이 하나 더 있음. 2·3위 순서가 다름(A: 츠케멘→간장, B: 간장→츠케멘). 다만 둘 다 2위 이하는 순위 근거가 약하다고 밝힘. 가격 출처도 다름: A는 블로그 naralunch.com 기준이고 공식 사이트를 찾지 못했다고 했으며, B는 공식 홈페이지(menno-yoji.com)의 세금 포함 가격 기준. 소금 라멘이 인기 1위라는 근거도 A는 블로그 언급, B는 공식 메뉴 표기. A에만 있는 정보: 8석(카운터 4, 테이블 4), 현금만 가능, 대기 수 분~5분, 18시 무렵이 덜 붐빔.",
  "checkedAt": "2026-11-15"
 },
 "muteppou": {
  "menus": [
   {
    "name_ja": "とんこつラーメン",
    "name_ko": "돈코츠 라멘",
    "desc_ko": "국산 돼지뼈와 물만으로 오래 끓인 아주 진하고 걸쭉한 돈코츠 라멘. 면 굵기·국물 농도(코테리 등)·파 양을 고를 수 있음",
    "price_jpy": null,
    "source_urls": [
     "https://ameblo.jp/j2mori0416/entry-12912539755.html",
     "https://map.yahoo.co.jp/v3/place/5bnMreLU9Kk/review",
     "https://www.gltjp.com/ja/directory/item/12248/",
     "https://retty.me/restaurant/100000028708/",
     "https://r.gnavi.co.jp/2f77n36u0000/",
     "https://retty.me/area/PRE27/ARE94/SUB62309/100000028708/",
     "https://kuze-nikki.com/post-0-234-5823"
    ]
   },
   {
    "name_ja": "Wスープラーメン",
    "name_ko": "W수프 라멘",
    "desc_ko": "돈코츠 국물과 생선 육수 기반 간장(오사카 한정) 국물을 6:4로 섞은 라멘",
    "price_jpy": null,
    "source_urls": [
     "https://www.gltjp.com/ja/directory/item/12248/",
     "https://retty.me/restaurant/100000028708/",
     "https://map.yahoo.co.jp/v3/place/5bnMreLU9Kk/review",
     "https://r.gnavi.co.jp/2f77n36u0000/",
     "https://retty.me/area/PRE27/ARE94/SUB62309/100000028708/",
     "https://ameblo.jp/s-machami/entry-10654880284.html"
    ]
   }
  ],
  "photos": [],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "예약을 받지 않고 줄을 서는 가게. 기다렸다가 라멘을 받기까지 최대 30분 정도 걸렸다는 후기가 있음.",
   "googleReservable": false
  },
  "disagree": "- 메뉴 수: A는 4개, B는 2개. 돈코츠 차슈멘과 헤타고항(밥)은 A에만 있어서 뺐음.\n- 가격: A는 리뷰를 근거로 돈코츠 라멘을 1,000엔으로 적었고, B는 현재 가격을 확인하지 못해 null로 둠. 그래서 null로 처리함.\n- 예약 불가의 근거: A는 예약 불가라고 적힌 출처를 찾지 못하고 예약 수단이 없다는 점과 줄서기 후기로 추정했음(타베로그 접속 실패). B는 타베로그에 예약 불가라고 명시돼 있다고 적었음.\n- 인기순 근거: A는 리뷰를 바탕으로 정했고, B는 구루나비의 메뉴 순위를 근거로 함. A는 구루나비 접속에 실패했다고 적었음.\n- 대기시간: A는 5~30분이라고 적었고, B는 30분 정도 걸린 후기 1건만 적었음.",
  "checkedAt": "2026-11-15"
 },
 "hanabusa": {
  "menus": [
   {
    "name_ja": "鶏そばプレミアム",
    "name_ko": "토리소바 프리미엄",
    "desc_ko": "나고야 코친 통닭으로 우린 무화학조미료 닭 육수에 간장 다레를 더한 대표 닭 라멘",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/matome/15314/",
     "https://tabelog.com/en/osaka/A2701/A270106/27071670/",
     "https://wanderlog.com/place/details/1252512/menya-hanabusa",
     "https://foodle.pro/restaurants/osaka/menya-hanabusa",
     "https://retty.me/area/PRE27/ARE91/SUB9102/100000792616/",
     "https://mamiran.jp/menya-hanabusa/"
    ]
   },
   {
    "name_ja": "中華そば",
    "name_ko": "주카소바",
    "desc_ko": "닭 청탕 육수에 간장으로 맛을 낸 라멘.",
    "price_jpy": null,
    "source_urls": [
     "https://tabelog.com/matome/15314/",
     "https://tabelog.com/en/osaka/A2701/A270106/27071670/",
     "https://4travel.jp/dm_shisetsu/11500412",
     "https://tabelog.com/osaka/A2701/A270106/27071670/dtlmenu/",
     "https://retty.me/area/PRE27/ARE91/SUB9102/100000792616/",
     "https://mamiran.jp/menya-hanabusa/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJ_zj-YyHnAGARu91rndAChKY/photos/AV-0GLeQgmNmEJX4-KPZEXVUwX0x3ZV6yyj25VOv7cfhyptlFjTVTeKHMM8JaYudbqzwlkzB-LReMrv2IsHWzYt4pdoSzhkfI8wgpwzng9vmQH5pJvpDDM1P743Vr-SofdB1N2lSdW9zxh6edWiQsIm46iyUhcHDjb5PSG24Gwj5V1CfNreQyQND_Zi-Z3wr-hBCBoScJZMWvaV_KsTCl4cO1q8W-Nv9pHFaArXD2fG-Py6fJuLNeptOZtsEd3K0B3f_HGihsIXhFIT7tn5gguCCM9sC5EXAtqfjpluE3BUhpFborCX5RP1YQIZ6sZMa5I5b_NcISrE7C1lAEWVpRcIY-_N7iA1ZBZyUs0yEWBYumlN5OmRGPCUj0DNcKZrTdg4Ybkw0IpB5JfVytcP5szPh3gGdbc6xLSG6vz6aW9VMXZgAqQ",
    "menu": 0,
    "w": 3024,
    "h": 4032,
    "author": "ma_ma san",
    "authorUri": "https://maps.google.com/maps/contrib/117674104166371979024"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그 기준 예약 불가. 점심시간에 만석이 되거나 줄이 생긴다는 후기가 있음.",
   "googleReservable": false
  },
  "disagree": "인기 순위: A는 鶏そばプレミアム을 1위로, B는 中華そば를 1위로 둠(B는 2016년 타베로그 메뉴의 '인기 1위' 표시가 근거). 메뉴 구성: A에만 和えそば(아에소바), B에만 塩そば(시오소바)가 있음. 中華そば 설명: A는 해산물 계열 수프, B는 닭 청탕+간장이라고 함(B는 해산물 육수를 塩そば 쪽 특징으로 봄). 鶏そばプレミアム 설명: A는 닭 육수+간장 다레, B는 크리미한 닭 백탕이라고 함. 예약 관련 부가 정보: A는 카운터 7석·식권제·현금만 가능·수프 소진 시 영업 종료와 2017년 점심 대기를 언급했고, B는 2024년 11월 11:05 만석·실내 대기 2명을 언급함.",
  "checkedAt": "2026-11-15"
 },
 "mengenso": {
  "menus": [
   {
    "name_ja": "中々",
    "name_ko": "나카나카",
    "desc_ko": "어패류 육수와 닭백탕(토리파이탄)을 합친 더블 수프 라멘. 가게 추천 메뉴이며 리뷰에서 가장 많이 언급되는 대표 메뉴",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100000007806/",
     "https://retty.me/theme/101992500/",
     "https://tabelog.com/en/osaka/A2701/A270103/27042439/",
     "https://osakalucci.jp/tenroku-ramen",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100000007806/",
     "https://tabelog.com/osaka/A2701/A270103/27042439/dtlmenu/"
    ]
   },
   {
    "name_ja": "レタスチャーハン（半チャーハン）",
    "name_ko": "양상추 볶음밥 (반 볶음밥)",
    "desc_ko": "양상추를 넣은 볶음밥. 라멘에 곁들이는 사이드로 여러 리뷰에서 언급됨",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/restaurant/100000007806/",
     "https://retty.me/theme/101992500/",
     "https://osakalucci.jp/tenroku-ramen",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100000007806/"
    ]
   },
   {
    "name_ja": "鶏元素 濃厚醤油",
    "name_ko": "토리겐소 진한 간장 라멘",
    "desc_ko": "닭백탕 베이스에 간장으로 맛을 낸 진한 간장 라멘",
    "price_jpy": 1080,
    "source_urls": [
     "https://retty.me/restaurant/100000007806/",
     "https://tabelog.com/en/osaka/A2701/A270103/27042439/dtlmenu/",
     "https://osakalucci.jp/tenroku-ramen",
     "https://retty.me/area/PRE27/ARE92/SUB62105/100000007806/"
    ]
   },
   {
    "name_ja": "魚元素 塩",
    "name_ko": "우오겐소 시오(소금) 라멘",
    "desc_ko": "어패류 육수 베이스의 소금 라멘. 스다치(영귤)를 곁들여 나옴",
    "price_jpy": null,
    "source_urls": [
     "https://retty.me/theme/101992500/",
     "https://tabelog.com/en/osaka/A2701/A270103/27042439/dtlmenu/",
     "https://osakalucci.jp/tenroku-ramen",
     "https://tabelog.com/osaka/A2701/A270103/27042439/dtlmenu/"
    ]
   }
  ],
  "photos": [
   {
    "name": "places/ChIJ7Y5wobjmAGAR_DtBZ8dfR-Y/photos/AV-0GLcakvTr0qL8TU_kZ6crBvWwUEmEyblUweqqu3qNhAog24jxJnKBCoaYmppWkh7WMWRHo1TmVbI7ARtnK9r0ULvyhDHZi-M2id2tH8nVpxd3Ao84mpiFex2CfE82nYuCegny_ZtMJUEQOvuxaArKbEAvu4LwydatiMlSoZFp58UkIrs5ckodY3kTrc_CdXcqYScvwONLnxa_rr3OZirTJVX7oCYveFULmx6jk7C5x-kb0am-gfs0azePVWy0RoB70VJiDc2ijgrMyhRjmY1DAzuZbZniljuoCYH_qP208xBiPeZDIP6JQECwEQTHU3k5kCTFaWcEf9MXU5KPhyvZ3uMZk9Fh_2TTqJ_AANkGQMQFsWnYNHeYg8-2C5ClKyJKUXgis9gL5ZBKuccr8sNbCDyO9lsxxRlR8xrzNkflbWo8",
    "menu": 1,
    "w": 3361,
    "h": 2521,
    "author": "Rin Zen (zenrin)",
    "authorUri": "https://maps.google.com/maps/contrib/107930267128706679171"
   }
  ],
  "reserve": {
   "status": "not_accepted",
   "agree": true,
   "single": null,
   "hint": "",
   "methods": [],
   "note": "타베로그 기준 예약 불가(선착순). 수프가 떨어지면 영업을 일찍 끝낼 수 있음.",
   "googleReservable": false
  },
  "disagree": "가격 차이: 中々는 A 970엔(Retty 리뷰), B 1,050엔(오사카 루치 2026년 기사). 魚元素 塩은 A에 가격이 없고 B는 1,060엔. 볶음밥은 A가 반 사이즈(半チャーハン) 290엔, B가 보통 사이즈(並チャーハン) 600엔(평일 15시까지 500엔)이라 같은 양상추 볶음밥이어도 사이즈가 달라 가격을 비교할 수 없음. 인기 순서도 다름: A는 간장 라멘이 소금 라멘보다 앞이고 B는 그 반대. 주소 표기 문제(天神橋5-2-16)는 B만 언급함.",
  "checkedAt": "2026-11-15"
 }
};
