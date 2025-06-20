import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faWeightHanging,
  faLeaf,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import { CheckCircle } from "lucide-react";

const ElectricMobility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      title: "Electric Scooters",
      subtitle: "Flagship Project",
      description:
        "We currently have two working prototypes in testing, with production targeted for launch. These models are designed for:",
      icon: faBolt,
      status: "prototype-ready",
      features: [
        "High manoeuvrability in congested areas",
        "Low-cost charging via standard power outlets",
        "Easy maintenance using locally available components",
      ],
      tags: ["Prototype Ready", "Testing Phase", "Production Prep"],
      progress: 85,
      gradient: "from-blue-500 to-cyan-500",
      stats: [
        { label: "Max Speed", value: "45 km/h" },
        { label: "Range", value: "80 km" },
        { label: "Weight", value: "28 kg" },
        { label: "Charge Time", value: "4 hrs" },
      ],
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
      className="py-20 px-4 bg-gray-500 relative overflow-hidden min-h-screen"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative">
              <span className="relative z-10">Electric</span>
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Mobility
            </span>
          </h2>
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-blue-900/50 rounded-full border border-blue-700/50">
            <FontAwesomeIcon icon={faBolt} className="mr-2 text-blue-300" />
            Driving sustainable transport, from last mile to local manufacturing
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section with Scooter Image */}
          <div className="relative mb-10 rounded-3xl overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-40 -bottom-20 w-[800px] h-[800px] opacity-20">
                <img
                  src="https://res.cloudinary.com/dbhnlfdva/image/upload/v1750326323/image_x5ueyv.png"
                  alt="Electric Scooter Background"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center py-6 lg:py-12">
              {/* Text Content */}
              <div className="lg:w-1/2 px-8 lg:px-12">
                <div className="space-y-8">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    The global shift to electric vehicles is accelerating—but
                    most solutions are built for wealthy markets, not for small
                    island states, dense urban zones, or emerging economies.
                    <span className="font-semibold text-white">
                      {" "}
                      Prodesign Innovation is solving that gap.
                    </span>
                  </p>

                  <p className="text-lg text-gray-400 leading-relaxed">
                    We're designing and prototyping{" "}
                    <span className="font-semibold text-blue-300">
                      low-cost, high-efficiency electric transport platforms
                    </span>
                    —engineered for local assembly, short-range use, and
                    affordability.
                  </p>

                  <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-700/30 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <p className="text-lg font-semibold text-blue-200 relative z-10">
                      This is not just an environmental solution—it's a business
                      opportunity in a fast-growing, underserved segment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Scooter Image - Now larger and more prominent */}
              <div className="lg:w-1/2 flex justify-center relative mt-4 lg:mt-0">
                <div className="relative w-full max-w-2xl">
                  <div className="relative group">
                    <img
                      src="https://res.cloudinary.com/dbhnlfdva/image/upload/v1750326323/image_x5ueyv.png"
                      alt="Electric Scooter"
                      className="relative z-10 w-full h-auto max-h-[700px] object-contain transition-all duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100 drop-shadow-[0_0_30px_rgba(0,150,255,0.3)]"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-90 group-hover:scale-100 transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Electric{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Scooters
              </span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm mb-6 border border-blue-800/50">
              <FontAwesomeIcon icon={faBolt} />
              <span>
                Rethinking last-mile transport with compact electric solutions
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Since 2021, our engineering team has been developing multiple
              prototypes of electric scooters tailored for short-range,
              high-frequency use—perfect for delivery, service, and urban
              commuting.
            </p>
          </div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50 mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} text-white flex items-center justify-center shadow-lg`}
                    >
                      <FontAwesomeIcon
                        icon={project.icon}
                        className="text-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <div className="text-blue-400 font-medium">
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-400">
                        Development Progress
                      </span>
                      <span className="text-sm font-bold text-white">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 bg-gradient-to-r ${project.gradient} rounded-full transition-all duration-1000 ease-out`}
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
                        className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
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

        {/* Future Models Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Future Models
              </span>{" "}
              in Development
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our modular platform enables rapid development of diverse electric
              vehicles tailored to specific use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureVehicles.map((vehicle, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl group-hover:opacity-80 transition-opacity duration-500"></div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${vehicle.gradient} text-white flex items-center justify-center mb-6 shadow-lg`}
                >
                  <FontAwesomeIcon icon={vehicle.icon} className="text-2xl" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {vehicle.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {vehicle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-emerald-900/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dbhnlfdva/image/upload/v1750240551/transparent_d56tcf.png')] bg-contain bg-no-repeat bg-right opacity-10"></div>

          <div className="relative z-10 p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Investment
                  </span>{" "}
                  Opportunity
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Join us in building clean, locally produced transport
                  solutions for the next generation of island cities and
                  emerging markets.
                </p>

                <div className="space-y-6">
                  {investmentPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 font-medium leading-relaxed">
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
    </section>
  );
};

export default ElectricMobility;
