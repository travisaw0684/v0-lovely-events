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
      name: "Disney On The Yard",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/cdfcabce680448478ba5effbfab5208d/1/4SoifmQpDrHbZJ6VuBkdz/DOTY_Horizontal_Color_Feb22.png",
    },
    {
      name: "ESPN",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/e1b36846fdbd4e77a36f606e6ffaf023/1/4SoifmQpDrHbZJ6VuBkdz/ESPN-logo.png",
    },
    {
      name: "Coca Cola",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/af84549ffb9d458d9a5e47aae660eda2/1/4SoifmQpDrHbZJ6VuBkdz/Red%20Disc-01.png",
    },
    {
      name: "Clark County Nevada",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a40421a820c1465fa6608df926e13eb8/1/4SoifmQpDrHbZJ6VuBkdz/County%20Clerk%20Logo.gif",
    },
    {
      name: "Bridal Spectacular Wedding EXPO",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/adf427c23d1d4af1923fe801a6cd37fb/1/4SoifmQpDrHbZJ6VuBkdz/BridalSpecLOGO-Primary-01.png",
    },
    {
      name: "Aclipse",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/efdd64b817194bf0b575ff576eb35845/1/4SoifmQpDrHbZJ6VuBkdz/Aclipse-logo-_Converted_.png",
    },
    {
      name: "CSE Graphics",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/f9c140bd62ed4dfeb1a3c613f0cf3532/1/4SoifmQpDrHbZJ6VuBkdz/CSEGraphics-01.png",
    },
    {
      name: "Galpao Gaucho",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a40d8dbc4a2647278736f4de18ccd8f5/1/4SoifmQpDrHbZJ6VuBkdz/GG%20Logo.png",
    },
    {
      name: "Adamses",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/ca22629c327147229ae7edc9fdce0766/1/4SoifmQpDrHbZJ6VuBkdz/Logo.jpg",
    },
    {
      name: "Cricket Celebration Bowl",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/f64efc06fca5448fbcd42b74b1d25b9a/1/4SoifmQpDrHbZJ6VuBkdz/Client%202.jpg",
    },
    {
      name: "MEAC",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/d55e0c9c268f43afaa7a7cff126bb409/1/4SoifmQpDrHbZJ6VuBkdz/Client%203.jpg",
    },
    {
      name: "SWAC",
      logo: "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/f4757ce26b604a89acc2fc5afc7e88b1/1/4SoifmQpDrHbZJ6VuBkdz/Artboard%2016.jpg",
    },
  ]

  const duplicatedBrands = [...brands, ...brands]

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

        <div className="overflow-hidden">
          <div
            className={`flex animate-brands-carousel ${isVisible ? "animate-brands-fade-in" : "opacity-0"}`}
            style={{ width: `${duplicatedBrands.length * 200}px` }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="group p-6 rounded-lg transition-all duration-300 hover:shadow-lg flex-shrink-0"
                style={{
                  backgroundColor: "var(--brands-card)",
                  width: "200px",
                  marginRight: "2rem",
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
