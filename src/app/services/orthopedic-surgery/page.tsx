"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Bone, CheckCircle, Phone, Calendar, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function OrthopedicSurgeryPage() {
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
                                <Bone className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">{t("orthopedics.badge").toUpperCase()}</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                {t("orthopedics.title")}
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {t("orthopedics.description")}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">
                                    {t("orthopedics.bookAppointment")}
                                </Link>
                                <Link href="tel:+919771447716" className="btn-outline flex items-center">
                                    <Phone size={18} className="mr-2" />
                                    {t("orthopedics.callNow")}
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                            <Image
                                src="/images/orthopedic.png"
                                alt={t("orthopedics.badge")}
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
                                src="/images/doctor-5.png"
                                alt={t("orthopedics.doctorName")}
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">{t("orthopedics.doctorName")}</h2>
                            <p className="text-primary font-semibold mb-2">{t("orthopedics.doctorQualification")}</p>
                            <p className="text-muted-foreground mb-4">
                                {t("orthopedics.doctorDescription")}
                            </p>
                            {/* <Link href="/doctors/dr-sumit-kumar" className="text-secondary font-semibold text-sm hover:underline">
                                {t("orthopedics.viewProfile")}
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
                            {t("orthopedics.servicesTitle")}
                        </h2>
                        <p className="text-muted-foreground">
                            {t("orthopedics.servicesSubtitle")}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: t("orthopedics.service1Title"),
                                desc: t("orthopedics.service1Desc")
                            },
                            {
                                title: t("orthopedics.service2Title"),
                                desc: t("orthopedics.service2Desc")
                            },
                            {
                                title: t("orthopedics.service3Title"),
                                desc: t("orthopedics.service3Desc")
                            },
                            {
                                title: t("orthopedics.service4Title"),
                                desc: t("orthopedics.service4Desc")
                            },
                            {
                                title: t("orthopedics.service5Title"),
                                desc: t("orthopedics.service5Desc")
                            },
                            {
                                title: t("orthopedics.service6Title"),
                                desc: t("orthopedics.service6Desc")
                            }
                        ].map((service, index) => (
                            <div key={index} className="medical-card rounded-xl p-6">
                                <Bone className="text-secondary mb-3" size={32} />
                                <h3 className="font-bold text-[#2C3E50] mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Conditions */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            {t("orthopedics.conditionsTitle")}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="medical-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">{t("orthopedics.boneJointTitle")}</h3>
                            <ul className="space-y-2">
                                {[
                                    t("orthopedics.condition1"),
                                    t("orthopedics.condition2"),
                                    t("orthopedics.condition3"),
                                    t("orthopedics.condition4"),
                                    t("orthopedics.condition5")
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-secondary shrink-0" size={16} />
                                        <span className="text-muted-foreground text-sm">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medical-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">{t("orthopedics.otherConditionsTitle")}</h3>
                            <ul className="space-y-2">
                                {[
                                    t("orthopedics.condition6"),
                                    t("orthopedics.condition7"),
                                    t("orthopedics.condition8"),
                                    t("orthopedics.condition9"),
                                    t("orthopedics.condition10")
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-secondary shrink-0" size={16} />
                                        <span className="text-muted-foreground text-sm">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            {t("orthopedics.whyChooseTitle")}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("orthopedics.reason1Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("orthopedics.reason1Desc")}
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Bone className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("orthopedics.reason2Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("orthopedics.reason2Desc")}
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">{t("orthopedics.reason3Title")}</h3>
                            <p className="text-muted-foreground text-sm">
                                {t("orthopedics.reason3Desc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ color: '#ffffff' }}>
                        {t("orthopedics.ctaTitle")}
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        {t("orthopedics.ctaDescription")}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/appointment" className="btn-secondary flex items-center">
                            <Calendar size={18} className="mr-2" />
                            {t("orthopedics.bookAppointment")}
                        </Link>
                        <Link href="tel:+918789186308" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                            <Phone size={18} />
                            8789186308
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
