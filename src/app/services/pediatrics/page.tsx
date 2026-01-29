import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Stethoscope, CheckCircle, Phone, Calendar, Heart } from "lucide-react"

export default function PediatricsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                                <Stethoscope className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">PEDIATRICS</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Expert Care for Your Children
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Specialized healthcare for infants, children, and adolescents with compassionate pediatric care.
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
                                src="/images/pediatrics.jpg"
                                alt="Pediatrics"
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
                                src="/images/doctor-3.png"
                                alt="Dr. Siddhartha"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Dr. Siddhartha</h2>
                            <p className="text-primary font-semibold mb-2">MBBS, MD (Pediatrician)</p>
                            <p className="text-muted-foreground mb-4">
                                Dedicated pediatrician with expertise in child healthcare, growth monitoring, and pediatric treatments. Committed to providing gentle and effective care for children of all ages.
                            </p>
                            <Link href="/doctors/dr-siddhartha" className="text-secondary font-semibold text-sm hover:underline">
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
                            Pediatric Services
                        </h2>
                        <p className="text-muted-foreground">
                            Comprehensive healthcare services for your child's healthy growth and development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Child Health Checkups",
                                desc: "Regular health assessments and developmental monitoring"
                            },
                            {
                                title: "Vaccination",
                                desc: "Complete immunization schedule for disease prevention"
                            },
                            {
                                title: "Growth Monitoring",
                                desc: "Tracking physical and developmental milestones"
                            },
                            {
                                title: "Common Illnesses",
                                desc: "Treatment for fever, cold, cough, and infections"
                            },
                            {
                                title: "Nutritional Guidance",
                                desc: "Dietary advice for healthy growth"
                            },
                            {
                                title: "Newborn Care",
                                desc: "Specialized care for newborns and infants"
                            }
                        ].map((service, index) => (
                            <div key={index} className="medical-card rounded-xl p-6">
                                <CheckCircle className="text-secondary mb-3" size={32} />
                                <h3 className="font-bold text-[#2C3E50] mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.desc}</p>
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
                            Why Choose Our Pediatric Care
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Heart className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Child-Friendly Environment</h3>
                            <p className="text-muted-foreground text-sm">
                                Comfortable and welcoming space designed for children's ease
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Expert Pediatrician</h3>
                            <p className="text-muted-foreground text-sm">
                                Experienced doctor specializing in children's health and development
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Comprehensive Care</h3>
                            <p className="text-muted-foreground text-sm">
                                From newborn to adolescent, we provide complete healthcare services
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Book a Pediatric Consultation
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Ensure your child's healthy growth with expert pediatric care
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
