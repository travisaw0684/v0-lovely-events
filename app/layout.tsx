import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200","300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "MAXIMUS - Outdoor Advertising",
  description:
    "We create positive change in communities and the planet through innovative outdoor advertising solutions.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
