import { Metadata } from 'next';
import { Locale } from '@/i18n-config';
import { FoulTypes } from '@/components/blog/posts/FoulTypes';
import { blogPosts } from '@/data/blogPosts';

type Props = {
    params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const post = blogPosts.find(p => p.slug === 'foul-types');

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

export default async function BlogPostFoulTypes({ params }: Props) {
    const { lang } = await params;
    const Component = FoulTypes[lang] || FoulTypes.ko;

    return <Component lang={lang} />;
}
