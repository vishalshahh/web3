"use client"

import Link from "next/link"
import { Github, Twitter, MessageSquare, Linkedin, Hexagon, ArrowUp, Heart, Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/projects", label: "DeFi Projects" },
        { href: "/hackathons", label: "Hackathons" },
        { href: "/events", label: "Events" },
        { href: "/learn", label: "Learn Web3" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "/community", label: "Developer DAO" },
        { href: "/blog", label: "Industry Insights" },
        { href: "/success", label: "Success Stories" },
        { href: "/funding", label: "Funding Hub" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Web3 Careers" },
        { href: "/contact", label: "Contact" },
        { href: "/docs", label: "Documentation" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/security", label: "Security" },
      ],
    },
  ]

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub", color: "hover:text-white" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
    { href: "https://discord.com", icon: MessageSquare, label: "Discord", color: "hover:text-purple-400" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  ]

  const [year, setYear] = useState<number>(2024)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-black border-t border-slate-800/50 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.8),transparent_30%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246'}, ${0.1 + Math.random() * 0.2})`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30">
                  <Hexagon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-none">
                  Web3Platform
                </span>
                <span className="text-xs text-blue-400 font-medium tracking-wider uppercase">
                  Decentralized Future
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed text-lg">
              Building the future of decentralized technology, one project at a time. Join our community of{" "}
              <span className="text-blue-400 font-bold">25,000+ innovators</span> and creators shaping Web3.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50 hover:border-blue-500/30`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Community Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">25K+</div>
                <div className="text-xs text-slate-400">Developers</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">1.2K+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-bold text-white text-lg mb-6 relative">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-sm group relative flex items-center gap-2"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 -left-3 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Newsletter CTA */}
        <div className="mb-16 p-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 rounded-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay in the loop</h3>
                <p className="text-slate-400 text-lg">Get the latest updates, opportunities, and Web3 insights delivered weekly.</p>
              </div>
            </div>
            <Link
              href="/newsletter"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 whitespace-nowrap flex items-center gap-3"
            >
              <span>Subscribe Now</span>
              <ArrowUp className="w-5 h-5 rotate-45 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-sm">
            <span>&copy; {year} Web3Platform. All rights reserved.</span>
            <span className="hidden md:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for the Web3 community</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-6">
              <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                Terms
              </Link>
              <Link href="/cookies" className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium">
                Cookies
              </Link>
            </div>
            
            {/* Enhanced Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
