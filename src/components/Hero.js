import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={`${CLOUDINARY_URL}/video/upload/q_auto/shutterstock_a0tog9.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60" />

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
          We bring innovative{" "}
          <span className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            green products
          </span>{" "}
          and services to life
        </h1>

        <p className="text-xl md:text-2xl mb-12 font-light text-gray-200 max-w-3xl mx-auto">
          Fighting climate change with our innovative products. Innovation is
          our way of life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="work"
            smooth={true}
            duration={800}
            className="group bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Our Work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="group border-2 border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
