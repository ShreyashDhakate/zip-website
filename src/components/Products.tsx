"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import caton from "@/assets/caton.png";
import Image from "next/image";
import commingsoon from "@/assets/commingsoon.png"
const products = [
  {
    name: "Caton",
    description: "A comprehensive pharmacy management system.",
    status: "Ready",
    videoUrl: "https://www.youtube.com/embed/sHVUlXAvCd0",
    imageUrl: caton ,
  },
  {
    name: "MediSync",
    description: "A collaborative platform for medical professionals.",
    status: "Coming Soon",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: commingsoon,
  },
  {
    name: "HealthTrack",
    description: "Personal health and fitness tracking software.",
    status: "Coming Soon",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: commingsoon,
  },
];

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="min-h-screen  bg-gray-900 text-white">
      {/* Header */}
      <motion.div
        className="text-center py-10 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mt-12">Zip Software Products</h1>
        <p className="text-lg mt-2 text-gray-400">
          Professional Tools for Modern Healthcare
        </p>
      </motion.div>

      {/* Product List */}
      <div className="max-w-5xl mx-auto grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg border-2 shadow-lg ${
              product.status === "Ready" ? "border-primary" : "border-gray-600"
            } bg-gray-800`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              key={index}
              className="w-full h-[200px] rounded-t-lg object-cover mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
                width={500} // Adjust width if needed
                height={200} // Adjust height if needed
              />
            </motion.div>
            <h2 className="text-lg font-semibold text-primary">
              {product.name}
            </h2>
            <p className="text-gray-300 mt-2 text-sm">{product.description}</p>
            <span
              className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-medium ${
                product.status === "Ready"
                  ? "bg-primary text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              {product.status}
            </span>
            <div className="mt-6">
              <button
                className="bg-primary text-white px-4 py-1 rounded-full text-sm"
                onClick={() => openModal(product.videoUrl)}
              >
                See Demo
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden w-[80%] sm:w-[60%] lg:w-[40%] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              className="w-full aspect-video"
              src={videoUrl}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
