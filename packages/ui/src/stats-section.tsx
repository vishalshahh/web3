"use client"
import { useEffect, useState } from "react"
import { Users, Code, Zap, TrendingUp, Globe, Shield, Sparkles } from "lucide-react"

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Users,
      number: "25,000",
      label: "Active Developers",
      sublabel: "Building the future of Web3",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/15",
    },
    {
      icon: Code,
      number: "1,200",
      label: "Open Source Projects",
      sublabel: "Ready for contribution",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/15",
    },
    {
      icon: Zap,
      number: "$12M",
      label: "Total Funding Raised",
      sublabel: "Supporting innovation",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/15",
    },
    {
      icon: TrendingUp,
      number: "180",
      label: "Hackathons Hosted",
      sublabel: "Fostering creativity",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/15",
    },
  ]

  const achievements = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Developers from 150+ countries building together",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Backed by leading Web3 VCs and enterprises",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section 
      id="stats-section"
      className="py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,0.05),transparent_120deg,rgba(139,92,246,0.05),transparent_240deg,rgba(59,130,246,0.05))]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>Platform Statistics</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                Powering the
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Web3 Ecosystem
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Join thousands of developers building the decentralized future
            </p>
          </div>

          {/* Enhanced Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                {/* Enhanced Icon */}
                <div className={`w-20 h-20 rounded-2xl ${stat.bgColor} backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}>
                  <stat.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}+
                  </div>
                  <div className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.sublabel}
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>

          {/* Enhanced Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} bg-opacity-20 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-lg leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl shadow-2xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white">Ready to join our ecosystem?</h3>
              <p className="text-slate-400 text-lg text-center">Be part of the largest Web3 developer community</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 group">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Join Community</span>
                  </div>
                </button>
                <button className="px-8 py-4 bg-slate-800/50 border-2 border-slate-700/50 text-white rounded-xl font-semibold hover:bg-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Start Building</span>
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
