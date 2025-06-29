"use client"

import { Navigation } from "@repo/ui/navigation"
import { ProjectsGrid } from "@repo/ui/projects-grid"
import { ProjectsFilter } from "@repo/ui/projects-filter"
import { Footer } from "@repo/ui/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web3 Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover innovative Web3 projects and contribute to the future of decentralized technology.
            </p>
          </div>
          <ProjectsFilter />
          <ProjectsGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
