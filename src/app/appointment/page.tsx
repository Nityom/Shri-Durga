"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react"

const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "General Medicine",
    "Dermatology",
    "Ophthalmology",
    "ENT",
    "Gynecology",
    "Oncology"
]

const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
]

export default function AppointmentPage() {
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
            <main className="min-h-screen bg-white dark:bg-slate-900">
                <Navbar />
                <section className="pt-32 pb-24">
                    <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8"
                        >
                            <CheckCircle2 className="text-accent" size={48} />
                        </motion.div>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-serif mb-4">
                            Appointment Booked!
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 font-sans mb-8">
                            Your appointment has been successfully scheduled. You will receive a confirmation email shortly.
                        </p>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 text-left mb-8">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Appointment Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500 dark:text-slate-400">Department</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{formData.department}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 dark:text-slate-400">Date</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{formData.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 dark:text-slate-400">Time</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{formData.time}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 dark:text-slate-400">Patient</span>
                                    <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="btn-warm text-white px-8 py-4 rounded-full font-bold"
                        >
                            Back to Home
                        </button>
                    </div>
                </section>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-white dark:bg-slate-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-8 bg-slate-100 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold tracking-wider uppercase font-sans mb-4">
                            BOOK APPOINTMENT
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-serif mb-4">
                            Schedule Your Visit
                        </h1>
                        <p className="text-slate-600 dark:text-slate-300 font-sans">
                            Book an appointment with our expert doctors in just a few simple steps.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Progress Steps */}
            <section className="py-8 bg-slate-100 dark:bg-slate-800">
                <div className="max-w-3xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between relative">
                        <div className="absolute top-5 left-0 right-0 h-1 bg-slate-300 dark:bg-slate-600 -z-10" />
                        <div
                            className="absolute top-5 left-0 h-1 bg-warm -z-10 transition-all"
                            style={{ width: `${((step - 1) / 2) * 100}%` }}
                        />
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${s <= step ? 'bg-warm text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                    }`}>
                                    {s}
                                </div>
                                <span className={`text-xs mt-2 font-semibold ${s <= step ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                                    {s === 1 ? 'Select Slot' : s === 2 ? 'Your Details' : 'Confirm'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="py-16">
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
                                    <label className="block text-lg font-bold text-slate-900 dark:text-white mb-4">Select Department</label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {departments.map((dept) => (
                                            <button
                                                key={dept}
                                                type="button"
                                                onClick={() => updateForm('department', dept)}
                                                className={`p-4 rounded-xl border-2 text-sm font-semibold transition-all ${formData.department === dept
                                                    ? 'border-warm bg-warm/10 text-warm'
                                                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-900 dark:text-white'
                                                    }`}
                                            >
                                                {dept}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-lg font-bold text-slate-900 dark:text-white mb-4">
                                        <Calendar className="inline mr-2" size={20} />
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.date}
                                        onChange={(e) => updateForm('date', e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-bold text-slate-900 dark:text-white mb-4">
                                        <Clock className="inline mr-2" size={20} />
                                        Select Time
                                    </label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => updateForm('time', time)}
                                                className={`p-3 rounded-lg border-2 text-sm font-semibold transition-all ${formData.time === time
                                                    ? 'border-warm bg-warm/10 text-warm'
                                                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-900 dark:text-white'
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
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                            <User className="inline mr-2" size={16} />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => updateForm('name', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                            <Mail className="inline mr-2" size={16} />
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => updateForm('email', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                            <Phone className="inline mr-2" size={16} />
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => updateForm('phone', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Age *</label>
                                        <input
                                            type="number"
                                            required
                                            value={formData.age}
                                            onChange={(e) => updateForm('age', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="35"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Gender *</label>
                                        <select
                                            required
                                            value={formData.gender}
                                            onChange={(e) => updateForm('gender', e.target.value)}
                                            className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        >
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                                        <FileText className="inline mr-2" size={16} />
                                        Reason for Visit
                                    </label>
                                    <textarea
                                        value={formData.reason}
                                        onChange={(e) => updateForm('reason', e.target.value)}
                                        rows={4}
                                        className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-warm outline-none resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        placeholder="Briefly describe your symptoms or reason for visit..."
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
                                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Confirm Your Appointment</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <span className="text-sm text-slate-500 dark:text-slate-400">Department</span>
                                                <p className="font-semibold text-slate-900 dark:text-white">{formData.department}</p>
                                            </div>
                                            <div>
                                                <span className="text-sm text-slate-500 dark:text-slate-400">Date & Time</span>
                                                <p className="font-semibold text-slate-900 dark:text-white">{formData.date} at {formData.time}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <span className="text-sm text-slate-500 dark:text-slate-400">Patient Name</span>
                                                <p className="font-semibold text-slate-900 dark:text-white">{formData.name}</p>
                                            </div>
                                            <div>
                                                <span className="text-sm text-slate-500 dark:text-slate-400">Contact</span>
                                                <p className="font-semibold text-slate-900 dark:text-white">{formData.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-warm/10 rounded-2xl p-6 border border-warm/20">
                                    <p className="text-sm text-warm">
                                        <strong>Note:</strong> Please arrive 15 minutes before your appointment time. Bring a valid ID and any relevant medical records.
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
                                    className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                                >
                                    Back
                                </button>
                            )}
                            <div className="ml-auto">
                                {step < 3 ? (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        disabled={!canProceed()}
                                        className="btn-warm text-white px-8 py-4 rounded-full font-bold disabled:opacity-50"
                                    >
                                        Continue
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-warm text-white px-8 py-4 rounded-full font-bold disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
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
