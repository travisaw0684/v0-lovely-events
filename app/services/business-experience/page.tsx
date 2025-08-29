import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Lightbulb, Network, Handshake, Globe, Zap, Users } from "lucide-react"

export default function BusinessExperiencePage() {
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
              "url('/placeholder.svg?height=1080&width=1920&text=Premium+Business+Experience+Event+Networking')",
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(186, 51, 100, 0.7)" }} />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl animate-corporate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">
            Business Experience Event Planner
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            Create transformative business experiences that drive connections, innovation, and growth through expertly
            curated events
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-corporate-pulse hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Create Your Experience
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
              Transformative Business Experiences
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We design immersive business events that go beyond traditional meetings to create meaningful connections
              and drive real business outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Executive Networking Events",
                description:
                  "Curated networking experiences that facilitate meaningful connections between industry leaders and decision-makers.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Workshops",
                description:
                  "Interactive sessions that spark creativity, foster collaboration, and drive breakthrough thinking in your organization.",
              },
              {
                icon: Handshake,
                title: "Partnership Summits",
                description:
                  "Strategic events designed to strengthen business relationships and explore new partnership opportunities.",
              },
              {
                icon: Globe,
                title: "Industry Forums",
                description:
                  "Thought leadership events that position your company at the forefront of industry trends and discussions.",
              },
              {
                icon: Zap,
                title: "Customer Experience Events",
                description:
                  "Immersive experiences that showcase your products or services while building stronger customer relationships.",
              },
              {
                icon: Users,
                title: "Leadership Retreats",
                description:
                  "Strategic off-site experiences that align leadership teams and drive organizational transformation.",
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

      {/* Experience Design Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Experience Design Philosophy
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Every business experience we create is designed with intention, purpose, and measurable outcomes in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-corporate-fade-in">
              <h3 className="font-serif text-3xl font-bold mb-6" style={{ color: "var(--corporate-primary)" }}>
                Strategic Experience Design
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Objective-Driven Planning",
                    description: "Every element serves a specific business purpose and measurable outcome.",
                  },
                  {
                    title: "Participant Journey Mapping",
                    description: "Carefully crafted experiences that guide attendees through meaningful interactions.",
                  },
                  {
                    title: "Engagement Innovation",
                    description: "Creative formats that break traditional event molds and drive deeper engagement.",
                  },
                  {
                    title: "ROI Measurement",
                    description: "Clear metrics and follow-up strategies to measure event success and impact.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "var(--corporate-primary)" }}
                    />
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: "var(--corporate-primary)" }}>
                        {item.title}
                      </h4>
                      <p className="leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-corporate-fade-in">
              <img
                src="/placeholder.svg?height=500&width=600&text=Business+Experience+Design+Process"
                alt="Business Experience Design"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
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
              Our Experience Creation Process
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive approach that transforms business objectives into memorable, impactful experiences
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your business objectives, audience analysis, and desired outcomes to create the foundation.",
              },
              {
                step: "02",
                title: "Experience Architecture",
                description:
                  "Design the overall experience flow, touchpoints, and engagement moments that will drive results.",
              },
              {
                step: "03",
                title: "Content & Programming",
                description:
                  "Develop compelling content, speakers, and interactive elements that align with your strategic goals.",
              },
              {
                step: "04",
                title: "Execution & Optimization",
                description:
                  "Flawless delivery with real-time optimization and post-event analysis to maximize impact.",
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

      {/* Success Stories */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--corporate-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-corporate-fade-in">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--corporate-primary)" }}
            >
              Transformative Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "The leadership retreat they designed completely transformed our executive team's approach to collaboration. The ROI in terms of improved decision-making and strategic alignment has been remarkable.",
                author: "Catherine Brooks",
                title: "CEO, Strategic Ventures Group",
                image: "/placeholder.svg?height=80&width=80&text=CB",
              },
              {
                quote:
                  "Our customer experience event generated more qualified leads than our last three trade shows combined. The immersive format created genuine connections that translated directly to business growth.",
                author: "Michael Torres",
                title: "VP of Sales, Enterprise Solutions",
                image: "/placeholder.svg?height=80&width=80&text=MT",
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
            Ready to Transform Your Business Events?
          </h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: "var(--corporate-primary-foreground)" }}>
            Let's create a business experience that drives real results and transforms how your organization connects
            and grows.
          </p>
          <button
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--corporate-secondary)",
              color: "var(--corporate-secondary-foreground)",
            }}
          >
            Begin Your Transformation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
