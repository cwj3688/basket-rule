"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Scale, HandMetal, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const router = useRouter();
  const { dict } = useLanguage();

  const handleSearch = (query: string) => {
    // Basic redirect to rules page with query
    if (query.trim()) {
      router.push(`/rules?q=${encodeURIComponent(query)}`);
    }
  };

  const quickAccessItems = [
    { href: "/rules", icon: BookOpen, title: dict.nav.rules, desc: dict.home.qa_rules_desc, color: "text-blue-500", bg: "bg-blue-500/10" },
    { href: "/compare", icon: Scale, title: dict.nav.compare, desc: dict.home.qa_compare_desc, color: "text-orange-500", bg: "bg-orange-500/10" },
    { href: "/signals", icon: HandMetal, title: dict.nav.signals, desc: dict.home.qa_signals_desc, color: "text-green-500", bg: "bg-green-500/10" },
    { href: "/local-rules", icon: MapPin, title: dict.nav.local, desc: dict.home.qa_local_desc, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center py-20 md:py-32 lg:py-48 px-4 text-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40 z-10" />
          <img
            src="/images/hero-bg.png"
            alt="Basketball Court"
            className="w-full h-full object-cover opacity-90 scale-105 animate-in fade-in zoom-in-105 duration-[2000ms]"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            <span className="text-zinc-200">{dict.hero.season_update}</span>
          </div>

          <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-2xl">
            <span className="text-white">{dict.hero.slogan_1}</span> <span className="text-primary">{dict.hero.slogan_2}</span>, <br className="hidden sm:inline" />
            <span className="text-white">{dict.hero.slogan_3}</span> <span className="text-primary">{dict.hero.slogan_4}</span>.
          </h1>
          <p className="max-w-[700px] text-zinc-300 md:text-xl/relaxed lg:text-2xl/relaxed font-light mb-10 animate-in fade-in slide-in-from-bottom-4 delay-200 fill-mode-forwards drop-shadow-md">
            {dict.hero.subtext_1}<br />
            {dict.hero.subtext_2}
          </p>

          <div className="w-full max-w-lg mb-8 animate-in fade-in slide-in-from-bottom-6 delay-300 fill-mode-forwards relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-orange-600/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-lg border border-white/20 p-2 shadow-2xl transition-all hover:bg-white/15">
              <SearchBar
                onSearch={handleSearch}
                placeholder={dict.hero.search_placeholder}
              />
            </div>
            <p className="text-xs text-zinc-400 mt-3 text-center px-1 font-medium tracking-wide">
              {dict.hero.search_hint}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16 md:py-32 animate-in fade-in slide-in-from-bottom-10 delay-500 fill-mode-forwards">
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center sm:text-left">{dict.hero.quick_access}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccessItems.map((item, i) => (
            <Link key={item.href} href={item.href} className="block h-full group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
              <Card className="h-full border bg-card text-card-foreground transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className={`p-3 rounded-lg w-fit mb-4 transition-transform group-hover:scale-110 duration-300 ${item.bg}`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {item.desc}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {dict.home.qa_access_text.replace("{desc}", item.desc.toLowerCase())}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
