"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGsap() {
  return { gsap, ScrollTrigger }
}

export function useGsapFadeIn(options?: {
  delay?: number
  duration?: number
  y?: number
}) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: options?.y || 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration || 1,
        delay: options?.delay || 0,
        ease: "power3.out",
      },
    )
  }, [options?.delay, options?.duration, options?.y])

  return elementRef
}

export function useGsapScrollTrigger(callback: (element: HTMLElement) => void, deps: unknown[] = []) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    callback(elementRef.current)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, deps)

  return elementRef
}
