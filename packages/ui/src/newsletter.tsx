"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Mail, CheckCircle, Sparkles, Zap, ArrowRight, Users, Newspaper, Bell } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.05),transparent_30%,transparent_70%,rgba(59,130,246,0.05))]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, ${0.2 + Math.random() * 0.3})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Content Container */}
          <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl" />
            
            {/* Enhanced Header */}
            <div className="relative z-10 mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-sm font-medium text-blue-300 shadow-lg">
                <Bell className="w-5 h-5" />
                <span>Stay Connected</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Enhanced Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl mb-8 group hover:scale-110 transition-all duration-300 shadow-lg">
                <Mail className="w-12 h-12 text-blue-400" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="relative z-10 mb-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                  Stay
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                  Updated
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                Get the latest Web3 news, project updates, and exclusive opportunities delivered to your inbox.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-8 text-slate-400 mb-8">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>25K+ subscribers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Newspaper className="w-5 h-5 text-purple-400" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>

            {/* Enhanced Form or Success State */}
            <div className="relative z-10 mb-8">
              {isSubscribed ? (
                <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl">
                  <div className="flex items-center gap-4 text-green-400 text-2xl font-bold">
                    <CheckCircle className="w-8 h-8" />
                    <span>Successfully subscribed!</span>
                  </div>
                  <p className="text-slate-400 text-lg">Welcome to the Web3 community! 🎉</p>
                  <p className="text-slate-500 text-sm">Check your inbox for a confirmation email</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                  <div className="flex flex-col lg:flex-row gap-4 p-3 bg-slate-800/60 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-transparent border-0 text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-4 px-6"
                    />
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold group transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span>Subscribe Now</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Privacy Note */}
            <div className="relative z-10">
              <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Join 25,000+ developers already subscribed. We respect your privacy and never share your data. 
                Unsubscribe anytime with one click.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
