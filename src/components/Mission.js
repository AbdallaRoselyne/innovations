import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
  faHandshake,
  faAward,
  faTv,
  faGlobe,
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    {
      text: "Led by Vikram Bhujun and backed by over 25 years of engineering experience, we turn ideas into production-ready prototypes.",
      icon: faCogs,
      color: "from-blue-500 to-blue-600",
    },
    {
      text: "We are open to investor partnerships to help scale our solutions.",
      icon: faHandshake,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const achievements = [
    {
      text: "Successful R&D projects with the Mauritius Research and Innovation Council (MRIC)",
      icon: faAward,
      color: "text-black",
    },
    {
      text: "Featured on CNN Africa and national television",
      icon: faTv,
      color: "text-purple-900",
    },
    {
      text: "Best BIM Company in Africa 2021 - leadership in digital engineering and innovation",
      icon: faGlobe,
      color: "text-emerald-900",
    },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Organic background elements */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1200 800"
      >
        <defs>
          <radialGradient
            id="bgGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
          </radialGradient>
          <pattern
            id="circuitPattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20 Q10 10 20 20 T40 20"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <path
              d="M20 0 Q10 10 20 20 T20 40"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.5"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgGradient)" />
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>

      {/* Floating abstract shapes */}
      <svg
        className="absolute top-20 left-10 w-32 h-32 opacity-5 animate-float"
        viewBox="0 0 200 200"
      >
        <path
          d="M100,0 C155.2,0 200,44.8 200,100 C200,155.2 155.2,200 100,200 C44.8,200 0,155.2 0,100 C0,44.8 44.8,0 100,0 Z"
          fill="#3B82F6"
        />
      </svg>
      <svg
        className="absolute bottom-20 right-10 w-40 h-40 opacity-5 animate-float-delay"
        viewBox="0 0 200 200"
      >
        <polygon points="100,0 200,100 100,200 0,100" fill="#10B981" />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        {/* Mission Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative">
                <span className="relative z-10">Our</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1 -z-0"></span>
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <svg
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-2"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,10 50,5 T100,5"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                className={`transition-all duration-1000 delay-300 ${
                  isVisible ? "stroke-dashoffset-0" : ""
                }`}
              />
            </svg>
          </div>
        </div>

        {/* Mission Statement */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100/50 overflow-hidden">
            {/* Decorative corner elements */}
            <svg className="absolute top-0 left-0 w-24 h-24 opacity-20">
              <path d="M0,0 L100,0 L0,100 Z" fill="#3B82F6" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
              <path d="M100,100 L0,100 L100,0 Z" fill="#10B981" />
            </svg>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                We engineer{" "}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-semibold">
                  climate-forward solutions
                </span>{" "}
                through purposeful R&D.
              </h3>

              <div className="relative max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  As the research and development arm of{" "}
                  <span className="font-semibold text-gray-700">Prodesign</span>
                  , we focus on creating technologies that improve energy
                  efficiency, use clean energy, and reduce waste.
                </p>

                {/* Animated underline */}
                <svg className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2">
                  <path
                    d="M0,1 Q24,4 48,1 T96,1"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="0,100"
                    className={`transition-all duration-1000 delay-500 ${
                      isVisible ? "stroke-dashoffset-0" : ""
                    }`}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Points */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Animated background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Decorative SVG */}
                <svg className="absolute top-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="125.6"
                    strokeDashoffset="125.6"
                    className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                  />
                </svg>

                <div className="relative z-10 p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon icon={point.icon} className="text-xl" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why We're Different Section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why we're{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                different
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Decorative elements */}
                <svg className="absolute top-0 left-0 w-16 h-16 opacity-10">
                  <path
                    d="M0,0 L80,0 L80,80 L0,80 Z"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="320"
                    strokeDashoffset="320"
                    className={`transition-all duration-1000 delay-700 ${
                      isVisible ? "stroke-dashoffset-0" : ""
                    }`}
                  />
                </svg>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                  <span className="font-semibold text-gray-900">
                    Prodesign Innovation
                  </span>{" "}
                  is built on the foundation of over two decades of engineering
                  excellence. As a subsidiary of <br />
                  <a
                    href="https://www.prodesign.mu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Pro-Design Engineering Consultants Ltd
                  </a>
                  - one of Mauritius's most established MEP and sustainability
                  firms—we combine real-world expertise with forward-looking
                  innovation.
                </p>

                <p className="text-gray-600 text-lg mb-6 relative z-10">
                  Our team, led by{" "}
                  <span className="font-semibold text-gray-800">experts</span>,
                  has a proven track record in delivering cutting-edge
                  engineering solutions. From pioneering energy-efficient
                  systems to developing smart technologies, we are committed to
                  sustainability and innovation.
                </p>

                <div className="relative pl-6">
                  <p className="text-prodesign-blue text-lg font-bold leading-relaxed">
                    At Prodesign Innovation, we carry this legacy forward—by{" "}
                    <span className="text-gray-800 font-semibold">
                      engineering what's next
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Decorative elements */}
                <svg className="absolute top-0 right-0 w-16 h-16 opacity-10">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="226"
                    strokeDashoffset="226"
                    className={`transition-all duration-1000 delay-700 ${
                      isVisible ? "stroke-dashoffset-0" : ""
                    }`}
                  />
                </svg>

                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faAward}
                      className="text-white text-sm"
                    />
                  </div>
                  Recognition & Impact
                </h4>

                <p className="text-gray-700 mb-6 relative z-10">
                  Our work has been recognised nationally and internationally:
                </p>

                <div className="space-y-4 relative z-10">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 bg-prodesign-blue/50 backdrop-blur-sm rounded-xl border border-white/50 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transitionDelay: isVisible
                          ? `${index * 100 + 700}ms`
                          : "0ms",
                      }}
                    >
                      <div className="flex-shrink-0 bg">
                        <div
                          className={`w-10 h-10 rounded-lg ${achievement.color} bg-opacity-20 flex items-center justify-center`}
                        >
                          <FontAwesomeIcon
                            icon={achievement.icon}
                            className={`${achievement.color}`}
                          />
                        </div>
                      </div>
                      <p className="text-black text-sm leading-relaxed ">
                        {achievement.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Mission;
