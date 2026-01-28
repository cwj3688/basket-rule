"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { scenarios, Scenario } from "@/data/scenarios";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function CaseStudiesPage() {
    const { language } = useLanguage();
    const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);

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

    return (
        <div className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-3">
                        {language === 'ko' ? "판정 가이드" : "Case Studies"}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {language === 'ko'
                            ? "실제 경기 장면을 통해 배우는 애매한 농구 규칙과 판정 사례"
                            : "Learn complex basketball rules through real-game scenarios."}
                    </p>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {scenarios.map((scenario) => (
                    <Dialog key={scenario.id}>
                        <DialogTrigger asChild>
                            <Card className="h-full flex flex-col cursor-pointer group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                                {/* Video Placeholder */}
                                {/* Video Thumbnail */}
                                <div className="aspect-video relative flex items-center justify-center transition-colors bg-black">
                                    <img
                                        src={`https://img.youtube.com/vi/${scenario.videoId}/mqdefault.jpg`}
                                        alt={scenario.title[language]}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle className="h-14 w-14 text-white/90 drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <Badge className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white border-none">
                                        {scenario.difficulty}
                                    </Badge>
                                </div>

                                <CardHeader className="pb-3 flex-1">
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {scenario.title[language]}
                                    </CardTitle>
                                    <CardDescription>
                                        {scenario.description[language]}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-semibold text-muted-foreground">
                                            {language === 'ko' ? "판정 미리보기" : "Verdict Preview"}
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="bg-muted/30 p-4 pt-4 border-t mt-auto">
                                    <div className="w-full flex justify-between items-center text-sm font-medium text-primary">
                                        <span>{language === 'ko' ? "해설 보기" : "View Analysis"}</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardFooter>
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

                                {/* Visual Representation of Verdict */}
                                <div className={`flex items-center justify-center p-6 rounded-xl border-2 mb-6 ${getVerdictColor(scenario.verdict)}`}>
                                    <span className="flex items-center text-2xl font-bold">
                                        {getVerdictIcon(scenario.verdict)}
                                        {scenario.verdictLabel[language]}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-semibold text-lg flex items-center">
                                        🧐 {language === 'ko' ? "공식 해설" : "Official Interpretation"}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed p-4 bg-muted/50 rounded-lg">
                                        {scenario.explanation[language]}
                                    </p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
