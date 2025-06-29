"use client"
import type React from "react"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive" | "gradient" | "glow"
  size?: "sm" | "default" | "lg" | "xl"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40",
      outline: "border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm",
      ghost: "text-slate-400 hover:text-white hover:bg-white/5 backdrop-blur-sm",
      destructive: "bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/25",
      gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500",
      glow: "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-400/30"
    }

    const sizes = {
      sm: "h-8 px-3 text-sm rounded-md",
      default: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-6 text-base",
      xl: "h-14 px-8 text-lg"
    }

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return <button className={classes} ref={ref} {...props} />
  },
)

Button.displayName = "Button"
