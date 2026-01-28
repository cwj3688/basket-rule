"use client"

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { regionRules, RegionCode, LocalRule, RuleCategory } from "@/data/localRules";
import { PlusOneCalculator } from "@/components/PlusOneCalculator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, Clock, Trophy } from "lucide-react";

export default function LocalRulesPage() {
    const { language, dict } = useLanguage();
    const [selectedRegion, setSelectedRegion] = useState<RegionCode>('KR');

    // Group rules by category
    const currentRules = regionRules[selectedRegion];
    const groupedRules = currentRules.reduce((acc, rule) => {
        if (!acc[rule.category]) acc[rule.category] = [];
        acc[rule.category].push(rule);
        return acc;
    }, {} as Record<RuleCategory, LocalRule[]>);

    // Define category order
    const categoryOrder: RuleCategory[] = ['Game Time', 'Scoring', 'Eligibility', 'Penalty', 'Equipment', 'Misc'];

    return (
        <div className="container mx-auto px-4 py-8 md:py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                {/* Left Column: Rules Configuration */}
                <div className="flex-1 space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-3">{dict.local_rules_page.title}</h1>
                            <p className="text-muted-foreground">{dict.local_rules_page.description}</p>
                        </div>

                        {/* Segmented Control Region Selector */}
                        <div className="w-full md:w-auto">
                            <div className="inline-flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200/50">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedRegion('KR')}
                                    className={cn(
                                        "gap-2 px-3 transition-all duration-200 ease-out",
                                        selectedRegion === 'KR'
                                            ? "bg-white text-stone-950 shadow-sm ring-1 ring-black/5 font-medium"
                                            : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                                    )}
                                >
                                    <span className="text-base">🇰🇷</span>
                                    {dict.local_rules_page.country_selector.kr}
                                </Button>
                                <div className="w-px h-4 bg-stone-200 mx-0.5 hidden md:block" />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedRegion('US')}
                                    className={cn(
                                        "gap-2 px-3 transition-all duration-200 ease-out",
                                        selectedRegion === 'US'
                                            ? "bg-white text-stone-950 shadow-sm ring-1 ring-black/5 font-medium"
                                            : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                                    )}
                                >
                                    <span className="text-base">🇺🇸</span>
                                    {dict.local_rules_page.country_selector.us}
                                </Button>
                                <div className="w-px h-4 bg-stone-200 mx-0.5 hidden md:block" />
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedRegion('PH')}
                                    className={cn(
                                        "gap-2 px-3 transition-all duration-200 ease-out",
                                        selectedRegion === 'PH'
                                            ? "bg-white text-stone-950 shadow-sm ring-1 ring-black/5 font-medium"
                                            : "text-stone-500 hover:text-stone-700 hover:bg-stone-200/50"
                                    )}
                                >
                                    <span className="text-base">🇵🇭</span>
                                    {dict.local_rules_page.country_selector.ph}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-2 pb-2 border-b">
                            <Trophy className="w-5 h-5 text-orange-500" />
                            <h2 className="font-semibold text-lg">{dict.local_rules_page.checklist_title}</h2>
                        </div>

                        {/* Grouped Rules Rendering */}
                        <div className="grid gap-6">
                            {categoryOrder.map(category => {
                                const rules = groupedRules[category];
                                if (!rules || rules.length === 0) return null;

                                return (
                                    <Card key={category} className="hover:shadow-md transition-all border-none bg-stone-50/50 ring-1 ring-stone-900/5">
                                        <CardHeader>
                                            <CardTitle className="text-lg text-stone-800">
                                                {/* Simple mapping for category names if not in dict, or use English as fallback */}
                                                {category === 'Game Time' ? (language === 'ko' ? "경기 시간" : "Game Time") :
                                                    category === 'Eligibility' ? (language === 'ko' ? "선수 자격" : "Eligibility") :
                                                        category === 'Scoring' ? (language === 'ko' ? "득점" : "Scoring") :
                                                            category === 'Penalty' ? (language === 'ko' ? "파울/패널티" : "Penalty") :
                                                                category === 'Equipment' ? (language === 'ko' ? "장비 및 복장" : "Equipment") :
                                                                    (language === 'ko' ? "기타" : "Misc")}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {rules.map(rule => (
                                                <div key={rule.id} className="flex items-start space-x-3">
                                                    <Checkbox
                                                        id={rule.id}
                                                        className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <div className="flex items-center gap-2">
                                                            <Label
                                                                htmlFor={rule.id}
                                                                className="text-base font-medium cursor-pointer text-stone-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                            >
                                                                {rule.title[language]}
                                                            </Label>
                                                            {(rule.id === 'forfeit' || rule.id === 'elite-limit' || rule.id === 'physicality') && (
                                                                <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50 gap-1 h-5 px-1.5">
                                                                    <AlertTriangle className="w-3 h-3" />
                                                                    Attention
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-muted-foreground">
                                                            {rule.commonVariation?.[language] || rule.description[language]}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column: Widgets */}
                <div className="lg:w-[380px] space-y-6">
                    {/* +1 Point Calculator Widget - Only show for KR or relevant regions if we implement logic later */}
                    {selectedRegion === 'KR' && (
                        <div className="sticky top-24 space-y-6">
                            <PlusOneCalculator labels={dict.plus_one_calc} />

                            <Card className="bg-stone-900 text-white border-none">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-orange-400" />
                                        Game Tip
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-stone-300">
                                    <p className="mb-2">
                                        {language === 'ko' ?
                                            "대부분의 동호회 농구는 '데드 타임'을 4쿼터 종료 2분 전부터만 적용합니다." :
                                            "Most amateur leagues apply 'Dead Time' only in the last 2 minutes of the 4th quarter."}
                                    </p>
                                    <p>
                                        {language === 'ko' ?
                                            "빠른 진행을 위해 파울 선언 시에도 시계를 멈추지 않는 '런닝 타임'이 기본입니다." :
                                            "'Running Time' is standard to keep games moving fast, keeping the clock running even on fouls."}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Placeholder for other regions widgets */}
                    {selectedRegion !== 'KR' && (
                        <Card className="bg-stone-50 border-stone-200">
                            <CardHeader>
                                <CardTitle className="text-stone-700">Global Info</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-stone-500">
                                {language === 'ko' ? "각 국가별 로컬 농구 문화는 지역마다 크게 다를 수 있습니다." : "Local basketball culture varies greatly by region."}
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
