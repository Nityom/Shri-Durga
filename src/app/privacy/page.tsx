"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function PrivacyPage() {
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
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground font-sans">
                            Last updated: Febuary 4 2026
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
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">Overview</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    At Shri Durga Hospital, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our hospital, use our website, or utilize our healthcare services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">1. Information We Collect</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    We may collect the following types of information:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li><strong>Personal Information:</strong> Name, address, phone number, email, date of birth, gender, and government-issued ID numbers.</li>
                                    <li><strong>Health Information:</strong> Medical history, diagnoses, treatment plans, test results, prescriptions, and insurance information.</li>
                                    <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies when using our website.</li>
                                    <li><strong>Financial Information:</strong> Billing details, payment card information, and insurance claims data.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">2. How We Use Your Information</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    We use the collected information for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Providing medical treatment and healthcare services</li>
                                    <li>Processing appointments and managing patient records</li>
                                    <li>Billing and processing insurance claims</li>
                                    <li>Communicating with you about your health and appointments</li>
                                    <li>Improving our services and patient experience</li>
                                    <li>Complying with legal and regulatory requirements</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">3. Information Sharing</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    We may share your information with:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Healthcare providers involved in your treatment</li>
                                    <li>Insurance companies for claim processing</li>
                                    <li>Laboratory and diagnostic service providers</li>
                                    <li>Government authorities as required by law</li>
                                    <li>Third-party service providers who assist our operations</li>
                                </ul>
                                <p className="text-muted-foreground font-sans leading-relaxed mt-4">
                                    We do not sell your personal or health information to third parties.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">4. Data Security</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal and health information, including encryption, access controls, secure data storage, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">5. Your Rights</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-sans">
                                    <li>Access your medical records and personal information</li>
                                    <li>Request corrections to inaccurate information</li>
                                    <li>Request deletion of your data (subject to legal requirements)</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Receive a copy of your data in a portable format</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">6. Cookies and Tracking</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">7. Children's Privacy</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    We provide healthcare services to children with parental or guardian consent. Parents and guardians can access, modify, or delete their child's information by contacting our patient services department.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary font-serif mb-4">8. Contact Us</h2>
                                <p className="text-muted-foreground font-sans leading-relaxed">
                                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                                </p>
                                <div className="bg-muted rounded-xl p-6 mt-4">
                                    <p className="font-semibold text-primary">Shri Durga Hospital - Privacy Office</p>
                                    <p className="text-muted-foreground">Thana Road, Kanti, Ward-17, Muzaffarpur, Bihar 843109</p>
                                    <p className="text-muted-foreground">Email: privacy@kailashhospital.com</p>
                                    <p className="text-muted-foreground">Helpline & Emergency: +91 9771447716</p>
                                    <p className="text-muted-foreground">WhatsApp Appointment: 9771447716</p>
                                    <p className="text-muted-foreground">After filling all the details, they should be sent to the WhatsApp number provided.</p>
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
