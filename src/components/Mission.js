import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCogs,
  faHandshake,
  faLeaf,
  faBolt,
  faAward,
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
      title: "Climate-Forward Solutions",
      text: "We engineer technologies that improve energy efficiency, use clean energy, and reduce waste.",
      delay: "delay-200",
      icon: faLeaf,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Production-Ready Prototypes",
      text: "Backed by over 25 years of engineering experience, we turn ideas into practical solutions.",
      delay: "delay-400",
      icon: faCogs,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Investor Partnerships",
      text: "We are open to collaborations to help scale our innovative solutions.",
      delay: "delay-600",
      icon: faHandshake,
      color: "from-amber-500 to-amber-700",
    },
  ];

  const achievements = [
    { icon: faAward, text: "Best BIM Company in Africa 2021" },
    { icon: faBolt, text: "Featured on CNN Africa and national television" },
    { icon: faLightbulb, text: "MRIC-recognized R&D projects" },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Organic background elements */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="circuit"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,20 Q10,10 20,20 T40,20"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <path
              d="M20,0 Q10,10 20,20 T20,40"
              fill="none"
              stroke="#10B981"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <svg
            key={i}
            className={`absolute opacity-10 animate-float-${
              i % 2 ? "slow" : "fast"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            viewBox="0 0 100 100"
          >
            <path
              d={
                i % 2
                  ? "M50,0 L100,50 L50,100 L0,50 Z"
                  : "M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z"
              }
              fill={
                i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#10B981" : "#F59E0B"
              }
              fillOpacity="0.1"
            />
          </svg>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with creative typography */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="relative z-10">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Mission
                </span>
              </span>
            </h2>
            <svg
              className="absolute -bottom-4 left-0 w-full h-3"
              viewBox="0 0 300 20"
            >
              <path
                d="M0,10 C50,15 100,5 150,10 C200,15 250,5 300,10"
                stroke="url(#titleUnderline)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="titleUnderline"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            Engineering climate-forward solutions through purposeful R&D
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Mission Content */}
          <div
            className={`space-y-10 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Mission statement */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl border border-gray-700/50">
              <svg
                className="absolute top-0 left-0 w-full h-full opacity-20"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 L100,0 L100,100 L0,100 Z"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
              </svg>
              <p className="text-xl text-gray-300 leading-relaxed">
                As the research and development arm of Prodesign, we focus on
                creating technologies that improve energy efficiency, use clean
                energy, and reduce waste.
              </p>
              <div className="mt-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mr-4">
                  <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                </div>
                <div>
                  <p className="text-white font-medium">Vikram Bhujun</p>
                  <p className="text-gray-400 text-sm">
                    Director, Prodesign Innovations
                  </p>
                </div>
              </div>
            </div>

            {/* Mission points */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-xl bg-gradient-to-br ${
                    point.color
                  } hover:shadow-lg transition-all duration-500 ${
                    isVisible
                      ? `opacity-100 translate-x-0 ${point.delay}`
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="absolute inset-0 bg-gray-900/30 group-hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <FontAwesomeIcon
                          icon={point.icon}
                          className="text-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-100">{point.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why We're Different */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              {/* Video container with tech elements */}
              <div className="relative bg-gray-800 p-1 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.8L16 10 6.3 17.2V2.8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Tech border animation */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="url(#techBorder)"
                    strokeWidth="2"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient
                      id="techBorder"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm font-medium">
                  Watch our feature on MBC: Le Journal Télévisé - 11 Mai 2025
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-xl border border-gray-700/50 relative overflow-hidden">
              <svg
                className="absolute top-0 right-0 w-32 h-32 opacity-10"
                viewBox="0 0 100 100"
              >
                <path
                  d="M50,0 L100,50 L50,100 L0,50 Z"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2"
                />
              </svg>

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Why We're Different
                </span>
              </h3>

              <p className="text-gray-300 mb-8 relative z-10">
                Prodesign Innovations is built on the foundation of over two
                decades of engineering excellence. As a subsidiary of Prodesign
                Engineering Consultants Ltd—one of Mauritius's most established
                MEP and sustainability firms—we combine real-world expertise
                with forward-looking innovation.
              </p>

              <div className="space-y-4 relative z-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <FontAwesomeIcon icon={achievement.icon} />
                      </div>
                    </div>
                    <p className="text-gray-300">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
