import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, Sparkles, Camera, Flower, Music, Crown } from "lucide-react"

export default function CuratedWeddingsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--wedding-background)", color: "var(--wedding-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/placeholder.svg?height=1080&width=1920&text=Elegant+Luxury+Wedding+Ceremony+Setup')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.6)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-wedding-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance animate-wedding-float">
            Curated Wedding Experiences
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 font-light italic">With Style & Intention</h2>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Every detail thoughtfully designed to reflect your unique love story and create an unforgettable celebration
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--wedding-secondary)",
              color: "var(--wedding-secondary-foreground)",
            }}
          >
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Our Wedding Philosophy
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We believe every wedding should be a true reflection of your love story, crafted with intention and
              executed with flawless attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Style with Substance",
                description:
                  "Beautiful aesthetics that carry deep meaning, ensuring every element tells part of your unique story.",
              },
              {
                icon: Sparkles,
                title: "Intentional Design",
                description:
                  "Every choice is purposeful, from color palettes to floral arrangements, creating cohesive elegance.",
              },
              {
                icon: Crown,
                title: "Luxury Experience",
                description:
                  "Premium service and attention to detail that makes you feel like royalty on your special day.",
              },
            ].map((philosophy, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl animate-wedding-card-hover"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
                }}
              >
                <philosophy.icon className="w-12 h-12 mx-auto mb-6" style={{ color: "var(--wedding-primary)" }} />
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {philosophy.title}
                </h3>
                <p className="leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--wedding-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Curated Wedding Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive wedding planning services that transform your vision into an extraordinary celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Complete Wedding Design",
                description:
                  "Full-service design including color palettes, floral concepts, lighting design, and aesthetic coordination.",
              },
              {
                icon: Flower,
                title: "Luxury Floral Arrangements",
                description:
                  "Bespoke floral designs that complement your style, from bridal bouquets to ceremony installations.",
              },
              {
                icon: Camera,
                title: "Vendor Curation",
                description:
                  "Carefully selected network of premium vendors who share our commitment to excellence and style.",
              },
              {
                icon: Music,
                title: "Entertainment Coordination",
                description:
                  "Curated musical experiences from ceremony musicians to reception entertainment that matches your vision.",
              },
              {
                icon: Heart,
                title: "Personalization Services",
                description:
                  "Custom details that reflect your relationship, from monogrammed elements to meaningful traditions.",
              },
              {
                icon: Crown,
                title: "Day-of Coordination",
                description:
                  "Flawless execution ensuring you can focus on celebrating while we manage every detail seamlessly.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-wedding-card-hover cursor-pointer"
                style={{
                  backgroundColor: "var(--wedding-background)",
                  border: "1px solid var(--wedding-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--wedding-primary)" }} />
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Your Wedding Journey
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A carefully crafted process that guides you from initial vision to your perfect wedding day
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Vision Discovery",
                description: "Deep conversation about your love story, style preferences, and dream wedding vision.",
              },
              {
                step: "02",
                title: "Design Development",
                description:
                  "Create comprehensive design concepts that bring your vision to life with intentional details.",
              },
              {
                step: "03",
                title: "Curation & Planning",
                description:
                  "Select premium vendors and coordinate all elements to ensure seamless execution of your design.",
              },
              {
                step: "04",
                title: "Flawless Execution",
                description:
                  "Professional coordination on your wedding day, allowing you to be fully present for every moment.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-wedding-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                  style={{
                    backgroundColor: "var(--wedding-primary)",
                    color: "var(--wedding-primary-foreground)",
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {process.title}
                </h3>
                <p className="leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--wedding-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Love Stories We've Crafted
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our wedding was absolutely magical. Every detail was perfect and truly reflected who we are as a couple. The intentional design made our day feel like a fairy tale come to life.",
                author: "Isabella & James",
                title: "Married September 2024",
                image: "/placeholder.svg?height=80&width=80&text=I&J",
              },
              {
                quote:
                  "The team understood our vision completely and elevated it beyond our wildest dreams. The style and intention behind every choice made our wedding uniquely ours.",
                author: "Sophia & Michael",
                title: "Married June 2024",
                image: "/placeholder.svg?height=80&width=80&text=S&M",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-wedding-card-hover"
                style={{
                  backgroundColor: "var(--wedding-background)",
                  border: "1px solid var(--wedding-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
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
                    <h4 className="font-semibold" style={{ color: "var(--wedding-primary)" }}>
                      {testimonial.author}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--wedding-muted-foreground)" }}>
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
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--wedding-primary)" }}>
        <div className="max-w-4xl mx-auto animate-wedding-fade-in">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--wedding-primary-foreground)" }}
          >
            Ready to Create Your Dream Wedding?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--wedding-primary-foreground)" }}>
            Let's begin crafting a wedding experience that perfectly reflects your love story with style and intention.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--wedding-secondary)",
              color: "var(--wedding-secondary-foreground)",
            }}
          >
            Schedule Your Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
