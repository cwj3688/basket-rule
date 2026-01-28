import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen } from 'lucide-react';
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">기초 가이드</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                농구 트래블링 완전 정복: <br className="hidden md:inline" />
                <span className="text-primary">피벗 풋을 알면 자유로워진다</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                농구를 처음 시작할 때 가장 많이 듣는 지적, 바로 "워킹!"(트래블링)입니다. 발을 몇 번 뗐는지만 세고 계신가요? 트래블링의 핵심은 발자국 수가 아니라 '피벗 풋'에 있습니다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 트래블링의 핵심: 피벗 풋 (Pivot Foot)</h2>
            <p>
                트래블링 규정을 이해하려면 가장 먼저 '피벗 풋'이 무엇인지 알아야 합니다. 공을 잡고 멈춰 섰을 때 중심이 되는 발을 말합니다.
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-lg font-semibold mt-0 mb-2">피벗 풋의 규칙</h3>
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li>피벗 풋은 <strong>코트에서 떨어질 수는 있지만, 다시 코트에 닿을 수는 없습니다</strong> (공을 손에서 떠나보내기 전까지).</li>
                    <li>피벗 풋을 축으로 다른 발(프리 풋)은 얼마든지 움직일 수 있습니다.</li>
                    <li>피벗 풋이 끌리면(Drag) 트래블링입니다.</li>
                </ul>
            </div>

            <h2>2. 드리블 시작 vs 슛/패스</h2>
            <p>
                많은 분들이 헷갈려하는 부분입니다. 드리블을 시작할 때와 슛/패스를 할 때의 발 기준이 다릅니다.
            </p>
            <ul>
                <li><strong>드리블 시작 시:</strong> 공이 손에서 떠나기 <strong>전</strong>에 피벗 풋이 떨어지면 트래블링입니다.</li>
                <li><strong>슛/패스 시:</strong> 점프를 위해 피벗 풋을 뗄 수 있습니다. 단, 다시 착지하기 전에 공을 놓아야 합니다.</li>
            </ul>
            <p>
                즉, 돌파하려고 발을 먼저 떼고 공을 튕기면 트래블링이 선언될 확률이 높습니다. <strong>"공을 먼저 튀기고 발을 뗀다"</strong>를 습관화하세요.
            </p>

            <h2>3. 자주 하는 실수 BEST 3</h2>
            <ol>
                <li><strong>점프 스탑 후 다시 점프:</strong> 두 발로 동시에 착지한 경우(양발 피벗 가능), 한 발을 떼는 순간 나머지 발이 피벗 풋이 됩니다. 그 상태에서 피벗 풋까지 떼고 점프했다가 아무것도 안 하고 착지하면 트래블링입니다.</li>
                <li><strong>오픈 스텝 출발:</strong> 수비를 제치려고 발을 길게 뻗을 때, 공보다 발이 먼저 떨어지는 경우입니다.</li>
                <li><strong>피벗 발 끌기:</strong> 피벗을 하다가 중심을 잃고 피벗 풋이 '지익' 끌리면 바로 휘슬이 불립니다.</li>
            </ol>

            <hr className="my-8 border-muted" />

            <h2>마치며</h2>
            <p>
                트래블링은 습관입니다. 처음에 올바른 스텝을 익히지 않으면 나중에 교정하기가 훨씬 어렵습니다. 개더 스텝과 같은 최신 트렌드를 익히는 것도 좋지만, 기본 피벗 풋 활용을 먼저 마스터해보세요.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules/traveling`}>
                <Button size="lg" className="rounded-full px-8">
                    <BookOpen className="mr-2 h-5 w-5" />
                    트래블링 규정 상세 보기
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">Basic Guide</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Mastering Traveling Rules: <br className="hidden md:inline" />
                <span className="text-primary">Understanding Pivot Feet</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                "Traveling!" is the most common violation called on beginners. Are you just counting steps? The core of traveling is not the number of steps, but the 'Pivot Foot'.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. The Core: Pivot Foot</h2>
            <p>
                To understand traveling, you must first understand the 'Pivot Foot'. It's the foot that remains anchored when you hold the ball.
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-lg font-semibold mt-0 mb-2">Pivot Rules</h3>
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li>The pivot foot <strong>may be lifted, but cannot return to the floor</strong> while holding the ball.</li>
                    <li>You can move the other foot (free foot) as much as you like as long as the pivot foot stays planted.</li>
                    <li>Dragging the pivot foot is traveling.</li>
                </ul>
            </div>

            <h2>2. Starting Dribble vs Shoot/Pass</h2>
            <p>
                This is where most confusion happens. The rules are different for starting a dribble versus shooting or passing.
            </p>
            <ul>
                <li><strong>Starting a Dribble:</strong> The ball must leave your hand <strong>BEFORE</strong> the pivot foot lifts.</li>
                <li><strong>Shooting/Passing:</strong> You CAN lift the pivot foot to jump. However, you must release the ball before you land.</li>
            </ul>
            <p>
                In short: If you lift your foot and then bounce the ball, it's a travel. Make a habit of <strong>"Ball down, then foot moves."</strong>
            </p>

            <hr className="my-8 border-muted" />

            <h2>Conclusion</h2>
            <p>
                Mastering the pivot foot is essential. Focus on establishing a solid pivot before worrying about advanced moves like the gather step.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules/traveling`}>
                <Button size="lg" className="rounded-full px-8">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View Traveling Rules
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">基本ガイド</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                トラベリング完全攻略: <br className="hidden md:inline" />
                <span className="text-primary">ピボットフットを理解しよう</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                初心者が一番よく言われる「ウォーキング（トラベリング）」。歩数だけ数えていませんか？トラベリングの核心は「ピボットフット」にあります。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 核心：ピボットフット (Pivot Foot)</h2>
            <p>
                トラベリングを理解するには、まず「ピボットフット（軸足）」を知る必要があります。
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <h3 className="text-lg font-semibold mt-0 mb-2">ピボットフットのルール</h3>
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li>ピボットフットは<strong>床から離れても良いが、ボールを持ったまま再び床についてもいけません</strong>。</li>
                    <li>ピボットフットを軸に、もう片方の足（フリーフット）は自由に動かせます。</li>
                    <li>ピボットフットを引きずると（Drag）トラベリングです。</li>
                </ul>
            </div>

            <h2>2. ドリブル開始 vs シュート/パス</h2>
            <ul>
                <li><strong>ドリブル開始時:</strong> ボールが手から離れる<strong>前</strong>にピボットフットが離れてはいけません。</li>
                <li><strong>シュート/パス時:</strong> ジャンプのためにピボットフットを離すことは可能です。ただし、着地する前にボールを離さなければなりません。</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>まとめ</h2>
            <p>
                ピボットフットをマスターすることが基本です。ギャザーステップなどの最新トレンドを学ぶ前に、まずはピボットを確実に使えるようになりましょう。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules/traveling`}>
                <Button size="lg" className="rounded-full px-8">
                    <BookOpen className="mr-2 h-5 w-5" />
                    トラベリングルール詳細を見る
                </Button>
            </Link>
        </div>
    </article>
);

export const TravelingGuide = {
    ko: Ko,
    en: En,
    ja: Ja
};
