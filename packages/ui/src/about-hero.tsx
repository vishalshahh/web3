"use client"
import { Button } from "./button"
import { Users, Target, Zap, Sparkles, Globe, Shield, Hexagon } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive ecosystem where developers can learn, collaborate, and grow together in the Web3 space.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/15",
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Fostering breakthrough innovation through world-class hackathons, cutting-edge projects, and emerging technologies.",
      color: "from-purple-500 to-pink-500", 
      bgColor: "bg-purple-500/15",
    },
    {
      icon: Zap,
      title: "Future Ready",
      description: "Preparing developers for the decentralized future with the latest tools, knowledge, and industry insights.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/15",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, ${0.2 + Math.random() * 0.3})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
              <Globe className="w-5 h-5" />
              <span>About Web3Platform</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Hero Text */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                Building the
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift mt-2">
                Decentralized Future
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed">
              We're connecting{" "}
              <span className="text-blue-400 font-bold">25,000+ developers</span>, creators, and innovators to shape the Web3 ecosystem through collaboration, innovation, and cutting-edge technology.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="xl" 
                variant="gradient"
                className="group text-lg font-bold px-10 py-5 shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/50"
              >
                <Hexagon className="mr-3 w-6 h-6" />
                <span>Join Our Mission</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="group text-lg font-bold px-10 py-5 bg-slate-900/50 backdrop-blur-sm border-2 border-slate-700/50 text-white hover:bg-slate-800/50 hover:border-blue-500/50"
              >
                <Shield className="mr-3 w-6 h-6" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Values Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-10 rounded-3xl bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 text-center overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Enhanced Icon */}
                <div className={`w-24 h-24 rounded-3xl ${value.bgColor} backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative`}>
                  <value.icon className="w-12 h-12 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed text-lg">
                  {value.description}
                </p>

                {/* Sparkle Effect */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className={`mt-24 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "25K+", label: "Developers", icon: "👨‍💻", gradient: "from-blue-500 to-cyan-500" },
                { number: "1.2K+", label: "Projects", icon: "🚀", gradient: "from-purple-500 to-pink-500" },
                { number: "180+", label: "Events", icon: "🎯", gradient: "from-emerald-500 to-teal-500" },
                { number: "150+", label: "Countries", icon: "🌍", gradient: "from-yellow-500 to-orange-500" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}
