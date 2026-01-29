// Helper hook to use in all pages for translations
// Already created in src/contexts/LanguageContext.tsx

// PATTERN FOR UPDATING PAGES:
// 1. Add "use client" at the top
// 2. Import: import { useLanguage } from "@/contexts/LanguageContext"
// 3. Use in component: const { t } = useLanguage()
// 4. Replace all hardcoded text with t("translation.key")

// Example for Services Page:
/*
"use client"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ServicesPage() {
    const { t } = useLanguage()
    
    return (
        <span className="...">
            {t("servicesPage.badge")}
        </span>
    )
}
*/
