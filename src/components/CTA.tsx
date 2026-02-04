"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export const CTA = () => {
    const { t } = useLanguage()
    
    return (
        <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <span className="inline-block py-2 px-4 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                        {t("cta.title")}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
                        {t("cta.title")}
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        {t("cta.description")}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="tel:+918789186308" className="btn-secondary inline-block">
                            {t("hero.emergencyCall")}: 87891 86308
                        </Link>
                        <Link href="/appointment" className="btn-outline inline-block bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            {t("cta.button")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
