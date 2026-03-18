"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export const Hero = () => {
    const { t } = useLanguage()
    
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                                    <Image
                                        src="/imagess/4image.jpeg"
                                        alt="Doctor"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                                    <Image
                                        src="/imagess/12image.jpeg"
                                        alt="Doctor"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                                    <Image
                                        src="/imagess/13image.jpeg"
                                        alt="Doctor"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="text-sm">
                                <span className="font-bold text-primary">5</span>
                                <span className="text-muted-foreground ml-1">{t("hero.expertDoctors")}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                            {t("hero.title")} <span className="text-secondary">{t("hero.location")}</span>
                        </h1>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t("hero.description")}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="/appointment" className="btn-secondary">
                                {t("hero.bookAppointment")}
                            </Link>
                            <Link href="tel:+918789186308" className="btn-outline">
                                {t("hero.emergencyCall")}: 87891 86308
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-2xl font-bold text-primary">5</div>
                                <div className="text-sm text-muted-foreground">{t("hero.statsDoctor")}</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary">{t("hero.statsModern")}</div>
                                <div className="text-sm text-muted-foreground">{t("hero.statsFacilities")}</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-secondary">24/7</div>
                                <div className="text-sm text-muted-foreground">{t("hero.statsEmergency")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[320px] lg:h-[420px]">
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-primary">
                            <Image
                                src="/imagess/1image.png"
                                alt="Medical Professional"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-xl p-4 medical-card">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-bold text-primary">{t("hero.expertCare")}</div>
                                    <div className="text-sm text-muted-foreground">{t("hero.supportAvailable")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
