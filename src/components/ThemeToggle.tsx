"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import { useState, useEffect } from "react"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // During SSR and hydration, render a placeholder
    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-muted-foreground/30 animate-pulse" />
            </div>
        )
    }

    return <ThemeToggleInner />
}

function ThemeToggleInner() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon size={18} />
            ) : (
                <Sun size={18} />
            )}
        </button>
    )
}
