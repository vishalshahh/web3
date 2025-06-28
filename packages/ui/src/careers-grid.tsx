import { Card } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export function CareersGrid() {
  const jobs = [
    {
      title: "Senior Blockchain Developer",
      company: "DeFi Protocol Labs",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      experience: "5+ years",
      description:
        "Lead the development of next-generation DeFi protocols and smart contracts. Work with cutting-edge blockchain technology.",
      skills: ["Solidity", "Rust", "Go", "Smart Contracts", "DeFi"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: false,
      posted: "2 days ago",
    },
    {
      title: "Web3 Frontend Engineer",
      company: "NFT Marketplace Inc",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      experience: "3+ years",
      description:
        "Build beautiful and intuitive Web3 user interfaces for our NFT marketplace platform using React and Web3 libraries.",
      skills: ["React", "TypeScript", "Web3.js", "Ethers.js", "IPFS"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: true,
      posted: "1 week ago",
    },
    {
      title: "Smart Contract Auditor",
      company: "Security First Labs",
      location: "New York, NY",
      type: "Contract",
      salary: "$100 - $200/hour",
      experience: "4+ years",
      description:
        "Conduct comprehensive security audits of smart contracts and DeFi protocols. Identify vulnerabilities and provide recommendations.",
      skills: ["Security", "Solidity", "Auditing", "Formal Verification", "Testing"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: false,
      posted: "3 days ago",
    },
    {
      title: "DevRel Engineer",
      company: "Layer 2 Solutions",
      location: "Berlin, Germany",
      type: "Full-time",
      salary: "$90k - $130k",
      experience: "2+ years",
      description:
        "Engage with the developer community, create technical content, and support developers building on our Layer 2 platform.",
      skills: ["Technical Writing", "Community", "JavaScript", "Developer Tools", "APIs"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: true,
      posted: "5 days ago",
    },
    {
      title: "Blockchain Product Manager",
      company: "Web3 Startup",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $170k",
      experience: "4+ years",
      description:
        "Drive product strategy and roadmap for innovative Web3 products. Work closely with engineering and design teams.",
      skills: ["Product Management", "Web3", "Strategy", "Analytics", "User Research"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: false,
      posted: "1 day ago",
    },
    {
      title: "Crypto Research Analyst",
      company: "Investment DAO",
      location: "Remote",
      type: "Part-time",
      salary: "$60k - $80k",
      experience: "2+ years",
      description:
        "Research and analyze cryptocurrency projects, DeFi protocols, and market trends. Provide investment recommendations.",
      skills: ["Research", "Analysis", "DeFi", "Tokenomics", "Financial Modeling"],
      logo: "/placeholder.svg?height=60&width=60",
      remote: true,
      posted: "4 days ago",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "default"
      case "Part-time":
        return "secondary"
      case "Contract":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {jobs.map((job, index) => (
        <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
          <div className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <img
                src={job.logo || "/placeholder.svg"}
                alt={job.company}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-muted-foreground font-medium">{job.company}</p>
              </div>
              <Badge variant={getTypeColor(job.type)}>{job.type}</Badge>
            </div>

            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{job.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{job.posted}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1">Apply Now</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
