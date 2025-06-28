import { Navigation } from "@repo/ui/navigation"
import { HackathonsList } from "@repo/ui/hackathons-list"
import { HackathonsHero } from "@repo/ui/hackathons-hero"
import { Footer } from "@repo/ui/footer"

export default function HackatonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HackathonsHero />
        <div className="container mx-auto px-4 py-16">
          <HackathonsList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
