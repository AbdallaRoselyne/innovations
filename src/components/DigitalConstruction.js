import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faVrCardboard,
  faBookOpen,
  faProjectDiagram,
  faShoppingCart,
  faChevronLeft,
  faChevronRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const DigitalConstruction = () => {
  const projects = [
    {
      title: "Automated BIM coordination process",
      description:
        "We are researching on automating design verification process on BIM. Through coding we are able to automatically check fire code compliance, streamline clash detection.",
      icon: faCode,
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/bim-coordination.jpg",
      color: "bg-blue-500",
    },
    {
      title: "Integration of VR and AR with BIM",
      description:
        "We have been able to integrate BIM with Augmented reality on a small area. BIM models can be superimposed in a room and allow contractors to build complex plant rooms exactly, reducing waste and time.",
      icon: faVrCardboard,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495142/VR_zoxeil.jpg",
      color: "bg-purple-500",
    },
    {
      title: "Interactive user manual",
      description:
        "We have produced an interactive user guide for building owners. This guide is easy to use and contains information on how to operate and maintain installation through an interactive web browser.",
      icon: faBookOpen,
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/interactive-manual.jpg",
      color: "bg-emerald-500",
    },
    {
      title: "Construction digital twin",
      description:
        "We are working to improve building design, construction and operations through the study of digital twins. This is a project co-funded by the Mauritius Research and Innovations Council.",
      icon: faProjectDiagram,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495141/prototype_jnqj9y.png",
      color: "bg-amber-500",
    },
    {
      title: "Construction procurement platform",
      description:
        "We are developing an online procurement platform for the construction industry which will provide more opportunities to contractors and suppliers.",
      icon: faShoppingCart,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748867506/ibid_a92qfm.png",
      color: "bg-rose-500",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="digital-construction"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric background pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Floating abstract shapes */}
        <svg
          className="absolute top-1/4 -left-20 w-64 h-64 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,100 C75,50 125,50 150,100 C175,150 125,150 100,125 C75,150 25,150 50,100 Z"
            fill="#3B82F6"
          />
        </svg>

        <svg
          className="absolute bottom-1/3 -right-20 w-72 h-72 opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,50 C150,75 150,125 100,150 C50,125 50,75 75,100 C50,75 50,25 100,50 Z"
            fill="#06B6D4"
          />
        </svg>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Digital{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Construction
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 120 6"
              >
                <path
                  d="M0 3 C30 5, 90 1, 120 3"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto relative">
            Reinventing construction with digital intelligence{" "}
            <svg
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24"
              viewBox="0 0 100 10"
            >
              <path
                d="M0 5 Q25 10 50 5 T100 5"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="5,3"
                fill="none"
              />
            </svg>
          </p>
        </div>

        {/* Intro Content */}
        <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/10 rounded-full"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-cyan-500/10 rounded-full"></div>
          </div>

          <p className="text-gray-600 mb-6 text-lg leading-relaxed relative pl-6 border-l-4 border-blue-500/20">
            <svg
              className="absolute left-0 top-0 w-4 h-4 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 20l-5-5 5-5" />
              <path d="M17 4l5 5-5 5" />
            </svg>
            Digital construction reduces waste and inefficiency. It is improving
            design and design teams coordination, identifying problems before
            construction, reducing materials and labour waste on site.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed relative pl-6 border-l-4 border-cyan-500/20">
            <svg
              className="absolute left-0 top-0 w-4 h-4 text-cyan-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 20l-5-5 5-5" />
              <path d="M17 4l5 5-5 5" />
            </svg>
            Digital tools like BIM, Virtual reality, augmented reality and
            construction digital twins shall change the way buildings shall be
            designed, constructed, operated and maintained.
          </p>
        </div>

        {/* Projects Slideshow */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Projects List */}
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <svg
                className="w-8 h-8 mr-3 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Featured Projects
              <span className="ml-auto text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentSlide + 1}/{projects.length}
              </span>
            </h3>

            <div className="relative h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-200 shadow-lg">
              {/* Project card background pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="diagonal-stripes"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <rect width="15" height="20" fill="white" />
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="20"
                    stroke="#3B82F6"
                    strokeWidth="1"
                  />
                </pattern>
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#diagonal-stripes)"
                />
              </svg>

              {/* Slides */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 transition-opacity duration-500 flex flex-col ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-12 h-12 rounded-xl ${project.color} text-white flex items-center justify-center shadow-md`}
                      >
                        <FontAwesomeIcon icon={project.icon} size="lg" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Slide Indicators */}
                  <div className="flex justify-center space-x-2 mt-auto mb-4">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentSlide
                            ? "bg-blue-600 w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Navigation Controls */}
              <div className="absolute bottom-6 right-6 flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className="text-blue-600 text-lg"
                  />
                </button>
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
                  aria-label="Previous slide"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-blue-600 text-lg"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
                  aria-label="Next slide"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-blue-600 text-lg"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Slideshow Images */}
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                {/* Image decoration */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-blue-500/50"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-cyan-500/50"></div>

                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        project.color.split("-")[1] === "blue"
                          ? "bg-blue-500"
                          : project.color.split("-")[1] === "purple"
                          ? "bg-purple-500"
                          : project.color.split("-")[1] === "emerald"
                          ? "bg-emerald-500"
                          : project.color.split("-")[1] === "amber"
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      } mr-2`}
                    ></div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm font-medium">
                    Project {index + 1} of {projects.length}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalConstruction;
