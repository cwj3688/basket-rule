export type RuleCategory = 'Game Time' | 'Scoring' | 'Penalty' | 'Eligibility' | 'Equipment' | 'Misc';
export type RegionCode = 'KR' | 'US' | 'PH';

export interface LocalRule {
    id: string;
    category: RuleCategory;
    title: {
        ko: string;
        en: string;
        ja?: string;
        zh?: string;
    };
    description: {
        ko: string;
        en: string;
        ja?: string;
        zh?: string;
    };
    isOfficial: boolean;
    commonVariation?: {
        ko: string;
        en: string;
        ja?: string;
        zh?: string;
    };
}

export const regionRules: Record<RegionCode, LocalRule[]> = {
    KR: [
        {
            id: 'game-time-running',
            category: 'Game Time',
            title: { ko: "경기 시간 운영", en: "Game Time Management", ja: "試合時間の運営" },
            description: { ko: "공식: 10분 4쿼터 (데드 타임)", en: "Official: 10 min x 4 quarters (Dead time)", ja: "公式：10分4クォーター（デッドタイム）" },
            isOfficial: true,
            commonVariation: {
                ko: "동호회: 7분 4쿼터 또는 10분 전/후반 (종료 2분 전만 데드 타임)",
                en: "Amateur: 7 min x 4 or 10 min halves (Dead time only last 2 mins)",
                ja: "同好会：7分4クォーター または 10分前後半（終了2分前のみデッドタイム）"
            }
        },
        {
            id: 'seven-min',
            category: 'Game Time',
            title: { ko: "경기 시간 (7분)", en: "Quarter Duration", ja: "クォーター時間（7分）" },
            description: { ko: "공식: 10분", en: "Official: 10 mins", ja: "公式：10分" },
            isOfficial: false,
            commonVariation: {
                ko: "쿼터당 7분 경기 (일반 대회 기준)",
                en: "7 mins per quarter",
                ja: "クォーターあたり7分（一般大会基準）"
            }
        },
        {
            id: 'overtime',
            category: 'Game Time',
            title: { ko: "연장전 (골든 골)", en: "Overtime (Golden Goal)", ja: "延長戦（ゴールデンゴール）" },
            description: { ko: "공식: 연장 5분", en: "Official: 5 mins overtime", ja: "公式：延長5分" },
            isOfficial: false,
            commonVariation: {
                ko: "연장전: 먼저 득점하는 팀 승리 (골든 골)",
                en: "Overtime: Golden Goal (First to score wins)",
                ja: "延長戦：先に得点したチームの勝利（ゴールデンゴール）"
            }
        },
        {
            id: 'plus-one',
            category: 'Eligibility',
            title: { ko: "가점 제도 (+1점)", en: "+1 Point Rule", ja: "+1点ルール" },
            description: { ko: "공식: 모든 선수 동일 점수 적용", en: "Official: Same points for all players", ja: "公式：全選手同一得点適用" },
            isOfficial: false,
            commonVariation: {
                ko: "대상: 여성, 중학생 이하, 40/50대 이상. 득점 시 +1점 (2점→3점, 3점→4점)",
                en: "Target: Women, U15, Over 40/50. +1 point per goal (2pt→3pt, 3pt→4pt)",
                ja: "対象：女性、中学生以下、40/50代以上。得点時+1点（2点→3点、3点→4点）"
            }
        },
        {
            id: 'forfeit',
            category: 'Game Time',
            title: { ko: "몰수패 규정", en: "Forfeit Rule", ja: "没収試合規定" },
            description: { ko: "경기 시작 시간 준수", en: "Adherence to game start time", ja: "試合開始時間の遵守" },
            isOfficial: true,
            commonVariation: {
                ko: "경기 시작 10~15분 경과 시 미도착 팀 몰수패 (0:20)",
                en: "Forfeit (0:20) if team fails to arrive 10-15 mins after scheduled start",
                ja: "試合開始10~15分経過時、未到着チームは没収試合 (0:20)"
            }
        },
        {
            id: 'elite-limit',
            category: 'Eligibility',
            title: { ko: "선수 출신 제한", en: "Elite Player Limit", ja: "選手出身（エリート）制限" },
            description: { ko: "공식: 제한 없음", en: "Official: No limits", ja: "公式：制限なし" },
            isOfficial: false,
            commonVariation: {
                ko: "고교 이상 등록 선수: 쿼터당 1~2명으로 출전 제한 (K-디비전 레벨에 따라 상이)",
                en: "Registered Elite Players: Limited to 1-2 per quarter depending on league level",
                ja: "高校以上登録選手：クォーターあたり1〜2名に出場制限（K-Divisionレベルにより異なる）"
            }
        },
        {
            id: 'roster-limit',
            category: 'Eligibility',
            title: { ko: "로스터 제한", en: "Roster Limit", ja: "ロスター制限" },
            description: { ko: "공식: 제한 없음", en: "Official: No limits", ja: "公式：制限なし" },
            isOfficial: false,
            commonVariation: {
                ko: "와일드카드(비등록 선수) 출전 불가",
                en: "No Wildcards (Unregistered players)",
                ja: "ワイルドカード（未登録選手）出場不可"
            }
        },
    ],
    US: [
        {
            id: 'scoring-1s-2s',
            category: 'Scoring',
            title: { ko: "1점/2점 득점제", en: "1s and 2s Scoring", ja: "1点/2点制" },
            description: { ko: "공식: 2점/3점", en: "Official: 2 points / 3 points", ja: "公式：2点/3点" },
            isOfficial: false,
            commonVariation: {
                ko: "스트릿볼: 야투 1점, 장거리 2점. (보통 11점~21점 내기)",
                en: "Streetball: Field goals = 1pt, Long range = 2pts. Games often to 11, 15, or 21.",
                ja: "ストリートボール：フィールドゴール1点、長距離2点。（通常11点〜21点先取）"
            }
        },
        {
            id: 'check-ball',
            category: 'Misc',
            title: { ko: "체크 볼", en: "Check Ball", ja: "チェックボール" },
            description: { ko: "공식: 심판이 볼 터치 후 인바운드", en: "Official: Ref hands ball for inbound", ja: "公式：審判がボールタッチ後インバウンド" },
            isOfficial: false,
            commonVariation: {
                ko: "3점 라인 탑에서 수비수에게 공을 건네받아 경기 시작 (죽은 볼 상황 후)",
                en: "Offense passes ball to defender at top of key to start play after dead ball.",
                ja: "3ポイントラインのトップで守備側からボールを受け取り試合再開（デッドボール後）"
            }
        },
        {
            id: 'call-own-fouls',
            category: 'Penalty',
            title: { ko: "셀프 콜 (Call Your Own)", en: "Call Your Own Fouls", ja: "セルフジャッジ" },
            description: { ko: "공식: 심판이 판정", en: "Official: Referee calls fouls", ja: "公式：審判が判定" },
            isOfficial: false,
            commonVariation: {
                ko: "공격자가 직접 파울을 선언. 수비자가 선언하는 경우는 드묾.",
                en: "Offense calls their own fouls. Defense rarely makes calls.",
                ja: "攻撃側が自らファウルを宣言。守備側が宣言することは稀。"
            }
        },
        {
            id: 'win-by-two',
            category: 'Scoring',
            title: { ko: "2점차 승리 (Win by 2)", en: "Win by 2", ja: "2点差勝利" },
            description: { ko: "공식: 점수 높은 팀 승리", en: "Official: Higher score wins at buzzer", ja: "公式：高得点チームの勝利" },
            isOfficial: false,
            commonVariation: {
                ko: "목표 점수에 도달하더라도 반드시 2점 차 이상이어야 경기 종료.",
                en: "Game continues until one team leads by at least 2 points.",
                ja: "目標点数に到達しても、必ず2点差以上でなければ試合終了とならない。"
            }
        }
    ],
    PH: [
        {
            id: 'pustahan',
            category: 'Misc',
            title: { ko: "내기 농구 (Dayo/Pustahan)", en: "Betting Game (Pustahan)", ja: "賭けバスケ (Pustahan)" },
            description: { ko: "공식: 베팅 금지", en: "Official: No betting", ja: "公式：賭け禁止" },
            isOfficial: false,
            commonVariation: {
                ko: "동네 리그에서 소액 내기가 매우 보편적이며, 용병(Dayo)을 고용하기도 함.",
                en: "Betting is common in local leagues. Teams often hire 'Dayo' (mercenaries).",
                ja: "地域のリーグで少額の賭けが一般的で、傭兵（Dayo）を雇うこともある。"
            }
        },
        {
            id: 'physicality',
            category: 'Penalty',
            title: { ko: "거친 몸싸움 (Larong Kalye)", en: "Physicality (Larong Kalye)", ja: "フィジカルプレー (Larong Kalye)" },
            description: { ko: "공식: 실린더 원칙 준수", en: "Official: Cylinder principle", ja: "公式：シリンダー原則遵守" },
            isOfficial: false,
            commonVariation: {
                ko: "상당히 거친 몸싸움이 용인됨. '피가 안 나면 파울 아님'이라는 농담이 있을 정도.",
                en: "High tolerance for contact. Sometimes joked as 'No Blood, No Foul'.",
                ja: "かなり激しい体のぶつかり合いが容認される。「血が出なければファウルではない」という冗談があるほど。"
            }
        },
        {
            id: 'tsinelas',
            category: 'Equipment',
            title: { ko: "맨발/슬리퍼 농구", en: "Barefoot/Slippers", ja: "裸足/スリッパバスケ" },
            description: { ko: "공식: 농구화 착용", en: "Official: Basketball Shoes", ja: "公式：バスケットシューズ着用" },
            isOfficial: false,
            commonVariation: {
                ko: "길거리 농구에서는 슬리퍼나 맨발로 경기하는 경우가 흔함.",
                en: "Playing in slippers (tsinelas) or barefoot is common in street courts.",
                ja: "ストリートバスケではスリッパや裸足でプレーする場合が一般的。"
            }
        }
    ]
};
