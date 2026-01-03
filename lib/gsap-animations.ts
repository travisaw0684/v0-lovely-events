import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (element: HTMLElement | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      ...options,
    },
  )
}

export const fadeIn = (element: HTMLElement | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      ...options,
    },
  )
}

export const scaleIn = (element: HTMLElement | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.2)",
      ...options,
    },
  )
}

export const slideInFromLeft = (element: HTMLElement | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      ...options,
    },
  )
}

export const slideInFromRight = (element: HTMLElement | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      ...options,
    },
  )
}

export const staggerFadeInUp = (elements: HTMLElement[] | string, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      ...options,
    },
  )
}

export const createScrollTriggerAnimation = (
  element: HTMLElement | string,
  animation: gsap.core.Tween,
  options?: ScrollTrigger.Vars,
) => {
  return ScrollTrigger.create({
    trigger: element,
    start: "top 80%",
    ...options,
    animation,
  })
}

export const parallaxEffect = (element: HTMLElement | string, speed = 0.5) => {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}
