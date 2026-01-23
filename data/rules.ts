export type RuleCategory = 'General' | 'Violations' | 'Fouls' | 'Timing' | 'Conduct';

export interface LocalizedContent {
    ko: string;
    en: string;
}

export interface RuleContent {
    summary: string;
    fullText: string;
}

export interface LocalizedRuleContent {
    ko: RuleContent;
    en: RuleContent;
}

export interface Rule {
    id: string;
    title: LocalizedContent;
    category: RuleCategory;
    description: LocalizedContent; // Brief description for list view
    fiba2025?: LocalizedRuleContent;
    kba?: LocalizedRuleContent; // Often same as FIBA
    nba?: LocalizedRuleContent;
}

export const rules: Rule[] = [
    // --- VIOLATIONS ---
    {
        id: 'traveling',
        title: { ko: '트래블링', en: 'Traveling' },
        category: 'Violations',
        description: { ko: '공을 가지고 불법적으로 이동하는 행위.', en: 'Moving illegally with the ball.' },
        fiba2025: {
            ko: {
                summary: '공을 잡은 후 2보 초과 이동 불가. "개더 스텝" + 2보 허용.',
                fullText: '제25조: 트래블링은 코트 안에서 라이브 볼을 잡고 있는 선수가 규정에 어긋나게 한 발 또는 두 발을 어느 방향으로든 부당하게 이동하는 것이다. 진행 중에 공을 잡거나 드리블을 마친 선수는 정지하거나 공을 패스 또는 슛하기 위해 2보를 더 밟을 수 있다.'
            },
            en: {
                summary: 'Taking more than 2 steps after gathering the ball. "Gather step" + 2 steps allowed.',
                fullText: 'Article 25: Traveling is the illegal movement of one foot or both feet beyond the limits outlined in this article, in any direction, while holding a live ball on the playing court. A player who catches the ball while he is progressing, or upon completion of a dribble, may take two steps in coming to a stop, passing or shooting the ball.'
            }
        },
        nba: {
            ko: {
                summary: '개더 스텝 + 2보. "캐링"에 더 엄격하지만 개더 스텝에는 관대함.',
                fullText: 'Section XIII—Traveling. 드리블을 완료하거나 진행 중에 공을 받은 선수는 정지, 패스, 슛을 위해 2보를 밟을 수 있다. 진행 중에 공을 "개더(gather)"한 선수는 정지, 패스, 슛을 위해 2보를 밟을 수 있다.'
            },
            en: {
                summary: 'Gather step + 2 steps. Stricter on "carrying" but generous on gather.',
                fullText: 'Section XIII—Traveling. A player who receives the ball while he is progressing or upon completion of a dribble, may take two steps in coming to a stop, passing or shooting the ball. A player who gathers the ball while progressing may take two steps in coming to a stop, passing or shooting the ball.'
            }
        }
    },
    {
        id: 'double-dribble',
        title: { ko: '더블 드리블 / 일리걸 드리블', en: 'Double Dribble / Illegal Dribble' },
        category: 'Violations',
        description: { ko: '드리블을 마친 후 다시 드리블하는 행위.', en: 'Dribbling again after ending a dribble.' },
        fiba2025: {
            ko: {
                summary: '공을 잡은(드리블 종료) 후에는 다시 드리블할 수 없다.',
                fullText: '제24조: 선수는 첫 번째 드리블이 끝난 후 다시 드리블할 수 없다. 단, 슛, 상대방의 터치, 패스나 펌블이 다른 선수에게 닿은 경우 등 공의 통제력을 잃은 틈에 다시 잡은 경우는 예외다.'
            },
            en: {
                summary: 'Cannot dribble a second time after holding the ball.',
                fullText: 'Article 24: A player shall not dribble for a second time after his first dribble has ended unless between the 2 dribbles he has lost control of a live ball on the playing court because of: A shot for a field goal, A touch of the ball by an opponent, A pass or fumble that has touched or been touched by another player.'
            }
        },
        nba: {
            ko: {
                summary: '동일 원칙. 드리블 종료 후 다시 드리블 불가.',
                fullText: 'Section II—Dribble. 선수는 자신의 첫 번째 드리블을 자발적으로 끝낸 후에 두 번째 드리블을 할 수 없다.'
            },
            en: {
                summary: 'Same principle. Cannot dribble after terminating the dribble.',
                fullText: 'Section II—Dribble. A player may not dribble a second time after he has voluntarily ended his first dribble.'
            }
        }
    },
    {
        id: 'carrying',
        title: { ko: '캐링 / 팔밍', en: 'Carrying / Palming' },
        category: 'Violations',
        description: { ko: '드리블 중 손바닥이 공 아래로 향하는 행위.', en: 'Hand under the ball while dribbling.' },
        fiba2025: {
            ko: {
                summary: '손이 공의 아래쪽에 닿으면 드리블 종료로 간주.',
                fullText: '제24조: 선수가 양손으로 동시에 공을 터치하거나 한 손 또는 양손으로 공이 머물게 하면 드리블이 끝난다.'
            },
            en: {
                summary: 'Hand placed under the ball ends the dribble.',
                fullText: 'Article 24: The dribble ends when the player touches the ball with both hands simultaneously or permits the ball to come to rest in one or both hands.'
            }
        },
        nba: {
            ko: {
                summary: '엄격하게 적용되는 강조 사항. 공 아래로 손을 넣으면 안 됨.',
                fullText: 'Section II—Dribble. 드리블 중인 선수는 공 아래에 손을 넣고 (1) 한 지점에서 다른 지점으로 옮기거나 (2) 멈췄다가 다시 드리블을 계속할 수 없다.'
            },
            en: {
                summary: 'Strictly enforced point of emphasis. No hand under ball.',
                fullText: 'Section II—Dribble. A player who is dribbling may not put any part of his hand under the ball and (1) carry it from one point to another or (2) bring it to a pause and then continue to dribble again.'
            }
        }
    },
    {
        id: 'goaltending',
        title: { ko: '골텐딩', en: 'Goaltending' },
        category: 'Violations',
        description: { ko: '낙하 중인 공을 건드리는 행위.', en: 'Blocking a shot on its downward flight.' },
        fiba2025: {
            ko: {
                summary: '낙하하는 공은 건드릴 수 없음. 림에 닿은 이후에는 터치 가능.',
                fullText: '제31조: 필드골 슛 상황에서 공이 링보다 높은 곳에 있고 낙하 비행 중이거나 백보드에 닿은 후에 선수가 공을 터치하면 골텐딩이다.'
            },
            en: {
                summary: 'Cannot touch ball on downward flight to basket. Once it hits the rim, it is fair game.',
                fullText: 'Article 31: Goaltending occurs during a shot for a field goal when a player touches the ball while it is completely above the level of the ring and: It is on its downward flight to the basket, or After it has touched the backboard.'
            }
        },
        nba: {
            ko: {
                summary: '낙하하는 공 건드리기 불가. 가상의 실린더 룰 적용.',
                fullText: 'Section I—A Player Shall Not: 공이 링을 하부 베이스로 사용하고 있을 때 공이나 링을 건드리기... 공이 링 위에 있고 가상의 실린더 안에 있을 때 공을 건드리기.'
            },
            en: {
                summary: 'Cannot touch ball on downward flight. Imaginary cylinder rule applies.',
                fullText: 'Section I—A Player Shall Not: Touch the ball or the basket ring when the ball is using the basket ring as its lower base... Touch the ball when it is above the basket ring and within the imaginary cylinder.'
            }
        }
    },
    {
        id: 'basket-interference',
        title: { ko: '바스켓 인터피어런스', en: 'Basket Interference' },
        category: 'Violations',
        description: { ko: '림/그물/백보드를 건드리거나 림 위의 공을 건드리는 행위.', en: 'Touching the rim/net/backboard or ball on the rim.' },
        fiba2025: {
            ko: {
                summary: 'NBA와 다름: 공이 림에 닿은 후에는 건드릴 수 있음 (쳐내거나 탭인 가능).',
                fullText: '제31조: 공이 링 위에 있을 때 간섭이 발생... 그러나 공이 링에 닿은 후에는 선수들이 공을 터치할 수 있다.'
            },
            en: {
                summary: 'Different from NBA: Once ball hits rim, you can touch it (swat it away or tap it in).',
                fullText: 'Article 31: Interference occurs when the ball is above the ring... BUT, once the ball touches the ring, players may touch the ball.'
            }
        },
        nba: {
            ko: {
                summary: '엄격한 실린더 룰. 공이 실린더 위/안에 있을 때 건드릴 수 없음.',
                fullText: 'Section I: 공이 링 위에 있고 가상의 실린더 내에 있을 때 공을 터치하는 것. 공이 링을 베이스로 하고 있을 때 공이나 링을 터치하는 것.'
            },
            en: {
                summary: 'Strict Cylinder Rule. Cannot touch ball while it is on/above the cylinder.',
                fullText: 'Section I: Touching the ball when it is above the basket ring and within the imaginary cylinder. Touching the ball or the basket ring when the ball is using the basket ring as its lower base.'
            }
        }
    },

    // --- TIMING ---
    {
        id: '3-seconds-offense',
        title: { ko: '3초 바이올레이션 (공격)', en: '3 Seconds (Offensive)' },
        category: 'Timing',
        description: { ko: '공격자가 상대 제한구역(페인트존)에 너무 오래 머무름.', en: 'Staying in the key for too long.' },
        fiba2025: {
            ko: {
                summary: '프런트코트에서 공을 소유한 상태로 상대 제한구역에 3초 이상 머물면 안 됨.',
                fullText: '제26조: 선수는 소속 팀이 프런트코트에서 라이브 볼을 통제하고 있고 경기 시계가 가동 중인 동안 상대 팀의 제한구역 안에 3초를 초과하여 머물 수 없다.'
            },
            en: {
                summary: 'Cannot stay in opponents\' key for >3s while team has ball in frontcourt.',
                fullText: 'Article 26: A player shall not remain in the opponents\' restricted area for more than 3 consecutive seconds while his team is in control of a live ball in the frontcourt and the game clock is running.'
            }
        },
        nba: {
            ko: {
                summary: '동일함. 페인트존 3초.',
                fullText: 'Section VII—Offensive Three-Second Rule. 공격 선수는 엔드라인과 맞은편 4피트 연장선 사이의 프리드로우 레인(페인트존) 안에서 3초 이상 머물 수 없다.'
            },
            en: {
                summary: 'Same. 3 seconds in the paint.',
                fullText: 'Section VII—Offensive Three-Second Rule. An offensive player shall not remain for more than three seconds in that part of his free throw lane between the endline and the extended 4\' (imaginary) line opposite the basket.'
            }
        }
    },
    {
        id: '3-seconds-defense',
        title: { ko: '3초 바이올레이션 (수비)', en: '3 Seconds (Defensive)' },
        category: 'Timing',
        description: { ko: '수비자가 마크맨 없이 제한구역에 머무름.', en: 'Defender staying in the key without guarding anyone.' },
        fiba2025: {
            ko: {
                summary: 'FIBA에는 수비자 3초 룰이 없음. 페인트존 대기 가능 (지역방어 자유).',
                fullText: 'FIBA에는 해당 규정이 존재하지 않는다. 지역방어에 제한이 없다.'
            },
            en: {
                summary: 'NO Defensive 3 Seconds rule in FIBA. You can camp in the paint.',
                fullText: 'No such rule exists in FIBA. Zone defense is unrestricted.'
            }
        },
        nba: {
            ko: {
                summary: '상대를 적극적으로 수비하지 않으면서 3초 이상 페인트존 체류 불가. 테크니컬 파울.',
                fullText: 'Section VIII—Defensive Three-Second Rule. 16피트 레인에 위치한 수비 선수는... 3초 이내에 상대를 적극적으로 수비해야 한다. 벌칙: 테크니컬 파울.'
            },
            en: {
                summary: 'Cannot stay in paint >3s without actively guarding an opponent (arms length). Technical foul.',
                fullText: 'Section VIII—Defensive Three-Second Rule. Any defensive player, who is positioned in the 16-foot lane... must be actively guarding an opponent within three seconds. Penalty: Technical foul.'
            }
        }
    },
    {
        id: 'shot-clock',
        title: { ko: '24초 샷 클락', en: '24-Second Shot Clock' },
        category: 'Timing',
        description: { ko: '슛을 시도해야 하는 제한 시간.', en: 'Time limit to attempt a shot.' },
        fiba2025: {
            ko: {
                summary: '24초. 공격 리바운드 시 14초로 리셋.',
                fullText: '제29조: 선수가 코트 위에서 라이브 볼을 통제하게 되면, 그 팀은 24초 이내에 필드골 슛을 시도해야 한다. 공격 리바운드 시 샷 클락은 14초로 리셋된다.'
            },
            en: {
                summary: '24 seconds. Reset to 14s on offensive rebound.',
                fullText: 'Article 29: Whenever a player gains control of a live ball on the playing court, his team must attempt a shot for a field goal within 24 seconds. On an offensive rebound, the shot clock is reset to 14 seconds.'
            }
        },
        nba: {
            ko: {
                summary: '24초. 공격 리바운드 시 14초로 리셋.',
                fullText: 'Section II—24-Second Clock. 공격 팀이 슛 실패나 자유투 후 다시 소유권을 얻으면 24초 샷 클락은 14초로 리셋된다.'
            },
            en: {
                summary: '24 seconds. Reset to 14s on offensive rebound.',
                fullText: 'Section II—24-Second Clock. The 24-second clock is reset to 14 seconds when the offensive team retains possession after a missed shot or free throw.'
            }
        }
    },
    {
        id: '8-seconds',
        title: { ko: '8초 바이올레이션', en: '8 Seconds / Backcourt Violation' },
        category: 'Timing',
        description: { ko: '백코트에서 프런트코트로 넘어와야 하는 시간.', en: 'Time to advance ball to frontcourt.' },
        fiba2025: {
            ko: {
                summary: '8초 이내에 하프라인을 넘어야 함.',
                fullText: '제28조: 8초. 팀은 8초 이내에 공을 프런트코트로 넘겨야 한다.'
            },
            en: {
                summary: '8 seconds to cross half court.',
                fullText: 'Article 28: 8 seconds. A team must cause the ball to go into its frontcourt within 8 seconds.'
            }
        },
        nba: {
            ko: {
                summary: '8초.',
                fullText: 'Section III—Eight-Second Rule. 팀은 백코트에서 8초 이상 연속해서 공을 통제할 수 없다.'
            },
            en: {
                summary: '8 seconds.',
                fullText: 'Section III—Eight-Second Rule. A team shall not be in continuous control of a ball which is in its backcourt for more than 8 consecutive seconds.'
            }
        }
    },

    // --- FOULS ---
    {
        id: 'personal-foul',
        title: { ko: '개인 파울 제한 (5반칙)', en: 'Personal Foul limit' },
        category: 'Fouls',
        description: { ko: '퇴장 당하기 전까지 허용되는 파울 수.', en: 'Maximum fouls before disqualification.' },
        fiba2025: {
            ko: {
                summary: '5개 (개인 파울 + 테크니컬 파울 합산).',
                fullText: '제40조: 개인 파울 및 테크니컬 파울을 합하여 5개의 파울을 범한 선수는 심판에게 통보를 받아야 하며 즉시 경기를 떠나야 한다.'
            },
            en: {
                summary: '5 Fouls (Personal + Technical combined).',
                fullText: 'Article 40: A player who has committed 5 fouls, personal and/or technical, shall be informed thereof by an official and must leave the game immediately.'
            }
        },
        nba: {
            ko: {
                summary: '6개 개인 파울. 테크니컬은 별도 계산 (2개면 퇴장).',
                fullText: 'Section I—A Player Shall Not: 선수는 6번째 개인 파울을 받으면 경기에서 실격된다.'
            },
            en: {
                summary: '6 Personal Fouls. Technicals count separately (2 for ejection).',
                fullText: 'Section I—A Player Shall Not: A player is disqualified from the game when he receives his sixth personal foul.'
            }
        }
    },
    {
        id: 'unsportsmanlike-foul',
        title: { ko: 'U-파울 / 플래그런트 파울', en: 'Unsportsmanlike / Flagrant Foul' },
        category: 'Fouls',
        description: { ko: '과도하거나 농구와 무관한 접촉.', en: 'Excessive or non-basketball contact.' },
        fiba2025: {
            ko: {
                summary: 'U-파울. C1: 정당한 농구 플레이 아님. C2: 과도한 접촉. C3: 속공 저지. C4: 클리어 패스. C5: 공중 위험 행위.',
                fullText: '제37조: 언스포츠맨라이크 파울은 심판이 판단하기에 다음과 같은 선수 접촉 파울이다: 규칙의 정신과 의도 내에서 공을 직접 플레이하려는 정당한 시도가 없는 접촉...'
            },
            en: {
                summary: 'U-Foul. C1: Not playing ball. C2: Excessive. C3: Transition contact. C4: Clear path. C5: Airborne dangerous.',
                fullText: 'Article 37: An unsportsmanlike foul is a player contact foul which, in the judgement of a referee is: Contact with an opponent and not legitimately attempting to directly play the ball within the spirit and intent of the rules...'
            }
        },
        nba: {
            ko: {
                summary: '플래그런트 1 (불필요함) vs 플래그런트 2 (불필요하고 과도함).',
                fullText: 'Section IV—Flagrant Foul. 벌칙 1: 불필요한 접촉. 벌칙 2: 불필요하고 과도한 접촉. 플래그런트 2는 자동 퇴장이다.'
            },
            en: {
                summary: 'Flagrant 1 (Unnecessary) vs Flagrant 2 (Unnecessary & Excessive).',
                fullText: 'Section IV—Flagrant Foul. Penalty 1: Unnecessary contact. Penalty 2: Unnecessary and excessive contact. Flagrant 2 results in automatic ejection.'
            }
        }
    },
    {
        id: 'technical-foul',
        title: { ko: '테크니컬 파울', en: 'Technical Foul' },
        category: 'Conduct',
        description: { ko: '신체 접촉이 없는 행동 관련 파울.', en: 'Non-contact behavioral foul.' },
        fiba2025: {
            ko: {
                summary: '자유투 1개 + 공격권 (사이드라인).',
                fullText: '제36조: 테크니컬 파울은 행동적인 성격의 비접촉 파울이다... 벌칙: 자유투 1개. 경기는 팀의 프런트코트 스로인 라인에서 스로인으로 재개된다.'
            },
            en: {
                summary: '1 Free Throw + Possession (Side out).',
                fullText: 'Article 36: A technical foul is a player non-contact foul of a behavioural nature... Penalty: 1 free throw. The game shall be resumed with a throw-in from the throw-in line in the team\'s frontcourt.'
            }
        },
        nba: {
            ko: {
                summary: '자유투 1개. 경기는 중단된 지점부터 재개.',
                fullText: 'Section V—Technical Fouls. 벌칙: 자유투 1개. 플레이는 중단된 지점에서 재개된다. (참고: 타임아웃 초과는 테크니컬이지만 소유권 유지).'
            },
            en: {
                summary: '1 Free Throw. Game continues from point of interruption.',
                fullText: 'Section V—Technical Fouls. Penalty: 1 free throw. Play resumes at the point of interruption. (Note: Excessive timeouts = Technical but team keeps ball).'
            }
        }
    },

    // --- GENERAL ---
    {
        id: 'timeouts',
        title: { ko: '타임아웃 (작전타임)', en: 'Timeouts' },
        category: 'General',
        description: { ko: '경기 중단 요청.', en: 'Stopping the game.' },
        fiba2025: {
            ko: {
                summary: '전반 2회, 후반 3회. 감독만 요청 가능. 데드볼 상황에서만.',
                fullText: '제18조: 타임아웃은 주감독 또는 제1조감독의 요청에 의한 경기 중단이다. 각 타임아웃은 1분간 지속된다.'
            },
            en: {
                summary: '2 in 1st half, 3 in 2nd half. ONLY Coach can call it. Dead ball only.',
                fullText: 'Article 18: A time-out is an interruption of the game requested by the head coach or first assistant coach. Each time-out shall last 1 minute.'
            }
        },
        nba: {
            ko: {
                summary: '경기당 7회. 선수가 공 소유 중일 때 요청 가능.',
                fullText: 'Section VI—Timeouts. 정규 타임아웃은 75초다. 선수는 공을 확실히 통제하고 있을 때 타임아웃을 요청할 수 있다.'
            },
            en: {
                summary: '7 per game. Players can call timeout while in possession.',
                fullText: 'Section VI—Timeouts. Regular timeouts are 75 seconds. Players may request a timeout when they are in specific control of the ball.'
            }
        }
    },
    {
        id: 'jump-ball',
        title: { ko: '점프볼 / 소유권 화살표', en: 'Jump Ball / Possession Arrow' },
        category: 'General',
        description: { ko: '헬드 볼 상황 해결 방식.', en: 'How held balls are resolved.' },
        fiba2025: {
            ko: {
                summary: '교대 소유권 화살표 사용. 점프볼은 경기 시작 때만.',
                fullText: '제12조: 점프볼은 심판이 센터 서클에서 2명의 상대 선수 사이로 공을 토스할 때 발생한다. 그 외 모든 헬드 볼 상황에서는 교대 소유권 절차를 사용한다.'
            },
            en: {
                summary: 'Alternating Possession Arrow. Jump ball only at start of game.',
                fullText: 'Article 12: A jump ball occurs when an official tosses the ball in the centre circle between any 2 opponents. In all other held ball situations, teams will use the alternating possession procedure.'
            }
        },
        nba: {
            ko: {
                summary: '모든 헬드 볼 상황에서 실제 점프볼 실시.',
                fullText: 'Section VI—Held Ball. 헬드 볼은 두 상대 선수가 한 손 또는 양손으로 공을 단단히 잡고 있을 때 발생한다... 관련된 두 선수 사이에서 점프볼이 진행된다.'
            },
            en: {
                summary: 'Real Jump Ball at any held ball situation.',
                fullText: 'Section VI—Held Ball. A held ball occurs when two opponents have one or both hands firmly on the ball... A jump ball takes place between the two involved players.'
            }
        }
    }
];
