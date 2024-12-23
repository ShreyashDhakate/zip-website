"use client"
import React from "react";
import { motion } from "framer-motion";


const DifferencePage = () => {
  return (
    <div className="h-[100vh] w-screen">
    <div className="bg-gray-900 -mt-[1.5rem] text-white">
        <div className="max-w-full    mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Key Differentiators */}
          <motion.div
            className="bg-gray-800 p-6 mt-[3rem] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-primary">Key Differentiators</h3>
            <ul className="text-lg text-gray-300 mt-4">
              <li>Speed: Delivering projects quickly without compromising quality.</li>
              <li>Reliability: We ensure bug-free and stable software.</li>
              <li>Innovation: Constantly staying ahead with the latest technology trends.</li>
              <li>Cost-Effectiveness: Offering competitive pricing without compromising quality.</li>
            </ul>
          </motion.div>
          {/* Team Expertise */}
          <motion.div
            className="bg-gray-800 p-6 mt-[3rem] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold text-primary">Team Expertise</h3>
            <p className="text-lg text-gray-300 mt-4">
              Our team consists of experienced developers, designers, and project managers who have expertise in
              creating innovative and scalable solutions. We specialize in:
            </p>
            <ul className="text-lg text-gray-300 mt-4">
              <li>Web and Mobile Development</li>
              <li>AI and Machine Learning Solutions</li>
              <li>Custom Software and SaaS Applications</li>
              <li>UI/UX Design and User-Centered Design</li>
            </ul>
          </motion.div>
        </div>
      

      {/* Explore Our Products Button */}
      <section id="products" className="py-20 bg-gray-800 mt-[4rem]">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Products
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore the innovative solutions we've created to empower your business.
          </motion.p>
          <motion.button
            className="mt-8 py-2 px-6 bg-primary text-white rounded-full text-lg font-semibold hover:bg-cyan-600 transition duration-300"
            onClick={() => window.location.href = "/products"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Explore Our Products
          </motion.button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default DifferencePage;
