import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faTv,
  faRocket,
  faBuildingColumns,
  faLeaf,
  faLightbulb,
  faCubes,
  faChartLine,
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
      { threshold: 0.3 }
    );

    const achievementsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAchievementsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      title: "Best BIM Company in Africa in 2021",
      description:
        "Recognized for leadership in digital engineering innovation",
      color: "from-yellow-400 to-orange-500",
      delay: "delay-200",
    },
    {
      icon: faRocket,
      title: "Research and Development Projects",
      description:
        "Successfully delivered government-funded research projects with MRIC",
      color: "from-blue-500 to-purple-600",
      delay: "delay-400",
    },
    {
      icon: faTv,
      title: "Media Visibility",
      description:
        "Featured on CNN Africa, national television, and leading regional media",
      color: "from-green-500 to-teal-600",
      delay: "delay-600",
    },
    {
      icon: faCubes,
      title: "BIM Pioneer",
      description: "First engineering firm in Mauritius to implement BIM",
      color: "from-purple-500 to-pink-600",
      delay: "delay-800",
    },
  ];

  const expertise = [
    {
      icon: faBuildingColumns,
      title: "MEP Engineering",
      description:
        "Comprehensive mechanical, electrical, and plumbing solutions",
    },
    {
      icon: faLeaf,
      title: "Sustainability",
      description: "LEED consultancy and sustainable design leadership",
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description: "Cutting-edge technology and research-driven solutions",
    },
    {
      icon: faChartLine,
      title: "Project Excellence",
      description:
        "Hundreds of successful building and infrastructure projects",
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
      description:
        "First engineering firm in Mauritius to implement BIM technology",
      icon: faCubes,
    },
    {
      year: "2020",
      title: "Innovation Lab",
      description: "Launch of Prodesign Innovations R&D division",
      icon: faLightbulb,
    },
    {
      year: "2021",
      title: "African Recognition",
      description: "Awarded Best BIM Company in Africa in 2021",
      icon: faAward,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-20 left-10 w-96 h-96 opacity-5 animate-spin-slow"
          viewBox="0 0 400 400"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeDasharray="20,10"
          />
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
            strokeDasharray="15,5"
          />
          <circle
            cx="200"
            cy="200"
            r="50"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
            strokeDasharray="10,5"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-10 w-80 h-80 opacity-10 animate-float"
          viewBox="0 0 300 300"
        >
          <polygon
            points="150,0 300,150 150,300 0,150"
            fill="#3B82F6"
            opacity="0.3"
          />
          <polygon
            points="150,50 250,150 150,250 50,150"
            fill="#10B981"
            opacity="0.4"
          />
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            <svg
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3"
              viewBox="0 0 130 12"
            >
              <path
                d="M0,6 Q32.5,12 65,6 T130,6"
                stroke="url(#gradient-underline)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="200"
                strokeDashoffset="200"
                className={`transition-all duration-1500 delay-500 ${
                  isVisible ? "stroke-dashoffset-0" : ""
                }`}
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
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8 leading-relaxed">
              Engineering excellence,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-semibold">
                since 1997
              </span>
            </h2>
          </div>
        </div>

        {/* Story Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Founded in 1997,{" "}
                    <span className="font-bold text-prodesign-blue">
                      Pro-Design Engineering Consultants Ltd
                    </span>{" "}
                    is one of Mauritius's leading MEP and sustainability
                    consultancies.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a portfolio spanning hundreds of successful building
                    and infrastructure projects, we bring deep technical
                    expertise, local understanding, and global best practices to
                    every design.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <FontAwesomeIcon
                      icon={faRocket}
                      className="text-white text-xl"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Innovation Heritage
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-600">
                    Prodesign Innovation
                  </span>{" "}
                  was created to carry that spirit of innovation into the
                  future—through dedicated research, rapid prototyping, and
                  scalable technology development.
                </p>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                    isVisible
                      ? `opacity-100 translate-y-0 delay-${index * 200 + 400}`
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-emerald-200 transition-colors duration-300">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-blue-600 text-xl"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          ref={timelineRef}
          className={`mb-20 transition-all duration-1000 ${
            timelineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  } transition-all duration-1000 ${
                    timelineVisible
                      ? `opacity-100 translate-x-0 delay-${index * 300}`
                      : `opacity-0 ${
                          index % 2 === 0 ? "-translate-x-12" : "translate-x-12"
                        }`
                  }`}
                >
                  <div
                    className={`relative w-full max-w-md ${
                      index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"
                    }`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 group">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center ${
                            index % 2 === 0 ? "order-2 ml-3" : "order-1 mr-3"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-white text-sm"
                          />
                        </div>
                        <div
                          className={index % 2 === 0 ? "order-1" : "order-2"}
                        >
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                            {item.year}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div
          ref={achievementsRef}
          className={`transition-all duration-1000 ${
            achievementsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prodesign is widely recognised for its innovation culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden ${
                  achievementsVisible
                    ? `opacity-100 translate-y-0 ${achievement.delay}`
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon
                      icon={achievement.icon}
                      className="text-white text-2xl"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {achievement.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400 text-lg animate-pulse"
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
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
