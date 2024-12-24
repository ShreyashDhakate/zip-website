"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Importing all the icons
import reacticon from "../../public/techicons/react.svg";
import rusticon from "../../public/techicons/rust-1.svg";
import nextjs from "../../public/techicons/nextjs.svg";
import sql from "../../public/techicons/sql.svg";
import mongodb from "../../public/techicons/mongodb.svg";
import angular from "../../public/techicons/angular.svg";
import figma from "../../public/techicons/figma.svg";
import java from "../../public/techicons/java.svg";
import ai from "../../public/techicons/ai.svg";
import ts from "../../public/techicons/typescript.svg";

const techData = [
  { src: reacticon, alt: "React", width: 56, height: 56 },
  { src: rusticon, alt: "Rust", width: 96, height: 96 },
  { src: nextjs, alt: "Next.js", width: 96, height: 96 },
  { src: sql, alt: "SQL", width: 96, height: 96 },
  { src: ts, alt: "TypeScript", width: 96, height: 96 },
  { src: mongodb, alt: "MongoDB", width: 56, height: 56 },
  { src: angular, alt: "Angular", width: 96, height: 96 },
  { src: java, alt: "Java", width: 96, height: 96 },
  { src: figma, alt: "Figma", width: 96, height: 96 },
  { src: ai, alt: "AI", width: 96, height: 96 },
];

const FeaturedPage = () => {
  return (
    <div className="bg-gray-900 text-white mb-6 p-2">
      {/* Technologies and Tools Section */}
      <motion.section
        id="technologies"
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Technologies & Tools
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We specialize in using modern, reliable, and scalable technologies
            to build robust software solutions.
          </motion.p>
        </div>
        
        {/* Split into two halves */}
        <div className="flex justify-center flex-wrap gap-12">
          {/* First half of the icons */}
          <div className="flex flex-wrap gap-12 justify-center">
            {techData.slice(0, 5).map((tech, index) => (
              <motion.div
                key={index}
                className="w-14 h-14 flex justify-center items-center rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={tech.width}
                  height={tech.height}
                  priority
                />
              </motion.div>
            ))}
          </div>

          {/* Second half of the icons */}
          
        </div>
      </motion.section>
    </div>
  );
};

export default FeaturedPage;
