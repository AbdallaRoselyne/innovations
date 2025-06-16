import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBoxOpen,
  faLightbulb,
  faChartLine,
  faMicroscope,
  faRobot,
  faShieldAlt,
  faLeaf,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const CleanFarming = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const farmingProjects = [
    {
      title: "Vertical Indoor Farm",
      subtitle:
        "From pilot to product: a fully optimised indoor farming system, ready to scale",
      description:
        "Developed with support from the Mauritius Research and Innovation Council (MRIC), our vertical indoor farm is a high-performance, precision-controlled solution for growing baby leaves and microgreens—without soil, pesticides, or excess water. At its core is a custom-designed horticultural lighting system, engineered to deliver targeted light spectra that optimise plant growth and energy efficiency.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop",
      tags: [
        "Tech-Ready",
        "Commercially Scalable",
        "Zero Pesticides",
        "Minimal Water",
      ],
      icon: faSeedling,
      features: [
        "Custom horticultural lighting system",
        "Precision-controlled environment",
        "Two years of R&D and refinement",
        "Turnkey solution for urban spaces",
      ],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Automated Container Farm",
      subtitle: "Smart, mobile, and built for the future of food",
      description:
        "Our containerised farm is a fully integrated, IoT-connected growing system designed for rapid deployment and remote monitoring. Unlike mass-produced alternatives, every element has been engineered for performance, durability, and plant health—from custom-designed LED lighting and precision nutrient control to automated irrigation and real-time data analytics.",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&h=600&fit=crop",
      tags: [
        "IoT-Connected",
        "Rapid Deployment",
        "Real-time Analytics",
        "Smart Food Production",
      ],
      icon: faBoxOpen,
      features: [
        "Fully integrated IoT connectivity",
        "Custom-designed LED lighting",
        "Precision nutrient control",
        "Advanced materials & engineering",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Energy-Efficient Grow Lighting",
      subtitle: "Lighting reimagined—for plants, not just people",
      description:
        "At Prodesign Innovations, we've been studying how plants respond to different light spectra in controlled indoor environments. This field—called photomorphogenesis—is the science behind our lighting innovation. We don't just use LEDs—we engineer light the way plants want it.",
      image:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=600&fit=crop",
      tags: [
        "Photomorphogenesis",
        "Custom PCBs",
        "High-Grade Components",
        "24/7 Operation",
      ],
      icon: faLightbulb,
      features: [
        "Tailored lighting recipes for crops",
        "Custom-designed PCBs with thermal management",
        "Top-tier LED modules and drivers",
        "Premium-grade polycarbonate diffusers",
      ],
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  const keyDifferentiators = [
    {
      icon: faMicroscope,
      title: "Science-Based Design",
      description:
        "Purpose-built lighting based on plant response science and photomorphogenesis research",
    },
    {
      icon: faRobot,
      title: "IoT Integration",
      description:
        "Real-time data capture with AI-assisted optimization for maximum yield",
    },
    {
      icon: faShieldAlt,
      title: "Built for Tropics",
      description:
        "Engineered for tropical humidity, heat, and power conditions with local support",
    },
    {
      icon: faCog,
      title: "Modular Engineering",
      description:
        "Every component designed and tested for longevity, from circuit board up",
    },
  ];

  // Custom leaf pattern background
  const LeafPattern = () => (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="leaf-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20,0 Q30,10 20,20 Q10,10 20,0"
            fill="#0072CE"
            transform="rotate(45 20 20)"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
    </svg>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-500 via-white to-emerald-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: `rgba(0, 114, 206, ${0.1 + Math.random() * 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}

        {/* Organic blobs */}
        <svg
          className="absolute top-0 right-0 w-1/2 opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(400 400)">
            <path
              d="M136.8,-152.4C178.3,-125.7,214.4,-84.3,221.2,-37.6C228,9.2,205.5,61.3,170.1,97.9C134.7,134.5,86.5,155.6,31.1,172.3C-24.3,189,-86.9,201.4,-126.3,175.9C-165.7,150.4,-181.9,87.1,-186.1,24.2C-190.3,-38.7,-182.5,-101.2,-151.4,-131.8C-120.3,-162.4,-65.9,-161.1,-10.9,-152.3C44.1,-143.5,88.3,-127.2,136.8,-152.4Z"
              fill="#0072CE"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-[#0072CE] to-emerald-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
              Clean
            </span>
            <span className="text-slate-800"> Farming</span>
          </h1>

          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 mb-8 shadow-sm">
            <FontAwesomeIcon
              icon={faLeaf}
              className="text-emerald-600 text-xl"
            />
            <span className="text-emerald-800 font-semibold">
              Engineering the Future of Farming
            </span>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-600 leading-relaxed">
            <p className="bg-white/80 backdrop-blur-sm p-6 py-16 px-6 rounded-2xl border border-slate-200/50 shadow-sm">
              Farming relies on the use of pesticides, chemical fertilizers and
              water. 70% of our global fresh water is used in agriculture.
              Excessive use of chemicals is polluting our environment and a
              major concern to our health. A high prevalence of cancer has been
              associated with exposure to pesticides in the vegetables we
              consume.

              <p className="p-6 rounded-2x ">
              <strong className="text-slate-800">
                The future of food will be grown indoors—cleaner, smarter, and
                closer to home.
              </strong>
            </p>
            <p className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-sm">
              At Prodesign Innovations, we are developing scalable, tech-enabled
              farming systems that address food security, water scarcity, and
              chemical overuse. Our vertical and containerised farms use
              precision-engineered lighting, IoT connectivity, and data-driven
              insights to grow high-value crops with zero pesticides and minimal
              water. Backed by real-world trials, proprietary designs, and over
              two years of focused R&D, we’re not just experimenting—we’re
              building a viable model for clean, local food production in a
              climate-uncertain world.
            </p>
            </p>
            
            
          </div>
        </div>

        {/* Main Projects Section */}
        <div className="mb-20 bg-[#0072CE]/5 py-16 px-6 rounded-3xl relative overflow-hidden">
          <LeafPattern />
          <div className="relative z-10">
            {/* Project Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {farmingProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                    activeProject === index
                      ? "bg-gradient-to-r from-[#0072CE] to-emerald-500 text-white shadow-lg scale-105"
                      : "bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200/50"
                  }`}
                >
                  <FontAwesomeIcon icon={project.icon} />
                  <span className="hidden sm:inline">{project.title}</span>
                </button>
              ))}
            </div>

            {/* Active Project Display */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${farmingProjects[activeProject].gradient} text-white flex items-center justify-center`}
                    >
                      <FontAwesomeIcon
                        icon={farmingProjects[activeProject].icon}
                        className="text-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-800">
                        {farmingProjects[activeProject].title}
                      </h3>
                      <p className="text-[#0072CE] font-semibold">
                        {farmingProjects[activeProject].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {farmingProjects[activeProject].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-800">Key Features:</h4>
                    {farmingProjects[activeProject].features.map(
                      (feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#0072CE] to-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {farmingProjects[activeProject].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-r from-[#0072CE]/10 to-emerald-100 text-[#0072CE] rounded-full text-sm font-semibold border border-[#0072CE]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={farmingProjects[activeProject].image}
                      alt={farmingProjects[activeProject].title}
                      className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Overlay Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={farmingProjects[activeProject].icon}
                        className="text-white text-xl"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#0072CE] to-emerald-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-[#0072CE] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              What Sets Our
              <span className="bg-gradient-to-r from-[#0072CE] to-emerald-500 bg-clip-text text-transparent">
                {" "}
                Farms{" "}
              </span>
              Apart?
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              While others offer off-the-shelf container farms assembled with
              cheap, failure-prone parts, we build intelligent food systems from
              the circuit board up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyDifferentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* SVG decoration */}
                <svg
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#0072CE"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>

                <div className="w-16 h-16 bg-gradient-to-br from-[#0072CE] to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-white text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-[#0072CE] to-emerald-600 rounded-3xl p-12 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building a Viable Model for Clean, Local Food Production
              </h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
                Backed by real-world trials, proprietary designs, and over two
                years of focused R&D, we're not just experimenting—we're
                engineering the future of farming in a climate-uncertain world.
              </p>
              <button className="px-8 py-4 bg-white text-[#0072CE] rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started with Clean Farming
              </button>
              <div className="mt-8 inline-flex items-center gap-2 text-white/90 font-semibold">
                <FontAwesomeIcon icon={faLeaf} />
                <span>Clean • Smart • Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CleanFarming;
