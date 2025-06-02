"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  id: number | string
  title: string
  description: string
  image: string
  category: string
}

export function ProjectCard({ id, title, description, image, category }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${id}`}>
        <div className="relative overflow-hidden mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-black/0"
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-neutral-500 text-sm">{description}</p>
        <span className="text-xs uppercase tracking-wider text-neutral-400 mt-1 inline-block">{category}</span>
      </Link>
    </motion.div>
  )
}
