"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const heroImages = ["/elegant-wedding-reception-with-beautiful-table-set.png", "/sophisticated-corporate-event-with-modern-decor--a.png", "/luxurious-social-gathering-with-champagne--elegant.png"]

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        className="h-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-6 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-wide text-balance">
            Making Your Events
            <span className="block text-secondary"> Unforgettable</span>
          </h1>
          <p className="font-sans text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed text-pretty">
            Sophisticated event planning services specializing in weddings, corporate events, and social gatherings that
            reflect your unique style and story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105">
              View Our Services
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300 px-8 py-4 text-lg font-medium tracking-wide rounded-md">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
