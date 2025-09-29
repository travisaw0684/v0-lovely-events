"use client"

import { useState } from "react"
import Image from "next/image"
import "../styles/Card.css";

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

            <div className="card">
              <img src={image.src} atl={image.alt} />
              <div className="content">
                <h2></h2>
                <h3></h3>
                <p></p>
                <div>
                  {galleryImages.map(social => (
                    <button
                      key={social.atl}
                      onClick={() => onSocialClick(social.atl)}
                    >
                      <i className={`fa-brands fa-${social.atl}`}></i>
                    </button>
                  ))}
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

     
    </section>
  )
}
