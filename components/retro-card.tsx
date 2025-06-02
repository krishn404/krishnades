"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface RetroCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  borderColor?: "orange" | "blue" | "red" | "yellow"
}

export function RetroCard({ children, className, hover = true, borderColor = "orange" }: RetroCardProps) {
  const borderColors = {
    orange: "border-orange-500",
    blue: "border-blue-500",
    red: "border-red-400",
    yellow: "border-yellow-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-cream-50 border-4 border-gray-800 rounded-lg p-6 shadow-lg",
        "relative overflow-hidden",
        hover && "cursor-pointer",
        className,
      )}
    >
      {/* Decorative corner */}
      <div
        className={cn(
          "absolute top-0 right-0 w-8 h-8 border-l-4 border-b-4 border-gray-800",
          borderColors[borderColor],
        )}
      />

      {children}
    </motion.div>
  )
}
