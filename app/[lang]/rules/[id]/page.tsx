import { rules } from "@/data/rules";
import { RuleCard } from "@/components/RuleCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { i18n } from "@/i18n-config";

// This is a Server Component
interface Props {
    params: Promise<{
        lang: string;
        id: string;
    }>
}

// 1. Generate Metadata dynamically based on the rule
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, lang } = await params;
    const rule = rules.find((r) => r.id === id);

    if (!rule) {
        return {
            title: "Rule Not Found",
        };
    }

    // Defaulting to Korean for Title/Description as per strategy prioritization
    // For "Traveling", we use the specific optimized title from the strategy
    let title = `${rule.title[lang as keyof typeof rule.title]} | BasketRule`;
    let description = rule.description[lang as keyof typeof rule.description];

    if (rule.id === 'traveling' && lang === 'ko') {
        title = "농구 트래블링 기준 완벽 정리: 0스텝부터 2발까지";
        description = "아직도 헷갈리는 농구 트래블링 기준! 개더 스텝(제로 스텝)부터 FIBA 2025 규정까지 1분 만에 마스터하세요. 심판이 실제로 보는 발의 기준을 알기 쉽게 설명해 드립니다.";
    }

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
        },
    };
}

// 2. Generate Static Params (Optional but good for SSG)
export async function generateStaticParams() {
    const params = [];
    for (const locale of i18n.locales) {
        for (const rule of rules) {
            params.push({
                lang: locale,
                id: rule.id,
            });
        }
    }
    return params;
}

export default async function RuleDetailPage({ params }: Props) {
    const { id, lang } = await params;
    const rule = rules.find((r) => r.id === id);

    if (!rule) {
        notFound();
    }

    // FAQ Schema for Rich Results
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `${rule.title.ko}란?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": rule.description.ko
                }
            },
            {
                "@type": "Question",
                "name": `FIBA ${rule.title.ko} 규정은?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": rule.fiba2025?.ko.summary || "내용이 없습니다."
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            {/* JSON-LD Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mb-8">
                <a href="/rules" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">
                    ← 목록으로 돌아가기
                </a>
                <h1 className="text-4xl font-bold tracking-tight mb-2">{rule.title.ko}</h1>
                <h2 className="text-xl text-muted-foreground">{rule.title.en}</h2>
            </div>

            <RuleCard rule={rule} defaultTab="fiba2025" />

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">관련 규칙 더보기</h3>
                <div className="flex flex-wrap gap-2">
                    {rules.filter(r => r.category === rule.category && r.id !== rule.id).map(r => (
                        <a key={r.id} href={`/rules/${r.id}`} className="px-3 py-1 bg-background border rounded-full text-sm hover:bg-accent transition-colors">
                            {r.title.ko}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
