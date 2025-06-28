import { Button } from "./button"
import { Users, Target, Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Web3Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're building the future of decentralized technology by connecting developers, creators, and innovators in
            the Web3 ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg">Join Our Mission</Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-muted-foreground">
                Building a supportive community where developers can learn, collaborate, and grow together.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
              <p className="text-muted-foreground">
                Fostering innovation through hackathons, projects, and cutting-edge Web3 technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Ready</h3>
              <p className="text-muted-foreground">
                Preparing developers for the decentralized future with the latest tools and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
