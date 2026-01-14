"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    event: "Wedding Reception",
    text: "Lovely Events transformed our wedding into a fairy tale. Every detail was perfect, from the elegant table settings to the stunning lighting. Our guests are still talking about it months later!",
    rating: 5,
    image: "/elegant-blonde-woman-smile.png",
  },
  {
    name: "Michael Chen",
    event: "Corporate Gala",
    text: "Professional, reliable, and absolutely stunning results. The team at Lovely Events exceeded our expectations for our annual company gala. The attention to detail was impeccable.",
    rating: 5,
    image: "/professional-businessman-in-suit-smiling.png",
  },
  {
    name: "Emily Rodriguez",
    event: "Birthday Celebration",
    text: "They made my 30th birthday celebration unforgettable. The attention to detail and personalized touches made it feel truly special. I couldn't have asked for a better experience!",
    rating: 5,
    image: "/happy-woman-with-dark-hair-celebrating.png",
  },
  {
    name: "David Thompson",
    event: "Anniversary Party",
    text: "Our 25th anniversary party was absolutely magical. Lovely Events captured our love story perfectly and created an evening we'll treasure forever. Highly recommend!",
    rating: 5,
    image: "/mature-gentleman-with-gray-hair-smiling.png",
  },
  {
    name: "Jessica Park",
    event: "Product Launch",
    text: "The product launch event was flawless. Every element was perfectly coordinated, from the venue setup to the catering. Our clients were thoroughly impressed.",
    rating: 5,
    image: "/professional-woman-black-hair.png",
  },
]

export default function TestimonialsSection() {
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

    const element = document.getElementById("testimonials-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial = testimonials[currentTestimonial]

  return (
    <section id="testimonials-section" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8] via-[#EDE7DC] to-[#E8E0D0]" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-primary/60 mb-4">Client Experiences</p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-6 text-balance">
            Treasured Moments
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stories from those who trusted us with their most important celebrations
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-0 mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Left side - Image */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Right side - Content */}
          <div className="bg-white/80 backdrop-blur-sm p-12 md:p-16 flex flex-col justify-center">
            {/* Star Rating */}
            <div className="flex gap-1 mb-8">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary/80 text-primary/80" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic font-light">
              "{testimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="border-t border-primary/20 pt-6">
              <cite className="font-serif text-xl font-medium text-foreground not-italic block mb-1">
                {testimonial.name}
              </cite>
              <p className="font-sans text-sm tracking-wider uppercase text-muted-foreground">{testimonial.event}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-12">
          <button
            onClick={prevTestimonial}
            className="group relative p-4 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary/20" />
            <ChevronLeft className="relative w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentTestimonial ? "w-12 h-3 bg-primary" : "w-3 h-3 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="group relative p-4 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary/20" />
            <ChevronRight className="relative w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  )
}
