import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Briefcase, Users, Calendar, Target, TrendingUp, Award } from "lucide-react"

export default function CorporateEventsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--corporate-background)", color: "var(--corporate-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/placeholder.svg?height=1080&width=1920&text=Professional+Corporate+Event+Conference+Setup')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.7)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-corporate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Corporate Event Planning</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Comprehensive corporate event management that elevates your brand and achieves your business objectives
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-corporate-pulse hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Discuss Your Event
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Complete Corporate Event Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate board meetings to large-scale conferences, we deliver professional events that reflect your
              company's excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Executive Conferences",
                description:
                  "High-level conferences and summits with sophisticated staging, premium venues, and seamless logistics management.",
              },
              {
                icon: Users,
                title: "Board Meetings & AGMs",
                description:
                  "Professional meeting coordination with proper protocol, documentation support, and executive-level service.",
              },
              {
                icon: Calendar,
                title: "Product Launches",
                description:
                  "Strategic launch events with media coordination, demonstration areas, and stakeholder engagement programs.",
              },
              {
                icon: Target,
                title: "Sales Conferences",
                description:
                  "Motivational sales events with training sessions, award ceremonies, and team-building activities.",
              },
              {
                icon: TrendingUp,
                title: "Investor Relations",
                description:
                  "Professional investor meetings, earnings presentations, and stakeholder communication events.",
              },
              {
                icon: Award,
                title: "Industry Awards",
                description:
                  "Elegant award ceremonies recognizing industry achievements with professional production and presentation.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-corporate-card-hover cursor-pointer"
                style={{
                  backgroundColor: "var(--corporate-card)",
                  border: "1px solid var(--corporate-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--corporate-primary)" }} />
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Our Event Capabilities
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive event management services that handle every aspect of your corporate gathering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Venue Selection",
                description:
                  "Premium venues that align with your brand image and accommodate your specific requirements.",
              },
              {
                title: "Technology Integration",
                description:
                  "Advanced AV systems, live streaming, and interactive technology for modern presentations.",
              },
              {
                title: "Catering Excellence",
                description: "Sophisticated dining experiences from working lunches to formal dinner receptions.",
              },
              {
                title: "Brand Integration",
                description: "Seamless incorporation of your corporate branding throughout the event experience.",
              },
              {
                title: "Logistics Management",
                description:
                  "Complete coordination of transportation, accommodation, and scheduling for all attendees.",
              },
              {
                title: "Media Relations",
                description: "Professional media coordination, press releases, and coverage management when required.",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="p-6 rounded-xl animate-corporate-card-hover"
                style={{
                  backgroundColor: "var(--corporate-background)",
                  border: "1px solid var(--corporate-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                  {capability.title}
                </h3>
                <p className="leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Our Planning Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A systematic approach that ensures every corporate event meets your objectives and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Objective Analysis",
                description: "Understanding your business goals and event requirements.",
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Developing comprehensive event strategy and timeline.",
              },
              {
                step: "03",
                title: "Vendor Coordination",
                description: "Managing all suppliers and service providers.",
              },
              {
                step: "04",
                title: "Pre-Event Testing",
                description: "Thorough testing of all systems and processes.",
              },
              {
                step: "05",
                title: "Flawless Execution",
                description: "Professional on-site management and support.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-corporate-fade-in">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold"
                  style={{
                    backgroundColor: "var(--corporate-primary)",
                    color: "var(--corporate-primary-foreground)",
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-serif text-lg font-bold mb-3" style={{ color: "var(--corporate-primary)" }}>
                  {process.title}
                </h3>
                <p className="text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our annual conference was flawlessly executed. From the venue selection to the final presentation, every detail was managed with exceptional professionalism. Our stakeholders were thoroughly impressed.",
                author: "Amanda Richardson",
                title: "Chief Marketing Officer, Global Dynamics",
                image: "/placeholder.svg?height=80&width=80&text=AR",
              },
              {
                quote:
                  "The product launch event exceeded all our expectations. The media coverage was excellent, and the event perfectly showcased our innovation. It was a pivotal moment for our company.",
                author: "Thomas Wilson",
                title: "VP of Product Development, InnovateTech",
                image: "/placeholder.svg?height=80&width=80&text=TW",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-corporate-card-hover"
                style={{
                  backgroundColor: "var(--corporate-background)",
                  border: "1px solid var(--corporate-border)",
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
                    <h4 className="font-semibold" style={{ color: "var(--corporate-primary)" }}>
                      {testimonial.author}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--corporate-muted-foreground)" }}>
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
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--corporate-primary)" }}>
        <div className="max-w-4xl mx-auto animate-corporate-fade-in">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--corporate-primary-foreground)" }}
          >
            Ready to Plan Your Corporate Event?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--corporate-primary-foreground)" }}>
            Let's discuss how we can create a corporate event that achieves your business objectives and enhances your
            brand.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
