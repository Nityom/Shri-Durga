import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

const stats = [
    { value: "5", label: "Expert Doctors" },
    { value: "24/7", label: "Emergency Care" },
    { value: "Modern", label: "Medical Facilities" },
    { value: "Trusted", label: "Healthcare" }
]

const values = [
    {
        title: "Patient-Centric Care",
        description: "Every decision we make is guided by what's best for our patients' well-being and recovery."
    },
    {
        title: "Excellence in Medicine",
        description: "We maintain the highest standards of medical practice with cutting-edge technology."
    },
    {
        title: "Expert Team",
        description: "Our team of specialists brings decades of combined experience across all medical fields."
    },
    {
        title: "24/7 Availability",
        description: "Round-the-clock emergency services and critical care support when you need it most."
    }
]

const milestones = [
    { year: "2025", title: "Foundation", description: "Shri Durga Hospital opened its doors in Muzaffarpur with a vision to provide quality multi-specialty healthcare." },
    { year: "2025", title: "Expert Team", description: "Assembled a team of 5 highly qualified specialist doctors across key medical disciplines." },
    { year: "2025", title: "Modern Facilities", description: "Equipped with modern medical equipment and facilities to serve the community." },
    { year: "2025", title: "24/7 Services", description: "Launched round-the-clock emergency and critical care services for patients." },
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                                ABOUT US
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Quality Healthcare in Muzaffarpur
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Shri Durga Hospital is a newly established multi-specialty clinic in Muzaffarpur, bringing together experienced and specialist doctors to provide quality healthcare services under one roof.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/appointment" className="btn-secondary">
                                    Book Appointment
                                </Link>
                                <Link href="/services" className="btn-outline">
                                    Our Services
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                                <Image
                                    src="/images/about-hero.jpg"
                                    alt="Shri Durga Hospital Building"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-200">
                                <div className="text-4xl font-bold text-secondary mb-1">5</div>
                                <div className="text-sm text-muted-foreground">Specialist Doctors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
                            OUR VALUES
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                            What Drives Us
                        </h2>
                        <p className="text-muted-foreground">
                            Our core values guide everything we do, from patient care to medical innovation.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="medical-card text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 section-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-primary text-white rounded-2xl p-8 shadow-lg">
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4" style={{color: 'white'}}>Our Mission</h3>
                            <p className="text-white/90 leading-relaxed mb-6">
                                To provide compassionate, patient-centered healthcare that improves the quality of life for our patients and communities. We are committed to excellence in clinical care, education, and research.
                            </p>
                            <ul className="space-y-3">
                                {["Accessible healthcare for all", "Continuous medical innovation", "Patient safety first"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-secondary text-white rounded-2xl p-8 shadow-lg">
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                            <p className="text-white/90 leading-relaxed mb-6">
                                To be the most trusted healthcare institution in India, recognized for our commitment to healing, innovation, and building healthier communities for generations to come.
                            </p>
                            <ul className="space-y-3">
                                {["Leader in medical excellence", "Pioneering healthcare innovation", "Building healthier communities"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-4">
                            OUR JOURNEY
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                            Our Journey Begins
                        </h2>
                    </div>
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="medical-card flex flex-col md:flex-row gap-6"
                            >
                                <div className="md:w-24 flex-shrink-0">
                                    <div className="text-3xl font-bold text-secondary">{milestone.year}</div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}