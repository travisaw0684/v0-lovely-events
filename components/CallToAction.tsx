"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

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
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left ${isVisible ? "animate-cta-fade-in" : "opacity-0"}`}>
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2">Lovely Events</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto lg:mx-0"></div>
            </div>
          </div>

          <div className={`text-center lg:text-left ${isVisible ? "animate-cta-fade-in" : "opacity-0"} delay-300`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Make Your Event Unforgettable</h2>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your special moments with our premium event rental services. From elegant table settings to
              stunning décor, we bring your vision to life with unmatched attention to detail and luxury.
            </p>

            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg animate-cta-button-pulse mb-12"
              style={{
                backgroundColor: "var(--cta-primary)",
                color: "var(--cta-primary-foreground)",
              }}
            >
              Explore Rentals
            </Button>

            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-indigo-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="text-right">
                  <cite className="text-gray-900 font-semibold not-italic">— {testimonial.name}</cite>
                  <p className="text-gray-600 text-sm">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
