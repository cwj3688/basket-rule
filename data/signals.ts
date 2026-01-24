export interface LocalizedContent {
    ko: string;
    en: string;
    ja: string;
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
        name: { ko: '시계 정지', en: 'Stop The Clock', ja: '時計の停止' },
        category: 'Game Clock',
        description: { ko: '손바닥을 폄', en: 'Open palm', ja: '掌を開く' },
        imageUrl: '/images/signals/game-clock/stop-the-clock.jpg',
    },
    {
        id: 'stop-the-clock-foul',
        name: { ko: '파울로 인한 시계 정지', en: 'Stop Clock for Foul', ja: 'ファウルによる時計の停止' },
        category: 'Game Clock',
        description: { ko: '주먹을 쥠', en: 'One clenched fist', ja: '握り拳を作る' },
        imageUrl: '/images/signals/game-clock/stop-the-clock-foul.jpg',
    },
    {
        id: 'start-clock',
        name: { ko: '시계 시작', en: 'Start Clock', ja: '時計の開始' },
        category: 'Game Clock',
        description: { ko: '손을 내리침', en: 'Chop with hand', ja: '手を振り下ろす' },
        imageUrl: '/images/signals/game-clock/start-clock.jpg',
    },
    // Scoring
    {
        id: '1-point',
        name: { ko: '1점', en: '1 Point', ja: '1点' },
        category: 'Scoring',
        description: { ko: '검지 하나, 손목 꺾기', en: "1 finger, 'flag' from wrist", ja: "人差し指1本、手首を返す" },
        imageUrl: '/images/signals/scoring/1-point.jpg',
    },
    {
        id: '2-points',
        name: { ko: '2점', en: '2 Points', ja: '2点' },
        category: 'Scoring',
        description: { ko: '검지/중지, 손목 꺾기', en: "2 fingers, 'flag' from wrist", ja: "指2本、手首を返す" },
        imageUrl: '/images/signals/scoring/2-points.jpg',
    },
    {
        id: '3-points-attempt',
        name: { ko: '3점 슛 시도', en: '3 Points Attempt', ja: '3ポイントシュート試投' },
        category: 'Scoring',
        description: { ko: '세 손가락을 폄', en: '3 fingers extended', ja: '指3本を伸ばす' },
        imageUrl: '/images/signals/scoring/3-points-attempt.jpg',
    },
    {
        id: '3-points-successful',
        name: { ko: '3점 슛 성공', en: '3 Points Successful', ja: '3ポイントシュート成功' },
        category: 'Scoring',
        description: { ko: '양손 세 손가락을 폄', en: '3 fingers extended on both hands', ja: '両手で指3本を伸ばす' },
        imageUrl: '/images/signals/scoring/3-points-successful.jpg',
    },
    // Substitution and Time-out
    {
        id: 'substitution',
        name: { ko: '선수 교체', en: 'Substitution', ja: '選手交代' },
        category: 'Substitution and Time-out',
        description: { ko: '팔을 X자로 교차', en: 'Cross forearms', ja: '腕をX字に交差させる' },
        imageUrl: '/images/signals/substitution-and-time-out/substitution.jpg',
    },
    {
        id: 'beckoning-in',
        name: { ko: '선수 입장 허락', en: 'Beckoning-in', ja: '選手入場許可' },
        category: 'Substitution and Time-out',
        description: { ko: '손바닥을 펴고 몸 쪽으로 손짓', en: 'Open palm, wave towards the body', ja: '掌を開いて手招きする' },
        imageUrl: '/images/signals/substitution-and-time-out/beckoning-in.jpg',
    },
    {
        id: 'charged-timeout',
        name: { ko: '작전 타임', en: 'Charged Time-out', ja: 'タイムアウト' },
        category: 'Substitution and Time-out',
        description: { ko: '검지로 T자 형성', en: "Form 'T', show index finger", ja: "人差し指でT字を作る" },
        imageUrl: '/images/signals/substitution-and-time-out/charged-timeout.jpg',
    },
    {
        id: 'media-timeout',
        name: { ko: '미디어 타임아웃', en: 'Media Time-out', ja: 'メディアタイムアウト' },
        category: 'Substitution and Time-out',
        description: { ko: '주먹을 쥐고 팔을 벌림', en: 'Open arms with clenched fists', ja: '拳を握って腕を広げる' },
        imageUrl: '/images/signals/substitution-and-time-out/media-timeout.jpg',
    },
    // Informative
    {
        id: 'cancel-score',
        name: { ko: '득점 취소 / 플레이 취소', en: 'Cancel Score / Cancel Play', ja: '得点取り消し / プレー取り消し' },
        category: 'Informative',
        description: { ko: '팔을 가위처럼 교차', en: "Scissor-like action with arms, once across chest", ja: "腕をはさみのように胸の前で一度交差させる" },
        imageUrl: '/images/signals/informative/cancel-score.jpg',
    },
    {
        id: 'visible-count',
        name: { ko: '카운트', en: 'Visible Count', ja: 'カウント' },
        category: 'Informative',
        description: { ko: '손바닥을 움직이며 카운트', en: 'Counting while moving the palm', ja: '掌を動かしながらカウントする' },
        imageUrl: '/images/signals/informative/visible-count.jpg',
    },
    {
        id: 'communication',
        name: { ko: '심판 간 대화', en: 'Communication', ja: '審判間の会話' },
        category: 'Informative',
        description: { ko: '엄지 척', en: "Thumb up", ja: "親指を立てる" },
        imageUrl: '/images/signals/informative/communication.jpg',
    },
    {
        id: 'shot-clock-reset',
        name: { ko: '샷 클락 리셋', en: 'Shot Clock Reset', ja: 'ショットクロックリセット' },
        category: 'Informative',
        description: { ko: '검지를 펴고 손을 회전', en: 'Rotate hand, index finger extended', ja: '人差し指を伸ばして手を回す' },
        imageUrl: '/images/signals/informative/shot-clock-reset.jpg',
    },
    {
        id: 'direction-of-play',
        name: { ko: '경기 진행 방향', en: 'Direction of Play / Out of Bounds', ja: '進行方向指示' },
        category: 'Informative',
        description: { ko: '진행 방향을 가리킴', en: 'Point in direction of play, arm parallel to sidelines', ja: 'サイドラインと平行に腕を伸ばし進行方向を指す' },
        imageUrl: '/images/signals/informative/direction-of-play.jpg',
    },
    {
        id: 'held-ball',
        name: { ko: '헬드 볼 / 점프볼 상황', en: 'Held Ball / Jump Ball Situation', ja: 'ヘルドボール / ジャンプボールシチュエーション' },
        category: 'Informative',
        description: { ko: '엄지를 들고, 이후 소유권 방향 지시', en: "Thumbs up, then point in direction of play using the alternating possession arrow", ja: "親指を立て、その後ポゼッションアローに従い方向を指す" },
        imageUrl: '/images/signals/informative/held-ball.jpg',
    },
    // Violations
    {
        id: 'travelling',
        name: { ko: '트래블링', en: 'Travelling', ja: 'トラベリング' },
        category: 'Violations',
        description: { ko: '주먹을 쥐고 회전', en: 'Rotate fists', ja: '拳を回す' },
        imageUrl: '/images/signals/violations/travelling.jpg',
    },
    {
        id: 'double-dribble',
        name: { ko: '더블 드리블', en: 'Illegal Dribble: Double Dribble', ja: 'ダブルドリブル' },
        category: 'Violations',
        description: { ko: '손바닥으로 두드리는 동작', en: 'Patting motion with palm', ja: '掌で叩く動作' },
        imageUrl: '/images/signals/violations/double-dribble.jpg',
    },
    {
        id: 'carrying',
        name: { ko: '캐링 더 볼', en: 'Illegal Dribble: Carrying', ja: 'イリーガルドリブル：キャリング' },
        category: 'Violations',
        description: { ko: '손바닥을 반회전', en: 'Half rotation with palm', ja: '掌を半回転させる' },
        imageUrl: '/images/signals/violations/carrying.jpg',
    },
    {
        id: '3-seconds',
        name: { ko: '3초 바이올레이션', en: '3 Seconds', ja: '3秒ルール' },
        category: 'Violations',
        description: { ko: '팔을 펴고 세 손가락 표시', en: 'Arm extended, show 3 fingers', ja: '腕を伸ばし、指3本を示す' },
        imageUrl: '/images/signals/violations/3-seconds.jpg',
    },
    {
        id: '5-seconds',
        name: { ko: '5초 바이올레이션', en: '5 Seconds', ja: '5秒ルール' },
        category: 'Violations',
        description: { ko: '다섯 손가락을 폄', en: 'Show 5 fingers', ja: '指5本を示す' },
        imageUrl: '/images/signals/violations/5-seconds.jpg',
    },
    {
        id: '8-seconds',
        name: { ko: '8초 바이올레이션', en: '8 Seconds', ja: '8秒ルール' },
        category: 'Violations',
        description: { ko: '여덟 손가락 표시', en: 'Show 8 fingers', ja: '指8本を示す' },
        imageUrl: '/images/signals/violations/8-seconds.jpg',
    },
    {
        id: '24-seconds',
        name: { ko: '24초 바이올레이션', en: '24 Seconds', ja: '24秒ルール' },
        category: 'Violations',
        description: { ko: '손가락으로 어깨 터치', en: 'Fingers touch shoulder', ja: '指で肩に触れる' },
        imageUrl: '/images/signals/violations/24-seconds.jpg',
    },
    {
        id: 'ball-return',
        name: { ko: '하프라인 바이올레이션', en: 'Ball Returned to Backcourt', ja: 'バックコートバイオレーション' },
        category: 'Violations',
        description: { ko: '몸 앞에서 팔을 흔듬', en: 'Wave arm front of body', ja: '体の前で腕を振る' },
        imageUrl: '/images/signals/violations/ball-return.jpg',
    },
    {
        id: 'foot-ball',
        name: { ko: '킥 볼', en: 'Foot Ball', ja: 'キックボール' },
        category: 'Violations',
        description: { ko: '발을 가리킴', en: 'Point to the foot', ja: '足を指差す' },
        imageUrl: '/images/signals/violations/foot-ball.jpg',
    },
    // Number of Players - Reduced detail for brevity in translation, kept EN logic mainly
    // Just translating Names
    {
        id: 'number-00',
        name: { ko: '번호 00', en: 'Number 00', ja: '背番号 00' },
        category: 'Number of Players',
        description: { ko: '양손으로 0 표시', en: 'Both hands show 0', ja: '両手で0を示す' },
        imageUrl: '/images/signals/number-of-players/number-00.jpg',
    },
    {
        id: 'number-0',
        name: { ko: '번호 0', en: 'Number 0', ja: '背番号 0' },
        category: 'Number of Players',
        description: { ko: '오른손으로 0 표시', en: 'Right hand shows 0', ja: '右手で0を示す' },
        imageUrl: '/images/signals/number-of-players/number-00.jpg',
    },
    {
        id: 'number-1-5',
        name: { ko: '번호 1-5', en: 'Number 1-5', ja: '背番号 1-5' },
        category: 'Number of Players',
        description: { ko: '오른손으로 1~5 표시', en: 'Right hand shows number 1 to 5', ja: '右手で1〜5を示す' },
        imageUrl: '/images/signals/number-of-players/number-1-5.jpg',
    },
    {
        id: 'number-6-10',
        name: { ko: '번호 6-10', en: 'Number 6-10', ja: '背番号 6-10' },
        category: 'Number of Players',
        description: { ko: '오른손 5, 왼손 1~5', en: 'Right hand shows number 5, left hand shows number 1 to 5', ja: '右手で5、左手で1〜5を示す' },
        imageUrl: '/images/signals/number-of-players/number-6-10.jpg',
    },
    {
        id: 'number-11-15',
        name: { ko: '번호 11-15', en: 'Number 11-15', ja: '背番号 11-15' },
        category: 'Number of Players',
        description: { ko: '오른손 주먹, 왼손 1~5', en: 'Right hand shows clenched fist, left hand shows number 1 to 5', ja: '右手で拳、左手で1〜5を示す' },
        imageUrl: '/images/signals/number-of-players/number-11-15.jpg',
    },
    {
        id: 'number-16',
        name: { ko: '번호 16', en: 'Number 16', ja: '背番号 16' },
        category: 'Number of Players',
        description: { ko: '10자리 1(손등), 1자리 6', en: 'First reverse hand shows number 1 for the decade digit - then open hands show number 6 for the units digit', ja: '10の位1（手の甲）、1の位6を示す' },
        imageUrl: '/images/signals/number-of-players/number-16.jpg',
    },
    {
        id: 'number-24',
        name: { ko: '번호 24', en: 'Number 24', ja: '背番号 24' },
        category: 'Number of Players',
        description: { ko: '10자리 2(손등), 1자리 4', en: 'First reverse hand shows number 2 for the decade digit - then open hand shows number 4 for the units digit', ja: '10の位2（手の甲）、1の位4を示す' },
        imageUrl: '/images/signals/number-of-players/number-24.jpg',
    },
    {
        id: 'number-40',
        name: { ko: '번호 40', en: 'Number 40', ja: '背番号 40' },
        category: 'Number of Players',
        description: { ko: '10자리 4(손등), 1자리 0', en: 'First reverse hand shows number 4 for the decade digit - then open hand shows 0 for the units digit', ja: '10の位4（手の甲）、1の位0を示す' },
        imageUrl: '/images/signals/number-of-players/number-40.jpg',
    },
    {
        id: 'number-62',
        name: { ko: '번호 62', en: 'Number 62', ja: '背番号 62' },
        category: 'Number of Players',
        description: { ko: '10자리 6(손등), 1자리 2', en: 'First reverse hands show number 6 for the decade digit - then open hand shows 2 for the units digit', ja: '10の位6（手の甲）、1の位2を示す' },
        imageUrl: '/images/signals/number-of-players/number-62.jpg',
    },
    {
        id: 'number-78',
        name: { ko: '번호 78', en: 'Number 78', ja: '背番号 78' },
        category: 'Number of Players',
        description: { ko: '10자리 7(손등), 1자리 8', en: 'First reverse hands show number 7 for the decade digit - then open hands show number 8 for the units digit', ja: '10の位7（手の甲）、1の位8を示す' },
        imageUrl: '/images/signals/number-of-players/number-78.jpg',
    },
    {
        id: 'number-99',
        name: { ko: '번호 99', en: 'Number 99', ja: '背番号 99' },
        category: 'Number of Players',
        description: { ko: '10자리 9(손등), 1자리 9', en: 'First reverse hands show number 9 for the decade digit - then open hands show number 9 for the units digit', ja: '10の位9（手の甲）、1の位9を示す' },
        imageUrl: '/images/signals/number-of-players/number-99.jpg',
    },
    // Fouls
    {
        id: 'holding',
        name: { ko: '홀딩', en: 'Holding', ja: 'ホールディング' },
        category: 'Fouls',
        description: { ko: '손목을 잡는 동작', en: 'Grasp wrist downward', ja: '手首を下向きに掴む動作' },
        imageUrl: '/images/signals/fouls/holding.jpg',
    },
    {
        id: 'blocking',
        name: { ko: '블로킹', en: 'Blocking / Illegal Screen', ja: 'ブロッキング / イリーガルスクリーン' },
        category: 'Fouls',
        description: { ko: '양손을 허리에', en: 'Both hands on hips', ja: '両手を腰に当てる' },
        imageUrl: '/images/signals/fouls/blocking.jpg',
    },
    {
        id: 'pushing',
        name: { ko: '푸싱', en: 'Pushing / Charging Without Ball', ja: 'プッシング / ボールなしのチャージング' },
        category: 'Fouls',
        description: { ko: '미는 동작', en: 'Imitate push', ja: '押す動作' },
        imageUrl: '/images/signals/fouls/pushing.jpg',
    },
    {
        id: 'handchecking',
        name: { ko: '핸드체킹', en: 'Handchecking', ja: 'ハンドチェッキング' },
        category: 'Fouls',
        description: { ko: '손바닥을 잡고 앞으로', en: 'Grab palm and forward motion', ja: '掌を掴んで前に動かす' },
        imageUrl: '/images/signals/fouls/handchecking.jpg',
    },
    {
        id: 'illegal-use-of-hands',
        name: { ko: '손을 부당하게 사용', en: 'Illegal Use of Hands', ja: 'イリーガルユースオブハンズ' },
        category: 'Fouls',
        description: { ko: '손목을 침', en: 'Strike wrist', ja: '手首を叩く' },
        imageUrl: '/images/signals/fouls/illegal-use-of-hands.jpg',
    },
    {
        id: 'charging-with-ball',
        name: { ko: '차징 (볼 소유)', en: 'Charging With Ball', ja: 'チャージング（ボール保持）' },
        category: 'Fouls',
        description: { ko: '주먹으로 손바닥을 침', en: 'Clenched fist strike open palm', ja: '拳で掌を叩く' },
        imageUrl: '/images/signals/fouls/charging-with-ball.jpg',
    },
    {
        id: 'illegal-contact-hand',
        name: { ko: '손에 대한 부당한 접촉', en: 'Illegal Contact to the Hand', ja: '手への不当な接触' },
        category: 'Fouls',
        description: { ko: '손바닥을 팔뚝으로 침', en: 'Strike the palm towards the other forearm', ja: '掌を前腕に向け叩く' },
        imageUrl: '/images/signals/fouls/illegal-contact-hand.jpg',
    },
    {
        id: 'excessive-swinging-elbow',
        name: { ko: '과도한 팔꿈치 휘두름', en: 'Excessive Swinging of Elbow', ja: '過度な肘の振り回し' },
        category: 'Fouls',
        description: { ko: '팔꿈치를 뒤로 휘두름', en: 'Swing elbow backwards', ja: '肘を後ろに振る' },
        imageUrl: '/images/signals/fouls/excessive-swinging-elbow.jpg',
    },
    {
        id: 'hit-head',
        name: { ko: '머리 가격', en: 'Hit to the Head', ja: '頭部への接触' },
        category: 'Fouls',
        description: { ko: '머리를 가격하는 동작', en: 'Imitate contact to the head', ja: '頭への接触を真似る' },
        imageUrl: '/images/signals/fouls/hit-head.jpg',
    },
    {
        id: 'foul-by-team-control',
        name: { ko: '공격자 파울 (팀 컨트롤)', en: 'Foul by Team in Control of the Ball', ja: 'オフェンスファウル（チームコントロール）' },
        category: 'Fouls',
        description: { ko: '위반 팀 바스켓 쪽으로 주먹', en: 'Point clenched fist towards basket of offending team', ja: '違反チームのバスケットに向けて拳を突き出す' },
        imageUrl: '/images/signals/fouls/foul-by-team-control.jpg',
    },
    {
        id: 'foul-on-act-of-shooting',
        name: { ko: '슈팅 동작 중 파울', en: 'Foul on the Act of Shooting', ja: 'シュート動作中のファウル' },
        category: 'Fouls',
        description: { ko: '주먹을 쥐고 자유투 수 표시', en: 'One arm with clenched fist, followed by indication of the numbers of free throws', ja: '片腕で拳を作り、フリースローの数を示す' },
        imageUrl: '/images/signals/fouls/foul-on-act-of-shooting.jpg',
    },
    {
        id: 'foul-not-on-act-of-shooting',
        name: { ko: '슈팅 동작 아님', en: 'Foul Not on the Act of Shooting', ja: 'シュート動作中ではないファウル' },
        category: 'Fouls',
        description: { ko: '주먹을 쥐고 바닥을 가리킴', en: 'One arm with clenched fist, followed by pointing to the floor', ja: '片腕で拳を作り、床を指差す' },
        imageUrl: '/images/signals/fouls/foul-not-on-act-of-shooting.jpg',
    },
    // Special Fouls
    {
        id: 'double-foul',
        name: { ko: '더블 파울', en: 'Double Fouls', ja: 'ダブルファウル' },
        category: 'Special Fouls',
        description: { ko: '양손 주먹을 흔듬', en: 'Wave clenched fists on both hands', ja: '両手の拳を振る' },
        imageUrl: '/images/signals/special-fouls/double-foul.jpg',
    },
    {
        id: 'technical-foul',
        name: { ko: '테크니컬 파울', en: 'Technical Foul', ja: 'テクニカルファウル' },
        category: 'Special Fouls',
        description: { ko: '손바닥으로 T자', en: "Form 'T', showing palms", ja: "掌でT字を作る" },
        imageUrl: '/images/signals/special-fouls/technical-foul.jpg',
    },
    {
        id: 'unsportsmanlike-foul',
        name: { ko: '언스포츠맨라이크 파울 (U-파울)', en: 'Unsportsmanlike Foul', ja: 'アンスポーツマンライクファウル' },
        category: 'Special Fouls',
        description: { ko: '손목을 잡고 위로 올림', en: 'Grasp wrist upward', ja: '手首を掴んで上に上げる' },
        imageUrl: '/images/signals/special-fouls/unsportsmanlike-foul.jpg',
    },
    {
        id: 'disqualifying-foul',
        name: { ko: '실격 파울 (퇴장)', en: 'Disqualifying Foul', ja: 'ディスクォリファイングファウル（退場）' },
        category: 'Special Fouls',
        description: { ko: '양손 주먹을 듬', en: 'Clenched fists on both hands', ja: '両手で拳を上げる' },
        imageUrl: '/images/signals/special-fouls/disqualifying-foul.jpg',
    },
    // Free-Throw Penalty Administration
    {
        id: 'after-foul-no-free-throws',
        name: { ko: '자유투 없음 (파울 후)', en: 'After Foul Without Free Throw(s)', ja: 'フリースローなし（ファウル後）' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '경기 진행 방향을 가리킴', en: 'Point in direction of play, arm parallel to sidelines', ja: 'サイドラインと平行に腕を伸ばし進行方向を指す' },
        imageUrl: '/images/signals/free-throw-penalty-administration/after-foul-without-free-throw.png',
    },
    {
        id: 'after-foul-team-control',
        name: { ko: '공격자 파울 후', en: 'After Foul By Team In Control of the Ball', ja: 'オフェンスファウル後' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '주먹을 쥐고 진행 방향 가리킴', en: 'Clenched fist in direction of play, arm parallel to sidelines', ja: '拳を握って進行方向を指す' },
        imageUrl: '/images/signals/free-throw-penalty-administration/after-foul-by-team-in-control-of-ball.png',
    },
    // Free-Throw Administration – Lead Official
    {
        id: 'free-throw-lead-1',
        name: { ko: '자유투 1개 (리드 심판)', en: '1 Free Throw (Lead Official)', ja: 'フリースロー1本（リード審判）' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '검지 하나를 눕힘', en: '1 finger horizontal', ja: '指1本を水平にする' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-1.jpg',
    },
    {
        id: 'free-throw-lead-2',
        name: { ko: '자유투 2개 (리드 심판)', en: '2 Free Throws (Lead Official)', ja: 'フリースロー2本（リード審判）' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '두 손가락을 눕힘', en: '2 fingers horizontal', ja: '指2本を水平にする' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-2.jpg',
    },
    {
        id: 'free-throw-lead-3',
        name: { ko: '자유투 3개 (리드 심판)', en: '3 Free Throws (Lead Official)', ja: 'フリースロー3本（リード審判）' },
        category: 'Free-Throw Administration – Lead Official',
        description: { ko: '세 손가락을 눕힘', en: '3 fingers horizontal', ja: '指3本を水平にする' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-lead-3.jpg',
    },
    // Free-Throw Administration – Trail / Centre Official
    {
        id: 'free-throw-trail-1',
        name: { ko: '자유투 1개 (트레일/센터)', en: '1 Free Throw (Trail/Centre Official)', ja: 'フリースロー1本（トレイル/センター審判）' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '검지를 세움', en: 'Index finger', ja: '人差し指を立てる' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-1.jpg',
    },
    {
        id: 'free-throw-trail-2',
        name: { ko: '자유투 2개 (트레일/센터)', en: '2 Free Throws (Trail/Centre Official)', ja: 'フリースロー2本（トレイル/センター審判）' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '손가락을 모아 듬', en: 'Fingers together on both hands', ja: '両手で指を揃えて上げる' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-2.jpg',
    },
    {
        id: 'free-throw-trail-3',
        name: { ko: '자유투 3개 (트레일/센터)', en: '3 Free Throws (Trail/Centre Official)', ja: 'フリースロー3本（トレイル/センター審判）' },
        category: 'Free-Throw Administration – Trail / Centre Official',
        description: { ko: '세 손가락을 폄', en: '3 fingers extended on both hands', ja: '両手で指3本を伸ばす' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-trail-3.jpg',
    },
    {
        id: 'penalty-1-free-throw',
        name: { ko: '자유투 1개', en: '1 Free Throw', ja: 'フリースロー1本' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '검지를 세움', en: 'Hold up 1 finger', ja: '指1本を立てる' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-1.jpg',
    },
    {
        id: 'penalty-2-free-throws',
        name: { ko: '자유투 2개', en: '2 Free Throws', ja: 'フリースロー2本' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '두 손가락을 세움', en: 'Hold up 2 fingers', ja: '指2本を立てる' },
        imageUrl: '/images/signals/free-throw-administration/free-throw-2.jpg',
    },
    {
        id: 'penalty-3-free-throws',
        name: { ko: '자유투 3개', en: '3 Free Throws', ja: 'フリースロー3本' },
        category: 'Free-Throw Penalty Administration',
        description: { ko: '세 손가락을 세움', en: 'Hold up 3 fingers', ja: '指3本を立てる' },
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
