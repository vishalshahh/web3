"use client"
import type React from "react"
import { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "ghost" | "glow"
  inputSize?: "sm" | "default" | "lg"
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", variant = "default", inputSize = "default", ...props }, ref) => {
    const baseClasses = "flex w-full rounded-xl font-medium transition-all duration-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:transition-colors"
    
    const variants = {
      default: "bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700/50 text-white placeholder:text-slate-400 focus-visible:border-blue-500/50 focus-visible:bg-slate-800/70 focus-visible:shadow-lg focus-visible:shadow-blue-500/20 hover:border-slate-600/50",
      ghost: "bg-transparent border-2 border-slate-600/30 text-white placeholder:text-slate-500 focus-visible:border-blue-400/60 focus-visible:bg-slate-800/20 hover:border-slate-500/40",
      glow: "bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm border-2 border-blue-500/30 text-white placeholder:text-slate-400 focus-visible:border-blue-400/70 focus-visible:shadow-xl focus-visible:shadow-blue-500/30 hover:border-blue-500/50"
    }
    
    const sizes = {
      sm: "h-10 px-4 py-2 text-sm",
      default: "h-12 px-5 py-3 text-base",
      lg: "h-14 px-6 py-4 text-lg"
    }

    return (
      <div className="relative group">
        <input
          type={type}
          className={`${baseClasses} ${variants[variant]} ${sizes[inputSize]} ${className}`}
          ref={ref}
          {...props}
        />
        
        {/* Enhanced focus ring */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Glow effect for glow variant */}
        {variant === "glow" && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
