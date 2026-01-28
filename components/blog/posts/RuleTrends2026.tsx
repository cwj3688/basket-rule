import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, TrendingUp } from 'lucide-react';
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
                <Badge variant="secondary" className="text-orange-600 bg-orange-100 hover:bg-orange-200">트렌드</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                2026년 농구 규칙 트렌드: <br className="hidden md:inline" />
                <span className="text-primary">무엇이 달라지고 있나?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                농구는 진화하고 있고, 규칙도 따라 변합니다. 개더 스텝(제로 스텝)의 정착부터 U-파울 기준의 강화까지, 2026년 현재 농구인들이 알아야 할 최신 트렌드를 정리합니다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. '개더 스텝 (제로 스텝)'의 완전한 정착</h2>
            <p>
                몇 년 전만 해도 논란의 중심이었던 '제로 스텝'이 이제는 완전히 자리를 잡았습니다.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6 border border-orange-100 dark:border-orange-900/50">
                <h3 className="text-orange-800 dark:text-orange-300 font-semibold mt-0 mb-2">핵심 포인트</h3>
                <p>
                    움직이면서 공을 잡는(Gather) 순간에 땅에 닿아 있는 발은 스텝 수에 포함되지 않습니다 (0스텝).<br />
                    이후 1, 2스텝을 더 밟을 수 있어 사실상 3걸음처럼 보이는 플레이가 가능합니다. 이를 활용한 유로스텝이나 스텝백이 필수 기술이 되었습니다.
                </p>
            </div>

            <h2>2. U-파울(언스포츠맨라이크) 기준 강화</h2>
            <p>
                선수 보호와 경기의 흐름을 위해 U-파울이 더 엄격하게 적용되는 추세입니다.
            </p>
            <ul>
                <li><strong>트랜지션 상황:</strong> 속공을 저지하기 위해 옆이나 뒤에서 접촉하면 거의 자동적으로 U-파울입니다.</li>
                <li><strong>Clear Path:</strong> 이제는 심판들이 비디오 판독을 통해 '공과 바스켓 사이에 수비자가 있었는지'를 매우 칼같이 봅니다.</li>
            </ul>

            <h2>3. 플라핑(Flopping)에 대한 경고</h2>
            <p>
                심판을 속여 파울을 얻어내려는 과도한 액션(헐리웃 액션)에 대해 리그 차원에서 경고를 주거나 테크니컬 파울을 부과하는 빈도가 늘었습니다. 정정당당한 승부가 강조되고 있습니다.
            </p>

            <hr className="my-8 border-muted" />

            <h2>마치며</h2>
            <p>
                규칙을 알면 플레이가 보입니다. 단순히 "심판이 이상해"라고 불평하기보다, 변화하는 트렌드를 이해하고 나의 플레이에 적용해보는 것은 어떨까요? BasketRule이 여러분의 농구 지능(BQ) 향상을 돕겠습니다.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules`}>
                <Button size="lg" className="rounded-full px-8 bg-orange-600 hover:bg-orange-700">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    규칙 변경사항 더보기
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
                <Badge variant="secondary" className="text-orange-600 bg-orange-100 hover:bg-orange-200">Trends</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                2026 Basketball Rule Trends: <br className="hidden md:inline" />
                <span className="text-primary">What's Changing?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Basketball evolves, and rules follow. From the adoption of the gather step to stricter U-foul calls, here are the trends you need to know in 2026.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. The 'Gather Step' (Zero Step) is Here to Stay</h2>
            <p>
                Once controversial, the zero step is now a fundamental part of the game globally.
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6 border border-orange-100 dark:border-orange-900/50">
                <h3 className="text-orange-800 dark:text-orange-300 font-semibold mt-0 mb-2">Key Point</h3>
                <p>
                    The foot touching the floor when you gather the ball counts as "Step 0".<br />
                    You can take 2 more steps after this, allowing for extended moves like Euro-steps and step-backs that were effectively impossible under old rules.
                </p>
            </div>

            <h2>2. Stricter Unsportsmanlike Fouls (U-Fouls)</h2>
            <p>
                To protect players and maintain flow, U-fouls are being called more aggressively.
            </p>
            <ul>
                <li><strong>Transition Fouls:</strong> Contact from the side or behind to stop a fast break is almost automatically a U-foul.</li>
                <li><strong>Clear Path:</strong> Referees strictly use video review to check if a defender was between the ball and the basket.</li>
            </ul>

            <h2>3. Crackdown on Flopping</h2>
            <p>
                Leagues are increasingly penalizing players who simulate fouls to deceive referees. Expect more warnings and technical fouls for "Hollywood actions".
            </p>

            <hr className="my-8 border-muted" />

            <h2>Conclusion</h2>
            <p>
                Understanding the trends improves your game. Instead of complaining about calls, adapt your play to the modern standard. BasketRule is here to boost your Basketball IQ.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules`}>
                <Button size="lg" className="rounded-full px-8 bg-orange-600 hover:bg-orange-700">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    View More Rule Updates
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
                <Badge variant="secondary" className="text-orange-600 bg-orange-100 hover:bg-orange-200">トレンド</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                2026年バスケルールのトレンド: <br className="hidden md:inline" />
                <span className="text-primary">何が変わっているのか？</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                バスケは進化し、ルールも変わります。ギャザーステップ（ゼロステップ）の定着からUファウルの厳格化まで、2026年の最新トレンドを整理します。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 「ギャザーステップ（ゼロステップ）」の完全定着</h2>
            <p>
                かつて議論の的だったゼロステップは、今や完全に定着しました。
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg my-6 border border-orange-100 dark:border-orange-900/50">
                <h3 className="text-orange-800 dark:text-orange-300 font-semibold mt-0 mb-2">重要ポイント</h3>
                <p>
                    ボールを保持（ギャザー）した瞬間に地面についている足はステップ数に含まれません（0ステップ）。<br />
                    その後さらに1、2歩踏めるため、プレイの幅が大きく広がりました。
                </p>
            </div>

            <h2>2. アンスポーツマンライクファウル (Uファウル) の厳格化</h2>
            <p>
                選手保護と試合の流れを守るため、Uファウルはより厳しく判定されています。
            </p>
            <ul>
                <li><strong>速攻阻止:</strong> 速攻を止めるために横や後ろから接触すれば、ほぼ自動的にUファウルです。</li>
                <li><strong>クリアパス:</strong> ビデオ判定で、ボールとリングの間にディフェンダーがいたかどうかが厳密にチェックされます。</li>
            </ul>

            <h2>3. フロッピング（演技）への警告</h2>
            <p>
                審判を欺いてファウルを貰おうとする過度な演技（フロッピング）に対し、警告やテクニカルファウルが増えています。正々堂々とした勝負が求められます。
            </p>

            <hr className="my-8 border-muted" />

            <h2>まとめ</h2>
            <p>
                トレンドを理解すればプレイが変わります。ルールの変化に適応し、賢いプレイヤーを目指しましょう。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules`}>
                <Button size="lg" className="rounded-full px-8 bg-orange-600 hover:bg-orange-700">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    ルール変更をもっと見る
                </Button>
            </Link>
        </div>
    </article>
);

export const RuleTrends2026 = {
    ko: Ko,
    en: En,
    ja: Ja
};
