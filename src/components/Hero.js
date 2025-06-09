import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRight,
  faLeaf,
  faLightbulb,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={`${CLOUDINARY_URL}/video/upload/q_auto/shutterstock_a0tog9.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/70">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="organic-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30,50 Q50,30 70,50 T90,50 Q70,70 50,90 T10,50 Q30,30 50,10 T30,50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeOpacity="0.5"
              />
            </pattern>
            <radialGradient
              id="radial-glow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-pattern)" />
          <rect width="100%" height="100%" fill="url(#radial-glow)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {/* Animated leaf particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-300/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <FontAwesomeIcon icon={faLeaf} />
          </div>
        ))}

        <div className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full bg-emerald-400/10 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-cyan-400/10 blur-xl animate-pulse delay-1000"></div>

        <svg
          className="absolute top-10 left-10 w-48 h-48 opacity-10 animate-rotate-slow"
          viewBox="0 0 200 200"
        >
          <path
            d="M20,100 Q35,50 50,100 T80,100 Q95,150 110,100 T140,100 Q155,50 170,100 T200,100"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-20 w-40 h-40 opacity-15 animate-rotate-slow-reverse"
          viewBox="0 0 200 200"
        >
          <path
            d="M100,20 C150,50 150,150 100,180 C50,150 50,50 100,20 Z"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div
        className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative inline-block">
          <h1 className="text-4xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            We engineer{" "}
            <span className="relative font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              green Innovations
              <FontAwesomeIcon
                icon={faSeedling}
                className="absolute -top-4 -right-8 text-emerald-400 text-2xl animate-wiggle"
              />
            </span>{" "}
            That make a difference
          </h1>
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-emerald-400/0 via-emerald-400/80 to-cyan-400/0 rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl mb-8 font-light text-gray-200 max-w-3xl mx-auto relative">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="absolute -left-8 top-1 text-emerald-400/50"
          />
          Solving real problems through research, technology, and purpose
        </p>

        <p className="text-lg md:text-xl mb-12 font-bold text-white max-w-2xl mx-auto">
          Designed for impact. Built to scale. Ready for the right partners.{" "}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="work"
            smooth={true}
            duration={800}
            className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Our Innovations
              <span className="relative inline-block">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                />
                <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              </span>
            </span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="group relative border-2 border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-emerald-400/30 transition-all duration-500"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faPlay} className="text-emerald-400" />
              Partner with Us
            </span>
          </Link>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-300 mb-2 animate-bounce">
            Scroll
          </div>
          <div className="relative w-8 h-14 rounded-full border-2 border-white/30 flex justify-center">
            <div className="absolute top-2 w-1 h-4 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Enhanced SVG Wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="url(#wave-gradient)"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="url(#wave-gradient)"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="url(#wave-gradient)"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
