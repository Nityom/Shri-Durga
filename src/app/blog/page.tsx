"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const getBlogPosts = (t: (key: string) => string) => [
    {
        slug: "heart-health-tips",
        title: t("blog.post1Title"),
        excerpt: t("blog.post1Excerpt"),
        image: "/imagess/10image.jpeg",
        category: t("blog.categoryHeart"),
        author: t("doctor.vishalKumar"),
        date: t("blog.post1Date"),
        readTime: t("blog.post1ReadTime")
    },
    {
        slug: "diabetes-management",
        title: t("blog.post2Title"),
        excerpt: t("blog.post2Excerpt"),
        image: "/imagess/7image.jpeg",
        category: t("blog.categoryDiabetes"),
        author: t("doctor.shweta"),
        date: t("blog.post2Date"),
        readTime: t("blog.post2ReadTime")
    },
    {
        slug: "mental-health-awareness",
        title: t("blog.post3Title"),
        excerpt: t("blog.post3Excerpt"),
        image: "/imagess/9image.jpeg",
        category: t("blog.categoryMental"),
        author: t("doctor.siddhartha"),
        date: t("blog.post3Date"),
        readTime: t("blog.post3ReadTime")
    },
    {
        slug: "child-nutrition",
        title: t("blog.post4Title"),
        excerpt: t("blog.post4Excerpt"),
        image: "/imagess/3image.jpeg",
        category: t("blog.categoryPediatrics"),
        author: t("doctor.siddhartha"),
        date: t("blog.post4Date"),
        readTime: t("blog.post4ReadTime")
    },
    {
        slug: "bone-health",
        title: t("blog.post5Title"),
        excerpt: t("blog.post5Excerpt"),
        image: "/imagess/6image.jpeg",
        category: t("blog.categoryOrthopedics"),
        author: t("doctor.sumitKumar"),
        date: t("blog.post5Date"),
        readTime: t("blog.post5ReadTime")
    },
    {
        slug: "cancer-prevention",
        title: t("blog.post6Title"),
        excerpt: t("blog.post6Excerpt"),
        image: "/imagess/8image.jpeg",
        category: t("blog.categoryOncology"),
        author: t("doctor.sunitaReddy"),
        date: t("blog.post6Date"),
        readTime: t("blog.post6ReadTime")
    }
]

const getCategories = (t: (key: string) => string) => [
    t("blogPage.allCategories"),
    t("blog.categoryHeart"),
    t("blog.categoryDiabetes"),
    t("blog.categoryMental"),
    t("blog.categoryPediatrics"),
    t("blog.categoryOrthopedics"),
    t("blog.categoryOncology")
]

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
    const { t } = useLanguage()
    const blogPosts = getBlogPosts(t)
    const categories = getCategories(t)

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
                            {t("blogPage.badge")}
                        </span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            {t("blogPage.title")}
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            {t("blogPage.description")}
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
                    <h2 className="text-3xl font-bold text-primary mb-12">{t("blog.latestArticles")}</h2>
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
                            {t("blog.loadMore")} <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            {/* <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4">
                            {t("blog.newsletterTitle")}
                        </h2>
                        <p className="text-white/90 mb-8 max-w-xl mx-auto">
                            {t("blog.newsletterDescription")}
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder={t("blog.emailPlaceholder")}
                                className="flex-1 px-6 py-4 rounded-full border-0 outline-none focus:ring-2 focus:ring-secondary bg-white text-[#2C3E50]"
                            />
                            <button type="submit" className="btn-secondary px-8 py-4 rounded-full font-bold whitespace-nowrap">
                                {t("blog.subscribe")}
                            </button>
                        </form>
                    </div>
                </div>
            </section> */}

            <Footer />
        </main>
    )
}
