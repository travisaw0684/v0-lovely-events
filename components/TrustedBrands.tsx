"use client"

import { useEffect, useRef, useState } from "react"

const TrustedBrands = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const brands = [
    {
      name: "Microsoft",
      logo: "/microsoft-logo.png",
    },
    {
      name: "Google",
      logo: "/google-logo.png",
    },
    {
      name: "Apple",
      logo: "/apple-logo.png",
    },
    {
      name: "Amazon",
      logo: "/amazon-logo.png",
    },
    {
      name: "Netflix",
      logo: "/netflix-inspired-logo.png",
    },
    {
      name: "Tesla",
      logo: "/tesla-logo.png",
    },
    {
      name: "Spotify",
      logo: "/spotify-logo.png",
    },
    {
      name: "Airbnb",
      logo: "/airbnb-logo-inspired-abstract.png",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--brands-background)",
        color: "var(--brands-foreground)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-brands-fade-in" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--brands-primary)" }}>
            Trusted By Leading Brands
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--brands-muted)" }}>
            We've had the privilege of creating extraordinary events for some of the world's most respected companies
          </p>
        </div>

        {/* Logo Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center ${isVisible ? "animate-brands-fade-in" : "opacity-0"}`}
        >
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--brands-card)",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                className="brands-logo w-full h-16 object-contain mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className={`text-center mt-12 ${isVisible ? "animate-brands-fade-in" : "opacity-0"}`}>
          <p className="text-base" style={{ color: "var(--brands-muted)" }}>
            Join the companies that trust us to deliver exceptional experiences
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustedBrands
