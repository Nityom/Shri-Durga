import Link from "next/link"

const footerLinks = {
    Departments: [
        { name: "Cardiology", href: "/services" },
        { name: "Neurology", href: "/services" },
        { name: "Orthopedics", href: "/services" },
        { name: "Pediatrics", href: "/services" },
        { name: "All Services", href: "/services" },
    ],
    Company: [
        { name: "About Us", href: "/about" },
        { name: "Our Doctors", href: "/doctors" },
        { name: "Blog", href: "/blog" },
        { name: "FAQs", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ],
    Contact: [
        { name: "Emergency: 9771447716", href: "tel:+919771447716" },
        { name: "Helpline: 8789186308", href: "tel:+918789186308" },
        { name: "Book Appointment", href: "/appointment" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
}

export const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{color: 'white'}}>Shri Durga Hospital</h3>
                        <p className="text-white text-sm mb-4 leading-relaxed">
                            Experienced and specialist doctors' services now available under one roof in Muzaffarpur.
                        </p>
                        <Link href="/appointment" className="btn-secondary inline-block">
                            Book Appointment
                        </Link>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold mb-4" style={{color: 'white'}}>{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white hover:text-white/90 text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Shri Durga Hospital. All rights reserved.
                    </p>
                    <p className="text-white text-xs text-center md:text-right">
                        Thana Road, Kondhi, Ward No-17, Muzaffarpur-843109, Bihar
                    </p>
                </div>
            </div>
        </footer>
    )
}
