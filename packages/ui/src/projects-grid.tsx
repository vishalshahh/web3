"use client"
import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      title: "DeFi Trading Platform",
      description:
        "A decentralized trading platform with advanced analytics, automated strategies, and cross-chain support for seamless asset management.",
      tags: ["DeFi", "React", "Solidity", "TypeScript"],
      stars: 234,
      forks: 45,
      watchers: 89,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "DeFi",
      status: "Active",
    },
    {
      title: "NFT Marketplace",
      description:
        "Create, buy, and sell NFTs with low gas fees, seamless user experience, and integrated IPFS storage for metadata.",
      tags: ["NFT", "Next.js", "IPFS", "Web3"],
      stars: 189,
      forks: 32,
      watchers: 67,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "NFT",
      status: "Active",
    },
    {
      title: "DAO Governance Tool",
      description:
        "Comprehensive governance platform for decentralized autonomous organizations with voting, proposals, and treasury management.",
      tags: ["DAO", "Governance", "Web3", "Smart Contracts"],
      stars: 156,
      forks: 28,
      watchers: 45,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "DAO",
      status: "Beta",
    },
    {
      title: "Cross-Chain Bridge",
      description:
        "Secure and efficient bridge for transferring assets across different blockchains with minimal fees and maximum security.",
      tags: ["Bridge", "Multi-chain", "Security", "Solidity"],
      stars: 298,
      forks: 67,
      watchers: 123,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "Infrastructure",
      status: "Active",
    },
    {
      title: "Web3 Social Network",
      description:
        "Decentralized social media platform with token-based rewards, NFT profiles, and community governance features.",
      tags: ["Social", "React", "IPFS", "Tokens"],
      stars: 167,
      forks: 34,
      watchers: 78,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "Social",
      status: "Active",
    },
    {
      title: "Yield Farming Protocol",
      description:
        "Automated yield farming protocol with smart contract optimization and risk management for maximum returns.",
      tags: ["DeFi", "Yield", "Smart Contracts", "Optimization"],
      stars: 203,
      forks: 41,
      watchers: 92,
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=400",
      category: "DeFi",
      status: "Active",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
        >
          <div className="aspect-video bg-muted relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{project.watchers}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button size="sm" className="flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
