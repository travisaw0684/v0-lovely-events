import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Users, Star, Trophy, Heart, Gift, Sparkles } from "lucide-react"

export default function EmployeeRecognitionPage() {
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
              "url('/placeholder.svg?height=1080&width=1920&text=Elegant+Employee+Recognition+Dinner+Event')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.7)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-corporate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Employee Recognition Dinners</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Honor your team's dedication with elegant recognition events that celebrate achievements and strengthen
            company culture
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-corporate-pulse hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Plan Recognition Event
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
              Meaningful Recognition Experiences
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Create memorable moments that show genuine appreciation for your employees' contributions and foster a
              culture of excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Annual Awards Dinners",
                description:
                  "Sophisticated ceremonies celebrating top performers with elegant dining, professional presentations, and meaningful awards.",
              },
              {
                icon: Star,
                title: "Service Anniversary Events",
                description:
                  "Special recognition dinners honoring employees' years of service with personalized tributes and commemorative gifts.",
              },
              {
                icon: Users,
                title: "Team Achievement Celebrations",
                description:
                  "Group recognition events celebrating departmental successes, project completions, and collaborative achievements.",
              },
              {
                icon: Heart,
                title: "Retirement Celebrations",
                description:
                  "Dignified farewell events honoring retiring employees with heartfelt tributes, memory sharing, and appreciation ceremonies.",
              },
              {
                icon: Gift,
                title: "Performance Recognition",
                description:
                  "Exclusive dinners recognizing exceptional performance, innovation, and contributions to company success.",
              },
              {
                icon: Sparkles,
                title: "Leadership Recognition",
                description:
                  "Executive-level events honoring outstanding leadership, mentorship, and strategic contributions to the organization.",
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

      {/* Benefits Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              The Impact of Recognition
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Well-planned recognition events create lasting positive effects on employee morale, retention, and company
              culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Increased Engagement",
                description:
                  "Recognized employees show 31% higher productivity and stronger commitment to company goals.",
              },
              {
                title: "Improved Retention",
                description: "Companies with strong recognition programs have 40% lower turnover rates.",
              },
              {
                title: "Enhanced Culture",
                description: "Recognition events strengthen team bonds and reinforce company values.",
              },
              {
                title: "Motivated Performance",
                description: "Public recognition inspires continued excellence and motivates other team members.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center animate-corporate-fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    backgroundColor: "var(--corporate-primary)",
                    color: "var(--corporate-primary-foreground)",
                  }}
                >
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                  {benefit.title}
                </h3>
                <p className="leading-relaxed">{benefit.description}</p>
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
              Our Recognition Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              From planning to execution, we ensure every recognition event is meaningful and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Recognition Strategy",
                description:
                  "We work with HR and leadership to identify honorees and develop appropriate recognition approaches.",
              },
              {
                step: "02",
                title: "Event Design",
                description:
                  "Create elegant dinner experiences with personalized touches that reflect each honoree's contributions.",
              },
              {
                step: "03",
                title: "Program Development",
                description:
                  "Craft meaningful presentations, speeches, and award ceremonies that genuinely honor achievements.",
              },
              {
                step: "04",
                title: "Memorable Execution",
                description:
                  "Deliver flawless events that create lasting positive memories for honorees and attendees.",
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
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              What Leaders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The employee recognition dinner was absolutely perfect. Our team members felt truly valued, and the event strengthened our company culture in ways we're still seeing months later.",
                author: "Lisa Chen",
                title: "VP of Human Resources, TechForward",
                image: "/placeholder.svg?height=80&width=80&text=LC",
              },
              {
                quote:
                  "Lovely Events created such a meaningful experience for our retiring employees. The personal touches and attention to their individual stories made it an unforgettable celebration.",
                author: "Robert Martinez",
                title: "Director of Operations, Global Solutions",
                image: "/placeholder.svg?height=80&width=80&text=RM",
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
            Ready to Recognize Excellence?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--corporate-primary-foreground)" }}>
            Let's create a recognition event that shows your employees how much their contributions matter.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
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
