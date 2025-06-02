import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCogs,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    {
      text: "Our mission is to combat climate change by developing products and services that improve efficiency, use clean energy, and reduce waste.",
      delay: "delay-200",
      icon: faLightbulb,
    },
    {
      text: "Backed by 25 years of engineering experience, we design and build production-ready prototypes.",
      delay: "delay-400",
      icon: faCogs,
    },
    {
      text: "We're open to investor partnerships to scale our solutions.",
      delay: "delay-600",
      icon: faHandshake,
    },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Abstract SVG background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1" fill="#3b82f6" />
            <circle cx="30" cy="30" r="1" fill="#10b981" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Floating SVG elements */}
      <svg
        className="absolute top-20 left-10 w-40 h-40 opacity-10 animate-float"
        viewBox="0 0 200 200"
      >
        <path
          d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
          fill="#3B82F6"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-10 w-32 h-32 opacity-10 animate-float-delay"
        viewBox="0 0 200 200"
      >
        <polygon points="100,0 200,100 100,200 0,100" fill="#10B981" />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        {/* Modern Header with SVG decoration */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            <svg
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,10 50,5 T100,5"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="0,100"
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "stroke-dashoffset-0" : ""
                }`}
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                <span className="font-semibold">Prodesign Innovation</span> is
                the R&D arm of Prodesign and is led by{" "}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-semibold">
                  Vikram Bhujun
                </span>
                .
              </h3>
              <svg
                className="absolute -left-4 top-0 h-full w-1"
                viewBox="0 0 10 100"
              >
                <line
                  x1="5"
                  y1="0"
                  x2="5"
                  y2="100"
                  stroke="url(#gradient-line)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="gradient-line"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-4 p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:bg-white hover:shadow-lg transition-all duration-500 ${
                    isVisible
                      ? `opacity-100 translate-x-0 ${point.delay}`
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center text-blue-600 group-hover:from-blue-200 group-hover:to-emerald-200 transition-colors duration-300">
                      <FontAwesomeIcon icon={point.icon} className="text-xl" />
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* SVG decoration around video */}
              <svg
                className="absolute -top-6 -left-6 w-24 h-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                viewBox="0 0 100 100"
              >
                <path
                  d="M0,0 L100,0 L100,100 L0,100 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="400"
                  strokeDashoffset="400"
                  className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                />
              </svg>

              <svg
                className="absolute -bottom-6 -right-6 w-24 h-24 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="251"
                  strokeDashoffset="251"
                  className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                />
              </svg>

              <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D723835840068794&show_text=false"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Prodesign Mission Video"
                  />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <p className="text-gray-600 text-sm font-medium">
                Watch our mission in action
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Extract from MBC: Le Journal Télévisé - 11 Mai 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
