"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function MissionStatement() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* City view background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/placeholder.svg?height=1080&width=1920&query=modern+city+skyline+at+dusk+Las+Vegas+strip+aerial+view)`,
        }}
      />

      {/* Gradient overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-slate-900/90 to-[#832854]/80" />

      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#C4A574]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#832854]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-white drop-shadow-2xl">
            A History of <span className="text-[#C4A574] italic">Satisfaction</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C4A574] to-transparent mx-auto mb-8" />

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light drop-shadow-lg">
            Our clients choose us for a reason—because we deliver.
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            At Lovely Events Group, we're committed to making your planning experience smooth, stress-free, and
            unforgettable. From the initial consultation to the final send-off, we guide you through every detail with
            clarity, care, and professionalism. Whether it's managing logistics or coordinating day-of execution, we
            ensure your event flows seamlessly, so you can enjoy every moment.
          </p>

          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed drop-shadow-md">
            If you're looking for a trusted event planner in Las Vegas, you're in the right place.
          </p>

          <button className="bg-[#832854] text-white hover:bg-[#C4A574] hover:text-gray-900 transition-all duration-500 px-10 py-5 text-lg font-semibold rounded-full uppercase tracking-wider shadow-2xl hover:shadow-[#C4A574]/50 hover:scale-105 border border-[#C4A574]/30">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
