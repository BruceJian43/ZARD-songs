const songs = [
    "Boy",
    "Brand New Love",
    "CAN'T TAKE MY EYES OFF OF YOU（君の瞳に恋してる）",
    "Change my mind",
    "DAN DAN 心魅かれてく",
    "Dangerous Tonight",
    "Don't you see!",
    "Forever",
    "Forever you",
    "GOOD DAY",
    "Get U're Dream",
    "Good-bye My Loneliness",
    "Hypnosis",
    "I can't let go",
    "I can't tell",
    "I feel fine,yeah",
    "I still remember",
    "I want you",
    "I'm in love",
    "IN MY ARMS TONIGHT",
    "If you gimme smile",
    "It's a Boy",
    "Just believe in love",
    "Just for you",
    "LOVE 〜眠れずに君の横顔ずっと見ていた〜",
    "Last Good-bye",
    "Listen to me",
    "Lonely Soldier Boy",
    "Love is Gone",
    "MIND GAMES",
    "My Baby Grand 〜ぬくもりが欲しくて〜",
    "Oh my love",
    "Oh! Sugar Baby",
    "Ready,Go!",
    "Season",
    "Seven Rainbow",
    "So Together",
    "Stray Love",
    "Take me to your dream",
    "Teenage dream",
    "The only truth I know is you",
    "Today is another day",
    "Top Secret",
    "Vintage",
    "WAKE UP MAKE THE MORNING LAST〜忘れがたき人へ〜",
    "Why Don't You Leave Me Alone",
    "You and me（and…）",
    "good-night sweetheart",
    "hero",
    "pray",
    "promised you",
    "あなたと共に生きてゆく",
    "あなたに帰りたい",
    "あなたのせいじゃない",
    "あなたを好きだけど",
    "あなたを感じていたい",
    "あの微笑みを忘れないで",
    "いつかは…",
    "お・も・ひ・で",
    "かけがえのないもの",
    "きっと忘れない",
    "この愛に泳ぎ疲れても",
    "この涙 星になれ",
    "こんなにそばに居るのに",
    "こんなに愛しても",
    "さわやかな君の気持ち",
    "ひとりが好き",
    "もう少し あと少し…",
    "もう探さない",
    "もう逃げたりしないわ 想い出から",
    "もっと近くで君の横顔見ていたい",
    "カナリヤ",
    "カラッといこう!",
    "クリスマス タイム（ZARD Version）",
    "グロリアス マインド",
    "サヨナラは今もこの胸に居ます",
    "サヨナラまでのディスタンス",
    "サヨナラ言えなくて",
    "セパレート・ウェイズ",
    "ハイヒール脱ぎ捨てて",
    "ハートに火をつけて",
    "フォトグラフ",
    "マイ フレンド",
    "リセット",
    "不思議ね…",
    "世界はきっと未来の中",
    "二人の夏",
    "今すぐ会いに来て",
    "今日はゆっくり話そう",
    "今日も",
    "出逢いそして別れ",
    "君がいたから",
    "君がいない",
    "君とのふれあい",
    "君と今日の事を一生忘れない",
    "君に逢いたくなったら…",
    "君へのブルース",
    "夏を待つセイル（帆）のように",
    "天使のような笑顔で",
    "女でいたい",
    "好きなように踊りたいの",
    "少女の頃に戻ったみたいに",
    "帰らぬ時間の中で",
    "心を開いて",
    "恋女の憂鬱",
    "息もできない",
    "悲しいほど 今日は雨でも",
    "悲しいほど貴方が好き",
    "愛が見えない",
    "愛しい人よ 〜名もなき旅人よ〜",
    "愛であなたを救いましょう",
    "愛は暗闇の中で",
    "愛は眠ってる",
    "愛を信じていたい",
    "抱きしめていて",
    "探しに行こうよ",
    "揺れる想い",
    "新しいドア 〜冬のひまわり〜",
    "明日もし君が壊れても",
    "明日を夢見て",
    "星のかがやきよ",
    "時間の翼",
    "月に願いを",
    "来年の夏も",
    "果てしない夢を",
    "止まっていた時計が今動き出した",
    "気楽に行こう",
    "永遠",
    "汗の中でCRY",
    "淡い雪がとけて",
    "無我夢中",
    "痛いくらい君があふれているよ",
    "目覚めた朝は…",
    "眠り",
    "眠れない夜を抱いて",
    "瞳そらさないで",
    "瞳閉じて",
    "私だけ見つめて",
    "突然",
    "窓の外はモノクローム",
    "約束のない恋",
    "素直に言えなくて",
    "翼を広げて",
    "見つめていたいね",
    "誰かが待ってる",
    "負けないで",
    "運命のルーレット廻して",
    "遠い日のNostalgia",
    "遠い星を数えて",
    "雨が降り出す前に",
    "雨に濡れて",
    "風が通り抜ける街へ",
    "黄昏にMy Lonely Heart"
];

const single = {
    "Good-bye My Loneliness": {
        "CD": [
            "Good-bye My Loneliness",
            "愛は暗闇の中で"
        ]
    },
    "不思議ね…": {
        "CD": [
            "不思議ね…",
            "素直に言えなくて"
        ]
    },
    "もう探さない": {
        "CD": [
            "もう探さない",
            "こんなに愛しても",
            "もう探さない (オリジナルカラオケ)",
            "こんなに愛しても (オリジナルカラオケ)"
        ]
    },
    "眠れない夜を抱いて": {
        "CD": [
            "眠れない夜を抱いて",
            "Dangerous Tonight",
            "眠れない夜を抱いて (オリジナル・カラオケ)",
            "Dangerous Tonight (オリジナル・カラオケ)"
        ]
    },
    "IN MY ARMS TONIGHT": {
        "CD": [
            "IN MY ARMS TONIGHT",
            "汗の中でCRY",
            "IN MY ARMS TONIGHT (オリジナル・カラオケ)",
            "汗の中でCRY (オリジナル・カラオケ)"
        ]
    },
    "負けないで": {
        "CD": [
            "負けないで",
            "Stray Love",
            "負けないで (オリジナル・カラオケ)",
            "Stray Love (オリジナル・カラオケ)"
        ]
    },
    "君がいない": {
        "CD": [
            "君がいない",
            "私だけ見つめて",
            "君がいない (オリジナル・カラオケ)",
            "私だけ見つめて (オリジナル・カラオケ)"
        ]
    },
    "揺れる想い": {
        "CD": [
            "揺れる想い",
            "Just for you",
            "揺れる想い（オリジナルカラオケ）",
            "Just for you（オリジナルカラオケ）"
        ]
    },
    "もう少し あと少し…": {
        "CD": [
            "もう少し あと少し…",
            "カナリヤ",
            "もう少し あと少し…（オリジナルカラオケ）",
            "カナリヤ（オリジナルカラオケ）"
        ]
    },
    "きっと忘れない": {
        "CD": [
            "きっと忘れない",
            "黄昏にMy Lonely Heart",
            "きっと忘れない（オリジナルカラオケ）",
            "黄昏にMy Lonely Heart（オリジナルカラオケ）"
        ]
    },
    "この愛に泳ぎ疲れても/Boy": {
        "CD": [
            "この愛に泳ぎ疲れても",
            "Boy",
            "この愛に泳ぎ疲れても（オリジナルカラオケ）",
            "Boy（オリジナルカラオケ）"
        ]
    },
    "こんなにそばに居るのに": {
        "CD": [
            "こんなにそばに居るのに",
            "あなたのせいじゃない",
            "こんなにそばに居るのに（オリジナルカラオケ）"
        ]
    },
    "あなたを感じていたい": {
        "CD": [
            "あなたを感じていたい",
            "Take me to your dream",
            "あなたを感じていたい（オリジナルカラオケ）"
        ]
    },
    "Just believe in love": {
        "CD": [
            "Just believe in love",
            "Ready,Go!",
            "Just believe in love（オリジナルカラオケ）"
        ]
    },
    "愛が見えない": {
        "CD": [
            "愛が見えない",
            "Teenage dream",
            "愛が見えない（オリジナルカラオケ）",
            "Teenage dream（オリジナルカラオケ）"
        ]
    },
    "サヨナラは今もこの胸に居ます": {
        "CD": [
            "サヨナラは今もこの胸に居ます",
            "眠り",
            "サヨナラは今もこの胸に居ます（オリジナルカラオケ）",
            "眠り（オリジナルカラオケ）"
        ]
    },
    "マイ フレンド": {
        "CD": [
            "マイ フレンド",
            "目覚めた朝は…",
            "マイ フレンド original karaoke",
            "目覚めた朝は… original karaoke"
        ]
    },
    "心を開いて": {
        "CD": [
            "心を開いて",
            "Change my mind",
            "心を開いて（オリジナルカラオケ）",
            "Change my mind（オリジナルカラオケ）"
        ]
    },
    "Don't you see!": {
        "CD": [
            "Don't you see!",
            "帰らぬ時間の中で",
            "Don't you see!（オリジナルカラオケ）",
            "帰らぬ時間の中で（オリジナルカラオケ）"
        ]
    },
    "君に逢いたくなったら…": {
        "CD": [
            "君に逢いたくなったら…",
            "愛を信じていたい",
            "君に逢いたくなったら…（オリジナルカラオケ）",
            "愛を信じていたい（オリジナルカラオケ）"
        ]
    },
    "風が通り抜ける街へ": {
        "CD": [
            "風が通り抜ける街へ",
            "遠い星を数えて",
            "風が通り抜ける街へ（オリジナルカラオケ）",
            "遠い星を数えて（オリジナルカラオケ）"
        ]
    },
    "永遠": {
        "CD": [
            "永遠",
            "I can't let go",
            "永遠（オリジナルカラオケ）",
            "I can't let go（オリジナルカラオケ）"
        ]
    },
    "My Baby Grand 〜ぬくもりが欲しくて〜": {
        "CD": [
            "My Baby Grand 〜ぬくもりが欲しくて〜",
            "Love is Gone",
            "My Baby Grand 〜ぬくもりが欲しくて〜（オリジナルカラオケ）",
            "Love is Gone（オリジナルカラオケ）"
        ]
    },
    "息もできない": {
        "CD": [
            "息もできない",
            "Vintage",
            "息もできない（オリジナルカラオケ）",
            "Vintage（オリジナルカラオケ）"
        ]
    },
    "運命のルーレット廻して": {
        "CD": [
            "運命のルーレット廻して",
            "少女の頃に戻ったみたいに",
            "運命のルーレット廻して（オリジナルカラオケ）"
        ]
    },
    "新しいドア 〜冬のひまわり〜": {
        "CD": [
            "新しいドア 〜冬のひまわり〜",
            "新しいドア 〜冬のひまわり〜（オリジナルカラオケ）"
        ]
    },
    "GOOD DAY": {
        "CD": [
            "GOOD DAY",
            "GOOD DAY（オリジナルカラオケ）"
        ]
    },
    "MIND GAMES": {
        "CD": [
            "MIND GAMES",
            "Hypnosis",
            "MIND GAMES (Redway Secret Mix)",
            "MIND GAMES (オリジナルカラオケ)"
        ]
    },
    "世界はきっと未来の中": {
        "CD": [
            "世界はきっと未来の中",
            "世界はきっと未来の中（オリジナルカラオケ）"
        ]
    },
    "CAN'T TAKE MY EYES OFF OF YOU（君の瞳に恋してる）": {
        "CD": [
            "CAN'T TAKE MY EYES OFF OF YOU（君の瞳に恋してる）"
        ]
    },
    "痛いくらい君があふれているよ": {
        "CD": [
            "痛いくらい君があふれているよ",
            "痛いくらい君があふれているよ（Re-Mix）",
            "痛いくらい君があふれているよ（オリジナルカラオケ）"
        ]
    },
    "この涙 星になれ": {
        "CD": [
            "この涙 星になれ",
            "お・も・ひ・で",
            "この涙 星になれ（オリジナルカラオケ）",
            "お・も・ひ・で（オリジナルカラオケ）",
            "この涙 星になれ remix "
        ]
    },
    "Get U're Dream": {
        "CD": [
            "Get U're Dream",
            "Get U're Dream（Version Two）",
            "Get U're Dream（Version Three）",
            "Get U're Dream（オリジナルカラオケ）",
            "Get U're Dream (Perry Geyer Short Mix) (Secret Track)"
        ]
    },
    "Promised you": {
        "CD": [
            "promised you",
            "The only truth I know is you",
            "promised you（オリジナルカラオケ）"
        ]
    },
    "さわやかな君の気持ち": {
        "CD": [
            "さわやかな君の気持ち",
            "抱きしめていて",
            "Seven Rainbow",
            "さわやかな君の気持ち（オリジナルカラオケ）"
        ]
    },
    "明日を夢見て": {
        "CD": [
            "明日を夢見て",
            "探しに行こうよ",
            "明日を夢見て（オリジナルカラオケ）"
        ]
    },
    "瞳閉じて": {
        "CD": [
            "瞳閉じて",
            "愛しい人よ 〜名もなき旅人よ〜",
            "瞳閉じて（オリジナルカラオケ）"
        ]
    },
    "もっと近くで君の横顔見ていたい": {
        "CD": [
            "もっと近くで君の横顔見ていたい",
            "リセット",
            "もっと近くで君の横顔見ていたい（オリジナルカラオケ）"
        ]
    },
    "かけがえのないもの": {
        "CD": [
            "かけがえのないもの",
            "無我夢中",
            "永遠 (What a beautiful moment Tour Opening Ver.)",
            "かけがえのないもの（オリジナルカラオケ）"
        ]
    },
    "今日はゆっくり話そう": {
        "CD": [
            "今日はゆっくり話そう",
            "淡い雪がとけて",
            "雨が降り出す前に",
            "今日はゆっくり話そう（オリジナルカラオケ）"
        ]
    },
    "星のかがやきよ/夏を待つセイル(帆)のように": {
        "CD": [
            "星のかがやきよ",
            "夏を待つセイル（帆）のように",
            "星のかがやきよ（オリジナルカラオケ）",
            "夏を待つセイル（帆）のように（オリジナルカラオケ）"
        ]
    },
    "悲しいほど貴方が好き/カラッといこう!": {
        "CD": [
            "悲しいほど貴方が好き",
            "カラッといこう!"
        ]
    },
    "ハートに火をつけて": {
        "CD": [
            "ハートに火をつけて",
            "君へのブルース",
            "ハートに火をつけて 〜ピアノ・インストゥルメンタル・バージョン〜",
            "ハートに火をつけて（Instrumental）"
        ]
    },
    "グロリアス マインド": {
        "CD": [
            "グロリアス マインド",
            "探しに行こうよ (2007 version)",
            "愛を信じていたい (2007 version)",
            "グロリアス マインド (Instrumental)"
        ]
    },
    "翼を広げて/愛は暗闇の中で": {
        "CD": [
            "翼を広げて",
            "愛は暗闇の中で",
            "翼を広げて (Instrumental)",
            "愛は暗闇の中で (Instrumental)"
        ],
        "DVD（初回限定盤のみ）": [
            "きっと忘れない"
        ]
    },
    "素直に言えなくて": {
        "CD": [
            "素直に言えなくて 〜featuring Mai Kuraki〜",
            "Hypnosis",
            "素直に言えなくて (Instrumental)",
            "Hypnosis (Instrumental)"
        ],
        "DVD（初回限定盤のみ）": [
            "あの微笑みを忘れないで"
        ]
    }
};

const album = {
    "original": {
        "Good-bye My Loneliness": {
            "CD": [
                "Good-bye My Loneliness",
                "愛は暗闇の中で",
                "恋女の憂鬱",
                "Oh! Sugar Baby",
                "女でいたい",
                "It's a Boy"
            ]
        },
        "もう探さない": {
            "CD": [
                "不思議ね…",
                "もう探さない",
                "素直に言えなくて",
                "ひとりが好き",
                "Forever",
                "Lonely Soldier Boy",
                "いつかは…"
            ]
        },
        "HOLD ME": {
            "CD": [
                "眠れない夜を抱いて",
                "誰かが待ってる",
                "サヨナラ言えなくて",
                "あの微笑みを忘れないで",
                "好きなように踊りたいの",
                "Dangerous Tonight",
                "こんなに愛しても",
                "Why Don't You Leave Me Alone",
                "愛は眠ってる",
                "遠い日のNostalgia",
                "So Together"
            ]
        },
        "揺れる想い": {
            "CD": [
                "揺れる想い",
                "Season",
                "君がいない (B-version)",
                "IN MY ARMS TONIGHT",
                "あなたを好きだけど",
                "負けないで",
                "Listen to me",
                "You and me（and…）",
                "I want you",
                "二人の夏"
            ]
        },
        "OH MY LOVE": {
            "CD": [
                "Oh my love",
                "Top Secret",
                "きっと忘れない",
                "もう少し あと少し…",
                "雨に濡れて",
                "この愛に泳ぎ疲れても",
                "I still remember",
                "If you gimme smile",
                "来年の夏も",
                "あなたに帰りたい"
            ]
        },
        "Forever you": {
            "CD": [
                "今すぐ会いに来て",
                "ハイヒール脱ぎ捨てて",
                "Forever you",
                "もう逃げたりしないわ 想い出から",
                "あなたを感じていたい",
                "気楽に行こう",
                "I'm in love",
                "こんなにそばに居るのに",
                "Just believe in love",
                "瞳そらさないで"
            ]
        },
        "TODAY IS ANOTHER DAY": {
            "CD": [
                "マイ フレンド",
                "君がいたから",
                "サヨナラは今もこの胸に居ます",
                "LOVE 〜眠れずに君の横顔ずっと見ていた〜",
                "DAN DAN 心魅かれてく",
                "眠り",
                "心を開いて",
                "突然",
                "今日も",
                "Today is another day",
                "愛が見えない",
                "見つめていたいね"
            ]
        },
        "永遠": {
            "CD": [
                "永遠",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "WAKE UP MAKE THE MORNING LAST〜忘れがたき人へ〜",
                "Brand New Love",
                "運命のルーレット廻して",
                "遠い星を数えて",
                "新しいドア 〜冬のひまわり〜",
                "GOOD DAY",
                "I feel fine,yeah",
                "少女の頃に戻ったみたいに",
                "息もできない",
                "風が通り抜ける街へ",
                "フォトグラフ"
            ],
            "初回特典CD": [
                "CAN'T TAKE MY EYES OFF OF YOU（君の瞳に恋してる）",
                "CAN'T TAKE MY EYES OFF OF YOU（君の瞳に恋してる） 〜Readymade Wizard Mix Short Cuts〜"
            ]
        },
        "時間の翼": {
            "CD": [
                "Get U're Dream",
                "この涙 星になれ",
                "promised you 〜with P-edition〜",
                "痛いくらい君があふれているよ",
                "窓の外はモノクローム",
                "お・も・ひ・で",
                "明日もし君が壊れても",
                "世界はきっと未来の中 〜another style 21〜",
                "hero",
                "揺れる想い (Gomi's New York Remix)",
                "負けないで (Gomi's 10th Anniversary Special Mix)",
                "時間の翼"
            ]
        },
        "止まっていた時計が今動き出した": {
            "CD": [
                "明日を夢見て",
                "時間の翼",
                "もっと近くで君の横顔見ていたい",
                "pray",
                "出逢いそして別れ",
                "止まっていた時計が今動き出した",
                "瞳閉じて",
                "さわやかな君の気持ち (Album Ver.)",
                "愛であなたを救いましょう",
                "天使のような笑顔で",
                "悲しいほど 今日は雨でも"
            ]
        },
        "君とのDistance": {
            "CD": [
                "夏を待つセイル（帆）のように",
                "サヨナラまでのディスタンス",
                "かけがえのないもの",
                "今日はゆっくり話そう",
                "君とのふれあい",
                "セパレート・ウェイズ",
                "Last Good-bye",
                "星のかがやきよ",
                "月に願いを",
                "あなたと共に生きてゆく",
                "I can't tell",
                "good-night sweetheart",
                "君と今日の事を一生忘れない"
            ]
        }
    },
    "compilation": {
        "ZARD BLEND〜SUN & STONE〜": {
            "CD": [
                "君に逢いたくなったら…",
                "揺れる想い",
                "君がいない",
                "心を開いて",
                "Good-bye My Loneliness",
                "IN MY ARMS TONIGHT",
                "あの微笑みを忘れないで",
                "Oh my love",
                "来年の夏も",
                "ハイヒール脱ぎ捨てて",
                "Don't you see!",
                "眠れない夜を抱いて",
                "こんなに愛しても 〜Hold Me〜"
            ]
        },
        "ZARD BLEND II〜LEAF & SNOW〜": {
            "CD": [
                "私だけ見つめて",
                "あなたを感じていたい",
                "もう少し あと少し…",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "黄昏にMy Lonely Heart",
                "Boy",
                "Stray Love",
                "Take me to your dream",
                "You and me（and…）",
                "あなたに帰りたい",
                "Just for you",
                "Ready,Go!",
                "Change my mind",
                "カナリヤ",
                "クリスマス タイム（ZARD Version）",
                "永遠 〜君と僕との間に〜"
            ]
        },
        "Soffio di vento 〜Best of IZUMI SAKAI Selection〜": {
            "CD": [
                "あの微笑みを忘れないで",
                "黄昏にMy Lonely Heart",
                "愛が見えない",
                "サヨナラは今もこの胸に居ます",
                "ひとりが好き",
                "あなたに帰りたい",
                "So Together",
                "遠い星を数えて",
                "遠い日のNostalgia",
                "来年の夏も",
                "かけがえのないもの",
                "Boy",
                "見つめていたいね"
            ],
            "DVD": [
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "カナリヤ"
            ]
        },
        "Brezza di mare 〜dedicated to IZUMI SAKAI〜": {
            "CD": [
                "瞳閉じて",
                "明日を夢見て",
                "風が通り抜ける街へ",
                "I'm in love",
                "君がいない（B-version）",
                "もう探さない",
                "promised you",
                "悲しいほど貴方が好き",
                "君がいたから（di mare version）",
                "止まっていた時計が今動き出した",
                "さわやかな君の気持ち",
                "少女の頃に戻ったみたいに",
                "世界はきっと未来の中（di mare version）",
                "いつかは…"
            ],
            "DVD": [
                "もう少し あと少し…",
                "眠り"
            ]
        }
    },
    "best": {
        "ZARD BEST The Single Collection 〜軌跡〜": {
            "CD": [
                "負けないで",
                "君がいない",
                "揺れる想い",
                "果てしない夢を",
                "もう少し あと少し…",
                "きっと忘れない",
                "この愛に泳ぎ疲れても",
                "こんなにそばに居るのに",
                "Just believe in love",
                "愛が見えない",
                "マイ フレンド",
                "心を開いて",
                "永遠 (Intro Piano Version)",
                "運命のルーレット廻して (Re-mix Version)"
            ]
        },
        "ZARD BEST 〜Request Memorial〜": {
            "CD": [
                "Don't you see!",
                "あなたを感じていたい",
                "息もできない",
                "君に逢いたくなったら…",
                "あの微笑みを忘れないで",
                "Oh my love",
                "サヨナラは今もこの胸に居ます",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "Forever you",
                "突然",
                "遠い日のNostalgia",
                "雨に濡れて",
                "I still remember",
                "MIND GAMES"
            ]
        },
        "Golden Best 〜15th Anniversary〜": {
            "CD": [
                "Good-bye My Loneliness",
                "眠れない夜を抱いて",
                "IN MY ARMS TONIGHT",
                "負けないで",
                "君がいない",
                "揺れる想い",
                "もう少し あと少し…",
                "きっと忘れない",
                "この愛に泳ぎ疲れても",
                "Oh my love",
                "こんなにそばに居るのに",
                "あなたを感じていたい",
                "愛が見えない",
                "サヨナラは今もこの胸に居ます",
                "マイ フレンド",
                "心を開いて",
                "Today is another day",
                "Don't you see!",
                "永遠",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "運命のルーレット廻して",
                "Get U're Dream",
                "もっと近くで君の横顔見ていたい",
                "今日はゆっくり話そう",
                "星のかがやきよ",
                "夏を待つセイル（帆）のように",
                "ハートに火をつけて"
            ]
        },
        "ZARD Request Best 〜beautiful memory〜": {
            "CD": [
                "グロリアス マインド",
                "Ready,Go!",
                "突然",
                "君に逢いたくなったら…",
                "ハイヒール脱ぎ捨てて",
                "こんなに愛しても",
                "二人の夏",
                "明日もし君が壊れても",
                "君とのふれあい",
                "時間の翼",
                "かけがえのないもの",
                "揺れる想い（'07 Live Ver.）",
                "永遠（'07 Live Ver.）",
                "マイ フレンド（'07 Live Ver.）",
                "Don't you see!（'07 Live Ver.）",
                "息もできない",
                "新しいドア 〜冬のひまわり〜",
                "Forever you",
                "あの微笑みを忘れないで",
                "不思議ね…",
                "淡い雪がとけて",
                "フォトグラフ",
                "hero",
                "Love is Gone",
                "Season",
                "雨に濡れて",
                "心を開いて（'07 Live Ver.）",
                "少女の頃に戻ったみたいに（'07 Live Ver.）",
                "君がいない（'07 Live Ver.）",
                "負けないで（'07 Live Ver.）"
            ]
        },
        "ZARD Forever Best 〜25th Anniversary〜": {
            "CD": [
                "Don't you see!",
                "マイ フレンド",
                "この愛に泳ぎ疲れても",
                "Good-bye My Loneliness",
                "WAKE UP MAKE THE MORNING LAST〜忘れがたき人へ〜",
                "君に逢いたくなったら…",
                "息もできない",
                "今すぐ会いに来て",
                "ハイヒール脱ぎ捨てて",
                "Forever you",
                "明日を夢見て",
                "翼を広げて",
                "愛は暗闇の中で featuring Aya Kamiki",
                "星のかがやきよ",
                "夏を待つセイル（帆）のように",
                "君がいない",
                "心を開いて",
                "揺れる想い",
                "素直に言えなくて featuring Mai Kuraki",
                "Oh my love",
                "雨に濡れて",
                "I still remember",
                "来年の夏も",
                "あなたに帰りたい",
                "愛が見えない",
                "果てしない夢を ZYYG, REV, ZARD & WANDS featuring 長嶋茂雄",
                "かけがえのないもの",
                "遠い星を数えて",
                "風が通り抜ける街へ",
                "DAN DAN 心魅かれてく",
                "突然",
                "Today is another day",
                "Season",
                "眠れない夜を抱いて",
                "こんなにそばに居るのに",
                "永遠",
                "サヨナラは今もこの胸に居ます",
                "眠り",
                "あの微笑みを忘れないで",
                "もう少し あと少し…",
                "Get U're Dream",
                "IN MY ARMS TONIGHT",
                "運命のルーレット廻して",
                "少女の頃に戻ったみたいに",
                "きっと忘れない",
                "こんなに愛しても",
                "promised you",
                "GOOD DAY",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "グロリアス マインド",
                "あなたを感じていたい",
                "負けないで"
            ]
        }
    },
    "live": {
        "ZARD Cruising & Live 〜限定盤ライヴCD〜": {
            "CD": [
                "揺れる想い",
                "君がいない",
                "心を開いて",
                "Don't you see!",
                "世界はきっと未来の中",
                "フォトグラフ",
                "もう少し あと少し…",
                "眠れない夜を抱いて",
                "My Baby Grand 〜ぬくもりが欲しくて〜",
                "IN MY ARMS TONIGHT",
                "あの微笑みを忘れないで",
                "この愛に泳ぎ疲れても",
                "遠い星を数えて",
                "負けないで"
            ]
        }
    }
};