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
    <section ref={sectionRef} className="min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Profile Photo */}
        <div className={`relative bg-[#4a4a4a] ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <img
            src="/images/design-mode/wedding-chamber-headshots-2137%281%29.jpg"
            alt="Shawanda Holsey - Founder & Creative Director"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div
          className={`bg-[#f5f1ed] flex items-center justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
        >
          <div className="max-w-xl space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] uppercase text-[#9b8b7e]">Founder & Creative Director</p>
              <h2 className="font-serif text-5xl md:text-6xl text-[#2d2d2d]">Shawanda Holsey</h2>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-[#5a5a5a] leading-relaxed">
              <p>
                With over 15 years of experience in high-profile event planning, Shawanda's career began with ESPN
                Events—curating VIP experiences, sporting events, and luxury celebrations.
              </p>
              <p>
                Lovely Events was born from a desire to create joyful, refined, and deeply personal experiences that
                feel effortless and unforgettable.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="space-y-6 pt-4">
              <div className="relative">
                <span className="text-6xl font-serif text-[#c9b8a8] leading-none">"</span>
                <p className="font-serif italic text-xl md:text-2xl text-[#2d2d2d] leading-relaxed pl-8 -mt-8">
                  Every event tells a story. My passion is bringing that story to life through thoughtful design,
                  seamless execution, and moments that take your breath away.
                </p>
              </div>
              <div className="flex items-center gap-4 pl-8">
                <div className="h-px bg-[#c9b8a8] w-16"></div>
                <p className="text-sm tracking-wider uppercase text-[#9b8b7e]">Shawanda Holsey</p>
              </div>
            </blockquote>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-[#5c4a5a] hover:bg-[#4a3848] text-white px-10 py-6 rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Begin Your Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
  // </CHANGE>
}
