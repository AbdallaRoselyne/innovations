import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import {
  Zap,
  Cpu,
  Car,
  DollarSign,
  MapPin,
  Battery,
  Wrench,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const ElectricMobility = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activePrototype, setActivePrototype] = useState(0);
  const sectionRef = useRef(null);

  const prototypes = [
    {
      id: "scooter-1",
      title: "Electric Scooter Model 1",
      subtitle: "Prototype 1",
      description:
        "First working prototype designed for urban commuting and short-range transportation with optimal balance of range and maneuverability.",
      images: [
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-1-main.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-1-side.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-1-detail.jpg`,
      ],
      specs: {
        range: "45km",
        speed: "25km/h",
        weight: "18kg",
        charging: "4 hours",
      },
      status: "Testing Phase",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "scooter-2",
      title: "Electric Scooter Model 2",
      subtitle: "Prototype 2",
      description:
        "Second working prototype with enhanced features and improved performance for delivery and service applications.",
      images: [
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-2-main.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-2-side.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-2-detail.jpg`,
      ],
      specs: {
        range: "60km",
        speed: "30km/h",
        weight: "22kg",
        charging: "5 hours",
      },
      status: "Testing Phase",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: "scooter-3",
      title: "Electric Scooter Model 3",
      subtitle: "Prototype 3",
      description:
        "Third prototype in our electric scooter series, incorporating learnings from the first two models for enhanced reliability and performance.",
      images: [
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-3-main.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-3-side.jpg`,
        `${CLOUDINARY_URL}/image/upload/c_fill,w_800,h_600,q_auto/electric-scooter-3-detail.jpg`,
      ],
      specs: {
        range: "55km",
        speed: "28km/h",
        weight: "20kg",
        charging: "4.5 hours",
      },
      status: "Testing Phase",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const futureVehicles = [
    {
      title: "Compact Cargo Scooter",
      description:
        "Specialized for logistics and small businesses with enhanced cargo capacity and modular configurations.",
      icon: Car,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Electric Delivery Vehicle",
      description:
        "Urban distribution vehicle designed for efficient last-mile delivery operations.",
      icon: Cpu,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Single-Passenger Electric Car",
      description:
        "Compact electric car engineered and assembled in Mauritius for local and regional markets.",
      icon: Car,
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const projects = [
    {
      title: "Electric Scooters",
      subtitle: "Flagship Project",
      description:
        "Since 2021, our engineering team has been developing multiple prototypes of electric scooters tailored for short-range, high-frequency use—perfect for delivery, service, and urban commuting.",
      icon: Zap,
      status: "prototype-ready",
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

  return (
    <section
      ref={sectionRef}
      id="electric-mobility"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 relative overflow-hidden min-h-screen"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">Electric</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-400/30 -rotate-1 -z-0"></span>
            </span>{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Mobility{" "}
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

          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            <FontAwesomeIcon icon={faBolt} className="mr-2" />
            Driving sustainable transport, from last mile to local manufacturing{" "}
          </span>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              The global shift to electric vehicles is accelerating—but most
              solutions are built for wealthy markets, not for small island
              states, dense urban zones, or emerging economies.
              <span className="font-semibold text-gray-800">
                {" "}
                Prodesign Innovations is solving that gap.
              </span>
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're designing and prototyping{" "}
                <span className="font-bold text-blue-600">
                  low-cost, high-efficiency electric transport platforms
                </span>
                —engineered for local assembly, short-range use, and
                affordability. Our focus is on{" "}
                <span className="font-bold text-emerald-600">
                  cargo scooters, delivery vehicles, and compact EVs
                </span>{" "}
                tailored to the unique constraints and opportunities of
                Mauritius and similar markets across Africa and the Indian
                Ocean.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Video Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
                      <p className="text-xl font-semibold">
                        Loading Innovation...
                      </p>
                    </div>
                  </div>
                )}

                <video
                  src={`${CLOUDINARY_URL}/video/upload/q_auto/scoooterss_rgpouv.mp4`}
                  className="w-full h-80 lg:h-96 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVsZWN0cmljIFNjb290ZXIgUHJvdG90eXBlPC90ZXh0Pjwvc3ZnPg=="
                />

                {/* Enhanced Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute top-6 left-6 flex gap-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live Demo
                    </span>
                  </div>
                  <div className="bg-emerald-500/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-white">
                      Zero Emissions
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h4 className="text-white font-bold text-2xl mb-2">
                    Electric Scooter Prototype
                  </h4>
                  <p className="text-white/90 text-lg mb-4">
                    Sustainable last-mile transportation solution
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Made in Mauritius</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Battery className="w-4 h-4" />
                      <span className="text-sm">100% Electric</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 hover:scale-102"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} text-white flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h4 className="text-2xl font-bold text-gray-800">
                            {project.title}
                          </h4>
                          <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {project.subtitle}
                          </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                          {project.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              Development Progress
                            </span>
                            <span className="text-sm font-bold text-gray-800">
                              {project.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 bg-gradient-to-r ${project.gradient} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isVisible
                                  ? `${project.progress}%`
                                  : "0%",
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          {project.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                              <span className="text-gray-700 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prototype Showcase Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Three{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Scooter Prototypes
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We currently have{" "}
              <strong>two working prototypes in testing</strong>, with
              production targeted for launch. These models position Mauritius as
              a potential assembly hub for clean mobility in the region.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                🔹 Prototype-ready
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">
                🔹 Testing in progress
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                🔹 Production preparation underway
              </span>
            </div>
          </div>

          {/* Prototype Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-100/50">
              {prototypes.map((prototype, index) => (
                <button
                  key={index}
                  onClick={() => setActivePrototype(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activePrototype === index
                      ? `bg-gradient-to-r ${prototype.gradient} text-white shadow-lg`
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {prototype.subtitle}
                </button>
              ))}
            </div>
          </div>

          {/* Active Prototype Display */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100/50">
            {prototypes.map((prototype, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activePrototype === index
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Image Gallery */}
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={prototype.images[0]}
                        alt={`${prototype.title} - Main View`}
                        className="w-full h-80 object-cover"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMzAwIiByPSI0MCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTUlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm90b3R5cGUgSW1hZ2U8L3RleHQ+PC9zdmc+";
                        }}
                      />
                      <div
                        className={`absolute top-4 right-4 bg-gradient-to-r ${prototype.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                      >
                        {prototype.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {prototype.images.slice(1).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative rounded-xl overflow-hidden shadow-lg"
                        >
                          <img
                            src={image}
                            alt={`${prototype.title} - View ${imgIndex + 2}`}
                            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src =
                                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMTUwIiByPSIyMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzNzQxNTEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRldGFpbCBWaWV3PC90ZXh0Pjwvc3ZnPg==";
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prototype Details */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prototype.gradient} text-white flex items-center justify-center`}
                      >
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">
                          {prototype.title}
                        </h4>
                        <p className="text-gray-600 font-medium">
                          {prototype.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {prototype.description}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(prototype.specs).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-gray-800 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize font-medium">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Features */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                      <h5 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Key Features
                      </h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Battery className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700">
                            Standard power outlet charging
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Wrench className="w-4 h-4 text-emerald-600" />
                          <span className="text-gray-700">
                            Easy maintenance with local components
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-700">
                            Designed for Mauritian conditions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Next: Modular Platform Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🔶 What's Next:{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Modular Electric Vehicle Platform
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>A scalable vision for local electric transport.</strong>{" "}
              This next phase of development is part of our strategy to offer
              modular electric vehicle platforms adaptable to regional needs and
              resource availability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureVehicles.map((vehicle, index) => {
              const IconComponent = vehicle.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vehicle.gradient} text-white flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 text-center mb-4">
                    {vehicle.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {vehicle.description}
                  </p>

                  <div className="mt-6 text-center">
                    <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      In Development
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        

        {/* Investment Opportunity Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-xl">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Investment Opportunity
                </h3>
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                  Join us in building clean, locally produced transport
                  solutions for the next generation of cities.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {investmentPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <span>
              This is not just an environmental solution—it's a business
              opportunity
            </span>
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobility;
