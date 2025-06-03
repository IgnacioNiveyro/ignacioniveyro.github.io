"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const technologies = [
  { id: "all", label: "Todos" },
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next.js" },
  { id: "typescript", label: "TypeScript" },
  { id: "javascript", label: "JavaScript" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "node", label: "Node.js" },
]

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {technologies.map((tech) => (
        <Button
          key={tech.id}
          variant={activeFilter === tech.id ? "default" : "outline"}
          size="sm"
          className="rounded-md"
          onClick={() => setActiveFilter(tech.id)}
        >
          {tech.label}
        </Button>
      ))}
    </div>
  )
}
