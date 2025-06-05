import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCar,
  faLeaf,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const WorkSection = () => {
  const workItems = [
    {
      title: "Digital Construction",
      description:
        "Smarter tools for a more efficient built environment. We develop digital platforms that reduce waste, cut delays, and improve coordination across the construction lifecycle.",
      link: "digital-construction",
      icon: faBuilding,
      color: "from-blue-500 to-blue-700",
      svg: (
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-10"
        >
          <path
            d="M50,50 L150,50 L150,150 L50,150 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path
            d="M75,75 L125,75 L125,125 L75,125 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="50"
            x2="75"
            y2="75"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="50"
            x2="125"
            y2="75"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="150"
            x2="125"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="150"
            x2="75"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Electric Vehicles",
      description:
        "Clean mobility, engineered for real-world use. Our R&D in electric vehicle platforms focuses on short-range cargo and urban solutions—practical, efficient, and designed for tropical conditions.",
      link: "electric-mobility",
      icon: faCar,
      color: "from-emerald-500 to-emerald-700",
      svg: (
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-10"
        >
          <path
            d="M30,100 Q100,20 170,100 T30,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="70"
            cy="130"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="130"
            cy="130"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M50,80 L150,80"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
        </svg>
      ),
    },
    {
      title: "Clean Farming",
      description:
        "Technology-driven farming for a food-secure future. We design compact, automated farming systems—ideal for urban areas, food deserts, and climate-vulnerable regions.",
      link: "clean-farming",
      icon: faLeaf,
      color: "from-cyan-500 to-cyan-700",
      svg: (
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-10"
        >
          <path
            d="M100,20 Q120,50 100,80 Q80,50 100,20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M100,80 Q120,110 100,140 Q80,110 100,80 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M100,140 Q120,170 100,200 Q80,170 100,140 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="60"
            cy="120"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="140"
            cy="120"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="80"
            cy="160"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="120"
            cy="160"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="work"
      className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
    >
      {/* Organic Blob Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="blobGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#10B981" />
          </radialGradient>
        </defs>
        <path
          d="M446.5,229.5Q229,459,240.5,729.5Q252,1000,500,876Q748,752,851.5,526Q955,300,723,150Q491,0,446.5,229.5Z"
          fill="url(#blobGradient)"
        />
        <path
          d="M600.5,182.5Q329,365,304,582.5Q279,800,500,800Q721,800,721,582.5Q721,365,600.5,182.5Z"
          fill="url(#blobGradient)"
          transform="translate(100, 0)"
        />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        {/* Header with creative typography */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Our</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1 -z-0"></span>
            </span>{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Innovations
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full h-3"
                viewBox="0 0 200 20"
              >
                <path
                  d="M0,10 C30,15 70,5 100,10 C130,15 170,5 200,10"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pioneering solutions for a smarter, cleaner future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 overflow-hidden"
            >
              {/* Theme-specific SVG background */}
              {item.svg}

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon with creative background */}
                <div className="relative mb-8">
                  <div className="absolute -left-2 -top-2 w-16 h-16 rounded-xl bg-white/50 border border-gray-200/50 group-hover:border-transparent transition-all duration-300"></div>
                  <div
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center font-medium group-hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="mr-2">Explore innovation</span>
                  <div className="relative w-6 h-6">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 opacity-100 group-hover:opacity-0 transition-all duration-300"
                    />
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </Link>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 rounded-full transform -translate-y-1/2 translate-x-1/2 transition-opacity duration-500`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
