import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Video } from 'lucide-react';
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">판정 가이드</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                수비자가 점프했는데 파울? <br className="hidden md:inline" />
                <span className="text-primary">'실린더 룰'과 '수직성'의 원칙</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                "난 그냥 제자리에서 떴는데 왜 파울이야?" 억울한 순간 많으시죠. 심판이 비디오 판독(IRS)에서 확인하는 '실린더'와 '수직성'을 이해하면 억울함이 사라집니다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 내 공간은 어디까지인가? '실린더 룰'</h2>
            <p>
                모든 선수는 코트 위에 자신만의 가상의 원통(Cylinder) 공간을 가집니다.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li><strong>위쪽:</strong> 바닥에서 천장까지 무한대</li>
                <li><strong>앞쪽:</strong> 손바닥 위치까지</li>
                <li><strong>옆/뒤:</strong> 몸의 라인까지</li>
            </ul>
            <p>
                이 공간 안에서 수직으로 점프했다면, 공격자가 와서 부딪혀도 수비자의 반칙이 아닙니다. 오히려 공격자 파울일 수 있죠.
            </p>

            <h2>2. 수직성(Verticality): A지점에서 A지점으로</h2>
            <p>
                심판은 <strong>"A지점에서 떠서 A지점으로 착지했는가?"</strong>를 봅니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="text-green-700 dark:text-green-300 font-bold mb-2">✅ Legal (정상)</h3>
                    <p className="text-sm">수직으로 점프하여 팔을 수직으로 뻗음. 접촉 발생 시 정당한 수비.</p>
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h3 className="text-red-700 dark:text-red-300 font-bold mb-2">❌ Illegal (반칙)</h3>
                    <p className="text-sm">A지점에서 B지점(공격자 쪽)으로 점프하거나, 팔을 앞으로 휘두름(Swiping).</p>
                </div>
            </div>

            <hr className="my-8 border-muted" />

            <h2>3. 비디오 판독의 체크포인트</h2>
            <p>
                심판들은 느린 화면으로 다음을 봅니다:
                1. 수비발이 떨어진 위치가 공격자보다 앞인가?
                2. 공중에서 몸이 기울었는가?
                3. 팔이 수직 범위를 넘어 내려왔는가?
            </p>
            <p>
                가장 좋은 수비는 화려한 블록이 아니라, 견고한 <strong>수직성</strong>을 지키는 것입니다.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?tab=cases`}>
                <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                    <Video className="mr-2 h-5 w-5" />
                    판정 사례 영상 퀴즈 보기
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">Judging Guide</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Jumped Straight Up but Called a Foul? <br className="hidden md:inline" />
                <span className="text-primary">'Cylinder' & 'Verticality'</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                "I just jumped straight up!" We've all been there. Understanding what referees look for in 'Cylinder' and 'Verticality' will save you from unfair calls.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. Your Space: The 'Cylinder Rule'</h2>
            <p>
                Every player has a virtual cylinder of space on the court.
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li><strong>Up:</strong> Infinite space from the floor to the ceiling</li>
                <li><strong>Front:</strong> Up to the palms of the hands</li>
                <li><strong>Sides/Back:</strong> Defined by the body's frame</li>
            </ul>
            <p>
                If you jump vertically within this space and contact occurs, it's not a defensive foul. It might even be an offensive foul.
            </p>

            <h2>2. Verticality: Point A to Point A</h2>
            <p>
                Referees check: <strong>"Did they jump from A and land on A?"</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="text-green-700 dark:text-green-300 font-bold mb-2">✅ Legal</h3>
                    <p className="text-sm">Jumping vertically with arms extended straight up. Contact is considered effective defense.</p>
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h3 className="text-red-700 dark:text-red-300 font-bold mb-2">❌ Illegal</h3>
                    <p className="text-sm">Jumping from A to B (into the attacker), or swiping arms forward/down.</p>
                </div>
            </div>

            <hr className="my-8 border-muted" />

            <h2>3. Video Review Checkpoints</h2>
            <p>
                In slow motion, referees look for:
                1. Did the defender's feet leave the floor before the attacker entered their space?
                2. Did the body lean mid-air?
                3. Did arms break the vertical plane?
            </p>
            <p>
                Maintaining <strong>verticality</strong> is often better defense than chasing a highlight block.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?tab=cases`}>
                <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                    <Video className="mr-2 h-5 w-5" />
                    Watch Video Case Studies
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
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 hover:bg-blue-200">判定ガイド</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                真上に飛んだのにファウル？ <br className="hidden md:inline" />
                <span className="text-primary">「シリンダー」と「垂直性」の原則</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                「ただその場で飛んだだけなのに！」そんな経験ありませんか？審判がビデオ判定で確認する「シリンダー」と「垂直性」を理解すれば、無駄なファウルを防げます。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 自分の空間はどこまで？「シリンダールール」</h2>
            <p>
                すべての選手はコート上に自分だけの仮想の円筒（シリンダー）空間を持ちます。
            </p>
            <ul className="list-disc pl-4 space-y-2">
                <li><strong>上:</strong> 床から天井まで無限大</li>
                <li><strong>前:</strong> 手のひらの位置まで</li>
                <li><strong>横/後ろ:</strong> 体のラインまで</li>
            </ul>
            <p>
                この空間内で垂直にジャンプした場合、接触があってもディフェンスの反則ではありません。むしろオフェンスファウルの可能性があります。
            </p>

            <h2>2. 垂直性 (Verticality): A地点からA地点へ</h2>
            <p>
                審判は<strong>「A地点から飛んでA地点に着地したか？」</strong>を見ます。
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="border border-green-200 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="text-green-700 dark:text-green-300 font-bold mb-2">✅ Legal (正当)</h3>
                    <p className="text-sm">垂直に飛び、腕を真上に伸ばす。接触があっても正当な守備。</p>
                </div>
                <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h3 className="text-red-700 dark:text-red-300 font-bold mb-2">❌ Illegal (反則)</h3>
                    <p className="text-sm">A地点からB地点（オフェンス側）へ飛んだり、腕を振り下ろす行為。</p>
                </div>
            </div>

            <hr className="my-8 border-muted" />

            <h2>3. ビデオ判定のチェックポイント</h2>
            <p>
                審判はスロー映像で以下を確認します：
                1. ディフェンスがオフェンスより先に位置を占めたか？
                2. 空中で体が傾いていないか？
                3. 腕が垂直の範囲を超えていないか？
            </p>
            <p>
                最も良いディフェンスは、派手なブロックではなく、堅実な<strong>垂直性</strong>を保つことです。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?tab=cases`}>
                <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700">
                    <Video className="mr-2 h-5 w-5" />
                    判定事例クイズを見る
                </Button>
            </Link>
        </div>
    </article>
);

export const VideoReviewGuide = {
    ko: Ko,
    en: En,
    ja: Ja
};
