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
        answer: 1, // 8초
        explanation: {
            ko: "백코트 바이얼레이션 기준은 8초입니다. (FIBA/KBA/NBA 공통)",
            en: "The backcourt violation limit is 8 seconds (Common to FIBA/KBA/NBA).",
            ja: "バックコートバイオレーションの基準は8秒です。(FIBA/KBA/NBA共通)"
        }
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
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
    }
];
