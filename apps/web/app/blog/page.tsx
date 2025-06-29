"use client"

import { Navigation } from "@repo/ui/navigation"
import { BlogGrid } from "@repo/ui/blog-grid"
import { Footer } from "@repo/ui/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web3 Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and developments in the Web3 ecosystem.
            </p>
          </div>
          <BlogGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
