"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with actual EmailJS values.
      await emailjs.send(
        "service_p4k2a5c",
        "template_lnbf0h6",
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "_fKbLkeSIs9666qE-"
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen  bg-gray-900 text-white">
      {/* Header */}
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl mt-12 font-bold">Contact Us</h1>
        <p className="text-lg mt-2 text-gray-400">
          We would love to hear from you! Reach out to us for inquiries or
          support.
        </p>
      </motion.div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        {isSubmitted ? (
          <motion.div
            className="text-center text-lg text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Thank you for contacting us! We'll get back to you soon.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 mt-1 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 mt-4 text-sm font-semibold rounded-md bg-primary text-white hover:bg-primary-dark transition-all ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsPage;
