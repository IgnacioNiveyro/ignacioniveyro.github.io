"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    
    // Hero Section
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Ignacio Niveyro!',
    'hero.description': 'Graduado de la Universidad Nacional del Sur en Bahía Blanca, Argentina. Soy Licenciado en Ciencias de la Computación y me apasiona crear soluciones digitales que realmente sumen valor.',
    'hero.contact': 'Conectemos!',
    
    // Projects Section
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una muestra de mis últimos desarrollos personales y académicos.',
    
    // About Section
    'about.title': 'Sobre mí',
    'about.description': 'Soy un desarrollador con formación sólida en Ciencias de la Computación y una gran pasión por aprender y construir soluciones útiles. Fui ayudante en la universidad porque disfruto enseñar y compartir conocimiento. Trabajo con tecnologías como Node.js, PostgreSQL y Flutter, pero estoy siempre abierto a incorporar nuevas herramientas que me hagan crecer. Me gusta trabajar en equipo, preguntar cuando no sé, y encarar cada proyecto con humildad, compromiso y mentalidad de mejora constante.',

    // Projects Data
    'project.1.title': 'Transporte Vallejo · Gestión logística integral',
    'project.1.description': 'Sistema web completo para una empresa de transporte: gestión de choferes, camiones, viajes y liquidaciones salariales. Desarrollado como proyecto familiar, en producción y funcionando todos los días. Pensado para escalar, optimiza procesos clave y reduce errores operativos. Demo disponible bajo solicitud.',
    
    'project.2.title': 'E-commerce con pagos integrados',
    'project.2.description': 'Tienda online desarrollada como parte de la materia Ingeniería de Aplicaciones Web. Incluye panel de administración de productos, carrito dinámico y pasarela de pagos con Mercado Pago. Enfocado en experiencia de usuario y flujo de compra eficiente. Código limpio y modular, listo para escalar.',
    
    'project.3.title': 'NaftApp · Control de gastos vehiculares',
    'project.3.description': 'App mobile creada desde cero con Flutter para registrar cargas de combustible, gastos mensuales y mantenimiento del vehículo. Ideal para conductores que quieren tener sus finanzas al volante bajo control. Proyecto personal con enfoque real en usabilidad y persistencia local.',
    
'project.4.title': 'Student Management API',
'project.4.description': 'API RESTful desarrollada con Spring Boot para gestión completa de estudiantes. Implementa operaciones CRUD con PostgreSQL y JPA, diseñada con arquitectura modular y escalable.',

    'project.5.title': 'NoteTags · Notas organizadas con etiquetas',
    'project.5.description': 'Aplicación de notas con sistema de tags inteligente. Permite crear, editar y clasificar notas por categorías. Pensado como laboratorio personal para practicar NestJS, Prisma y arquitectura limpia. Enfoque backend-first con UI rápida y responsive.'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Ignacio Niveyro!',
    'hero.description': 'Graduate from Universidad Nacional del Sur in Bahía Blanca, Argentina. I hold a Computer Science degree and I\'m passionate about creating digital solutions that truly add value.',
    'hero.contact': 'Let\'s connect!',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'A showcase of my latest personal and academic developments.',
    
    // About Section
    'about.title': 'About me',
    'about.description': 'I\'m a developer with a solid background in Computer Science and a great passion for learning and building useful solutions. I was a teaching assistant at university because I enjoy teaching and sharing knowledge. I work with technologies like Node.js, PostgreSQL and Flutter, but I\'m always open to incorporating new tools that help me grow. I like working in teams, asking when I don\'t know something, and approaching each project with humility, commitment and a mindset of constant improvement.',

    // Projects Data
    'project.1.title': 'Transporte Vallejo · Comprehensive logistics management',
    'project.1.description': 'Complete web system for a transport company: driver management, trucks, trips and payroll calculations. Developed as a family project, in production and running daily. Built to scale, it optimizes key processes and reduces operational errors. Demo available upon request.',
    
    'project.2.title': 'E-commerce with integrated payments',
    'project.2.description': 'Online store developed as part of the Web Application Engineering course. Includes product administration panel, dynamic cart and payment gateway with Mercado Pago. Focused on user experience and efficient purchase flow. Clean and modular code, ready to scale.',
    
    'project.3.title': 'NaftApp · Vehicle expense control',
    'project.3.description': 'Mobile app created from scratch with Flutter to track fuel charges, monthly expenses and vehicle maintenance. Ideal for drivers who want to keep their driving finances under control. Personal project with real focus on usability and local persistence.',

'project.4.title': 'Student Management API',
'project.4.description': 'RESTful API built with Spring Boot for comprehensive student management. Implements CRUD operations with PostgreSQL and JPA, designed with modular and scalable architecture.',

    'project.5.title': 'NoteTags · Organized notes with tags',
    'project.5.description': 'Notes application with intelligent tag system. Allows creating, editing and categorizing notes. Designed as a personal lab to practice NestJS, Prisma and clean architecture. Backend-first approach with fast and responsive UI.'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}