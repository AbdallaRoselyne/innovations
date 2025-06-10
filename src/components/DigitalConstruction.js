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
  faArrowRight,
  faXmark,
  faBolt,
  faBullseye,
  faLightbulb,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const DigitalConstruction = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      id: "bim-automation",
      title: "Automated BIM Coordination & Compliance",
      shortDescription:
        "Smart code-checking and coordination through automation. We're developing rule-based systems that verify compliance and detect conflicts automatically.",
      fullDescription:
        "We are developing a rule-based automation engine that enhances BIM coordination by embedding code compliance and clash detection into the design process. Our system can automatically verify fire safety requirements, detect design conflicts, and flag non-compliant layouts—all within the BIM environment.",
      icon: faCode,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495142/VR_zoxeil.jpg",
      color: "bg-blue-500",
      benefits: [
        "Accelerate design approvals",
        "Reduce rework and consultant review time",
        "Minimise manual errors in complex projects",
        "Create traceable, auditable compliance records",
      ],
      status: "Research Phase",
    },
    {
      id: "ar-integration",
      title: "BIM Integration with Augmented Reality",
      shortDescription:
        "Precision-built spaces through immersive technology. Superimpose BIM models onto real-world spaces for millimetre-level accuracy.",
      fullDescription:
        "We've successfully demonstrated how Building Information Modelling (BIM) can be integrated with Augmented Reality (AR) to enhance construction accuracy—especially in complex, services-dense environments like plant rooms. By superimposing BIM models directly onto real-world spaces through AR, contractors can visualise the exact installation layout before any work begins.",
      icon: faVrCardboard,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495142/VR_zoxeil.jpg",
      color: "bg-purple-500",
      benefits: [
        "Millimetre-level precision during installation",
        "Reduction of rework, material waste, and delays",
        "Faster execution with fewer coordination errors",
        "Scalable framework for high-value construction",
      ],
      status: "Pilot Complete",
    },
    {
      id: "digital-twin",
      title: "Construction Digital Twin Research",
      shortDescription:
        "Building smarter, from design to operation. Real-time digital replicas that bridge virtual planning with physical performance.",
      fullDescription:
        "We are developing a construction-focused digital twin framework to improve how buildings are designed, constructed, and managed throughout their lifecycle. This initiative is co-funded by the Mauritius Research and Innovation Council (MRIC) and aims to bridge the gap between virtual planning and physical performance.",
      icon: faProjectDiagram,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748495141/prototype_jnqj9y.png",
      color: "bg-emerald-500",
      benefits: [
        "Enhanced decision-making during construction",
        "Early detection of site issues through live synchronisation",
        "Streamlined facility management through connected data",
        "Reduced lifecycle costs and improved sustainability",
      ],
      status: "MRIC Co-funded",
    },
    {
      id: "procurement-platform",
      title: "Construction Procurement Platform",
      shortDescription:
        "Connecting the supply chain for a smarter construction economy. Digital platform streamlining sourcing and creating new opportunities.",
      fullDescription:
        "We're building a digital procurement platform tailored to the construction industry—designed to streamline sourcing, improve transparency, and create new business opportunities for contractors and suppliers.",
      icon: faShoppingCart,
      image:
        "https://res.cloudinary.com/dbhnlfdva/image/upload/v1748867506/ibid_a92qfm.png",
      color: "bg-rose-500",
      benefits: [
        "Browse and compare suppliers in real-time",
        "Submit and manage quotations efficiently",
        "Track procurement across multiple projects",
        "Access wider network of verified partners",
      ],
      status: "In Development",
    },
    {
      id: "interactive-manual",
      title: "Interactive User Manuals",
      shortDescription:
        "Smart documentation for building operations. Interactive web-based guides that make building maintenance intuitive and accessible.",
      fullDescription:
        "We have produced an interactive user guide for building owners. This guide is easy to use and contains information on how to operate and maintain installation through an interactive web browser.",
      icon: faBookOpen,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      color: "bg-amber-500",
      benefits: [
        "Easy-to-use interactive interface",
        "Comprehensive operation instructions",
        "Maintenance scheduling and tracking",
        "Web-based accessibility from any device",
      ],
      status: "Live Production",
    },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying && !isHovering && !expandedProject) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, projects.length, isHovering, expandedProject]);

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

  const openProject = (projectId) => {
    setExpandedProject(projectId);
    setIsPlaying(false);
  };

  const closeProject = () => {
    setExpandedProject(null);
    setIsPlaying(true);
  };

  const currentProject = projects[currentSlide];
  const expandedProjectData = projects.find((p) => p.id === expandedProject);

  return (
    <section
      id="digital-construction"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D-like elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl animate-float-fast"></div>

        {/* Grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.8"
              strokeDasharray="2,2"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-prodesign-blue to-cyan-500 bg-clip-text text-transparent">
                Digital Construction
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
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4">
            <FontAwesomeIcon icon={faBolt} className="mr-2" />
            Reinventing construction with digital intelligence{" "}
          </span>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineering smart solutions to cut waste, improve coordination, and
            reshape how buildings are designed, built, and operated.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBullseye} className="text-blue-500" />
              <span>Reduce Material Waste</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLightbulb} className="text-purple-500" />
              <span>Enhance Team Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-emerald-500"
              />
              <span>Improve Construction Accuracy</span>
            </div>
          </div>
        </div>

        {/* Intro Content */}
        <div className="mb-16 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FontAwesomeIcon
                  icon={faCode}
                  className="w-6 h-6 mr-3 text-blue-600"
                />
                Digital Intelligence in Construction
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Prodesign Innovations, our digital construction R&D tackles
                one of the industry's biggest challenges: inefficiency. We're
                building advanced tools that optimize workflows, reduce material
                waste, and prevent costly on-site errors—before construction
                begins.
              </p>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">
                  Our Focus Areas:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>
                      BIM-integrated systems enhancing team collaboration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>
                      Construction digital twins connecting physical progress
                      with live data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>
                      Immersive technologies for smarter decision-making
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>
                      Lifecycle automation tools for building operations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div
          className="mb-8 flex items-center justify-between"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
            <FontAwesomeIcon
              icon={faProjectDiagram}
              className="w-8 h-8 mr-3 text-blue-600"
            />
            Innovation Showcase
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {currentSlide + 1}/{projects.length}
            </span>
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="text-blue-600"
              />
            </button>
          </div>
        </div>

        {/* Projects Slideshow */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Project Image */}
          <div className="lg:col-span-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
            <div
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out`}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Project info overlay */}
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-4 h-4 rounded-full ${currentProject.color} mr-3`}
                  ></div>
                  <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                </div>
                <p className="text-white/90 mb-6 max-w-lg">
                  {currentProject.shortDescription}
                </p>
                <button
                  onClick={() => openProject(currentProject.id)}
                  className="inline-flex items-center text-white font-medium group"
                >
                  Read case study
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-blue-600 text-lg"
              />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-blue-600 text-lg"
              />
            </button>
          </div>

          {/* Project Details */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
            <div className="absolute inset-0 p-8 flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl ${currentProject.color} text-white flex items-center justify-center shadow-md`}
                  >
                    <FontAwesomeIcon icon={currentProject.icon} size="lg" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {currentProject.title}
                  </h4>
                  <p className="text-gray-500">
                    Status: {currentProject.status}
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {currentProject.benefits.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${currentProject.color}`}
                    ></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={() => openProject(currentProject.id)}
                  className={`inline-block w-full py-3 px-6 text-center rounded-lg ${currentProject.color} text-white font-medium hover:opacity-90 transition-opacity`}
                >
                  Learn More About This Project
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentSlide
                        ? `${currentProject.color} w-6`
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Construction Process?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl text-lg">
              Discover how our digital construction solutions can optimize your
              workflows, reduce costs, and improve project outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Schedule a Demo
              </a>
              <a
                href="/digital-construction"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Explore All Solutions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Project Modal */}
      {expandedProject && expandedProjectData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={expandedProjectData.image}
                  alt={expandedProjectData.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${expandedProjectData.color} opacity-30`}
                ></div>

                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {expandedProjectData.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${expandedProjectData.color} text-white flex items-center justify-center shadow-lg`}
                  >
                    <FontAwesomeIcon
                      icon={expandedProjectData.icon}
                      size="lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {expandedProjectData.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {expandedProjectData.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {expandedProjectData.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Benefits
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {expandedProjectData.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                        />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={closeProject}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                    Back to Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DigitalConstruction;
