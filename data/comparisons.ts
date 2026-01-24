export interface LocalizedContent {
    ko: string;
    en: string;
    ja: string;
}

export interface ComparisonItem {
    feature: LocalizedContent;
    fiba: LocalizedContent;
    nba: LocalizedContent;
}

export const comparisons: ComparisonItem[] = [
    {
        feature: { ko: '경기 시간', en: 'Game Time', ja: '試合時間' },
        fiba: { ko: '10분 x 4쿼터', en: '10 minutes x 4 quarters', ja: '10分 x 4クォーター' },
        nba: { ko: '12분 x 4쿼터', en: '12 minutes x 4 quarters', ja: '12分 x 4クォーター' }
    },
    {
        feature: { ko: '파울 제한', en: 'Foul Limit', ja: 'ファウル制限' },
        fiba: { ko: '5개 (개인 + 테크니컬)', en: '5 fouls (Personal + Technical)', ja: '5回 (個人 + テクニカル)' },
        nba: { ko: '6개 (개인) / 테크니컬 별도 (2개)', en: '6 fouls (Personal) / 2 Technicals', ja: '6回 (個人) / テクニカル別途 (2回)' }
    },
    {
        feature: { ko: '수비자 3초 룰', en: 'Defensive 3 Seconds', ja: 'ディフェンス3秒ルール' },
        fiba: { ko: '없음', en: 'None', ja: 'なし' },
        nba: { ko: '있음 (테크니컬 파울)', en: 'Yes (Technical Foul)', ja: 'あり (テクニカルファウル)' }
    },
    {
        feature: { ko: '골텐딩 / 인터피어런스', en: 'Goaltending / Interference', ja: 'ゴールテンディング / インターフェアレンス' },
        fiba: { ko: '림에 공이 닿은 후에는 터치 가능', en: 'Ball can be touched once it hits the rim', ja: 'ボールがリングに当たった後はタッチ可能' },
        nba: { ko: '가상의 실린더 룰 적용 (림 위 터치 불가)', en: 'Imaginary cylinder rule applies (No touch above rim)', ja: '仮想シリンダー・ルール適用 (リング上のタッチ不可)' }
    },
    {
        feature: { ko: '타임아웃', en: 'Timeouts', ja: 'タイムアウト' },
        fiba: { ko: '전반 2회, 후반 3회', en: '2 in 1st half, 3 in 2nd half', ja: '前半2回、後半3回' },
        nba: { ko: '경기당 7회 (복잡한 규정)', en: '7 per game (Complex structure)', ja: '1試合7回 (複雑な規定)' }
    },
    {
        feature: { ko: '코트 규격', en: 'Court Size', ja: 'コート規格' },
        fiba: { ko: '28m x 15m', en: '28m x 15m', ja: '28m x 15m' },
        nba: { ko: '28.65m x 15.24m (94ft x 50ft)', en: '28.65m x 15.24m (94ft x 50ft)', ja: '28.65m x 15.24m (94ft x 50ft)' }
    },
    {
        feature: { ko: '3점슛 거리', en: '3-Point Line', ja: '3ポイントライン' },
        fiba: { ko: '6.75m (코너 6.60m)', en: '6.75m (6.60m corner)', ja: '6.75m (コーナー 6.60m)' },
        nba: { ko: '7.24m (코너 6.70m)', en: '7.24m (6.70m corner)', ja: '7.24m (コーナー 6.70m)' }
    }
];
