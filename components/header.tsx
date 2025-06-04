"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
//import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/app/contexts/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (newLanguage: 'es' | 'en') => {
    setLanguage(newLanguage)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Contenedor principal con márgenes automáticos y padding consistente */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Menú de navegación (izquierda) */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              {t('nav.home')}
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              {t('nav.about')}
            </Link>
            <Link href="#work" className="text-sm font-medium hover:underline underline-offset-4">
              {t('nav.projects')}
            </Link>
          </nav>

          {/* Controles (derecha) */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 ">
              <div className="flex items-center gap-1 ">
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`text-sm px-1 py-0.5 rounded transition-colors cursor-pointer ${language === 'es'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted cursor: pointer'
                    }`}
                >
                  ES
                </button>
                <span className="text-muted-foreground">|</span>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`text-sm px-1 py-0.5 rounded transition-colors cursor-pointer ${language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted cursor: pointer'
                    }`}
                >
                  EN
                </button>
              </div>
              <span className="text-muted-foreground">|</span>
              <ModeToggle />
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
            
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t px-4 pb-4 pt-2 shadow-sm">
          {/* 
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-base font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="#about"
              className="text-base font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="#work"
              className="text-base font-medium hover:underline underline-offset-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.projects')}
            </Link>
          </nav>
          */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleLanguageChange('es')}
                className={`text-sm px-2 py-1 rounded transition-colors ${language === 'es'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                  }`}
              >
                ES
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`text-sm px-2 py-1 rounded transition-colors ${language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                  }`}
              >
                EN
              </button>
            </div>
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}