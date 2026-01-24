"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

interface SearchBarProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
    variant?: 'hero' | 'default';
}

export function SearchBar({ onSearch, placeholder, variant = 'default' }: SearchBarProps) {
    const [query, setQuery] = React.useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            triggerSearch();
        }
    };

    const triggerSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className="flex w-full max-w-lg items-center space-x-2">
            <div className="relative flex-1">
                <Search className={cn(
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4",
                    variant === 'hero' ? "text-muted-foreground" : "text-gray-500"
                )} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder || "Search rules..."}
                    className={cn(
                        "flex h-12 w-full rounded-lg px-3 py-2 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all backdrop-blur-sm",
                        variant === 'hero'
                            ? "border border-white/20 bg-black/20 text-white placeholder:text-zinc-400"
                            : "border border-input bg-background text-foreground placeholder:text-muted-foreground shadow-sm"
                    )}
                />
            </div>
            <Button
                onClick={triggerSearch}
                className="h-12 px-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all"
            >
                Search
            </Button>
        </div>
    );
}
