"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { motion } from "framer-motion"
import { ArrowRight, Star, CheckCircle, Sparkles, Heart, Palette, Award } from "lucide-react"

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
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50" />
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-[80px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-rose-300/30 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-fuchsia-300/20 to-amber-300/20 rounded-full blur-[60px]"
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
        
        {/* Floating balloon shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-10 rounded-full opacity-20"
              style={{
                background: `linear-gradient(135deg, ${['#f472b6', '#fb923c', '#fbbf24', '#a78bfa', '#34d399', '#f87171'][i]} 0%, transparent 100%)`,
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="balloon-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-200/50 rounded-full px-5 py-2"
                >
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium text-pink-700 tracking-wider uppercase">Lovely Events Group</span>
                </motion.div>
                
                <h1 className="font-serif text-6xl md:text-8xl font-bold leading-none">
                  <motion.span 
                    className="block bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Balloon
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-amber-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Artistry
                  </motion.span>
                  <motion.span 
                    className="block text-4xl md:text-5xl font-light mt-4 text-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    meets exquisite design
                  </motion.span>
                </h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl leading-relaxed max-w-lg text-gray-600"
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
                <motion.button
                  className="group relative px-10 py-5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-pink-500 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </motion.button>
                <motion.button
                  className="px-10 py-5 rounded-full font-semibold border-2 border-pink-400/50 text-pink-600 hover:bg-pink-50 transition-all duration-300 backdrop-blur-sm bg-transparent"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-pink-200/50">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Elegant+Balloon+Installation"
                  alt="Elegant Balloon Installation"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-pink-500/10" />
              </div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-400/30">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                      500+
                    </p>
                    <p className="text-sm text-gray-600">Events Created</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second stats card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-amber-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">100%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-pink-500/60 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-pink-300/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-pink-400 to-orange-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-100/50 to-transparent rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-amber-100 rounded-full px-5 py-2 mb-6"
            >
              <Palette className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-700 uppercase tracking-wider">Our Creations</span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants} 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-amber-500 bg-clip-text text-transparent"
            >
              What We Create
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600"
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
                gradient: "from-pink-500 to-rose-500",
                icon: Sparkles,
              },
              {
                title: "Ceiling Installations",
                description: "Dramatic overhead displays that transform any space",
                image: "/placeholder.svg?height=400&width=600&text=Ceiling+Installation",
                price: "From $500",
                features: ["Helium balloons", "Professional rigging", "Impact lighting"],
                gradient: "from-orange-500 to-amber-500",
                icon: Star,
              },
              {
                title: "Sculptural Pieces",
                description: "Artistic balloon sculptures as centerpieces and focal points",
                image: "/placeholder.svg?height=400&width=600&text=Balloon+Sculpture",
                price: "From $250",
                features: ["Custom designs", "Themed elements", "Photo-ready"],
                gradient: "from-fuchsia-500 to-pink-500",
                icon: Award,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100/50"
                whileHover={{ y: -10 }}
              >
                {/* Image with overlay */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Price badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {service.price}
                  </div>
                  
                  {/* Icon */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={`font-serif text-2xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white shadow-md hover:shadow-lg relative overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </motion.button>
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

      <section className="py-32 px-6 pb-[25rem]" style={{ backgroundColor: "var(--balloon-primary)" }}>
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

      <div className="relative">
      {/* PreFooterCTA before Footer */}
      <PreFooterCTA />

      {/* Footer component for consistent site navigation */}
      <Footer />
      </div>
    </div>
  )
}
