"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Search, Phone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

// Animation variants
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
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

export default function FAQPage() {
    const { t } = useLanguage()
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
    const [searchQuery, setSearchQuery] = useState("")

    // Get FAQ categories from translations
    const faqCategories = [
        {
            name: t("faqPage.categoryGeneral"),
            questions: [
                {
                    q: t("faq.general.q1"),
                    a: t("faq.general.a1")
                },
                {
                    q: t("faq.general.q2"),
                    a: t("faq.general.a2")
                },
                {
                    q: t("faq.general.q3"),
                    a: t("faq.general.a3")
                },
                {
                    q: t("faq.general.q4"),
                    a: t("faq.general.a4")
                }
            ]
        },
        {
            name: t("faqPage.categoryAppointments"),
            questions: [
                {
                    q: t("faq.appointments.q1"),
                    a: t("faq.appointments.a1")
                },
                {
                    q: t("faq.appointments.q2"),
                    a: t("faq.appointments.a2")
                },
                {
                    q: t("faq.appointments.q3"),
                    a: t("faq.appointments.a3")
                }
            ]
        },
        {
            name: t("faqPage.categoryBilling"),
            questions: [
                {
                    q: t("faq.billing.q1"),
                    a: t("faq.billing.a1")
                },
                {
                    q: t("faq.billing.q2"),
                    a: t("faq.billing.a2")
                },
                {
                    q: t("faq.billing.q3"),
                    a: t("faq.billing.a3")
                }
            ]
        },
        {
            name: t("faqPage.categoryEmergency"),
            questions: [
                {
                    q: t("faq.emergency.q1"),
                    a: t("faq.emergency.a1")
                },
                {
                    q: t("faq.emergency.q2"),
                    a: t("faq.emergency.a2")
                },
                {
                    q: t("faq.emergency.q3"),
                    a: t("faq.emergency.a3")
                }
            ]
        },
        {
            name: t("faqPage.categoryPatientCare"),
            questions: [
                {
                    q: t("faq.patientCare.q1"),
                    a: t("faq.patientCare.a1")
                },
                {
                    q: t("faq.patientCare.q2"),
                    a: t("faq.patientCare.a2")
                },
                {
                    q: t("faq.patientCare.q3"),
                    a: t("faq.patientCare.a3")
                }
            ]
        }
    ]

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const filteredCategories = faqCategories.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q =>
            q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.questions.length > 0)

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-slate-300 bg-white text-primary text-xs font-bold tracking-wider uppercase font-sans mb-4">
                            {t("faqPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-primary font-serif mb-6">
                            {t("faqPage.title")}
                        </h1>
                        <p className="text-lg text-muted-foreground font-sans mb-8">
                            {t("faqPage.description")}
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="text"
                                placeholder={t("faqPage.searchPlaceholder")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200 bg-white text-slate-900 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, catIndex) => (
                                <motion.div
                                    key={catIndex}
                                    variants={itemVariants}
                                    className="mb-12"
                                >
                                    <h2 className="text-2xl font-bold text-primary font-serif mb-6">{category.name}</h2>
                                    <div className="space-y-4">
                                        {category.questions.map((item, qIndex) => {
                                            const itemId = `${catIndex}-${qIndex}`
                                            const isOpen = openItems[itemId]
                                            return (
                                                <div
                                                    key={qIndex}
                                                    className="medical-card rounded-2xl overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleItem(itemId)}
                                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                                    >
                                                        <span className="font-semibold text-[#2C3E50] pr-4">{item.q}</span>
                                                        <ChevronDown
                                                            className={`text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                            size={20}
                                                        />
                                                    </button>
                                                    <motion.div
                                                        initial={false}
                                                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="px-6 pb-5 text-muted-foreground font-sans leading-relaxed">
                                                            {item.a}
                                                        </p>
                                                    </motion.div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-lg text-muted-foreground">No results found for "{searchQuery}". Try different keywords.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4" style={{ color: '#ffffff' }}>
                            {t("faqPage.stillQuestions")}
                        </h2>
                        <p className="text-white/90 font-sans mb-8 max-w-xl mx-auto">
                            {t("faqPage.contactDescription")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn-secondary text-white px-8 py-4 rounded-full font-bold cursor-pointer">
                                {t("servicesPage.contactUs")}
                            </Link>
                            <Link href="tel:+918789186308" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                <Phone size={18} /> 87891 86308
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
