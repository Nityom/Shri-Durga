"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Search, Phone } from "lucide-react"
import Link from "next/link"

const faqCategories = [
    {
        name: "General",
        questions: [
            {
                q: "What are your hospital timings?",
                a: "Our hospital operates 24/7 for emergency services. OPD timings are from 8:00 AM to 8:00 PM, Monday to Saturday. Sunday OPD is available from 9:00 AM to 1:00 PM."
            },
            {
                q: "How do I book an appointment?",
                a: "You can book an appointment through our website or by calling our helpline at +91 9771447716 or +91 8789186308. Walk-in appointments are also available based on doctor availability."
            },
            {
                q: "Do you accept health insurance?",
                a: "Yes, we accept most major health insurance providers including Star Health, ICICI Lombard, Max Bupa, HDFC Ergo, and many more. Please contact our billing department for the complete list."
            },
            {
                q: "Where is the clinic located?",
                a: "Shri Durga Hospital is located at Thana Road, Kondhi, Ward No-17, Muzaffarpur-843109, Bihar. We have parking facilities available for patients."
            }
        ]
    },
    {
        name: "Appointments",
        questions: [
            {
                q: "Can I reschedule my appointment?",
                a: "Yes, you can reschedule your appointment up to 4 hours before the scheduled time. You can do this through our patient portal, mobile app, or by calling our helpline."
            },
            {
                q: "What documents do I need to bring?",
                a: "Please bring a valid photo ID, insurance card (if applicable), any previous medical records, and a list of current medications. First-time patients should arrive 15 minutes early for registration."
            },
            {
                q: "How long is the typical wait time?",
                a: "We strive to minimize wait times. For scheduled appointments, the average wait time is 15-20 minutes. Emergency cases are prioritized based on severity."
            }
        ]
    },
    {
        name: "Billing & Insurance",
        questions: [
            {
                q: "What payment methods do you accept?",
                a: "We accept cash, credit/debit cards, UPI payments, net banking, and all major insurance providers. EMI options are also available for larger bills."
            },
            {
                q: "How do I get a detailed bill?",
                a: "Detailed bills are provided at discharge. You can also access your billing history through our patient portal or request a copy from our billing department."
            },
            {
                q: "Is cashless treatment available?",
                a: "Yes, cashless treatment is available for patients with insurance from our empaneled providers. Please check with our TPA desk before admission."
            }
        ]
    },
    {
        name: "Emergency Services",
        questions: [
            {
                q: "How do I access emergency services?",
                a: "Our emergency department is open 24/7. Call 9771447716 for emergency services or visit our emergency entrance directly. For immediate assistance, call 9771447716 or 8789186308."
            },
            {
                q: "Do you have an ambulance service?",
                a: "Yes, we have ambulance service available. Call 9771447716 or 8789186308 for immediate assistance."
            },
            {
                q: "What emergency facilities do you have?",
                a: "Our emergency department includes a trauma center, cardiac emergency unit, stroke unit, and pediatric emergency. We have 24/7 specialists on call for all major specialties."
            }
        ]
    },
    {
        name: "Patient Care",
        questions: [
            {
                q: "Can family members stay overnight?",
                a: "Yes, one attendant is allowed to stay with the patient overnight in private and semi-private rooms. General ward patients can have visitors during visiting hours only."
            },
            {
                q: "What are the visiting hours?",
                a: "General visiting hours are 4:00 PM to 7:00 PM daily. ICU visiting is limited to 30 minutes, twice daily at 11:00 AM and 5:00 PM."
            },
            {
                q: "Do you provide post-discharge care?",
                a: "Yes, we offer comprehensive post-discharge support including follow-up appointments, home healthcare services, physiotherapy, and 24/7 teleconsultation."
            }
        ]
    }
]

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
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
    const [searchQuery, setSearchQuery] = useState("")

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
        <main className="min-h-screen bg-white dark:bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-slate-100 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold tracking-wider uppercase font-sans mb-4">
                            HELP CENTER
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white font-serif mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 font-sans mb-8">
                            Find answers to common questions about our services, appointments, and policies.
                        </p>

                        {/* Search */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-warm focus:ring-2 focus:ring-warm/20 outline-none"
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
                        {filteredCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                variants={itemVariants}
                                className="mb-12"
                            >
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-serif mb-6">{category.name}</h2>
                                <div className="space-y-4">
                                    {category.questions.map((item, qIndex) => {
                                        const itemId = `${catIndex}-${qIndex}`
                                        const isOpen = openItems[itemId]
                                        return (
                                            <div
                                                key={qIndex}
                                                className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleItem(itemId)}
                                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                                >
                                                    <span className="font-semibold text-slate-900 dark:text-white pr-4">{item.q}</span>
                                                    <ChevronDown
                                                        className={`text-slate-500 dark:text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                        size={20}
                                                    />
                                                </button>
                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                                                        {item.a}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-16 bg-slate-100 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-slate-300 font-sans mb-8 max-w-xl mx-auto">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#" className="btn-warm text-white px-8 py-4 rounded-full font-bold cursor-pointer">
                                Contact Support
                            </Link>
                            <Link href="tel:+911202444444" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-100 transition-colors cursor-pointer">
                                <Phone size={18} /> Call Helpline
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
