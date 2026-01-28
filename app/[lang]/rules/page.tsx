"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { rules } from "@/data/rules";
import { scenarios, Scenario } from "@/data/scenarios";
import { RuleCard } from "@/components/RuleCard";
import { SearchBar } from "@/components/SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react";

function RulesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";
    const { language, dict } = useLanguage();
    const [query, setQuery] = useState(initialQuery);

    const filteredRules = rules.filter((rule) => {
        const term = query.toLowerCase();

        // Search in BOTH languages for title and description
        const matchesTitle =
            rule.title.ko.toLowerCase().includes(term) ||
            rule.title.en.toLowerCase().includes(term);

        const matchesDesc =
            rule.description.ko.toLowerCase().includes(term) ||
            rule.description.en.toLowerCase().includes(term);

        // Search in BOTH languages for content
        const matchesFiba = rule.fiba2025 ? (
            rule.fiba2025.ko.summary.toLowerCase().includes(term) ||
            rule.fiba2025.ko.fullText.toLowerCase().includes(term) ||
            rule.fiba2025.en.summary.toLowerCase().includes(term) ||
            rule.fiba2025.en.fullText.toLowerCase().includes(term)
        ) : false;

        const matchesNba = rule.nba ? (
            rule.nba.ko.summary.toLowerCase().includes(term) ||
            rule.nba.ko.fullText.toLowerCase().includes(term) ||
            rule.nba.en.summary.toLowerCase().includes(term) ||
            rule.nba.en.fullText.toLowerCase().includes(term)
        ) : false;

        return matchesTitle || matchesDesc || matchesFiba || matchesNba;
    });

    const filteredScenarios = scenarios.filter((scenario) => {
        const term = query.toLowerCase();
        return (
            scenario.title.ko.toLowerCase().includes(term) ||
            scenario.title.en.toLowerCase().includes(term) ||
            scenario.description.ko.toLowerCase().includes(term) ||
            scenario.description.en.toLowerCase().includes(term) ||
            scenario.explanation.ko.toLowerCase().includes(term) ||
            scenario.explanation.en.toLowerCase().includes(term)
        );
    });

    const getVerdictColor = (verdict: Scenario['verdict']) => {
        switch (verdict) {
            case "Legal": return "text-green-600 bg-green-100 border-green-200";
            case "Foul": return "text-red-600 bg-red-100 border-red-200";
            default: return "text-orange-600 bg-orange-100 border-orange-200";
        }
    };

    const getVerdictIcon = (verdict: Scenario['verdict']) => {
        switch (verdict) {
            case "Legal": return <CheckCircle2 className="h-5 w-5 mr-1" />;
            case "Foul": return <XCircle className="h-5 w-5 mr-1" />;
            default: return <AlertTriangle className="h-5 w-5 mr-1" />;
        }
    };

    const initialTab = searchParams.get("tab") || "fiba";

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

            <Tabs defaultValue={initialTab} className="space-y-8">
                <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
                    <TabsTrigger value="fiba">{dict.rules_page.tabs.fiba}</TabsTrigger>
                    <TabsTrigger value="nba">{dict.rules_page.tabs.nba}</TabsTrigger>
                    <TabsTrigger value="cases">{dict.nav.community} <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-[10px]">{filteredScenarios.length}</Badge></TabsTrigger>
                </TabsList>

                <TabsContent value="fiba" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredRules.map((rule) => (
                            <RuleCard key={rule.id} rule={rule} defaultTab="fiba2025" href={`/${language}/rules/${rule.id}`} />
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
                            <RuleCard key={rule.id} rule={rule} defaultTab="nba" href={`/${language}/rules/${rule.id}`} />
                        ))}
                        {filteredRules.length === 0 && (
                            <div className="col-span-full text-center py-12 text-muted-foreground">
                                {dict.rules_page.no_results.replace("{query}", query)}
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="cases" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredScenarios.map((scenario) => (
                            <Dialog key={scenario.id}>
                                <DialogTrigger asChild>
                                    <Card className="h-full flex flex-col cursor-pointer group overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                        {/* Video Video Thumbnail */}
                                        <div className="aspect-video relative flex items-center justify-center transition-colors bg-black">
                                            <img
                                                src={`https://img.youtube.com/vi/${scenario.videoId}/mqdefault.jpg`}
                                                alt={scenario.title[language]}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <PlayCircle className="h-12 w-12 text-white/90 drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <Badge className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white border-none text-xs">
                                                {scenario.difficulty}
                                            </Badge>
                                        </div>

                                        <CardHeader className="p-4 pb-2 flex-1">
                                            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                                                {scenario.title[language]}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2 text-xs">
                                                {scenario.description[language]}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="p-4 pt-2 mt-auto">
                                            <div className="flex items-center justify-between">
                                                <div className="text-xs font-semibold text-muted-foreground">
                                                    {dict.rules_page.verdict}
                                                </div>
                                                <Badge variant="outline" className={`${getVerdictColor(scenario.verdict).split(' ')[0]} border-0 bg-transparent p-0`}>
                                                    {scenario.verdictLabel[language]}
                                                </Badge>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-xl bg-white">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl flex items-center gap-2">
                                            {scenario.title[language]}
                                        </DialogTitle>
                                        <DialogDescription className="text-base mt-2">
                                            {scenario.description[language]}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="py-6">
                                        {/* YouTube Video Embed */}
                                        <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 shadow-sm border bg-black">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${scenario.videoId}`}
                                                title={scenario.title[language]}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className={`flex items-center justify-center p-6 rounded-xl border-2 mb-6 ${getVerdictColor(scenario.verdict)}`}>
                                            <span className="flex items-center text-2xl font-bold">
                                                {getVerdictIcon(scenario.verdict)}
                                                {scenario.verdictLabel[language]}
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-lg flex items-center">
                                                🧐 {dict.rules_page.official_interpretation}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed p-4 bg-muted/50 rounded-lg">
                                                {scenario.explanation[language]}
                                            </p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                        {filteredScenarios.length === 0 && (
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
