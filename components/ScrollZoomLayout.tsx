"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollZoomLayout() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Zoom effect for Div 1
  const scaleDiv1 = useTransform(scrollYProgress, [0, 0.3], [1, 1.4]);
  const opacityDiv1 = useTransform(scrollYProgress, [0.25, 0.4], [1, 0]);

  // Div 2 moves in front of Div 3
  const translateYDiv2 = useTransform(scrollYProgress, [0.4, 0.7], ["100%", "0%"]);
  const opacityDiv2 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-gray-900 overflow-hidden">
      {/* Div 3 (background) */}
      <div className="sticky top-0 h-screen flex items-center justify-center bg-blue-500 text-white text-4xl">
        Div 3 - Background
      </div>

      {/* Div 1 - Zoom Scroll */}
      <motion.div
        style={{
          scale: scaleDiv1,
          opacity: opacityDiv1
        }}
        className="sticky top-0 h-screen flex items-center justify-center bg-green-500 text-white text-4xl z-10"
      >
        Div 1 - Zoom Scroll
      </motion.div>

      {/* Div 2 - Slides in front of Div 3 */}
      <motion.div
        style={{
          y: translateYDiv2,
          opacity: opacityDiv2
        }}
        className="sticky top-0 h-screen flex items-center justify-center bg-red-500 text-white text-4xl z-20"
      >
        Div 2 - Slides in Front
      </motion.div>
    </div>
  );
}
