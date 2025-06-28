import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { BookOpen, Video, FileText, Code, Clock, Star, Users } from "lucide-react"

export function LearningResources() {
  const resources = [
    {
      title: "Complete Web3 Development Course",
      description:
        "Master blockchain development from basics to advanced concepts with hands-on projects and real-world applications.",
      type: "Course",
      icon: Video,
      duration: "40 hours",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 12500,
      price: "$199",
      tags: ["Solidity", "React", "Web3.js", "Smart Contracts"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Smart Contract Security Guide",
      description:
        "Learn to identify and prevent common vulnerabilities in smart contracts with practical examples and best practices.",
      type: "Guide",
      icon: FileText,
      duration: "8 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 8900,
      price: "Free",
      tags: ["Security", "Solidity", "Auditing", "Best Practices"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "DeFi Protocol Development",
      description: "Build your own DeFi protocols including DEXs, lending platforms, and yield farming contracts.",
      type: "Workshop",
      icon: Code,
      duration: "16 hours",
      level: "Advanced",
      rating: 4.7,
      students: 3400,
      price: "$299",
      tags: ["DeFi", "Uniswap", "Compound", "Yield Farming"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "NFT Marketplace Tutorial",
      description:
        "Step-by-step guide to building a complete NFT marketplace with minting, trading, and royalty features.",
      type: "Tutorial",
      icon: BookOpen,
      duration: "12 hours",
      level: "Intermediate",
      rating: 4.6,
      students: 6700,
      price: "$149",
      tags: ["NFT", "IPFS", "OpenSea", "Metadata"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Web3 Frontend Development",
      description: "Learn to build modern Web3 frontends using React, ethers.js, and popular wallet integrations.",
      type: "Course",
      icon: Video,
      duration: "24 hours",
      level: "Intermediate",
      rating: 4.8,
      students: 9200,
      price: "$179",
      tags: ["React", "Ethers.js", "MetaMask", "WalletConnect"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Blockchain Fundamentals",
      description:
        "Understand the core concepts of blockchain technology, consensus mechanisms, and cryptographic principles.",
      type: "Course",
      icon: BookOpen,
      duration: "20 hours",
      level: "Beginner",
      rating: 4.9,
      students: 15600,
      price: "Free",
      tags: ["Blockchain", "Cryptography", "Consensus", "Bitcoin"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Course":
        return Video
      case "Guide":
        return FileText
      case "Workshop":
        return Code
      case "Tutorial":
        return BookOpen
      default:
        return BookOpen
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "secondary"
      case "Intermediate":
        return "default"
      case "Advanced":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource, index) => {
        const TypeIcon = getTypeIcon(resource.type)
        return (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img
                src={resource.image || "/placeholder.svg"}
                alt={resource.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                  <TypeIcon className="w-3 h-3 mr-1" />
                  {resource.type}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant={getLevelColor(resource.level)} className="bg-background/80 backdrop-blur-sm">
                  {resource.level}
                </Badge>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{resource.description}</p>

              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{resource.students.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">{resource.price}</div>
                <Button size="sm">{resource.price === "Free" ? "Start Learning" : "Enroll Now"}</Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
