"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { Trophy, Users, Calendar, ArrowRight, Star, Sparkles, Medal } from "lucide-react"
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
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="https://videos.pexels.com/video-files/11208468/11208468-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#732b6f]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2F5068]/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium tracking-wide uppercase">Championship-Level Excellence</span>
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Sporting Event
            </span>
            <br />
            <span className="text-white">Planning</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
            Elevate your corporate sporting events with professional planning that delivers championship-level
            experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="group relative bg-gradient-to-r from-[#732b6f] to-[#8b3d87] hover:from-[#8b3d87] hover:to-[#a04d9c] text-white px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#732b6f]/30 hover:shadow-xl hover:shadow-[#732b6f]/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
            <motion.button 
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan My Event
            </motion.button>
          </div>
        </motion.div>
        
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

      {/* Services Overview */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#732b6f]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2F5068]/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-[#732b6f]/10 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-[#732b6f]" />
              <span className="text-sm font-medium text-[#732b6f] uppercase tracking-wider">Our Expertise</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Championship-Level Events
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-600">
              What sets Lovely Events Group apart is our proven expertise in producing large-scale, high-impact sporting
              events and premium experiences. Founder Shawanda Holsey brings a wealth of industry knowledge, having led
              logistics and coordination for nationally recognized collegiate events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "From Kickoff to Celebration: Curating Fan Experiences",
                description:
                  "Our team has proudly produced and supported ancillary experiences for major games like the MEAC/SWAC Challenge Kickoff and the Celebration Bowl, delivering everything from VIP receptions and hospitality suites to branded fan activations and curated cultural moments.",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                icon: Users,
                title: "Where Tradition Meets Innovation",
                description:
                  "With a deep respect for the legacy and impact of Historically Black Colleges and Universities (HBCUs), we take pride in creating polished, meaningful experiences that reflect the heart of the culture and the spirit of the game.",
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                icon: Medal,
                title: "Shaping the Culture Around the Game",
                description:
                  "When you partner with Lovely Events Group, you're choosing precision, passion, and peace of mind—so you can focus on enjoying the moment while we handle the rest.",
                gradient: "from-[#2F5068] to-[#4a7a94]",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon container */}
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="relative z-10 font-serif text-2xl font-bold mb-4 text-[#732b6f] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative z-10 leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="relative z-10 mt-6 flex items-center gap-2 text-[#732b6f] group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
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
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#732b6f]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Testimonials</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--sporting-primary)" }}>
              Client Success Stories
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-600">
              See what our clients have to say about their championship experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Lovely Events transformed our annual company tournament into an unforgettable championship experience. The attention to detail and professional execution exceeded all expectations.",
                author: "Sarah Mitchell",
                title: "HR Director, TechCorp Solutions",
                image: "/professional-woman-smiling-corporate-headshot.png",
                rating: 5,
              },
              {
                quote:
                  "The team building sporting event they organized brought our departments together like never before. The energy was incredible and the impact on morale was immediate.",
                author: "Michael Rodriguez",
                title: "Operations Manager, Global Industries",
                image: "/professional-man-smiling-corporate-headshot.png",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Quote mark decoration */}
                <div className="absolute top-6 right-8 text-8xl font-serif text-[#732b6f]/10 leading-none">"</div>
                
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
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-[#732b6f]/10"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#732b6f] to-[#a04d9c] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#732b6f] text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTR2Mkgy NHYtMmgxMnptMC00djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-5 h-5 text-amber-400" />
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Get Started Today</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Ready to Create Your
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Championship Event?
            </span>
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-white/80 max-w-2xl mx-auto">
            Let's discuss how we can bring your sporting event vision to life with professional planning and flawless
            execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="group relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#732b6f] px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Planning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
            
            <motion.button
              className="group bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
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
