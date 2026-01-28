import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, ShieldAlert } from 'lucide-react';
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
                <Badge variant="secondary" className="text-purple-600 bg-purple-100 hover:bg-purple-200">심화 가이드</Badge>
                <span className="text-sm text-muted-foreground">2026년 1월 29일</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                블로킹 vs 오펜스 파울 (차징): <br className="hidden md:inline" />
                <span className="text-primary">충돌의 책임은 누구에게?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                공격자와 수비자가 쾅 부딪혔습니다. 누군가는 넘어졌고요. 심판의 휘슬은 어디를 향할까요? 50:50의 승부처, 블로킹과 차징의 경계를 파헤칩니다.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. 수비자의 권리: LGP (Legal Guarding Position)</h2>
            <p>
                모든 판단의 기준은 <strong>"수비자가 정당한 수비 위치를 먼저 잡았는가?"</strong>입니다.
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-100 dark:border-purple-900/50">
                <h3 className="text-purple-800 dark:text-purple-300 font-semibold mt-0 mb-2">LGP의 조건</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-purple-700 dark:text-purple-200">
                    <li>수비자가 공격자를 마주보고(Facing) 있어야 함.</li>
                    <li>두 발이 코트에 닿아 있어야 함.</li>
                    <li>접촉이 일어나기 <strong>전에</strong> 이 자세를 확립했어야 함.</li>
                </ul>
            </div>
            <p>
                LGP를 잡고 있는 수비자의 몸통(Torso)에 공격자가 와서 부딪히면? → <strong>오펜스 파울 (차징)</strong><br />
                수비자가 늦게 끼어들거나 움직이면서 접촉하면? → <strong>수비 파울 (블로킹)</strong>
            </p>

            <h2>2. 실린더(Cylinder) 원칙</h2>
            <p>
                수비자도 자신의 공간(위로 뻗은 가상의 원통)을 가집니다. LGP를 잡은 상태에서 수직으로 점프하거나 팔을 드는 것은 정당합니다.
                공격자가 이 공간으로 들어와서 접촉하면 공격자 책임입니다.
            </p>

            <h2>3. 예외 구역: 노차징 세미 서클 (No-Charge Semi-Circle)</h2>
            <p>
                골대 밑에 그려진 반원 구역을 보셨나요? 이 안에서는 수비자가 LGP를 잡고 서 있더라도, 공중에서 날아오는 공격자와 접촉 시 <strong>오펜스 파울(차징)이 불리지 않습니다.</strong>
            </p>
            <ul>
                <li>목적: 화려한 덩크나 레이업 플레이를 장려하고, 골밑 부상을 방지하기 위함.</li>
                <li>단, 수비자가 점프를 하거나 손을 쓰는 등 다른 파울을 하면 그대로 수비 파울입니다. "가만히 서 있을 때" 차징이 면제되는 것입니다.</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>마치며</h2>
            <p>
                결국 핵심은 <strong>"누가 먼저 자리를 차지했는가"</strong>입니다. 수비할 때는 미리 가서 자리를 잡고 버티는 연습을, 공격할 때는 수비의 위치를 보고 빈 공간으로 빠져나가는 유로스텝을 연습해보세요.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/compare`}>
                <Button size="lg" className="rounded-full px-8 bg-purple-600 hover:bg-purple-700">
                    <ShieldAlert className="mr-2 h-5 w-5" />
                    파울/바이올레이션 비교하기
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
                <Badge variant="secondary" className="text-purple-600 bg-purple-100 hover:bg-purple-200">Advanced Guide</Badge>
                <span className="text-sm text-muted-foreground">Jan 29, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Blocking vs Charging: <br className="hidden md:inline" />
                <span className="text-primary">Who is Responsible for the Crash?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                Offense and Defense collide. Someone falls. Which way does the referee point? We analyze the thin line between blocking and charging fouls.
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. Defender's Rights: LGP (Legal Guarding Position)</h2>
            <p>
                The primary criterion is <strong>"Did the defender establish a legal position first?"</strong>
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-100 dark:border-purple-900/50">
                <h3 className="text-purple-800 dark:text-purple-300 font-semibold mt-0 mb-2">Requirements for LGP</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-purple-700 dark:text-purple-200">
                    <li>Defender must face the opponent.</li>
                    <li>Both feet must be on the floor.</li>
                    <li>Position must be established <strong>before</strong> contact occurs.</li>
                </ul>
            </div>
            <p>
                If the offense hits the defender's torso while LGP is established → <strong>Offensive Foul (Charge)</strong><br />
                If the defender moves into the path too late → <strong>Defensive Foul (Block)</strong>
            </p>

            <h2>2. Cylinder Principle</h2>
            <p>
                Defenders own their vertical space (cylinder). Staying vertical or jumping straight up within this cylinder is legal.
                If the offense initiates contact into this space, it is the offense's responsibility.
            </p>

            <h2>3. Exception: No-Charge Semi-Circle</h2>
            <p>
                Inside the semi-circle under the basket, a defender generally <strong>cannot draw a charging foul</strong> against an airborne offensive player.
            </p>
            <ul>
                <li>Purpose: Encourage dunks and layups, and prevent dangerous undercut collisions.</li>
                <li>Note: If the defender jumps, swipes, or grabs, it is still a defensive foul. The exemption only applies to the charging call (standing ground).</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>Conclusion</h2>
            <p>
                The key is timing: <strong>"Who occupied the spot first?"</strong> As a defender, beat the offense to the spot. As an attacker, use euro-steps to avoid established defenders.
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/compare`}>
                <Button size="lg" className="rounded-full px-8 bg-purple-600 hover:bg-purple-700">
                    <ShieldAlert className="mr-2 h-5 w-5" />
                    Compare Rules
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
                <Badge variant="secondary" className="text-purple-600 bg-purple-100 hover:bg-purple-200">深化ガイド</Badge>
                <span className="text-sm text-muted-foreground">2026年 1月 29日</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                ブロッキング vs オフェンスファウル (チャージング): <br className="hidden md:inline" />
                <span className="text-primary">衝突の責任はどちらに？</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                攻撃と守備が激突。笛はどちらに吹かれるか？ブロッキングとチャージングの境界線を徹底解説します。
            </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
            <hr className="my-8 border-muted" />

            <h2>1. ディフェンスの権利: LGP (正当な守備位置)</h2>
            <p>
                すべての判断基準は<strong>「ディフェンスが先に正当な位置を確保していたか？」</strong>です。
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6 border border-purple-100 dark:border-purple-900/50">
                <h3 className="text-purple-800 dark:text-purple-300 font-semibold mt-0 mb-2">LGPの条件</h3>
                <ul className="m-0 pl-4 list-disc space-y-2 text-purple-700 dark:text-purple-200">
                    <li>相手と正対していること (Facing)。</li>
                    <li>両足が床についていること。</li>
                    <li>接触が起きる<strong>前に</strong>この状態を確立していること。</li>
                </ul>
            </div>
            <p>
                LGPを確保したディフェンスの胴体(Torso)にオフェンスが突っ込めば → <strong>オフェンスファウル (チャージング)</strong><br />
                ディフェンスが遅れて割り込んだり、動きながら接触すれば → <strong>ディフェンスファウル (ブロッキング)</strong>
            </p>

            <h2>2. シリンダー(Cylinder)の原則</h2>
            <p>
                ディフェンスにも自分の空間（頭上に伸びる円筒）があります。LGPを確保した状態で垂直にジャンプしたり手を挙げたりするのは正当です。
                オフェンスがこの空間に侵入して接触すれば、オフェンスの責任です。
            </p>

            <h2>3. 例外エリア: ノーチャージ・セミサークル</h2>
            <p>
                ゴール下の半円エリア内では、ディフェンスがLGPを確保して立っていても、空中のオフェンスとの接触に対して<strong>チャージングが宣告されません。</strong>
            </p>
            <ul>
                <li>目的: 豪快なダンクやレイアップを推奨し、ゴール下の危険な接触を防ぐため。</li>
                <li>注意: ディフェンスがジャンプしたり手を使ったりすれば、通常通りディフェンスファウルです。「立っている時」のチャージングだけが免除されます。</li>
            </ul>

            <hr className="my-8 border-muted" />

            <h2>まとめ</h2>
            <p>
                重要なのは<strong>「どちらが先にその場所を占めたか」</strong>です。ディフェンスなら先に動いてコースに入り、オフェンスならそれを見てかわすステップを磨きましょう。
            </p>
        </div>

        <div className="mt-12 flex justify-center">
            <Link href={`/${lang}/compare`}>
                <Button size="lg" className="rounded-full px-8 bg-purple-600 hover:bg-purple-700">
                    <ShieldAlert className="mr-2 h-5 w-5" />
                    ルール比較機能を使う
                </Button>
            </Link>
        </div>
    </article>
);

export const BlockingVsCharging = {
    ko: Ko,
    en: En,
    ja: Ja
};
