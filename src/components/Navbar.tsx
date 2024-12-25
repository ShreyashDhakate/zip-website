"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scrolling behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`bg-white/10 backdrop-blur-md text-white py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-bold tracking-wider text-white" style={{ zIndex: 1000 }}>
          <span className="hover:animate-pulse" >ZipSoftwares</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden" style={{ zIndex: 1000 }}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none z-50"
            style={{ zIndex: 1000 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden md:flex  space-x-6">
          {["Home", "Products", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative text-lg font-medium transition duration-300 ease-in-out group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#DF6D2D] via-cyan-500 to-primary opacity-0 group-hover:opacity-100 rounded-full blur-lg"></span>
                <span className="relative z-10 group-hover:text-primary">
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center  place-content-center mt-[12rem]  text-white space-y-8">
          {["Home", "Products", "About", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="text-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
