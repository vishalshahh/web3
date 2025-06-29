"use client"

import { Navigation } from "@repo/ui/navigation"
import { Hero } from "@repo/ui/hero"
import { FeaturedGrid } from "@repo/ui/featured-grid"
import { StatsSection } from "@repo/ui/stats-section"
import { TestimonialsSection } from "@repo/ui/testimonials-section"
import { Newsletter } from "@repo/ui/newsletter"
import { Footer } from "@repo/ui/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <FeaturedGrid />
        <StatsSection />
        <TestimonialsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
