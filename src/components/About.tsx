"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export const About = () => {
    const { t } = useLanguage()
    
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative">
                    <motion.div
                        className="text-center max-w-4xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-border bg-background text-muted-foreground text-xs font-bold tracking-wider uppercase font-sans mb-6">
                            {t("about.title")}
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-primary font-serif leading-tight">
                            {t("about.subtitle")}
                        </h2>
                        <p className="mt-8 text-xl text-muted-foreground font-sans max-w-3xl mx-auto">
                            {t("about.description")}
                        </p>
                       <div className="mt-10">
  <button className="bg-[#1E3A8A] text-white px-8 py-4 rounded-full font-semibold font-sans">
    Discover More
  </button>
</div>

                    </motion.div>

                    {/* Decorative floating images matching the design vibe */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden lg:block absolute top-1/2 -left-12 -translate-y-1/2 w-48 h-32 bg-muted rounded-lg -rotate-6 overflow-hidden shadow-lg border-4 border-background"
                    >
                        <Image
                            src="/imagess/8image.jpeg"
                            alt="Medical Technology"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:block absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-32 bg-muted rounded-lg rotate-6 overflow-hidden shadow-lg border-4 border-background"
                    >
                        <Image
                            src="/imagess/9image.jpeg"
                            alt="Patient Care"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
