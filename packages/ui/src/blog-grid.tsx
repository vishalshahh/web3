import { Card } from "./card"
import { Badge } from "./badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogGrid() {
  const posts = [
    {
      title: "The Future of DeFi: Trends and Predictions for 2024",
      excerpt:
        "Explore the emerging trends in decentralized finance and what to expect in the coming year, from new protocols to regulatory developments.",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DeFi",
      image: "/placeholder.svg?height=200&width=400",
      slug: "future-of-defi-2024",
    },
    {
      title: "Building Secure Smart Contracts: Best Practices Guide",
      excerpt:
        "Learn essential security practices for smart contract development, including common vulnerabilities and how to prevent them.",
      author: "Marcus Rodriguez",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Security",
      image: "/placeholder.svg?height=200&width=400",
      slug: "secure-smart-contracts-guide",
    },
    {
      title: "NFT Utility Beyond Art: Real-World Applications",
      excerpt:
        "Discover how NFTs are being used beyond digital art, from gaming and music to real estate and identity verification.",
      author: "Emily Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "NFT",
      image: "/placeholder.svg?height=200&width=400",
      slug: "nft-utility-real-world",
    },
    {
      title: "Layer 2 Solutions: Scaling Ethereum for Mass Adoption",
      excerpt:
        "An in-depth look at Layer 2 scaling solutions, their benefits, trade-offs, and impact on Ethereum's future.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Infrastructure",
      image: "/placeholder.svg?height=200&width=400",
      slug: "layer-2-scaling-ethereum",
    },
    {
      title: "Web3 Gaming: The Next Frontier of Interactive Entertainment",
      excerpt:
        "How blockchain technology is revolutionizing gaming with play-to-earn mechanics, true ownership, and decentralized economies.",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Gaming",
      image: "/placeholder.svg?height=200&width=400",
      slug: "web3-gaming-frontier",
    },
    {
      title: "DAO Governance: Lessons from Early Experiments",
      excerpt:
        "Analyzing successful and failed DAO governance models to understand what works and what doesn't in decentralized organizations.",
      author: "Alex Thompson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "DAO",
      image: "/placeholder.svg?height=200&width=400",
      slug: "dao-governance-lessons",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "DeFi":
        return "default"
      case "Security":
        return "destructive"
      case "NFT":
        return "secondary"
      case "Infrastructure":
        return "outline"
      case "Gaming":
        return "default"
      case "DAO":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`}>
          <Card className="overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer h-full">
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant={getCategoryColor(post.category)} className="bg-background/80 backdrop-blur-sm">
                  {post.category}
                </Badge>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
