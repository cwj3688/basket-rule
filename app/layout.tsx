import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://basket-rules.pages.dev"), // Replace with actual domain if different
  title: {
    default: "BasketRule - Basketball Rules Simplified",
    template: "%s | BasketRule",
  },
  description: "Understanding basketball rules made easy. FIBA, NBA, and local rules explained. Compare rules, check referee signals, and learn local regulations.",
  keywords: ["Basketball Rules", "FIBA Rules", "NBA Rules", "KBL Rules", "Basketball Referee Signals", "Basketball Guide"],
  authors: [{ name: "BasketRule Team" }],
  creator: "BasketRule",
  publisher: "BasketRule",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://basket-rules.pages.dev",
    title: "BasketRule - Basketball Rules Simplified",
    description: "The ultimate guide to basketball rules. Compare FIBA, NBA, and local regulations easily.",
    siteName: "BasketRule",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "BasketRule Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BasketRule - Basketball Rules Simplified",
    description: "The ultimate guide to basketball rules. Compare FIBA, NBA, and local regulations easily.",
    images: ["/og-image.png"], // Same as OG image
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3381021720725575"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")} suppressHydrationWarning>
        <LanguageProvider>
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
      </body>
    </html>
  );
}
