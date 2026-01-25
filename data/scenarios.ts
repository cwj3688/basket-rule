export interface Scenario {
    id: string;
    title: Record<string, string>;
    description: Record<string, string>;
    videoId: string;
    verdict: "Travel" | "Foul" | "Legal" | "Violation";
    verdictLabel: Record<string, string>;
    explanation: Record<string, string>;
    difficulty: "Easy" | "Medium" | "Hard";
}

export const scenarios: Scenario[] = [
    {
        id: "s1",
        title: {
            ko: "제로 스텝 vs 트래블링",
            en: "Gather Step vs Traveling",
            ja: "ギャザーステップ vs トラベリング",
        },
        description: {
            ko: "공을 완전히 소유한 순간 딛고 있는 발은 '0번 발(Gather Step)'이 됩니다.",
            en: "The foot causing contact with the floor when the player gathers the ball is the zero step.",
            ja: "ボールを完全にコントロールした瞬間に接地している足は「0歩目（ギャザーステップ）」となります。",
        },
        videoId: "KZu5iE7yrPI",
        verdict: "Legal",
        verdictLabel: {
            ko: "정상 플레이 (Legal)",
            en: "Legal Play",
            ja: "正当なプレイ (Legal)",
        },
        explanation: {
            ko: "0번 발은 피벗 풋의 기준이 되지 않으며, 이후 두 걸음을 더 걷는 것은 현대 농구 규정상 정당한 스텝입니다.",
            en: "The zero step is not the pivot foot. Taking two more steps after the gather step is legal in modern basketball rules.",
            ja: "0歩目はピボットフットの基準にはならず、その後2歩歩くことは現代のバスケットボールルールでは正当なステップです。",
        },
        difficulty: "Medium",
    },
    {
        id: "s2",
        title: {
            ko: "실린더 룰과 수직성의 원칙",
            en: "Cylinder Rule & Verticality",
            ja: "シリンダーの原則と垂直性",
        },
        description: {
            ko: "수비자는 자신의 '실린더' 안에서 위로 점프할 권리가 있습니다.",
            en: "A defender has the right to jump vertically within their own 'cylinder'.",
            ja: "ディフェンダーは自身の「シリンダー」内で垂直にジャンプする権利があります。",
        },
        videoId: "9o3d6Gx_vws",
        verdict: "Legal",
        verdictLabel: {
            ko: "정상 수비 (Legal)",
            en: "Legal Defense",
            ja: "正当な守備 (Legal)",
        },
        explanation: {
            ko: "수직으로 뜬 수비자와 부딪히는 것은 파울이 아닙니다. 단, 팔이 공격자 쪽으로 기울어지면 수비 파울입니다.",
            en: "Contact against a vertically jumping defender is not a foul. However, tilting arms forward constitutes a defensive foul.",
            ja: "垂直に跳んだディフェンダーと接触してもファウルではありません。ただし、腕が傾くとディフェンスファウルになります。",
        },
        difficulty: "Easy",
    },
    {
        id: "s3",
        title: {
            ko: "차징 vs 블로킹",
            en: "Charging vs Blocking",
            ja: "チャージング vs ブロッキング",
        },
        description: {
            ko: "수비자가 미리 자리를 잡았는지, 아니면 이동 중이었는지가 핵심입니다.",
            en: "The key is whether the defender established position beforehand or was moving during contact.",
            ja: "ディフェンダーが事前に位置を確保していたか、移動中だったかが重要です。",
        },
        videoId: "WPBdbYR5Bnk",
        verdict: "Foul",
        verdictLabel: {
            ko: "공격자 파울 (Charging)",
            en: "Offensive Foul (Charging)",
            ja: "オフェンスファウル (Charging)",
        },
        explanation: {
            ko: "수비자가 공격자의 경로에 미리 합법적인 수비 위치(LGP)를 확보하고 정지해 있었다면 차징입니다.",
            en: "It is an offensive foul (Charging) if the defender had established a Legal Guarding Position (LGP) in the attacker's path and was stationary.",
            ja: "ディフェンダーがオフェンスの進路に正当な守備位置（LGP）を確保し静止していた場合は、チャージングです。",
        },
        difficulty: "Hard",
    },
    {
        id: "s4",
        title: {
            ko: "무빙 스크린",
            en: "Illegal Screen (Moving)",
            ja: "ムービングスクリーン",
        },
        description: {
            ko: "스크리너는 접촉 시점에 양발이 지면에 고정되어야 합니다.",
            en: "The screener must have both feet fixed on the floor at the moment of contact.",
            ja: "スクリーナーは接触の瞬間に両足を地面に固定していなければなりません。",
        },
        videoId: "heTjjSsMuAY",
        verdict: "Foul",
        verdictLabel: {
            ko: "공격자 파울 (Illegal Screen)",
            en: "Offensive Foul (Illegal Screen)",
            ja: "オフェンスファウル (Illegal Screen)",
        },
        explanation: {
            ko: "수비자의 움직임에 맞춰 다리를 벌리거나 몸을 움직여 진로를 방해하면 공격자 파울입니다.",
            en: "It is an offensive foul if the screener moves their body or spreads legs to impede the defender.",
            ja: "ディフェンダーの動きに合わせて足を広げたり体を動かして進路を妨害するとオフェンスファウルです。",
        },
        difficulty: "Medium",
    },
    {
        id: "s5",
        title: {
            ko: "핸드 파울 (Hand/Ball)",
            en: "Hand/Ball Principle",
            ja: "ハンド・ボールの原則 (Hand/Ball)",
        },
        description: {
            ko: "블록슛 과정에서 공을 든 손등을 쳤습니다. 파울일까요?",
            en: "The defender hit the back of the hand while blocking. Is this a foul?",
            ja: "ブロックショットの際にボールを持っている手の甲を叩きました。ファウルでしょうか？",
        },
        videoId: "XX1UIaMVMkU",
        verdict: "Legal",
        verdictLabel: {
            ko: "정상 (Part of Ball)",
            en: "Legal (Part of Ball)",
            ja: "正当 (Part of Ball)",
        },
        explanation: {
            ko: "공격자가 공과 접촉하고 있는 손등 부분은 규정상 공의 일부로 간주합니다. 따라서 블록 시 손등을 치는 것은 파울이 아닙니다.",
            en: "The part of the hand in contact with the ball is considered part of the ball. Therefore, hitting the back of the hand during a block is not a foul.",
            ja: "ボールに触れている手の甲の部分は、ルール上ボールの一部とみなされます。したがって、ブロックの際に手の甲を叩いてもファウルではありません。",
        },
        difficulty: "Hard",
    },
    {
        id: "s6",
        title: {
            ko: "핸드 체크 (Hand Check)",
            en: "Hand Checking",
            ja: "ハンドチェッキング",
        },
        description: {
            ko: "수비자가 손을 뻗어 드리블러의 돌파를 저지하려 합니다.",
            en: "The defender extends a hand to stop the dribbler's drive.",
            ja: "ディフェンダーが手を伸ばしてドリブラーの突破を阻止しようとしています。",
        },
        videoId: "01NsieAjzdU",
        verdict: "Foul",
        verdictLabel: {
            ko: "수비 파울 (Hand Check)",
            en: "Defensive Foul (Hand Check)",
            ja: "ディフェンスファウル (Hand Check)",
        },
        explanation: {
            ko: "수비자가 손을 사용하여 공격자의 이동 경로를 방해하거나 속도를 늦추는 행위는 핸드 체크 파울로 선언됩니다.",
            en: "Using hands to impede the attacker's path or slow them down is declared a Hand Checking foul.",
            ja: "ディフェンダーが手を使ってオフェンスの進行方向を妨害したり、速度を遅らせたりする行為はハンドチェッキングファウルと判定されます。",
        },
        difficulty: "Medium",
    },
];
