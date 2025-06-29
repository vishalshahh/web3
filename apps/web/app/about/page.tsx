"use client"

import { Navigation } from "@repo/ui/navigation"
import { AboutHero } from "@repo/ui/about-hero"
import { TeamSection } from "@repo/ui/team-section"
import { MissionSection } from "@repo/ui/mission-section"
import { Footer } from "@repo/ui/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <AboutHero />
        <MissionSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
