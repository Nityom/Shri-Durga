"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
    {
        slug: "heart-health-tips",
        title: "10 Essential Tips for a Healthy Heart",
        excerpt: "Learn how to maintain a healthy heart with these expert-backed tips from our cardiology department.",
        image: "/images/blog-1.jpg",
        category: "Heart Health",
        author: "Dr. Vishal Kumar",
        date: "Dec 5, 2024",
        readTime: "5 min read"
    },
    {
        slug: "diabetes-management",
        title: "Managing Diabetes: A Comprehensive Guide",
        excerpt: "Everything you need to know about managing diabetes effectively and living a healthy life.",
        image: "/images/blog-2.jpg",
        category: "Diabetes",
        author: "Dr. (Mrs.) Shweta",
        date: "Dec 3, 2024",
        readTime: "8 min read"
    },
    {
        slug: "mental-health-awareness",
        title: "Understanding Mental Health: Breaking the Stigma",
        excerpt: "Mental health is just as important as physical health. Learn how to take care of your mental well-being.",
        image: "/images/blog-3.jpg",
        category: "Mental Health",
        author: "Dr. Siddhartha",
        date: "Dec 1, 2024",
        readTime: "6 min read"
    },
    {
        slug: "child-nutrition",
        title: "Nutrition Guide for Growing Children",
        excerpt: "Proper nutrition is crucial for your child's growth and development. Here's what you need to know.",
        image: "/images/blog-4.jpg",
        category: "Pediatrics",
        author: "Dr. Siddhartha",
        date: "Nov 28, 2024",
        readTime: "7 min read"
    },
    {
        slug: "bone-health",
        title: "Protecting Your Bones as You Age",
        excerpt: "Learn about osteoporosis prevention and how to maintain strong bones throughout your life.",
        image: "/images/blog-5.jpg",
        category: "Orthopedics",
        author: "Dr. Sumit Kumar",
        date: "Nov 25, 2024",
        readTime: "5 min read"
    },
    {
        slug: "cancer-prevention",
        title: "Early Detection: Your Best Defense Against Cancer",
        excerpt: "Understanding the importance of regular screenings and early cancer detection.",
        image: "/images/blog-6.jpg",
        category: "Oncology",
        author: "Dr. Sunita Reddy",
        date: "Nov 22, 2024",
        readTime: "6 min read"
    }
]

const categories = ["All", "Heart Health", "Diabetes", "Mental Health", "Pediatrics", "Orthopedics", "Oncology"]

// Container animation for stagger effect
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
}

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-2 px-4 rounded-full bg-white text-primary text-sm font-semibold mb-4 shadow-sm">
                            HEALTH BLOG
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Health Tips & Medical Insights
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Stay informed with the latest health news, tips, and insights from our expert medical team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${index === 0
                                    ? 'bg-primary text-white'
                                    : 'bg-blue-50 text-primary hover:bg-blue-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href={`/blog/${blogPosts[0].slug}`}>
                            <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="aspect-4/3 lg:aspect-auto relative">
                                    <Image
                                        src={blogPosts[0].image}
                                        alt={blogPosts[0].title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold w-fit mb-4">
                                        {blogPosts[0].category}
                                    </span>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2C3E50] mb-4">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {blogPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-2">
                                            <User size={16} /> {blogPosts[0].author}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} /> {blogPosts[0].date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock size={16} /> {blogPosts[0].readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-primary mb-12">Latest Articles</h2>
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {blogPosts.slice(1).map((post, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                            >
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="medical-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                                        <div className="aspect-16/10 relative overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-white text-[#2C3E50] text-xs font-bold shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#2C3E50] mb-3 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn-outline px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                            Load More Articles <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            Get the latest health tips and medical insights delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full border-0 outline-none focus:ring-2 focus:ring-secondary bg-white text-[#2C3E50]"
                            />
                            <button type="submit" className="btn-secondary px-8 py-4 rounded-full font-bold whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
