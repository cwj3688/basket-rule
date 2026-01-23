"use client";

import { Rule } from "@/data/rules";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface RuleCardProps {
    rule: Rule;
    defaultTab?: "fiba2025" | "nba";
}

export function RuleCard({ rule, defaultTab = "fiba2025" }: RuleCardProps) {
    const { language, dict } = useLanguage();

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{rule.title[language]}</CardTitle>
                    <Badge variant="outline">{rule.category}</Badge>
                </div>
                <CardDescription>{rule.description[language]}</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={defaultTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="fiba2025">{dict.rules_page.tabs.fiba}</TabsTrigger>
                        <TabsTrigger value="nba">{dict.rules_page.tabs.nba}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="fiba2025" className="space-y-4 pt-4">
                        {rule.fiba2025 ? (
                            <>
                                <div className="rounded-md bg-muted p-4">
                                    <p className="font-semibold text-sm mb-1">{dict.rule_card.easy_summary}</p>
                                    <p className="text-sm">{rule.fiba2025[language].summary}</p>
                                </div>
                                <div className="text-xs text-muted-foreground mt-2 border-t pt-2">
                                    <p className="font-semibold mb-1">{dict.rule_card.official_text}</p>
                                    <p>{rule.fiba2025[language].fullText}</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground">{dict.rule_card.no_data}</p>
                        )}
                    </TabsContent>

                    <TabsContent value="nba" className="space-y-4 pt-4">
                        {rule.nba ? (
                            <>
                                <div className="rounded-md bg-muted p-4">
                                    <p className="font-semibold text-sm mb-1">{dict.rule_card.easy_summary}</p>
                                    <p className="text-sm">{rule.nba[language].summary}</p>
                                </div>
                                <div className="text-xs text-muted-foreground mt-2 border-t pt-2">
                                    <p className="font-semibold mb-1">{dict.rule_card.official_text}</p>
                                    <p>{rule.nba[language].fullText}</p>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground">{dict.rule_card.no_data}</p>
                        )}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
