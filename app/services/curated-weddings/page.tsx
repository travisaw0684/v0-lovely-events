"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { Heart, Sparkles, Camera, Flower, Music, Crown, ArrowRight, Star, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function CuratedWeddingsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--wedding-background)", color: "var(--wedding-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 scale-105">
          <source src="https://videos.pexels.com/video-files/8775886/8775886-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400/20 rounded-full blur-[100px] animate-pulse z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/15 rounded-full blur-[120px] animate-pulse z-10" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-300/20 rounded-full blur-[80px] animate-pulse z-10" style={{ animationDelay: "0.5s" }} />

        <div className="max-w-6xl mx-auto text-center relative z-20">
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
              <Heart className="w-5 h-5 text-rose-400" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/90">Your Love Story</span>
            </motion.div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-none">
              <span className="text-white drop-shadow-2xl">Curated</span>
              <br />
              <span className="bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">wedding experiences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
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
            <motion.button
              className="group relative px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                LEARN OUR UNTOLD STORY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
            <motion.button
              className="px-12 py-5 rounded-full text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              DISCOVER OUR SERVICES
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/60 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/30 rounded-full blur-[100px]" />
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
                className="inline-flex items-center gap-2 bg-rose-100 rounded-full px-5 py-2 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-rose-600 uppercase tracking-wider">Our Philosophy</span>
              </motion.div>
              
              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                LOVELY WEDDINGS
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                We believe every wedding should be a true reflection of your love story, crafted with intention and
                executed with flawless attention to detail. Our curated approach ensures every element tells part of
                your unique narrative.
              </p>
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Style with Substance",
                    description: "Beautiful aesthetics that carry deep meaning, ensuring every element tells part of your unique story.",
                    gradient: "from-rose-500 to-pink-500",
                  },
                  {
                    number: "02",
                    title: "Intentional Design",
                    description: "Every choice is purposeful, from color palettes to floral arrangements, creating cohesive elegance.",
                    gradient: "from-pink-500 to-rose-400",
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-white text-sm font-bold">{item.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-rose-600 transition-colors">{item.title}</h3>
                      <p className="text-base leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-rose-200">
                <img
                  src="https://static.mywebsites360.com/d3536c889e90455b8c18f12a5d7c8646/i/b240e0d138924c80908851527071b653/1/2GTQbgiNxerRr5gcT6hkjr8dsnb6NBTxXMi2obS?dpr=2/20220219_185025.jpg?dpr=2"
                  alt="Beautiful wedding setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-rose-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-rose-600">200+</p>
                    <p className="text-xs text-gray-500">Dream Weddings</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second floating card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-rose-100"
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

      {/* Services Grid */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[100px]" />
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
              className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Crown className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-600 uppercase tracking-wider">Our Services</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Our Wedding Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
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
                gradient: "from-rose-500 to-pink-500",
              },
              {
                icon: Flower,
                title: "Luxury Floral Arrangements",
                description:
                  "Bespoke floral designs that complement your style, from bridal bouquets to ceremony installations.",
                gradient: "from-pink-500 to-rose-400",
              },
              {
                icon: Camera,
                title: "Vendor Curation",
                description:
                  "Carefully selected network of premium vendors who share our commitment to excellence and style.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: Music,
                title: "Entertainment Coordination",
                description:
                  "Curated musical experiences from ceremony musicians to reception entertainment that matches your vision.",
                gradient: "from-violet-500 to-purple-500",
              },
              {
                icon: Heart,
                title: "Personalization Services",
                description:
                  "Custom details that reflect your relationship, from monogrammed elements to meaningful traditions.",
                gradient: "from-red-500 to-rose-500",
              },
              {
                icon: Crown,
                title: "Day-of Coordination",
                description:
                  "Flawless execution ensuring you can focus on celebrating while we manage every detail seamlessly.",
                gradient: "from-fuchsia-500 to-pink-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-gray-800 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white uppercase tracking-wider">Your Journey</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Your Wedding Journey
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
              A carefully crafted process that guides you from initial vision to your perfect wedding day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-white/50 via-amber-200 to-white/50" />
            
            {[
              {
                step: "01",
                title: "Vision Discovery",
                description: "Deep conversation about your love story, style preferences, and dream wedding vision.",
                gradient: "from-white to-rose-100",
              },
              {
                step: "02",
                title: "Design Development",
                description:
                  "Create comprehensive design concepts that bring your vision to life with intentional details.",
                gradient: "from-white to-pink-100",
              },
              {
                step: "03",
                title: "Curation & Planning",
                description:
                  "Select premium vendors and coordinate all elements to ensure seamless execution of your design.",
                gradient: "from-white to-fuchsia-100",
              },
              {
                step: "04",
                title: "Flawless Execution",
                description:
                  "Professional coordination on your wedding day, allowing you to be fully present for every moment.",
                gradient: "from-white to-amber-100",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${process.gradient} flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-rose-600 shadow-xl relative z-10`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {process.step}
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-4 text-white">
                  {process.title}
                </h3>
                <p className="leading-relaxed text-white/80">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-rose-50">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Testimonials</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Love Stories We've Crafted
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our wedding was absolutely magical. Every detail was perfect and truly reflected who we are as a couple. The intentional design made our day feel like a fairy tale come to life.",
                author: "Isabella & James",
                title: "Married September 2024",
                image: "/placeholder.svg?height=80&width=80&text=I&J",
                rating: 5,
              },
              {
                quote:
                  "The team understood our vision completely and elevated it beyond our wildest dreams. The style and intention behind every choice made our wedding uniquely ours.",
                author: "Sophia & Michael",
                title: "Married June 2024",
                image: "/placeholder.svg?height=80&width=80&text=S&M",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-100"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-6 right-8 text-8xl font-serif text-rose-100 leading-none">"</div>
                
                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-rose-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-rose-600 text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Start Your Journey</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Create Your
              <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                Dream Wedding?
              </span>
            </h2>
            <p className="text-xl mb-12 leading-relaxed text-white/90 max-w-2xl mx-auto">
              Let's begin crafting a wedding experience that perfectly reflects your love story with style and
              intention.
            </p>
            
            <motion.button
              className="group relative px-12 py-5 text-lg font-bold rounded-full transition-all duration-300 bg-white text-rose-600 shadow-lg shadow-white/30 hover:shadow-xl hover:shadow-white/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50/0 via-rose-100 to-rose-50/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <PreFooterCTA />

      <Footer />
    </div>
  )
}
