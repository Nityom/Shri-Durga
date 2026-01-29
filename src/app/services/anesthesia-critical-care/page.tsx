import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Activity, CheckCircle, Phone, Calendar, Shield } from "lucide-react"

export default function AnesthesiaCriticalCarePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                                <Activity className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">ANESTHESIA & CRITICAL CARE</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Expert Anesthesia & Critical Care Services
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Specialized anesthesia services for surgical procedures and comprehensive critical care management.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">
                                    Book Appointment
                                </Link>
                                <Link href="tel:+919771447716" className="btn-outline">
                                    <Phone size={18} className="mr-2" />
                                    Emergency
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                            <Image
                                src="/images/critical-care.jpg"
                                alt="Anesthesia & Critical Care"
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
                                src="/images/doctor-4.png"
                                alt="Dr. Vijay Singh"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Dr. Vijay Singh</h2>
                            <p className="text-primary font-semibold mb-2">MBBS, MD (Anesthesia & Critical Care)</p>
                            <p className="text-muted-foreground mb-4">
                                Skilled anesthesiologist and critical care specialist ensuring patient safety during surgical procedures and providing expert care for critically ill patients.
                            </p>
                            <Link href="/doctors/dr-vijay-singh" className="text-secondary font-semibold text-sm hover:underline">
                                View Full Profile →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Our Services
                        </h2>
                        <p className="text-muted-foreground">
                            Comprehensive anesthesia and critical care services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="medical-card rounded-2xl p-8">
                            <Activity className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Anesthesia Services</h3>
                            <ul className="space-y-3">
                                {[
                                    "General Anesthesia",
                                    "Regional Anesthesia",
                                    "Local Anesthesia",
                                    "Sedation for Procedures",
                                    "Pain Management",
                                    "Pre & Post-operative Care"
                                ].map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                                        <span className="text-muted-foreground">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medical-card rounded-2xl p-8">
                            <Shield className="text-secondary mb-4" size={32} />
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-4">Critical Care Services</h3>
                            <ul className="space-y-3">
                                {[
                                    "ICU Management",
                                    "Ventilator Support",
                                    "Emergency Care",
                                    "Post-surgical Monitoring",
                                    "Vital Signs Monitoring",
                                    "Critical Patient Stabilization"
                                ].map((service, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-secondary mt-1 shrink-0" size={18} />
                                        <span className="text-muted-foreground">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Why Choose Our Critical Care Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Patient Safety First</h3>
                            <p className="text-muted-foreground text-sm">
                                Highest standards of safety during anesthesia administration
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Activity className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">24/7 Critical Care</h3>
                            <p className="text-muted-foreground text-sm">
                                Round-the-clock monitoring and care for critical patients
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Expert Specialist</h3>
                            <p className="text-muted-foreground text-sm">
                                Experienced anesthesiologist ensuring optimal patient care
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Need Critical Care Services?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Expert anesthesia and critical care available 24/7 for emergencies
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/appointment" className="btn-secondary">
                            <Calendar size={18} className="mr-2" />
                            Book Consultation
                        </Link>
                        <Link href="tel:+919771447716" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                            <Phone size={18} />
                            Emergency: 9771447716
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
