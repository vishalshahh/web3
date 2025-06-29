"use client"
import { Card } from "./card"
import {
  ArrowRight,
  Boxes,
  Users,
  Trophy,
  Calendar,
  GraduationCap,
  Briefcase,
  Coins,
  Star,
  FileText,
  Zap,
  Sparkles,
  Network,
  Shield,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export function FeaturedGrid() {
  const features = [
    {
      icon: Boxes,
      title: "DeFi Projects",
      description: "Discover and contribute to cutting-edge DeFi protocols and applications",
      href: "/projects",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/15",
      badge: "Popular",
    },
    {
      icon: Trophy,
      title: "Web3 Hackathons",
      description: "Compete in global hackathons with $1M+ in prizes and grants",
      href: "/hackathons",
      gradient: "from-yellow-500 to-orange-500",
      iconBg: "bg-yellow-500/15",
      badge: "Live",
    },
    {
      icon: Network,
      title: "Blockchain Events",
      description: "Join conferences, workshops, and networking events worldwide",
      href: "/events",
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500/15",
      badge: "New",
    },
    {
      icon: GraduationCap,
      title: "Learn Web3",
      description: "Master blockchain development with expert-led courses and tutorials",
      href: "/learn",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500/15",
      badge: "Free",
    },
    {
      icon: Briefcase,
      title: "Web3 Careers",
      description: "Find your dream job at top Web3 companies and DAOs",
      href: "/careers",
      gradient: "from-red-500 to-pink-500",
      iconBg: "bg-red-500/15",
      badge: "Remote",
    },
    {
      icon: FileText,
      title: "Industry Insights",
      description: "Read the latest trends and analysis from Web3 thought leaders",
      href: "/blog",
      gradient: "from-indigo-500 to-purple-500",
      iconBg: "bg-indigo-500/15",
      badge: "Weekly",
    },
    {
      icon: Users,
      title: "Developer DAO",
      description: "Connect with like-minded builders in our global community",
      href: "/community",
      gradient: "from-pink-500 to-rose-500",
      iconBg: "bg-pink-500/15",
      badge: "25K+",
    },
    {
      icon: Coins,
      title: "Funding Hub",
      description: "Access grants, VCs, and angel investors for your Web3 startup",
      href: "/funding",
      gradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-500/15",
      badge: "$12M+",
    },
    {
      icon: Rocket,
      title: "Success Stories",
      description: "Get inspired by unicorn builders who started their journey here",
      href: "/success",
      gradient: "from-orange-500 to-yellow-500",
      iconBg: "bg-orange-500/15",
      badge: "Inspiring",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.05),transparent_120deg,rgba(139,92,246,0.05),transparent_240deg,rgba(6,182,212,0.05))]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
              <Shield className="w-5 h-5" />
              <span>Web3 Ecosystem</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                Everything You Need for
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Web3 Development
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              From learning resources to funding opportunities, we've got everything you need to succeed in the decentralized future
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href} className="group">
                <Card 
                  variant="glass" 
                  className="group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/10 p-8 h-full bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 border-slate-700/50 group-hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Badge */}
                  {feature.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30">
                      {feature.badge}
                    </div>
                  )}

                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 rounded-2xl ${feature.iconBg} backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}>
                    <feature.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                        {feature.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>
                    
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Enhanced Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Sparkle Effect */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>

                  {/* Border Glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                </Card>
              </Link>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white">Ready to build the future?</h3>
              <p className="text-slate-400 max-w-md">Join thousands of developers already building on our platform</p>
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                <span>Start Building Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
