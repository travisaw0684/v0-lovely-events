import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Trophy, Users, Calendar, Award, Target, Zap } from "lucide-react"

export default function SportingEventsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--sporting-background)", color: "var(--sporting-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?key=2qi0e')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.7)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-sporting-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Sporting Event Planning</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Elevate your corporate sporting events with professional planning that delivers championship-level
            experiences
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-sporting-pulse hover:scale-105"
            style={{
              backgroundColor: "var(--sporting-secondary)",
              color: "var(--sporting-secondary-foreground)",
            }}
          >
            Plan Your Event
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-sporting-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Championship-Level Events
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From corporate tournaments to award ceremonies, we create sporting events that inspire, engage, and
              celebrate excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Corporate Tournaments",
                description:
                  "Multi-day tournaments with professional coordination, scoring systems, and award ceremonies that build team spirit and healthy competition.",
              },
              {
                icon: Users,
                title: "Team Building Events",
                description:
                  "Interactive sporting activities designed to strengthen workplace relationships and improve collaboration through friendly competition.",
              },
              {
                icon: Calendar,
                title: "Annual Sports Days",
                description:
                  "Company-wide sporting events featuring multiple activities, catering, entertainment, and professional event management.",
              },
              {
                icon: Award,
                title: "Award Ceremonies",
                description:
                  "Elegant recognition events celebrating athletic achievements with sophisticated staging, lighting, and presentation.",
              },
              {
                icon: Target,
                title: "Skills Competitions",
                description:
                  "Specialized competitions focusing on specific sports skills with professional judging and interactive audience engagement.",
              },
              {
                icon: Zap,
                title: "Wellness Challenges",
                description:
                  "Health-focused sporting events promoting employee wellness through engaging physical activities and educational components.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-sporting-card-hover cursor-pointer"
                style={{
                  backgroundColor: "var(--sporting-card)",
                  border: "1px solid var(--sporting-border)",
                }}
              >
                <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--sporting-primary)" }} />
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--sporting-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--sporting-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-sporting-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Our Winning Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Every successful sporting event starts with meticulous planning and attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Session",
                description:
                  "We analyze your objectives, audience, and requirements to create a customized event strategy.",
              },
              {
                step: "02",
                title: "Venue & Logistics",
                description:
                  "Secure the perfect venue with all necessary equipment, permits, and safety protocols in place.",
              },
              {
                step: "03",
                title: "Team Coordination",
                description:
                  "Manage participant registration, team formation, and communication leading up to the event.",
              },
              {
                step: "04",
                title: "Event Execution",
                description: "Professional on-site management ensuring smooth operations and memorable experiences.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-sporting-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                  style={{
                    backgroundColor: "var(--sporting-primary)",
                    color: "var(--sporting-primary-foreground)",
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--sporting-primary)" }}>
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
          <div className="text-center mb-16 animate-sporting-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Lovely Events transformed our annual company tournament into an unforgettable championship experience. The attention to detail and professional execution exceeded all expectations.",
                author: "Sarah Mitchell",
                title: "HR Director, TechCorp Solutions",
                image: "/professional-woman-smiling-corporate-headshot.png",
              },
              {
                quote:
                  "The team building sporting event they organized brought our departments together like never before. The energy was incredible and the impact on morale was immediate.",
                author: "Michael Rodriguez",
                title: "Operations Manager, Global Industries",
                image: "/professional-man-smiling-corporate-headshot.png",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-sporting-card-hover"
                style={{
                  backgroundColor: "var(--sporting-card)",
                  border: "1px solid var(--sporting-border)",
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
                    <h4 className="font-semibold" style={{ color: "var(--sporting-primary)" }}>
                      {testimonial.author}
                    </h4>
                    <p className="text-sm" style={{ color: "var(--sporting-muted-foreground)" }}>
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
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "var(--sporting-primary)" }}>
        <div className="max-w-4xl mx-auto animate-sporting-fade-in">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--sporting-primary-foreground)" }}
          >
            Ready to Create Your Championship Event?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--sporting-primary-foreground)" }}>
            Let's discuss how we can bring your sporting event vision to life with professional planning and flawless
            execution.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--sporting-secondary)",
              color: "var(--sporting-secondary-foreground)",
            }}
          >
            Start Planning Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
