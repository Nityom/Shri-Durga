"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Star, Phone, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"

const getDoctors = (t: (key: string) => string) => [
    {
        id: "dr-vishal-kumar",
        name: t("doctor.vishalKumar"),
        specialty: t("services.generalSurgery"),
        qualification: t("service.generalSurgeryDoctor"),
        experience: t("doctor.expertSurgeon"),
        image: "/images/doctor-1.png",
        rating: 4.9,
        reviews: 150
    },
    {
        id: "dr-shweta",
        name: t("doctor.shweta"),
        specialty: t("services.gynecology"),
        qualification: t("service.gynecologyDoctor"),
        experience: t("doctor.specialist"),
        image: "/images/doctor-2.png",
        rating: 4.9,
        reviews: 180
    },
    {
        id: "dr-siddhartha",
        name: t("doctor.siddhartha"),
        specialty: t("services.pediatrics"),
        qualification: t("service.pediatricsDoctor"),
        experience: t("doctor.childSpecialist"),
        image: "/images/doctor-3.png",
        rating: 4.8,
        reviews: 120
    },
    {
        id: "dr-vijay-singh",
        name: t("doctor.vijaySingh"),
        specialty: t("services.anesthesia"),
        qualification: t("service.anesthesiaDoctor"),
        experience: t("doctor.criticalCareSpecialist"),
        image: "/images/doctor-4.png",
        rating: 4.8,
        reviews: 100
    },
    {
        id: "dr-sumit-kumar",
        name: t("doctor.sumitKumar"),
        specialty: t("services.orthopedics"),
        qualification: t("service.orthopedicsDoctor"),
        experience: t("doctor.orthopedicSpecialist"),
        image: "/images/doctor-5.png",
        rating: 4.9,
        reviews: 140
    },
]

const getSpecialties = (t: (key: string) => string) => [
    t("doctorsPage.allSpecialties"), 
    t("services.generalSurgery"), 
    t("services.gynecology"), 
    t("services.pediatrics"), 
    t("services.anesthesia"), 
    t("services.orthopedics")
]

// Container animation for stagger effect
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
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

export default function DoctorsPage() {
    const { t } = useLanguage()
    const doctors = getDoctors(t)
    const specialties = getSpecialties(t)
    const [selectedSpecialty, setSelectedSpecialty] = useState(0)
    
    const filteredDoctors = selectedSpecialty === 0 
        ? doctors 
        : doctors.filter(doctor => doctor.specialty === specialties[selectedSpecialty])
    
    console.log('Doctors:', doctors)
    console.log('Filtered Doctors:', filteredDoctors)
    console.log('Specialties:', specialties)
    console.log('Selected Specialty:', selectedSpecialty)
    
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
                        <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                            {t("doctorsPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            {t("doctorsPage.title")}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {t("doctorsPage.description")}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 border-b border-gray-200 sticky top-20 bg-white z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {specialties.map((specialty, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSpecialty(index)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${index === selectedSpecialty
                                    ? 'bg-primary text-white'
                                    : 'bg-blue-50 text-primary hover:bg-blue-100'
                                    }`}
                            >
                                {specialty}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Doctors Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {filteredDoctors.map((doctor) => (
                            <div key={doctor.id} className="w-full md:w-[calc(45%-1rem)] lg:w-[calc(28%-1.5rem)]">
                                {/* <Link href={`/doctors/${doctor.id}`}> */}
                                    <div className="medical-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                        <div className="aspect-4/5 relative bg-gray-100 overflow-hidden">
                                            <Image
                                                src={doctor.image}
                                                alt={doctor.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                                                <Star className="text-yellow-400 fill-yellow-400" size={14} />
                                                <span className="text-sm font-bold text-[#2C3E50]">{doctor.rating}</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                                                {doctor.specialty}
                                            </div>
                                            <h3 className="text-lg font-bold text-[#2C3E50] mb-1 whitespace-nowrap text-center">
                                                {doctor.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {doctor.qualification}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold text-[#2C3E50]">
                                                    {doctor.experience}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {doctor.reviews} {t("doctorsPage.reviews")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-4" style={{ color: '#ffffff' }}>
                            {t("cta.title")}
                        </h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            {t("cta.description")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="tel:+919771447716" className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 cursor-pointer">
                                <Phone size={18} /> {t("contactPage.phoneTitle")}
                            </Link>
                            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                <Calendar size={18} /> {t("nav.bookAppointment")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
