"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

const heroImages = [
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
]

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
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-6xl px-6 pl-12 md:pl-16 lg:pl-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
            MAX
            <br />
            PLAN
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-4xl">
            We create positive change in communities and the planet.
          </p>
          <div className="justify-center flex flex-col sm:flex-row gap-4 animate-slide-up">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold tracking-wide">
              LOCATIONS <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold tracking-wide">
              LANDLORDS <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
