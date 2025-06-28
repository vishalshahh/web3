import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Web3 Platform - Build the Future",
  description: "A comprehensive Web3 platform for developers, creators, and innovators",
  keywords: "Web3, blockchain, DeFi, NFT, cryptocurrency, decentralized, smart contracts",
  authors: [{ name: "Web3 Platform Team" }],
  openGraph: {
    title: "Web3 Platform - Build the Future",
    description: "A comprehensive Web3 platform for developers, creators, and innovators",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
