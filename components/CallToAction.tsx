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
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <img
                src="/images/design-mode/fulllogo_transparent_nobuffer%281%29.png"
                alt="Lovely Events Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center lg:text-left space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              Make Your Event
              <br />
              Unforgettable
            </h2>

            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              Transform your special moments with our sophisticated event planning services. From intimate weddings to
              grand corporate celebrations, we bring your vision to life with unmatched attention to detail and luxury.
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                asChild
                className="bg-[#4a2c3e] hover:bg-[#5a3c4e] text-white px-12 py-6 text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105 uppercase tracking-widest"
              >
                <Link href="/contact">Begin Your Experience</Link>
              </Button>

              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Link
                  href="/services"
                  className="font-serif text-white/90 italic text-lg hover:text-white transition-colors duration-300"
                >
                  Or explore our services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
