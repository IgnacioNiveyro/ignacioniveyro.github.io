import Image from "next/image"
import Link from "next/link"
import { Eye, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-md border border-muted">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {project.demoUrl && (
          <Button variant="outline" size="sm" asChild className="rounded-md">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-2" />
              Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild className="rounded-md">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Repo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
