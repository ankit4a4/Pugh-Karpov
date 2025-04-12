import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../../assets/Home/home5.jpg"
import img2 from "../../assets/Home/home1.jpg"
import img3 from "../../assets/Home/home2.jpg"
import img4 from "../../assets/Home/home3.jpg"
import img5 from "../../assets/Home/home4.jpg"

const bgImages = [
  img1,
  img2,
  img3,
  img4,
  img5
];


const HeroHome = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inset-0  md:h-[100vh] h-[60vh]">

      {bgImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        ></motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Center Content */}
      <div className="relative z-20 w-full h-full flex md:items-end p-30 md:justify-end items-center justify-center">
        <Link
          to="/contact"
          className="text-sm sm:text-[2.5vh] md:text-[1.2vw] font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 sm:px-8 md:px-[3vw] py-[1.5vh] rounded-full shadow-xl border border-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-900 hover:to-blue-700"
        >
          Contact Us
        </Link>


      </div>
    </div>
  );
};

export default HeroHome;
