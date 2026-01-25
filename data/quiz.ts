export type LocalizedContent = {
    ko: string;
    en: string;
    ja: string;
};

export interface QuizQuestion {
    id: number;
    question: LocalizedContent;
    options: {
        ko: string[];
        en: string[];
        ja: string[];
    };
    answer: number; // index of correct answer
    explanation: LocalizedContent;
}

export const questions: QuizQuestion[] = [
    // Level 1: Basic Rules
    {
        id: 1,
        question: {
            ko: "공격 팀이 프론트 코트로 넘어가는 데 주어진 시간은?",
            en: "What is the time limit for the offensive team to cross into the frontcourt?",
            ja: "オフェンスチームがフロントコートにボールを運ぶ制限時間は？"
        },
        options: {
            ko: ["5초", "8초", "10초", "24초"],
            en: ["5 Seconds", "8 Seconds", "10 Seconds", "24 Seconds"],
            ja: ["5秒", "8秒", "10秒", "24秒"]
        },
        answer: 1,
        explanation: {
            ko: "백코트 바이얼레이션 기준은 8초입니다. (FIBA/KBA/NBA 공통)",
            en: "The backcourt violation limit is 8 seconds (Common to FIBA/KBA/NBA).",
            ja: "バックコートバイオレーションの基準は8秒です。(FIBA/KBA/NBA共通)"
        }
    },
    {
        id: 2,
        question: {
            ko: "경기 중 선수 교체가 가능한 시점은?",
            en: "When can a substitution be made during a game?",
            ja: "試合中に選手交代が可能なタイミングは？"
        },
        options: {
            ko: ["득점 후 아무 때나", "데드볼 상황이고 시계가 멈췄을 때", "작전타임 중에는 불가능", "공격권이 있을 때 심판에게 요청"],
            en: ["Any time after scoring", "Dead ball and clock stopped", "Not during time-outs", "Request to ref when having possession"],
            ja: ["得点後いつでも", "デッドボールで時計が止まっている時", "タイムアウト中は不可", "攻撃権がある時に審判に要請"]
        },
        answer: 1,
        explanation: {
            ko: "교체는 경기가 멈추고(데드볼) 시계가 멈춘 상태에서만 심판의 승인 하에 가능합니다.",
            en: "Substitutions are allowed only during a dead ball when the game clock is stopped, with referee approval.",
            ja: "交代は試合が止まり（デッドボール）、時計が止まっている状態でのみ審判の承認下で可能です。"
        }
    },
    {
        id: 3,
        question: {
            ko: "테크니컬 파울(T-Foul)의 벌칙으로 올바른 것은?",
            en: "What is the correct penalty for a Technical Foul (T-Foul)?",
            ja: "テクニカルファウル(Tファウル)の罰則として正しいものは？"
        },
        options: {
            ko: ["자유투 2개", "자유투 1개 + 공격권", "자유투 1개", "퇴장"],
            en: ["2 Free Throws", "1 Free Throw + Possession", "1 Free Throw", "Ejection"],
            ja: ["フリースロー2本", "フリースロー1本 + 攻撃権", "フリースロー1本", "退場"]
        },
        answer: 2,
        explanation: {
            ko: "FIBA 규정상 테크니컬 파울은 자유투 1개가 주어지며, 공격권은 파울 발생 시점의 상태를 따릅니다.",
            en: "Under FIBA rules, a Technical Foul results in 1 free throw. Possession resumes from the point of interruption.",
            ja: "FIBA規定上、テクニカルファウルはフリースロー1本が与えられ、攻撃権はファウル発生時点の状態に従います。"
        }
    },

    // Level 2: Violations & Mechanics
    {
        id: 4,
        question: {
            ko: "공을 잡은 상태(Hold)에서 '개더 스텝' 이후 몇 발까지 허용되나요?",
            en: "How many steps are allowed after the 'gather step' while holding the ball?",
            ja: "ボールを保持した状態で「ギャザーステップ」の後、何歩まで許されますか？"
        },
        options: {
            ko: ["0발", "1발", "2발", "3발"],
            en: ["0 steps", "1 step", "2 steps", "3 steps"],
            ja: ["0歩", "1歩", "2歩", "3歩"]
        },
        answer: 2,
        explanation: {
            ko: "2017년 개정 이후 '개더 스텝(0스텝)' + 2스텝까지 허용됩니다.",
            en: "Since the 2017 revision, 'gather step (0 step)' + 2 steps are allowed.",
            ja: "2017年の改正以降、「ギャザーステップ(0ステップ)」 + 2ステップまで許容されます。"
        }
    },
    {
        id: 5,
        question: {
            ko: "3초 룰(3-Second Violation)은 어디에 머무를 때 적용되나요?",
            en: "Where does the 3-second violation apply?",
            ja: "3秒ルール(3-Second Violation)はどこに留まる時に適用されますか？"
        },
        options: {
            ko: ["상대방 3점 라인 안쪽", "상대방 제한구역(페인트존) 안", "센터 서클", "우리 팀 벤치 앞"],
            en: ["Inside opponent's 3pt line", "Inside opponent's restricted area (Paint)", "Center Circle", "In front of our bench"],
            ja: ["相手の3点ラインの内側", "相手の制限区域(ペイントゾーン)内", "センターサークル", "自チームベンチの前"]
        },
        answer: 1,
        explanation: {
            ko: "공격자가 상대방 제한구역(페인트존) 안에서 3초 이상 머무를 경우 바이얼레이션입니다.",
            en: "It is a violation if an offensive player stays inside the opponent's restricted area (paint) for more than 3 seconds.",
            ja: "オフェンスが相手の制限区域(ペイントゾーン)内に3秒以上留まった場合、バイオレーションです。"
        }
    },
    {
        id: 6,
        question: {
            ko: "수비자 3초 룰이 존재하는 리그는?",
            en: "Which league has the Defensive 3 Seconds rule?",
            ja: "ディフェンス3秒ルールが存在するリーグは？"
        },
        options: {
            ko: ["FIBA (국제농구)", "KBA (한국생활체육)", "NBA (미국프로농구)", "모두"],
            en: ["FIBA", "KBA", "NBA", "All of the above"],
            ja: ["FIBA (国際バスケ)", "KBA (韓国生活体育)", "NBA (米国プロバスケ)", "すべて"]
        },
        answer: 2,
        explanation: {
            ko: "수비자 3초 룰은 NBA에만 존재합니다. FIBA/KBA는 지역방어가 자유롭습니다.",
            en: "Defensive 3 Seconds exists only in the NBA. FIBA/KBA allow zone defense freely.",
            ja: "ディフェンス3秒ルールはNBAにのみ存在します。FIBA/KBAはゾーンディフェンスが自由です。"
        }
    },

    // Level 3: Fouls & Penalties
    {
        id: 7,
        question: {
            ko: "U-파울(언스포츠맨라이크 파울)의 벌칙으로 올바른 것은?",
            en: "What is the correct penalty for a U-Foul (Unsportsmanlike Foul)?",
            ja: "アンスポーツマンライクファウル(Uファウル)の罰則として正しいものは？"
        },
        options: {
            ko: ["자유투 1개 + 공격권", "자유투 2개", "자유투 2개 + 공격권", "퇴장"],
            en: ["1 Free Throw + Possession", "2 Free Throws", "2 Free Throws + Possession", "Ejection"],
            ja: ["フリースロー1本 + 攻撃権", "フリースロー2本", "フリースロー2本 + 攻撃権", "退場"]
        },
        answer: 2,
        explanation: {
            ko: "U-파울 시 자유투 2개와 공격권(사이드라인)이 주어집니다.",
            en: "A U-Foul results in 2 free throws plus possession (throw-in from the sideline).",
            ja: "Uファウル時はフリースロー2本と攻撃権(サイドライン)が与えられます。"
        }
    },
    {
        id: 8,
        question: {
            ko: "슛 동작 중인 선수에게 파울을 범했지만 슛이 성공했다면?",
            en: "A foul is committed on a shooter, but the shot goes in. What happens?",
            ja: "シュート動作中の選手にファウルをしたが、シュートが決まった場合は？"
        },
        options: {
            ko: ["득점 취소 + 자유투 2개", "득점 인정 + 추가 자유투 1개 (And-1)", "득점 인정 + 공격권 유지", "파울 무효 (No Call)"],
            en: ["Basket cancelled + 2 FTs", "Count the basket + 1 Bonus FT", "Count the basket + Retain possession", "No Call"],
            ja: ["得点取り消し + フリースロー2本", "得点認定 + 追加フリースロー1本 (And-1)", "得点認定 + 攻撃権維持", "ファウル無効 (No Call)"]
        },
        answer: 1,
        explanation: {
            ko: "득점은 인정되며, 추가 자유투 1개가 주어집니다. 이를 흔히 '앤드원(And-1)' 플레이라고 부릅니다.",
            en: "The goal counts, and 1 additional free throw is awarded. Commonly known as an 'And-1' play.",
            ja: "得点は認められ、追加のフリースロー1本が与えられます。これは一般に「アンドワン(And-1)」プレイと呼ばれます。"
        }
    },

    // Level 4: Advanced Interpretations (Expert)
    {
        id: 9,
        question: {
            ko: "수비자가 실린더(Cylinder) 내에서 수직으로 점프하다가 접촉이 발생했습니다. 판정은?",
            en: "A defender jumps vertically within their cylinder and contact occurs. What is the call?",
            ja: "ディフェンダーがシリンダー内で垂直にジャンプして接触が発生しました。判定は？"
        },
        options: {
            ko: ["무조건 수비 파울", "공격자 파울 (Charging) 또는 정당한 수비 (No Call)", "쌍방 파울 (Double Foul)", "점프볼"],
            en: ["Always Defensive Foul", "Offensive Foul or Legal Defense (No Call)", "Double Foul", "Jump Ball"],
            ja: ["無条件でディフェンスファウル", "オフェンスファウルまたは正当な守備 (No Call)", "ダブルファウル", "ジャンプボール"]
        },
        answer: 1,
        explanation: {
            ko: "수직성의 원칙(Verticality)에 따라, 자신의 실린더 내에서 수직으로 뜬 수비자는 보호받습니다. 공격자가 와서 부딪히면 공격자 파울이거나 정당한 경합입니다.",
            en: "Per Verticality Rule, a defender jumping vertically within their cylinder is protected. Contact initiated by offense is offensive foul or legal content.",
            ja: "垂直性の原則(Verticality)に従い、自身のシリンダー内で垂直に跳んだディフェンダーは保護されます。オフェンスがぶつかってきた場合はオフェンスファウルか正当な競り合いです。"
        }
    },
    {
        id: 10,
        question: {
            ko: "백보드를 맞고 림 위에 있는 공을 건드리면?",
            en: "Touching the ball while it's above the rim after hitting the backboard?",
            ja: "バックボードに当たってリムの上にあるボールに触れると？"
        },
        options: {
            ko: ["굿 블록 (Good Block)", "인터피어런스 (Interference) - 득점 인정", "테크니컬 파울", "바이얼레이션 - 공격권 교체"],
            en: ["Good Block", "Goaltending/Interference - Points Counted", "Technical Foul", "Violation - Change of Possession"],
            ja: ["グッドブロック", "インターフェアレンス - 得点認定", "テクニカルファウル", "バイオレーション - 攻撃権交代"]
        },
        answer: 1,
        explanation: {
            ko: "FIBA 규정상 림 위에 있는 공이나 백보드를 맞고 림을 향하는 공을 건드리면 '골텐딩' 또는 '바스켓 인터피어런스'로 간주되어 득점이 인정됩니다.",
            en: "Under FIBA rules, touching a ball above the rim or on its downward flight after hitting the board is Goaltending or Interference. Points are awarded.",
            ja: "FIBA規定上、リムの上にあるボールやバックボードに当たってリムに向かうボールに触れると「ゴールテンディング」または「バスケットインターフェアレンス」とみなされ、得点が認められます。"
        }
    },
    {
        id: 11,
        question: {
            ko: "심판이 양손 엄지를 들어 올리는(👍👍) 수신호의 의미는?",
            en: "What does the referee signal with both thumbs up (👍👍) mean?",
            ja: "審判が両手の親指を立てる(👍👍)シグナルの意味は？"
        },
        options: {
            ko: ["경기를 잘하고 있다", "점프볼 (Held Ball)", "공격권 유지", "선수 교체 승인"],
            en: ["Good Job", "Jump Ball (Held Ball)", "Reset Shot Clock", "Substitution Approved"],
            ja: ["良い試合だ", "ジャンプボール (Held Ball)", "攻撃権維持", "選手交代承認"]
        },
        answer: 1,
        explanation: {
            ko: "양손 엄지를 들어 올리는 것은 '헬드 볼(Held Ball)' 상황을 의미하며, 공격권 화살표(Possession Arrow)에 따라 공격권을 결정합니다.",
            en: "Both thumbs up signals a 'Held Ball'. Possession is determined by the alternating possession arrow.",
            ja: "両手の親指を立てることは「ヘルドボール(Held Ball)」の状況を意味し、ポゼッションアローに従って攻撃権を決定します。"
        }
    },
    {
        id: 12,
        question: {
            ko: "자유투 시 리바운더가 레인(Lane) 안으로 들어갈 수 있는 시점은?",
            en: "When can rebounders enter the lane during a free throw?",
            ja: "フリースローの際、リバウンダーがレーン内に入ることができるタイミングは？"
        },
        options: {
            ko: ["심판이 공을 건네줄 때", "슈터가 공을 잡았을 때", "슈터의 손에서 공이 떠났을 때", "공이 림에 닿았을 때"],
            en: ["When ref passes the ball", "When shooter holds the ball", "When ball leaves shooter's hands", "When ball hits the rim"],
            ja: ["審判がボールを渡した時", "シューターがボールを持った時", "シューターの手からボールが離れた時", "ボールがリムに当たった時"]
        },
        answer: 2,
        explanation: {
            ko: "리바운더는 슈터의 손에서 공이 떠나는 순간(Release) 진입할 수 있습니다. 반면 슈터는 림에 닿을 때까지 들어갈 수 없습니다.",
            en: "Rebounders can enter when the ball leaves the shooter's hands. The shooter must wait until it hits the rim.",
            ja: "リバウンダーはシューターの手からボールが離れた瞬間に入ることができます。一方、シューターはリムに当たるまで入ることができません。"
        }
    },
    {
        id: 13,
        question: {
            ko: "FIBA 룰에서 작전타임(Time-out)은 누가 요청할 수 있나요?",
            en: "In FIBA rules, who can request a time-out?",
            ja: "FIBAルールでタイムアウトを要請できるのは誰ですか？"
        },
        options: {
            ko: ["코트 위 주장", "공을 가진 선수", "감독 (Head Coach)", "아무나"],
            en: ["Captain on court", "Player with ball", "Head Coach", "Anyone"],
            ja: ["コート上のキャプテン", "ボールを持っている選手", "ヘッドコーチ", "誰でも"]
        },
        answer: 2,
        explanation: {
            ko: "FIBA에서는 오직 감독(Head Coach) 또는 코치만이 기록석을 통해 작전타임을 요청할 수 있습니다. (NBA는 선수도 가능)",
            en: "In FIBA, only the Head Coach (or assistant) can request a time-out through the scorer's table.",
            ja: "FIBAでは、ヘッドコーチ（またはコーチ）のみが記録席を通じてタイムアウトを要請できます。"
        }
    },
    {
        id: 14,
        question: {
            ko: "공을 발로 찼을 때 파울인가요, 바이얼레이션인가요?",
            en: "Is kicking the ball a foul or a violation?",
            ja: "ボールを足で蹴った場合、ファウルですか、バイオレーションですか？"
        },
        options: {
            ko: ["파울 (Personal Foul)", "바이얼레이션 (Violation)", "테크니컬 파울", "아무것도 아님 (Play On)"],
            en: ["Personal Foul", "Violation", "Technical Foul", "Play On"],
            ja: ["パーソナルファウル", "バイオレーション", "テクニカルファウル", "何でもない (Play On)"]
        },
        answer: 1,
        explanation: {
            ko: "고의로 공을 차는 행위(Kick Ball)는 바이얼레이션입니다. 반칙(Foul) 횟수에는 포함되지 않으며 공격권만 다시 주어집니다.",
            en: "Intentionally kicking the ball is a violation (Kick Ball). It does not count as a personal foul.",
            ja: "意図的にボールを蹴る行為(Kick Ball)はバイオレーションです。ファウル回数には含まれず、攻撃権のみ再び与えられます。"
        }
    },
    {
        id: 15,
        question: {
            ko: "4쿼터 종료 2분 전(2 Minutes Mark)에 공격 리바운드를 잡았다면 샷클락은 몇 초로 초기화되나요?",
            en: "If an offensive rebound is secured with under 2 minutes in the 4th quarter, what does the shot clock reset to?",
            ja: "第4Q終了2分前にオフェンスリバウンドを取った場合、ショットクロックは何秒にリセットされますか？"
        },
        options: {
            ko: ["14초", "24초", "남은 시간 그대로", "10초"],
            en: ["14 Seconds", "24 Seconds", "Remains unchanged", "10 Seconds"],
            ja: ["14秒", "24秒", "残り時間そのまま", "10秒"]
        },
        answer: 0,
        explanation: {
            ko: "FIBA 룰에서 공격 리바운드 시 샷클락은 언제나 14초로 초기화됩니다. (백코트에서 파울로 인한 리셋은 24초)",
            en: "In FIBA, an offensive rebound always resets the shot clock to 14 seconds.",
            ja: "FIBAルールでオフェンスリバウンド時、ショットクロックは常に14秒にリセットされます。"
        }
    },
    {
        id: 16,
        question: {
            ko: "선수가 심판에게 욕설을 하거나 거칠게 항의하면 주어지는 파울은?",
            en: "Which foul is given for using profanity or aggressively arguing with an official?",
            ja: "選手が審判に暴言を吐いたり激しく抗議した場合に与えられるファウルは？"
        },
        options: {
            ko: ["퍼스널 파울 (P-Foul)", "언스포츠맨라이크 파울 (U-Foul)", "테크니컬 파울 (T-Foul)", "플래그런트 파울"],
            en: ["Personal Foul", "Unsportsmanlike Foul", "Technical Foul", "Flagrant Foul"],
            ja: ["パーソナルファウル", "アンスポーツマンライクファウル", "テクニカルファウル", "フレグラントファウル"]
        },
        answer: 2,
        explanation: {
            ko: "비신사적인 비언어적/언어적 행위는 테크니컬 파울(T-Foul)에 해당합니다. 신체 접촉이 없는 반칙입니다.",
            en: "Unsportsmanlike non-contact behavior results in a Technical Foul (T-Foul).",
            ja: "非紳士的な非言語的/言語的行為はテクニカルファウル(Tファウル)に該当します。身体接触のない反則です。"
        }
    },
    {
        id: 17,
        question: {
            ko: "드리블 중 공을 손바닥으로 떠받치는 동작(Carrying)을 했을 때 판정은?",
            en: "What is the call when a player palms/carries the ball while dribbling?",
            ja: "ドリブル中にボールを手のひらで支える動作(Carrying)をした時の判定は？"
        },
        options: {
            ko: ["더블 드리블 (Double Dribble)", "캐링 더 볼 (Carrying the ball)", "트래블링 (Traveling)", "정상 플레이 (Legal)"],
            en: ["Double Dribble", "Carrying the ball", "Traveling", "Legal"],
            ja: ["ダブルドリブル", "キャリング・ザ・ボール", "トラベリング", "正当なプレイ"]
        },
        answer: 1,
        explanation: {
            ko: "손바닥이 하늘을 향하거나 공이 머무르는 순간 드리블은 종료된 것으로 간주하며, 다시 드리블하면 캐링 바이얼레이션입니다.",
            en: "If the palm faces up or the ball comes to rest, the dribble has ended. Dribbling again is a Carrying violation.",
            ja: "手のひらが上を向いたりボールが止まった瞬間ドリブルは終了したとみなされ、再びドリブルするとキャリングバイオレーションです。"
        }
    },
    {
        id: 18,
        question: {
            ko: "백코트에서 공을 가지고 8초 안에 넘어가야 하는 '8초 룰'의 카운트 시작 시점은?",
            en: "When does the 8-second count start in the backcourt?",
            ja: "バックコートでボールを持って8秒以内に超えなければならない「8秒ルール」のカウント開始時点は？"
        },
        options: {
            ko: ["선수가 공을 터치한 순간", "선수가 공을 확실히 통제(Control)한 순간", "심판이 휘슬을 분 순간", "드로인 패스를 던진 순간"],
            en: ["When ball is touched", "When player establishes control", "When whistle blows", "When throw-in is released"],
            ja: ["選手がボールに触れた瞬間", "選手がボールを確実にコントロールした瞬間", "審判が笛を吹いた瞬間", "スローインパスを投げた瞬間"]
        },
        answer: 0,
        explanation: {
            ko: "FIBA에서는 백코트에서 공이 선수에게 '터치'되는 순간부터 8초 카운트가 시작됩니다. (통제와 다름)",
            en: "In FIBA, the 8-second count begins as soon as the ball 'touches' a player in the backcourt.",
            ja: "FIBAでは、バックコートでボールが選手に「タッチ」された瞬間から8秒カウントが始まります。"
        }
    },
    {
        id: 19,
        question: {
            ko: "경기 종료 버저와 함께 던진 슛이 림에 들어갔습니다. 득점 인정 기준은?",
            en: "A shot is made as the final buzzer sounds. What is the criteria for it to count?",
            ja: "試合終了ブザーと共に放たれたシュートが決まりました。得点認定基準は？"
        },
        options: {
            ko: ["공이 림에 닿았을 때 버저가 울려야 함", "손에서 공이 떠난 후 버저가 울려야 함", "버저가 울리기 전에 림을 통과해야 함", "심판 재량"],
            en: ["Buzzer after hitting rim", "Ball released from hand before buzzer", "Must pass through net before buzzer", "Ref's discretion"],
            ja: ["ボールがリムに当たった時にブザーが鳴るべき", "手からボールが離れた後にブザーが鳴るべき", "ブザーが鳴る前にリムを通過すべき", "審判の裁量"]
        },
        answer: 1,
        explanation: {
            ko: "버저가 울리기 전에 슈터의 손에서 공이 완전히 떠났다면(Release), 이후에 들어가도 득점으로 인정됩니다.",
            en: "If the ball is released from the shooter's hand before the buzzer sounds, the basket counts if it goes in.",
            ja: "ブザーが鳴る前にシューターの手からボールが完全に離れていれば(Release)、その後に入っても得点として認められます。"
        }
    },
    {
        id: 20,
        question: {
            ko: "공격자 파울(Offensive Foul) 발생 시 공격권은 넘어가지만, 주어지지 않는 것은?",
            en: "When an Offensive Foul occurs, possession changes, but what is NOT awarded?",
            ja: "オフェンスファウル発生時、攻撃権は移りますが、与えられないものは？"
        },
        options: {
            ko: ["선수 개인 파울 개수", "팀 파울 개수", "자유투 (보너스 상황이라도)", "상대방 드로인"],
            en: ["Personal Foul count", "Team Foul count", "Free Throws (even in bonus)", "Opponent throw-in"],
            ja: ["個人のファウル数", "チームファウル数", "フリースロー (ボーナス状況でも)", "相手のスローイン"]
        },
        answer: 2,
        explanation: {
            ko: "공격자 파울(컨트롤 파울)은 팀 파울이 초과된 상황(보너스)이라도 상대에게 자유투를 주지 않습니다. 공격권만 넘어갑니다.",
            en: "An offensive foul never results in free throws, even if the team is in the penalty situation. Only possession changes.",
            ja: "オフェンスファウル（コントロールファウル）はチームファウルが超過した状況（ボーナス）でも相手にフリースローを与えません。攻撃権のみ移ります。"
        }
    }
];
