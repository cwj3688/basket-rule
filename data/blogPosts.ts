import { Language } from "@/lib/i18n/dictionaries";

export interface BlogPost {
    slug: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
    date: string;
    readTime: Record<Language, string>; // e.g. "3 min" vs "3분"
    category: Record<Language, string>;
    isNew?: boolean;
    icon?: string; // Emoji
    colorClass?: string; // Tailwind class component for bg gradient
}

export const blogPosts: BlogPost[] = [
    {
        slug: "traveling-guide",
        title: {
            ko: "농구 트래블링 완전 정복",
            en: "Mastering Basketball Traveling Rules",
            ja: "バスケのトラベリング完全攻略"
        },
        description: {
            ko: "피벗 풋과 스텝의 이해. 드리블 시작 vs 슛/패스 시의 발 떨어짐 기준.",
            en: "Understanding pivot foot and steps. Rules for starting a dribble vs shooting/passing.",
            ja: "ピボットフットとステップの理解。ドリブル開始 vs シュート/パス時の足の基準。"
        },
        date: "2026-01-29",
        readTime: { ko: "3분", en: "3 min", ja: "3分" },
        category: { ko: "기초 가이드", en: "Basic Guide", ja: "基本ガイド" },
        isNew: true,
        icon: "👣",
        colorClass: "from-blue-100 to-cyan-100"
    },
    {
        slug: "3-second-rule",
        title: {
            ko: "3초 룰이 뭔가요? 페인트존 생존기",
            en: "What is the 3-Second Rule?",
            ja: "3秒ルールとは？ペイントエリアでの生存戦略"
        },
        description: {
            ko: "공격자 3초 룰과 수비자 3초 룰(NBA)의 차이, 카운트 리셋 요령.",
            en: "Differences between Offensive and Defensive (NBA) 3-second rules.",
            ja: "オフェンス3秒ルールとディフェンス3秒ルール(NBA)の違い。"
        },
        date: "2026-01-29",
        readTime: { ko: "3분", en: "3 min", ja: "3分" },
        category: { ko: "규칙 해설", en: "Rule Explain", ja: "ルール解説" },
        isNew: true,
        icon: "⏱️",
        colorClass: "from-green-100 to-emerald-100"
    },
    {
        slug: "foul-types",
        title: {
            ko: "농구 파울의 종류 총정리",
            en: "Types of Basketball Fouls",
            ja: "バスケットボールのファウル種類まとめ"
        },
        description: {
            ko: "퍼스널 파울, U-파울, 테크니컬 파울의 차이점과 각각의 페널티.",
            en: "Personal, Unsportsmanlike, and Technical fouls differences and penalties.",
            ja: "パーソナル、アンスポーツマンライク、テクニカルファウルの違いとペナルティ。"
        },
        date: "2026-01-29",
        readTime: { ko: "4분", en: "4 min", ja: "4分" },
        category: { ko: "규칙 해설", en: "Rule Explain", ja: "ルール解説" },
        isNew: true,
        icon: "🛑",
        colorClass: "from-red-100 to-rose-100"
    },
    {
        slug: "blocking-vs-charging",
        title: {
            ko: "블로킹 vs 오펜스 파울 (차징)",
            en: "Blocking vs Charging Fouls",
            ja: "ブロッキング vs チャージング"
        },
        description: {
            ko: "정당한 수비 위치(LGP)와 노차징 구역. 충돌 시 파울의 기준은?",
            en: "Legal Guarding Position (LGP) and No-Charge Zone. Collision criteria.",
            ja: "正当な守備位置(LGP)とノーチャージエリア。衝突時のファウル基準は？"
        },
        date: "2026-01-29",
        readTime: { ko: "5분", en: "5 min", ja: "5分" },
        category: { ko: "심화 가이드", en: "Advanced Guide", ja: "深化ガイド" },
        isNew: true,
        icon: "💥",
        colorClass: "from-purple-100 to-violet-100"
    },
    {
        slug: "2026-rule-trends",
        title: {
            ko: "2026년 농구 규칙 트렌드",
            en: "2026 Basketball Rule Trends",
            ja: "2026年バスケットボールルールのトレンド"
        },
        description: {
            ko: "개더 스텝(제로 스텝) 정착, U-파울 기준 강화, 플라핑 경고 등 최신 변화 정리.",
            en: "Gather step (zero step) adoption, stricter U-foul criteria, flopping warnings.",
            ja: "ギャザーステップ（ゼロステップ）の定着、Uファウル基準の強化など。"
        },
        date: "2026-01-29",
        readTime: { ko: "4분", en: "4 min", ja: "4分" },
        category: { ko: "트렌드", en: "Trends", ja: "トレンド" },
        icon: "📈",
        colorClass: "from-orange-100 to-red-100"
    },
    {
        slug: "video-review-guide",
        title: {
            ko: "수비자가 점프했는데 파울? 수직성의 원칙",
            en: "Cyliner Rule & Verticality",
            ja: "シリンダールールと垂直性の原則"
        },
        description: {
            ko: "\"난 그냥 제자리에서 떴는데?\" 억울한 파울을 피하는 방법. 실린더 룰 이해하기.",
            en: "How to avoid unfair fouls. Understanding the cylinder rule.",
            ja: "「ただその場で飛んだだけなのに？」悔しいファウルを避ける方法。"
        },
        date: "2026-01-29",
        readTime: { ko: "3분", en: "3 min", ja: "3分" },
        category: { ko: "판정 가이드", en: "Judging Guide", ja: "判定ガイド" },
        icon: "🏀",
        colorClass: "from-blue-100 to-indigo-100"
    }
];
