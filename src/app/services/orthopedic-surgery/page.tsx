import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Bone, CheckCircle, Phone, Calendar, Shield } from "lucide-react"

export default function OrthopedicSurgeryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-4">
                                <Bone className="text-secondary" size={20} />
                                <span className="text-sm font-semibold text-primary">ORTHOPEDIC SURGERY</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Expert Orthopedic Care
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Specialized care for bone, joint, and muscle conditions with modern orthopedic treatments.
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
                                src="/images/orthopedic.jpg"
                                alt="Orthopedic Surgery"
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
                                src="/images/doctor-5.png"
                                alt="Dr. Sumit Kumar"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">Dr. Sumit Kumar</h2>
                            <p className="text-primary font-semibold mb-2">MBBS, MS (Orthopedic Surgeon)</p>
                            <p className="text-muted-foreground mb-4">
                                Experienced orthopedic surgeon specializing in treatment of bone, joint, and muscle disorders. Dedicated to restoring mobility and improving quality of life for patients.
                            </p>
                            <Link href="/doctors/dr-sumit-kumar" className="text-secondary font-semibold text-sm hover:underline">
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
                            Orthopedic Treatments We Offer
                        </h2>
                        <p className="text-muted-foreground">
                            Comprehensive orthopedic care for all bone and joint conditions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Fracture Treatment",
                                desc: "Expert management of bone fractures with modern techniques"
                            },
                            {
                                title: "Joint Pain Management",
                                desc: "Treatment for arthritis and joint disorders"
                            },
                            {
                                title: "Sports Injuries",
                                desc: "Specialized care for sports-related injuries"
                            },
                            {
                                title: "Bone Surgery",
                                desc: "Surgical procedures for various bone conditions"
                            },
                            {
                                title: "Spinal Problems",
                                desc: "Treatment for back pain and spinal disorders"
                            },
                            {
                                title: "Trauma Care",
                                desc: "Emergency orthopedic care for injuries"
                            }
                        ].map((service, index) => (
                            <div key={index} className="medical-card rounded-xl p-6">
                                <Bone className="text-secondary mb-3" size={32} />
                                <h3 className="font-bold text-[#2C3E50] mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Conditions */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Common Conditions We Treat
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="medical-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">Bone & Joint Problems</h3>
                            <ul className="space-y-2">
                                {[
                                    "Bone Fractures",
                                    "Arthritis",
                                    "Osteoporosis",
                                    "Joint Dislocations",
                                    "Ligament Injuries"
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-secondary shrink-0" size={16} />
                                        <span className="text-muted-foreground text-sm">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medical-card rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">Other Conditions</h3>
                            <ul className="space-y-2">
                                {[
                                    "Back Pain",
                                    "Sports Injuries",
                                    "Muscle Strains",
                                    "Tendon Problems",
                                    "Bone Infections"
                                ].map((condition, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <CheckCircle className="text-secondary shrink-0" size={16} />
                                        <span className="text-muted-foreground text-sm">{condition}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            Why Choose Our Orthopedic Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Expert Surgeon</h3>
                            <p className="text-muted-foreground text-sm">
                                Skilled orthopedic surgeon with expertise in various bone and joint treatments
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <Bone className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Modern Treatment</h3>
                            <p className="text-muted-foreground text-sm">
                                Latest orthopedic techniques for better recovery and outcomes
                            </p>
                        </div>

                        <div className="medical-card rounded-2xl p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3">Complete Care</h3>
                            <p className="text-muted-foreground text-sm">
                                From diagnosis to treatment and rehabilitation support
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Schedule Your Orthopedic Consultation
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Get expert treatment for bone, joint, and muscle problems
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/appointment" className="btn-secondary">
                            <Calendar size={18} className="mr-2" />
                            Book Appointment
                        </Link>
                        <Link href="tel:+918789186308" className="bg-white text-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:bg-blue-50 transition-colors">
                            <Phone size={18} />
                            8789186308
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
