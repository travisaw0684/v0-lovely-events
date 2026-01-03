"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { fadeInUp } from "@/lib/gsap-animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    fadeInUp(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      delay,
    })
  }, [delay])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
