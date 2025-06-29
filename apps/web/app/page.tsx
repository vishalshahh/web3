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
    <div className="min-h-screen bg-red-500">
      <Navigation />
      <main>
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
