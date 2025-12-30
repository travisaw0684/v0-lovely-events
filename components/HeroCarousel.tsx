"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    video: "https://videos.pexels.com/video-files/3994847/3994847-uhd_2560_1440_24fps.mp4",
    alt: "Las Vegas Strip at night with neon lights",
  },
  {
    id: 2,
    video: "https://videos.pexels.com/video-files/8776110/8776110-uhd_2560_1440_25fps.mp4",
    alt: "Las Vegas cityscape with casino lights",
  },
  {
    id: 3,
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5396971-hd_1920_1080_30fps-b4nrnBthWWabKzc5aHPINogTZnqbVz.mp4",
    alt: "Las Vegas boulevard traffic and billboards",
  },
  {
    id: 4,
    video: "https://videos.pexels.com/video-files/7509495/7509495-hd_1920_1080_25fps.mp4",
    alt: "Las Vegas cityscape with casino lights",
  },
  {
    id: 5,
    video: "https://videos.pexels.com/video-files/855677/855677-hd_1920_1080_30fps.mp4",
    alt: "Las Vegas cityscape with casino lights",
  },
  {
    id: 6,
    video: "https://videos.pexels.com/video-files/6396120/6396120-hd_1080_1920_25fps.mp4",
    alt: "test",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setShowContent(false)
    const revealTimer = setTimeout(() => {
      setShowContent(true)
    }, 150) // 150ms delay after video is visible
    return () => clearTimeout(revealTimer)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label={slide.alt}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className={`text-center text-white max-w-6xl px-6 pl-12 md:pl-16 lg:pl-20 transition-all duration-[350ms] ease-out ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-thin mb-6 leading-tight tracking-tight">
            LOVELY EVENTS GROUP
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-20 font-light max-w-4xl">
            Setting the stage for lasting memories
          </p>
          <div className="justify-center flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-150 px-8 py-4 text-lg font-semibold tracking-wide"
            >
              Let's Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-150 px-8 py-4 text-lg font-semibold tracking-wide"
            >
              Free Consultation <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows 
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-12 w-12" />
      </button> */}

      {/* Slide Indicators 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>*/}
    </section>
  )
}
