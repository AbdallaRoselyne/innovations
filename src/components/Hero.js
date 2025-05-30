import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

      {/* Gradient overlay with SVG pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60">
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating SVG elements */}
      <svg
        className="absolute top-20 left-10 w-40 h-40 opacity-20 animate-float"
        viewBox="0 0 200 200"
      >
        <path
          d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
          fill="#10B981"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-10 w-32 h-32 opacity-20 animate-float-delay"
        viewBox="0 0 200 200"
      >
        <polygon points="100,0 200,100 100,200 0,100" fill="#3B82F6" />
      </svg>

      {/* Content */}
      <div
        className={`relative z-10 text-center mt-4 px-6 max-w-5xl mx-auto transition-all duration-1000 ${
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
            className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center">
              Explore Our Work
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="group relative border-2 border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white transition-colors duration-300" />
            <span className="relative z-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
          <div className="absolute top-1 w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>

      {/* SVG Wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
