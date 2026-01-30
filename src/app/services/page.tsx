"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Baby, Stethoscope, Activity, Bone, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const getServices = (t: (key: string) => string) => [
    {
        icon: Scissors,
        title: t("services.generalSurgery"),
        slug: "general-surgery",
        description: t("service.generalSurgeryDesc"),
        features: [t("service.generalSurgeryFeature1"), t("service.generalSurgeryFeature2"), t("service.generalSurgeryFeature3"), t("service.generalSurgeryFeature4")],
        doctor: t("service.generalSurgeryDoctor")
    },
    {
        icon: Baby,
        title: t("services.gynecology"),
        slug: "obstetrics-gynecology",
        description: t("service.gynecologyDesc"),
        features: [t("service.gynecologyFeature1"), t("service.gynecologyFeature2"), t("service.gynecologyFeature3"), t("service.gynecologyFeature4")],
        doctor: t("service.gynecologyDoctor")
    },
    {
        icon: Stethoscope,
        title: t("services.pediatrics"),
        slug: "pediatrics",
        description: t("service.pediatricsDesc"),
        features: [t("service.pediatricsFeature1"), t("service.pediatricsFeature2"), t("service.pediatricsFeature3"), t("service.pediatricsFeature4")],
        doctor: t("service.pediatricsDoctor")
    },
    {
        icon: Activity,
        title: t("services.anesthesia"),
        slug: "anesthesia-critical-care",
        description: t("service.anesthesiaDesc"),
        features: [t("service.anesthesiaFeature1"), t("service.anesthesiaFeature2"), t("service.anesthesiaFeature3"), t("service.anesthesiaFeature4")],
        doctor: t("service.anesthesiaDoctor")
    },
    {
        icon: Bone,
        title: t("services.orthopedics"),
        slug: "orthopedic-surgery",
        description: t("service.orthopedicsDesc"),
        features: [t("service.orthopedicsFeature1"), t("service.orthopedicsFeature2"), t("service.orthopedicsFeature3"), t("service.orthopedicsFeature4")],
        doctor: t("service.orthopedicsDoctor")
    },
]

// Container animation for stagger effect
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
}

export default function ServicesPage() {
    const { t } = useLanguage()
    const services = getServices(t)
    
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                            {t("servicesPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            {t("servicesPage.title")}
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            {t("servicesPage.description")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer shadow-lg">
                                {t("nav.bookAppointment")} <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn-outline cursor-pointer">
                                {t("servicesPage.contactUs")}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="flex flex-wrap justify-center gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="w-full md:w-[calc(50%-1rem)]"
                            >
                                <Link href={`/services/${service.slug}`} className="cursor-pointer block">
                                    <div className="medical-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 transition-colors">
                                                <service.icon className="text-secondary transition-colors" size={32} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-[#2C3E50] mb-3 transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                                                    {service.description}
                                                </p>
                                                <p className="text-xs font-semibold text-primary mb-4">
                                                    {service.doctor}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.features.map((feature, i) => (
                                                        <span key={i} className="text-xs font-medium text-primary bg-blue-50 px-3 py-1 rounded-full">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="mt-6 flex items-center gap-2 text-secondary font-semibold text-sm">
                                                    {t("services.learnMore")} <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
                            {t("cta.title")}
                        </h2>
                        <p className="text-white mb-10 max-w-2xl mx-auto">
                            {t("cta.description")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="tel:+919771447716" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                {t("hero.emergencyCall")}: 9771447716
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
