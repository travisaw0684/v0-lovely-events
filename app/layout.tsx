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
  metadataBase: new URL("https://www.lovelyeventsgroup.com"),
  title: {
    default: "Lovely Events Group | Las Vegas Event Planning",
    template: "%s | Lovely Events Group",
  },
  description:
    "Luxury event planning in Las Vegas for weddings, corporate events, and social celebrations. Thoughtful design, flawless execution, and unforgettable experiences.",
  keywords: [
    "Las Vegas event planner",
    "wedding planner Las Vegas",
    "corporate events Las Vegas",
    "event design",
    "luxury events",
    "social celebrations",
    "Lovely Events Group",
  ],
  openGraph: {
    title: "Lovely Events Group | Las Vegas Event Planning",
    description:
      "Luxury event planning in Las Vegas for weddings, corporate events, and social celebrations. Thoughtful design, flawless execution, and unforgettable experiences.",
    type: "website",
    siteName: "Lovely Events Group",
    locale: "en_US",
    images: [
      {
        url: "/elegant-event-celebration-couple-smiling.jpg",
        alt: "Lovely Events Group celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovely Events Group | Las Vegas Event Planning",
    description:
      "Luxury event planning in Las Vegas for weddings, corporate events, and social celebrations. Thoughtful design, flawless execution, and unforgettable experiences.",
    images: ["/elegant-event-celebration-couple-smiling.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
