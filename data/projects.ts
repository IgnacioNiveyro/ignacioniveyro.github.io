import type { Project } from "@/types"
import { useLanguage } from "@/app/contexts/language-context"

// Hook para obtener proyectos traducidos
export function useTranslatedProjects(): Project[] {
  const { t } = useLanguage()

  return [
    {
      id: 1,
      title: t('project.1.title'),
      description: t('project.1.description'),
      image: "/logo-transporte.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
      demoUrl: "https://trans-vallejos.vercel.app/landing",
      featured: true,
    },
    {
      id: 2,
      title: t('project.2.title'),
      description: t('project.2.description'),
      image: "/logo.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
      demoUrl: "https://razuc-niveyro-proyecto-nextjs.vercel.app/home",
      repoUrl: "https://github.com/IgnacioNiveyro/razuc-niveyro-proyecto-nextjs",
      featured: true,
    },
    {
      id: 3,
      title: t('project.3.title'),
      description: t('project.3.description'),
      image: "/naftapp.png",
      repoUrl: "https://github.com/IgnacioNiveyro/naftapp",
      technologies: ["Flutter", "Dart"],
      featured: false,
    },
    {
      id: 4,
      title: t('project.4.title'),
      description: t('project.4.description'),
      image: "/spring.png",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "JPA"],
      repoUrl: "https://github.com/IgnacioNiveyro/SpringBoot-Student-CRUD",
      featured: false,
    },
    {
      id: 5,
      title: t('project.5.title'),
      description: t('project.5.description'),
      image: "/notes.png",
      technologies: ["React.js", "Nest.js", "Prisma"],
      demoUrl: "https://frontend-notes-pi.vercel.app/",
      repoUrl: "https://github.com/IgnacioNiveyro/backend-notes",
      featured: false,
    },
  ]
}