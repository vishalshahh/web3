"use client"

import { Navigation } from "@repo/ui/navigation"
import { LearningResources } from "@repo/ui/learning-resources"
import { Footer } from "@repo/ui/footer"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master Web3 development with our comprehensive tutorials, guides, and educational content.
            </p>
          </div>
          <LearningResources />
        </div>
      </main>
      <Footer />
    </div>
  )
}
