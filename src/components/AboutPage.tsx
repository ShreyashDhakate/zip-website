"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image from Next.js
import missionimg from "@/assets/mission.jpeg"; // Import the mission image
import team from "@/assets/team.jpeg"; 

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mt-8">About Zip Software Services</h1>
        <p className="text-lg mt-4 text-gray-400 max-w-2xl mx-auto">
          At Zip Software Services, we are revolutionizing the software design industry by providing innovative solutions that enable businesses to streamline processes, enhance user experiences, and drive growth. Our mission is to lead the future of technology with cutting-edge software design solutions.
        </p>
      </motion.div>

      {/* Our Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to deliver next-generation software solutions that empower businesses to stay ahead in the rapidly evolving tech landscape. We leverage cutting-edge design principles and agile methodologies to create scalable, high-performance software that meets the unique needs of our clients.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Use Next.js Image component */}
          <Image
            src={missionimg}
            alt="Our Mission"
            className="rounded-lg shadow-lg"
            width={500} // Set a width
            height={300} // Set a height
          />
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Innovation",
              description:
                "We push the boundaries of technology to create innovative and transformative software solutions.",
            }, {
              title: "Collaboration",
              description:
                "We believe in the power of teamwork and collaboration with clients to create the best solutions.",
            }, {
              title: "Excellence",
              description:
                "We strive for excellence in every project, delivering high-quality software that exceeds expectations.",
            }].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-700 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            name: "Shreyash Dhakate",
            role: "Lead Software Engineer",
            image: team,
          }, {
            name: "Ojash Marghade",
            role: "Software Engineer",
            image: team,
          }, {
            name: "Ankit Singh",
            role: "App Developer",
            image: team,
          }].map((teamMember, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Use Next.js Image component for team images */}
              <Image
                src={teamMember.image}
                alt={teamMember.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
                width={96} // Set width
                height={96} // Set height
              />
              <h3 className="text-xl font-semibold mb-2">{teamMember.name}</h3>
              <p className="text-gray-400">{teamMember.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Future Goals Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Future Goals
          </motion.h2>
          <p className="text-gray-400 text-lg">
            As we look to the future, Zip Software Services aims to expand our portfolio of software solutions, focusing on AI, machine learning, and blockchain technologies. We are committed to not only staying at the forefront of the tech industry but also being a key player in shaping its future through innovation and collaboration with forward-thinking businesses.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div
        className="bg-primary text-center py-12 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future of Software</h2>
        <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6">
          Be a part of our mission to build the next generation of software solutions that empower businesses to thrive in the digital age.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
