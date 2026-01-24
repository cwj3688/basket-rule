"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Language } from './dictionaries';

type Dictionary = typeof dictionary.ko;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko');

    useEffect(() => {
        // 1. Check saved preference from local storage
        const saved = localStorage.getItem('basketrule-lang') as Language;
        if (saved && (saved === 'ko' || saved === 'en')) {
            setLanguage(saved);
            return;
        }

        // 2. If no preference, check browser language
        if (typeof navigator !== 'undefined') {
            const browserLang = navigator.language;
            if (!browserLang.toLowerCase().startsWith('ko')) {
                setLanguage('en');
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('basketrule-lang', lang);
    };

    const t = (path: string): string => {
        const keys = path.split('.');
        let current: any = dictionary[language];

        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }

        return current as string;
    };

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage: handleSetLanguage,
            t,
            dict: dictionary[language]
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
