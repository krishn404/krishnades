"use client"

import { motion } from "framer-motion"
import { X, Minus, Square } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface RetroWindowProps {
  children: ReactNode
  title?: string
  className?: string
  titleBarColor?: "orange" | "blue" | "red" | "yellow"
  onClose?: () => void
  onMinimize?: () => void
  onMaximize?: () => void
}

export function RetroWindow({
  children,
  title = "Window",
  className,
  titleBarColor = "orange",
  onClose,
  onMinimize,
  onMaximize,
}: RetroWindowProps) {
  const titleBarColors = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    red: "bg-red-400",
    yellow: "bg-yellow-400",
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn("bg-cream-100 border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg", className)}
    >
      {/* Title Bar */}
      <div className={cn("px-4 py-2 flex items-center justify-between", titleBarColors[titleBarColor])}>
        <span className="text-gray-900 font-black text-sm uppercase tracking-wider">{title}</span>
        <div className="flex items-center gap-2">
          {onMinimize && (
            <button
              onClick={onMinimize}
              className="w-5 h-5 bg-yellow-400 border-2 border-gray-800 rounded-sm flex items-center justify-center hover:bg-yellow-300 transition-colors"
            >
              <Minus className="w-3 h-3 text-gray-800" />
            </button>
          )}
          {onMaximize && (
            <button
              onClick={onMaximize}
              className="w-5 h-5 bg-green-400 border-2 border-gray-800 rounded-sm flex items-center justify-center hover:bg-green-300 transition-colors"
            >
              <Square className="w-3 h-3 text-gray-800" />
            </button>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="w-5 h-5 bg-red-400 border-2 border-gray-800 rounded-sm flex items-center justify-center hover:bg-red-300 transition-colors"
            >
              <X className="w-3 h-3 text-gray-800" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-cream-50">{children}</div>
    </motion.div>
  )
}
