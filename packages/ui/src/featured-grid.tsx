import { Card } from "./card"
import {
  ArrowRight,
  Code,
  Users,
  Trophy,
  Calendar,
  BookOpen,
  Briefcase,
  DollarSign,
  Star,
  FileText,
} from "lucide-react"
import Link from "next/link"

export function FeaturedGrid() {
  const features = [
    {
      icon: Code,
      title: "Projects Showcase",
      description: "Discover and contribute to cutting-edge Web3 projects",
      href: "/projects",
      color: "text-blue-500",
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Compete in exciting hackathons and win amazing prizes",
      href: "/hackathons",
      color: "text-yellow-500",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Join conferences, meetups, and networking events",
      href: "/events",
      color: "text-green-500",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access tutorials, guides, and educational content",
      href: "/learn",
      color: "text-purple-500",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Find your dream job in the Web3 ecosystem",
      href: "/careers",
      color: "text-red-500",
    },
    {
      icon: FileText,
      title: "Blog Posts",
      description: "Read insights and trends from Web3 experts",
      href: "/blog",
      color: "text-indigo-500",
    },
    {
      icon: Users,
      title: "Developer Groups",
      description: "Connect with like-minded developers and creators",
      href: "/groups",
      color: "text-pink-500",
    },
    {
      icon: DollarSign,
      title: "Funding Opportunities",
      description: "Find grants and funding for your Web3 projects",
      href: "/funding",
      color: "text-emerald-500",
    },
    {
      icon: Star,
      title: "Success Stories",
      description: "Get inspired by successful Web3 entrepreneurs",
      href: "/success-stories",
      color: "text-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Web3 Development</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From learning resources to funding opportunities, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer h-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
