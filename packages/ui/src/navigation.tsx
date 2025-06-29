"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Menu, X, Hexagon, Twitter, MessageSquare } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/hackathons", label: "Hackathons" },
    { href: "/events", label: "Events" },
    { href: "/learn", label: "Learn" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30">
                <Hexagon className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-slate-300 hover:text-white font-medium transition-all duration-300 group rounded-xl hover:bg-slate-800/50"
              >
                {item.label}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full" />
              </Link>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center gap-2 ml-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-white transition-all duration-300 hover:bg-slate-800/50 rounded-xl group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:bg-slate-800/50 rounded-xl group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-purple-400 transition-all duration-300 hover:bg-slate-800/50 rounded-xl group"
                aria-label="Discord"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Enhanced CTA Button */}
            <div className="ml-6 pl-6 border-l border-slate-700/50">
              <Link
                href="/get-started"
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 hover:scale-105"
              >
                <span className="relative z-10">Launch App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 text-slate-400 hover:text-white transition-colors duration-300 hover:bg-slate-800/50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-700/50 bg-slate-900/98 backdrop-blur-xl">
            <div className="py-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-6 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 rounded-xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <div className="flex justify-center gap-4 px-6 py-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 text-slate-300 hover:text-white rounded-xl transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 text-slate-300 hover:text-blue-400 rounded-xl transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 text-slate-300 hover:text-purple-400 rounded-xl transition-all duration-300"
                  >
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
                
                <Link
                  href="/get-started"
                  className="block mx-6 px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-center hover:from-blue-400 hover:to-purple-500 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Launch App
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
