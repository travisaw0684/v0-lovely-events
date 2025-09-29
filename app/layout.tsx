import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Lovely Events - Making Your Events Unforgettable",
  description:
    "Sophisticated event planning services specializing in weddings, corporate events, and social gatherings. Creating extraordinary events that reflect your style and story.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  )
}
