import { Card } from "./card"
import { Github, Twitter, Linkedin } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "Former Ethereum Foundation developer with 8+ years in blockchain technology.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Full-stack developer and smart contract security expert, previously at ConsenSys.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Johnson",
      role: "Head of Community",
      bio: "Community builder with experience growing developer communities at major tech companies.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Blockchain architect specializing in DeFi protocols and cross-chain solutions.",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">Passionate builders dedicated to advancing Web3 technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
