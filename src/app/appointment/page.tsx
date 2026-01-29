"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const getDepartments = (t: (key: string) => string) => [
    t("services.cardiology"),
    t("services.neurology"),
    t("services.orthopedics"),
    t("services.pediatrics"),
    t("services.generalMedicine"),
    t("services.dermatology"),
    t("services.ophthalmology"),
    t("services.ent"),
    t("services.gynecology"),
    t("services.oncology")
]

const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
]

export default function AppointmentPage() {
    const { t } = useLanguage()
    const departments = getDepartments(t)
    
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        department: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        reason: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setSubmitted(true)
        setIsSubmitting(false)
    }

    const updateForm = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const canProceed = () => {
        if (step === 1) return formData.department && formData.date && formData.time
        if (step === 2) return formData.name && formData.email && formData.phone && formData.age && formData.gender
        return true
    }

    if (submitted) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle2 className="text-green-600" size={48} />
                        </motion.div>
                        <h1 className="text-4xl font-bold text-slate-900 font-serif mb-4">
                            {t("appointmentPage.successTitle")}
                        </h1>
                        <p className="text-slate-600 font-sans mb-8">
                            {t("appointmentPage.successMessage")}
                        </p>
                        <div className="bg-white rounded-2xl p-8 text-left mb-8 border-2 border-slate-200 shadow-lg">
                            <h3 className="font-bold text-slate-900 mb-4">{t("appointmentPage.detailsTitle")}</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">{t("appointmentPage.department")}</span>
                                    <span className="font-semibold text-slate-900">{formData.department}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">{t("appointmentPage.preferredDate")}</span>
                                    <span className="font-semibold text-slate-900">{formData.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">{t("appointmentPage.preferredTime")}</span>
                                    <span className="font-semibold text-slate-900">{formData.time}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">{t("appointmentPage.patient")}</span>
                                    <span className="font-semibold text-slate-900">{formData.name}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="btn-primary text-white px-8 py-4 rounded-full font-bold shadow-lg"
                        >
                            {t("appointmentPage.backHome")}
                        </button>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                            {t("appointmentPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 font-serif mb-4">
                            {t("appointmentPage.title")}
                        </h1>
                        <p className="text-slate-600 font-sans text-lg">
                            {t("appointmentPage.description")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-12 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between relative">
                        <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 -z-10" />
                        <div
                            className="absolute top-5 left-0 h-1 bg-primary -z-10 transition-all"
                            style={{ width: `${((step - 1) / 2) * 100}%` }}
                        />
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${s <= step ? 'bg-primary text-white shadow-lg' : 'bg-white border-2 border-slate-200 text-slate-400'
                                    }`}>
                                    {s}
                                </div>
                                <span className={`text-sm mt-3 font-semibold ${s <= step ? 'text-slate-900' : 'text-slate-400'}`}>
                                    {s === 1 ? t("appointmentPage.selectSlot") : s === 2 ? t("appointmentPage.yourDetails") : t("appointmentPage.confirm")}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Select Slot */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <div>
                                    <label className="block text-lg font-bold text-slate-900 mb-4">{t("appointmentPage.selectDepartment")}</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {departments.map((dept) => (
                                            <button
                                                key={dept}
                                                type="button"
                                                onClick={() => updateForm('department', dept)}
                                                className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                                                    formData.department === dept
                                                        ? 'border-primary bg-primary text-white shadow-md'
                                                        : 'border-slate-200 hover:border-primary/50 hover:bg-primary/5 text-slate-700 bg-white'
                                                    }`}
                                            >
                                                {dept}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-lg font-bold text-slate-900 mb-4">
                                        <Calendar className="inline mr-2" size={20} />
                                        {t("appointmentPage.selectDate")}
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => updateForm('date', e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-bold text-slate-900 mb-4">
                                        <Clock className="inline mr-2" size={20} />
                                        {t("appointmentPage.selectTime")}
                                    </label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => updateForm('time', time)}
                                                className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                                                    formData.time === time
                                                        ? 'border-primary bg-primary text-white shadow-md'
                                                        : 'border-slate-200 hover:border-primary/50 hover:bg-primary/5 text-slate-700 bg-white'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Patient Details */}
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            <User className="inline mr-2" size={16} />
                                            {t("appointmentPage.fullName")} *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => updateForm('name', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                            placeholder={t("contactPage.namePlaceholder")}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            <Mail className="inline mr-2" size={16} />
                                            {t("appointmentPage.emailAddress")} *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => updateForm('email', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                            placeholder={t("contactPage.emailPlaceholder")}
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                                            <Phone className="inline mr-2" size={16} />
                                            {t("appointmentPage.phoneNumber")} *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => updateForm('phone', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                            placeholder={t("contactPage.phonePlaceholder")}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t("appointmentPage.age")} *</label>
                                        <input
                                            type="number"
                                            required
                                            value={formData.age}
                                            onChange={(e) => updateForm('age', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                            placeholder="35"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-2">{t("appointmentPage.gender")} *</label>
                                        <select
                                            required
                                            value={formData.gender}
                                            onChange={(e) => updateForm('gender', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none bg-white text-slate-900"
                                        >
                                            <option value="">{t("common.select")}</option>
                                            <option value="male">{t("appointmentPage.male")}</option>
                                            <option value="female">{t("appointmentPage.female")}</option>
                                            <option value="other">{t("appointmentPage.other")}</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                                        <FileText className="inline mr-2" size={16} />
                                        {t("appointmentPage.reason")}
                                    </label>
                                    <textarea
                                        value={formData.reason}
                                        onChange={(e) => updateForm('reason', e.target.value)}
                                        rows={4}
                                        className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-primary outline-none resize-none bg-white text-slate-900"
                                        placeholder={t("appointmentPage.reasonPlaceholder")}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Confirm */}
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-slate-200">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">{t("appointmentPage.confirmTitle")}</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <span className="text-sm text-slate-500">{t("appointmentPage.department")}</span>
                                                <p className="font-semibold text-slate-900">{formData.department}</p>
                                            </div>
                                            <div>
                                                <span className="text-sm text-slate-500">{t("appointmentPage.dateTime")}</span>
                                                <p className="font-semibold text-slate-900">{formData.date} at {formData.time}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="text-sm text-slate-500">{t("appointmentPage.patientName")}</span>
                                                <p className="font-semibold text-slate-900">{formData.name}</p>
                                            </div>
                                            <div>
                                                <span className="text-sm text-slate-500">{t("appointmentPage.contact")}</span>
                                                <p className="font-semibold text-slate-900">{formData.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-warm/10 rounded-2xl p-6 border border-warm/20">
                                    <p className="text-sm text-warm">
                                        <strong>{t("appointmentPage.note")}</strong> {t("appointmentPage.noteMessage")}
                                    </p>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-12">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors border-2 border-slate-200"
                                >
                                    {t("appointmentPage.back")}
                                </button>
                            )}
                            <div className="ml-auto">
                                {step < 3 ? (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        disabled={!canProceed()}
                                        className="btn-primary text-white px-8 py-4 rounded-full font-bold disabled:opacity-50 shadow-lg"
                                    >
                                        {t("appointmentPage.continue")}
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary text-white px-8 py-4 rounded-full font-bold disabled:opacity-50 shadow-lg"
                                    >
                                        {isSubmitting ? t("appointmentPage.submitting") : t("appointmentPage.confirmBooking")}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    )
}
