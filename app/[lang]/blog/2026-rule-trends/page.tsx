import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { RuleTrends2026 } from '@/components/blog/posts/RuleTrends2026';
import { blogPosts } from '@/data/blogPosts';

type Props = {
    params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const post = blogPosts.find(p => p.slug === '2026-rule-trends');

    if (!post) return {};

    return {
        title: `${post.title[lang]} | BasketRule`,
        description: post.description[lang],
        openGraph: {
            title: post.title[lang],
            description: post.description[lang],
            type: "article",
            publishedTime: post.date,
            authors: ["BasketRule"],
        },
    };
}

export default async function BlogPost2026RuleTrends({ params }: Props) {
    const { lang } = await params;
    const Component = RuleTrends2026[lang] || RuleTrends2026.ko;

    return <Component lang={lang} />;
}
