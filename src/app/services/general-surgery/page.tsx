"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Scissors, CheckCircle, Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function GeneralSurgeryPage() {
    const { t } = useLanguage()
    
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                                <Scissors className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">{t("generalSurgery.badge").toUpperCase()}</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                {t("generalSurgery.title")}
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {t("generalSurgery.description")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">
                                    {t("generalSurgery.bookAppointment")}
                                </Link>
                                <Link href="tel:+918789186308" className="btn-outline flex items-center">
                                    <Phone size={18} className="mr-2" />
                                    {t("generalSurgery.callNow")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                            <Image
                                src="/images/general-surgery.png"
                                alt={t("generalSurgery.badge")}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Info */}
            <section className="py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="medical-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            <Image
                                src="/images/doctor-1.png"
                                alt={t("generalSurgery.doctorName")}
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">{t("generalSurgery.doctorName")}</h2>
                            <p className="text-primary font-semibold mb-2">{t("generalSurgery.doctorQualification")}</p>
                            <p className="text-muted-foreground mb-4">
                                {t("generalSurgery.doctorDescription")}
                            </p>
                            {/* <Link href="/doctors/dr-vishal-kumar" className="text-secondary font-semibold text-sm hover:underline">
                                {t("generalSurgery.viewProfile")}
                            </Link> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            {t("generalSurgery.servicesTitle")}
                        </h2>
                        <p className="text-muted-foreground">
                            {t("generalSurgery.servicesSubtitle")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            t("generalSurgery.procedure1"),
                            t("generalSurgery.procedure2"),
                            t("generalSurgery.procedure3"),
                            t("generalSurgery.procedure4"),
                            t("generalSurgery.procedure5"),
                            t("generalSurgery.procedure6"),
                            t("generalSurgery.procedure7"),
                            t("generalSurgery.procedure8")
                        ].map((procedure, index) => (
                            <div key={index} className="medical-card rounded-xl p-6 text-center">
                                <CheckCircle className="text-secondary mx-auto mb-3" size={32} />
                                <h3 className="font-semibold text-[#2C3E50]">{procedure}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            {t("generalSurgery.whyChooseTitle")}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("generalSurgery.reason1Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("generalSurgery.reason1Desc")}
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("generalSurgery.reason2Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("generalSurgery.reason2Desc")}
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("generalSurgery.reason3Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("generalSurgery.reason3Desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ color: '#ffffff' }}>
                        {t("generalSurgery.ctaTitle")}
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        {t("generalSurgery.ctaDescription")}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/appointment" className="btn-secondary flex items-center">
                            <Calendar size={18} className="mr-2" />
                            {t("generalSurgery.bookAppointment")}
                        </Link>
                        <Link href="tel:+918789186308" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                            <Phone size={18} />
                            87891 86308
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
