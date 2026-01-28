"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function GearPage() {
    const { dict } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">{dict.gear_page.title}</h1>
                <p className="text-muted-foreground">{dict.gear_page.description}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Uniform Rules */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="text-primary flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5" />
                            {dict.gear_page.uniform.title}
                        </CardTitle>
                        <CardDescription>{dict.gear_page.uniform.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-sm list-disc pl-5">
                            <li>
                                {dict.gear_page.uniform.items.tucked}
                            </li>
                            <li>
                                {dict.gear_page.uniform.items.color}
                            </li>
                            <li>
                                {dict.gear_page.uniform.items.number}
                            </li>
                            <li>
                                {dict.gear_page.uniform.items.socks}
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Accessories Rules */}
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            {dict.gear_page.accessories.title}
                        </CardTitle>
                        <CardDescription>{dict.gear_page.accessories.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{dict.gear_page.accessories.table.type}</TableHead>
                                    <TableHead>{dict.gear_page.accessories.table.item}</TableHead>
                                    <TableHead className="text-center">{dict.gear_page.accessories.table.allowed}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">{dict.gear_page.accessories.table.jewelry}</TableCell>
                                    <TableCell>{dict.gear_page.accessories.table.jewelry_items}</TableCell>
                                    <TableCell className="text-center text-destructive font-bold flex justify-center"><XCircle className="h-5 w-5" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{dict.gear_page.accessories.table.padding}</TableCell>
                                    <TableCell>{dict.gear_page.accessories.table.padding_items}</TableCell>
                                    <TableCell className="text-center text-green-600 font-bold flex justify-center"><CheckCircle2 className="h-5 w-5" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{dict.gear_page.accessories.table.glasses}</TableCell>
                                    <TableCell>{dict.gear_page.accessories.table.glasses_items}</TableCell>
                                    <TableCell className="text-center text-destructive font-bold flex justify-center"><XCircle className="h-5 w-5" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{dict.gear_page.accessories.table.goggles}</TableCell>
                                    <TableCell>{dict.gear_page.accessories.table.goggles_items}</TableCell>
                                    <TableCell className="text-center text-green-600 font-bold flex justify-center"><CheckCircle2 className="h-5 w-5" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">{dict.gear_page.accessories.table.compression}</TableCell>
                                    <TableCell>{dict.gear_page.accessories.table.compression_items}</TableCell>
                                    <TableCell className="text-center text-green-600 font-bold flex justify-center"><CheckCircle2 className="h-5 w-5" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <p className="text-xs text-muted-foreground mt-4">
                            {dict.gear_page.accessories.note}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
