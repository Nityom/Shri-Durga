import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Scissors, CheckCircle, Phone, Calendar } from "lucide-react"

export default function GeneralSurgeryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                                <Scissors className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">GENERAL SURGERY</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Expert Surgical Care
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Our experienced general surgeon provides comprehensive surgical solutions using modern techniques for various conditions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">
                                    Book Appointment
                                </Link>
                                <Link href="tel:+919771447716" className="btn-outline">
                                    <Phone size={18} className="mr-2" />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                            <Image
                                src="/images/general-surgery.jpg"
                                alt="General Surgery"
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
                                src="/images/doctor-1.png"
                                alt="Dr. Vishal Kumar"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Dr. Vishal Kumar</h2>
                            <p className="text-primary font-semibold mb-2">MBBS, MS (General Surgeon)</p>
                            <p className="text-muted-foreground mb-4">
                                Expert general surgeon with extensive experience in performing various surgical procedures. Dedicated to providing quality surgical care with patient safety as the top priority.
                            </p>
                            <Link href="/doctors/dr-vishal-kumar" className="text-secondary font-semibold text-sm hover:underline">
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
                            Surgical Procedures We Offer
                        </h2>
                        <p className="text-muted-foreground">
                            Comprehensive range of general surgical procedures with modern techniques
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Abdominal Surgery",
                            "Hernia Repair",
                            "Gallbladder Surgery",
                            "Thyroid Surgery",
                            "Appendectomy",
                            "Bowel Surgery",
                            "Surgical Wound Care",
                            "Emergency Surgery"
                        ].map((procedure, index) => (
                            <div key={index} className="medical-card rounded-xl p-6 text-center">
                                <CheckCircle className="text-secondary mx-auto mb-3" size={32} />
                                <h3 className="font-semibold text-[#2C3E50]">{procedure}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Why Choose Our Surgical Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Experienced Surgeon</h3>
                            <p className="text-muted-foreground text-sm">
                                Expert general surgeon with proven track record in various surgical procedures
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Modern Facilities</h3>
                            <p className="text-muted-foreground text-sm">
                                Well-equipped operation theater with modern surgical instruments
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Patient-Centered Care</h3>
                            <p className="text-muted-foreground text-sm">
                                Comprehensive pre and post-operative care with patient comfort as priority
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Need Surgical Consultation?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Consult with our experienced general surgeon for proper diagnosis and treatment plan
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/appointment" className="btn-secondary">
                            <Calendar size={18} className="mr-2" />
                            Book Appointment
                        </Link>
                        <Link href="tel:+919771447716" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                            <Phone size={18} />
                            9771447716
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
