"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Grand Ballroom",
    caption: "Opulent ballroom featuring crystal chandeliers and marble accents",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Garden Terrace",
    caption: "Enchanting garden terrace perfect for intimate celebrations",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Executive Lounge",
    caption: "Contemporary executive space for distinguished gatherings",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Skyline Terrace",
    caption: "Breathtaking rooftop venue with panoramic city views",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Private Wine Cellar",
    caption: "Exclusive wine cellar for sophisticated tastings and dinners",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Oceanfront Pavilion",
    caption: "Stunning oceanfront pavilion for unforgettable celebrations",
  },
]

export default function LuxuryEventsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expertly crafted venues with high-quality design, our luxury spaces are modern heirloom locations that fit
            perfectly for any occasion. Elevate your event with our versatile and stunning venues.
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-foreground">You deserve this.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="group cursor-pointer" onClick={() => setSelectedImage(image.id)}>
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium text-foreground mb-1">{image.alt}</h3>
                  <p className="text-sm text-muted-foreground">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to create your extraordinary event?</p>
          <button className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 rounded-md font-medium transition-colors duration-300">
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Modal remains the same for functionality */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground hover:text-accent z-10 bg-background/80 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {galleryImages.find((img) => img.id === selectedImage) && (
              <div>
                <Image
                  src={galleryImages.find((img) => img.id === selectedImage)!.src || "/placeholder.svg"}
                  alt={galleryImages.find((img) => img.id === selectedImage)!.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {galleryImages.find((img) => img.id === selectedImage)!.alt}
                  </h3>
                  <p className="text-muted-foreground">
                    {galleryImages.find((img) => img.id === selectedImage)!.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
