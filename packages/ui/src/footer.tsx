"use client"

import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/projects", label: "Projects" },
        { href: "/hackathons", label: "Hackathons" },
        { href: "/events", label: "Events" },
        { href: "/learn", label: "Learn" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "/groups", label: "Developer Groups" },
        { href: "/blog", label: "Blog" },
        { href: "/success-stories", label: "Success Stories" },
        { href: "/funding", label: "Funding" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/careers", label: "Careers" },
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

  const [year, setYear] = useState<number>(2024)
  useEffect(() => setYear(new Date().getFullYear()), [])

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="font-bold text-xl gradient-text mb-4 block">
              Web3Platform
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building the future of decentralized technology, one project at a time. Join our community of innovators
              and creators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Discord className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {year} Web3Platform. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
