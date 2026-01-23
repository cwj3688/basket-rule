# 심판 수신호 (Signals) 문서

이 문서는 BasketRule 애플리케이션에서 사용되는 심판 수신호 이미지의 파일 구조와 매핑 정보를 설명합니다. 모든 이미지는 `public/images/signals` 디렉토리에 카테고리별로 분류되어 저장됩니다.

## 폴더 구조 (Folder Hierarchy)

수신호 이미지는 `public/images/signals/` 아래 다음과 같은 하위 폴더에 정리되어 있습니다:

- `game-clock` (경기 시계)
- `scoring` (득점)
- `substitution-and-time-out` (교체 및 타임아웃)
- `informative` (정보 전달)
- `violations` (바이올레이션)
- `number-of-players` (선수 번호)
- `fouls` (파울)
- `special-fouls` (특수 파울)
- `free-throw-penalty-administration` (자유투 벌칙 진행)
- `free-throw-administration` (자유투 진행)

## 수신호 매핑 테이블 (Signal Mapping Table)

다음 표는 신호 카테고리, ID, 그리고 매핑된 이미지 파일명과 대상 폴더를 보여줍니다.

| 카테고리 (Category) | 신호 ID (Signal ID) | 파일명 (Filename) | 대상 폴더 (Target Folder) |
|-------------------|-------------------|-------------------|-------------------------|
| **Game Clock** | stop-the-clock | `stop-the-clock.jpg` | game-clock |
| **Game Clock** | stop-the-clock-foul | `stop-the-clock-foul.jpg` | game-clock |
| **Game Clock** | start-clock | `start-clock.jpg` | game-clock |
| **Scoring** | 1-point | `1-point.jpg` | scoring |
| **Scoring** | 2-points | `2-points.jpg` | scoring |
| **Scoring** | 3-points-attempt | `3-points-attempt.jpg` | scoring |
| **Scoring** | 3-points-successful | `3-points-successful.jpg` | scoring |
| **Substitution & Time‑out** | substitution | `substitution.jpg` | substitution-and-time-out |
| **Substitution & Time‑out** | beckoning-in | `beckoning-in.jpg` | substitution-and-time-out |
| **Substitution & Time‑out** | charged-timeout | `charged-timeout.jpg` | substitution-and-time-out |
| **Substitution & Time‑out** | media-timeout | `media-timeout.jpg` | substitution-and-time-out |
| **Informative** | cancel-score | `cancel-score.jpg` | informative |
| **Informative** | visible-count | `visible-count.jpg` | informative |
| **Informative** | communication | `communication.jpg` | informative |
| **Informative** | shot-clock-reset | `shot-clock-reset.jpg` | informative |
| **Informative** | direction-of-play | `direction-of-play.jpg` | informative |
| **Informative** | held-ball | `held-ball.jpg` | informative |
| **Violations** | travelling | `travelling.jpg` | violations |
| **Violations** | double-dribble | `double-dribble.jpg` | violations |
| **Violations** | carrying | `carrying.jpg` | violations |
| **Violations** | 3-seconds | `3-seconds.jpg` | violations |
| **Violations** | 5-seconds | `5-seconds.jpg` | violations |
| **Violations** | 8-seconds | `8-seconds.jpg` | violations |
| **Violations** | 24-seconds | `24-seconds.jpg` | violations |
| **Violations** | ball-return | `ball-return.jpg` | violations |
| **Violations** | foot-ball | `foot-ball.jpg` | violations |
| **Number of Players** | number-00 | `number-00.jpg` | number-of-players |
| **Number of Players** | number-0 | `number-0.jpg` | number-of-players |
| **Number of Players** | number-1-5 | `number-1-5.jpg` | number-of-players |
| **Number of Players** | number-6-10 | `number-6-10.jpg` | number-of-players |
| **Number of Players** | number-11-15 | `number-11-15.jpg` | number-of-players |
| **Number of Players** | number-16 | `number-16.jpg` | number-of-players |
| **Number of Players** | number-24 | `number-24.jpg` | number-of-players |
| **Number of Players** | number-40 | `number-40.jpg` | number-of-players |
| **Number of Players** | number-62 | `number-62.jpg` | number-of-players |
| **Number of Players** | number-78 | `number-78.jpg` | number-of-players |
| **Number of Players** | number-99 | `number-99.jpg` | number-of-players |
| **Fouls** | holding | `holding.jpg` | fouls |
| **Fouls** | blocking | `blocking.jpg` | fouls |
| **Fouls** | pushing | `pushing.jpg` | fouls |
| **Fouls** | handchecking | `handchecking.jpg` | fouls |
| **Fouls** | illegal-use-of-hands | `illegal-use-of-hands.jpg` | fouls |
| **Fouls** | charging-with-ball | `charging-with-ball.jpg` | fouls |
| **Fouls** | illegal-contact-hand | `illegal-contact-hand.jpg` | fouls |
| **Fouls** | excessive-swinging-elbow | `excessive-swinging-elbow.jpg` | fouls |
| **Fouls** | hit-head | `hit-head.jpg` | fouls |
| **Fouls** | foul-by-team-control | `foul-by-team-control.jpg` | fouls |
| **Fouls** | foul-on-act-of-shooting | `foul-on-act-of-shooting.jpg` | fouls |
| **Fouls** | foul-not-on-act-of-shooting | `foul-not-on-act-of-shooting.jpg` | fouls |
| **Special Fouls** | double-foul | `double-foul.jpg` | special-fouls |
| **Special Fouls** | technical-foul | `technical-foul.jpg` | special-fouls |
| **Special Fouls** | unsportsmanlike-foul | `unsportsmanlike-foul.jpg` | special-fouls |
| **Special Fouls** | disqualifying-foul | `disqualifying-foul.jpg` | special-fouls |
| **Free‑Throw Penalty Administration** | after-foul-without-free-throw | `after-foul-without-free-throw.png` | free-throw-penalty-administration |
| **Free‑Throw Penalty Administration** | after-foul-by-team-in-control-of-ball | `after-foul-by-team-in-control-of-ball.png` | free-throw-penalty-administration |
| **Free‑Throw Penalty Administration** | 1 free throw | `free-throw-1.jpg` | free-throw-administration |
| **Free‑Throw Penalty Administration** | 2 free throws | `free-throw-2.jpg` | free-throw-administration |
| **Free‑Throw Penalty Administration** | 3 free throws | `free-throw-3.jpg` | free-throw-administration |
| **Free‑Throw Administration – Lead Official** | 1 free throw (horizontal) | `free-throw-lead-1.jpg` | free-throw-administration |
| **Free‑Throw Administration – Lead Official** | 2 free throws (horizontal) | `free-throw-lead-2.jpg` | free-throw-administration |
| **Free‑Throw Administration – Lead Official** | 3 free throws (horizontal) | `free-throw-lead-3.jpg` | free-throw-administration |
| **Free‑Throw Administration – Trail / Centre Official** | 1 free throw (index) | `free-throw-trail-1.jpg` | free-throw-administration |
| **Free‑Throw Administration – Trail / Centre Official** | 2 free throws (both hands) | `free-throw-trail-2.jpg` | free-throw-administration |
| **Free‑Throw Administration – Trail / Centre Official** | 3 free throws (both hands) | `free-throw-trail-3.jpg` | free-throw-administration |
