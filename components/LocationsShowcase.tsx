"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const locations = [
  {
    id: 1,
    city: "London",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "The heart of UK advertising, where creativity meets opportunity.",
    stats: "500+ premium locations",
  },
  {
    id: 2,
    city: "Birmingham",
    image:
      "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Dynamic urban landscape with unmatched audience engagement.",
    stats: "200+ strategic sites",
  },
  {
    id: 3,
    city: "Manchester",
    image:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Where innovation thrives and brands make lasting impressions.",
    stats: "150+ high-impact locations",
  },
  {
    id: 4,
    city: "Glasgow",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Scotland's creative hub with exceptional brand visibility.",
    stats: "120+ premium positions",
  },
  {
    id: 5,
    city: "Leeds",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Northern powerhouse delivering outstanding campaign results.",
    stats: "100+ strategic locations",
  },
  {
    id: 6,
    city: "Liverpool",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    quote: "Historic charm meets modern advertising excellence.",
    stats: "80+ key positions",
  },
]

function LocationCard({ location, index }: { location: (typeof locations)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-80">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={`${location.city} cityscape`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
        <p className="text-sm text-gray-200 mb-2">{location.stats}</p>
        <p className="text-gray-100 mb-4 leading-relaxed">{location.quote}</p>
        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2 text-sm font-semibold">
          Explore {location.city}
        </button>
      </div>
    </div>
  )
}

export default function LocationsShowcase() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium outdoor advertising opportunities across the UK's most vibrant cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
