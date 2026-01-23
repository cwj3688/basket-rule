"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { rules } from "@/data/rules";
import { RuleCard } from "@/components/RuleCard";
import { SearchBar } from "@/components/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function RulesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";
    const { language, dict } = useLanguage();
    const [query, setQuery] = useState(initialQuery);

    const filteredRules = rules.filter((rule) => {
        const term = query.toLowerCase();
        // Search in current language
        const matchesTitle = rule.title[language].toLowerCase().includes(term);
        const matchesDesc = rule.description[language].toLowerCase().includes(term);

        // Deep search in content (optional: search only current lang or match both?)
        // Let's search in current language content for relevance
        const matchesFiba = rule.fiba2025?.[language].summary.toLowerCase().includes(term) ||
            rule.fiba2025?.[language].fullText.toLowerCase().includes(term);
        const matchesNba = rule.nba?.[language].summary.toLowerCase().includes(term) ||
            rule.nba?.[language].fullText.toLowerCase().includes(term);

        return matchesTitle || matchesDesc || matchesFiba || matchesNba;
    });

    return (
        <div className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">{dict.rules_page.title}</h1>
                    <p className="text-muted-foreground">{dict.rules_page.description}</p>
                </div>
                <div className="w-full md:w-auto">
                    <SearchBar onSearch={setQuery} placeholder={dict.rules_page.search_placeholder} />
                </div>
            </div>

            <Tabs defaultValue="fiba" className="space-y-8">
                <TabsList>
                    <TabsTrigger value="fiba">{dict.rules_page.tabs.fiba}</TabsTrigger>
                    <TabsTrigger value="nba">{dict.rules_page.tabs.nba}</TabsTrigger>
                </TabsList>

                <TabsContent value="fiba" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredRules.map((rule) => (
                            <RuleCard key={rule.id} rule={rule} defaultTab="fiba2025" />
                        ))}
                        {filteredRules.length === 0 && (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                {dict.rules_page.no_results.replace("{query}", query)}
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="nba" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredRules.map((rule) => (
                            <RuleCard key={rule.id} rule={rule} defaultTab="nba" />
                        ))}
                        {filteredRules.length === 0 && (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                {dict.rules_page.no_results.replace("{query}", query)}
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default function RulesPage() {
    return (
        <Suspense fallback={<div className="container mx-auto p-8">Loading rules...</div>}>
            <RulesContent />
        </Suspense>
    );
}
