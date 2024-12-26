"use client";

import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl font-semibold mb-4">About ZIP Softwares</h2>
            <p className="text-sm">
              ZIP Softwares is dedicated to revolutionizing pharmacy management
              with innovative solutions like Caton. Our mission is to enhance
              efficiency and productivity for healthcare professionals.
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/features" className="hover:text-gray-300 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-300 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:zipsoftwares.in@gmail.com"
                className="hover:underline"
              >
                zipsoftwares.in@gmail.com
              </a>
            </p>
            <div className="flex flex-col items-start">
              <p className="text-sm">Phone: +91-8468882142</p>
              <p className="text-sm ml-12">+91-9370647514</p>
              <p className="text-sm ml-12">+91-7387257752</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-800 transition"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 text-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p>&copy; 2024 ZIP Softwares. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
