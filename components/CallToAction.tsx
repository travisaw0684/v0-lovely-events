"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const testimonials = [
  {
    name: "Sarah Johnson",
    event: "Wedding Reception",
    text: "Lovely Events transformed our wedding into a fairy tale. Every detail was perfect, from the elegant table settings to the stunning lighting. Our guests are still talking about it!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    event: "Corporate Gala",
    text: "Professional, reliable, and absolutely stunning results. The team at Lovely Events exceeded our expectations for our annual company gala. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    event: "Birthday Celebration",
    text: "They made my 30th birthday celebration unforgettable. The attention to detail and personalized touches made it feel truly special. Thank you, Lovely Events!",
    rating: 5,
  },
]

export default function CallToAction() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[currentTestimonial]

  return (
    <section
      id="cta-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/elegant-event-setup-with-beautiful-table-settings-.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-3xl"></div>
              <img
                src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
                alt="Lovely Events Logo"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8 animate-in slide-in-from-right duration-1000">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight drop-shadow-lg">
              Make Your Event
              <br />
              Unforgettable
            </h2>

            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl drop-shadow-md">
              Transform your special moments with our sophisticated event planning services. From intimate weddings to
              grand corporate celebrations, we bring your vision to life with unmatched attention to detail and luxury.
            </p>

            <div className="space-y-6 pt-4">
              <Button
                size="lg"
                asChild
                className="bg-[#4a2c3e] hover:bg-[#5a3c4e] text-white px-14 py-7 text-base font-medium rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#4a2c3e]/50 uppercase tracking-[0.2em] border-2 border-[#d4af37]/30"
              >
                <Link href="/contact">Begin Your Experience</Link>
              </Button>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Link
                  href="/services"
                  className="font-serif text-white italic text-xl hover:text-[#d4af37] transition-colors duration-300 drop-shadow-md hover:drop-shadow-lg group"
                >
                  Or explore our services{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
