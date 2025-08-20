"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const locations = [
  {
    id: 1,
    city: "Event Planning",
    image:
      "https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg",
    quote: "Turning Your Vision Into Lasting Impressions.",
    stats: "????????????",
  },
  {
    id: 2,
    city: "Sporting Event Planning",
    image:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/c30f5c7422ad4373901fb774b5b3dc30/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/N40A3568.jpg",
    quote: "From Kickoff to Celebration — We’ve Got You Covered.",
    stats: "????????????",
  },
  {
    id: 3,
    city: "Balloon Decor",
    image:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/ec404a18b107437fb80c21664fd712a6/1/4SoifmQp45JMgBnHiDiv8/20230509_143624.jpg",
    quote: "Adding Color, Style, and Fun to Every Celebration.",
    stats: "????????????",
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Versatile Service</h2>
          <h4 className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design events that reflect your vision—seamlessly and beautifully.
          </h4>
          <p>
            From corporate functions and sporting events to weddings, anniversary parties, and milestone celebrations, Lovely Events Group offers full-service planning with flexibility and endless customization. Our team handles every detail, from concept to execution, so you and your guests can simply show up and enjoy.
          </p>
          <p>
            Let us take the stress out of planning. Connect with us today to explore how we can bring your next event to life.
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
