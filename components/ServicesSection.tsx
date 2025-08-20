"use client"

import { Heart, Building2, PartyPopper, Sparkles, ArrowLeft } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Elegant, romantic, and unforgettable.",
    backgroundImage:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a85766fa89c7435c9e0eb58ea39c0f27/1/4SoifmQpDrHbZJ6VydP9v/Lower%20Img%203.jpg?dpr=2",
    details:
      "From intimate ceremonies to grand celebrations, we craft wedding experiences that capture your unique love story. Our comprehensive planning includes venue selection, floral design, catering coordination, and every detail that makes your day perfect.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional, seamless, and impactful.",
    backgroundImage: "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
    details:
      "Elevate your business gatherings with our corporate event expertise. We handle conferences, product launches, team building events, and executive retreats with precision, ensuring your brand message resonates with attendees.",
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, or intimate gatherings.",
    backgroundImage:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/c30f5c7422ad4373901fb774b5b3dc30/1/4SoifmQpDrHbZJ6VydP9v/N40A3568.jpg?dpr=2",
    details:
      "Celebrate life's special moments with personalized private events. Whether it's a milestone birthday, anniversary celebration, or family reunion, we create memorable experiences tailored to your vision and guest list.",
  },
  {
    icon: Sparkles,
    title: "Custom Experiences",
    description: "Tailored events designed around you.",
    backgroundImage:
      "https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/a5bc5affca554299970bfca541f4f981/1/4SoifmQpDrHbZJ6VydP9v/487198351_1096867512482796_1914278992221601588_n.jpg?dpr=2",
    details:
      "Dream beyond traditional events with our custom experience design. From unique themed parties to one-of-a-kind celebrations, we bring your most creative visions to life with innovative planning and execution.",
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const handleBackToCards = () => {
    setSelectedService(null)
  }

  const handleServiceClick = (index: number) => {
    setSelectedService(index)
  }

  if (selectedService !== null) {
    const service = services[selectedService]
    const IconComponent = service.icon

    return (
      <section className="py-20 px-4" style={{ backgroundColor: "#ba3364" }}>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToCards}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Services</span>
          </button>

          {/* Service Detail */}
          <div className="bg-card rounded-3xl p-12 border border-border">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <IconComponent className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-4xl font-bold text-card-foreground mb-4">{service.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
            </div>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-muted-foreground leading-relaxed text-lg">{service.details}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#ba3364" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating extraordinary events that reflect your style and story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                onClick={() => handleServiceClick(index)}
                className="group bg-card rounded-2xl overflow-hidden text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative"
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 rounded-2xl"></div>

                {/* Content over background */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
