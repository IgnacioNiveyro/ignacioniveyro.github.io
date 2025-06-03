import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/IgnacioNiveyro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ignacioniveyro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:nachoniveyro97@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
