"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, Sparkles, Camera, Flower, Music, Crown } from "lucide-react"
import { motion } from "framer-motion"

export default function CuratedWeddingsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--wedding-background)", color: "var(--wedding-foreground)" }}
    >
      <Header />

      {/* Hero Section - Inspired by "Optimal organization meets exquisite design" */}
      <section className="wedding-hero-layout px-6 py-20 relative overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://videos.pexels.com/video-files/8775886/8775886-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="max-w-6xl mx-auto text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 text-balance leading-none"
              style={{ color: "var(--wedding-primary)" }}
            >
              Curated wedding experiences
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Transform your wedding dreams into functional works of art with Lovely Events Group's curated design
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              className="px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--wedding-primary)",
                color: "var(--wedding-primary-foreground)",
              }}
            >
              LEARN OUR UNTOLD STORY
            </button>
            <button
              className="px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--wedding-secondary)",
                color: "var(--wedding-secondary-foreground)",
              }}
            >
              DISCOVER OUR SERVICES
            </button>
          </motion.div>
        </div>

        {/* Central Image - Inspired by design reference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto relative z-20"
        >
          <div
            className="aspect-[4/3] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=800&text=Elegant+Wedding+Setup')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </section>

      {/* Philosophy Section - Inspired by ARTIFACT design */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--wedding-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="wedding-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
                style={{ color: "var(--wedding-foreground)" }}
              >
                LOVELY WEDDINGS
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                We believe every wedding should be a true reflection of your love story, crafted with intention and
                executed with flawless attention to detail. Our curated approach ensures every element tells part of
                your unique narrative.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--wedding-accent)" }}
                  >
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Style with Substance</h3>
                    <p className="text-base leading-relaxed">
                      Beautiful aesthetics that carry deep meaning, ensuring every element tells part of your unique
                      story.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--wedding-accent)" }}
                  >
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Intentional Design</h3>
                    <p className="text-base leading-relaxed">
                      Every choice is purposeful, from color palettes to floral arrangements, creating cohesive
                      elegance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="aspect-[3/4] rounded-2xl overflow-hidden"
                style={{
                  backgroundImage: "url('https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/b240e0d138924c80908851527071b653/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/20220219_185025.jpg?dpr=2')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Inspired by Casa Portufornia layout */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Our Wedding Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive wedding planning services that transform your vision into an extraordinary celebration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Complete Wedding Design",
                description:
                  "Full-service design including color palettes, floral concepts, lighting design, and aesthetic coordination.",
              },
              {
                icon: Flower,
                title: "Luxury Floral Arrangements",
                description:
                  "Bespoke floral designs that complement your style, from bridal bouquets to ceremony installations.",
              },
              {
                icon: Camera,
                title: "Vendor Curation",
                description:
                  "Carefully selected network of premium vendors who share our commitment to excellence and style.",
              },
              {
                icon: Music,
                title: "Entertainment Coordination",
                description:
                  "Curated musical experiences from ceremony musicians to reception entertainment that matches your vision.",
              },
              {
                icon: Heart,
                title: "Personalization Services",
                description:
                  "Custom details that reflect your relationship, from monogrammed elements to meaningful traditions.",
              },
              {
                icon: Crown,
                title: "Day-of Coordination",
                description:
                  "Flawless execution ensuring you can focus on celebrating while we manage every detail seamlessly.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="wedding-card-hover p-8 rounded-xl cursor-pointer"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
                }}
              >
                <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--wedding-primary)" }} />
                <h3 className="font-serif text-xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Inspired by Typeform's clean layout */}
      <section className="py-32 px-6" style={{ backgroundColor: "var(--wedding-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Your Wedding Journey
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A carefully crafted process that guides you from initial vision to your perfect wedding day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Vision Discovery",
                description: "Deep conversation about your love story, style preferences, and dream wedding vision.",
              },
              {
                step: "02",
                title: "Design Development",
                description:
                  "Create comprehensive design concepts that bring your vision to life with intentional details.",
              },
              {
                step: "03",
                title: "Curation & Planning",
                description:
                  "Select premium vendors and coordinate all elements to ensure seamless execution of your design.",
              },
              {
                step: "04",
                title: "Flawless Execution",
                description:
                  "Professional coordination on your wedding day, allowing you to be fully present for every moment.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6" style={{ color: "var(--wedding-primary)" }}>
              Love Stories We've Crafted
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Our wedding was absolutely magical. Every detail was perfect and truly reflected who we are as a couple. The intentional design made our day feel like a fairy tale come to life.",
                author: "Isabella & James",
                title: "Married September 2024",
                image: "/placeholder.svg?height=80&width=80&text=I&J",
              },
              {
                quote:
                  "The team understood our vision completely and elevated it beyond our wildest dreams. The style and intention behind every choice made our wedding uniquely ours.",
                author: "Sophia & Michael",
                title: "Married June 2024",
                image: "/placeholder.svg?height=80&width=80&text=S&M",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="wedding-card-hover p-8 rounded-xl"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Inspired by large typography treatments */}
      <section className="py-32 px-6 text-center" style={{ backgroundColor: "var(--wedding-accent)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "var(--wedding-accent-foreground)" }}
            >
              Ready to Create Your Dream Wedding?
            </h2>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: "var(--wedding-accent-foreground)" }}>
              Let's begin crafting a wedding experience that perfectly reflects your love story with style and
              intention.
            </p>
            <button
              className="px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--wedding-primary)",
                color: "var(--wedding-primary-foreground)",
              }}
            >
              Schedule Your Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
