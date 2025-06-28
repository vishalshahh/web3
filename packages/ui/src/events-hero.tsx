import { Button } from "./button"
import { Calendar } from "lucide-react"

export function EventsHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Web3 <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay updated with the latest Web3 events, conferences, and meetups. Connect with industry leaders and expand
            your network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">Browse Events</Button>
            <Button variant="outline" size="lg">
              Submit Event
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Events Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
