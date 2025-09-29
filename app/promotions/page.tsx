"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Calendar, Gift, Sparkles, Heart } from "lucide-react"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PromotionsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const promotions = [
    {
      id: 1,
      title: "Spring Wedding Package",
      description: "Complete wedding planning with floral arrangements, venue decoration, and coordination services.",
      originalPrice: "$8,500",
      salePrice: "$6,800",
      discount: "20% OFF",
      image: "/elegant-spring-wedding-setup-with-blush-flowers.png",
      features: [
        "Full venue decoration",
        "Bridal bouquet & centerpieces",
        "Day-of coordination",
        "Photography consultation",
      ],
      validUntil: "April 30, 2024",
      isLimited: true,
    },
    {
      id: 2,
      title: "Corporate Gala Experience",
      description: "Professional event planning for corporate galas, award ceremonies, and business celebrations.",
      originalPrice: "$12,000",
      salePrice: "$9,600",
      discount: "20% OFF",
      image: "/sophisticated-corporate-gala-with-elegant-lighting.png",
      features: ["Event design & theming", "Audio/visual coordination", "Catering management", "VIP guest services"],
      validUntil: "May 15, 2024",
      isLimited: false,
    },
    {
      id: 3,
      title: "Intimate Anniversary Celebration",
      description: "Romantic anniversary celebrations designed to create unforgettable memories for couples.",
      originalPrice: "$3,500",
      salePrice: "$2,800",
      discount: "20% OFF",
      image: "/romantic-anniversary-dinner-setup-with-candles.png",
      features: ["Romantic venue styling", "Custom menu planning", "Live music coordination", "Photography session"],
      validUntil: "June 1, 2024",
      isLimited: true,
    },
    {
      id: 4,
      title: "Birthday Milestone Package",
      description: "Celebrate life's special milestones with our comprehensive birthday event planning services.",
      originalPrice: "$4,200",
      salePrice: "$3,360",
      discount: "20% OFF",
      image: "/elegant-birthday-celebration-with-luxury-decor.png",
      features: ["Theme development", "Custom cake design", "Entertainment booking", "Gift coordination"],
      validUntil: "May 31, 2024",
      isLimited: false,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      event: "Wedding",
      rating: 5,
      quote: "Lovely Events made our dream wedding come true. Every detail was perfect!",
      image: "/elegant-bride-testimonial-photo.png",
    },
    {
      name: "David Chen",
      event: "Corporate Gala",
      rating: 5,
      quote: "Professional, seamless execution. Our annual gala was the best we've ever had.",
      image: "/professional-businessman-testimonial.png",
    },
    {
      name: "Maria Rodriguez",
      event: "Anniversary",
      rating: 5,
      quote: "They created the most romantic evening for our 25th anniversary. Absolutely magical!",
      image: "/happy-couple-anniversary-testimonial.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header component for site navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxurious-event-venue-with-elegant-table-settings.png"
            alt="Luxury event venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ba3364]/70 to-[#732b6f]/50"></div>
        </div>
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-white mb-6">Exclusive Event Packages</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover our limited-time offers and seasonal packages designed to make your special moments extraordinary
          </p>
          <Button
            size="lg"
            className="bg-[#ba3364] hover:bg-[#732b6f] text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            <Gift className="mr-2 h-5 w-5" />
            Explore Our Offers
          </Button>
        </div>
      </section>

      {/* Limited Time Banner */}
      <div className="bg-gradient-to-r from-[#ba3364] to-[#732b6f] text-white py-3 px-4 text-center animate-promotions-banner-pulse">
        <div className="flex items-center justify-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="font-medium">Limited Time Only! Spring Promotion - Save 20% on All Packages</span>
          <Sparkles className="h-4 w-4" />
        </div>
      </div>

      {/* Promotional Cards Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-black mb-6">Current Promotions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take advantage of our exclusive offers and create unforgettable memories with our premium event planning
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <Card
                key={promo.id}
                className={`overflow-hidden border-[#ba3364] bg-gradient-to-br from-white to-[#ba3364]/5 animate-promotions-card-hover transition-all duration-700 delay-${(index + 1) * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="relative h-64">
                  <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#ba3364] text-white font-semibold">{promo.discount}</Badge>
                    {promo.isLimited && (
                      <Badge className="bg-[#732b6f] text-white font-semibold ml-2">Limited Time</Badge>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-extralight leading-tight tracking-tight text-gray-800">{promo.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {promo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#ba3364]">{promo.salePrice}</span>
                    <span className="text-lg text-gray-500 line-through">{promo.originalPrice}</span>
                  </div>

                  <ul className="space-y-2">
                    {promo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Heart className="h-4 w-4 text-[#732b6f]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Valid until {promo.validUntil}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-[#ba3364] hover:bg-[#732b6f] text-white font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#f2f2f2]">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from couples and organizations who trusted us with their most important celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-white border-[#ba3364] transition-all duration-700 delay-${(index + 6) * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#ba3364] fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</blockquote>

                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#355a75] to-[#15285c]">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight mb-6 leading-tight tracking-tight text-white mb-6">Ready to Create Magic?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Don't miss out on these exclusive offers. Contact us today to start planning your unforgettable event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#ba3364] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#ba3364] font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer component for consistent site navigation */}
      <Footer />
    </div>
  )
}
