"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <main className={cn("flex-1", !isHome && "pt-16")}>
            {children}
        </main>
    );
}
