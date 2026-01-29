import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
// import { Partners } from "@/components/Partners"
import { About } from "@/components/About"
import { Features } from "@/components/Features"
import { Doctors } from "@/components/Doctors"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* 1. Hero - Immediate value proposition & CTA */}
      <Hero />
      {/* 2. Features/Services - What we offer (high priority) */}
      <Features />
      {/* 3. Doctors - Visual, builds trust */}
      <Doctors />
      {/* 4. Testimonials - Social proof */}
      <Testimonials />
      {/* 5. About - Company story (users read after they're interested) */}
      <About />
      {/* 6. Partners - Trust signals */}
      {/* <Partners /> */}
      {/* 7. CTA - Final conversion */}
      <CTA />
      <Footer />
    </main>
  )
}
