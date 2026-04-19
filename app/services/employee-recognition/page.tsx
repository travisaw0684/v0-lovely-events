"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { PreFooterCTA } from "@/components/PreFooterCTA"
import { motion } from "framer-motion"
import { ArrowRight, Award, Sparkles, Star, Users, Heart, Trophy, CheckCircle } from "lucide-react"

export default function EmployeeRecognitionPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--employee-background)", color: "var(--employee-foreground)" }}
    >
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Corporate+Recognition+Dinner+Event')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#732b6f]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-rose-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white"
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium tracking-wide uppercase">Celebrate Your Team</span>
            </motion.div>
            
            <motion.h1
              className="font-serif font-bold mb-8 leading-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">Employee</span>
              <br />
              <span className="italic bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent">Recognition</span>
              <br />
              <span className="text-white">Dinners</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Show your appreciation & bond as a team with sophisticated recognition events
            </motion.p>

            <motion.button
              className="group relative flex items-center gap-4 px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-[#732b6f] to-[#8b3d87] text-white shadow-lg shadow-[#732b6f]/30 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </motion.button>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-white/80">Events Planned</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center mt-8 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#732b6f] to-[#a04d9c] flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#a04d9c] to-pink-400 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-white/80">Happy Employees</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center mt-8 shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-white/80">Corporate Partners</div>
              </motion.div>
            </div>
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

      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#732b6f]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="employee-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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
                <span className="text-sm font-medium text-[#732b6f] uppercase tracking-wider">Why Recognition Matters</span>
              </motion.div>
              
              <h2
                className="font-serif font-bold mb-8 leading-tight bg-gradient-to-r from-[#732b6f] via-[#8b3d87] to-[#732b6f] bg-clip-text text-transparent"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                }}
              >
                Why You Should Host an Employee Recognition Dinner
              </h2>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl leading-relaxed text-gray-700">
                  Employee recognition dinners are a great way to boost company morale. It lets your employees know that
                  you see the hard work they are doing and you want to reward them with more than just a pizza luncheon.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl leading-relaxed text-gray-700">
                  By taking the time and the funds to host a dinner, your employees will feel more valued and in return,
                  provide you with continuously positive results in their work.
                </p>
              </div>
              <motion.div 
                className="bg-gradient-to-r from-[#732b6f] to-[#8b3d87] rounded-2xl p-8 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-xl leading-relaxed font-semibold text-white">
                  When you invest in your employees, you invest in your business!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#732b6f]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Our Core Principles</span>
            </motion.div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#732b6f]">
              The Power of Recognition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Boost Company Morale",
                description:
                  "Recognition dinners create an environment where employees feel valued and appreciated for their hard work and dedication.",
                icon: Trophy,
                gradient: "from-[#732b6f] to-[#a04d9c]",
              },
              {
                number: "02",
                title: "Strengthen Team Bonds",
                description:
                  "Employees can get to know each other better and bring their spouses to meet the people their significant other spends so much time with.",
                icon: Heart,
                gradient: "from-amber-500 to-orange-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Background number */}
                <div className="absolute -top-6 -right-4 text-[150px] font-bold text-gray-100 leading-none select-none">
                  {item.number}
                </div>
                
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`relative z-10 text-2xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="relative z-10 text-lg leading-relaxed text-gray-600">{item.description}</p>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#732b6f]/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 bg-[#732b6f]/10 rounded-full px-5 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-[#732b6f]" />
            <span className="text-sm font-medium text-[#732b6f] uppercase tracking-wider">Our Promise</span>
          </motion.div>
          
          <motion.h2
            className="font-serif font-bold mb-12 leading-tight bg-gradient-to-r from-[#732b6f] via-[#8b3d87] to-[#732b6f] bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            We Bring Sophisticated Fun to Your Event
          </motion.h2>

          <motion.p
            className="text-xl leading-relaxed mb-16 max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hosting an employee recognition dinner can be stressful work. With so much already on your plate, we can
            take over your stress of planning and turn your vision into a reality. Our expert planners will listen to
            the details you have in mind and provide you with an amazing dinner event that you and your employees will
            remember years down the road.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-w-[200px]"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#732b6f] to-[#a04d9c] flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#732b6f] to-[#a04d9c] bg-clip-text text-transparent">
                50-500
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Employees Served
              </div>
            </motion.div>
            
            <div className="hidden sm:block w-px h-20 bg-gradient-to-b from-transparent via-[#732b6f]/30 to-transparent" />
            
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 min-w-[200px]"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-sm text-gray-500 font-medium">
                Unique Needs Met
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#732b6f]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              <span className="text-sm font-medium text-amber-700 uppercase tracking-wider">Our Portfolio</span>
            </motion.div>
            
            <h2
              className="font-serif font-bold mb-4 bg-gradient-to-r from-[#732b6f] via-[#8b3d87] to-[#732b6f] bg-clip-text text-transparent"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
              }}
            >
              Recognition Events Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into the unforgettable experiences we create for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=400&width=600&text=Elegant+Table+Settings",
                title: "Elegant Table Settings",
                category: "Decor",
              },
              { image: "/placeholder.svg?height=400&width=600&text=Charcuterie+Board", title: "Gourmet Catering", category: "Catering" },
              { image: "/placeholder.svg?height=400&width=600&text=Corporate+Event", title: "Corporate Celebration", category: "Events" },
              {
                image: "/placeholder.svg?height=400&width=600&text=Diverse+Corporate+Event",
                title: "Inclusive Recognition",
                category: "Culture",
              },
              { image: "/placeholder.svg?height=400&width=600&text=Award+Ceremony", title: "Award Presentations", category: "Awards" },
              { image: "/placeholder.svg?height=400&width=600&text=Team+Celebration", title: "Team Bonding", category: "Team" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                    {item.category}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 pb-[25rem] text-center" style={{ backgroundColor: "var(--employee-primary)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-serif font-bold mb-8 leading-tight"
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              color: "var(--employee-primary-foreground)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Get ready for a night that you will never forget!
          </motion.h2>

          <motion.p
            className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--employee-primary-foreground)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you have 50 employees or 500, we can work with you to ensure that all of your unique needs are met.
          </motion.p>

          <motion.button
            className="group flex items-center gap-4 px-12 py-6 text-lg font-semibold rounded-full mx-auto transition-all duration-300"
            style={{
              backgroundColor: "var(--employee-primary-foreground)",
              color: "var(--employee-primary)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      <div className="relative">
        <PreFooterCTA />
        <Footer />
      </div>
    </div>
  )
}
