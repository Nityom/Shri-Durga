"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Baby, Stethoscope, Activity, Bone, ArrowRight } from "lucide-react"

const services = [
    {
        icon: Scissors,
        title: "General Surgery",
        slug: "general-surgery",
        description: "Expert surgical care for a wide range of conditions. Our general surgeon provides comprehensive surgical solutions with modern techniques.",
        features: ["Abdominal Surgery", "Hernia Repair", "Gallbladder Surgery", "Thyroid Surgery"],
        doctor: "Dr. Vishal Kumar - MBBS, MS (General Surgeon)"
    },
    {
        icon: Baby,
        title: "Obstetrics & Gynecology",
        slug: "obstetrics-gynecology",
        description: "Complete women's healthcare from pregnancy care to gynecological treatments. Specialized care for mothers and women's health.",
        features: ["Pregnancy Care", "Normal & C-Section Delivery", "Gynecological Surgery", "Family Planning"],
        doctor: "Dr. (Mrs.) Shweta - MBBS, MS (Obstetrician & Gynecologist)"
    },
    {
        icon: Stethoscope,
        title: "Pediatrics",
        slug: "pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents. Expert pediatric care for your child's health and development.",
        features: ["Child Health Checkups", "Vaccination", "Growth Monitoring", "Pediatric Treatment"],
        doctor: "Dr. Siddhartha - MBBS, MD (Pediatrician)"
    },
    {
        icon: Activity,
        title: "Anesthesia & Critical Care",
        slug: "anesthesia-critical-care",
        description: "Expert anesthesia services for surgical procedures and comprehensive critical care management for serious conditions.",
        features: ["Surgical Anesthesia", "Pain Management", "ICU Care", "Emergency Care"],
        doctor: "Dr. Vijay Singh - MBBS, MD (Anesthesia & Critical Care)"
    },
    {
        icon: Bone,
        title: "Orthopedic Surgery",
        slug: "orthopedic-surgery",
        description: "Expert care for bone, joint, and muscle conditions. Modern orthopedic treatments for better mobility and pain relief.",
        features: ["Fracture Treatment", "Joint Pain", "Sports Injuries", "Bone Surgery"],
        doctor: "Dr. Sumit Kumar - MBBS, MS (Orthopedic Surgeon)"
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
                            OUR SERVICES
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            World-Class Medical Services
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Comprehensive healthcare solutions delivered by expert teams with cutting-edge technology and compassionate care.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/appointment" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer shadow-lg">
                                Book Appointment <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn-outline cursor-pointer">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
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
                                                    Learn More <ArrowRight size={16} />
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
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Need Immediate Medical Attention?
                        </h2>
                        <p className="text-white mb-10 max-w-2xl mx-auto">
                            Our expert medical team is available 24/7 to help you with any health concerns.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="tel:+919771447716" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                Emergency: 9771447716
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
