export interface LocalizedContent {
    ko: string;
    en: string;
}

export interface ComparisonItem {
    feature: LocalizedContent;
    fiba: LocalizedContent;
    nba: LocalizedContent;
}

export const comparisons: ComparisonItem[] = [
    {
        feature: { ko: '경기 시간', en: 'Game Time' },
        fiba: { ko: '10분 x 4쿼터', en: '10 minutes x 4 quarters' },
        nba: { ko: '12분 x 4쿼터', en: '12 minutes x 4 quarters' }
    },
    {
        feature: { ko: '파울 제한', en: 'Foul Limit' },
        fiba: { ko: '5개 (개인 + 테크니컬)', en: '5 fouls (Personal + Technical)' },
        nba: { ko: '6개 (개인) / 테크니컬 별도 (2개)', en: '6 fouls (Personal) / 2 Technicals' }
    },
    {
        feature: { ko: '수비자 3초 룰', en: 'Defensive 3 Seconds' },
        fiba: { ko: '없음', en: 'None' },
        nba: { ko: '있음 (테크니컬 파울)', en: 'Yes (Technical Foul)' }
    },
    {
        feature: { ko: '골텐딩 / 인터피어런스', en: 'Goaltending / Interference' },
        fiba: { ko: '림에 공이 닿은 후에는 터치 가능', en: 'Ball can be touched once it hits the rim' },
        nba: { ko: '가상의 실린더 룰 적용 (림 위 터치 불가)', en: 'Imaginary cylinder rule applies (No touch above rim)' }
    },
    {
        feature: { ko: '타임아웃', en: 'Timeouts' },
        fiba: { ko: '전반 2회, 후반 3회', en: '2 in 1st half, 3 in 2nd half' },
        nba: { ko: '경기당 7회 (복잡한 규정)', en: '7 per game (Complex structure)' }
    },
    {
        feature: { ko: '코트 규격', en: 'Court Size' },
        fiba: { ko: '28m x 15m', en: '28m x 15m' },
        nba: { ko: '28.65m x 15.24m (94ft x 50ft)', en: '28.65m x 15.24m (94ft x 50ft)' }
    },
    {
        feature: { ko: '3점슛 거리', en: '3-Point Line' },
        fiba: { ko: '6.75m (코너 6.60m)', en: '6.75m (6.60m corner)' },
        nba: { ko: '7.24m (코너 6.70m)', en: '7.24m (6.70m corner)' }
    }
];
