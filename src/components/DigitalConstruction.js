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
    },
    {
      title: "Integration of VR and AR with BIM",
      description:
        "We have been able to integrate BIM with Augmented reality on a small area. BIM models can be superimposed in a room and allow contractors to build complex plant rooms exactly, reducing waste and time.",
      icon: faVrCardboard,
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/vr-ar-bim.jpg",
    },
    {
      title: "Interactive user manual",
      description:
        "We have produced an interactive user guide for building owners. This guide is easy to use and contains information on how to operate and maintain installation through an interactive web browser.",
      icon: faBookOpen,
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/interactive-manual.jpg",
    },
    {
      title: "Construction digital twin",
      description:
        "We are working to improve building design, construction and operations through the study of digital twins. This is a project co-funded by the Mauritius Research and Innovations Council.",
      icon: faProjectDiagram,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495141/prototype_jnqj9y.png",
    },
    {
      title: "Construction procurement platform",
      description:
        "We are developing an online procurement platform for the construction industry which will provide more opportunities to contractors and suppliers.",
      icon: faShoppingCart,
      image:
        "https://res.cloudinary.com/your-cloud-name/image/upload/v1234567/procurement-platform.jpg",
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
        <svg
          className="absolute top-0 left-0 w-1/3 opacity-10"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,250 C150,400 350,100 500,250 L500,0 L0,0 Z"
            fill="#3B82F6"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-1/3 opacity-10"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,250 C150,100 350,400 500,250 L500,500 L0,500 Z"
            fill="#06B6D4"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-white/80 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Construction
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="4"
                viewBox="0 0 120 4"
              >
                <path
                  d="M0 2 C30 4, 90 0, 120 2"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming the construction industry through innovative digital
            solutions
          </p>
        </div>

        {/* Intro Content */}
        <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Digital construction reduces waste and inefficiency. It is improving
            design and design teams coordination, identifying problems before
            construction, reducing materials and labour waste on site.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
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
            </h3>

            <div className="relative h-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-200">
              {/* Slides */}
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-6 transition-opacity duration-500 flex flex-col ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={project.icon} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Slide Indicators */}
                  <div className="flex justify-center space-x-2 mt-auto">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentSlide
                            ? "bg-blue-600 w-6"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Navigation Controls */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md transition"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className="text-blue-600"
                  />
                </button>
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md transition"
                  aria-label="Previous slide"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-blue-600"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md transition"
                  aria-label="Next slide"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-blue-600"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
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
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {projects[currentSlide].title}
                  </h3>
                  <p className="text-white/90">
                    {index + 1} / {projects.length}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalConstruction;
