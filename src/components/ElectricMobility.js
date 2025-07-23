import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faWeightHanging,
  faLeaf,
  faIndustry,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CheckCircle } from "lucide-react";

const ElectricMobility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const sectionRef = useRef(null);

  const scooterModels = [
    {
      id: 1,
      title: "Model 001",
      tagline: "Safe. Stylish. Built for Fun.",
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922690/Three_wheel_Scooter_kdsfdm.png",
      detailImages: [
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922693/1000018469_tbfpxr.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922695/1000018453_oyh3v0.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922692/1000018456_bqhebv.jpg",
      ],
    },
    {
      id: 2,
      title: "Model 002",
      tagline: "Strong. Smooth. Built to Go Further.",
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750931216/image_5_atsbxp.png",
      detailImages: [
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922690/1000018434_meyukq.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922692/1000018419_tebab2.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750931088/image_s5f0bl.jpg",
      ],
    },
    {
      id: 3,
      title: "Model 003",
      tagline: "Rugged. Reinforced. Ready for Adventure.",
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750933269/Mountain_Scooter_ygvfzb.png",
      detailImages: [
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922692/1000018575_egu2hw.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922697/1000018578_g81k9z.jpg",
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922691/1000018579_savpdl.jpg",
      ],
    },
    {
      id: 4,
      title: "Model 004",
      tagline: "Compact. Safe. Ready to Ride.",
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922688/Kids_Scooter-B1_bh2b9s.png",
      detailImages: [
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750922688/Kids_Scooter-B1_bh2b9s.png",
      ],
    },
    {
      id: 5,
      title: "Model 005",
      tagline: "Gentle Power. Confident Starts. Kid-Friendly Design.",
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750931467/image_6_jmalij.png",
      detailImages: [
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750931467/image_6_jmalij.png",
      ],
    },
  ];

  const futureVehicles = [
    {
      title: "Compact Cargo Scooter",
      description:
        "Specialized for logistics and small businesses with enhanced cargo capacity and modular configurations.",
      icon: faWeightHanging,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Electric Delivery Vehicle",
      description:
        "Urban distribution vehicle designed for efficient last-mile delivery operations.",
      icon: faIndustry,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Single-Passenger Electric Car",
      description:
        "Compact electric car engineered and assembled in Mauritius for local and regional markets.",
      icon: faLeaf,
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const projects = [
    {
      subtitle: "Flagship Project",
      description:
        "We currently have two working prototypes in testing, with production targeted for launch. These models are designed for:",
      icon: faBolt,
      features: [
        "High manoeuvrability in congested areas",
        "Low-cost charging via standard power outlets",
        "Easy maintenance using locally available components",
      ],
      tags: ["Prototype Ready", "Testing Phase", "Production Prep"],
      progress: 85,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const investmentPoints = [
    "Accelerate prototype-to-market transitions",
    "Scale local production capacity",
    "Position Mauritius as a regional innovation and manufacturing base",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // SVG Background Elements
  const CircuitPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="circuit-pattern"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="20" cy="20" r="1" fill="currentColor" />
        <path d="M20 0V20M0 20H20" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
    </svg>
  );

  const BoltPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="bolt-pattern"
        x="0"
        y="0"
        width="60"
        height="60"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M30 0L15 30H30L15 60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#bolt-pattern)" />
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      id="electric-mobility"
      className="relative overflow-hidden min-h-screen bg-gray-50"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <CircuitPattern />
      </div>

      {/* Header Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <BoltPattern />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">Electric</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-cyan-400"
                  viewBox="0 0 200 20"
                >
                  <path
                    d="M0 10 Q 50 20 100 10 T 200 10"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="3"
                  />
                </svg>
              </span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Mobility
              </span>
            </h2>

            <div className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-800/50 rounded-full border border-blue-500/30 backdrop-blur-sm mb-8">
              <FontAwesomeIcon
                icon={faBolt}
                className="mr-3 text-cyan-300 animate-pulse"
              />
              <span>
                Driving sustainable transport, from last mile to local
                manufacturing
              </span>
            </div>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The global shift to electric vehicles is accelerating—but most
              solutions are built for wealthy markets, not for small island
              states, dense urban zones, or emerging economies.
              <span className="font-semibold text-cyan-300">
                {" "}
                Prodesign Innovation is solving that gap.
              </span>
            </p>
          </div>
        </div>

        {/* Animated floating bolts */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 text-cyan-400 opacity-30 animate-float">
          <FontAwesomeIcon icon={faBolt} className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 text-emerald-400 opacity-20 animate-float delay-1000">
          <FontAwesomeIcon icon={faBolt} className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 w-10 h-10 text-blue-400 opacity-15 animate-float delay-1500">
          <FontAwesomeIcon icon={faBolt} className="w-full h-full" />
        </div>
      </div>

      {/* Hero Image Section with Text Overlay */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbhnlfdva/image/upload/v1750675949/hero_2_vmxjx6.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Innovative{" "}
                <span className="text-cyan-400">Electric Solutions</span> for
                Modern Mobility
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We're designing and prototyping{" "}
                <span className="font-semibold text-cyan-300">
                  low-cost, high-efficiency electric transport platforms
                </span>
                —engineered for local assembly, short-range use, and
                affordability.
              </p>
              <p className="text-lg text-gray-200 leading relaxed mb-8">
                Our focus is on{" "}
                <span className="font-semibold text-cyan-300">
                  cargo scooters, delivery vehicles, and compact EVs
                </span>
                —tailored to the unique constraints and opportunities of
                Mauritius and similar markets across Africa and the Indian
                Ocean.
              </p>
              <div className="p-6 bg-gradient-to-r from-blue-900/40 to-gray-900/40 rounded-xl border border-gray-500/30 backdrop-blur-sm ">
                <p className="text-xl font-bold text-white">
                  This is not just an environmental solution—it's a business
                  opportunity in a fast-growing, underserved segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          {/* Project Details */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">
                <span className="relative z-10">
                  Electric{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Scooters
                  </span>
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-cyan-400"
                  viewBox="0 0 200 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5 T 200 5"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
              <div className="inline-flex items-center gap-2 bg-blue-900/70 text-blue-100 px-4 py-2 rounded-full text-sm mb-6 border border-blue-800/50">
                <FontAwesomeIcon icon={faBolt} />
                <span>
                  Rethinking last-mile transport with compact electric solutions
                </span>
              </div>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                Since 2021, our engineering team has been developing multiple
                prototypes of electric scooters tailored for short-range,
                high-frequency use—perfect for delivery, service, and urban
                commuting.
              </p>
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-neutral-100 rounded-3xl p-6 shadow-2xl border border-gray-900 mb-12 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} text-white flex items-center justify-center shadow-lg`}
                      >
                        <FontAwesomeIcon
                          icon={project.icon}
                          className="text-xl"
                        />
                      </div>
                      <div>
                        <div className="text-blue-600 font-medium text-lg">
                          {project.subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-900 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-medium text-gray-700">
                          Development Progress
                        </span>
                        <span className="text-base font-bold text-gray-900">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                        <div
                          className={`h-2 bg-gradient-to-r ${project.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${project.progress}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-shadow`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scooter Models Showcase */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 relative inline-block">
                <span className="relative z-10">
                  Our{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Scooter Models
                  </span>
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-cyan-400"
                  viewBox="0 0 200 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5 T 200 5"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                Discover our complete range of electric scooters' prototypes,
                designed for every rider and every adventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scooterModels.map((model) => (
                <div
                  key={model.id}
                  className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => setSelectedModel(model)}
                >
                  {/* Model badge */}

                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 p-8 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.title}
                      className="relative max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {model.tagline}
                    </p>

                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      <span>View Full Specifications</span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedModel && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
              onClick={() => setSelectedModel(null)}
            >
              <div
                className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center shadow-sm z-10">
                  <div>
                    <h3 className="text-blue-500 font-bold">
                      {selectedModel.title}
                    </h3>
                    <p className="text-gray-900 font-semibold">
                      {selectedModel.tagline}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedModel(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-8 flex items-center justify-center mb-8 relative overflow-hidden">
                        <img
                          src={selectedModel.image}
                          alt={selectedModel.name}
                          className="relative max-w-full max-h-full object-contain"
                        />
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex justify-between mb-4">
                        <button
                          onClick={() => {
                            const currentIndex = scooterModels.findIndex(
                              (model) => model.id === selectedModel.id
                            );
                            const prevIndex =
                              (currentIndex - 1 + scooterModels.length) %
                              scooterModels.length;
                            setSelectedModel(scooterModels[prevIndex]);
                          }}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="w-5 h-5"
                          />
                        </button>
                        <button
                          onClick={() => {
                            const currentIndex = scooterModels.findIndex(
                              (model) => model.id === selectedModel.id
                            );
                            const nextIndex =
                              (currentIndex + 1) % scooterModels.length;
                            setSelectedModel(scooterModels[nextIndex]);
                          }}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="w-5 h-5"
                          />
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-6">
                        Detailed Views
                      </h3>

                      {/* Small images grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {selectedModel.detailImages
                          .slice(0, 3)
                          .map((img, index) => (
                            <div
                              key={index}
                              className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:shadow-md transition-all"
                              onClick={() => {
                                // Set the clicked image as the main image
                                setSelectedModel({
                                  ...selectedModel,
                                  image: img,
                                });
                              }}
                            >
                              <img
                                src={img}
                                alt={`Detail ${index + 1}`}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Future Models Section */}
          <div className="mb-28">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Future Models{" "}
                    <span className="text-white">in Development</span>
                  </span>
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-cyan-400"
                  viewBox="0 0 200 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5 T 200 5"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                Our modular platform enables rapid development of diverse
                electric vehicles tailored to specific use cases.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {futureVehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient background effect */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${vehicle.gradient} rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  {/* Icon with gradient */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vehicle.gradient} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <FontAwesomeIcon icon={vehicle.icon} className="text-2xl" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {vehicle.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {vehicle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-emerald-900/90 backdrop-blur-sm"></div>

            {/* Animated floating elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 text-cyan-400 opacity-10 animate-float">
              <FontAwesomeIcon icon={faBolt} className="w-full h-full" />
            </div>
            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 text-emerald-400 opacity-10 animate-float delay-1000">
              <FontAwesomeIcon icon={faBolt} className="w-full h-full" />
            </div>

            <div className="relative z-10 p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Investment
                    </span>{" "}
                    Opportunity
                  </h2>
                  <p className="text-xl text-gray-100 leading-relaxed mb-10">
                    Join us in building clean, locally produced transport
                    solutions for the next generation of island cities and
                    emerging markets.
                  </p>

                  <div className="space-y-6">
                    {investmentPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg mt-1 flex-shrink-0 shadow-md">
                          {index + 1}
                        </div>
                        <p className="text-gray-300 font-medium leading-relaxed text-lg">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        .delay-1500 {
          animation-delay: 1.5s;
        }
        .clip-corner {
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
};

export default ElectricMobility;
