"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowRight, RefreshCcw, Star, Medal, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { questions } from "@/data/quiz";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuizPage() {
    const { language, dict } = useLanguage();

    // ... [state initialization remains the same]
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [streak, setStreak] = useState(0);
    const [maxStreak, setMaxStreak] = useState(0);

    // ... [useEffect hooks remain the same]
    useEffect(() => {
        const savedState = localStorage.getItem('basket-rule-quiz-state');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            setCurrentQ(parsed.currentQ);
            setScore(parsed.score);
            setStreak(parsed.streak || 0);
            setMaxStreak(parsed.maxStreak || 0);
        }
    }, []);

    useEffect(() => {
        if (!showResult) {
            localStorage.setItem('basket-rule-quiz-state', JSON.stringify({
                currentQ,
                score,
                streak,
                maxStreak
            }));
        }
    }, [currentQ, score, streak, maxStreak, showResult]);

    const question = questions[currentQ];
    if (!question) {
        if (typeof window !== 'undefined') localStorage.removeItem('basket-rule-quiz-state');
        return <div className="p-8 text-center"><Button onClick={() => window.location.reload()}>Reset Quiz</Button></div>;
    }

    const currentQuestionText = question.question[language];
    const currentOptions = question.options[language];
    const currentExplanation = question.explanation[language];

    const handleAnswer = (index: number) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        const isCorrect = index === question.answer;
        if (isCorrect) {
            setScore(prev => prev + 1);
            setStreak(prev => {
                const newStreak = prev + 1;
                setMaxStreak(currMax => Math.max(currMax, newStreak));
                return newStreak;
            });
        } else {
            setStreak(0);
        }
    };

    const nextQuestion = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
            localStorage.removeItem('basket-rule-quiz-state');
        }
    };

    const restart = () => {
        setCurrentQ(0);
        setScore(0);
        setStreak(0);
        setMaxStreak(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
        localStorage.removeItem('basket-rule-quiz-state');
    };

    const getRank = (score: number, total: number) => {
        const percentage = (score / total) * 100;
        if (percentage === 100) return { title: { ko: "FIBA 국제 심판", en: "FIBA Official", ja: "FIBA国際審判" }, color: "text-purple-600", icon: Crown };
        if (percentage >= 80) return { title: { ko: "프로 심판", en: "Pro Referee", ja: "プロ審判" }, color: "text-blue-600", icon: Medal };
        if (percentage >= 50) return { title: { ko: "동호회 심판", en: "Amateur Referee", ja: "アマチュア審判" }, color: "text-green-600", icon: Star };
        return { title: { ko: "루키", en: "Rookie", ja: "ルーキー" }, color: "text-orange-500", icon: Trophy };
    };

    if (showResult) {
        const rank = getRank(score, questions.length);
        const RankIcon = rank.icon;

        return (
            <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center animate-in zoom-in duration-500">
                <Card className="w-full max-w-md text-center border-primary/20 bg-gradient-to-br from-background to-primary/5 shadow-2xl">
                    <CardHeader>
                        <RankIcon className={cn("h-20 w-20 mx-auto mb-4 drop-shadow-lg", rank.color)} />
                        <CardTitle className="text-3xl font-black">{dict.quiz_page.result_title}</CardTitle>
                        <div className={cn("text-xl font-bold mt-2", rank.color)}>
                            {rank.title[language]}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-7xl font-black text-foreground mb-2 tracking-tighter">
                            {score}
                            <span className="text-2xl text-muted-foreground font-medium">/{questions.length}</span>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            {score === questions.length ? "Perfect! You know the rules inside out." : "Keep practicing to become a Master!"}
                        </p>
                        {maxStreak > 2 && (
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                                🔥 {language === 'ko' ? `최대 ${maxStreak}연속 정답!` : `Max Streak: ${maxStreak}!`}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button onClick={restart} size="lg" className="w-full text-lg font-bold">
                            <RefreshCcw className="mr-2 h-5 w-5" /> {dict.quiz_page.restart}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">{dict.quiz_page.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {streak > 1 && (
                            <span className="text-orange-600 font-bold animate-pulse">
                                🔥 {streak} Combo!
                            </span>
                        )}
                    </div>
                </div>
                <span className="text-2xl font-black font-mono text-primary/80">
                    <span className="text-foreground">{currentQ + 1}</span>
                    <span className="text-muted-foreground text-lg">/{questions.length}</span>
                </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted h-2 rounded-full mb-8 overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentQ) / questions.length) * 100}%` }}
                />
            </div>

            <Card className="mb-6 min-h-[300px] flex flex-col justify-between border-2 shadow-lg">
                <CardHeader className="bg-muted/30 pb-6 border-b">
                    <CardTitle className="leading-relaxed text-xl md:text-2xl">{currentQuestionText}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 pt-6">
                    {currentOptions.map((option, index) => (
                        <Button
                            key={index}
                            variant={
                                isAnswered
                                    ? index === question.answer
                                        ? "default" // Correct
                                        : index === selectedOption
                                            ? "destructive" // Wrong
                                            : "outline"
                                    : "outline"
                            }
                            className={cn(
                                "w-full justify-start h-auto py-4 text-lg px-6 transition-all duration-200",
                                !isAnswered && "hover:border-primary hover:bg-accent hover:pl-8",
                                isAnswered && index === question.answer && "bg-green-600 hover:bg-green-700 text-white border-green-600 ring-2 ring-green-600 ring-offset-2",
                                isAnswered && index === selectedOption && index !== question.answer && "ring-2 ring-red-500 ring-offset-2"
                            )}
                            onClick={() => handleAnswer(index)}
                            disabled={isAnswered}
                        >
                            <span className="mr-4 font-mono opacity-50">{String.fromCharCode(65 + index)}.</span>
                            {option}
                        </Button>
                    ))}
                </CardContent>
                {isAnswered && (
                    <CardFooter className="bg-muted/50 p-6 border-t flex flex-col items-start gap-3 animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center gap-2">
                            {question.answer === selectedOption
                                ? <Badge className="bg-green-600 hover:bg-green-700 text-base py-1 px-3">Correct! 🎉</Badge>
                                : <Badge variant="destructive" className="text-base py-1 px-3">Incorrect 😢</Badge>
                            }
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground mr-2">Explanation:</span>
                            {currentExplanation}
                        </p>
                        <Button onClick={nextQuestion} className="w-full mt-4" size="lg">
                            {dict.quiz_page.next} <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
