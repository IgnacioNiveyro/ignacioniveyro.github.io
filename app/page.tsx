'use client'
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { useTranslatedProjects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/contexts/language-context"
import { FileText, Linkedin } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()
  const projects = useTranslatedProjects()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-dot-pattern opacity-20"></div>
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/nacho_2.jpg"
                alt="Foto de perfil"
                width={500}
                height={500}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-dot-pattern opacity-20"></div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {t('hero.greeting')} <span className="block">{t('hero.name')}</span>
            </h1>
            <h3 className="text-muted-foreground text-lg">
              {t('hero.description')}
            </h3>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://www.linkedin.com/in/ignacioniveyro/" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-md transition-transform hover:scale-105 hover:bg-primary/90 cursor-pointer">
                  {t('hero.contact')} <Linkedin className="ml-2" />
                </Button>
              </a>
              <a
                href="/cv/Ignacio-Niveyro-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-md transition-transform hover:scale-105 hover:bg-primary/90 cursor-pointer">
                  CV <FileText className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h1>
          <h3 className="text-lg mb-8">
            {t('about.description')}
          </h3>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h1>
          <h3 className="text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>


    </main>
  )
}