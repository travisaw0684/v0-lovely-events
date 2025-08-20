"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function MissionStatement() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We are passionate about creating positive change in communities and the planet
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Through innovative outdoor advertising solutions, we connect brands with audiences while contributing to
            sustainable urban development and community growth. Our commitment extends beyond advertising to making a
            meaningful impact on the world around us.
          </p>
          <button className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
