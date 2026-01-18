"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { Users, MapPin, Palette, Headphones, CheckCircle, Star, Building, Phone, Mail, ChevronDown, Award, Sparkles, ArrowRight, Trophy } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function CorporateMilestonesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="https://videos.pexels.com/video-files/8244257/8244257-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#732b6f]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#2F5068]/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

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
            <span className="text-sm font-medium tracking-wide uppercase">Celebrating Excellence</span>
          </motion.div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              Celebrate Corporate
            </span>
            <br />
            <span className="text-white">Milestones</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 font-light leading-relaxed max-w-3xl mx-auto text-gray-200">
            We handle every detail so your company can focus on celebrating achievements and inspiring continued
            excellence
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
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
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
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#732b6f]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />
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
              <span className="text-sm font-medium text-[#732b6f] uppercase tracking-wider">Our Services</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">What We Do</h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed text-muted-foreground">
              Celebrating milestones boosts team morale, recognizes achievements, and reinforces your brand identity.
              Our comprehensive approach ensures every detail reflects your company's success story.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Venue Selection & Design",
                description: "Prestigious Las Vegas venues tailored to your milestone and guest count",
                image: "/placeholder.svg?height=400&width=600&text=Luxury+Vegas+Venue",
                badge: "Premium Locations",
                price: "Custom Quote",
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                icon: Users,
                title: "Vendor Coordination",
                description: "Seamless management of catering, entertainment, and technical services",
                image: "/placeholder.svg?height=400&width=600&text=Event+Coordination",
                badge: "Full Service",
                price: "Included",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                icon: Palette,
                title: "Branding & Theming",
                description: "Custom design elements that reflect your company's identity and achievement",
                image: "/placeholder.svg?height=400&width=600&text=Corporate+Branding",
                badge: "Custom Design",
                price: "From $2K",
                gradient: "from-[#2F5068] to-[#4a7a94]",
              },
              {
                icon: Headphones,
                title: "Day-of Event Management",
                description: "Professional on-site coordination ensuring flawless execution",
                image: "/placeholder.svg?height=400&width=600&text=Event+Management",
                badge: "Expert Team",
                price: "Peace of Mind",
                gradient: "from-rose-500 to-pink-600",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="relative h-[420px] rounded-2xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Background Image */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90 group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/95 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  {/* Top Section - Icon & Price */}
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-lg font-bold px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg`}>{service.price}</span>
                  </div>

                  {/* Bottom Section - Title, Description, Badge */}
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-balance">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed mb-4 text-sm">{service.description}</p>

                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`bg-gradient-to-r ${service.gradient} px-4 py-1.5 rounded-full text-sm font-medium shadow-md`}>
                        {service.badge}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <motion.button 
                      className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-gray-200 to-white/0 -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">How We Work</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">Our Process</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Simple, scannable steps that ensure your milestone celebration exceeds expectations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#732b6f] via-amber-500 to-[#2F5068]" />
            
            {[
              {
                step: "01",
                title: "Discovery & Vision Call",
                description:
                  "We understand your milestone's significance and develop a celebration strategy aligned with your goals",
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                step: "02",
                title: "Event Design & Logistics",
                description:
                  "Create detailed plans including venue selection, design concepts, and timeline coordination",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                step: "03",
                title: "Vendor Coordination & Setup",
                description: "Manage all vendor relationships and oversee setup to ensure everything is perfect",
                gradient: "from-[#2F5068] to-[#4a7a94]",
              },
              {
                step: "04",
                title: "Day-of Execution & Support",
                description:
                  "Professional on-site management ensuring flawless execution of your milestone celebration",
                gradient: "from-rose-500 to-pink-600",
              },
            ].map((process, index) => (
              <motion.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${process.gradient} text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg relative z-10`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {process.step}
                </motion.div>
                <h3 className="font-serif text-xl font-bold mb-4 text-primary">{process.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Our Portfolio</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Celebrating success stories across Las Vegas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/placeholder.svg?height=300&width=400&text=Tech+Company+25th+Anniversary",
                title: "25-Year Anniversary Celebration",
                client: "TechCorp Industries",
                description: "Elegant gala for 300 guests celebrating a quarter-century of innovation",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=IPO+Launch+Event",
                title: "IPO Launch Event",
                client: "StartupSuccess Inc.",
                description: "Sophisticated celebration marking the company's public offering milestone",
              },
              {
                image: "/placeholder.svg?height=300&width=400&text=Product+Launch+Gala",
                title: "Product Launch Gala",
                client: "Innovation Labs",
                description: "High-energy event unveiling groundbreaking technology to 500+ attendees",
              },
            ].map((portfolio, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={portfolio.image || "/placeholder.svg"}
                  alt={portfolio.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2 text-primary">{portfolio.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">{portfolio.client}</p>
                  <p className="text-card-foreground leading-relaxed">{portfolio.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Case Study: TechCorp's 25th Anniversary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Problem</h4>
                <p className="text-card-foreground">
                  TechCorp needed to celebrate their 25th anniversary while maintaining their reputation for innovation
                  and bringing together employees from 5 different offices.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Solution</h4>
                <p className="text-card-foreground">
                  We created a tech-forward celebration featuring interactive displays of company history, live
                  streaming for remote employees, and a sophisticated gala dinner.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-primary">Outcome</h4>
                <p className="text-card-foreground">
                  300+ attendees, 95% employee satisfaction rating, and significant media coverage that reinforced
                  TechCorp's market leadership position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Sample Event Types</h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              Custom packages tailored to your needs and guest count
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Small Team Anniversary",
                subtitle: "50-100 guests",
                features: [
                  "Intimate venue selection",
                  "Custom branding & decor",
                  "Professional photography",
                  "Catered reception",
                  "Day-of coordination",
                ],
                note: "Custom packages starting at competitive rates",
              },
              {
                title: "Large Corporate Celebration",
                subtitle: "500+ guests",
                features: [
                  "Premium venue booking",
                  "Full event production",
                  "Multi-course dining",
                  "Entertainment coordination",
                  "VIP guest management",
                  "Media & PR support",
                ],
                note: "Tailored to your specific requirements",
              },
              {
                title: "Product Launch Event",
                subtitle: "100-300 guests",
                features: [
                  "Interactive product displays",
                  "Media coordination",
                  "Branded environment design",
                  "Technical AV support",
                  "Networking reception",
                ],
                note: "Designed to maximize impact and engagement",
              },
            ].map((package_, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-2xl font-bold mb-2 text-primary">{package_.title}</h3>
                <p className="text-accent font-semibold mb-6">{package_.subtitle}</p>
                <ul className="space-y-3 mb-6">
                  {package_.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">{package_.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Client Logos */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
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
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">What Our Clients Say</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote:
                  "Lovely Events transformed our 25th anniversary into an unforgettable celebration. Their attention to detail and understanding of our company culture made all the difference. Every guest left feeling proud to be part of our organization.",
                author: "Margaret Foster",
                title: "CEO, Foster Industries",
                image: "/placeholder.svg?height=80&width=80&text=MF",
                rating: 5,
              },
              {
                quote:
                  "The IPO celebration they planned exceeded all expectations. From stakeholder management to the final toast, every moment was perfectly orchestrated. It was the ideal way to mark this historic milestone for our company.",
                author: "James Patterson",
                title: "Chairman, Patterson Technologies",
                image: "/placeholder.svg?height=80&width=80&text=JP",
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
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#732b6f] text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary">Trusted by Leading Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                "/placeholder.svg?height=60&width=120&text=TechCorp",
                "/placeholder.svg?height=60&width=120&text=Foster+Industries",
                "/placeholder.svg?height=60&width=120&text=Patterson+Tech",
                "/placeholder.svg?height=60&width=120&text=Innovation+Labs",
              ].map((logo, index) => (
                <img
                  key={index}
                  src={logo || "/placeholder.svg"}
                  alt="Client Logo"
                  className="mx-auto h-12 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What size events do you handle?",
                answer:
                  "We handle corporate milestone events of all sizes, from intimate team celebrations of 25 guests to large-scale corporate galas with 1000+ attendees. Our scalable approach ensures every event receives the same level of attention and professionalism.",
              },
              {
                question: "Do you only work in Las Vegas?",
                answer:
                  "While Las Vegas is our home base and specialty, we also coordinate corporate milestone events throughout Nevada and can arrange destination celebrations. Las Vegas offers unique venues and entertainment options that make milestone celebrations truly memorable.",
              },
              {
                question: "How far in advance should we book?",
                answer:
                  "We recommend booking 3-6 months in advance for most corporate milestone events. This allows adequate time for venue selection, vendor coordination, and detailed planning. However, we can accommodate shorter timelines when necessary.",
              },
              {
                question: "Can you help with branding and company messaging?",
                answer:
                  "We work closely with your marketing and communications teams to ensure all event elements align with your brand identity and messaging. This includes custom signage, branded materials, and coordinated visual elements throughout the event.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-background rounded-lg border border-border">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-primary">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lovely Events Group */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Choose Lovely Events Group
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: "15+ Years Experience",
                description: "Proven track record with 500+ successful corporate events in Las Vegas",
              },
              {
                icon: Users,
                title: "Extensive Vendor Network",
                description: "Exclusive partnerships with premier venues, caterers, and entertainment providers",
              },
              {
                icon: CheckCircle,
                title: "Stress-Free Planning",
                description: "Complete project management from concept to execution, handling every detail",
              },
              {
                icon: MapPin,
                title: "Unique Vegas Venues",
                description: "Access to exclusive locations that create unforgettable milestone celebrations",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-serif text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#732b6f] via-[#5a2258] to-[#2F5068]">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
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
            Make Your Next Milestone
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-white/80 max-w-2xl mx-auto">
            Ready to celebrate your company's success with a milestone event that inspires and motivates? Let's create
            something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              className="group relative bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#732b6f] px-10 py-5 text-lg font-bold rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Today – Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>(702) 555-0123</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>hello@lovelyevents.com</span>
            </div>
          </div>
        </motion.div>
      </section>

      <PreFooterCTA />

      <Footer />
    </div>
  )
}
