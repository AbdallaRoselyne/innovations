import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faTv,
  faRocket,
  faLightbulb,
  faCubes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const achievementsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAchievementsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (timelineRef.current) timelineObserver.observe(timelineRef.current);
    if (achievementsRef.current)
      achievementsObserver.observe(achievementsRef.current);

    return () => {
      observer.disconnect();
      timelineObserver.disconnect();
      achievementsObserver.disconnect();
    };
  }, []);

  const achievements = [
    {
      icon: faAward,
      title: "Best BIM Company in Africa",
      year: "2021",
      description:
        "Recognized for leadership in digital engineering innovation",
      color: "from-yellow-400 to-orange-500",
      delay: "delay-200",
    },
    {
      icon: faRocket,
      title: "Research Projects",
      year: "2020-2023",
      description: "Delivered government-funded research with MRIC",
      color: "from-blue-500 to-purple-600",
      delay: "delay-300",
    },
    {
      icon: faTv,
      title: "Media Features",
      year: "2018-2023",
      description: "Featured on CNN Africa and national media",
      color: "from-green-500 to-teal-600",
      delay: "delay-400",
    },
    {
      icon: faCubes,
      title: "BIM Pioneer",
      year: "2008",
      description: "First engineering firm in Mauritius to implement BIM",
      color: "from-purple-500 to-pink-600",
      delay: "delay-500",
    },
  ];

  const timeline = [
    {
      year: "1997",
      title: "Foundation",
      description: "Prodesign Engineering Consultants Ltd established",
      icon: faRocket,
    },
    {
      year: "2008",
      title: "BIM Pioneer",
      description: "First to implement BIM technology in Mauritius",
      icon: faCubes,
    },
    {
      year: "2020",
      title: "Innovation Lab",
      description: "Launched R&D division",
      icon: faLightbulb,
    },
    {
      year: "2021",
      title: "African Recognition",
      description: "Awarded Best BIM Company in Africa",
      icon: faAward,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simplified animated elements for performance */}
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 opacity-5 animate-spin-slow">
          <div className="w-full h-full rounded-full border-2 border-dashed border-blue-400/30"></div>
        </div>

        <div className="absolute bottom-20 right-10 w-56 h-56 md:w-80 md:h-80 opacity-10 animate-float">
          <div className="w-full h-full bg-blue-400/10 rounded-full"></div>
        </div>

        {/* Optimized floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block mb-6 md:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            <svg
              className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-2 md:h-3"
              viewBox="0 0 130 12"
            >
              <path
                d="M0,6 Q32.5,12 65,6 T130,6"
                stroke="url(#gradient-underline)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset={isVisible ? "0" : "200"}
                className="transition-all duration-1000 delay-300"
              />
              <defs>
                <linearGradient
                  id="gradient-underline"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-800 mb-6 leading-relaxed">
              Engineering excellence,{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                since 1997
              </span>
            </h2>
          </div>
        </div>

        {/* Story & Video Section - Updated for equal height */}
        <div className="bg-gray-100/50 rounded-2xl p-8 md:p-12 mb-12 md:mb-20">
          <div
            className={`mb-12 md:mb-20 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Story Column */}
              <div className="flex flex-col gap-6 md:gap-8 h-full">
                <div className="relative flex-1">
                  <div className="absolute -left-4 md:-left-6 top-0 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                      Founded in 1997,{" "}
                      <a
                        href="https://www.prodesign.mu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Pro-Design Engineering Consultants Ltd
                      </a>{" "}
                      is one of Mauritius's leading MEP and sustainability
                      consultancies.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      With hundreds of successful projects, we combine technical
                      expertise with local knowledge and global best practices.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm flex-1">
                  <div className="flex items-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      Innovation Heritage
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    <span className="font-semibold text-blue-600">
                      Prodesign Innovation
                    </span>{" "}
                    carries our innovative spirit forward through research,
                    prototyping, and scalable technology development.
                  </p>
                </div>
              </div>
              {/* 3d logo image in cloudinary */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  <img
                    src="https://res.cloudinary.com/dbhnlfdva/image/upload/v1750663378/3d-no-background_bsfztn.png"
                    alt="Prodesign Logo"
                    className="w-full h-auto"
                  />
                </div>
                <div className="hidden md:block md:absolute md:-right-6 md:-top-6 md:w-24 md:h-20 bg-blue-400/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          ref={timelineRef}
          className={`mb-12 md:mb-20 transition-all duration-700 ${
            timelineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12 ml-8 sm:ml-0">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex ${
                    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                  } transition-all duration-700 ${
                    timelineVisible
                      ? `opacity-100 translate-x-0 delay-${index * 100}`
                      : `opacity-0 ${
                          index % 2 === 0 ? "-translate-x-8" : "translate-x-8"
                        }`
                  }`}
                >
                  <div
                    className={`relative w-full sm:max-w-md ${
                      index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center mb-2">
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center ${
                            index % 2 === 0 ? "order-2 ml-2" : "order-1 mr-2"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-white text-xs md:text-sm"
                          />
                        </div>
                        <div
                          className={index % 2 === 0 ? "order-1" : "order-2"}
                        >
                          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1/2 transform -translate-x-3 sm:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white border-2 md:border-4 border-blue-500 rounded-full z-10 top-6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          ref={achievementsRef}
          className={`transition-all duration-700 ${
            achievementsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Recognition &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h3>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Prodesign is widely recognised for its innovation culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 overflow-hidden ${
                  achievementsVisible
                    ? `opacity-100 translate-y-0 ${achievement.delay}`
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl md:rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${achievement.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon
                      icon={achievement.icon}
                      className="text-white text-lg md:text-2xl"
                    />
                  </div>

                  <div className="mb-1 md:mb-2">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {achievement.title}
                    </h4>
                    <span className="text-xs md:text-sm text-gray-500">
                      {achievement.year}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 text-xs md:text-sm animate-pulse"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
