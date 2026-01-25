"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const locations = [
  {
    id: 1,
    city: "Event Planning",
    image: "https://images.pexels.com/photos/733852/pexels-photo-733852.jpeg",
    quote: "Turning Your Vision Into Lasting Impressions.",
    stats: "",
  },
  {
    id: 2,
    city: "Sporting Event Planning",
    image:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/c30f5c7422ad4373901fb774b5b3dc30/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS/N40A3568.jpg",
    quote: "From Kickoff to Celebration — We've Got You Covered.",
    stats: "",
  },
  {
    id: 3,
    city: "Balloon Decor",
    image:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/ec404a18b107437fb80c21664fd712a6/1/4SoifmQp45JMgBnHiDiv8/20230509_143624.jpg",
    quote: "Adding Color, Style, and Fun to Every Celebration.",
    stats: "",
  },
  {
    id: 4,
    city: "Business Event Planning",
    image: "https://images.pexels.com/photos/7648472/pexels-photo-7648472.jpeg",
    quote: "Your Vision. Our Expertise. One Unforgettable Event.",
    stats: "",
  },
  {
    id: 5,
    city: "Wedding Events",
    image: "https://images.pexels.com/photos/6405800/pexels-photo-6405800.jpeg",
    quote: "Turning 'I Do' Into a Dream Come True.",
    stats: "",
  },
  {
    id: 6,
    city: "Employee Recognition Dinners",
    image: "https://images.pexels.com/photos/6405800/pexels-photo-6405800.jpeg",
    quote: "Historic charm meets modern advertising excellence.",
    stats: "",
  },
]

function LocationCard({ location, index }: { location: (typeof locations)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_rgba(186,51,100,0.4)] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-bl-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-96">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={`${location.city} cityscape`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#d4af37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h3 className="font-serif text-3xl font-bold mb-3 text-white drop-shadow-lg group-hover:text-[#d4af37] transition-colors duration-300">
          {location.city}
        </h3>
        <p className="text-sm text-gray-300 mb-3 tracking-wide uppercase font-light">{location.stats}</p>
        <p className="text-gray-100 mb-6 leading-relaxed text-lg font-light italic drop-shadow-md">{location.quote}</p>
        <button className="bg-transparent border-2 border-white/80 text-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)] hover:scale-105">
          Explore {location.city}
        </button>
      </div>
    </div>
  )
}

export default function LocationsShowcase() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section
      id="locations"
      className="relative py-24 bg-gradient-to-br from-[#ba3364] via-[#8d2d5e] to-[#732b6f] overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-[#d4af37] uppercase tracking-[0.3em] text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-white drop-shadow-lg">
            Versatile Service
          </h2>
          <h4 className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            We design events that reflect your vision—seamlessly and beautifully.
          </h4>
          <div className="max-w-4xl mx-auto space-y-4 text-white/80 text-base leading-relaxed">
            <p>
              From corporate functions and sporting events to weddings, anniversary parties, and milestone celebrations,
              Lovely Events Group offers full-service planning with flexibility and endless customization. Our team
              handles every detail, from concept to execution, so you and your guests can simply show up and enjoy.
            </p>
            <p className="font-semibold text-white/90">
              Let us take the stress out of planning. Connect with us today to explore how we can bring your next event
              to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
