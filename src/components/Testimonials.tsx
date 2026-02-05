"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const getTestimonials = (t: (key: string) => string) => [
    {
        id: 1,
        name: t("testimonials.patient1Name"),
        role: t("testimonials.patient1Role"),
        quote: t("testimonials.patient1Quote"),
        rating: 5,
    },
    {
        id: 2,
        name: t("testimonials.patient2Name"),
        role: t("testimonials.patient2Role"),
        quote: t("testimonials.patient2Quote"),
        rating: 5,
    },
    {
        id: 3,
        name: t("testimonials.patient3Name"),
        role: t("testimonials.patient3Role"),
        quote: t("testimonials.patient3Quote"),
        rating: 5,
    }
]

export const Testimonials = () => {
    const { t } = useLanguage()
    const testimonials = getTestimonials(t)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)",
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)",
        }),
    }

    return (
        <section id="reviews" className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-12">
                        {t("testimonials.subtitle")}
                    </h2>

                    <div className="relative min-h-[300px] flex flex-col justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.2 },
                                    filter: { duration: 0.2 }
                                }}
                                className="w-full"
                            >
                                <div className="flex justify-center mb-6 gap-1">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <blockquote className="text-xl lg:text-2xl text-slate-300 font-sans leading-relaxed mb-12">
                                    "{testimonials[currentIndex].quote}"
                                </blockquote>

                                <div className="flex items-center justify-center gap-4">
                                    {/* <div className="w-12 h-12 bg-slate-700 rounded-full overflow-hidden relative">
                                        <Image
                                            src="/images/doctor-1.png"
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div> */}
                                    <div className="text-left">
                                        <div className="font-bold text-white font-serif">{testimonials[currentIndex].name}</div>
                                        <div className="text-sm text-slate-400 font-sans">{testimonials[currentIndex].role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-center gap-8 mt-12">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-400 hover:bg-slate-700 transition-all duration-300"
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1)
                                        setCurrentIndex(index)
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-slate-600 hover:bg-slate-500"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
