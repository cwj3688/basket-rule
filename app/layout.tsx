import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BasketRule - Basketball Rules Simplified",
  description: "Understanding basketball rules made easy. FIBA, NBA, and local rules explained.",
};

import { MainContent } from "@/components/layouts/MainContent";

// ... existing imports

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")} suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <MainContent>
            {children}
          </MainContent>
          <Footer />
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-KV64F346ZN" />
    </html>
  );
}
