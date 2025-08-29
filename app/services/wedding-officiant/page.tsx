import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, BookOpen, Users, Sparkles, Crown, MessageCircle } from "lucide-react"

export default function WeddingOfficiantPage() {
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
              "url('/placeholder.svg?height=1080&width=1920&text=Intimate+Wedding+Ceremony+with+Officiant')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.6)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-wedding-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance animate-wedding-float">
            Personalized Wedding Officiant Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Meaningful ceremonies that honor your unique love story with personalized vows and heartfelt traditions
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--wedding-secondary)",
              color: "var(--wedding-secondary-foreground)",
            }}
          >
            Meet Your Officiant
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-wedding-fade-in">
              <h2
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--wedding-primary)" }}
              >
                Your Story, Your Ceremony
              </h2>
              <p className="text-xl mb-6 leading-relaxed">
                Every love story is unique, and your wedding ceremony should reflect the beautiful journey that brought
                you together. As your officiant, I create personalized ceremonies that honor your relationship, values,
                and dreams for the future.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you envision a traditional ceremony, a modern celebration, or something uniquely yours, I work
                closely with you to craft meaningful words and rituals that make your wedding day truly unforgettable.
              </p>
            </div>
            <div className="animate-wedding-fade-in">
              <img
                src="/placeholder.svg?height=500&width=600&text=Wedding+Officiant+Portrait"
                alt="Wedding Officiant"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--wedding-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Officiant Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive ceremony services that ensure your wedding day is meaningful, memorable, and perfectly
              executed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Custom Ceremony Writing",
                description:
                  "Personalized ceremonies crafted from your love story, incorporating your values, traditions, and dreams.",
              },
              {
                icon: Heart,
                title: "Vow Guidance & Support",
                description:
                  "Assistance with writing personal vows that beautifully express your feelings and commitments.",
              },
              {
                icon: Users,
                title: "Pre-Marriage Counseling",
                description:
                  "Optional sessions to discuss your relationship, expectations, and tools for a strong marriage.",
              },
              {
                icon: Sparkles,
                title: "Unity Ceremonies",
                description:
                  "Meaningful rituals like handfasting, sand ceremonies, or candle lighting to symbolize your union.",
              },
              {
                icon: Crown,
                title: "Rehearsal Coordination",
                description:
                  "Professional rehearsal guidance ensuring everyone knows their role for a smooth ceremony.",
              },
              {
                icon: MessageCircle,
                title: "Ongoing Support",
                description:
                  "Available for questions and guidance throughout your engagement and wedding planning process.",
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

      {/* Ceremony Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Ceremony Styles
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate elopements to grand celebrations, I officiate ceremonies that reflect your style and beliefs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Traditional Ceremonies",
                description: "Classic wedding ceremonies with time-honored traditions and formal structure.",
              },
              {
                title: "Modern Celebrations",
                description: "Contemporary ceremonies with personalized elements and creative expressions of love.",
              },
              {
                title: "Interfaith Unions",
                description: "Respectful ceremonies that honor multiple religious or cultural traditions.",
              },
              {
                title: "Intimate Elopements",
                description: "Private ceremonies for couples seeking a more personal and intimate celebration.",
              },
            ].map((type, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl animate-wedding-card-hover"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
                }}
              >
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {type.title}
                </h3>
                <p className="leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--wedding-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Our Journey Together
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A collaborative process that ensures your ceremony is meaningful, personal, and perfectly executed
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Get to know each other and discuss your vision, values, and ceremony preferences.",
              },
              {
                step: "02",
                title: "Ceremony Creation",
                description:
                  "Craft your personalized ceremony script incorporating your love story and chosen elements.",
              },
              {
                step: "03",
                title: "Review & Refinement",
                description:
                  "Review the ceremony together, make adjustments, and finalize all details to your satisfaction.",
              },
              {
                step: "04",
                title: "Wedding Day",
                description:
                  "Arrive early, conduct final preparations, and officiate your beautiful ceremony with confidence.",
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-wedding-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Couples We've United
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our ceremony was absolutely perfect. The personalized vows and meaningful rituals made our wedding day feel so special and authentic to who we are as a couple.",
                author: "Rachel & David",
                title: "Married August 2024",
                image: "/placeholder.svg?height=80&width=80&text=R&D",
              },
              {
                quote:
                  "The guidance and support throughout our engagement was invaluable. Our officiant helped us create a ceremony that honored both our families' traditions beautifully.",
                author: "Maria & Jonathan",
                title: "Married October 2024",
                image: "/placeholder.svg?height=80&width=80&text=M&J",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-wedding-card-hover"
                style={{
                  backgroundColor: "var(--wedding-card)",
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
            Ready to Create Your Perfect Ceremony?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--wedding-primary-foreground)" }}>
            Let's work together to craft a wedding ceremony that beautifully tells your love story and celebrates your
            commitment.
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
