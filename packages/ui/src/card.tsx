"use client"
import type React from "react"
import { forwardRef } from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glow" | "gradient"
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = true, ...props }, ref) => {
    const baseClasses = "rounded-xl transition-all duration-300"
    
    const variants = {
      default: "bg-card border border-border shadow-sm",
      glass: "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/5",
      glow: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/10",
      gradient: "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 shadow-xl"
    }

    const hoverEffects = hover 
      ? "hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 cursor-pointer group" 
      : ""

    const glowHover = variant === "glow" && hover 
      ? "hover:shadow-blue-500/20 hover:border-blue-400/30" 
      : ""

    const classes = `${baseClasses} ${variants[variant]} ${hoverEffects} ${glowHover} ${className}`

    return (
      <div ref={ref} className={classes} {...props} />
    )
  },
)

Card.displayName = "Card"
