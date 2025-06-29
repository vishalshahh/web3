"use client"

import { Navigation } from "@repo/ui/navigation"
import { EventsCalendar } from "@repo/ui/events-calendar"
import { EventsHero } from "@repo/ui/events-hero"
import { Footer } from "@repo/ui/footer"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <EventsHero />
        <div className="container mx-auto px-4 py-16">
          <EventsCalendar />
        </div>
      </main>
      <Footer />
    </div>
  )
}
