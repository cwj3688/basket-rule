"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { dictionary, Language } from './dictionaries';

type Dictionary = typeof dictionary.ko;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
    children,
    initialLanguage = 'ko'
}: {
    children: React.ReactNode;
    initialLanguage?: Language;
}) {
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLanguage(initialLanguage);
    }, [initialLanguage]);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('basketrule-lang', lang);

        // Redirect to new locale path
        if (pathname) {
            const segments = pathname.split('/');
            // segments[0] is empty, segments[1] is locale
            if (segments.length > 1) {
                segments[1] = lang;
                const newPath = segments.join('/');
                router.push(newPath);
            }
        }
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
