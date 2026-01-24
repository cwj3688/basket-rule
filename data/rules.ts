export type RuleCategory = 'General' | 'Violations' | 'Fouls' | 'Timing' | 'Conduct';

export interface LocalizedContent {
    ko: string;
    en: string;
    ja: string;
}

export interface RuleContent {
    summary: string;
    fullText: string;
}

export interface LocalizedRuleContent {
    ko: RuleContent;
    en: RuleContent;
    ja: RuleContent; // Add Japanese support
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
        title: { ko: '트래블링', en: 'Traveling', ja: 'トラベリング' },
        category: 'Violations',
        description: { ko: '공을 가지고 불법적으로 이동하는 행위.', en: 'Moving illegally with the ball.', ja: 'ボールを持って不当に移動する行為。' },
        fiba2025: {
            ko: {
                summary: '공을 잡은 후 2보 초과 이동 불가. "개더 스텝" + 2보 허용.',
                fullText: '제25조: 트래블링은 코트 안에서 라이브 볼을 잡고 있는 선수가 규정에 어긋나게 한 발 또는 두 발을 어느 방향으로든 부당하게 이동하는 것이다. 진행 중에 공을 잡거나 드리블을 마친 선수는 정지하거나 공을 패스 또는 슛하기 위해 2보를 더 밟을 수 있다.'
            },
            en: {
                summary: 'Taking more than 2 steps after gathering the ball. "Gather step" + 2 steps allowed.',
                fullText: 'Article 25: Traveling is the illegal movement of one foot or both feet beyond the limits outlined in this article, in any direction, while holding a live ball on the playing court. A player who catches the ball while he is progressing, or upon completion of a dribble, may take two steps in coming to a stop, passing or shooting the ball.'
            },
            ja: {
                summary: 'ボールを保持した後、2歩を超えて移動することは不可。「ギャザーステップ」+ 2歩まで許容。',
                fullText: '第25条：トラベリングとは、コート内でライブのボールを持っているプレーヤーが、本条で規定された制限を超えて、不当に一方または両方の足をあらゆる方向に動かすことである。進行中にボールをキャッチしたり、ドリブルを終えたプレーヤーは、停止、パス、またはショットのためにさらに2歩踏み出すことができる。'
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
            },
            ja: {
                summary: 'ギャザーステップ + 2歩。「キャリング」には厳しいが、ギャザーステップには寛容。',
                fullText: 'Section XIII—Traveling. ドリブルを完了するか進行中にボールを受けたプレーヤーは、停止、パス、シュートのために2歩踏むことができる。進行中にボールを「ギャザー（gather）」したプレーヤーは、停止、パス、シュートのために2歩踏むことができる。'
            }
        }
    },
    {
        id: 'double-dribble',
        title: { ko: '더블 드리블 / 일리걸 드리블', en: 'Double Dribble / Illegal Dribble', ja: 'ダブルドリブル / イリーガルドリブル' },
        category: 'Violations',
        description: { ko: '드리블을 마친 후 다시 드리블하는 행위.', en: 'Dribbling again after ending a dribble.', ja: 'ドリブルを終えた後に再びドリブルする行為。' },
        fiba2025: {
            ko: {
                summary: '공을 잡은(드리블 종료) 후에는 다시 드리블할 수 없다.',
                fullText: '제24조: 선수는 첫 번째 드리블이 끝난 후 다시 드리블할 수 없다. 단, 슛, 상대방의 터치, 패스나 펌블이 다른 선수에게 닿은 경우 등 공의 통제력을 잃은 틈에 다시 잡은 경우는 예외다.'
            },
            en: {
                summary: 'Cannot dribble a second time after holding the ball.',
                fullText: 'Article 24: A player shall not dribble for a second time after his first dribble has ended unless between the 2 dribbles he has lost control of a live ball on the playing court because of: A shot for a field goal, A touch of the ball by an opponent, A pass or fumble that has touched or been touched by another player.'
            },
            ja: {
                summary: 'ボールを持った（ドリブル終了）後は、再びドリブルすることはできない。',
                fullText: '第24条：プレーヤーは、最初のドリブルが終わった後、再びドリブルすることはできない。ただし、シュート、相手のタッチ、パスやファンブルが他のプレーヤーに触れた場合など、ボールのコントロールを失った間に再び保持した場合は例外である。'
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
            },
            ja: {
                summary: '同一原則。ドリブル終了後の再ドリブルは不可。',
                fullText: 'Section II—Dribble. プレーヤーは、自分の最初のドリブルを自発的に終えた後に、2回目のドリブルを行うことはできない。'
            }
        }
    },
    {
        id: 'carrying',
        title: { ko: '캐링 / 팔밍', en: 'Carrying / Palming', ja: 'キャリング / パルミング' },
        category: 'Violations',
        description: { ko: '드리블 중 손바닥이 공 아래로 향하는 행위.', en: 'Hand under the ball while dribbling.', ja: 'ドリブル中に手のひらがボールの下に向く行為。' },
        fiba2025: {
            ko: {
                summary: '손이 공의 아래쪽에 닿으면 드리블 종료로 간주.',
                fullText: '제24조: 선수가 양손으로 동시에 공을 터치하거나 한 손 또는 양손으로 공이 머물게 하면 드리블이 끝난다.'
            },
            en: {
                summary: 'Hand placed under the ball ends the dribble.',
                fullText: 'Article 24: The dribble ends when the player touches the ball with both hands simultaneously or permits the ball to come to rest in one or both hands.'
            },
            ja: {
                summary: '手がボールの下側に触れるとドリブル終了とみなされる。',
                fullText: '第24条：プレーヤーが両手で同時にボールに触れるか、片手または両手でボールを支え持つとドリブルは終了する。'
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
            },
            ja: {
                summary: '厳格に適用される強調事項。ボールの下に手を入れてはならない。',
                fullText: 'Section II—Dribble. ドリブル中のプレーヤーは、ボールの下に手を入れ、(1)ある地点から別の地点へ運んだり、(2)停止させてから再びドリブルを続けることはできない。'
            }
        }
    },
    {
        id: 'goaltending',
        title: { ko: '골텐딩', en: 'Goaltending', ja: 'ゴールテンディング' },
        category: 'Violations',
        description: { ko: '낙하 중인 공을 건드리는 행위.', en: 'Blocking a shot on its downward flight.', ja: '落下中のボールに触れる行為。' },
        fiba2025: {
            ko: {
                summary: '낙하하는 공은 건드릴 수 없음. 림에 닿은 이후에는 터치 가능.',
                fullText: '제31조: 필드골 슛 상황에서 공이 링보다 높은 곳에 있고 낙하 비행 중이거나 백보드에 닿은 후에 선수가 공을 터치하면 골텐딩이다.'
            },
            en: {
                summary: 'Cannot touch ball on downward flight to basket. Once it hits the rim, it is fair game.',
                fullText: 'Article 31: Goaltending occurs during a shot for a field goal when a player touches the ball while it is completely above the level of the ring and: It is on its downward flight to the basket, or After it has touched the backboard.'
            },
            ja: {
                summary: '落下中のボールには触れられない。リングに当たった後はタッチ可能。',
                fullText: '第31条：フィールドゴールのショット中、ボールがリングより高い位置にあり、かつ落下飛行中またはバックボードに触れた後に、プレーヤーがボールに触れるとゴールテンディングとなる。'
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
            },
            ja: {
                summary: '落下中のボールへの接触不可。仮想シリンダールール適用。',
                fullText: 'Section I—A Player Shall Not: ボールがリングを下部ベースとして使用している時にボールやリングに触れること... ボールがリングの上にあり、仮想シリンダー内にある時にボールに触れること。'
            }
        }
    },
    {
        id: 'basket-interference',
        title: { ko: '바스켓 인터피어런스', en: 'Basket Interference', ja: 'バスケット・インターフェアレンス' },
        category: 'Violations',
        description: { ko: '림/그물/백보드를 건드리거나 림 위의 공을 건드리는 행위.', en: 'Touching the rim/net/backboard or ball on the rim.', ja: 'リム/ネット/バックボードに触れるか、リム上のボールに触れる行為。' },
        fiba2025: {
            ko: {
                summary: 'NBA와 다름: 공이 림에 닿은 후에는 건드릴 수 있음 (쳐내거나 탭인 가능).',
                fullText: '제31조: 공이 링 위에 있을 때 간섭이 발생... 그러나 공이 링에 닿은 후에는 선수들이 공을 터치할 수 있다.'
            },
            en: {
                summary: 'Different from NBA: Once ball hits rim, you can touch it (swat it away or tap it in).',
                fullText: 'Article 31: Interference occurs when the ball is above the ring... BUT, once the ball touches the ring, players may touch the ball.'
            },
            ja: {
                summary: 'NBAと異なる：ボールがリングに当たった後は触れることができる（弾き出す、タップイン可能）。',
                fullText: '第31条：ボールがリングの上にあるときにインターフェアレンスが発生...しかし、ボールがリングに触れた後は、プレーヤーはボールに触れることができる。'
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
            },
            ja: {
                summary: '厳格なシリンダールール。ボールがシリンダーの上/内にある時は触れられない。',
                fullText: 'Section I: ボールがリングの上にあり、仮想シリンダー内にある時にボールに触れること。ボールがリングをベースとしている時にボールやリングに触れること。'
            }
        }
    },

    // --- TIMING ---
    {
        id: '3-seconds-offense',
        title: { ko: '3초 바이올레이션 (공격)', en: '3 Seconds (Offensive)', ja: '3秒ルール（オフェンス）' },
        category: 'Timing',
        description: { ko: '공격자가 상대 제한구역(페인트존)에 너무 오래 머무름.', en: 'Staying in the key for too long.', ja: '攻撃側が相手の制限区域（ペイントエリア）に長く留まること。' },
        fiba2025: {
            ko: {
                summary: '프런트코트에서 공을 소유한 상태로 상대 제한구역에 3초 이상 머물면 안 됨.',
                fullText: '제26조: 선수는 소속 팀이 프런트코트에서 라이브 볼을 통제하고 있고 경기 시계가 가동 중인 동안 상대 팀의 제한구역 안에 3초를 초과하여 머물 수 없다.'
            },
            en: {
                summary: 'Cannot stay in opponents\' key for >3s while team has ball in frontcourt.',
                fullText: 'Article 26: A player shall not remain in the opponents\' restricted area for more than 3 consecutive seconds while his team is in control of a live ball in the frontcourt and the game clock is running.'
            },
            ja: {
                summary: 'フロントコートでボールを保持している状態で、相手の制限区域に3秒以上留まってはならない。',
                fullText: '第26条：プレーヤーは、自チームがフロントコートでライブのボールをコントロールしており、ゲームクロックが動いている間、相手チームの制限区域内に連続して3秒を超えて留まることはできない。'
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
            },
            ja: {
                summary: '同様。ペイントゾーン3秒。',
                fullText: 'Section VII—Offensive Three-Second Rule. 攻撃プレーヤーは、エンドラインと向かい側の4フィート延長線の間のフリースローレーン（ペイントゾーン）内に3秒以上留まることはできない。'
            }
        }
    },
    {
        id: '3-seconds-defense',
        title: { ko: '3초 바이올레이션 (수비)', en: '3 Seconds (Defensive)', ja: '3秒ルール（ディフェンス）' },
        category: 'Timing',
        description: { ko: '수비자가 마크맨 없이 제한구역에 머무름.', en: 'Defender staying in the key without guarding anyone.', ja: '守備側がマークマンなしに制限区域に留まること。' },
        fiba2025: {
            ko: {
                summary: 'FIBA에는 수비자 3초 룰이 없음. 페인트존 대기 가능 (지역방어 자유).',
                fullText: 'FIBA에는 해당 규정이 존재하지 않는다. 지역방어에 제한이 없다.'
            },
            en: {
                summary: 'NO Defensive 3 Seconds rule in FIBA. You can camp in the paint.',
                fullText: 'No such rule exists in FIBA. Zone defense is unrestricted.'
            },
            ja: {
                summary: 'FIBAにはディフェンス3秒ルールなし。ペイントゾーン待機可能（ゾーンディフェンス自由）。',
                fullText: 'FIBAには該当規定が存在しない。ゾーンディフェンスに制限はない。'
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
            },
            ja: {
                summary: '相手を積極的に守備せずに3秒以上ペイントゾーンに留まることは不可。テクニカルファウル。',
                fullText: 'Section VIII—Defensive Three-Second Rule. 16フィートレーンに位置する守備プレーヤーは... 3秒以内に相手を積極的に守備しなければならない。罰則：テクニカルファウル。'
            }
        }
    },
    {
        id: 'shot-clock',
        title: { ko: '24초 샷 클락', en: '24-Second Shot Clock', ja: '24秒ショットクロック' },
        category: 'Timing',
        description: { ko: '슛을 시도해야 하는 제한 시간.', en: 'Time limit to attempt a shot.', ja: 'シュートを試みなければならない制限時間。' },
        fiba2025: {
            ko: {
                summary: '24초. 공격 리바운드 시 14초로 리셋.',
                fullText: '제29조: 선수가 코트 위에서 라이브 볼을 통제하게 되면, 그 팀은 24초 이내에 필드골 슛을 시도해야 한다. 공격 리바운드 시 샷 클락은 14초로 리셋된다.'
            },
            en: {
                summary: '24 seconds. Reset to 14s on offensive rebound.',
                fullText: 'Article 29: Whenever a player gains control of a live ball on the playing court, his team must attempt a shot for a field goal within 24 seconds. On an offensive rebound, the shot clock is reset to 14 seconds.'
            },
            ja: {
                summary: '24秒。オフェンスリバウンド時は14秒にリセット。',
                fullText: '第29条：プレーヤーがコート上でライブのボールをコントロールすると、そのチームは24秒以内にフィールドゴールを試みなければならない。オフェンスリバウンド時、ショットクロックは14秒にリセットされる。'
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
            },
            ja: {
                summary: '24秒。オフェンスリバウンド時は14秒にリセット。',
                fullText: 'Section II—24-Second Clock. 攻撃チームがシュートミスやフリースロー後に再び所有権を得ると、24秒ショットクロックは14秒にリセットされる。'
            }
        }
    },
    {
        id: '8-seconds',
        title: { ko: '8초 바이올레이션', en: '8 Seconds / Backcourt Violation', ja: '8秒ルール / バックコートバイオレーション' },
        category: 'Timing',
        description: { ko: '백코트에서 프런트코트로 넘어와야 하는 시간.', en: 'Time to advance ball to frontcourt.', ja: 'バックコートからフロントコートへボールを運ぶ制限時間。' },
        fiba2025: {
            ko: {
                summary: '8초 이내에 하프라인을 넘어야 함.',
                fullText: '제28조: 8초. 팀은 8초 이내에 공을 프런트코트로 넘겨야 한다.'
            },
            en: {
                summary: '8 seconds to cross half court.',
                fullText: 'Article 28: 8 seconds. A team must cause the ball to go into its frontcourt within 8 seconds.'
            },
            ja: {
                summary: '8秒以内にハーフラインを超えなければならない。',
                fullText: '第28条：8秒。チームは8秒以内にボールをフロントコートに進めなければならない。'
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
            },
            ja: {
                summary: '8秒。',
                fullText: 'Section III—Eight-Second Rule. チームはバックコート内で8秒以上連続してボールをコントロールすることはできない。'
            }
        }
    },

    // --- FOULS ---
    {
        id: 'personal-foul',
        title: { ko: '개인 파울 제한 (5반칙)', en: 'Personal Foul limit', ja: '個人ファウル制限（5ファウル）' },
        category: 'Fouls',
        description: { ko: '퇴장 당하기 전까지 허용되는 파울 수.', en: 'Maximum fouls before disqualification.', ja: '退場になるまでに許容されるファウル数。' },
        fiba2025: {
            ko: {
                summary: '5개 (개인 파울 + 테크니컬 파울 합산).',
                fullText: '제40조: 개인 파울 및 테크니컬 파울을 합하여 5개의 파울을 범한 선수는 심판에게 통보를 받아야 하며 즉시 경기를 떠나야 한다.'
            },
            en: {
                summary: '5 Fouls (Personal + Technical combined).',
                fullText: 'Article 40: A player who has committed 5 fouls, personal and/or technical, shall be informed thereof by an official and must leave the game immediately.'
            },
            ja: {
                summary: '5回（個人ファウル＋テクニカルファウル合算）。',
                fullText: '第40条：個人ファウルおよびテクニカルファウルを合わせて5回のファウルを犯したプレーヤーは、審判から通告を受け、直ちに試合を去らなければならない。'
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
            },
            ja: {
                summary: '6回個人ファウル。テクニカルは別途計算（2回で退場）。',
                fullText: 'Section I—A Player Shall Not: プレーヤーは6回目の個人ファウルを受けると試合から失格となる。'
            }
        }
    },
    {
        id: 'unsportsmanlike-foul',
        title: { ko: 'U-파울 / 플래그런트 파울', en: 'Unsportsmanlike / Flagrant Foul', ja: 'アンスポーツマンライクファウル / フレグラントファウル' },
        category: 'Fouls',
        description: { ko: '과도하거나 농구와 무관한 접촉.', en: 'Excessive or non-basketball contact.', ja: '過度またはバスケットボールに関係のない接触。' },
        fiba2025: {
            ko: {
                summary: 'U-파울. C1: 정당한 농구 플레이 아님. C2: 과도한 접촉. C3: 속공 저지. C4: 클리어 패스. C5: 공중 위험 행위.',
                fullText: '제37조: 언스포츠맨라이크 파울은 심판이 판단하기에 다음과 같은 선수 접촉 파울이다: 규칙의 정신과 의도 내에서 공을 직접 플레이하려는 정당한 시도가 없는 접촉...'
            },
            en: {
                summary: 'U-Foul. C1: Not playing ball. C2: Excessive. C3: Transition contact. C4: Clear path. C5: Airborne dangerous.',
                fullText: 'Article 37: An unsportsmanlike foul is a player contact foul which, in the judgement of a referee is: Contact with an opponent and not legitimately attempting to directly play the ball within the spirit and intent of the rules...'
            },
            ja: {
                summary: 'U-ファウル。C1：正当なプレーではない。C2：過度な接触。C3：速攻阻止。C4：クリアパス。C5：空中での危険行為。',
                fullText: '第37条：アンスポーツマンライクファウルは、審判の判断において次のような接触ファウルである：規則の精神と意図の範囲内でボールを直接プレーしようとする正当な試みがない接触など。'
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
            },
            ja: {
                summary: 'フレグラント1（不必要）vs フレグラント2（不必要かつ過度）。',
                fullText: 'Section IV—Flagrant Foul. 罰則1：不必要な接触。罰則2：不必要かつ過度な接触。フレグラント2は自動退場となる。'
            }
        }
    },
    {
        id: 'technical-foul',
        title: { ko: '테크니컬 파울', en: 'Technical Foul', ja: 'テクニカルファウル' },
        category: 'Conduct',
        description: { ko: '신체 접촉이 없는 행동 관련 파울.', en: 'Non-contact behavioral foul.', ja: '身体接触のない行動に関するファウル。' },
        fiba2025: {
            ko: {
                summary: '자유투 1개 + 공격권 (사이드라인).',
                fullText: '제36조: 테크니컬 파울은 행동적인 성격의 비접촉 파울이다... 벌칙: 자유투 1개. 경기는 팀의 프런트코트 스로인 라인에서 스로인으로 재개된다.'
            },
            en: {
                summary: '1 Free Throw + Possession (Side out).',
                fullText: 'Article 36: A technical foul is a player non-contact foul of a behavioural nature... Penalty: 1 free throw. The game shall be resumed with a throw-in from the throw-in line in the team\'s frontcourt.'
            },
            ja: {
                summary: 'フリースロー1本 + 所有権（サイドライン）。',
                fullText: '第36条：テクニカルファウルは、行動的性格の非接触ファウルである... 罰則：フリースロー1本。試合はチームのフロントコートのスローインラインからのスローインで再開される。'
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
            },
            ja: {
                summary: 'フリースロー1本。試合は中断された地点から再開。',
                fullText: 'Section V—Technical Fouls. 罰則：フリースロー1本。プレーは中断された地点から再開される。（注：タイムアウト超過はテクニカルだが所有権は維持）。'
            }
        }
    },

    // --- GENERAL ---
    {
        id: 'timeouts',
        title: { ko: '타임아웃 (작전타임)', en: 'Timeouts', ja: 'タイムアウト' },
        category: 'General',
        description: { ko: '경기 중단 요청.', en: 'Stopping the game.', ja: '試合の中断要請。' },
        fiba2025: {
            ko: {
                summary: '전반 2회, 후반 3회. 감독만 요청 가능. 데드볼 상황에서만.',
                fullText: '제18조: 타임아웃은 주감독 또는 제1조감독의 요청에 의한 경기 중단이다. 각 타임아웃은 1분간 지속된다.'
            },
            en: {
                summary: '2 in 1st half, 3 in 2nd half. ONLY Coach can call it. Dead ball only.',
                fullText: 'Article 18: A time-out is an interruption of the game requested by the head coach or first assistant coach. Each time-out shall last 1 minute.'
            },
            ja: {
                summary: '前半2回、後半3回。監督のみ要請可能。デッドボール時のみ。',
                fullText: '第18条：タイムアウトはヘッドコーチまたはアシスタントコーチの要請による試合の中断である。各タイムアウトは1分間続く。'
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
            },
            ja: {
                summary: '1試合7回。選手がボール保持中に要請可能。',
                fullText: 'Section VI—Timeouts. 正規のタイムアウトは75秒である。選手はボールを確実にコントロールしている時にタイムアウトを要請できる。'
            }
        }
    },
    {
        id: 'jump-ball',
        title: { ko: '점프볼 / 소유권 화살표', en: 'Jump Ball / Possession Arrow', ja: 'ジャンプボール / ポゼッションアロー' },
        category: 'General',
        description: { ko: '헬드 볼 상황 해결 방식.', en: 'How held balls are resolved.', ja: 'ヘルドボール状況の解決方法。' },
        fiba2025: {
            ko: {
                summary: '교대 소유권 화살표 사용. 점프볼은 경기 시작 때만.',
                fullText: '제12조: 점프볼은 심판이 센터 서클에서 2명의 상대 선수 사이로 공을 토스할 때 발생한다. 그 외 모든 헬드 볼 상황에서는 교대 소유권 절차를 사용한다.'
            },
            en: {
                summary: 'Alternating Possession Arrow. Jump ball only at start of game.',
                fullText: 'Article 12: A jump ball occurs when an official tosses the ball in the centre circle between any 2 opponents. In all other held ball situations, teams will use the alternating possession procedure.'
            },
            ja: {
                summary: 'オルタネイティング・ポゼッション・アローを使用。ジャンプボールは試合開始時のみ。',
                fullText: '第12条：ジャンプボールは、審判がセンターサークルで2人の相手プレーヤーの間にボールをトスした時に発生する。その他のすべてのヘルドボールの状況では、オルタネイティング・ポゼッションの手順を使用する。'
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
            },
            ja: {
                summary: 'すべてのヘルドボール状況で実際のジャンプボールを実施。',
                fullText: 'Section VI—Held Ball. ヘルドボールは2人の相手プレーヤーが片手または両手でボールをしっかりと掴んでいる時に発生する... 関係する2人のプレーヤーの間でジャンプボールが行われる。'
            }
        }
    }
];
