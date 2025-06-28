"use client"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Search, Filter } from "lucide-react"

export function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filters = ["All", "DeFi", "NFT", "DAO", "Infrastructure", "Social", "Gaming"]

  return (
    <div className="mb-12">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="text-sm"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
