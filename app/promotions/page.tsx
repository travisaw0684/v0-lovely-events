"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Calendar, Gift, Sparkles, Heart, ArrowRight } from "lucide-react"
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

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Decorative blur elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ba3364] rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#732b6f] rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="absolute inset-0">
          <Image
            src="/luxurious-event-venue-with-elegant-table-settings.png"
            alt="Luxury event venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#ba3364]/80 via-[#732b6f]/70 to-[#355a75]/60"></div>
        </div>
        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/40 text-lg px-6 py-2 animate-bounce">
            <Sparkles className="mr-2 h-5 w-5" />
            Limited Time Offers
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-6 leading-tight text-white drop-shadow-2xl">
            Exclusive Event Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed font-light drop-shadow-lg">
            Discover our limited-time offers and seasonal packages designed to make your special moments extraordinary
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[#ba3364] font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-110 shadow-2xl rounded-full group"
          >
            <Gift className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Explore Our Offers
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <div className="relative bg-gradient-to-r from-[#ba3364] via-[#732b6f] to-[#ba3364] text-white py-4 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="relative flex items-center justify-center gap-3">
          <Clock className="h-5 w-5 animate-pulse" />
          <span className="font-semibold text-lg">Limited Time Only! Spring Promotion - Save 20% on All Packages</span>
          <Sparkles className="h-5 w-5 animate-pulse" />
        </div>
      </div>

      <section className="relative py-24 px-6 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#732b6f] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#ba3364] rounded-full blur-3xl opacity-10"></div>

        <div className="relative max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge className="mb-4 bg-[#ba3364]/10 text-[#ba3364] border-[#ba3364]/30 text-sm px-4 py-2">
              SPECIAL OFFERS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight text-gray-900">
              Current Promotions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take advantage of our exclusive offers and create unforgettable memories with our premium event planning
              services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {promotions.map((promo, index) => (
              <Card
                key={promo.id}
                className={`group overflow-hidden border-2 border-[#ba3364]/20 hover:border-[#ba3364] bg-white hover:shadow-2xl hover:shadow-[#ba3364]/20 transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={promo.image || "/placeholder.svg"}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-[#ba3364] text-white font-semibold text-sm px-4 py-2 shadow-lg">
                      {promo.discount}
                    </Badge>
                    {promo.isLimited && (
                      <Badge className="bg-[#732b6f] text-white font-semibold text-sm px-4 py-2 shadow-lg animate-pulse">
                        Limited Time
                      </Badge>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="h-8 w-8 text-white drop-shadow-lg animate-pulse" />
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl font-serif italic text-gray-900 group-hover:text-[#ba3364] transition-colors duration-300">
                    {promo.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed mt-2">
                    {promo.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  <div className="flex items-baseline gap-4 p-4 bg-gradient-to-r from-[#ba3364]/5 to-[#732b6f]/5 rounded-lg">
                    <span className="text-4xl font-bold text-[#ba3364]">{promo.salePrice}</span>
                    <span className="text-xl text-gray-400 line-through">{promo.originalPrice}</span>
                    <span className="ml-auto text-sm font-semibold text-[#732b6f] bg-[#732b6f]/10 px-3 py-1 rounded-full">
                      SAVE {promo.discount}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {promo.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <Heart className="h-5 w-5 text-[#ba3364] fill-current flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-gray-200">
                    <Calendar className="h-4 w-4 text-[#732b6f]" />
                    <span>
                      Valid until <span className="font-semibold text-[#732b6f]">{promo.validUntil}</span>
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-2">
                  <Button className="w-full bg-gradient-to-r from-[#ba3364] to-[#732b6f] hover:from-[#732b6f] hover:to-[#ba3364] text-white font-semibold py-6 text-lg transition-all duration-300 hover:shadow-xl group/btn rounded-full">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-50 to-stone-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ba3364] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#732b6f] rounded-full blur-3xl opacity-10"></div>

        <div className="relative max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Badge className="mb-4 bg-[#ba3364]/10 text-[#ba3364] border-[#ba3364]/30 text-sm px-4 py-2">
              TESTIMONIALS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from couples and organizations who trusted us with their most important celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`group bg-white border-2 border-[#ba3364]/10 hover:border-[#ba3364] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 6) * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full border-4 border-[#ba3364]/20 group-hover:border-[#ba3364] transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#ba3364] rounded-full p-2 shadow-lg">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div className="flex justify-center mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#ba3364] fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-lg font-light">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm text-[#ba3364] font-medium mt-1">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gradient-to-br from-[#355a75] via-[#732b6f] to-[#15285c] overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ba3364] rounded-full blur-3xl opacity-10"></div>

        <div
          className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight text-white drop-shadow-lg">
            Ready to Create Magic?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light">
            Don't miss out on these exclusive offers. Contact us today to start planning your unforgettable event.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#ba3364] font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-110 shadow-2xl rounded-full group"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-[#ba3364] font-semibold px-10 py-6 text-lg transition-all duration-300 hover:scale-110 bg-transparent rounded-full group"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer component for consistent site navigation */}
      <Footer />
    </div>
  )
}
