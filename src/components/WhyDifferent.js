import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faTv, faGlobe } from "@fortawesome/free-solid-svg-icons";

const WhyDifferent = () => {
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
      id="why-different"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-250 to-blue-250 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Why We're Different Section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Prodesign Innovation ?
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

export default WhyDifferent;
