"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#00E4A8] to-[#0061FF] opacity-40 blur-[120px]"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#FF008C] to-[#7928CA] opacity-40 blur-[120px]"
        animate={{
          x: [0, -120, 60, 0],
          y: [0, -60, 100, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
