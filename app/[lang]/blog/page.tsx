import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { Locale } from "@/i18n-config";
import { dictionary } from "@/lib/i18n/dictionaries";
import { Metadata } from "next";

type Props = {
    params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    // Simple fallback or localized titles if added to dictionary
    const titles = {
        ko: "BasketRule 블로그 - 농구 판정 가이드",
        en: "BasketRule Blog - Basketball Judging Guide",
        ja: "BasketRule ブログ - バスケットボール判定ガイド"
    };
    const descriptions = {
        ko: "농구 규칙에 대한 깊이 있는 분석과 판정 가이드를 제공합니다.",
        en: "In-depth analysis and judging guides for basketball rules.",
        ja: "バスケットボールのルールに関する深い分析と判定ガイドを提供します。"
    };

    return {
        title: titles[lang] || titles.ko,
        description: descriptions[lang] || descriptions.ko,
    };
}

export default async function BlogListPage({ params }: Props) {
    const { lang } = await params;
    const dict = dictionary[lang];

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    {lang === 'en' ? 'BasketRule Blog' : lang === 'ja' ? 'BasketRule ブログ' : 'BasketRule 블로그'}
                </h1>
                <p className="text-xl text-muted-foreground">
                    {lang === 'en' ? 'Basketball stories from a ref\'s perspective' : lang === 'ja' ? '審判の視点から見るバスケの話' : '심판의 눈으로 보는 농구 이야기'}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow border-primary/20">
                            <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                                <div className={`absolute inset-0 bg-gradient-to-br ${post.colorClass || 'from-gray-100 to-gray-200'} flex items-center justify-center text-4xl`}>
                                    {post.icon || '📝'}
                                </div>
                                {post.isNew && (
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="secondary" className="bg-white/90 text-primary font-bold">New</Badge>
                                    </div>
                                )}
                            </div>
                            <CardHeader>
                                <Badge className="w-fit mb-2" variant="outline">{post.category[lang]}</Badge>
                                <CardTitle className="group-hover:text-primary transition-colors">
                                    {post.title[lang]}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {post.description[lang]}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{post.date} • {post.readTime[lang]}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
