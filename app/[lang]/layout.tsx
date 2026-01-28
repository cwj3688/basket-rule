import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://basket-rules.pages.dev"),
  title: {
    default: "BasketRule - 농구 규칙의 모든 것 (FIBA/NBA/KBA)",
    template: "%s | BasketRule",
  },
  description: "농구 규칙, 더 이상 헷갈리지 마세요. 트래블링, 3초 룰, 파울 기준 등 FIBA와 NBA 규정을 비교하고 심판 수신호까지 한눈에 확인하는 필수 농구 가이드 BasketRule입니다.",
  keywords: [
    // Korean
    "농구 규칙", "농구 트래블링", "더블 드리블", "3초 룰", "농구 파울", "농구 심판 수신호", "개더 스텝", "제로 스텝", "자유투 규칙", "농구 가이드",
    // English
    "Basketball Rules", "FIBA Rules", "NBA Rules", "Traveling rule", "Gather step", "Double dribble", "Basketball fouls", "Ref signals",
    // Japanese
    "バスケ ルール", "トラベリング", "ダブルドリブル", "3秒ルール", "バスケ 審判", "ゼロステップ", "バスケットボール"
  ],
  authors: [{ name: "BasketRule Team" }],
  creator: "BasketRule",
  publisher: "BasketRule",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://basket-rules.pages.dev",
    title: "BasketRule - 농구 규칙의 모든 것",
    description: "트래블링부터 최신 FIBA 규정까지. 동호인 농구인을 위한 가장 쉬운 규칙 해설서.",
    siteName: "BasketRule",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BasketRule Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BasketRule - 농구 규칙의 모든 것",
    description: "트래블링부터 최신 FIBA 규정까지. 동호인 농구인을 위한 가장 쉬운 규칙 해설서.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

import { MainContent } from "@/components/layouts/MainContent";

// ... existing imports

import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";

import { i18n, type Locale } from "@/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params as { lang: Locale };

  return (
    <html lang={lang}>

      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")} suppressHydrationWarning>
        <LanguageProvider initialLanguage={lang}>
          <Navbar />
          <MainContent>
            {children}
          </MainContent>
          <Footer />
        </LanguageProvider>
        <GoogleAnalytics gaId="G-59WKF6G4P1" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BasketRule",
              url: "https://basket-rules.pages.dev",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://basket-rules.pages.dev/rules?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3381021720725575"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
