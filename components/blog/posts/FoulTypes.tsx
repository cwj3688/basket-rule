import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, AlertCircle } from 'lucide-react';
import { Locale } from '@/i18n-config';

interface ContentProps {
    lang: Locale;
}

const Ko = ({ lang }: ContentProps) => (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
            <Link href={`/${lang}/blog`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                블로그 목록으로
            </Link>
            <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-red-600 bg-red-100 hover:bg-red-200">규칙 해설</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                농구 파울의 종류 총정리: <br className="hidden md:inline" />
                <span className="text-primary">이건 왜 자유투 2개죠?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                파울이라고 다 같은 파울이 아닙니다. 어떤 건 사이드라인 아웃, 어떤 건 자유투, 심지어 퇴장까지! 농구 코트 위 다양한 반칙의 세계를 정리해 드립니다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 퍼스널 파울 (Personal Foul)</h2>
            <p>
                경기 중 선수끼리의 신체 접촉으로 인한 일반적인 반칙입니다.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li><strong>푸싱, 홀딩, 블로킹, 차징</strong> 등이 포함됩니다.</li>
                <li><strong>페널티:</strong> 파울 당한 팀이 슛 동작 중이었다면 자유투(2구 또는 3구), 아니면 사이드라인/베이스라인 아웃.</li>
                <li><strong>팀 파울:</strong> 쿼터당 팀 파울 개수(보통 4개)를 넘으면 슛 동작이 아니어도 자유투 2개를 줍니다.</li>
                <li><strong>5반칙 퇴장:</strong> 한 선수가 5개(NBA는 6개)의 퍼스널 파울을 범하면 그 경기는 더 이상 뛸 수 없습니다.</li>
            </ul>

            <h2>2. 언스포츠맨라이크 파울 (U-Foul)</h2>
            <p>
                스포츠 정신에 위배되는 반칙입니다. 예전에는 '인텐셔널 파울'이라고 불렸습니다.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border border-red-100 dark:border-red-900/50">
                <h3 className="text-red-800 dark:text-red-300 font-semibold mt-0 mb-2">U-파울 기준</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-red-700 dark:text-red-200">
                    <li>공을 플레이하려는 정당한 노력이 없는 접촉</li>
                    <li>속공 상황에서 수비자가 뒤/옆에서 일으키는 접촉 (C1~C5 기준 존재)</li>
                    <li>과도하고 거친 접촉</li>
                </ul>
            </div>
            <p><strong>페널티:</strong> 자유투 2개 + 공격권 유지 (상대에게 공을 줌)</p>

            <h2>3. 테크니컬 파울 (T-Foul)</h2>
            <p>
                신체 접촉 없이 경기 운영을 방해하거나 비매너 행위를 했을 때 주어집니다.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li>심판에게 과도한 항의, 욕설</li>
                <li>공을 바닥에 강하게 내려치거나 발로 차는 행위</li>
                <li>상대를 조롱하는 행위</li>
                <li><strong>페널티:</strong> 자유투 1개 (공격권은 유지되지 않는 경우가 많으나 리그마다 다름)</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>요약</h2>
            <p>
                농구는 신사적인 스포츠를 지향합니다. 정당한 몸싸움은 허용되지만, 상대를 다치게 하거나 경기를 존중하지 않는 행위는 엄격하게 처벌받습니다.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=foul`}>
                <Button size="lg" className="rounded-full px-8 bg-red-600 hover:bg-red-700">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    {lang === 'ko' && '파울 규정 전체 보기'}
                    {lang === 'en' && 'View Foul Rules'}
                    {lang === 'ja' && 'ファウルルール全般を見る'}
                </Button>
            </Link>
        </div>
    </article>
);

const En = ({ lang }: ContentProps) => (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
            <Link href={`/${lang}/blog`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-red-600 bg-red-100 hover:bg-red-200">Rule Explain</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Guide to Basketball Fouls: <br className="hidden md:inline" />
                <span className="text-primary">Why 2 Free Throws?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Not all fouls are created equal. Some result in a throw-in, some in free throws, and some in ejection! Here's a summary of the various infractions on the court.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. Personal Foul</h2>
            <p>
                A common foul involving illegal physical contact with an opponent.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li>Includes <strong>Pushing, Holding, Blocking, Charging</strong>.</li>
                <li><strong>Penalty:</strong> Free throws (2 or 3) if in the act of shooting, otherwise out-of-bounds.</li>
                <li><strong>Team Foul:</strong> If the team exceeds the foul limit (usually 4) per quarter, 2 free throws are awarded even for non-shooting fouls.</li>
                <li><strong>Foul Out:</strong> A player with 5 fouls (6 in NBA) is disqualified from the game.</li>
            </ul>

            <h2>2. Unsportsmanlike Foul (U-Foul)</h2>
            <p>
                A foul that violates the spirit of the game. Previously known as 'Intentional Foul'.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border border-red-100 dark:border-red-900/50">
                <h3 className="text-red-800 dark:text-red-300 font-semibold mt-0 mb-2">U-Foul Criteria</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-red-700 dark:text-red-200">
                    <li>Contact with no legitimate attempt to play the ball</li>
                    <li>Contact from behind/side during a fast break</li>
                    <li>Excessive, hard contact</li>
                </ul>
            </div>
            <p><strong>Penalty:</strong> 2 Free Throws + Possession</p>

            <h2>3. Technical Foul (T-Foul)</h2>
            <p>
                Awarded for non-contact behavioral infractions.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li>Disrespectful communication with officials (Referees)</li>
                <li>Slamming the ball or kicking it</li>
                <li>Taunting opponents</li>
                <li><strong>Penalty:</strong> 1 Free Throw (Possession rules vary by league)</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>Summary</h2>
            <p>
                Basketball aims to be a gentleman's sport. Physicality is allowed, but hurting opponents or disrespecting the game is penalized strictly.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=foul`}>
                <Button size="lg" className="rounded-full px-8 bg-red-600 hover:bg-red-700">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    View Foul Rules
                </Button>
            </Link>
        </div>
    </article>
);

const Ja = ({ lang }: ContentProps) => (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
            <Link href={`/${lang}/blog`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                ブログ一覧に戻る
            </Link>
            <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-red-600 bg-red-100 hover:bg-red-200">ルール解説</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                バスケのファウル種類総まとめ: <br className="hidden md:inline" />
                <span className="text-primary">なぜフリースロー2本？</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                ファウルにも色々あります。スローインになるもの、フリースローになるもの、そして退場になるものまで！コート上の反則を整理します。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. パーソナルファウル (Personal Foul)</h2>
            <p>
                選手同士の不当な体の接触による一般的な反則です。
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li><strong>プッシング、ホールディング、ブロッキング、チャージング</strong>などが含まれます。</li>
                <li><strong>ペナルティ:</strong> シュート動作中のファウルならフリースロー（2本または3本）、そうでなければスローイン。</li>
                <li><strong>チームファウル:</strong> クォーターごとのチームファウル（通常4つ）を超えると、シュート動作でなくてもフリースロー2本が与えられます。</li>
                <li><strong>5ファウル退場:</strong> 1人の選手が5回（NBAは6回）ファウルすると退場になります。</li>
            </ul>

            <h2>2. アンスポーツマンライクファウル (U-Foul)</h2>
            <p>
                スポーツマンシップに反する反則です。以前は「インテンショナルファウル」と呼ばれていました。
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border border-red-100 dark:border-red-900/50">
                <h3 className="text-red-800 dark:text-red-300 font-semibold mt-0 mb-2">Uファウルの基準</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-red-700 dark:text-red-200">
                    <li>ボールに対する正当なプレイの意図がない接触</li>
                    <li>速攻での後ろや横からの接触</li>
                    <li>過度で危険な接触</li>
                </ul>
            </div>
            <p><strong>ペナルティ:</strong> フリースロー2本 + 攻撃権保持</p>

            <h2>3. テクニカルファウル (T-Foul)</h2>
            <p>
                身体接触はなく、試合進行を妨げたりマナー違反があった場合に与えられます。
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li>審判への過度な抗議、暴言</li>
                <li>ボールを叩きつけたり蹴る行為</li>
                <li>相手を挑発する行為</li>
                <li><strong>ペナルティ:</strong> フリースロー1本（リーグにより攻撃権の扱いが異なる）</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>まとめ</h2>
            <p>
                バスケットボールは紳士のスポーツです。正当なコンタクトは許されますが、相手を傷つけたりリスペクトを欠く行為は厳しく罰せられます。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=foul`}>
                <Button size="lg" className="rounded-full px-8 bg-red-600 hover:bg-red-700">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    ファウルルール全般を見る
                </Button>
            </Link>
        </div>
    </article>
);

export const FoulTypes = {
    ko: Ko,
    en: En,
    ja: Ja
};
