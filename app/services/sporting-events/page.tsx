"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SportingEventsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--sporting-background)", color: "var(--sporting-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/11208468/11208468-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">Sporting Event Planning</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Elevate your corporate sporting events with professional planning that delivers championship-level
            experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Book a Free Consultation
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Plan My Event
            </button>
          </div>
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
              What sets Lovely Events Group apart is our proven expertise in producing large-scale, high-impact sporting
              events and premium experiences. Founder Shawanda Holsey brings a wealth of industry knowledge, having led
              logistics and coordination for nationally recognized collegiate events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "From Kickoff to Celebration: Curating Fan Experiences",
                description:
                  "Our team has proudly produced and supported ancillary experiences for major games like the MEAC/SWAC Challenge Kickoff and the Celebration Bowl, delivering everything from VIP receptions and hospitality suites to branded fan activations and curated cultural moments.",
              },
              {
                icon: Users,
                title: "Where Tradition Meets Innovation",
                description:
                  "With a deep respect for the legacy and impact of Historically Black Colleges and Universities (HBCUs), we take pride in creating polished, meaningful experiences that reflect the heart of the culture and the spirit of the game.",
              },
              {
                icon: Calendar,
                title: "Shaping the Culture Around the Game",
                description:
                  "When you partner with Lovely Events Group, you're choosing precision, passion, and peace of mind—so you can focus on enjoying the moment while we handle the rest.",
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
      <section className="py-20 px-6 bg-[#2F5068] text-[#ffffff]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Comprehensive Event Execution, From Strategy to Show Time
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              At Lovely Events Group, we specialize in managing the full scope of live sporting event logistics and
              experiences—from behind-the-scenes coordination to on-the-ground excellence. Our founder, Shawanda Holsey,
              brings elite-level expertise to every project, overseeing all operational and hospitality elements with
              precision and professionalism.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Peripheral Event Management",
                description:
                  "VIP receptions, media days, sponsor activations, and ancillary experiences that enhance the core event",
              },
              {
                step: "02",
                title: "Vendor & Sponsorship Coordination",
                description: "Onboarding, scheduling, activation strategy, and relationship management",
              },
              {
                step: "03",
                title: "Hospitality Oversight",
                description:
                  "Serving as the liaison for hotel partnerships, ensuring seamless accommodations and experiences for student-athletes, bands, sponsors, volunteers, and vendors",
              },
              {
                step: "04",
                title: "Ticketing Operations",
                description:
                  "Managing distribution, tracking, and promotion for participating schools, conferences, corporate partners, and group sales",
              },
              {
                step: "05",
                title: "Gifting & Branded Materials",
                description:
                  "Curating and executing team gifts, sponsor appreciation, staff uniforms, promotional items, and award/trophy ordering",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#732b6f]/30 hover:border-[#732b6f] transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#732b6f] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#732b6f] bg-white/20 px-3 py-1 rounded-full">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 text-white">{process.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">{process.description}</p>
                    <button className="inline-flex items-center gap-2 text-[#732b6f] hover:text-white bg-white/20 hover:bg-[#732b6f] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="px-[30%] py-[10%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            From the first planning call to the final whistle, we ensure that every detail is handled with excellence—so
            your team, guests, and partners can focus on the experience, not the logistics.
          </p>
        </motion.div>
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
