"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft, ArrowRight, Calendar, Tag, ExternalLink, User, Clock, Heart, Eye,  } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RetroButton } from "@/components/retro-button"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  category: string
  year: string
  client: string
  duration: string
  technologies: string[]
  gallery: string[]
  featured?: boolean
  link?: string
  bgColor?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
  projects: Project[]
}

export function ProjectModal({ project, isOpen, onClose, projects }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleArrowKeys = (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === "ArrowLeft") {
        previousImage()
      } else if (e.key === "ArrowRight") {
        nextImage()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      window.addEventListener("keydown", handleArrowKeys)
      return () => {
        window.removeEventListener("keydown", handleEscape)
        window.removeEventListener("keydown", handleArrowKeys)
      }
    }
  }, [isOpen, onClose, project])

  if (!project) return null

  const currentProjectIndex = projects.findIndex((p) => p.id === project.id)
  const previousProject = projects[currentProjectIndex - 1]
  const nextProject = projects[currentProjectIndex + 1]

  const images = project.gallery || [project.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative bg-cream-50 border-4 border-gray-800 rounded-lg w-full shadow-2xl ${
              isMobile ? "h-[95vh] max-w-md mx-auto" : "max-w-7xl h-[95vh]"
            } overflow-hidden`}
          >
            {/* Header */}
            <div
              className={`${isMobile ? "relative" : "absolute"} top-0 left-0 right-0 z-20 p-4 ${
                isMobile ? "bg-orange-500 border-b-2 border-gray-800" : "bg-gradient-to-b from-black/50 to-transparent"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`${
                      isMobile
                        ? "bg-cream-50 hover:bg-cream-100 text-gray-900"
                        : "bg-cream-50/90 backdrop-blur-sm hover:bg-cream-50 text-gray-900"
                    } rounded-lg border-2 border-gray-800 shadow-lg`}
                    onClick={onClose}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <div className={isMobile ? "text-white" : "text-white"}>
                    <h3 className="font-black text-sm">{project.title}</h3>
                    <p className={`text-xs font-bold ${isMobile ? "text-white/90" : "text-white/80"}`}>
                      {project.category} • {project.year}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>

            {isMobile ? (
              /* Mobile Layout - Vertical Stack */
              <div className="flex flex-col h-full">
                {/* Image Section - Top */}
                <div className="relative bg-cream-100 aspect-[4/3] border-b-2 border-gray-800">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-4"
                    >
                      <Image
                        src={images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover rounded-lg border-2 border-gray-800"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-cream-50/90 backdrop-blur-sm hover:bg-cream-50 text-gray-900 rounded-lg border-2 border-gray-800 shadow-lg w-8 h-8"
                        onClick={previousImage}
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-cream-50/90 backdrop-blur-sm hover:bg-cream-50 text-gray-900 rounded-lg border-2 border-gray-800 shadow-lg w-8 h-8"
                        onClick={nextImage}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>

                      {/* Image Counter */}
                      <div className="absolute bottom-2 right-2 bg-cream-50/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border border-gray-800">
                        <span className="text-gray-900 text-xs font-black">
                          {currentImageIndex + 1} / {images.length}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Thumbnail Strip */}
                  {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 bg-cream-50/90 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-gray-800">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all border border-gray-800 ${
                            index === currentImageIndex ? "bg-orange-500 scale-125" : "bg-gray-400 hover:bg-gray-600"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Section - Bottom */}
                <div className="flex-1 p-4 overflow-y-auto bg-cream-50">
                  <div className="space-y-4">
                    {/* Stats */}
                    

                    {/* Title and Description */}
                    <div>
                      <h2 className="text-xl font-black text-gray-900 mb-2">{project.title}</h2>
                      <p className="text-gray-700 leading-relaxed font-bold text-sm mb-3">{project.description}</p>

                      <div className="flex items-center gap-3 text-xs text-gray-600 font-black mb-4">
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Project Overview */}
                    <div>
                      <h3 className="text-lg font-black mb-2 text-gray-900">Project Overview</h3>
                      <p className="text-gray-700 leading-relaxed font-bold text-sm">{project.fullDescription}</p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 rounded-lg bg-cream-100 border-2 border-gray-800">
                        <h4 className="font-black text-gray-900 mb-1 flex items-center gap-2 text-sm">
                          <User className="w-3 h-3" />
                          Client
                        </h4>
                        <p className="text-gray-700 font-bold text-sm">{project.client}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-cream-100 border-2 border-gray-800">
                        <h4 className="font-black text-gray-900 mb-1 flex items-center gap-2 text-sm">
                          <Clock className="w-3 h-3" />
                          Duration
                        </h4>
                        <p className="text-gray-700 font-bold text-sm">{project.duration}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-black text-gray-900 mb-2 text-sm">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-orange-500 text-white rounded-lg text-xs font-black border border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-4 border-t-2 border-gray-800">
                      {project.link && (
                        <RetroButton variant="primary" size="sm" asChild>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live Project
                          </Link>
                        </RetroButton>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Desktop Layout - Horizontal Split */
              <div className="flex h-full">
                {/* Gallery Section - Left */}
                <div className="w-1/2 relative bg-cream-100">
                  <div className="relative h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 p-8"
                      >
                        <Image
                          src={images[currentImageIndex] || "/placeholder.svg"}
                          alt={`${project.title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover rounded-lg border-2 border-gray-800"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Image Navigation */}
                    {images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream-50/90 backdrop-blur-sm hover:bg-cream-50 text-gray-900 rounded-lg border-2 border-gray-800 shadow-lg"
                          onClick={previousImage}
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream-50/90 backdrop-blur-sm hover:bg-cream-50 text-gray-900 rounded-lg border-2 border-gray-800 shadow-lg"
                          onClick={nextImage}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </Button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-cream-50/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg border-2 border-gray-800">
                          <span className="text-gray-900 text-sm font-black">
                            {currentImageIndex + 1} / {images.length}
                          </span>
                        </div>
                      </>
                    )}

                    

                    {/* Thumbnail Strip */}
                    {images.length > 1 && (
                      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 bg-cream-50/90 backdrop-blur-sm rounded-lg p-2 shadow-lg border-2 border-gray-800">
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all border border-gray-800 ${
                              index === currentImageIndex ? "bg-orange-500 scale-125" : "bg-gray-400 hover:bg-gray-600"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section - Right */}
                <div className="w-1/2 p-8 lg:p-12 overflow-y-auto bg-cream-50">
                  <div className="space-y-8">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 font-black">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        {project.featured && (
                          <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-lg text-xs font-black uppercase tracking-wider border-2 border-gray-800">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">{project.title}</h2>
                      <p className="text-lg text-gray-700 leading-relaxed font-bold">{project.description}</p>
                    </div>

                    {/* Full Description */}
                    <div>
                      <h3 className="text-xl font-black mb-4 text-gray-900">Project Overview</h3>
                      <p className="text-gray-700 leading-relaxed font-bold">{project.fullDescription}</p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-lg bg-cream-100 border-2 border-gray-800">
                        <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Client
                        </h4>
                        <p className="text-gray-700 font-bold">{project.client}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-cream-100 border-2 border-gray-800">
                        <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Duration
                        </h4>
                        <p className="text-gray-700 font-bold">{project.duration}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-black text-gray-900 mb-4">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-orange-500 text-white rounded-lg text-sm font-black border-2 border-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-800">
                      {project.link && (
                        <RetroButton variant="primary" asChild>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Live Project
                          </Link>
                        </RetroButton>
                      )}
                      <RetroButton variant="secondary" onClick={onClose}>
                        Close Preview
                      </RetroButton>
                    </div>

                    {/* Project Navigation */}
                    {(previousProject || nextProject) && (
                      <div className="border-t-2 border-gray-800 pt-8">
                        <h4 className="font-black text-gray-900 mb-6">More Projects</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {previousProject && (
                            <motion.div
                              className="p-4 rounded-lg bg-cream-100 border-2 border-gray-800 hover:bg-cream-200 transition-all cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                            >
                              <p className="text-sm text-gray-600 mb-1 font-bold">Previous</p>
                              <h5 className="font-black text-gray-900">{previousProject.title}</h5>
                              <p className="text-sm text-gray-700 font-bold">{previousProject.category}</p>
                            </motion.div>
                          )}
                          {nextProject && (
                            <motion.div
                              className="p-4 rounded-lg bg-cream-100 border-2 border-gray-800 hover:bg-cream-200 transition-all cursor-pointer"
                              whileHover={{ scale: 1.02 }}
                            >
                              <p className="text-sm text-gray-600 mb-1 font-bold">Next</p>
                              <h5 className="font-black text-gray-900">{nextProject.title}</h5>
                              <p className="text-sm text-gray-700 font-bold">{nextProject.category}</p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
