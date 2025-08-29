import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Palette, Heart, Star, Sparkles, Gift, Camera } from "lucide-react"

export default function BalloonDecorPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--balloon-background)", color: "var(--balloon-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/placeholder.svg?height=1080&width=1920&text=Elegant+Balloon+Installation+at+Luxury+Event')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.6)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-balloon-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance animate-balloon-float">
            Balloon Artistry & Decor
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Transform your events with sophisticated balloon installations that blend creativity with luxury
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--balloon-secondary)",
              color: "var(--balloon-secondary-foreground)",
            }}
          >
            Explore Our Artistry
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-balloon-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--balloon-primary)" }}>
              Elevated Balloon Experiences
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate celebrations to grand corporate events, our balloon artistry creates unforgettable
              atmospheres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Wedding Celebrations",
                description:
                  "Romantic balloon arches, ceiling installations, and aisle decorations that create magical moments for your special day.",
              },
              {
                icon: Star,
                title: "Corporate Events",
                description:
                  "Professional balloon displays featuring company colors and branding for conferences, product launches, and celebrations.",
              },
              {
                icon: Gift,
                title: "Birthday Parties",
                description:
                  "Custom balloon sculptures, themed installations, and interactive balloon experiences for memorable birthday celebrations.",
              },
              {
                icon: Sparkles,
                title: "Grand Openings",
                description:
                  "Eye-catching balloon releases, entrance arches, and promotional displays that draw attention and create excitement.",
              },
              {
                icon: Palette,
                title: "Custom Installations",
                description:
                  "Bespoke balloon artistry tailored to your vision, including organic arrangements and sculptural pieces.",
              },
              {
                icon: Camera,
                title: "Photo Backdrops",
                description:
                  "Instagram-worthy balloon walls and interactive photo opportunities that guests will love to share.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-balloon-card-hover cursor-pointer"
                style={{
                  backgroundColor: "var(--balloon-card)",
                  border: "1px solid var(--balloon-border)",
                }}
              >
                <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--balloon-primary)" }} />
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--balloon-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--balloon-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-balloon-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--balloon-primary)" }}>
              Our Balloon Artistry
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Discover the beauty and creativity of our balloon installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/placeholder.svg?height=400&width=600&text=Elegant+Wedding+Balloon+Arch",
                title: "Wedding Balloon Arch",
                description: "Romantic organic arch in blush and gold tones",
              },
              {
                image: "/placeholder.svg?height=400&width=600&text=Corporate+Balloon+Installation",
                title: "Corporate Installation",
                description: "Professional branded balloon display",
              },
              {
                image: "/placeholder.svg?height=400&width=600&text=Birthday+Balloon+Sculpture",
                title: "Birthday Sculpture",
                description: "Custom balloon sculpture for milestone celebration",
              },
              {
                image: "/placeholder.svg?height=400&width=600&text=Grand+Opening+Balloon+Release",
                title: "Grand Opening Display",
                description: "Spectacular balloon release and entrance decor",
              },
              {
                image: "/placeholder.svg?height=400&width=600&text=Photo+Backdrop+Balloons",
                title: "Photo Backdrop",
                description: "Instagram-worthy balloon wall installation",
              },
              {
                image: "/placeholder.svg?height=400&width=600&text=Ceiling+Balloon+Installation",
                title: "Ceiling Installation",
                description: "Floating balloon clouds creating magical atmosphere",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden animate-balloon-card-hover cursor-pointer"
                style={{ backgroundColor: "var(--balloon-background)" }}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2" style={{ color: "var(--balloon-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-balloon-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--balloon-primary)" }}>
              Our Creative Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From concept to installation, we bring your balloon decor vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Design Consultation",
                description:
                  "We discuss your vision, theme, and requirements to create a custom balloon design concept.",
              },
              {
                step: "02",
                title: "Color & Style Selection",
                description:
                  "Choose from our premium balloon collection and finalize colors that match your event aesthetic.",
              },
              {
                step: "03",
                title: "Professional Installation",
                description:
                  "Our skilled team arrives early to create your balloon installation with precision and care.",
              },
              {
                step: "04",
                title: "Event Support",
                description: "We provide on-site support throughout your event to ensure everything looks perfect.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-balloon-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-balloon-float"
                  style={{
                    backgroundColor: "var(--balloon-primary)",
                    color: "var(--balloon-primary-foreground)",
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--balloon-primary)" }}>
                  {process.title}
                </h3>
                <p className="leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--balloon-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-balloon-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--balloon-primary)" }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The balloon installation at our wedding was absolutely breathtaking. It transformed our venue into a fairy tale setting that exceeded our wildest dreams.",
                author: "Emma Thompson",
                title: "Bride, Thompson-Williams Wedding",
                image: "/placeholder.svg?height=80&width=80&text=ET",
              },
              {
                quote:
                  "Lovely Events created the most professional and eye-catching balloon display for our product launch. The attention to detail and brand integration was flawless.",
                author: "David Chen",
                title: "Marketing Director, Innovation Tech",
                image: "/placeholder.svg?height=80&width=80&text=DC",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-balloon-card-hover"
                style={{
                  backgroundColor: "var(--balloon-background)",
                  border: "1px solid var(--balloon-border)",
                }}
              >
                <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: "var(--balloon-primary)" }}>
                      {testimonial.author}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--balloon-muted-foreground)" }}>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--balloon-primary)" }}>
        <div className="max-w-4xl mx-auto animate-balloon-fade-in">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--balloon-primary-foreground)" }}
          >
            Ready to Create Balloon Magic?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--balloon-primary-foreground)" }}>
            Let's discuss how our balloon artistry can transform your event into an unforgettable experience.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 animate-balloon-float"
            style={{
              backgroundColor: "var(--balloon-secondary)",
              color: "var(--balloon-secondary-foreground)",
            }}
          >
            Book Your Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
