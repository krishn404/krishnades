"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Menu, X, Calendar, Tag, Eye, Heart, Star, MessageCircle, Linkedin, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProjectModal } from "@/components/project-modal"
import { RetroWindow } from "@/components/retro-window"
import { RetroButton } from "@/components/retro-button"
import { RetroCard } from "@/components/retro-card"
// import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { scrollY } = useScroll()
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8])

  const sections = ["home", "projects", "about"]
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      if (scrollPosition < projectsRef.current?.offsetTop) {
        setActiveSection("home")
      } else if (scrollPosition < aboutRef.current?.offsetTop) {
        setActiveSection("projects")
      } else {
        setActiveSection("about")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "SaaSto Website",
      description: "design showcase and case study",
      fullDescription:
        "A comprehensive design showcase created in Figma, featuring interactive elements and modern design principles. This project demonstrates advanced UI/UX capabilities with a focus on user experience and visual aesthetics.",
      image: "/saasto.png",
      category: "UI/UX Design",
      year: "2024",
      client: "Personal Project",
      duration: "2 months",
      technologies: ["Figma", "UI Design", "Prototyping"],
      gallery: ["/saasto.png"],
      featured: true,
      link: "https://www.figma.com/design/JVVrgUfm3KEmIj5Y1jgA7G/Untitled?node-id=0-1&t=HT1hU9kyIKajPET7-1",
    },
    {
      id: 2,
      title: "Seedhe Maut Graphic Poster",
      description: "Grungy hip-hop style Graphic Poster for Seedhe Maut",
      fullDescription: "A comprehensive hip-hop centric duo grungy poster cover for Seedhe maut.",
      image: "/seedhemaut.jpg",
      category: "Poster Cover",
      year: "2024",
      client: "Personal Project",
      duration: "2 Hours Work",
      technologies: ["Adobe Photoshop", "Canva"],
      gallery: ["/seedhemaut.jpg"],
      featured: false,
    },
    {
      id: 3,
      title: "FitWell",
      description: "Completely mobile responsive UI for a Personalised Fitness App",
      fullDescription:
        "Designed a completely mobile responsive UI for a Personalised Fitness App. Used bento grid for the layout and gave it modern iOS design.",
      image: "/Fitwell.png",
      category: "UI/UX Design",
      year: "2024",
      client: "Personal Project",
      duration: "2 months",
      technologies: ["Figma", "UI Design", "Prototyping"],
      gallery: ["/Fitwell.png", "/fitwell-home.png", "/fitwell2.png"],
      featured: false,
    },
    {
      id: 4,
      title: "GitFriend",
      description: "Git and github AI tool",
      fullDescription:
        "GitFriend is a web application that allows you to Assist your GitHub. It is built with React, Next.js, and Tailwind CSS.",
      image: "/gitfriend.png",
      category: "Web Design",
      year: "2024",
      client: "Personal Project",
      duration: "4 months",
      technologies: ["Google Fonts", "Figma"],
      gallery: ["/gitfriend.png"],
      featured: true,
    },
    {
      id: 5,
      title: "Step In - Poster",
      description: "Freelance project for a Music Artist for his single release named Step In",
      fullDescription: "I designed a poster for a music artist for his single release named Step In.",
      image: "/step.jpg",
      category: "Poster Cover",
      year: "2024",
      client: "Freelance Project",
      duration: "2 Hours Work",
      technologies: ["Adobe Photoshop", "Canva"],
      gallery: ["/step.jpg"],
      featured: false,
    },
    {
      id: 7,
      title: "Thumbnail - Come Back",
      description: "Bright UI design with retro elements",
      fullDescription:
        "A complete UI/UX design for Glow, a meditation and wellness app that uses vibrant color therapy principles. The interface design incorporates bright colors, bold typography, and smooth animations that create an energizing user experience.",
      image: "/thumbnail - comeback.png",
      category: "Thumbnail Design",
      year: "2024",
      client: "Glow Wellness Inc.",
      duration: "4 months",
      technologies: ["Adobe Photoshop", "Canva"],
      gallery: ["/thumbnail - comeback.png"],
      featured: true,
    },
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <main className="min-h-screen bg-cream-50 overflow-x-hidden">
      {/* Floating Decorative Elements */}
      {/* <FloatingElements /> */}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center bg-cream-100 shadow-lg border-b-4 border-gray-800">
        <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-gray-900">KRISHNA</span><span className="text-orange-500">DESIGNS</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={cn(
                "text-sm font-black uppercase tracking-wider transition-all duration-300 relative py-2 px-4 border-2 rounded-lg",
                activeSection === section
                  ? "text-white bg-orange-500 border-gray-800"
                  : "text-gray-800 hover:text-orange-500 border-transparent hover:border-gray-800",
              )}
            >
              {section}
            </Link>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden border-2 border-gray-800 rounded-lg"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-cream-100 p-6 flex flex-col border-l-4 border-gray-800"
          >
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="border-2 border-gray-800 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-col space-y-8 items-center justify-center h-full">
              {sections.map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="text-3xl font-black uppercase tracking-wider text-gray-800 hover:text-orange-500 transition-colors border-4 border-gray-800 px-8 py-4 rounded-lg bg-cream-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-black rounded-lg border-4 border-gray-800 mb-8 shadow-lg">
              <Zap className="w-4 h-4" />
              Creative Graphic Designer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none"
          >
            <span className="text-gray-900">Creating</span>{" "}
            <span className="text-orange-500 block md:inline drop-shadow-lg">BOLD</span>{" "}
            <span className="text-gray-900">visual experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mb-12 leading-relaxed font-bold"
          >
            I'm Krishna, a passionate graphic designer who transforms ideas into stunning visual narratives.
            Specializing in bold branding, electric editorial design, and vibrant digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <RetroButton size="lg" asChild>
              <Link href="#projects" className="group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </RetroButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16"
          >
            <RetroCard borderColor="orange">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500 mb-2">35+</div>
                <div className="text-gray-700 font-bold">Projects Completed</div>
              </div>
            </RetroCard>

            <RetroCard borderColor="blue">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">10+</div>
                <div className="text-gray-700 font-bold">Happy Clients</div>
              </div>
            </RetroCard>

            <RetroCard borderColor="red">
              <div className="text-center">
                <div className="text-4xl font-black text-red-400 mb-2">3+</div>
                <div className="text-gray-700 font-bold">Years Experience</div>
              </div>
            </RetroCard>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-32 px-6 md:px-12 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-gray-900">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-bold">
              Explore my latest creative works that push boundaries and challenge conventional design thinking. Each
              project tells a unique story through bold visuals and innovative solutions.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => handleProjectClick(project)}
                  >
                    <RetroWindow title={project.category} titleBarColor="orange">
                      <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg border-2 border-gray-800">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                          <div className="bg-cream-50 rounded-full p-4 shadow-lg border-2 border-gray-800">
                            <Eye className="w-8 h-8 text-gray-800" />
                          </div>
                        </div>

                        {/* Stats Overlay */}
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border-2 border-gray-800">
                            ★ Featured
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                          <span className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-bold">{project.description}</p>
                        <div className="flex items-center text-sm font-black text-orange-500 group-hover:text-orange-600 transition-colors">
                          Explore Project
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>
                    </RetroWindow>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-3xl font-black mb-12 text-gray-900">All Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <RetroCard>
                    <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-lg border-2 border-gray-800">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/10">
                        <div className="bg-cream-50 rounded-full p-3 shadow-lg border-2 border-gray-800">
                          <Eye className="w-6 h-6 text-gray-800" />
                        </div>
                      </div>

                      {/* Stats */}
                      

                      {project.featured && (
                        <div className="absolute top-2 right-2">
                          <div className="bg-yellow-400 text-gray-900 p-1 rounded-full border border-gray-800">
                            <Star className="w-3 h-3" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-bold">{project.description}</p>
                    </div>
                  </RetroCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-6 md:px-12 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-black mb-8 text-gray-900">
                  About <span className="text-orange-500">Me</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-bold">
                  <p>
                    I'm a passionate UI/UX designer and graphic artist with a keen eye for creating engaging visual
                    experiences. My journey in design started with a love for art and technology, which has evolved into
                    a professional career crafting digital experiences that users love.
                  </p>
                  <p>
                    With expertise in both UI/UX design and graphic design, I bridge the gap between aesthetics and
                    functionality. I believe in creating designs that not only look beautiful but also solve real user
                    problems and enhance user experience.
                  </p>
                  <p>
                    When I'm not designing, you'll find me exploring new design trends, experimenting with different art
                    styles, or contributing to the design community through knowledge sharing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <RetroCard borderColor="orange">
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-500 mb-2">3+</div>
                    <div className="text-gray-700 font-bold">Years of Experience</div>
                  </div>
                </RetroCard>
                <RetroCard borderColor="blue">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-500 mb-2">35+</div>
                    <div className="text-gray-700 font-bold">Projects Completed</div>
                  </div>
                </RetroCard>
                <RetroCard borderColor="red">
                  <div className="text-center">
                    <div className="text-3xl font-black text-red-400 mb-2">10+</div>
                    <div className="text-gray-700 font-bold">Happy Clients</div>
                  </div>
                </RetroCard>
                <RetroCard borderColor="yellow">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400 mb-2">∞</div>
                    <div className="text-gray-700 font-bold">Creative Ideas</div>
                  </div>
                </RetroCard>
              </div>
            </div>

            <div className="space-y-8">
              <RetroWindow title="What I Do" titleBarColor="blue">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      service: "UI/UX Design",
                      icon: "🎨",
                      color: "bg-orange-500",
                      description: "Creating intuitive and engaging user interfaces with a focus on user experience",
                    },
                    {
                      service: "Graphic Design",
                      icon: "✨",
                      color: "bg-blue-500",
                      description: "Designing posters, thumbnails, and visual content that tells compelling stories",
                    },
                    {
                      service: "Web Design",
                      icon: "🌐",
                      color: "bg-red-400",
                      description: "Building responsive and modern websites with clean, user-friendly interfaces",
                    },
                    {
                      service: "Brand Identity",
                      icon: "🎯",
                      color: "bg-yellow-400",
                      description: "Developing unique brand identities that resonate with target audiences",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-cream-100 border-2 border-gray-800 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white text-xl shrink-0 border-2 border-gray-800`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-gray-900 mb-2">{item.service}</h4>
                          <p className="text-gray-700 font-bold text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </RetroWindow>

              <RetroWindow title="Let's Work Together" titleBarColor="orange">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-black text-gray-900">Ready to Collaborate?</h4>
                  <p className="text-gray-700 font-bold">
                    Have a project in mind? I'm always open to discussing new projects, creative ideas, or opportunities
                    to be part of your vision.
                  </p>
                  <RetroButton variant="secondary" asChild>
                    <Link href="https://www.linkedin.com/in/krishn404/">Get in Touch</Link>
                  </RetroButton>
                </div>
              </RetroWindow>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-cream-100 border-t-4 border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-black tracking-tight">
          <span className="text-gray-900">KRISHNA</span><span className="text-orange-500">DESIGNS</span>
        </Link>
          </div>

          <div className="flex space-x-6">
            <RetroButton variant="accent" size="sm" asChild>
              <Link href="https://wa.link/17yqw9" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                DM Me
              </Link>
            </RetroButton>
            <RetroButton variant="secondary" size="sm" asChild>
              <Link href="https://www.linkedin.com/in/krishn404/" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                Connect
              </Link>
            </RetroButton>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} projects={projects} />
    </main>
  )
}
