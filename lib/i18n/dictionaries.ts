export type Language = 'ko' | 'en' | 'ja';

export const dictionary = {
    ko: {
        nav: {
            brand: "BasketRule",
            home: "홈",
            rules: "룰북",
            compare: "비교",
            signals: "수신호",
            local: "로컬룰",
            gear: "장비",
            quiz: "퀴즈",
            community: "커뮤니티"
        },
        hero: {
            season_update: "2024-2025 시즌 규칙 업데이트",
            slogan_1: "오해는",
            slogan_2: "줄이고",
            slogan_3: "즐거움은",
            slogan_4: "더하다",
            subtext_1: "내 손안의 농구 심판, 바스켓룰(BasketRule)",
            subtext_2: "생활체육 농구 판정의 모든 기준을 여기서 확인하세요.",
            search_placeholder: "규칙 검색 (예: 트래블링, U파울)",
            search_hint: "검색 예: 개더 스텝, 실린더, 3초",
            quick_access: "빠른 이동"
        },
        home: {
            qa_rules_desc: "규칙 라이브러리",
            qa_compare_desc: "규칙 비교 모드",
            qa_signals_desc: "심판 수신호",
            qa_local_desc: "로컬 룰",
            qa_access_text: "{desc} 바로가기"
        },
        rules_page: {
            title: "규칙 라이브러리",
            description: "농구 규칙에 대한 상세한 설명입니다.",
            tabs: {
                fiba: "FIBA / KBA",
                nba: "NBA"
            },
            search_placeholder: "규칙 검색...",
            no_results: "\"{query}\"에 대한 검색 결과가 없습니다."
        },
        rule_card: {
            easy_summary: "쉬운 요약",
            official_text: "공식 원문",
            no_data: "데이터가 없습니다."
        },
        signals_page: {
            title: "공식 수신호",
            description: "FIBA 농구 경기에서 사용되는 공식 심판 수신호 가이드입니다. 카드를 클릭하면 상세 설명을 볼 수 있습니다.",
            categories: {
                "All": "전체",
                "Game Clock": "경기 시계",
                "Scoring": "득점",
                "Substitution and Time-out": "교체 및 타임아웃",
                "Informative": "정보 전달",
                "Violations": "바이올레이션",
                "Number of Players": "선수 번호",
                "Fouls": "파울",
                "Special Fouls": "특수 파울",
                "Free-Throw Penalty Administration": "자유투 벌칙 진행",
                "Free-Throw Administration – Lead Official": "자유투 진행 (리드)",
                "Free-Throw Administration – Trail / Centre Official": "자유투 진행 (트레일/센터)"
            },
            dialog: {
                description: "설명",
                animated_demo: "애니메이션 예시 포함"
            },
            no_image: "이미지 없음"
        },
        compare_page: {
            title: "리그별 규칙 비교",
            description: "FIBA (국제/KBA)와 NBA 규칙을 나란히 비교합니다.",
            card_title: "주요 차이점",
            card_desc: "리그 간, 주요 규칙의 차이점입니다.",
            table: {
                feature: "항목",
                fiba: "FIBA (KBA)",
                nba: "NBA"
            },
            note: "참고: 한국의 대부분 아마추어 리그(KBA 등)는 FIBA 규칙을 따르며, 일부 로컬 룰이 적용될 수 있습니다."
        },
        local_rules_page: {
            title: "로컬 룰 가이드",
            description: "한국 생활체육 농구에서 자주 쓰이는 로컬 규정과 변형 룰을 확인하세요.",
            tabs: {
                division: "K-디비전 (공식)",
                amateur: "일반 동호회",
                practice: "자체 연습"
            },
            badge: {
                official: "FIBA 표준",
                variation: "로컬 변형"
            },
            checklist_title: "경기 전 체크리스트",
            country_selector: {
                label: "국가/지역 선택",
                kr: "대한민국 (Korea)",
                us: "미국 (Streetball)",
                ph: "필리핀 (Ligang Labas)"
            },
            cards: {
                game_time: {
                    title: "경기 시간 (Game Time)",
                    desc: "생활체육 시간 운영 규정",
                    running_time: "런닝 타임 적용 (4쿼터 종료 2분 전만 데드 타임)",
                    seven_min: "쿼터당 7분 경기 (일반 대회 기준)",
                    overtime: "연장전: 먼저 득점하는 팀 승리 (골든 골)"
                },
                eligibility: {
                    title: "가점 및 선수 자격 (Points & Eligibility)",
                    desc: "참가 자격 및 기량 평준화",
                    plus_one: "+1점 제도 (여성, 40대 이상, 중학생 등)",
                    ex_pro: "선수 출신 (고교 이상) 쿼터당 1명 제한",
                    roster_limit: "와일드카드(비등록 선수) 출전 불가"
                }
            }
        },
        plus_one_calc: {
            title: "가점(+1점) 계산기",
            desc: "여성/유소년/시니어 선수의 득점을 계산해보세요.",
            is_target: "가점 대상 선수인가요?",
            shot_type: "어떤 슛을 넣었나요?",
            result: "득점 인정",
            normal: "일반",
            plus_one: "대상 (+1점)",
            field_goal_2: "2점슛",
            field_goal_3: "3점슛",
            free_throw: "자유투"
        },
        gear_page: {
            title: "Safety & Gear (장비 규정)",
            description: "2024-2025 시즌 강화된 유니폼 및 액세서리 착용 규정 체크리스트.",
            uniform: {
                title: "유니폼 (Uniform)",
                desc: "필수 준수 사항",
                items: {
                    tucked: "상의 넣어 입기 (Tucked in): 경기 중 상의는 반드시 하의 안으로 넣어 입어야 합니다.",
                    color: "배색 통일: 상/하의 주 색상이 동일해야 합니다. (다른 색상 언더레이어 착용 시, 유니폼 주 색상과 일치해야 함)",
                    number: "번호 표기: 앞/뒤 번호가 명확히 식별 가능해야 하며, 테이프 부착 등 임시 조치는 불허될 수 있습니다.",
                    socks: "양말: 팀원 간 양말 색상 통일 권장 (대회별 상이)."
                }
            },
            accessories: {
                title: "액세서리 허용 기준",
                desc: "안전을 위한 착용 가이드",
                table: {
                    type: "구분",
                    item: "품목",
                    allowed: "허용 여부",
                    jewelry: "장신구",
                    jewelry_items: "목걸이, 귀걸이, 반지, 팔찌",
                    padding: "보호대",
                    padding_items: "무릎/팔꿈치 패딩 보호대",
                    glasses: "안경",
                    glasses_items: "일반 안경 (금속 프레임)",
                    goggles: "고글",
                    goggles_items: "스포츠 고글 (플라스틱)",
                    compression: "압박류",
                    compression_items: "암 슬리브, 레그 슬리브"
                },
                note: "* 위 기준은 KBA 및 FIBA 일반 규정을 따르며, 대회 요강에 따라 다를 수 있습니다."
            }
        },
        quiz_page: {
            title: "Basket IQ",
            questions_count: "Q.{current}/{total}",
            result_title: "Quiz 완료!",
            result_desc: "당신의 농구 규칙 IQ 점수는?",
            perfect_msg: "완벽합니다! 심판에 도전해보세요.",
            fail_msg: "조금 더 공부가 필요하네요!",
            restart: "다시 도전하기",
            correct: "정답입니다! 👏",
            incorrect: "오답입니다. 😅",
            next: "다음 문제"
        },
        community_page: {
            title: "커뮤니티",
            description: "농구 팬들과 함께 소통하는 공간입니다.",
            coming_soon_title: "커뮤니티 기능 준비 중",
            coming_soon_desc: "더 나은 소통 공간을 위해 열심히 개발 중입니다. 곧 만나보실 수 있습니다!",
            back_home: "홈으로 돌아가기"
        },
        common: {
            loading: "로딩 중...",
            no_results: "검색 결과가 없습니다."
        }
    },
    en: {
        nav: {
            brand: "BasketRule",
            home: "Home",
            rules: "Rules",
            compare: "Compare",
            signals: "Signals",
            local: "Local",
            gear: "Gear",
            quiz: "Quiz",
            community: "Community"
        },
        hero: {
            season_update: "2024-2025 Season Rules Updated",
            slogan_1: "Reduce",
            slogan_2: "Confusion",
            slogan_3: "Maximize",
            slogan_4: "Fun",
            subtext_1: "The ultimate pocket basketball referee.",
            subtext_2: "Find all standards for life sports basketball judgments here.",
            search_placeholder: "Search rules (e.g., Traveling, U-Foul)",
            search_hint: "Try: Gather step, Cylinder, 3 Seconds",
            quick_access: "Quick Access"
        },
        home: {
            qa_rules_desc: "Rule Library",
            qa_compare_desc: "Versus Mode",
            qa_signals_desc: "Ref Signals",
            qa_local_desc: "Local Rules",
            qa_access_text: "Access {desc} directly."
        },
        rules_page: {
            title: "Rule Library",
            description: "Detailed explanations of basketball rules.",
            tabs: {
                fiba: "FIBA / KBA",
                nba: "NBA"
            },
            search_placeholder: "Search rules...",
            no_results: "No rules found matching \"{query}\"."
        },
        rule_card: {
            easy_summary: "Easy Summary",
            official_text: "Official Text",
            no_data: "No data available."
        },
        signals_page: {
            title: "Official Signals",
            description: "Comprehensive guide to the official referee hand signals used in FIBA basketball games. Click on any signal card to see detailed instructions.",
            categories: {
                "All": "All",
                "Game Clock": "Game Clock",
                "Scoring": "Scoring",
                "Substitution and Time-out": "Substitution and Time-out",
                "Informative": "Informative",
                "Violations": "Violations",
                "Number of Players": "Number of Players",
                "Fouls": "Fouls",
                "Special Fouls": "Special Fouls",
                "Free-Throw Penalty Administration": "Free-Throw Penalty Administration",
                "Free-Throw Administration – Lead Official": "Free-Throw Administration – Lead Official",
                "Free-Throw Administration – Trail / Centre Official": "Free-Throw Administration – Trail / Centre Official"
            },
            dialog: {
                description: "Description",
                animated_demo: "Includes animated demonstration"
            },
            no_image: "No Image Available"
        },
        compare_page: {
            title: "League Comparison",
            description: "FIBA (International/KBA) vs NBA rules side-by-side.",
            card_title: "Key Differences",
            card_desc: "Major rule variations between the leagues.",
            table: {
                feature: "Feature",
                fiba: "FIBA (KBA)",
                nba: "NBA"
            },
            note: "Note: Most amateur leagues in Korea (KBA) follow FIBA rules with minor local modifications."
        },
        local_rules_page: {
            title: "Local Rules Guide",
            description: "Check out common local rules and variations in Korean amateur basketball.",
            tabs: {
                division: "K-Division (Official)",
                amateur: "Amateur League",
                practice: "Practice Game"
            },
            badge: {
                official: "FIBA Std",
                variation: "Variation"
            },
            checklist_title: "Pre-Game Checklist",
            country_selector: {
                label: "Select Region",
                kr: "Korea (Amateur)",
                us: "USA (Streetball)",
                ph: "Philippines (Ligang Labas)"
            },
            cards: {
                game_time: {
                    title: "Game Time",
                    desc: "Recreational league time regulations",
                    running_time: "Running Time (Dead time only approx. 2 mins before Q4 end)",
                    seven_min: "7 mins per quarter",
                    overtime: "Overtime: Golden Goal (First to score wins)"
                },
                eligibility: {
                    title: "Points & Eligibility",
                    desc: "Participation and handicap rules",
                    plus_one: "+1 Point System (Female, Senior, Junior etc.)",
                    ex_pro: "Ex-Pro Limit (1 per quarter)",
                    roster_limit: "No Wildcards (Unregistered players)"
                }
            }
        },
        plus_one_calc: {
            title: "+1 Point Calculator",
            desc: "Calculate points for Women/Youth/Senior players.",
            is_target: "Is Target Player?",
            shot_type: "Shot Type?",
            result: "Points Awarded",
            normal: "Normal",
            plus_one: "Target (+1)",
            field_goal_2: "2 Pts",
            field_goal_3: "3 Pts",
            free_throw: "Free Throw"
        },
        gear_page: {
            title: "Safety & Gear Regulations",
            description: "Checklist for 2024-2025 season uniform and accessory regulations.",
            uniform: {
                title: "Uniform",
                desc: "Mandatory Requirements",
                items: {
                    tucked: "Tucked in: Jerseys must be tucked into shorts during gameplay.",
                    color: "Color Matching: Top and bottom dominant colors must match. (Under-layers must match dominant uniform color if visible)",
                    number: "Numbering: Numbers must be clearly visible on front/back. Temporary fixes like tape may be disallowed.",
                    socks: "Socks: Uniform sock color recommended for teammates (varies by tournament)."
                }
            },
            accessories: {
                title: "Accessory Guidelines",
                desc: "Safety Guidelines",
                table: {
                    type: "Category",
                    item: "Item",
                    allowed: "Status",
                    jewelry: "Jewelry",
                    jewelry_items: "Necklaces, Earrings, Rings, Bracelets",
                    padding: "Padding",
                    padding_items: "Knee/Elbow Padded Sleeves",
                    glasses: "Glasses",
                    glasses_items: "Regular Glasses (Metal Frames)",
                    goggles: "Goggles",
                    goggles_items: "Sports Goggles (Plastic)",
                    compression: "Compression",
                    compression_items: "Arm Sleeves, Leg Sleeves"
                },
                note: "* Standards follow KBA & FIBA general rules; verify specific tournament regulations."
            }
        },
        quiz_page: {
            title: "Basket IQ",
            questions_count: "Q.{current}/{total}",
            result_title: "Quiz Complete!",
            result_desc: "What is your Basketball IQ?",
            perfect_msg: "Perfect! You're ready to be a referee.",
            fail_msg: "Needs a bit more study!",
            restart: "Try Again",
            correct: "Correct! 👏",
            incorrect: "Wrong. 😅",
            next: "Next Question"
        },
        community_page: {
            title: "Community",
            description: "A place to connect with basketball fans.",
            coming_soon_title: "Community Coming Soon",
            coming_soon_desc: "We are working hard to build a great community space. Stay tuned!",
            back_home: "Back to Home"
        },
        common: {
            loading: "Loading...",
            no_results: "No results found."
        }
    },
    ja: {
        nav: {
            brand: "BasketRule",
            home: "ホーム",
            rules: "ルール",
            compare: "比較",
            signals: "審判シグナル",
            local: "ローカルルール",
            gear: "用具",
            quiz: "クイズ",
            community: "コミュニティ"
        },
        hero: {
            season_update: "2024-2025シーズン ルール更新",
            slogan_1: "誤解は",
            slogan_2: "減らし",
            slogan_3: "楽しさは",
            slogan_4: "増やす",
            subtext_1: "あなたの手のひらのバスケットボール審判、BasketRule",
            subtext_2: "生活体育バスケットボール判定の全基準をここで確認してください。",
            search_placeholder: "ルール検索 (例: トラベリング, アンスポーツマンライクファウル)",
            search_hint: "検索例: ギャザーステップ, シリンダー, 3秒",
            quick_access: "クイックアクセス"
        },
        home: {
            qa_rules_desc: "ルールライブラリ",
            qa_compare_desc: "ルール比較モード",
            qa_signals_desc: "審判シグナル",
            qa_local_desc: "ローカルルール",
            qa_access_text: "{desc}へ移動"
        },
        rules_page: {
            title: "ルールライブラリ",
            description: "バスケットボールのルールに関する詳細な説明です。",
            tabs: {
                fiba: "FIBA / KBA",
                nba: "NBA"
            },
            search_placeholder: "ルールを検索...",
            no_results: "\"{query}\" に対する検索結果がありません。"
        },
        rule_card: {
            easy_summary: "簡単な要約",
            official_text: "公式原文",
            no_data: "データがありません。"
        },
        signals_page: {
            title: "公式シグナル",
            description: "FIBAバスケットボールの試合で使用される公式審判シグナルのガイドです。カードをクリックすると詳細説明が表示されます。",
            categories: {
                "All": "すべて",
                "Game Clock": "ゲームクロック",
                "Scoring": "得点",
                "Substitution and Time-out": "交代とタイムアウト",
                "Informative": "情報伝達",
                "Violations": "バイオレーション",
                "Number of Players": "選手の番号",
                "Fouls": "ファウル",
                "Special Fouls": "特別なファウル",
                "Free-Throw Penalty Administration": "フリースローの罰則処理",
                "Free-Throw Administration – Lead Official": "フリースロー処理（リード）",
                "Free-Throw Administration – Trail / Centre Official": "フリースロー処理（トレイル/センター）"
            },
            dialog: {
                description: "説明",
                animated_demo: "アニメーション例あり"
            },
            no_image: "画像なし"
        },
        compare_page: {
            title: "リーグ別ルール比較",
            description: "FIBA (国際/KBA) と NBA のルールを並べて比較します。",
            card_title: "主な違い",
            card_desc: "リーグ間の主要なルールの違いです。",
            table: {
                feature: "項目",
                fiba: "FIBA (KBA)",
                nba: "NBA"
            },
            note: "注: 韓国の多くのアマチュアリーグ（KBAなど）はFIBAルールに従いますが、一部ローカルルールが適用されることがあります。"
        },
        local_rules_page: {
            title: "ローカルルールガイド",
            description: "韓国の生活体育バスケットボールでよく使われるローカル規定と変則ルールを確認しましょう。",
            tabs: {
                division: "K-Division (公式)",
                amateur: "一般同好会",
                practice: "自主練習"
            },
            badge: {
                official: "FIBA標準",
                variation: "ローカル変則"
            },
            checklist_title: "試合前チェックリスト",
            country_selector: {
                label: "地域選択",
                kr: "韓国 (Korea)",
                us: "アメリカ (Streetball)",
                ph: "フィリピン (Ligang Labas)"
            },
            cards: {
                game_time: {
                    title: "試合時間 (Game Time)",
                    desc: "生活体育の時間運営規定",
                    running_time: "ランニングタイム適用 (4Q終了2分前のみデッドタイム)",
                    seven_min: "クォーターあたり7分 (一般大会基準)",
                    overtime: "延長戦: 先に得点したチームの勝利 (ゴールデンゴール)"
                },
                eligibility: {
                    title: "加点および選手資格 (Points & Eligibility)",
                    desc: "参加資格およびハンディキャップ",
                    plus_one: "+1点制度 (女性、40代以上、中学生など)",
                    ex_pro: "選手出身 (高校以上) クォーター当り1名制限",
                    roster_limit: "ワイルドカード(未登録選手) 出場不可"
                }
            }
        },
        plus_one_calc: {
            title: "加点(+1点)計算機",
            desc: "女性/ユース/シニア選手の得点を計算してみましょう。",
            is_target: "加点対象選手ですか？",
            shot_type: "どんなシュートを決めましたか？",
            result: "得点認定",
            normal: "通常",
            plus_one: "対象 (+1点)",
            field_goal_2: "2点シュート",
            field_goal_3: "3点シュート",
            free_throw: "フリースロー"
        },
        gear_page: {
            title: "Safety & Gear (用具規定)",
            description: "2024-2025シーズン 強化されたユニフォームおよびアクセサリー着用規定チェックリスト。",
            uniform: {
                title: "ユニフォーム (Uniform)",
                desc: "必須遵守事項",
                items: {
                    tucked: "シャツイン (Tucked in): 試合中、シャツは必ずパンツの中に入れなければなりません。",
                    color: "配色の統一: 上下のメインカラーは同一でなければなりません。(別色のインナー着用時、ユニフォームのメインカラーと一致させる必要あり)",
                    number: "番号表記: 前後の番号が明確に識別可能でなければなりません。テープ貼り付けなどの臨時措置は許可されない場合があります。",
                    socks: "ソックス: チーム員間のソックスの色統一を推奨 (大会により異なる)。"
                }
            },
            accessories: {
                title: "アクセサリー許容基準",
                desc: "安全のための着用ガイド",
                table: {
                    type: "区分",
                    item: "品目",
                    allowed: "許容可否",
                    jewelry: "装飾品",
                    jewelry_items: "ネックレス、ピアス、指輪、ブレスレット",
                    padding: "サポーター",
                    padding_items: "膝/肘のパッド付きサポーター",
                    glasses: "眼鏡",
                    glasses_items: "一般眼鏡 (金属フレーム)",
                    goggles: "ゴーグル",
                    goggles_items: "スポーツゴーグル (プラスチック)",
                    compression: "コンプレッション",
                    compression_items: "アームスリーブ、レッグスリーブ"
                },
                note: "* 上記基準はKBAおよびFIBA一般規定に従いますが、大会要項により異なる場合があります。"
            }
        },
        quiz_page: {
            title: "Basket IQ",
            questions_count: "Q.{current}/{total}",
            result_title: "Quiz 完了!",
            result_desc: "あなたのバスケットボールIQのスコアは？",
            perfect_msg: "完璧です！審判に挑戦してみましょう。",
            fail_msg: "もう少し勉強が必要ですね！",
            restart: "再挑戦する",
            correct: "正解です！ 👏",
            incorrect: "不正解です。 😅",
            next: "次の問題"
        },
        community_page: {
            title: "コミュニティ",
            description: "バスケファンと一緒に交流する空間です。",
            coming_soon_title: "コミュニティ機能準備中",
            coming_soon_desc: "より良い交流空間のために鋭意開発中です。もう少々お待ちください！",
            back_home: "ホームに戻る"
        },
        common: {
            loading: "読み込み中...",
            no_results: "検索結果がありません。"
        }
    }
};
