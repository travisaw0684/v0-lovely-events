"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function MeetTheFounder() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/*<h2 className="text-3xl md:text-5xl lg:text-5xl font-extralight mb-6 leading-tight tracking-tight">We Bring Sophisticated Fun To Your Event</h2>*/}
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Photo */}
          <div className={`relative ${isVisible ? "animate-founder-photo" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/design-mode/wedding-chamber-headshots-2137%281%29.jpg"
                alt="Shawanda Holsey - Founder & Creative Director"
                className="relative h-[46rem] w-full max-w-md mx-auto aspect-square object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? "animate-founder-text" : "opacity-0"}`}>
            <div>
              <p className="text-[1rem] text-center text-primary font-semibold">We Bring Sophisticated Fun To Your Event</p>
              <hr className="w-[4rem] h-[.2rem] m-auto rounded-sm md:my-[2rem] bg-gray-800 border-0 dark:bg-gray-700"/>
            </div>
            <div className="!m-[0rem]">
              <h3 className="ext-3xl md:text-2xl lg:text-5xl font-extralight mb-6 leading-tight tracking-tight text-center">Shawanda Holsey</h3>
              <p className="text-xl text-primary font-semibold mb-6 text-center">Founder & Creative Director</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of event planning experience, Shawanda began her journey with ESPN Events,
                coordinating high-profile sporting events, VIP club seating experiences, and luxury celebrations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Her vision evolved into Lovely Events — a company dedicated to creating sophisticated, joyful, and
                unforgettable experiences that reflect each client's unique style and story.
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-card p-6 rounded-xl border-l-4 border-primary">
              <p className="text-card-foreground italic mb-4">
                "Every event tells a story. My passion is bringing that story to life through thoughtful design,
                seamless execution, and moments that take your breath away."
              </p>
              <p className="text-primary font-semibold">— Shawanda Holsey</p>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Let's Plan Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
