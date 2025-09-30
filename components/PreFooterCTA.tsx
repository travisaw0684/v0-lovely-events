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
      <div className="rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Left side - Gradient background with content */}
        <div className="grid md:grid-cols-2 relative">
          {/* Gradient background section */}
          <div
            className="relative p-8 md:p-12 flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            }}
          >
            {/* Diagonal wave separator - visible on desktop */}
            <div
              className="hidden md:block absolute top-0 right-0 h-full w-32"
              style={{
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
                transform: "translateX(100%)",
              }}
            />

            <motion.div variants={itemVariants} className="relative z-10">
              <motion.p variants={itemVariants} className="font-serif text-2xl md:text-3xl mb-2 text-white/90 italic">
                Ready to celebrate?
              </motion.p>
              <motion.h2
                variants={itemVariants}
                className="font-sans text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
              >
                Get in Touch to Arrange Your Event
              </motion.h2>
              <motion.p variants={itemVariants} className="text-lg mb-8 leading-relaxed text-white/90">
                Every event is unique, and we strive to provide personalized service to each of our clients.
              </motion.p>
              <Link href="/contact">
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-8 py-3 text-lg font-semibold rounded-full bg-white text-[var(--primary)] hover:bg-white/95 transition-colors"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right side - Image section */}
          <motion.div variants={itemVariants} className="relative bg-gray-100 min-h-[400px] md:min-h-0">
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
