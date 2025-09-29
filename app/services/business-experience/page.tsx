"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function BusinessExperiencePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--expo-background)", color: "var(--expo-foreground)" }}
    >
      <Header />

      {/* Hero Section - Inspired by "Optimal organization meets exquisite design" */}
      <section className="expo-hero-layout px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/7648337/7648337-sd_640_360_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <h1
              className="font-sans text-6xl md:text-8xl font-light mb-8 text-balance leading-none lg:text-8xl"
              style={{ color: "var(--expo-primary)" }}
            >
              Sophisticated fun meets
              <br />
              <span className="expo-text-gradient">business success</span>
            </h1>
            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ color: "var(--expo-muted-foreground)" }}
            >
              Transform your business expo into a powerful networking experience that drives connections, promotes your
              brand, and creates lasting relationships with potential customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              className="group px-12 py-6 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 flex items-center gap-3"
              style={{
                backgroundColor: "var(--expo-primary)",
                color: "var(--expo-primary-foreground)",
              }}
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="px-12 py-6 rounded-full text-lg font-semibold border-2 transition-all duration-500 hover:scale-105"
              style={{
                borderColor: "var(--expo-border)",
                color: "var(--expo-foreground)",
              }}
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Inspired by numbered sections */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--expo-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--expo-primary)" }}>
              Benefits of Business Expos
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--expo-muted-foreground)" }}>
              Create lasting relationships that will grow your business into the future while increasing brand awareness
              through expertly curated expo experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                icon: Users,
                title: "Target Market Engagement",
                description:
                  "Further engage with your target market and create those lasting relationships that drive business growth and customer loyalty.",
              },
              {
                number: "02",
                icon: Target,
                title: "Brand Awareness",
                description:
                  "Get your products and services into the minds of potential customers through strategic expo positioning and memorable experiences.",
              },
              {
                number: "03",
                icon: TrendingUp,
                title: "Business Growth",
                description:
                  "Transform expo connections into measurable business outcomes with our proven relationship-building strategies.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="expo-card-hover p-8 rounded-2xl"
                style={{
                  backgroundColor: "var(--expo-card)",
                  border: "1px solid var(--expo-border)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{
                      backgroundColor: "var(--expo-primary)",
                      color: "var(--expo-primary-foreground)",
                    }}
                  >
                    {benefit.number}
                  </div>
                  <benefit.icon className="w-8 h-8" style={{ color: "var(--expo-secondary)" }} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--expo-primary)" }}>
                  {benefit.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--expo-muted-foreground)" }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Asymmetrical layout inspired by ARTIFACT */}
      <section className="py-32 px-6 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="expo-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
                style={{ color: "var(--expo-primary)" }}
              >
                Guidance From
                <br />
                <span style={{ color: "var(--expo-secondary)" }}>Start to Finish</span>
              </h2>
              <p className="text-xl leading-relaxed mb-12" style={{ color: "var(--expo-muted-foreground)" }}>
                When you work with us, you can spend time focusing on other important things. We will work with you to
                determine your vision and then use our expertise to make it happen.
              </p>

              <div className="space-y-8">
                {[
                  "Our team pays attention to all details, both big and small",
                  "Whether planning for 50 people or 500, we get the job done",
                  "We bring sophisticated fun to your event experience",
                  "Proven track record with numerous successful events",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: "var(--expo-secondary)" }} />
                    <p className="text-lg" style={{ color: "var(--expo-card)" }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden"
                style={{ backgroundColor: "var(--expo-secondary)" }}
              >
                <img
                  src="/images/design-mode/Business_expo.png"
                  alt="Business Expo Planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--expo-primary)" }}
              >
                <Award className="w-16 h-16" style={{ color: "var(--expo-primary-foreground)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Inspired by clean grid layouts */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--expo-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--expo-primary)" }}>
              Our Latest Work
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--expo-muted-foreground)" }}>
              Explore our portfolio of successful business expos that have transformed companies and created lasting
              business relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+1", alt: "Business Expo Gallery 1" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+2", alt: "Business Expo Gallery 2" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+3", alt: "Business Expo Gallery 3" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+4", alt: "Business Expo Gallery 4" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="expo-card-hover aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Inspired by dark themes with contrast */}
      <section className="py-32 px-6 text-center bg-[#000000]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-serif text-5xl md:text-7xl font-bold mb-8 text-balance"
              style={{ color: "var(--expo-primary-foreground)" }}
            >
              Ready to Transform Your Business Expo?
            </h2>
            <p
              className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
              style={{ color: "var(--expo-primary-foreground)" }}
            >
              Our corporate event planning company in Las Vegas has successfully planned and implemented numerous
              events. Yours will be no different.
            </p>
            <button
              className="group px-12 py-6 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 flex items-center gap-3 mx-auto"
              style={{
                backgroundColor: "var(--expo-secondary)",
                color: "var(--expo-secondary-foreground)",
              }}
            >
              Get Your Free Consultation Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
