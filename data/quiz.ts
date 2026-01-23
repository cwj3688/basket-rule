export type LocalizedContent = {
    ko: string;
    en: string;
};

export interface QuizQuestion {
    id: number;
    question: LocalizedContent;
    options: {
        ko: string[];
        en: string[];
    };
    answer: number; // index of correct answer
    explanation: LocalizedContent;
}

export const questions: QuizQuestion[] = [
    {
        id: 1,
        question: {
            ko: "공격 팀이 프론트 코트로 넘어가는 데 주어진 시간은?",
            en: "What is the time limit for the offensive team to cross into the frontcourt?"
        },
        options: {
            ko: ["5초", "8초", "10초", "24초"],
            en: ["5 Seconds", "8 Seconds", "10 Seconds", "24 Seconds"]
        },
        answer: 1, // 8초
        explanation: {
            ko: "백코트 바이얼레이션 기준은 8초입니다. (FIBA/KBA/NBA 공통)",
            en: "The backcourt violation limit is 8 seconds (Common to FIBA/KBA/NBA)."
        }
    },
    {
        id: 2,
        question: {
            ko: "U-파울(언스포츠맨라이크 파울)의 벌칙으로 올바른 것은?",
            en: "What is the correct penalty for a U-Foul (Unsportsmanlike Foul)?"
        },
        options: {
            ko: ["자유투 1개 + 공격권", "자유투 2개", "자유투 2개 + 공격권", "퇴장"],
            en: ["1 Free Throw + Possession", "2 Free Throws", "2 Free Throws + Possession", "Ejection"]
        },
        answer: 2,
        explanation: {
            ko: "U-파울 시 자유투 2개와 공격권(사이드라인)이 주어집니다.",
            en: "A U-Foul results in 2 free throws plus possession (throw-in from the sideline)."
        }
    },
    {
        id: 3,
        question: {
            ko: "공을 잡은 상태(Hold)에서 '개더 스텝' 이후 몇 발까지 허용되나요?",
            en: "How many steps are allowed after the 'gather step' while holding the ball?"
        },
        options: {
            ko: ["0발", "1발", "2발", "3발"],
            en: ["0 steps", "1 step", "2 steps", "3 steps"]
        },
        answer: 2,
        explanation: {
            ko: "2017년 개정 이후 '개더 스텝(0스텝)' + 2스텝까지 허용됩니다.",
            en: "Since the 2017 revision, 'gather step (0 step)' + 2 steps are allowed."
        }
    },
    {
        id: 4,
        question: {
            ko: "수비자 3초 룰이 존재하는 리그는?",
            en: "Which league has the Defensive 3 Seconds rule?"
        },
        options: {
            ko: ["FIBA (국제농구)", "KBA (한국생활체육)", "NBA (미국프로농구)", "모두"],
            en: ["FIBA", "KBA", "NBA", "All of the above"]
        },
        answer: 2,
        explanation: {
            ko: "수비자 3초 룰은 NBA에만 존재합니다. FIBA/KBA는 지역방어가 자유롭습니다.",
            en: "Defensive 3 Seconds exists only in the NBA. FIBA/KBA allow zone defense freely."
        }
    }
];
