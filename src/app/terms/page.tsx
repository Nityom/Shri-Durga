"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-secondary">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary font-serif mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground font-sans">
                            Last updated: December 6, 2024
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div className="bg-muted rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">Agreement to Terms</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    By accessing or using the services of Shri Durga Hospital, including our website, mobile applications, and healthcare facilities, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">1. Healthcare Services</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    Shri Durga Hospital provides medical and healthcare services subject to the following conditions:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Services are provided by qualified healthcare professionals</li>
                                    <li>Treatment decisions are made in consultation with patients</li>
                                    <li>Emergency services are available 24/7</li>
                                    <li>Patients must provide accurate medical history and information</li>
                                    <li>We reserve the right to refuse service in inappropriate cases</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">2. Appointments and Cancellations</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    Regarding appointments:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Appointments can be booked online, by phone, or in person</li>
                                    <li>Cancellations must be made at least 4 hours before the scheduled time</li>
                                    <li>Repeated no-shows may result in restricted booking privileges</li>
                                    <li>We reserve the right to reschedule appointments due to emergencies</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">3. Payment and Billing</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    Financial terms for our services:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Payment is due at the time of service unless covered by insurance</li>
                                    <li>We accept cash, cards, UPI, and insurance payments</li>
                                    <li>Estimates are provided before major procedures</li>
                                    <li>Disputes must be raised within 30 days of billing</li>
                                    <li>Outstanding bills may be sent to collection agencies</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">4. Website Usage</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    When using our website:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Content is for informational purposes and not medical advice</li>
                                    <li>You must not misuse or attempt to hack our systems</li>
                                    <li>Account credentials must be kept confidential</li>
                                    <li>We may update the website without notice</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">5. Limitation of Liability</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    While we strive to provide the highest quality care, Shri Durga Hospital shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, to the maximum extent permitted by law. Medical outcomes cannot be guaranteed, and treatment results may vary.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">6. Medical Records</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    Patient medical records are maintained in accordance with applicable laws and regulations. Patients may request copies of their records by submitting a written request to our Medical Records department. Processing may take up to 7 business days.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">7. Patient Responsibilities</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    Patients are expected to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Provide accurate and complete health information</li>
                                    <li>Follow prescribed treatment plans</li>
                                    <li>Treat staff and other patients with respect</li>
                                    <li>Settle bills and financial obligations promptly</li>
                                    <li>Report any concerns or complaints through proper channels</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">8. Governing Law</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Muzaffarpur, Bihar.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">9. Contact Information</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    For questions about these Terms of Service:
                                </p>
                                <div className="bg-muted rounded-xl p-6 mt-4">
                                    <p className="font-semibold text-primary">Shri Durga Hospital - Legal Department</p>
                                    <p className="text-muted-foreground">Thana Road, Kanti, Ward-17, Muzaffarpur, Bihar 843109</p>
                                    <p className="text-muted-foreground">Email: shriidurgahospital@gmail.com</p>
                                    <p className="text-muted-foreground">Phone: +91 120 2444 444</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
