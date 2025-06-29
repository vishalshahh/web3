"use client"
import { Card } from "./card"
import { Star, Quote, Verified, Sparkles, Users, MessageSquare } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DeFi Protocol Lead",
      company: "Ethereum Foundation",
      content:
        "This platform has been instrumental in connecting me with amazing Web3 projects. The community is incredibly supportive and the hackathons are world-class.",
      avatar: "SC",
      rating: 5,
      verified: true,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/15",
      achievement: "Built 3 DeFi protocols"
    },
    {
      name: "Marcus Rodriguez",
      role: "Blockchain Architect", 
      company: "Polygon Labs",
      content:
        "The hackathons here are exceptional. I've participated in multiple events and each one has pushed me to innovate and learn cutting-edge technologies.",
      avatar: "MR",
      rating: 5,
      verified: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/15",
      achievement: "Won 5 hackathons"
    },
    {
      name: "Emily Johnson",
      role: "Smart Contract Engineer",
      company: "Chainlink Labs",
      content:
        "The learning resources are comprehensive and constantly updated. Perfect for both beginners and experienced developers looking to master Web3 development.",
      avatar: "EJ",
      rating: 5,
      verified: true,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/15",
      achievement: "Mentored 100+ developers"
    },
  ]

  const stats = [
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "15K+", label: "Community Reviews", icon: "💬" },
    { number: "4.9/5", label: "Average Rating", icon: "🏆" },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(139,92,246,0.05),transparent_120deg,rgba(59,130,246,0.05),transparent_240deg,rgba(6,182,212,0.05))]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, ${0.1 + Math.random() * 0.3})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
              <MessageSquare className="w-5 h-5" />
              <span>Community Voices</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                What Developers
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Say About Us
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Join thousands of developers who've transformed their Web3 journey with our platform
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                variant="glass" 
                className="group p-8 h-full bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full border border-green-500/30 flex items-center gap-1">
                    <Verified className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                {/* Quote Icon */}
                <div className="relative mb-6">
                  <Quote className="w-10 h-10 text-blue-400/40 absolute -top-2 -left-2" />
                  <div className="pl-8">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <blockquote className="text-slate-300 mb-8 leading-relaxed text-lg group-hover:text-white transition-colors">
                  "{testimonial.content}"
                </blockquote>

                {/* Achievement Badge */}
                <div className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <div className="text-sm text-blue-300 font-medium">{testimonial.achievement}</div>
                </div>

                {/* Enhanced Author */}
                <div className="flex items-center gap-4">
                  {/* Enhanced Avatar */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-800">
                      <Verified className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Enhanced Author Info */}
                  <div className="flex-1">
                    <div className="font-bold text-white group-hover:text-blue-300 transition-colors text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-blue-400 font-semibold">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Sparkle Effect */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white">Ready to join our community?</h3>
              <p className="text-slate-400 text-lg text-center">Share your experience and inspire the next generation of Web3 builders</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Share Your Story</span>
                  </div>
                </button>
                <button className="px-8 py-4 bg-slate-800/50 border-2 border-slate-700/50 text-white rounded-xl font-semibold hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Join Community</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
