"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Heart, BookOpen, Users, Sparkles, Crown, MessageCircle } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function WeddingOfficiantPage() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--wedding-background)", color: "var(--wedding-foreground)" }}
    >
      <Header />

      {/* Hero Section with Advanced Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.video
          style={{ y: heroY }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/11084952/11084952-sd_640_360_24fps.mp4" type="video/mp4" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/placeholder.svg?height=1080&width=1920&text=Intimate+Wedding+Ceremony+with+Officiant')",
            }}
          />
        </motion.video>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(186, 51, 100, 0.6)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.3,
          }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="font-sans text-5xl md:text-7xl font-light mb-6 text-balance"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          >
            Personalized Wedding Officiant Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
          >
            Backed by over a decade of professional event planning experience, we create ceremonies that are personal,
            polished, and meaningful
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--wedding-secondary)",
              color: "var(--wedding-secondary-foreground)",
            }}
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Looking for a Wedding Officiant Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Looking for a Wedding Officiant in Las Vegas? You're in the Right Place.
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-4xl mx-auto leading-relaxed">
              Backed by over a decade of professional event planning experience, we know how to create ceremonies that
              are personal, polished, and meaningful. Whether you're planning a private elopement or a full-scale
              celebration, our officiant services are designed to reflect your unique love story—handled with warmth,
              professionalism, and care.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Craft a Ceremony Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
        style={{ backgroundColor: "var(--wedding-muted)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="font-sans text-4xl md:text-5xl font-light mb-6"
                style={{ color: "var(--wedding-primary)" }}
              >
                Craft a Ceremony That Feels Like You
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl mb-6 leading-relaxed">
                Your ceremony should be a true reflection of who you are as a couple. We collaborate with you to create
                a personalized script that honors your love story, values, and vision. From selecting meaningful
                readings and music to guiding your vow choices, every element is thoughtfully tailored to make your
                moment feel intentional, heartfelt, and completely your own.
              </motion.p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/placeholder.svg?height=500&width=600&text=Personalized+Wedding+Ceremony"
                alt="Personalized Wedding Ceremony"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experienced Officiant Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                src="/placeholder.svg?height=500&width=600&text=Wedding+Officiant+Portrait"
                alt="Wedding Officiant"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="font-sans text-4xl md:text-5xl font-light mb-6"
                style={{ color: "var(--wedding-primary)" }}
              >
                Experienced, Heartfelt Ceremony Officiant
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl mb-6 leading-relaxed">
                Your ceremony deserves more than just someone reading words—it deserves presence, warmth, and intention.
                As an ordained minister and experienced event professional, I've had the honor of officiating weddings
                that are both meaningful and memorable. My approach is personalized, professional, and rooted in
                creating a ceremony that truly reflects you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* More Than Just I Do Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
        style={{ backgroundColor: "var(--wedding-muted)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={itemVariants} className="animate-wedding-fade-in">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              More Than Just "I Do"
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-4xl mx-auto leading-relaxed">
              While officiating is at the heart of this service, my background in event planning means you'll have
              someone by your side who understands the full flow of a wedding day. From ceremony timing to coordinating
              with vendors on-site, I bring a calm, experienced presence to ensure everything aligns beautifully—so your
              moment feels seamless and stress-free.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Ceremony Packages Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={itemVariants} className="animate-wedding-fade-in">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Custom Ceremony Packages That Fit Your Needs
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
              Every couple deserves a meaningful ceremony—no matter the budget. We offer flexible officiant packages
              designed to match your vision, preferences, and price point.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg mb-8">
              Reach out today to explore options and find the best fit for your celebration.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="font-sans text-4xl md:text-5xl font-light mb-6"
                style={{ color: "var(--wedding-primary)" }}
              >
                Your Story, Your Ceremony
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl mb-6 leading-relaxed">
                Every love story is unique, and your wedding ceremony should reflect the beautiful journey that brought
                you together. As your officiant, I create personalized ceremonies that honor your relationship, values,
                and dreams for the future.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg leading-relaxed">
                Whether you envision a traditional ceremony, a modern celebration, or something uniquely yours, I work
                closely with you to craft meaningful words and rituals that make your wedding day truly unforgettable.
              </motion.p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img
                src="/placeholder.svg?height=500&width=600&text=Wedding+Officiant+Portrait"
                alt="Wedding Officiant"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Overview with Advanced Stagger */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-20 px-6"
        style={{ backgroundColor: "var(--wedding-muted)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Officiant Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive ceremony services that ensure your wedding day is meaningful, memorable, and perfectly
              executed
            </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Custom Ceremony Writing",
                description:
                  "Personalized ceremonies crafted from your love story, incorporating your values, traditions, and dreams.",
              },
              {
                icon: Heart,
                title: "Vow Guidance & Support",
                description:
                  "Assistance with writing personal vows that beautifully express your feelings and commitments.",
              },
              {
                icon: Users,
                title: "Pre-Marriage Counseling",
                description:
                  "Optional sessions to discuss your relationship, expectations, and tools for a strong marriage.",
              },
              {
                icon: Sparkles,
                title: "Unity Ceremonies",
                description:
                  "Meaningful rituals like handfasting, sand ceremonies, or candle lighting to symbolize your union.",
              },
              {
                icon: Crown,
                title: "Rehearsal Coordination",
                description:
                  "Professional rehearsal guidance ensuring everyone knows their role for a smooth ceremony.",
              },
              {
                icon: MessageCircle,
                title: "Ongoing Support",
                description:
                  "Available for questions and guidance throughout your engagement and wedding planning process.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-8 rounded-xl cursor-pointer"
                style={{
                  backgroundColor: "var(--wedding-background)",
                  border: "1px solid var(--wedding-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <service.icon className="w-12 h-12 mb-6" style={{ color: "var(--wedding-primary)" }} />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold mb-4" style={{ color: "var(--wedding-primary)" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Ceremony Types */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Ceremony Styles
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto leading-relaxed">
              From intimate elopements to grand celebrations, I officiate ceremonies that reflect your style and beliefs
            </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Traditional Ceremonies",
                description: "Classic wedding ceremonies with time-honored traditions and formal structure.",
              },
              {
                title: "Modern Celebrations",
                description: "Contemporary ceremonies with personalized elements and creative expressions of love.",
              },
              {
                title: "Interfaith Unions",
                description: "Respectful ceremonies that honor multiple religious or cultural traditions.",
              },
              {
                title: "Intimate Elopements",
                description: "Private ceremonies for couples seeking a more personal and intimate celebration.",
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="text-center p-6 rounded-xl cursor-pointer"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
                }}
              >
                <motion.h3
                  variants={itemVariants}
                  className="font-serif text-xl font-bold mb-4"
                  style={{ color: "var(--wedding-primary)" }}
                >
                  {type.title}
                </motion.h3>
                <motion.p variants={itemVariants} className="leading-relaxed">
                  {type.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section with Timeline Animation */}
      <motion.section
        ref={processRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
        style={{ backgroundColor: "var(--wedding-muted)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Our Journey Together
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto leading-relaxed">
              A collaborative process that ensures your ceremony is meaningful, personal, and perfectly executed
            </motion.p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Get to know each other and discuss your vision, values, and ceremony preferences.",
              },
              {
                step: "02",
                title: "Ceremony Creation",
                description:
                  "Craft your personalized ceremony script incorporating your love story and chosen elements.",
              },
              {
                step: "03",
                title: "Review & Refinement",
                description:
                  "Review the ceremony together, make adjustments, and finalize all details to your satisfaction.",
              },
              {
                step: "04",
                title: "Wedding Day",
                description:
                  "Arrive early, conduct final preparations, and officiate your beautiful ceremony with confidence.",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center relative">
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-transparent"
                    style={{ transformOrigin: "left" }}
                  />
                )}

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(186, 51, 100, 0.3)",
                  }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold relative z-10"
                  style={{
                    backgroundColor: "var(--wedding-primary)",
                    color: "var(--wedding-primary-foreground)",
                  }}
                >
                  {process.step}
                </motion.div>

                <motion.h3
                  variants={itemVariants}
                  className="font-serif text-xl font-bold mb-4"
                  style={{ color: "var(--wedding-primary)" }}
                >
                  {process.title}
                </motion.h3>
                <motion.p variants={itemVariants} className="leading-relaxed">
                  {process.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto mb-[100px]">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="font-sans text-4xl md:text-5xl font-light mb-6"
              style={{ color: "var(--wedding-primary)" }}
            >
              Couples We've United
            </motion.h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Our ceremony was absolutely perfect. The personalized vows and meaningful rituals made our wedding day feel so special and authentic to who we are as a couple.",
                author: "Rachel & David",
                title: "Married August 2024",
                image: "/placeholder.svg?height=80&width=80&text=R&D",
              },
              {
                quote:
                  "The guidance and support throughout our engagement was invaluable. Our officiant helped us create a ceremony that honored both our families' traditions beautifully.",
                author: "Maria & Jonathan",
                title: "Married October 2024",
                image: "/placeholder.svg?height=80&width=80&text=M&J",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-8 rounded-xl cursor-pointer"
                style={{
                  backgroundColor: "var(--wedding-card)",
                  border: "1px solid var(--wedding-border)",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.p variants={itemVariants} className="text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </motion.p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <motion.h4
                      variants={itemVariants}
                      className="font-semibold"
                      style={{ color: "var(--wedding-primary)" }}
                    >
                      {testimonial.author}
                    </motion.h4>
                    <motion.p
                      variants={itemVariants}
                      className="text-sm"
                      style={{ color: "var(--wedding-muted-foreground)" }}
                    >
                      {testimonial.title}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section with Magnetic Effect - CONVERTED TO PRE-FOOTER CTA */}
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-6"
        >
          <div
            className="rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden"
            style={{
              backgroundColor: "var(--wedding-background)",
              border: "2px solid var(--wedding-border)",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-transparent opacity-30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-transparent opacity-20 rounded-full blur-2xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left content */}
              <motion.div variants={itemVariants}>
                <motion.h2
                  variants={itemVariants}
                  className="font-sans text-3xl md:text-4xl font-light mb-4"
                  style={{ color: "var(--wedding-secondary)" }}
                >
                  Get in Touch to Arrange a Wedding
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: "var(--wedding-foreground)" }}
                >
                  Every wedding is unique, and we strive to provide personalized service to each of our couples.
                </motion.p>
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(186, 51, 100, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 py-3 text-lg font-semibold rounded-full"
                  style={{
                    backgroundColor: "var(--wedding-secondary)",
                    color: "var(--wedding-secondary-foreground)",
                  }}
                >
                  Book Now
                </motion.button>
              </motion.div>

              {/* Right image */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-purple-200 opacity-20 blur-xl" />
                <img
                  src="/placeholder.svg?height=400&width=500&text=Happy+Wedding+Couple"
                  alt="Happy Wedding Couple"
                  className="relative z-10 rounded-2xl shadow-lg w-full object-cover"
                  style={{ aspectRatio: "5/4" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

       <div className="relative">
        <PreFooterCTA />
        <Footer />
      </div>
      </div>
    </div>
  )
}
