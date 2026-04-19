"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, TrendingUp, Award, CheckCircle, Sparkles, Star, Briefcase } from "lucide-react"

export default function BusinessExperiencePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--expo-background)", color: "var(--expo-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-105">
            <source src="https://videos.pexels.com/video-files/7648337/7648337-sd_640_360_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Video overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#732b6f]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#2F5068]/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Briefcase className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/90">Business Excellence</span>
            </motion.div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-none">
              <span className="text-white drop-shadow-2xl">Sophisticated fun meets</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">business success</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12 text-gray-200">
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
            <motion.button
              className="group relative px-12 py-6 rounded-full text-lg font-semibold transition-all duration-500 flex items-center gap-3 bg-gradient-to-r from-[#732b6f] to-[#8b3d87] text-white shadow-lg shadow-[#732b6f]/30 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
            <motion.button
              className="px-12 py-6 rounded-full text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-500 bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/60 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#732b6f]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#732b6f]/10 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 text-[#732b6f]" />
              <span className="text-sm font-medium text-[#732b6f] uppercase tracking-wider">Why Choose Us</span>
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#732b6f] to-[#2F5068] bg-clip-text text-transparent">
              Benefits of Business Expos
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Create lasting relationships that will grow your business into the future while increasing brand awareness
              through expertly curated expo experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                icon: Users,
                title: "Target Market Engagement",
                description:
                  "Further engage with your target market and create those lasting relationships that drive business growth and customer loyalty.",
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                number: "02",
                icon: Target,
                title: "Brand Awareness",
                description:
                  "Get your products and services into the minds of potential customers through strategic expo positioning and memorable experiences.",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                number: "03",
                icon: TrendingUp,
                title: "Business Growth",
                description:
                  "Transform expo connections into measurable business outcomes with our proven relationship-building strategies.",
                gradient: "from-[#2F5068] to-[#4a7a94]",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.number}
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${benefit.gradient} bg-opacity-10 flex items-center justify-center`}>
                    <benefit.icon className={`w-6 h-6 text-[#732b6f]`} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#732b6f] transition-colors">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-white/90 uppercase tracking-wider">Our Process</span>
              </motion.div>
              
              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
                Guidance From
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">Start to Finish</span>
              </h2>
              <p className="text-xl leading-relaxed mb-12 text-white/80">
                When you work with us, you can spend time focusing on other important things. We will work with you to
                determine your vision and then use our expertise to make it happen.
              </p>

              <div className="space-y-6">
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
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-white/90">
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
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img
                  src="/images/design-mode/Business_expo.png"
                  alt="Business Expo Planning"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#732b6f] to-[#a04d9c] flex items-center justify-center shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#732b6f]">500+</p>
                    <p className="text-xs text-gray-500">Successful Events</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second stats card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-amber-600">5.0</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#732b6f]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Portfolio</span>
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#732b6f] to-[#2F5068] bg-clip-text text-transparent">
              Our Latest Work
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              Explore our portfolio of successful business expos that have transformed companies and created lasting
              business relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+1", alt: "Business Expo Gallery 1", gradient: "from-[#732b6f]/80 to-transparent" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+2", alt: "Business Expo Gallery 2", gradient: "from-amber-600/80 to-transparent" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+3", alt: "Business Expo Gallery 3", gradient: "from-[#2F5068]/80 to-transparent" },
              { src: "/placeholder.svg?height=400&width=300&text=Gallery+4", alt: "Business Expo Gallery 4", gradient: "from-rose-600/80 to-transparent" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${image.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute bottom-4 left-4 right-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg drop-shadow-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 pb-[25rem] text-center relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Get Started</span>
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-balance text-white drop-shadow-lg">
              Ready to Transform Your
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Business Expo?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto text-white/80">
              Our corporate event planning company in Las Vegas has successfully planned and implemented numerous
              events. Yours will be no different.
            </p>
            
            <motion.button
              className="group relative px-12 py-6 rounded-full text-lg font-bold transition-all duration-500 flex items-center gap-3 mx-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#732b6f] shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Your Free Consultation Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <div className="relative">
        <PreFooterCTA />
        <Footer />
      </div>
    </div>
  )
}
