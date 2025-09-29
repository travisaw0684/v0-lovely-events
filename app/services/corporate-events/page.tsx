"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Utensils, Music, Award } from "lucide-react"

export default function CorporateEventsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--corporate-background)", color: "var(--corporate-foreground)" }}
    >
      <Header />

      {/* Hero Section - Inspired by "Optimal organization meets exquisite design" */}
      <section className="corporate-hero-layout px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-none tracking-tight"
              style={{ color: "var(--corporate-primary)" }}
            >
              Optimal organization
              <br />
              meets exquisite design
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "var(--corporate-muted-foreground)" }}
          >
            Transform your corporate events into functional works of art with Lovely Events Group's custom design
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-full border-2 transition-all duration-500 hover:scale-105"
              style={{
                borderColor: "var(--corporate-primary)",
                color: "var(--corporate-primary)",
              }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">Learn Our Untold Story</span>
              <div className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <button
              className="group flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-500 hover:scale-105"
              style={{
                backgroundColor: "var(--corporate-secondary)",
                color: "var(--corporate-secondary-foreground)",
              }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">Purchase Our Stellar Products</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Central Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/placeholder.svg?height=600&width=800&text=Elegant+Corporate+Event+Setup"
              alt="Elegant Corporate Event Setup"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section - Inspired by ARTIFACT layout */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--corporate-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight"
              style={{ color: "var(--corporate-primary)" }}
            >
              CORPORATE
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--corporate-primary)" }}>
              When it comes to corporate event planning in Las Vegas, one size does not fit all. Every business is
              different, and therefore each company's events should be unique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Music,
                title: "Entertainment",
                description: "Perfect entertainment that matches your company culture and event atmosphere.",
              },
              {
                icon: Utensils,
                title: "Food & Drink",
                description: "Delicious catering options that accommodate all dietary restrictions and preferences.",
              },
              {
                icon: MapPin,
                title: "Location",
                description:
                  "Strategic venue selection that creates the perfect ambiance for your corporate gathering.",
              },
              {
                icon: Award,
                title: "Event Types",
                description: "From team building to product launches, we handle all corporate celebration needs.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: "var(--corporate-primary)" }}
                >
                  <service.icon className="w-8 h-8" style={{ color: "var(--corporate-secondary)" }} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--corporate-primary)" }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Central Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=900&text=Corporate+Event+Entertainment"
                alt="Corporate Event Entertainment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Inspired by Avencio numbered approach */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="font-serif text-4xl md:text-6xl font-light mb-8"
              style={{ color: "var(--corporate-primary)" }}
            >
              Nos enjeux principaux
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl font-light" style={{ color: "var(--corporate-primary)" }}>
                  1
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                    Accompagner les entreprises
                  </h3>
                  <p className="leading-relaxed">dans leur transition vers de nouvelles pratiques durables.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6">
                <span className="text-6xl font-light" style={{ color: "var(--corporate-primary)" }}>
                  2
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--corporate-primary)" }}>
                    Valoriser l'innovation
                  </h3>
                  <p className="leading-relaxed">
                    au travers de nos projets, comme le positionnement Volt et le matériel Voi System.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3
              className="font-serif text-3xl md:text-5xl font-light mb-8"
              style={{ color: "var(--corporate-primary)" }}
            >
              Allier innovation, durabilité et efficacité
            </h3>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/placeholder.svg?height=400&width=400&text=Corporate+Handshake", alt: "Corporate Partnership" },
              { src: "/placeholder.svg?height=400&width=400&text=Modern+Office+Space", alt: "Modern Workspace" },
              { src: "/placeholder.svg?height=400&width=400&text=Team+Collaboration", alt: "Team Collaboration" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg corporate-card-hover cursor-pointer"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Inspired by v0 Enterprise dark theme */}
      <section className="py-32 px-6 text-center" style={{ backgroundColor: "var(--corporate-primary)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-serif text-4xl md:text-6xl font-light mb-8"
              style={{ color: "var(--corporate-primary-foreground)" }}
            >
              Parlons de votre projet
            </h2>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full font-medium transition-all duration-300"
              style={{
                backgroundColor: "var(--corporate-primary-foreground)",
                color: "var(--corporate-primary)",
              }}
            >
              Nous contacter
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
