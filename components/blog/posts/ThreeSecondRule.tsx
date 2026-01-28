import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
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
                <Badge variant="secondary" className="text-green-600 bg-green-100 hover:bg-green-200">규칙 해설</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                3초 룰이 뭔가요? <br className="hidden md:inline" />
                <span className="text-primary">페인트존 생존기</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                "박스 안에서 나오세요!" 공격하다가 이런 소리 들어보셨나요? 농구 코트의 직사각형 구역(페인트존)은 가장 치열한 전장입니다. 이곳에서의 머무름을 제한하는 3초 룰에 대해 알아봅시다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 공격자 3초 룰 (Offensive 3 Seconds)</h2>
            <p>
                FIBA(국제농구연맹) 및 KBL, NBA 등 거의 모든 리그에 존재하는 규칙입니다.
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li><strong>누가?</strong> 공격 팀 선수가</li>
                    <li><strong>어디서?</strong> 상대방 제한구역(페인트존) 안에</li>
                    <li><strong>얼마나?</strong> 연속해서 3초를 초과하여 머물 때</li>
                </ul>
            </div>
            <p>
                단, 슛을 던지는 동작 중이거나, 3초 미만으로 머물다가 밖으로 드리블하여 나가는 중이라면 카운트되지 않습니다. 한 발이라도 라인 밖을 밟으면 리셋됩니다.
            </p>

            <h2>2. 수비자 3초 룰 (Defensive 3 Seconds)</h2>
            <p>
                이건 <strong>NBA</strong>와 <strong>KBL</strong>에만 있는 독특한 규칙입니다 (FIBA에는 없습니다).
            </p>
            <p>
                수비자도 페인트존 안에 3초 이상 머물 수 없습니다. 단, <strong>팔을 뻗어 닿을 수 있는 거리(약 팔 길이 하나)</strong> 내에 적극적으로 수비하고 있는 공격자가 있다면 3초 룰이 적용되지 않습니다.
                즉, "지역 방어"를 제한하고 맨투맨 수비를 유도하기 위한 규칙입니다.
            </p>

            <h2>3. 3초 카운트 리셋 팁</h2>
            <ul>
                <li>페인트존 밖으로 <strong>두 발이 모두</strong> 나가야 리셋됩니다. (한 발만 뺐다 넣는 건 안 됨)</li>
                <li>팀 동료가 슛을 던지는 순간 카운트는 멈춥니다.</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>마치며</h2>
            <p>
                빅맨들의 숙명과도 같은 3초 룰. 2.9초마다 스텝을 밟으며 페인트존을 드나드는 '탭 댄스'를 연습해보세요. 공간을 넓게 쓰는 것이 현대 농구의 핵심입니다.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=3%20seconds`}>
                <Button size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                    <Clock className="mr-2 h-5 w-5" />
                    {lang === 'ko' && '시간 제한 규칙 더보기'}
                    {lang === 'en' && 'View Time Limits'}
                    {lang === 'ja' && '時間制限ルールを見る'}
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
                <Badge variant="secondary" className="text-green-600 bg-green-100 hover:bg-green-200">Rule Explain</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                What is the 3-Second Rule? <br className="hidden md:inline" />
                <span className="text-primary">Surviving the Paint</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                "Get out of the lane!" Have you heard this while playing? The rectangular area (paint zone) is the fiercest battlefield. Let's learn about the 3-second rule that limits staying in this zone.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. Offensive 3 Seconds</h2>
            <p>
                Existing in almost all leagues including FIBA, NBA, etc.
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li><strong>Who?</strong> An offensive player</li>
                    <li><strong>Where?</strong> Inside the opponent's restricted area (paint zone)</li>
                    <li><strong>How long?</strong> Staying for more than 3 consecutive seconds</li>
                </ul>
            </div>
            <p>
                However, allowance is made if the player attempts a shot, or is dribbling out of the paint. Establishing one foot outside the paint resets the count.
            </p>

            <h2>2. Defensive 3 Seconds</h2>
            <p>
                This is a unique rule found in the <strong>NBA</strong> and <strong>KBL</strong> (Not in FIBA).
            </p>
            <p>
                Defenders also cannot stay in the paint for more than 3 seconds. However, if they are <strong>actively guarding an opponent within arm's reach</strong>, the count does not apply.
                This rule exists to limit zone defenses and encourage man-to-man coverage.
            </p>

            <h2>3. Resetting the Count</h2>
            <ul>
                <li><strong>Both feet</strong> must clear the paint to reset the count. (Just stepping one foot out doesn't count)</li>
                <li>The count stops the moment a teammate shoots the ball.</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>Conclusion</h2>
            <p>
                The 3-second rule is the destiny of big men. Practice the 'tap dance' of stepping in and out every 2.9 seconds. Spacing is key in modern basketball.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=3%20seconds`}>
                <Button size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                    <Clock className="mr-2 h-5 w-5" />
                    View Time Limits
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
                <Badge variant="secondary" className="text-green-600 bg-green-100 hover:bg-green-200">ルール解説</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                3秒ルールとは？ <br className="hidden md:inline" />
                <span className="text-primary">ペイントエリアでの生存戦略</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                「キーの中に入りすぎ！」と言われたことはありませんか？長方形のエリア（ペイントゾーン）は最も激しい戦場です。ここに留まることを制限する3秒ルールについて学びましょう。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. オフェンス3秒ルール</h2>
            <p>
                FIBA（国際バスケットボール連盟）やNBAなど、ほぼすべてのリーグに存在するルールです。
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
                <ul className="m-0 pl-4 list-disc space-y-2">
                    <li><strong>誰が？</strong> 攻撃チームの選手が</li>
                    <li><strong>どこで？</strong> 相手の制限区域（ペイントゾーン）内に</li>
                    <li><strong>どれくらい？</strong> 連続して3秒を超えて留まるとき</li>
                </ul>
            </div>
            <p>
                ただし、シュート動作中や、ペイントの外へドリブルで出る途中であればカウントされません。片足でもラインの外に出ればリセットされます。
            </p>

            <h2>2. ディフェンス3秒ルール</h2>
            <p>
                これは<strong>NBA</strong>独自のルールです（FIBAにはありません）。
            </p>
            <p>
                守備側も3秒以上ペイント内に留まることはできません。ただし、<strong>手の届く範囲（アームズレングス）内で積極的にマークしている</strong>場合は適用されません。
                ゾーンディフェンスを制限し、マンツーマンを促進するためのルールです。
            </p>

            <h2>3. 3秒カウントのリセット</h2>
            <ul>
                <li><strong>両足</strong>がペイントの外に出る必要があります。（片足だけ出すのはNG）</li>
                <li>チームメイトがシュートを放った瞬間にカウントは止まります。</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>まとめ</h2>
            <p>
                3秒ルールはビッグマンの宿命です。2.9秒ごとにステップを踏んで出入りする「タップダンス」を練習しましょう。スペーシングが現代バスケの鍵です。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/rules?q=3%20seconds`}>
                <Button size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                    <Clock className="mr-2 h-5 w-5" />
                    時間制限ルールを見る
                </Button>
            </Link>
        </div>
    </article>
);

export const ThreeSecondRule = {
    ko: Ko,
    en: En,
    ja: Ja
};
