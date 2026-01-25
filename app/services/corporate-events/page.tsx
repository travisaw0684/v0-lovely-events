"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Utensils, Music, Award, Sparkles, Star, Trophy } from "lucide-react"

export default function CorporateEventsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--corporate-background)", color: "var(--corporate-foreground)" }}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#732b6f]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#2F5068]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#732b6f]/10 border border-[#732b6f]/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Sparkles className="w-5 h-5 text-[#732b6f]" />
              <span className="text-sm font-medium tracking-wide uppercase text-[#732b6f]">Corporate Excellence</span>
            </motion.div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-[#732b6f] via-[#2F5068] to-[#732b6f] bg-clip-text text-transparent">
                Optimal organization
              </span>
              <br />
              <span className="text-gray-800">meets exquisite design</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-600"
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
            <motion.button
              className="group relative flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#732b6f] to-[#8b3d87] text-white font-semibold transition-all duration-500 shadow-lg shadow-[#732b6f]/30 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-sm font-medium tracking-wide uppercase">Learn Our Untold Story</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>

            <motion.button
              className="group flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[#732b6f]/30 text-[#732b6f] hover:bg-[#732b6f]/5 transition-all duration-500 bg-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">View Our Portfolio</span>
              <div className="w-8 h-8 rounded-full border border-[#732b6f]/30 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Central Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-2xl w-full px-6"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src="/placeholder.svg?height=600&width=800&text=Elegant+Corporate+Event+Setup"
              alt="Elegant Corporate Event Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#732b6f] to-[#a04d9c] flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#732b6f]">500+</p>
                <p className="text-xs text-gray-500">Events Delivered</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-10 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2Mkgy NHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/90">Our Services</span>
            </motion.div>
            
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
              CORPORATE
              <span className="block text-2xl md:text-3xl font-light mt-4 text-white/80">Event Excellence</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/80">
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
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Utensils,
                title: "Food & Drink",
                description: "Delicious catering options that accommodate all dietary restrictions and preferences.",
                gradient: "from-amber-500 to-orange-500",
              },
              {
                icon: MapPin,
                title: "Location",
                description:
                  "Strategic venue selection that creates the perfect ambiance for your corporate gathering.",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Award,
                title: "Event Types",
                description: "From team building to product launches, we handle all corporate celebration needs.",
                gradient: "from-violet-500 to-purple-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
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
            <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="/placeholder.svg?height=600&width=900&text=Corporate+Event+Entertainment"
                alt="Corporate Event Entertainment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#732b6f]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
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
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Our Process</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#732b6f] to-[#2F5068] bg-clip-text text-transparent">
              Our Key Priorities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                number: "01",
                title: "Strategic Partnership",
                description: "We partner with businesses to create events that align with their goals and company culture.",
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                number: "02",
                title: "Innovation Excellence",
                description: "Bringing creative and innovative solutions to every event, making each one unique and memorable.",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                number: "03",
                title: "Seamless Execution",
                description: "Flawless coordination and management from concept to completion, ensuring stress-free events.",
                gradient: "from-[#2F5068] to-[#4a7a94]",
              },
              {
                number: "04",
                title: "Lasting Impact",
                description: "Creating experiences that resonate with attendees and strengthen company relationships.",
                gradient: "from-rose-500 to-pink-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group flex items-start gap-6 p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`text-5xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`}>
                  {item.number}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#732b6f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-serif text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#732b6f] via-amber-600 to-[#2F5068] bg-clip-text text-transparent">
              Innovation, Sustainability & Efficiency
            </h3>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/placeholder.svg?height=400&width=400&text=Corporate+Handshake", alt: "Corporate Partnership", gradient: "from-[#732b6f]/80 to-transparent" },
              { src: "/placeholder.svg?height=400&width=400&text=Modern+Office+Space", alt: "Modern Workspace", gradient: "from-amber-600/80 to-transparent" },
              { src: "/placeholder.svg?height=400&width=400&text=Team+Collaboration", alt: "Team Collaboration", gradient: "from-[#2F5068]/80 to-transparent" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${image.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute bottom-4 left-4 right-4 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
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
            transition={{ duration: 1 }}
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
            
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg">
              Let's Talk About
              <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Your Project
              </span>
            </h2>
            
            <p className="text-xl mb-10 leading-relaxed text-white/80 max-w-2xl mx-auto">
              Ready to create an unforgettable corporate event? Let our team bring your vision to life with precision and creativity.
            </p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#732b6f] px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <PreFooterCTA />

      <Footer />
    </div>
  )
}
