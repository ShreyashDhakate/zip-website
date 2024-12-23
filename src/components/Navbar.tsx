"use client"
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // User scrolling down
        setIsVisible(false);
      } else {
        // User scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Now only `lastScrollY` is a dependency

  return (
    <nav
      className={`bg-white/10 backdrop-blur-md text-white py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-bold tracking-wider text-white">
          <span className="hover:animate-pulse">ZipSoftware</span>
        </div>

        {/* Links */}
        <ul className="flex space-x-6">
          {["Home", "Products", "About", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`/${item == "Home" ? "" : item.toLowerCase()}`}
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
    </nav>
  );
};

export default Navbar;
