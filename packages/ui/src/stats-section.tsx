"use client"
import { TrendingUp, Users, Code, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Developers",
      description: "Building the future of Web3",
    },
    {
      icon: Code,
      value: "500+",
      label: "Open Source Projects",
      description: "Ready for contribution",
    },
    {
      icon: TrendingUp,
      value: "$2M+",
      label: "Total Funding Raised",
      description: "Supporting innovation",
    },
    {
      icon: Zap,
      value: "50+",
      label: "Hackathons Hosted",
      description: "Fostering creativity",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powering the Web3 Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers building the decentralized future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
