import Link from "next/link"

export const CTA = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-primary to-primary-hover">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <span className="inline-block py-2 px-4 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                        24/7 EMERGENCY SERVICES
                    </span>
                    <h2 className="text-3xl lg:text-4xl !text-white font-bold mb-4">
                        Need Immediate Medical Attention?
                    </h2>
                    <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                        Our emergency department is open 24/7 with rapid response teams ready to help.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="tel:+919771447716" className="btn-secondary inline-block">
                            Call Emergency: 9771447716
                        </Link>
                        <Link href="/appointment" className="btn-outline inline-block bg-transparent border-white text-white hover:bg-white hover:text-primary">
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
