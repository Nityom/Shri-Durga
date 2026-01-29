"use client"

import { motion } from "framer-motion"
import { Hexagon, Triangle, Command, Layers, Zap, Box } from "lucide-react"

const partners = [
    { name: "PowerPoint", Icon: Hexagon },
    { name: "Screentime", Icon: Triangle },
    { name: "Segment", Icon: Command },
    { name: "Shutterframe", Icon: Layers },
    { name: "Lightspeed", Icon: Zap },
    { name: "Mastermind", Icon: Box }
]

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4 }
    }
}

export const Partners = () => {
    return (
        <section className="py-10 border-b border-border bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-xl font-bold font-outfit flex items-center gap-2 text-muted-foreground"
                        >
                            <partner.Icon size={24} className="text-primary" />
                            <span>{partner.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
