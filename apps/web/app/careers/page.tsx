"use client"

import { Navigation } from "@repo/ui/navigation"
import { CareersGrid } from "@repo/ui/careers-grid"
import { Footer } from "@repo/ui/footer"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Opportunities</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join the Web3 revolution and build your career in decentralized technology.
            </p>
          </div>
          <CareersGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
