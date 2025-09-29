"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function EmployeeRecognitionPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--employee-background)", color: "var(--employee-foreground)" }}
    >
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background video with overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Corporate+Recognition+Dinner+Event')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h1
              className="font-serif font-bold mb-8 leading-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Employee
              <br />
              <span className="italic">Recognition</span>
              <br />
              Dinners
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-12 font-light leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Show your appreciation & bond as a team with sophisticated recognition events
            </motion.p>

            <motion.button
              className="group flex items-center gap-4 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "var(--employee-primary)",
                color: "var(--employee-primary-foreground)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Events Planned</div>
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center mt-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="employee-asymmetric-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2
                className="font-serif font-bold mb-8 leading-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 6rem)",
                  color: "var(--employee-primary)",
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
              <p className="text-xl leading-relaxed">
                Employee recognition dinners are a great way to boost company morale. It lets your employees know that
                you see the hard work they are doing and you want to reward them with more than just a pizza luncheon.
              </p>
              <p className="text-xl leading-relaxed">
                By taking the time and the funds to host a dinner, your employees will feel more valued and in return,
                provide you with continuously positive results in their work.
              </p>
              <p className="text-xl leading-relaxed font-semibold" style={{ color: "var(--employee-primary)" }}>
                When you invest in your employees, you invest in your business!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ backgroundColor: "var(--employee-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-wider mb-4" style={{ color: "var(--employee-accent)" }}>
              Our Core Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                number: "1",
                title: "Boost Company Morale",
                description:
                  "Recognition dinners create an environment where employees feel valued and appreciated for their hard work and dedication.",
              },
              {
                number: "2",
                title: "Strengthen Team Bonds",
                description:
                  "Employees can get to know each other better and bring their spouses to meet the people their significant other spends so much time with.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-8xl font-bold opacity-20" style={{ color: "var(--employee-primary)" }}>
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold" style={{ color: "var(--employee-primary)" }}>
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-serif font-bold mb-12 leading-tight"
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              color: "var(--employee-primary)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            We Bring Sophisticated Fun to Your Event
          </motion.h2>

          <motion.p
            className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
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
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "var(--employee-primary)" }}>
                50-500
              </div>
              <div className="text-sm" style={{ color: "var(--employee-accent)" }}>
                Employees Served
              </div>
            </div>
            <div className="hidden sm:block w-px h-12" style={{ backgroundColor: "var(--employee-border)" }} />
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "var(--employee-primary)" }}>
                100%
              </div>
              <div className="text-sm" style={{ color: "var(--employee-accent)" }}>
                Unique Needs Met
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6" style={{ backgroundColor: "var(--employee-muted)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-serif font-bold mb-8"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--employee-primary)",
              }}
            >
              Recognition Events Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/placeholder.svg?height=400&width=600&text=Elegant+Table+Settings",
                title: "Elegant Table Settings",
              },
              { image: "/placeholder.svg?height=400&width=600&text=Charcuterie+Board", title: "Gourmet Catering" },
              { image: "/placeholder.svg?height=400&width=600&text=Corporate+Event", title: "Corporate Celebration" },
              {
                image: "/placeholder.svg?height=400&width=600&text=Diverse+Corporate+Event",
                title: "Inclusive Recognition",
              },
              { image: "/placeholder.svg?height=400&width=600&text=Award+Ceremony", title: "Award Presentations" },
              { image: "/placeholder.svg?height=400&width=600&text=Team+Celebration", title: "Team Bonding" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl employee-card-hover cursor-pointer"
                style={{ backgroundColor: "var(--employee-card)" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center" style={{ backgroundColor: "var(--employee-primary)" }}>
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

      <Footer />
    </div>
  )
}
