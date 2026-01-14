"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PreFooterCTA() {
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="absolute -top-[20rem] left-1/2 transform -translate-x-1/2 z-20 w-full max-w-6xl px-6"
    >
      <div className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative border-2 border-[#D4AF37]/30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4789]/95 via-[#C2185B]/95 to-[#8B4789]/95 animate-gradient-shift" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="grid md:grid-cols-2 relative">
          {/* Left side - Gradient background with content */}
          <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center z-10">
            <motion.div variants={itemVariants} className="relative">
              <motion.p
                variants={itemVariants}
                className="font-serif text-2xl md:text-3xl mb-3 text-[#D4AF37] italic tracking-wide"
              >
                Ready to celebrate?
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg"
              >
                Get in Touch to Arrange Your Event
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl mb-10 leading-relaxed text-white/95 max-w-xl">
                Every event is unique, and we strive to provide personalized service to each of our clients.
              </motion.p>

              <Link href="/contact">
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="px-10 py-4 text-lg font-bold rounded-full bg-[#D4AF37] text-[#4A1942] hover:bg-[#E5C158] transition-colors shadow-xl uppercase tracking-wider border-2 border-[#E5C158]"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Image section */}
          <motion.div variants={itemVariants} className="relative bg-gray-100 min-h-[400px] md:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#8B4789]/30 z-10" />
            <img
              src="/elegant-event-celebration-couple-smiling.jpg"
              alt="Happy Event Celebration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
