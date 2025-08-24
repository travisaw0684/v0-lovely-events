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
            A History of Satisfaction
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Our clients choose us for a reason—because we deliver.
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            At Lovely Events Group, we’re committed to making your planning experience smooth, stress-free, and unforgettable. From the initial consultation to the final send-off, we guide you through every detail with clarity, care, and professionalism. Whether it’s managing logistics or coordinating day-of execution, we ensure your event flows seamlessly, so you can enjoy every moment.
          </p>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            If you’re looking for a trusted event planner in Las Vegas, you’re in the right place.
          </p>
          <button className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
