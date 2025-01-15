"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import catonImage from "@/assets/caton.png";
import commingSoonImage from "@/assets/commingsoon.png";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

const products = [
  {
    name: "Caton",
    description: "A comprehensive pharmacy management system.",
    status: "Ready",
    videoUrl: "https://www.youtube.com/embed/sHVUlXAvCd0",
    imageUrl: catonImage,
    downloadLink: "/downloads/caton_0.1.0_x64-setup.exe",
  },
  {
    name: "MediSync",
    description: "A collaborative platform for medical professionals.",
    status: "Coming Soon",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: commingSoonImage,
  },
  {
    name: "HealthTrack",
    description: "Personal health and fitness tracking software.",
    status: "Coming Soon",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    imageUrl: commingSoonImage,
  },
];

const ProductPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  

  const handleDownload = (downloadLink: string) => {
    setIsDownloading(true);
    const anchor = document.createElement("a");
    anchor.href = downloadLink;
    anchor.download = downloadLink.split("/").pop() || "file";
    anchor.click();

    setTimeout(() => setIsDownloading(false), 3000);
  };

  const openModal = (url: string) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.div
        className="text-center py-10"
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
            {/* Product Image */}
            <motion.div
              className="w-full h-[200px] rounded-t-lg overflow-hidden mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="object-cover"
                width={500}
                height={200}
              />
            </motion.div>

            {/* Product Details */}
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

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between items-center">
              <button
                className="bg-primary text-white px-4 py-1 rounded-full text-sm"
                onClick={() => openModal(product.videoUrl)}
              >
                See Demo
              </button>
              {product.status === "Ready" && (
                <motion.button
                  className="bg-green-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2"
                  onClick={() => handleDownload(product.downloadLink || "#")}
                  animate={
                    isDownloading
                      ? { scale: 1, opacity: 0.8 }
                      : { scale: 1, opacity: 1 }
                  }
                  transition={{
                    duration: 0.3,
                    repeat: isDownloading ? Infinity : 0,
                    repeatType: "reverse",
                  }}
                >
                  <FaDownload />
                  {isDownloading ? "Downloading..." : "Download"}
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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
