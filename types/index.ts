export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
  featured: boolean
}
