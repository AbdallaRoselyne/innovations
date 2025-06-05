import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCogs,
  faHandshake,
  faLeaf,
  faBolt,
  faChartLine
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
      text: "We engineer climate-forward solutions through purposeful R&D.",
      icon: faLeaf,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      text: "We focus on creating technologies that improve energy efficiency, use clean energy, and reduce waste.",
      icon: faBolt,
      color: "from-amber-500 to-amber-600"
    },
    {
      text: "Backed by over 25 years of engineering experience, we turn ideas into production-ready prototypes.",
      icon: faCogs,
      color: "from-blue-500 to-blue-700"
    },
    {
      text: "We are open to investor partnerships to help scale our solutions.",
      icon: faHandshake,
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  const differencePoints = [
    {
      title: "25+ Years of Excellence",
      description: "Built on Prodesign's legacy as Mauritius' leading MEP and sustainability firm",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <rect x="10" y="10" width="80" height="80" rx="5" fill="none" stroke="currentColor" strokeWidth="4" />
          <text x="50" y="60" textAnchor="middle" fill="currentColor" fontSize="40" fontFamily="Arial" fontWeight="bold">25</text>
        </svg>
      )
    },
    {
      title: "Award-Winning Innovation",
      description: "Recipient of Best BIM Company in Africa 2021",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <path d="M50,10 L70,40 L100,45 L75,70 L80,100 L50,85 L20,100 L25,70 L0,45 L30,40 Z" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Media Recognition",
      description: "Featured on CNN Africa and national television",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <rect x="15" y="20" width="70" height="60" rx="5" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M50,40 L50,60 M40,50 L60,50" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      title: "Proven R&D Track Record",
      description: "Successful projects with Mauritius Research and Innovation Council",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M35,35 L65,35 L65,65 L35,65 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M20,20 L35,35 M80,20 L65,35 M80,80 L65,65 M20,80 L35,65" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Organic background elements */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <path d="M0,0 C200,100 400,50 600,150 C800,250 1000,100 1200,200 L1200,800 L0,800 Z" fill="url(#bgGradient)" />
      </svg>

      {/* Floating abstract shapes */}
      <svg className="absolute top-20 left-10 w-32 h-32 opacity-5 animate-float" viewBox="0 0 200 200">
        <path d="M100,0 C155.2,0 200,44.8 200,100 C200,155.2 155.2,200 100,200 C44.8,200 0,155.2 0,100 C0,44.8 44.8,0 100,0 Z" fill="#3B82F6" />
      </svg>
      <svg className="absolute bottom-20 right-10 w-40 h-40 opacity-5 animate-float-delay" viewBox="0 0 200 200">
        <polygon points="100,0 200,100 100,200 0,100" fill="#10B981" />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        {/* Mission Section */}
        <div className="mb-24">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative">
                <span className="relative z-10">Our</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1 -z-0"></span>
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100/50">
                <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 200 200">
                  <path d="M20,20 L180,20 L180,180 L20,180 Z" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  We engineer climate-forward solutions through purposeful R&D.
                </h3>
                
                <p className="text-gray-600 mb-8">
                  As the research and development arm of Prodesign, we focus on creating technologies that improve energy efficiency, use clean energy, and reduce waste.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center text-blue-600">
                    <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                  </div>
                  <p className="text-gray-700">
                    Led by <span className="font-semibold text-blue-600">Vikram Bhujun</span> and backed by over 25 years of engineering experience.
                  </p>
                </div>
              </div>
            </div>

            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              {missionPoints.map((point, index) => (
                <div key={index} className={`group flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={point.icon} className="text-xl" />
                    </div>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why We're Different Section */}
        <div className="pt-16 border-t border-gray-200/50">
          <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Why We're Different
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {differencePoints.map((point, index) => (
              <div key={index} className="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-4 text-blue-600 group-hover:text-emerald-600 transition-colors duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Prodesign Innovations, we combine real-world expertise with forward-looking innovation to carry this legacy forward—by engineering what's next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;