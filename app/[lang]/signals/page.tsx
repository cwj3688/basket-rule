"use client"

import { signals, categories } from "@/data/signals";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SignalsPage() {
    const { language, dict } = useLanguage();
    const [activeTab, setActiveTab] = useState("All");

    // Group signals by category
    const signalsByCategory = signals.reduce((acc, signal) => {
        if (!acc[signal.category]) {
            acc[signal.category] = [];
        }
        acc[signal.category].push(signal);
        return acc;
    }, {} as Record<string, typeof signals>);

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold tracking-tight mb-3">{dict.signals_page.title}</h1>
                <p className="text-muted-foreground">
                    {dict.signals_page.description}
                </p>
            </div>

            <Tabs defaultValue="All" className="w-full space-y-8" onValueChange={setActiveTab}>
                <div className="flex justify-center overflow-x-auto pb-2">
                    <TabsList className="h-auto flex-wrap justify-center gap-1 bg-transparent p-0">
                        <TabsTrigger
                            value="All"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 border border-muted-foreground/20"
                        >
                            {dict.signals_page.categories["All"]}
                        </TabsTrigger>
                        {categories.filter(c => signalsByCategory[c]).map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 border border-muted-foreground/20"
                            >
                                {/* @ts-ignore: category key match */}
                                {dict.signals_page.categories[category] || category}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <TabsContent value="All" className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-12">
                    {categories.filter(c => signalsByCategory[c]).map((category) => (
                        <div key={category} className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
                                {/* @ts-ignore: category key match */}
                                {dict.signals_page.categories[category] || category}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                                {(signalsByCategory[category] || []).map((signal) => (
                                    <Dialog key={signal.id}>
                                        <DialogTrigger asChild>
                                            <Card className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group overflow-hidden">
                                                <CardContent className="p-4 flex flex-col items-center text-center h-full">
                                                    <div className="w-full aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                                                        {signal.imageUrl ? (
                                                            <Image src={signal.imageUrl} alt={signal.name[language]} fill className="object-cover" />
                                                        ) : (
                                                            <>
                                                                <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                                                                    <div className="w-20 h-20 rounded-full border-4 border-foreground/20"></div>
                                                                </div>
                                                                <span className="text-4xl">🏀</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <CardTitle className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                                                        {signal.name[language]}
                                                    </CardTitle>
                                                </CardContent>
                                            </Card>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-4xl bg-white text-stone-900 p-0 overflow-hidden gap-0 border-none shadow-2xl">
                                            <div className="grid md:grid-cols-2 h-full">
                                                {/* Image Section */}
                                                <div className="bg-stone-100 p-6 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200 min-h-[300px] md:min-h-[450px] relative">
                                                    {signal.imageUrl ? (
                                                        <div className="relative w-full h-full min-h-[300px]">
                                                            <Image
                                                                src={signal.imageUrl}
                                                                alt={signal.name[language]}
                                                                fill
                                                                className="object-contain mix-blend-multiply"
                                                                priority
                                                            />
                                                        </div>
                                                    ) : (
                                                        <div className="text-center p-6 space-y-2">
                                                            <div className="text-8xl mb-4">🏀</div>
                                                            <p className="text-sm text-stone-400 uppercase tracking-widest">{dict.signals_page.no_image}</p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Details Section */}
                                                <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
                                                    <DialogHeader className="mb-6">
                                                        <Badge variant="outline" className="w-fit mb-3 text-stone-500 border-stone-200">
                                                            {/* @ts-ignore: category key match */}
                                                            {dict.signals_page.categories[signal.category] || signal.category}
                                                        </Badge>
                                                        <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight text-stone-900">
                                                            {signal.name[language]}
                                                        </DialogTitle>
                                                    </DialogHeader>

                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="text-sm font-medium text-stone-400 mb-2 uppercase tracking-wider">{dict.signals_page.dialog.description}</h4>
                                                            <p className="text-lg leading-relaxed text-stone-800">
                                                                {signal.description[language]}
                                                            </p>
                                                        </div>

                                                        {signal.gifUrl && (
                                                            <div className="pt-4 border-t border-stone-100">
                                                                <p className="text-sm text-stone-500 italic">
                                                                    {dict.signals_page.dialog.animated_demo}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>
                        </div>
                    ))}
                </TabsContent>

                {categories.map((category) => (
                    <TabsContent key={category} value={category} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                            {(signalsByCategory[category] || []).map((signal) => (
                                <Dialog key={signal.id}>
                                    <DialogTrigger asChild>
                                        <Card className="cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group overflow-hidden">
                                            <CardContent className="p-4 flex flex-col items-center text-center h-full">
                                                <div className="w-full aspect-[4/3] bg-muted/50 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                                                    {signal.imageUrl ? (
                                                        <Image src={signal.imageUrl} alt={signal.name[language]} fill className="object-cover" />
                                                    ) : (
                                                        <>
                                                            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                                                                <div className="w-20 h-20 rounded-full border-4 border-foreground/20"></div>
                                                            </div>
                                                            <span className="text-4xl">🏀</span>
                                                        </>
                                                    )}
                                                </div>
                                                <CardTitle className="text-sm font-medium leading-tight group-hover:text-primary transition-colors">
                                                    {signal.name[language]}
                                                </CardTitle>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-4xl bg-white text-stone-900 p-0 overflow-hidden gap-0 border-none shadow-2xl">
                                        <div className="grid md:grid-cols-2 h-full">
                                            {/* Image Section */}
                                            <div className="bg-stone-100 p-6 md:p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-200 min-h-[300px] md:min-h-[450px] relative">
                                                {signal.imageUrl ? (
                                                    <div className="relative w-full h-full min-h-[300px]">
                                                        <Image
                                                            src={signal.imageUrl}
                                                            alt={signal.name[language]}
                                                            fill
                                                            className="object-contain mix-blend-multiply"
                                                            priority
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="text-center p-6 space-y-2">
                                                        <div className="text-8xl mb-4">🏀</div>
                                                        <p className="text-sm text-stone-400 uppercase tracking-widest">{dict.signals_page.no_image}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Details Section */}
                                            <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
                                                <DialogHeader className="mb-6">
                                                    <Badge variant="outline" className="w-fit mb-3 text-stone-500 border-stone-200">
                                                        {/* @ts-ignore: category key match */}
                                                        {dict.signals_page.categories[signal.category] || signal.category}
                                                    </Badge>
                                                    <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight text-stone-900">
                                                        {signal.name[language]}
                                                    </DialogTitle>
                                                </DialogHeader>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-sm font-medium text-stone-400 mb-2 uppercase tracking-wider">{dict.signals_page.dialog.description}</h4>
                                                        <p className="text-lg leading-relaxed text-stone-800">
                                                            {signal.description[language]}
                                                        </p>
                                                    </div>

                                                    {signal.gifUrl && (
                                                        <div className="pt-4 border-t border-stone-100">
                                                            <p className="text-sm text-stone-500 italic">
                                                                {dict.signals_page.dialog.animated_demo}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
