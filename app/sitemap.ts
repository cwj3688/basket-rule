import { MetadataRoute } from 'next';
import { rules } from '@/data/rules';
import { blogPosts } from '@/data/blogPosts';
import { i18n } from '@/i18n-config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://basket-rules.pages.dev';
    const locales = i18n.locales;

    // Base routes to internationalize
    const routes = [
        '',
        '/rules',
        '/compare',
        '/signals',
        '/gear',
        '/quiz',
        '/blog',
    ];

    let sitemapEntries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        // 1. Static Routes
        const staticEntries = routes.map((route) => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        }));

        // 2. Dynamic Rule Routes
        const ruleEntries = rules.map((rule) => ({
            url: `${baseUrl}/${locale}/rules/${rule.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        // 3. Blog Post Routes
        const blogEntries = blogPosts.map((post) => ({
            url: `${baseUrl}/${locale}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        sitemapEntries = [...sitemapEntries, ...staticEntries, ...ruleEntries, ...blogEntries];
    }

    return sitemapEntries;
}
