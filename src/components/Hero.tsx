"use client";

import { FC } from "react";
import { motion } from "framer-motion";
// import welcomebg from "../../public/bg3.jpeg";
// import welcomebg2 from "../../public/bg2.jpeg";

const Hero: FC = () => {
  // const [backgroundImage, setBackgroundImage] = useState(welcomebg);
  // const [direction, setDirection] = useState("left");

  // Change background image and sliding direction after a certain interval
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDirection((prevDirection) => (prevDirection === "left" ? "right" : "left"));
  //     setBackgroundImage((prev) => (prev === welcomebg ? welcomebg2 : welcomebg));
  //   }, 8000); // Change every 8 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

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

        {/* <motion.button
          className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 rounded-lg shadow-lg text-white font-semibold hover:bg-blue-700 hover:scale-105 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Get Started
        </motion.button> */}
      </div>
    </div>
  );
};

export default Hero;
