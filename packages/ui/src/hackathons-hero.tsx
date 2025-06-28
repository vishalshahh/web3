import { Button } from "./button"
import { Trophy } from "lucide-react"

export function HackathonsHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Web3 <span className="gradient-text">Hackathons</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join exciting hackathons, build innovative Web3 applications, and compete for amazing prizes while
            connecting with the global developer community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">Browse Hackathons</Button>
            <Button variant="outline" size="lg">
              Host a Hackathon
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Hackathons Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">$500K+</div>
              <div className="text-muted-foreground">Prize Pool</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
