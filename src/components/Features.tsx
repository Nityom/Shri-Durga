"use client"

import { useLanguage } from "@/contexts/LanguageContext"

const features = [
    {
        titleKey: "features.emergencyTitle",
        descKey: "features.emergencyDesc",
    },
    {
        titleKey: "features.specialistTitle",
        descKey: "features.specialistDesc",
    },
    {
        titleKey: "features.facilityTitle",
        descKey: "features.facilityDesc",
    },
    {
        titleKey: "features.affordableTitle",
        descKey: "features.affordableDesc",
    },
]

export const Features = () => {
    const { t } = useLanguage()
    
    return (
        <section id="departments" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
                        {t("features.title")}
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                        {t("features.subtitle")}
                    </h2>
                    <p className="text-muted-foreground">
                        {t("features.description")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="medical-card"
                        >
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-3">{t(feature.titleKey)}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {t(feature.descKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
