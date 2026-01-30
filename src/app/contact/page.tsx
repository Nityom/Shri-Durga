"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"
import Select from "react-select"
import { useLanguage } from "@/contexts/LanguageContext"

const getSubjectOptions = (t: (key: string) => string) => [
    { value: "appointment", label: t("contactPage.subjectAppointment") },
    { value: "inquiry", label: t("contactPage.subjectInquiry") },
    { value: "feedback", label: t("contactPage.subjectFeedback") },
    { value: "billing", label: t("contactPage.subjectBilling") },
    { value: "other", label: t("contactPage.subjectOther") }
]

const getContactInfo = (t: (key: string) => string) => [
    {
        icon: Phone,
        title: t("contactPage.emergency"),
        value: "9771447716",
        subtitle: t("contactPage.available")
    },
    {
        icon: Phone,
        title: t("contactPage.phone"),
        value: "8789186308",
        subtitle: t("contactPage.monSun")
    },
    {
        icon: Mail,
        title: t("contactPage.email"),
        value: "info@shridurgahospital.in",
        subtitle: t("contactPage.reply")
    },
    {
        icon: MapPin,
        title: t("contactPage.location"),
        value: t("contactPage.address"),
        subtitle: t("contactPage.city")
    }
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

export default function ContactPage() {
    const { t } = useLanguage()
    const subjectOptions = getSubjectOptions(t)
    const contactInfo = getContactInfo(t)
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))
        setSubmitted(true)
        setIsSubmitting(false)
    }

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
                        className="text-center"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                            {t("contactPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            {t("contact.title")}
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t("contactPage.description")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 -mt-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="medical-card rounded-2xl p-6 shadow-lg hover-lift"
                            >
                                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                                    <info.icon className="text-secondary" size={24} />
                                </div>
                                <h3 className="font-bold text-[#2C3E50] text-sm mb-1">{info.title}</h3>
                                <p className="text-lg font-semibold text-[#2C3E50] mb-1">{info.value}</p>
                                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="medical-card rounded-3xl p-8 lg:p-12 shadow-lg"
                        >
                            <h2 className="text-3xl font-bold mb-2 text-[#2C3E50]">{t("contactPage.formTitle")}</h2>
                            <p className="text-muted-foreground mb-8">{t("contact.description")}</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                        <Send className="text-secondary" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{t("contactPage.thankYou")}</h3>
                                    <p className="text-muted-foreground">{t("contactPage.received")}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#2C3E50] mb-2">{t("contact.name")} *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#2C3E50] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                                placeholder={t("contactPage.namePlaceholder")}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#2C3E50] mb-2">{t("contact.email")} *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#2C3E50] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                                placeholder={t("contactPage.emailPlaceholder")}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#2C3E50] mb-2">{t("contact.phone")}</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#2C3E50] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                                                placeholder={t("contactPage.phonePlaceholder")}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[#2C3E50] mb-2">{t("contactPage.subject")} *</label>
                                            <Select
                                                options={subjectOptions}
                                                value={subjectOptions.find(opt => opt.value === formData.subject) || null}
                                                onChange={(option) => setFormData({ ...formData, subject: option?.value || "" })}
                                                placeholder="Select a subject..."
                                                isSearchable={false}
                                                classNames={{
                                                    control: (state) =>
                                                        `!rounded-xl !border !border-gray-200 !bg-white !min-h-[48px] !shadow-none ${state.isFocused ? '!border-secondary !ring-2 !ring-secondary/20' : ''}`,
                                                    menu: () => '!bg-white !border !border-gray-200 !rounded-xl !shadow-lg !mt-1',
                                                    menuList: () => '!py-2',
                                                    option: (state) =>
                                                        `!px-4 !py-3 !cursor-pointer ${state.isSelected ? '!bg-secondary !text-white' : state.isFocused ? '!bg-blue-50' : '!bg-transparent'} !text-[#2C3E50]`,
                                                    singleValue: () => '!text-[#2C3E50]',
                                                    placeholder: () => '!text-gray-400',
                                                    indicatorSeparator: () => '!hidden',
                                                    dropdownIndicator: () => '!text-gray-400 hover:!text-primary',
                                                }}
                                                styles={{
                                                    control: (base) => ({ ...base, cursor: 'pointer' }),
                                                    option: (base, state) => ({
                                                        ...base,
                                                        backgroundColor: state.isSelected ? '#10b981' : state.isFocused ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                                        color: state.isSelected ? 'white' : '#2C3E50',
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-[#2C3E50] mb-2">{t("contact.message")} *</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#2C3E50] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                                            placeholder={t("contactPage.messagePlaceholder")}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-secondary px-8 py-4 rounded-full font-bold w-full disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? t("contactPage.submitting") : t("contactPage.submit")}
                                        <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map & Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-8"
                        >
                            {/* Map */}
                            <div className="medical-card rounded-3xl overflow-hidden shadow-lg h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.7391234567890!2d85.2920038!3d26.2077809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDEyJzIyLjgiTiA4NcKwMTcnNDcuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* Operating Hours */}
                            <div className="medical-card rounded-3xl p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Clock className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#2C3E50] text-lg">{t("contactPage.operatingHours")}</h3>
                                        <p className="text-sm text-muted-foreground">{t("contactPage.hereWhenNeeded")}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-muted-foreground">{t("contactPage.emergency")}</span>
                                        <span className="font-semibold text-secondary">{t("contactPage.open24x7")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-muted-foreground">{t("contactPage.opd")}</span>
                                        <span className="font-semibold text-[#2C3E50]">{t("contactPage.opdTime")}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                        <span className="text-muted-foreground">{t("contactPage.laboratory")}</span>
                                        <span className="font-semibold text-[#2C3E50]">{t("contactPage.labTime")}</span>
                                    </div>
                                    {/* <div className="flex justify-between items-center py-3">
                                        <span className="text-muted-foreground">{t("contactPage.pharmacy")}</span>
                                        <span className="font-semibold text-[#2C3E50]">{t("contactPage.open24x7")}</span>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
