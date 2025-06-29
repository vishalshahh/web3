"use client"
import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { Calendar, Users, Trophy, Clock, MapPin } from "lucide-react"

export function HackathonsList() {
  const hackathons = [
    {
      title: "Web3 Innovation Challenge 2024",
      description:
        "Build the next generation of decentralized applications with cutting-edge technology. Focus on DeFi, NFTs, and cross-chain solutions.",
      prize: "$50,000",
      participants: 1200,
      deadline: "2024-02-15",
      duration: "48 hours",
      location: "Virtual + San Francisco",
      status: "Open",
      tags: ["DeFi", "NFT", "Gaming", "Cross-chain"],
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Web3 Foundation",
      startDate: "2024-02-10",
    },
    {
      title: "Sustainable Blockchain Hackathon",
      description:
        "Create eco-friendly blockchain solutions for a sustainable future. Build applications that address climate change and environmental challenges.",
      prize: "$25,000",
      participants: 800,
      deadline: "2024-03-01",
      duration: "72 hours",
      location: "Berlin, Germany",
      status: "Open",
      tags: ["Sustainability", "Green Tech", "Climate", "Social Impact"],
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Green Blockchain Initiative",
      startDate: "2024-02-25",
    },
    {
      title: "Cross-Chain Interoperability Challenge",
      description:
        "Develop solutions that bridge different blockchain networks seamlessly. Focus on creating protocols that enable true blockchain interoperability.",
      prize: "$40,000",
      participants: 950,
      deadline: "2024-01-30",
      duration: "60 hours",
      location: "Virtual",
      status: "Closing Soon",
      tags: ["Interoperability", "Bridge", "Multi-chain", "Protocol"],
      image: "/placeholder.svg?height=200&width=400",
      organizer: "Cosmos Network",
      startDate: "2024-01-25",
    },
    {
      title: "DeFi Security & Innovation Summit",
      description:
        "Build secure and innovative DeFi protocols. Focus on creating robust financial instruments while maintaining the highest security standards.",
      prize: "$35,000",
      participants: 600,
      deadline: "2024-03-15",
      duration: "48 hours",
      location: "New York, USA",
      status: "Registration Open",
      tags: ["DeFi", "Security", "Finance", "Innovation"],
      image: "/placeholder.svg?height=200&width=400",
      organizer: "DeFi Alliance",
      startDate: "2024-03-10",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "default"
      case "Closing Soon":
        return "destructive"
      case "Registration Open":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-8">
      {hackathons.map((hackathon, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={hackathon.image || "/placeholder.svg"}
                alt={hackathon.title}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold">{hackathon.title}</h3>
                    <Badge variant={getStatusColor(hackathon.status)}>{hackathon.status}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{hackathon.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Organized by <span className="font-medium">{hackathon.organizer}</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="font-medium">{hackathon.prize}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{hackathon.participants} joined</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{hackathon.startDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{hackathon.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{hackathon.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 sm:flex-none">Join Hackathon</Button>
                <Button variant="outline" className="flex-1 sm:flex-none bg-transparent">
                  Learn More
                </Button>
                <Button variant="ghost" className="flex-1 sm:flex-none">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
