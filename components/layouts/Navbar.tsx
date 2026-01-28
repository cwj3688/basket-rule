"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const { dict, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === `/${language}`;
    const isTransparent = isHome && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                !isTransparent
                    ? "bg-white/80 backdrop-blur-md border-border text-foreground shadow-sm"
                    : "bg-transparent border-transparent text-white"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={`/${language}`} className="flex items-center space-x-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/images/baket-rule-icon.png"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn("text-xl font-bold tracking-tight transition-colors", !isTransparent ? "text-primary" : "text-white")}>
                        {dict.nav.brand}
                    </span>
                </Link>
                <div className="hidden lg:flex items-center space-x-6">
                    <Link href={`/${language}`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.home}</Link>
                    <Link href={`/${language}/rules`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.rules}</Link>
                    <Link href={`/${language}/signals`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.signals}</Link>
                    <Link href={`/${language}/gear`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.gear}</Link>
                    <Link href={`/${language}/compare`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.compare}</Link>
                    <Link href={`/${language}/local-rules`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.local}</Link>
                    <Link href={`/${language}/quiz`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.quiz}</Link>
                    <Link href={`/${language}/community`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.community}</Link>
                    <Link href={`/${language}/blog`} className="text-sm font-medium hover:text-primary transition-colors">{dict.nav.blog}</Link>
                </div>
                <div className="flex items-center space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                className={cn("font-mono text-xs hover:bg-white/10 flex items-center gap-1", !isTransparent && "hover:bg-accent hover:text-accent-foreground")}
                            >
                                <Globe className="h-4 w-4" />
                                <span className="uppercase">{language}</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuItem onClick={() => setLanguage('ko')}>
                                한국어
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage('en')}>
                                English
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setLanguage('ja')}>
                                日本語
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="lg:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className={cn("hover:bg-white/10", !isTransparent && "hover:bg-accent hover:text-accent-foreground")}>
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <Link href={`/${language}`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.home}</Link>
                                    <Link href={`/${language}/rules`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.rules}</Link>
                                    <Link href={`/${language}/signals`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.signals}</Link>
                                    <Link href={`/${language}/gear`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.gear}</Link>
                                    <Link href={`/${language}/compare`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.compare}</Link>
                                    <Link href={`/${language}/local-rules`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.local}</Link>
                                    <Link href={`/${language}/quiz`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.quiz}</Link>
                                    <Link href={`/${language}/community`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.community}</Link>
                                    <Link href={`/${language}/blog`} onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">{dict.nav.blog}</Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
