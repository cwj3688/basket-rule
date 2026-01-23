"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, ThumbsUp, ThumbsDown, MessageSquare, PlayCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommunityPage() {
    return (
        <div className="container mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">이거 파울인가요?</h1>
                    <p className="text-muted-foreground">애매한 판정, 커뮤니티 투표와 AI 심판에게 물어보세요.</p>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                    <Upload className="mr-2 h-4 w-4" /> 영상 업로드
                </Button>
            </div>

            <Tabs defaultValue="trending" className="mb-8">
                <TabsList>
                    <TabsTrigger value="trending">인기 투표</TabsTrigger>
                    <TabsTrigger value="latest">최신 등록</TabsTrigger>
                    <TabsTrigger value="resolved">판독 완료</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Mock Post 1 */}
                <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer">
                        <PlayCircle className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform" />
                        <Badge className="absolute top-2 left-2 bg-black/50 hover:bg-black/70">트래블링?</Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base line-clamp-1">속공 상황에서 스텝 제로인지 봐주세요</CardTitle>
                        <CardDescription className="text-xs">작성자: 김농구 · 10분 전</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2 pb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 flex-1 bg-red-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[70%]"></div>
                            </div>
                            <span className="text-xs font-bold text-red-600">Travel (70%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 flex-1 bg-green-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[30%]"></div>
                            </div>
                            <span className="text-xs font-bold text-green-600">Legal (30%)</span>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between text-muted-foreground text-sm">
                        <button className="flex items-center hover:text-foreground"><ThumbsUp className="h-4 w-4 mr-1" /> 12</button>
                        <button className="flex items-center hover:text-foreground"><MessageSquare className="h-4 w-4 mr-1" /> 5</button>
                        <button className="flex items-center hover:text-foreground"><ThumbsDown className="h-4 w-4 mr-1" /> 2</button>
                    </CardFooter>
                </Card>

                {/* Mock Post 2 */}
                <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="aspect-video bg-muted relative flex items-center justify-center group cursor-pointer">
                        <PlayCircle className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform" />
                        <Badge className="absolute top-2 left-2 bg-black/50 hover:bg-black/70">U-파울?</Badge>
                    </div>
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base line-clamp-1">이 정도면 플래그런트 아닌가요??</CardTitle>
                        <CardDescription className="text-xs">작성자: 심판지망생 · 1시간 전</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-2 pb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 flex-1 bg-red-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[20%]"></div>
                            </div>
                            <span className="text-xs font-bold text-red-600">U-Foul (20%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 flex-1 bg-green-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[80%]"></div>
                            </div>
                            <span className="text-xs font-bold text-green-600">Normal (80%)</span>
                        </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between text-muted-foreground text-sm">
                        <button className="flex items-center hover:text-foreground"><ThumbsUp className="h-4 w-4 mr-1" /> 45</button>
                        <button className="flex items-center hover:text-foreground"><MessageSquare className="h-4 w-4 mr-1" /> 18</button>
                        <button className="flex items-center hover:text-foreground"><ThumbsDown className="h-4 w-4 mr-1" /> 0</button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
