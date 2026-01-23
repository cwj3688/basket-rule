export interface LocalizedContent {
    ko: string;
    en: string;
}

export type SignalCategory =
    | 'Game Clock'
    | 'Scoring'
    | 'Substitution and Time-out'
    | 'Informative'
    | 'Violations'
    | 'Number of Players'
    | 'Fouls'
    | 'Special Fouls'
    | 'Free-Throw Penalty Administration'
    | 'Free-Throw Administration – Lead Official'
    | 'Free-Throw Administration – Trail / Centre Official';

export interface Signal {
    id: string;
    name: LocalizedContent;
    description: LocalizedContent;
    category: SignalCategory;
    imageUrl?: string;
    gifUrl?: string;
}

export const signals: Signal[] = [
    // Game Clock
    {
        id: 'stop-the-clock',
        name: { ko: '시계 정지', en: 'Stop The Clock' },
        category: 'Game Clock',
        description: { ko: '손바닥을 폄', en: 'Open palm' },
        imageUrl: '/images/signals/game-clock/stop-the-clock.jpg',
    },
    {
        id: 'stop-the-clock-foul',
        name: { ko: '파울로 인한 시계 정지', en: 'Stop Clock for Foul' },
        category: 'Game Clock',
        description: { ko: '주먹을 쥠', en: 'One clenched fist' },
        imageUrl: '/images/signals/game-clock/stop-the-clock-foul.jpg',
    },
    {
        id: 'start-clock',
        name: { ko: '시계 시작', en: 'Start Clock' },
        category: 'Game Clock',
        description: { ko: '손을 내리침', en: 'Chop with hand' },
        imageUrl: '/images/signals/game-clock/start-clock.jpg',
    },
    // Scoring
    {
        id: '1-point',
        name: { ko: '1점', en: '1 Point' },
        category: 'Scoring',
        description: { ko: '검지 하나, 손목 꺾기', en: "1 finger, 'flag' from wrist" },
        imageUrl: '/images/signals/scoring/1-point.jpg',
    },
    {
        id: '2-points',
        name: { ko: '2점', en: '2 Points' },
        category: 'Scoring',
        description: { ko: '검지/중지, 손목 꺾기', en: "2 fingers, 'flag' from wrist" },
        imageUrl: '/images/signals/scoring/2-points.jpg',
    },
    {
        id: '3-points-attempt',
        name: { ko: '3점 슛 시도', en: '3 Points Attempt' },
        category: 'Scoring',
        description: { ko: '세 손가락을 폄', en: '3 fingers extended' },
        imageUrl: '/images/signals/scoring/3-points-attempt.jpg',
    },
    {
        id: '3-points-successful',
        name: { ko: '3점 슛 성공', en: '3 Points Successful' },
        category: 'Scoring',
        description: { ko: '양손 세 손가락을 폄', en: '3 fingers extended on both hands' },
        imageUrl: '/images/signals/scoring/3-points-successful.jpg',
    },
    // Substitution and Time-out
    {
        id: 'substitution',
        name: { ko: '선수 교체', en: 'Substitution' },
        category: 'Substitution and Time-out',
        description: { ko: '팔을 X자로 교차', en: 'Cross forearms' },
        imageUrl: '/images/signals/substitution-and-time-out/substitution.jpg',
    },
    {
        id: 'beckoning-in',
        name: { ko: '선수 입장 허락', en: 'Beckoning-in' },
        category: 'Substitution and Time-out',
        description: { ko: '손바닥을 펴고 몸 쪽으로 손짓', en: 'Open palm, wave towards the body' },
        imageUrl: '/images/signals/substitution-and-time-out/beckoning-in.jpg',
    },
    {
        id: 'charged-timeout',
        name: { ko: '작전 타임', en: 'Charged Time-out' },
        category: 'Substitution and Time-out',
        description: { ko: '검지로 T자 형성', en: "Form 'T', show index finger" },
        imageUrl: '/images/signals/substitution-and-time-out/charged-timeout.jpg',
    },
    {
        id: 'media-timeout',
        name: { ko: '미디어 타임아웃', en: 'Media Time-out' },
        category: 'Substitution and Time-out',
        description: { ko: '주먹을 쥐고 팔을 벌림', en: 'Open arms with clenched fists' },
        imageUrl: '/images/signals/substitution-and-time-out/media-timeout.jpg',
    },
    // Informative
    {
        id: 'cancel-score',
        name: { ko: '득점 취소 / 플레이 취소', en: 'Cancel Score / Cancel Play' },
        category: 'Informative',
        description: { ko: '팔을 가위처럼 교차', en: "Scissor-like action with arms, once across chest" },
        imageUrl: '/images/signals/informative/cancel-score.jpg',
    },
    {
        id: 'visible-count',
        name: { ko: '카운트', en: 'Visible Count' },
        category: 'Informative',
        description: { ko: '손바닥을 움직이며 카운트', en: 'Counting while moving the palm' },
        imageUrl: '/images/signals/informative/visible-count.jpg',
    },
    {
        id: 'communication',
        name: { ko: '심판 간 대화', en: 'Communication' },
        category: 'Informative',
        description: { ko: '엄지 척', en: "Thumb up" },
        imageUrl: '/images/signals/informative/communication.jpg',
    },
    {
        id: 'shot-clock-reset',
        name: { ko: '샷 클락 리셋', en: 'Shot Clock Reset' },
        category: 'Informative',
        description: { ko: '검지를 펴고 손을 회전', en: 'Rotate hand, index finger extended' },
        imageUrl: '/images/signals/informative/shot-clock-reset.jpg',
    },
    {
        id: 'direction-of-play',
        name: { ko: '경기 진행 방향', en: 'Direction of Play / Out of Bounds' },
        category: 'Informative',
        description: { ko: '진행 방향을 가리킴', en: 'Point in direction of play, arm parallel to sidelines' },
        imageUrl: '/images/signals/informative/direction-of-play.jpg',
    },
    {
        id: 'held-ball',
        name: { ko: '헬드 볼 / 점프볼 상황', en: 'Held Ball / Jump Ball Situation' },
        category: 'Informative',
        description: { ko: '엄지를 들고, 이후 소유권 방향 지시', en: "Thumbs up, then point in direction of play using the alternating possession arrow" },
        imageUrl: '/images/signals/informative/held-ball.jpg',
    },
    // Violations
    {
        id: 'travelling',
        name: { ko: '트래블링', en: 'Travelling' },
        category: 'Violations',
        description: { ko: '주먹을 쥐고 회전', en: 'Rotate fists' },
        imageUrl: '/images/signals/violations/travelling.jpg',
    },
    {
        id: 'double-dribble',
        name: { ko: '더블 드리블', en: 'Illegal Dribble: Double Dribble' },
        category: 'Violations',
        description: { ko: '손바닥으로 두드리는 동작', en: 'Patting motion with palm' },
        imageUrl: '/images/signals/violations/double-dribble.jpg',
    },
    {
        id: 'carrying',
        name: { ko: '캐링 더 볼', en: 'Illegal Dribble: Carrying' },
        category: 'Violations',
        description: { ko: '손바닥을 반회전', en: 'Half rotation with palm' },
        imageUrl: '/images/signals/violations/carrying.jpg',
    },
    {
        id: '3-seconds',
        name: { ko: '3초 바이올레이션', en: '3 Seconds' },
        category: 'Violations',
        description: { ko: '팔을 펴고 세 손가락 표시', en: 'Arm extended, show 3 fingers' },
        imageUrl: '/images/signals/violations/3-seconds.jpg',
    },
    {
        id: '5-seconds',
        name: { ko: '5초 바이올레이션', en: '5 Seconds' },
        category: 'Violations',
        description: { ko: '다섯 손가락을 폄', en: 'Show 5 fingers' },
        imageUrl: '/images/signals/violations/5-seconds.jpg',
    },
    {
        id: '8-seconds',
        name: { ko: '8초 바이올레이션', en: '8 Seconds' },
        category: 'Violations',
        description: { ko: '여덟 손가락 표시', en: 'Show 8 fingers' },
        imageUrl: '/images/signals/violations/8-seconds.jpg',
    },
    {
        id: '24-seconds',
        name: { ko: '24초 바이올레이션', en: '24 Seconds' },
        category: 'Violations',
        description: { ko: '손가락으로 어깨 터치', en: 'Fingers touch shoulder' },
        imageUrl: '/images/signals/violations/24-seconds.jpg',
    },
    {
        id: 'ball-return',
        name: { ko: '하프라인 바이올레이션', en: 'Ball Returned to Backcourt' },
        category: 'Violations',
        description: { ko: '몸 앞에서 팔을 흔듬', en: 'Wave arm front of body' },
        imageUrl: '/images/signals/violations/ball-return.jpg',
    },
    {
        id: 'foot-ball',
        name: { ko: '킥 볼', en: 'Foot Ball' },
        category: 'Violations',
        description: { ko: '발을 가리킴', en: 'Point to the foot' },
        imageUrl: '/images/signals/violations/foot-ball.jpg',
    },
    // Number of Players - Reduced detail for brevity in translation, kept EN logic mainly
    // Just translating Names
    {
        id: 'number-00',
        name: { ko: '번호 00', en: 'Number 00' },
        category: 'Number of Players',
        description: { ko: '양손으로 0 표시', en: 'Both hands show 0' },
        imageUrl: '/images/signals/number-of-players/number-00.jpg',
    },
    {
        id: 'number-0',
        name: { ko: '번호 0', en: 'Number 0' },
        category: 'Number of Players',
        description: { ko: '오른손으로 0 표시', en: 'Right hand shows 0' },
        imageUrl: '/images/signals/number-of-players/number-00.jpg',
    },
    {
        id: 'number-1-5',
        name: { ko: '번호 1-5', en: 'Number 1-5' },
        category: 'Number of Players',
        description: { ko: '오른손으로 1~5 표시', en: 'Right hand shows number 1 to 5' },
        imageUrl: '/images/signals/number-of-players/number-1-5.jpg',
    },
    {
        id: 'number-6-10',
        name: { ko: '번호 6-10', en: 'Number 6-10' },
        category: 'Number of Players',
        description: { ko: '오른손 5, 왼손 1~5', en: 'Right hand shows number 5, left hand shows number 1 to 5' },
        imageUrl: '/images/signals/number-of-players/number-6-10.jpg',
    },
    {
        id: 'number-11-15',
        name: { ko: '번호 11-15', en: 'Number 11-15' },
        category: 'Number of Players',
        description: { ko: '오른손 주먹, 왼손 1~5', en: 'Right hand shows clenched fist, left hand shows number 1 to 5' },
        imageUrl: '/images/signals/number-of-players/number-11-15.jpg',
    },
    {
        id: 'number-16',
        name: { ko: '번호 16', en: 'Number 16' },
        category: 'Number of Players',
        description: { ko: '10자리 1(손등), 1자리 6', en: 'First reverse hand shows number 1 for the decade digit - then open hands show number 6 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-16.jpg',
    },
    {
        id: 'number-24',
        name: { ko: '번호 24', en: 'Number 24' },
        category: 'Number of Players',
        description: { ko: '10자리 2(손등), 1자리 4', en: 'First reverse hand shows number 2 for the decade digit - then open hand shows number 4 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-24.jpg',
    },
    {
        id: 'number-40',
        name: { ko: '번호 40', en: 'Number 40' },
        category: 'Number of Players',
        description: { ko: '10자리 4(손등), 1자리 0', en: 'First reverse hand shows number 4 for the decade digit - then open hand shows 0 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-40.jpg',
    },
    {
        id: 'number-62',
        name: { ko: '번호 62', en: 'Number 62' },
        category: 'Number of Players',
        description: { ko: '10자리 6(손등), 1자리 2', en: 'First reverse hands show number 6 for the decade digit - then open hand shows 2 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-62.jpg',
    },
    {
        id: 'number-78',
        name: { ko: '번호 78', en: 'Number 78' },
        category: 'Number of Players',
        description: { ko: '10자리 7(손등), 1자리 8', en: 'First reverse hands show number 7 for the decade digit - then open hands show number 8 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-78.jpg',
    },
    {
        id: 'number-99',
        name: { ko: '번호 99', en: 'Number 99' },
        category: 'Number of Players',
        description: { ko: '10자리 9(손등), 1자리 9', en: 'First reverse hands show number 9 for the decade digit - then open hands show number 9 for the units digit' },
        imageUrl: '/images/signals/number-of-players/number-99.jpg',
    },
    // Fouls
    {
        id: 'holding',
        name: { ko: '홀딩', en: 'Holding' },
        category: 'Fouls',
        description: { ko: '손목을 잡는 동작', en: 'Grasp wrist downward' },
        imageUrl: '/images/signals/fouls/holding.jpg',
    },
    {
        id: 'blocking',
        name: { ko: '블로킹', en: 'Blocking / Illegal Screen' },
        category: 'Fouls',
        description: { ko: '양손을 허리에', en: 'Both hands on hips' },
        imageUrl: '/images/signals/fouls/blocking.jpg',
    },
    {
        id: 'pushing',
        name: { ko: '푸싱', en: 'Pushing / Charging Without Ball' },
        category: 'Fouls',
        description: { ko: '미는 동작', en: 'Imitate push' },
        imageUrl: '/images/signals/fouls/pushing.jpg',
    },
    {
        id: 'handchecking',
        name: { ko: '핸드체킹', en: 'Handchecking' },
        category: 'Fouls',
        description: { ko: '손바닥을 잡고 앞으로', en: 'Grab palm and forward motion' },
        imageUrl: '/images/signals/fouls/handchecking.jpg',
    },
    {
        id: 'illegal-use-of-hands',
        name: { ko: '손을 부당하게 사용', en: 'Illegal Use of Hands' },
        category: 'Fouls',
        description: { ko: '손목을 침', en: 'Strike wrist' },
        imageUrl: '/images/signals/fouls/illegal-use-of-hands.jpg',
    },
    {
        id: 'charging-with-ball',
        name: { ko: '차징 (볼 소유)', en: 'Charging With Ball' },
        category: 'Fouls',
        description: { ko: '주먹으로 손바닥을 침', en: 'Clenched fist strike open palm' },
        imageUrl: '/images/signals/fouls/charging-with-ball.jpg',
    },
    {
        id: 'illegal-contact-hand',
        name: { ko: '손에 대한 부당한 접촉', en: 'Illegal Contact to the Hand' },
        category: 'Fouls',
        description: { ko: '손바닥을 팔뚝으로 침', en: 'Strike the palm towards the other forearm' },
        imageUrl: '/images/signals/fouls/illegal-contact-hand.jpg',
    },
    {
        id: 'excessive-swinging-elbow',
        name: { ko: '과도한 팔꿈치 휘두름', en: 'Excessive Swinging of Elbow' },
        category: 'Fouls',
        description: { ko: '팔꿈치를 뒤로 휘두름', en: 'Swing elbow backwards' },
        imageUrl: '/images/signals/fouls/excessive-swinging-elbow.jpg',
    },
    {
        id: 'hit-head',
        name: { ko: '머리 가격', en: 'Hit to the Head' },
        category: 'Fouls',
        description: { ko: '머리를 가격하는 동작', en: 'Imitate contact to the head' },
        imageUrl: '/images/signals/fouls/hit-head.jpg',
    },
    {
        id: 'foul-by-team-control',
        name: { ko: '공격자 파울 (팀 컨트롤)', en: 'Foul by Team in Control of the Ball' },
        category: 'Fouls',
        description: { ko: '위반 팀 바스켓 쪽으로 주먹', en: 'Point clenched fist towards basket of offending team' },
        imageUrl: '/images/signals/fouls/foul-by-team-control.jpg',
    },
    {
        id: 'foul-on-act-of-shooting',
        name: { ko: '슈팅 동작 중 파울', en: 'Foul on the Act of Shooting' },
        category: 'Fouls',
        description: { ko: '주먹을 쥐고 자유투 수 표시', en: 'One arm with clenched fist, followed by indication of the numbers of free throws' },
        imageUrl: '/images/signals/fouls/foul-on-act-of-shooting.jpg',
    },
    {
        id: 'foul-not-on-act-of-shooting',
        name: { ko: '슈팅 동작 아님', en: 'Foul Not on the Act of Shooting' },
        category: 'Fouls',
        description: { ko: '주먹을 쥐고 바닥을 가리킴', en: 'One arm with clenched fist, followed by pointing to the floor' },
        imageUrl: '/images/signals/fouls/foul-not-on-act-of-shooting.jpg',
    },
    // Special Fouls
    {
        id: 'double-foul',
        name: { ko: '더블 파울', en: 'Double Fouls' },
        category: 'Special Fouls',
        description: { ko: '양손 주먹을 흔듬', en: 'Wave clenched fists on both hands' },
        imageUrl: '/images/signals/special-fouls/double-foul.jpg',
    },
    {
        id: 'technical-foul',
        name: { ko: '테크니컬 파울', en: 'Technical Foul' },
        category: 'Special Fouls',
        description: { ko: '손바닥으로 T자', en: "Form 'T', showing palms" },
        imageUrl: '/images/signals/special-fouls/technical-foul.jpg',
    },
    {
        id: 'unsportsmanlike-foul',
        name: { ko: '언스포츠맨라이크 파울 (U-파울)', en: 'Unsportsmanlike Foul' },
        category: 'Special Fouls',
        description: { ko: '손목을 잡고 위로 올림', en: 'Grasp wrist upward' },
        imageUrl: '/images/signals/special-fouls/unsportsmanlike-foul.jpg',
    },
    {
        id: 'disqualifying-foul',
        name: { ko: '실격 파울 (퇴장)', en: 'Disqualifying Foul' },
        category: 'Special Fouls',
        description: { ko: '양손 주먹을 듬', en: 'Clenched fists on both hands' },
        imageUrl: '/images/signals/special-fouls/disqualifying-foul.jpg',
    },
    // Free-Throw Penalty Administration
    {
        id: 'after-foul-no-free-throws',
        name: { ko: '자유투 없음 (파울 후)', en: 'After Foul Without Free Throw(s)' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '경기 진행 방향을 가리킴', en: 'Point in direction of play, arm parallel to sidelines' },
        imageUrl: '/images/signals/free-throw-penalty-administration/after-foul-without-free-throw.png',
    },
    {
        id: 'after-foul-team-control',
        name: { ko: '공격자 파울 후', en: 'After Foul By Team In Control of the Ball' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '주먹을 쥐고 진행 방향 가리킴', en: 'Clenched fist in direction of play, arm parallel to sidelines' },
        imageUrl: '/images/signals/free-throw-penalty-administration/after-foul-by-team-in-control-of-ball.png',
    },
    // Free-Throw Administration – Lead Official
    {
        id: 'free-throw-lead-1',
        name: { ko: '자유투 1개 (리드 심판)', en: '1 Free Throw (Lead Official)' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '검지 하나를 눕힘', en: '1 finger horizontal' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-1.jpg',
    },
    {
        id: 'free-throw-lead-2',
        name: { ko: '자유투 2개 (리드 심판)', en: '2 Free Throws (Lead Official)' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '두 손가락을 눕힘', en: '2 fingers horizontal' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-2.jpg',
    },
    {
        id: 'free-throw-lead-3',
        name: { ko: '자유투 3개 (리드 심판)', en: '3 Free Throws (Lead Official)' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '세 손가락을 눕힘', en: '3 fingers horizontal' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-3.jpg',
    },
    // Free-Throw Administration – Trail / Centre Official
    {
        id: 'free-throw-trail-1',
        name: { ko: '자유투 1개 (트레일/센터)', en: '1 Free Throw (Trail/Centre Official)' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '검지를 세움', en: 'Index finger' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-1.jpg',
    },
    {
        id: 'free-throw-trail-2',
        name: { ko: '자유투 2개 (트레일/센터)', en: '2 Free Throws (Trail/Centre Official)' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '손가락을 모아 듬', en: 'Fingers together on both hands' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-2.jpg',
    },
    {
        id: 'free-throw-trail-3',
        name: { ko: '자유투 3개 (트레일/센터)', en: '3 Free Throws (Trail/Centre Official)' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '세 손가락을 폄', en: '3 fingers extended on both hands' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-3.jpg',
    },
    {
        id: 'penalty-1-free-throw',
        name: { ko: '자유투 1개', en: '1 Free Throw' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '검지를 세움', en: 'Hold up 1 finger' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-1.jpg',
    },
    {
        id: 'penalty-2-free-throws',
        name: { ko: '자유투 2개', en: '2 Free Throws' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '두 손가락을 세움', en: 'Hold up 2 fingers' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-2.jpg',
    },
    {
        id: 'penalty-3-free-throws',
        name: { ko: '자유투 3개', en: '3 Free Throws' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '세 손가락을 세움', en: 'Hold up 3 fingers' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-3.jpg',
    },
];

export const categories: SignalCategory[] = [
    'Game Clock',
    'Scoring',
    'Substitution and Time-out',
    'Informative',
    'Violations',
    'Number of Players',
    'Fouls',
    'Special Fouls',
    'Free-Throw Penalty Administration',
    'Free-Throw Administration – Lead Official',
    'Free-Throw Administration – Trail / Centre Official',
];
