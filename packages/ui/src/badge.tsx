"use client"
import type React from "react"
import { forwardRef } from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "destructive" | "outline" | "gradient" | "glow"
  size?: "sm" | "default" | "lg"
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
    
    const variants = {
      default: "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-200 hover:bg-slate-700/50 hover:border-slate-600/50",
      secondary: "bg-blue-500/10 border border-blue-500/20 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/30",
      success: "bg-green-500/10 border border-green-500/20 text-green-300 hover:bg-green-500/20 hover:border-green-500/30",
      warning: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/20 hover:border-yellow-500/30",
      destructive: "bg-red-500/10 border border-red-500/20 text-red-300 hover:bg-red-500/20 hover:border-red-500/30",
      outline: "bg-transparent border-2 border-slate-600/30 text-slate-300 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/5",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-purple-400 hover:shadow-blue-500/40 hover:scale-105",
      glow: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
    }
    
    const sizes = {
      sm: "px-2.5 py-1 text-xs",
      default: "px-3 py-1.5 text-sm",
      lg: "px-4 py-2 text-base"
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="relative z-10 flex items-center gap-1">
          {props.children}
        </div>
        
        {/* Glow effect for gradient and glow variants */}
        {(variant === "gradient" || variant === "glow") && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
        )}
      </div>
    )
  },
)

Badge.displayName = "Badge"
