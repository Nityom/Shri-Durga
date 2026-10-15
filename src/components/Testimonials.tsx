"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowLeft,
    ArrowRight,
    Star,
    Play,
    CheckCircle2,
    MapPin,
    X,
    ChevronLeft,
    ChevronRight,
    Video,
    Quote
} from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const getVideoReviews = (t: (key: string) => string) => [
    {
        id: "video-1",
        title: t("testimonials.video1Title"),
        description: t("testimonials.video1Desc"),
        tag: t("testimonials.video1Tag"),
        src: "/video-1.mp4",
        poster: "/images/video-1-thumb.png",
        duration: t("testimonials.video1Duration") || "0:55",
        location: t("testimonials.location"),
        channel: t("testimonials.mediaCoverage"),
        rating: 5,
    },
    {
        id: "video-2",
        title: t("testimonials.video2Title"),
        description: t("testimonials.video2Desc"),
        tag: t("testimonials.video2Tag"),
        src: "/video-2.mp4",
        poster: "/images/video-2-thumb.png",
        duration: t("testimonials.video2Duration") || "0:36",
        location: t("testimonials.location"),
        channel: t("testimonials.mediaCoverage"),
        rating: 5,
    },
    {
        id: "video-3",
        title: t("testimonials.video3Title"),
        description: t("testimonials.video3Desc"),
        tag: t("testimonials.video3Tag"),
        src: "/video-3.mp4",
        poster: "/images/video-3-thumb.png",
        duration: t("testimonials.video3Duration") || "0:53",
        location: t("testimonials.location"),
        channel: t("testimonials.mediaCoverage"),
        rating: 5,
    },
]

const getWrittenTestimonials = (t: (key: string) => string) => [
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
    },
]

export const Testimonials = () => {
    const { t } = useLanguage()
    const videoReviews = getVideoReviews(t)
    const writtenTestimonials = getWrittenTestimonials(t)

    // Modal state for video player
    const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null)
    const modalVideoRef = useRef<HTMLVideoElement>(null)

    // Written review slider state
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const handleNextWritten = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % writtenTestimonials.length)
    }

    const handlePrevWritten = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + writtenTestimonials.length) % writtenTestimonials.length)
    }

    // Modal navigation
    const handleNextVideo = () => {
        if (activeVideoIndex === null) return
        setActiveVideoIndex((activeVideoIndex + 1) % videoReviews.length)
    }

    const handlePrevVideo = () => {
        if (activeVideoIndex === null) return
        setActiveVideoIndex((activeVideoIndex - 1 + videoReviews.length) % videoReviews.length)
    }

    const handleCloseModal = () => {
        if (modalVideoRef.current) {
            modalVideoRef.current.pause()
        }
        setActiveVideoIndex(null)
    }

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleCloseModal()
            } else if (e.key === "ArrowRight" && activeVideoIndex !== null) {
                handleNextVideo()
            } else if (e.key === "ArrowLeft" && activeVideoIndex !== null) {
                handlePrevVideo()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [activeVideoIndex])

    // Prevent body scroll when video modal is open
    useEffect(() => {
        if (activeVideoIndex !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [activeVideoIndex])

    const writtenVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 30 : -30,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 30 : -30,
            opacity: 0,
        }),
    }

    const currentVideo = activeVideoIndex !== null ? videoReviews[activeVideoIndex] : null

    return (
        <section
            id="reviews"
            className="py-20 text-white relative"
            style={{ backgroundColor: "#1e3ea2" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm">
                        <Video size={16} className="text-white" />
                        <span style={{ color: "#ffffff" }}>{t("testimonials.videoBadge")}</span>
                    </div>
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif mb-4"
                        style={{ color: "#ffffff" }}
                    >
                        {t("testimonials.subtitle")}
                    </h2>
                    <p className="text-base sm:text-lg font-sans leading-relaxed" style={{ color: "#ffffff", opacity: 0.95 }}>
                        {t("testimonials.description")}
                    </p>
                </div>

                {/* Video Reviews Grid */}
                <div className="mb-16">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-4 border-b border-white/20 gap-4">
                        <div>
                            <h3
                                className="text-xl sm:text-2xl font-bold font-serif"
                                style={{ color: "#ffffff" }}
                            >
                                {t("testimonials.videoTitle")}
                            </h3>
                            <p className="text-sm mt-1" style={{ color: "#ffffff", opacity: 0.9 }}>
                                {t("testimonials.videoSubtitle")}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-white bg-white/15 px-3.5 py-1.5 rounded-full border border-white/30 w-fit">
                            <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                            <span style={{ color: "#ffffff" }}>{t("testimonials.verifiedPatient")}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videoReviews.map((video, idx) => (
                            <div
                                key={video.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-white/20 flex flex-col cursor-pointer"
                                onClick={() => setActiveVideoIndex(idx)}
                            >
                                {/* Video Thumbnail / Poster Container (No hover zoom) */}
                                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                    <Image
                                        src={video.poster}
                                        alt={video.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* News Badge (Top Left) */}
                                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-1 rounded-md text-xs font-bold shadow-md">
                                        <span className="w-2 h-2 rounded-full bg-white" />
                                        <span style={{ color: "#ffffff" }}>{video.channel}</span>
                                    </div>

                                    {/* Duration Badge (Bottom Right) */}
                                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                                        {video.duration}
                                    </div>

                                    {/* Location Badge (Top Right) */}
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/75 text-white text-xs px-2.5 py-1 rounded-full border border-white/20">
                                        <MapPin size={12} className="text-white" />
                                        <span style={{ color: "#ffffff" }}>Muzaffarpur</span>
                                    </div>

                                    {/* Static Play Button (No hover pulse/scale) */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl border-2 border-white"
                                            style={{ backgroundColor: "#1e3ea2" }}
                                        >
                                            <Play size={22} className="fill-white translate-x-0.5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Video Card Info - Highly readable dark text on white card */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Tag & Rating */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span
                                                className="text-xs font-bold px-2.5 py-1 rounded-full border"
                                                style={{
                                                    backgroundColor: "#eff6ff",
                                                    color: "#1e3ea2",
                                                    borderColor: "#bfdbfe",
                                                }}
                                            >
                                                {video.tag}
                                            </span>
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(video.rating)].map((_, i) => (
                                                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4
                                            className="text-base font-bold line-clamp-2 mb-2 font-serif"
                                            style={{ color: "#0f172a" }}
                                        >
                                            {video.title}
                                        </h4>

                                        {/* Description */}
                                        <p
                                            className="text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4"
                                            style={{ color: "#475569" }}
                                        >
                                            {video.description}
                                        </p>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                                            <CheckCircle2 size={15} className="text-emerald-600" />
                                            <span>{t("testimonials.verifiedPatient")}</span>
                                        </div>
                                        <span
                                            className="text-xs font-bold text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
                                            style={{ backgroundColor: "#1e3ea2", color: "#ffffff" }}
                                        >
                                            <span>{t("testimonials.watchVideo")}</span>
                                            <ArrowRight size={13} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Written Testimonials Carousel */}
                <div className="pt-10 border-t border-white/20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Quote size={22} className="text-white" />
                            <h3
                                className="text-xl sm:text-2xl font-bold font-serif"
                                style={{ color: "#ffffff" }}
                            >
                                {t("testimonials.writtenSubtitle")}
                            </h3>
                        </div>

                        {/* White rounded container for maximum quote text legibility */}
                        <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 my-6">
                            <div className="relative min-h-[160px] flex flex-col justify-center">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={writtenVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.2 }}
                                        className="w-full"
                                    >
                                        <div className="flex justify-center mb-4 gap-1">
                                            {[...Array(writtenTestimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={18} className="fill-amber-300 text-amber-300" />
                                            ))}
                                        </div>

                                        <blockquote
                                            className="text-base sm:text-lg font-sans leading-relaxed mb-5 max-w-2xl mx-auto italic font-medium"
                                            style={{ color: "#ffffff" }}
                                        >
                                            "{writtenTestimonials[currentIndex].quote}"
                                        </blockquote>

                                        <div className="text-center">
                                            <div
                                                className="font-bold font-serif text-base sm:text-lg"
                                                style={{ color: "#ffffff" }}
                                            >
                                                {writtenTestimonials[currentIndex].name}
                                            </div>
                                            <div
                                                className="text-xs sm:text-sm font-sans font-medium mt-0.5"
                                                style={{ color: "#e0e7ff" }}
                                            >
                                                {writtenTestimonials[currentIndex].role}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Written Slider Controls */}
                        <div className="flex items-center justify-center gap-6 mt-4">
                            <button
                                onClick={handlePrevWritten}
                                aria-label="Previous testimonial"
                                className="w-10 h-10 rounded-full bg-white text-[#1e3ea2] flex items-center justify-center shadow-md font-bold"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <div className="flex gap-2">
                                {writtenTestimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentIndex ? 1 : -1)
                                            setCurrentIndex(index)
                                        }}
                                        aria-label={`Go to slide ${index + 1}`}
                                        className={`h-2.5 rounded-full transition-all ${
                                            index === currentIndex ? "bg-white w-8" : "bg-white/40 w-2.5"
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNextWritten}
                                aria-label="Next testimonial"
                                className="w-10 h-10 rounded-full bg-white text-[#1e3ea2] flex items-center justify-center shadow-md font-bold"
                            >
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Player Lightbox */}
            <AnimatePresence>
                {activeVideoIndex !== null && currentVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md"
                        onClick={handleCloseModal}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div
                            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                            style={{ backgroundColor: "#1e3ea2" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div
                                className="flex items-center justify-between px-5 py-3.5 border-b border-white/20"
                                style={{ backgroundColor: "#162f80" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 rounded text-xs font-bold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                        <span style={{ color: "#ffffff" }}>{currentVideo.channel}</span>
                                    </div>
                                    <span
                                        className="text-xs sm:text-sm font-semibold"
                                        style={{ color: "#ffffff" }}
                                    >
                                        {currentVideo.tag} • {currentVideo.location}
                                    </span>
                                </div>

                                <button
                                    onClick={handleCloseModal}
                                    className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center"
                                    aria-label={t("testimonials.close")}
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* HTML5 Video Player */}
                            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                                <video
                                    ref={modalVideoRef}
                                    key={currentVideo.src}
                                    src={currentVideo.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-contain"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Modal Footer / Navigation & Info */}
                            <div
                                className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                                style={{ backgroundColor: "#1e3ea2" }}
                            >
                                <div>
                                    <h4
                                        className="text-base sm:text-lg font-bold font-serif mb-1"
                                        style={{ color: "#ffffff" }}
                                    >
                                        {currentVideo.title}
                                    </h4>
                                    <p
                                        className="text-xs sm:text-sm"
                                        style={{ color: "#ffffff", opacity: 0.9 }}
                                    >
                                        {currentVideo.description}
                                    </p>
                                </div>

                                {/* Modal Next / Prev Switcher */}
                                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                                    <button
                                        onClick={handlePrevVideo}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-bold"
                                        aria-label={t("testimonials.previous")}
                                    >
                                        <ChevronLeft size={16} />
                                        <span className="hidden sm:inline" style={{ color: "#ffffff" }}>
                                            {t("testimonials.previous")}
                                        </span>
                                    </button>
                                    <span
                                        className="text-xs font-mono font-bold px-2"
                                        style={{ color: "#ffffff" }}
                                    >
                                        {activeVideoIndex + 1} / {videoReviews.length}
                                    </span>
                                    <button
                                        onClick={handleNextVideo}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-bold"
                                        aria-label={t("testimonials.next")}
                                    >
                                        <span className="hidden sm:inline" style={{ color: "#ffffff" }}>
                                            {t("testimonials.next")}
                                        </span>
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
