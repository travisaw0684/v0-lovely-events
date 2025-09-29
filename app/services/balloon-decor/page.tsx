"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight, Star, CheckCircle, Sparkles } from "lucide-react"

export default function BalloonDecorPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--balloon-background)", color: "var(--balloon-foreground)" }}
    >
      <Header />

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="balloon-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-sm font-medium tracking-wider uppercase"
                  style={{ color: "var(--balloon-primary)" }}
                >
                  Lovely Events Group
                </motion.p>
                <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none">
                  <span className="block">Balloon</span>
                  <span className="block balloon-text-reveal">Artistry</span>
                  <span className="block text-4xl md:text-5xl font-light mt-4">meets exquisite design</span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl leading-relaxed max-w-lg"
                style={{ color: "var(--balloon-muted-foreground)" }}
              >
                Transform your events into functional works of art with Lovely Events Group's custom balloon design
                solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <button
                  className="group px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--balloon-primary)",
                    color: "var(--balloon-primary-foreground)",
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  className="px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: "var(--balloon-primary)",
                    color: "var(--balloon-primary)",
                  }}
                >
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Elegant+Balloon+Installation"
                  alt="Elegant Balloon Installation"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: "var(--balloon-primary)" }}>
                      500+
                    </p>
                    <p className="text-sm text-gray-600">Events Created</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="font-serif text-5xl md:text-6xl font-bold mb-6">
              What We Create
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--balloon-muted-foreground)" }}
            >
              From intimate celebrations to grand corporate events, we craft balloon installations that tell your story
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Organic Garlands",
                description: "Flowing, natural balloon arrangements that create stunning backdrops",
                image: "/placeholder.svg?height=400&width=600&text=Organic+Balloon+Garland",
                price: "From $350",
                features: ["Custom color palette", "7-12ft lengths", "Setup included"],
              },
              {
                title: "Ceiling Installations",
                description: "Dramatic overhead displays that transform any space",
                image: "/placeholder.svg?height=400&width=600&text=Ceiling+Installation",
                price: "From $500",
                features: ["Helium balloons", "Professional rigging", "Impact lighting"],
              },
              {
                title: "Sculptural Pieces",
                description: "Artistic balloon sculptures as centerpieces and focal points",
                image: "/placeholder.svg?height=400&width=600&text=Balloon+Sculpture",
                price: "From $250",
                features: ["Custom designs", "Themed elements", "Photo-ready"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-3xl overflow-hidden balloon-card-hover cursor-pointer"
                style={{ backgroundColor: "var(--balloon-card)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold" style={{ color: "var(--balloon-primary)" }}>
                      {service.title}
                    </h3>
                    <span className="text-lg font-semibold" style={{ color: "var(--balloon-primary)" }}>
                      {service.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" style={{ color: "var(--balloon-primary)" }} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="w-full py-3 rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: "var(--balloon-secondary)",
                      color: "var(--balloon-secondary-foreground)",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ backgroundColor: "var(--balloon-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Creative Process</h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--balloon-muted-foreground)" }}
            >
              From concept to celebration, we guide you through every step of bringing your vision to life
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-amber-200 to-transparent hidden lg:block" />

            <div className="space-y-20">
              {[
                {
                  step: "01",
                  title: "Discovery & Vision",
                  description:
                    "We start by understanding your event, style preferences, and budget to create a tailored approach.",
                  icon: <Sparkles className="w-8 h-8" />,
                },
                {
                  step: "02",
                  title: "Design & Planning",
                  description:
                    "Our team creates detailed mockups and plans, ensuring every element aligns with your vision.",
                  icon: <Star className="w-8 h-8" />,
                },
                {
                  step: "03",
                  title: "Creation & Installation",
                  description:
                    "Expert installation on-site, with attention to every detail for a flawless final result.",
                  icon: <CheckCircle className="w-8 h-8" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 max-w-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--balloon-primary)" }}
                      >
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--balloon-accent)" }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-serif text-3xl font-bold mb-4" style={{ color: "var(--balloon-primary)" }}>
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--balloon-muted-foreground)" }}>
                      {item.description}
                    </p>
                  </div>

                  <div className="flex-1 max-w-lg">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                      <img
                        src={`/ceholder-svg-height-400-width-600-text-process-ste.jpg?height=400&width=600&text=Process+Step+${item.step}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">Recent Creations</h2>
            <p
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--balloon-muted-foreground)" }}
            >
              Explore our latest balloon artistry and see how we transform spaces into extraordinary experiences
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { span: "lg:col-span-2 lg:row-span-2", height: "h-96 lg:h-full" },
              { span: "lg:col-span-1", height: "h-48" },
              { span: "lg:col-span-1", height: "h-48" },
              { span: "lg:col-span-1", height: "h-48" },
              { span: "lg:col-span-1", height: "h-48" },
              { span: "lg:col-span-2", height: "h-64" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${item.span} ${item.height} rounded-3xl overflow-hidden balloon-card-hover cursor-pointer`}
              >
                <img
                  src={`/ceholder-svg-height-400-width-600-text-gallery-ima.jpg?height=400&width=600&text=Gallery+Image+${index + 1}`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ backgroundColor: "var(--balloon-primary)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="balloon-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white">
                Ready to create something extraordinary?
              </h2>
              <p className="text-xl leading-relaxed text-white/90 mb-8">
                Let's discuss your vision and bring it to life with our signature balloon artistry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: "var(--balloon-secondary)",
                    color: "var(--balloon-secondary-foreground)",
                  }}
                >
                  Start Your Project
                </button>
                <button className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=600&width=600&text=Contact+CTA+Image"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
