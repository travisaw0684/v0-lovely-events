import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Award, TrendingUp, Users, Calendar, Target, Briefcase } from "lucide-react"

export default function CorporateMilestonesPage() {
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
              "url('/placeholder.svg?height=1080&width=1920&text=Professional+Corporate+Milestone+Celebration')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.7)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-corporate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Corporate Milestones</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Celebrate your company's achievements with sophisticated events that honor success and inspire continued
            excellence
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-corporate-pulse hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Plan Your Celebration
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
              Milestone Celebrations That Matter
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From company anniversaries to IPO celebrations, we create memorable events that reflect your
              organization's values and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Company Anniversaries",
                description:
                  "Elegant celebrations marking years of success, featuring historical displays, executive speeches, and sophisticated entertainment.",
              },
              {
                icon: TrendingUp,
                title: "IPO & Financial Milestones",
                description:
                  "Professional events celebrating public offerings, acquisitions, and major financial achievements with stakeholder recognition.",
              },
              {
                icon: Users,
                title: "Leadership Transitions",
                description:
                  "Dignified ceremonies honoring retiring executives and welcoming new leadership with appropriate protocol and recognition.",
              },
              {
                icon: Calendar,
                title: "Product Launch Celebrations",
                description:
                  "Strategic events unveiling new products or services with media coordination, demonstrations, and stakeholder engagement.",
              },
              {
                icon: Target,
                title: "Goal Achievement Events",
                description:
                  "Motivational celebrations recognizing the attainment of major business objectives, sales targets, and strategic milestones.",
              },
              {
                icon: Briefcase,
                title: "Merger & Acquisition Events",
                description:
                  "Professional ceremonies marking corporate partnerships, mergers, and acquisitions with appropriate stakeholder communication.",
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

      {/* Process Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Our Strategic Approach
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Every milestone celebration requires careful planning to ensure it reflects your company's stature and
              achievements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategic Planning",
                description:
                  "We analyze your milestone's significance and develop a celebration strategy aligned with your corporate values.",
              },
              {
                step: "02",
                title: "Stakeholder Coordination",
                description:
                  "Manage invitations and communications with executives, employees, clients, and media representatives.",
              },
              {
                step: "03",
                title: "Venue & Production",
                description:
                  "Secure prestigious venues and coordinate all technical aspects including AV, staging, and branding.",
              },
              {
                step: "04",
                title: "Event Execution",
                description:
                  "Professional on-site management ensuring flawless execution that honors your achievement appropriately.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center animate-corporate-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                  style={{
                    backgroundColor: "var(--corporate-primary)",
                    color: "var(--corporate-primary-foreground)",
                  }}
                >
                  {process.step}
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
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
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Executive Testimonials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Lovely Events orchestrated our 25th anniversary celebration with exceptional professionalism. The event perfectly captured our company's journey and values, creating lasting memories for all stakeholders.",
                author: "Margaret Foster",
                title: "CEO, Foster Industries",
                image: "/placeholder.svg?height=80&width=80&text=MF",
              },
              {
                quote:
                  "The IPO celebration they planned was flawless. Every detail was meticulously managed, from stakeholder communications to the final toast. It was the perfect way to mark this historic milestone.",
                author: "James Patterson",
                title: "Chairman, Patterson Technologies",
                image: "/placeholder.svg?height=80&width=80&text=JP",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl animate-corporate-card-hover"
                style={{
                  backgroundColor: "var(--corporate-card)",
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
            Ready to Celebrate Your Success?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--corporate-primary-foreground)" }}>
            Let's create a milestone celebration that honors your achievements and inspires continued excellence.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
