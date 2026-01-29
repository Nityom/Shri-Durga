"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Star, Phone, Calendar } from "lucide-react"

const doctors = [
    {
        id: "dr-vishal-kumar",
        name: "Dr. Vishal Kumar",
        specialty: "General Surgery",
        qualification: "MBBS, MS (General Surgeon)",
        experience: "Expert Surgeon",
        image: "/images/doctor-1.png",
        rating: 4.9,
        reviews: 150
    },
    {
        id: "dr-shweta",
        name: "Dr. (Mrs.) Shweta",
        specialty: "Obstetrics & Gynecology",
        qualification: "MBBS, MS (Obstetrician & Gynecologist)",
        experience: "Specialist",
        image: "/images/doctor-2.png",
        rating: 4.9,
        reviews: 180
    },
    {
        id: "dr-siddhartha",
        name: "Dr. Siddhartha",
        specialty: "Pediatrics",
        qualification: "MBBS, MD (Pediatrician)",
        experience: "Child Specialist",
        image: "/images/doctor-3.png",
        rating: 4.8,
        reviews: 120
    },
    {
        id: "dr-vijay-singh",
        name: "Dr. Vijay Singh",
        specialty: "Anesthesia & Critical Care",
        qualification: "MBBS, MD (Anesthesia & Critical Care)",
        experience: "Critical Care Specialist",
        image: "/images/doctor-4.png",
        rating: 4.8,
        reviews: 100
    },
    {
        id: "dr-sumit-kumar",
        name: "Dr. Sumit Kumar",
        specialty: "Orthopedic Surgery",
        qualification: "MBBS, MS (Orthopedic Surgeon)",
        experience: "Orthopedic Specialist",
        image: "/images/doctor-5.png",
        rating: 4.9,
        reviews: 140
    },
]

const specialties = ["All", "General Surgery", "Obstetrics & Gynecology", "Pediatrics", "Anesthesia & Critical Care", "Orthopedics"]

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
                            OUR TEAM
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Meet Our Expert Doctors
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Our team of highly qualified specialists brings decades of combined experience to provide you with the best medical care.
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
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${index === 0
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
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <Link href={`/doctors/${doctor.id}`}>
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
                                            <h3 className="text-xl font-bold text-[#2C3E50] mb-1">
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
                                                    {doctor.reviews} reviews
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4">
                            Can't Find Your Specialist?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            Call our helpline and we'll connect you with the right doctor for your needs.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="tel:+919771447716" className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 cursor-pointer">
                                <Phone size={18} /> Call Helpline
                            </Link>
                            <Link href="#" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                <Calendar size={18} /> Book Online
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
