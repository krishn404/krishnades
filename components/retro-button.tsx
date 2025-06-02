"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { forwardRef, type ButtonHTMLAttributes } from "react"

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  asChild?: boolean
}

export const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ className, variant = "primary", size = "md", children, asChild = false, ...props }, ref) => {
    const variants = {
      primary: "bg-orange-500 hover:bg-orange-600 text-white border-orange-600",
      secondary: "bg-blue-500 hover:bg-blue-600 text-white border-blue-600",
      accent: "bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-500",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    if (asChild) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "inline-flex items-center justify-center font-black uppercase tracking-wider",
            "border-4 border-gray-800 rounded-lg shadow-lg",
            "transition-all duration-200 cursor-pointer",
            variants[variant],
            sizes[size],
            className,
          )}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center font-black uppercase tracking-wider",
          "border-4 border-gray-800 rounded-lg shadow-lg",
          "transition-all duration-200",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

RetroButton.displayName = "RetroButton"
