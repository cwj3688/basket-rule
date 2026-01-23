"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight } from "lucide-react";

interface PropTypes {
    labels: {
        title: string;
        desc: string;
        is_target: string;
        shot_type: string;
        result: string;
        normal: string;
        plus_one: string;
        field_goal_2: string;
        field_goal_3: string;
        free_throw: string;
    }
}

export function PlusOneCalculator({ labels }: PropTypes) {
    const [isTarget, setIsTarget] = useState(false);
    const [shotType, setShotType] = useState<2 | 3 | 1>(2);

    const calculatePoints = () => {
        const base = shotType;
        if (isTarget) return base + 1;
        return base;
    };

    return (
        <Card className="w-full bg-orange-50/50 border-orange-100">
            <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5 text-orange-500" />
                    <CardTitle className="text-lg text-orange-700">{labels.title}</CardTitle>
                </div>
                <CardDescription>{labels.desc}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* 1. Target Selection */}
                <div className="space-y-3">
                    <span className="text-sm font-medium text-stone-600 block">{labels.is_target}</span>
                    <div className="grid grid-cols-2 gap-2">
                        <Button
                            variant={isTarget ? "default" : "outline"}
                            className={isTarget ? "bg-orange-500 hover:bg-orange-600 border-orange-500" : "bg-white text-stone-500"}
                            onClick={() => setIsTarget(true)}
                        >
                            {labels.plus_one} (+1)
                        </Button>
                        <Button
                            variant={!isTarget ? "default" : "outline"}
                            className={!isTarget ? "bg-stone-600 hover:bg-stone-700" : "bg-white text-stone-500"}
                            onClick={() => setIsTarget(false)}
                        >
                            {labels.normal}
                        </Button>
                    </div>
                </div>

                {/* 2. Shot Type */}
                <div className="space-y-3">
                    <span className="text-sm font-medium text-stone-600 block">{labels.shot_type}</span>
                    <div className="grid grid-cols-3 gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShotType(1)}
                            className={shotType === 1 ? "border-orange-500 text-orange-600 bg-orange-50 ring-1 ring-orange-500" : ""}
                        >
                            {labels.free_throw}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShotType(2)}
                            className={shotType === 2 ? "border-orange-500 text-orange-600 bg-orange-50 ring-1 ring-orange-500" : ""}
                        >
                            {labels.field_goal_2}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShotType(3)}
                            className={shotType === 3 ? "border-orange-500 text-orange-600 bg-orange-50 ring-1 ring-orange-500" : ""}
                        >
                            {labels.field_goal_3}
                        </Button>
                    </div>
                </div>

                {/* 3. Result */}
                <div className="pt-4 border-t border-orange-200/50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-stone-500 uppercase tracking-wider">{labels.result}</span>
                        <div className="flex items-center space-x-2 text-stone-400">
                            <span className="line-through text-sm">{shotType} pts</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-4xl font-black text-orange-600 tabular-nums animate-in slide-in-from-bottom-2 fade-in duration-300 transform key={shotType + (isTarget ? 't' : 'f')}">
                            {calculatePoints()}
                        </span>
                        <span className="text-lg font-bold text-orange-500">
                            PTS
                        </span>
                    </div>
                </div>

                {isTarget && (
                    <div className="bg-orange-100/50 text-orange-700 text-xs p-2 rounded text-center">
                        🎯 +1 Point Applied!
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
