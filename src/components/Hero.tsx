"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
      {/* Sliding Background Layer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-40"
        // initial={{ scale: 1.1 }}
        // animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      >
        <video
          className="w-full h-full object-cover"
          src={"/bgvideo.mp4"} // Replace with the path to your video
          autoPlay
          loop
          muted
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 px-4">
        <motion.h1
          className="text-3xl lg:text-8xl font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          New Era of Softwares
        </motion.h1>

        <motion.p
          className="text-base lg:text-lg text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Redefining the Software Landscape for Tomorrow
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
