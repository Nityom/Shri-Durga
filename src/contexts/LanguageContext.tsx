"use client"

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}

interface LanguageProviderProps {
    children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguageState] = useState<Language>("en")
    const [translations, setTranslations] = useState<Record<string, string>>({})

    // Load translations when language changes
    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const module = await import(`@/translations/${language}.json`)
                setTranslations(module.default)
            } catch (error) {
                console.error(`Failed to load translations for ${language}`, error)
            }
        }
        loadTranslations()
    }, [language])

    // Load saved language preference on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem("preferredLanguage") as Language
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
            setLanguageState(savedLanguage)
        }
    }, [])

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("preferredLanguage", lang)
    }, [])

    const t = useCallback((key: string): string => {
        return translations[key] || key
    }, [translations])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}
