"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { questions } from "@/data/quiz";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuizPage() {
    const { language, dict } = useLanguage();
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const question = questions[currentQ];
    const currentQuestionText = question.question[language];
    const currentOptions = question.options[language];
    const currentExplanation = question.explanation[language];

    const handleAnswer = (index: number) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (index === question.answer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const restart = () => {
        setCurrentQ(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    if (showResult) {
        return (
            <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center animate-in zoom-in duration-500">
                <Card className="w-full max-w-md text-center border-primary/20 bg-gradient-to-br from-background to-primary/5">
                    <CardHeader>
                        <Trophy className="h-16 w-16 mx-auto text-primary mb-4" />
                        <CardTitle className="text-3xl">{dict.quiz_page.result_title}</CardTitle>
                        <CardDescription>{dict.quiz_page.result_desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-6xl font-extrabold text-foreground mb-4">
                            {score} / {questions.length}
                        </p>
                        <p className="text-muted-foreground">
                            {score === questions.length ? dict.quiz_page.perfect_msg : dict.quiz_page.fail_msg}
                        </p>
                    </CardContent>
                    <CardFooter className="justify-center">
                        <Button onClick={restart} size="lg" className="w-full">
                            <RefreshCcw className="mr-2 h-4 w-4" /> {dict.quiz_page.restart}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">{dict.quiz_page.title}</h1>
                <span className="text-muted-foreground font-mono">
                    {dict.quiz_page.questions_count
                        .replace('{current}', (currentQ + 1).toString())
                        .replace('{total}', questions.length.toString())}
                </span>
            </div>

            <Card className="mb-6 min-h-[300px] flex flex-col justify-between">
                <CardHeader>
                    <CardTitle className="leading-normal">{currentQuestionText}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3">
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
                                "w-full justify-start h-auto py-4 text-base",
                                isAnswered && index === question.answer && "bg-green-600 hover:bg-green-700 text-white border-green-600"
                            )}
                            onClick={() => handleAnswer(index)}
                            disabled={isAnswered}
                        >
                            {option}
                        </Button>
                    ))}
                </CardContent>
                {isAnswered && (
                    <CardFooter className="bg-muted/50 p-4 border-t flex flex-col items-start gap-2">
                        <p className="text-sm font-semibold">
                            {question.answer === selectedOption ? dict.quiz_page.correct : dict.quiz_page.incorrect}
                        </p>
                        <p className="text-sm text-muted-foreground">{currentExplanation}</p>
                        <Button onClick={nextQuestion} className="w-full mt-2">
                            {dict.quiz_page.next} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
}
