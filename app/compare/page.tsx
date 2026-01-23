"use client";

import { comparisons } from "@/data/comparisons";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Note: I need to install Table component logic or build it. 
// Standard Shadcn Table is simple HTML, I'll write it inline or stick to standard HTML table with Tailwind classes if I don't want another file.
// But to be consistent I'll create components/ui/table.tsx later or inline simplified table here.
// I'll use standard Tailwind table classes here to act fast, but inside a shadcn-like structure.
// Actually, I can create components/ui/table.tsx in a separate write if I want quality.
// Let's stick to using standard HTML with appropriate classes for this page to keep it self-contained if I skip table.tsx.
// Or I'll just write table.tsx in this turn? I'll write table.tsx to be professional.

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ComparePage() {
    const { language, dict } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">{dict.compare_page.title}</h1>
                <p className="text-muted-foreground">{dict.compare_page.description}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{dict.compare_page.card_title}</CardTitle>
                    <CardDescription>{dict.compare_page.card_desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-muted-foreground font-medium">
                                <tr>
                                    <th className="p-4 align-middle">{dict.compare_page.table.feature}</th>
                                    <th className="p-4 align-middle">{dict.compare_page.table.fiba}</th>
                                    <th className="p-4 align-middle">{dict.compare_page.table.nba}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {comparisons.map((item, index) => (
                                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                                        <td className="p-4 font-medium">{item.feature[language]}</td>
                                        <td className="p-4">{item.fiba[language]}</td>
                                        <td className="p-4">{item.nba[language]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-8 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                <p>
                    {dict.compare_page.note}
                </p>
            </div>
        </div>
    );
}
