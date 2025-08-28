"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

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
    <section id="testimonials-section" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their unforgettable experiences.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Card className="bg-card border-0 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote className="w-12 h-12 text-secondary mx-auto" />
                </div>

                {/* Client Photo */}
                <div className="mb-8">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-secondary/20"
                  />
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-sans text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <cite className="font-serif text-xl font-semibold text-foreground not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="font-sans text-muted-foreground mt-1">{testimonial.event}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-secondary scale-110" : "bg-muted hover:bg-secondary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
