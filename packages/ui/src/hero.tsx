"use client"

import { Button } from "./button"
import { ArrowRight, Play, Sparkles, Hexagon, Zap, Globe, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const web3Companies = [
    { name: "Ethereum", logo: "◈", color: "text-blue-400" },
    { name: "Polygon", logo: "⬟", color: "text-purple-400" },
    { name: "Solana", logo: "◉", color: "text-green-400" },
    { name: "Chainlink", logo: "⬢", color: "text-blue-300" },
    { name: "Uniswap", logo: "🦄", color: "text-pink-400" },
    { name: "AAVE", logo: "Ⱥ", color: "text-cyan-400" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 via-transparent to-purple-600/5" />
      
      {/* Animated Particles */}
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

      {/* Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
              <Hexagon className="w-5 h-5" />
              <span>Welcome to the Future of Web3</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Headline with better spacing */}
            <div className="mb-8 space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  Build the Future with
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift mt-2">
                  Web3
                </span>
              </h1>
            </div>

            {/* Enhanced Subtitle */}
            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 leading-relaxed">
                Join the decentralized revolution. Connect with{" "}
                <span className="text-blue-400 font-bold">25,000+ developers</span>, participate in{" "}
                <span className="text-purple-400 font-bold">cutting-edge hackathons</span>, and build
                innovative Web3 applications that shape tomorrow.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="xl" 
                variant="gradient"
                className="group text-lg font-bold px-10 py-5 shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/50"
              >
                <Zap className="mr-3 w-6 h-6" />
                <span>Start Building Now</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="group text-lg font-bold px-10 py-5 bg-slate-900/50 backdrop-blur-sm border-2 border-slate-700/50 text-white hover:bg-slate-800/50 hover:border-blue-500/50"
              >
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </Button>
            </div>

            {/* Trust Indicators with Web3 Logos */}
            <div className="mb-16">
              <p className="text-slate-400 text-lg mb-6">Trusted by developers building on</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto">
                {web3Companies.map((company, index) => (
                  <div 
                    key={index} 
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-800/30 transition-all duration-300"
                  >
                    <div className={`text-3xl ${company.color} group-hover:scale-110 transition-transform duration-300`}>
                      {company.logo}
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-slate-300 font-medium transition-colors">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { number: "25K+", label: "Active Developers", icon: "👨‍💻", gradient: "from-blue-500 to-cyan-500" },
                { number: "1.2K+", label: "Web3 Projects", icon: "🚀", gradient: "from-purple-500 to-pink-500" },
                { number: "180+", label: "Hackathons", icon: "🏆", gradient: "from-yellow-500 to-orange-500" },
                { number: "$12M+", label: "Total Funding", icon: "💰", gradient: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-slate-400 group-hover:text-slate-300 transition-colors font-medium">
                    {stat.label}
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
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
