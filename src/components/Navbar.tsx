"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"
import { Globe } from "lucide-react"

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
    const pathname = usePathname()
    const { language, setLanguage, t } = useLanguage()
    
    const navigationLinks = [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.about"), href: "/about" },
        { name: t("nav.services"), href: "/services" },
        { name: t("nav.doctors"), href: "/doctors" },
        // { name: t("nav.blog"), href: "/blog" },
        { name: t("nav.contact"), href: "/contact" },
    ]

    const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), [])
    const toggleLanguageMenu = useCallback(() => setIsLanguageMenuOpen(prev => !prev), [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsLanguageMenuOpen(false)
    }, [pathname])
    
    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest('.language-selector')) {
                setIsLanguageMenuOpen(false)
            }
        }
        
        if (isLanguageMenuOpen) {
            document.addEventListener('click', handleClickOutside)
            return () => document.removeEventListener('click', handleClickOutside)
        }
    }, [isLanguageMenuOpen])
    
    const handleLanguageChange = (lang: "en" | "hi") => {
        setLanguage(lang)
        setIsLanguageMenuOpen(false)
    }

    return (
        <nav className="bg-primary text-white shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/image.png"
                                alt="Shri Durga Hospital"
                                width={200}
                                height={200}
                                className="h-12 w-auto brightness-0 invert"
                            />
                            <span className="text-xl font-bold">Shri Durga Hospital</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/90 hover:text-white hover:bg-primary-hover px-3 py-2 rounded-md text-sm font-medium transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Language Selector & CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="relative language-selector">
                            <button
                                onClick={toggleLanguageMenu}
                                className="flex items-center gap-2 text-white/90 hover:text-white hover:bg-primary-hover px-3 py-2 rounded-md text-sm font-medium transition-all"
                                aria-label="Select language"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="uppercase">{language}</span>
                            </button>
                            
                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                                    <button
                                        onClick={() => handleLanguageChange("en")}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                            language === "en" ? "bg-blue-50 text-primary font-medium" : "text-gray-700"
                                        }`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange("hi")}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                            language === "hi" ? "bg-blue-50 text-primary font-medium" : "text-gray-700"
                                        }`}
                                    >
                                        हिन्दी (Hindi)
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <Link
                            href="/appointment"
                            className="btn-secondary inline-block"
                        >
                            {t("nav.bookAppointment")}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white p-2 rounded-md hover:bg-primary-hover transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-primary-hover border-t border-white/10">
                    <div className="px-4 py-4 space-y-2">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-white hover:bg-primary px-3 py-2 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        {/* Mobile Language Selector */}
                        <div className="pt-2 border-t border-white/10">
                            <div className="flex items-center gap-2 px-3 py-2 text-white text-sm">
                                <Globe className="w-4 h-4" />
                                <span>{t("nav.language")}:</span>
                            </div>
                            <div className="flex gap-2 px-3">
                                <button
                                    onClick={() => handleLanguageChange("en")}
                                    className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                                        language === "en" 
                                            ? "bg-secondary text-white font-medium" 
                                            : "bg-white/10 text-white/80 hover:bg-white/20"
                                    }`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => handleLanguageChange("hi")}
                                    className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                                        language === "hi" 
                                            ? "bg-secondary text-white font-medium" 
                                            : "bg-white/10 text-white/80 hover:bg-white/20"
                                    }`}
                                >
                                    हिन्दी
                                </button>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <Link
                                href="/appointment"
                                className="btn-secondary block text-center w-full"
                            >
                                {t("nav.bookAppointment")}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
