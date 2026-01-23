"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
// Note: I haven't created Input component yet, I should probably stick to standard input or create it.
// I'll create a simple inline input style or a separate Input component. 
// Standard Shadcn has Input. I'll define it here locally or create it properly?
// Creating components/ui/input.tsx is better practice.
// I'll assume I will creating input.tsx in the next step or I'll just use a styled input here.
// I'll implement Input inline for now to save a step if it's simple, or proper if I want quality. 
// Quality is requested. I'll initiate a write for input.tsx as well in this turn if possible, or just style it here.
// I'll style it here for now to avoid too many small files in one turn, or I'll add Input to the writes.

export function SearchBar({ onSearch, placeholder }: { onSearch?: (query: string) => void, placeholder?: string }) {
    return (
        <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
                type="search"
                placeholder={placeholder || "Search rules (e.g., traveling)..."}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-9 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => onSearch?.(e.target.value)}
            />
        </div>
    );
}
