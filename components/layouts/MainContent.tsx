"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { language } = useLanguage();
    const isHome = pathname === `/${language}`;

    return (
        <main className={cn("flex-1", !isHome && "pt-16")}>
            {children}
        </main>
    );
}
