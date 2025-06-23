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
  const [selectedModel, setSelectedModel] = useState(null);
  const sectionRef = useRef(null);

  const scooterModels = [
    {
      id: 1,
      name: "M002B",
      title: "3-Wheeled Electric Scooter for Children",
      tagline: "Safe. Stylish. Built for Fun.",
      image: "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png", // Replace with actual M002B image
      description: "The M002 is a fun and reliable electric scooter designed especially for children. With its stable 3-wheel configuration and durable aluminium frame, it's perfect for young riders who are just getting started. Easy to use, quick to fold, and available in vibrant colours – this scooter is made to move.",
      features: [
        "Powerful 200W Front Wheel Motor – Smooth acceleration with just the right amount of kick for young riders.",
        "24V Battery System – Long-lasting battery for extended play sessions",
        "6.5-Inch Wheels – Balanced and grippy for added safety on sidewalks and playground paths.",
        "Anti-Slip Deck – Keeps feet firmly planted for confident riding.",
        "Quick-Fold Mechanism – Effortless folding for easy storage and transport.",
        "Sturdy Aluminium Frame – Lightweight yet tough enough for everyday use.",
        "Colour Options – Available in playful Blue and Pink finishes."
      ],
      summary: "Whether it's a quick ride to the park or cruising around the yard, the M002 turns everyday moments into adventures."
    },
    {
      id: 2,
      name: "M004-B1",
      title: "2 Wheeled Electric Scooter for Kids",
      tagline: "Compact. Safe. Ready to Ride.",
      image: "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png", // Replace with actual M004-B1 image
      description: "Designed for younger riders, the M004-B1 brings the excitement of electric scooters in a smaller, easy-to-control package. With a lightweight design and a smooth, stable ride, it's perfect for kids taking their first steps into electric mobility.",
      features: [
        "200W Front Wheel Motor – Gentle power delivery ideal for young riders learning the ropes.",
        "24V Battery System – Reliable and efficient",
        "6.5-Inch Wheels – Compact size for nimble handling and safe cruising.",
        "Anti-Slip Deck – Textured surface for better foot grip and safety.",
        "Quick-Fold Design – Folds down in seconds for easy storage or transport.",
        "Lightweight Aluminium Frame – Easy for kids and parents to carry.",
        "Colour Options – Available in cheerful Blue, Green, Yellow, Orange and Pink finishes."
      ]
    },
    {
      id: 3,
      name: "M004-B3",
      title: "2 Wheeled Electric Scooter for Kids",
      tagline: "Gentle Power. Confident Starts. Kid-Friendly Design.",
      image: "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png", // Replace with actual M004-B3 image
      description: "The M004-B3 is our most beginner-friendly electric scooter, made for little riders just starting their journey. With a low-power 100W motor, it's designed to offer a safe and smooth introduction to electric scooting while keeping all the fun.",
      features: [
        "100W Front Wheel Motor – Soft acceleration and safe speeds for first-time riders.",
        "24V Battery System – Long enough for daily play, short enough for worry-free use (Battery capacity customizable).",
        "6.5-Inch Wheels – Small and stable for easy handling by younger kids.",
        "Anti-Slip Deck – Textured for secure footing and improved safety.",
        "Quick-Fold Design – Effortless folding for easy transport and storage.",
        "Lightweight Aluminium Frame – Built tough but easy to carry.",
        "Colour Options – Available in Blue, Green, Yellow, Orange and Pink to match every personality."
      ],
      summary: "With the M004-B3, kids can explore their world with confidence—at a pace parents will appreciate."
    },
    {
      id: 4,
      name: "M004",
      title: "Adult Electric Scooter",
      tagline: "Strong. Smooth. Built to Go Further.",
      image: "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png", // Replace with actual M004 image
      description: "Engineered for everyday commutes and weekend adventures, the M004 is a high-performance electric scooter that blends power, control, and comfort into a sleek, durable package. With a robust 500W rear motor, dual disc brakes, and front suspension, it's designed to handle urban streets with ease and style.",
      features: [
        "500W Rear Hub Motor – Delivers powerful torque and acceleration, even on inclines.",
        "36V 11.6Ah Battery – Long-range capability for daily commuting or extended rides.",
        "10-Inch Pneumatic Tires – Rear Wheel: 10×3\" wide tire with disc brake and integrated motor for superior grip and control. Front Wheel: Standard 10\" with disc brake for balanced stopping power.",
        "Front & Rear Disc Brakes – Confident, reliable braking in all conditions.",
        "Front Fork Suspension – Absorbs shocks from rough pavement for a smoother ride.",
        "Full Aluminium Frame – Lightweight yet rugged for long-lasting durability."
      ],
      summary: "Whether you're navigating busy streets or cruising down bike paths, the M004 offers a refined, dependable ride with the performance adults need and the quality they deserve."
    },
    {
      id: 5,
      name: "M005",
      title: "Mountain Electric Scooter",
      tagline: "Rugged. Reinforced. Ready for Adventure.",
      image: "https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png", // Replace with actual M005 image
      description: "The M005 is built for riders who crave more than smooth city streets. With a reinforced all-aluminium frame, large 12-inch wheels, and upgraded motor and battery, this electric scooter is designed to take on rougher terrain with confidence and control.",
      features: [
        "Heavy-Duty Aluminium Frame – Reinforced construction for added durability on trails and uneven surfaces.",
        "12-Inch All-Terrain Wheels – Larger diameter for better ground clearance, grip, and shock absorption.",
        "High-Power Motor – Delivers more torque and traction for off-road conditions",
        "Upgraded Battery – Extended range and power for long, demanding rides.",
        "Built for Tough Rides – Ideal for countryside paths, gravel roads, and adventurous detours."
      ],
      summary: "Whether you're exploring mountain paths, tackling hilly streets, or just looking for a tougher, more capable scooter — the M005 is ready to ride wherever you are."
    }
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
      className="relative overflow-hidden min-h-screen"
    >
      {/* Header Section with Gray Background */}
      <div className="bg-gray-400 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative">
                <span className="relative z-10">Electric</span>
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Mobility
              </span>
            </h2>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900/70 rounded-full border border-blue-700/50">
              <FontAwesomeIcon icon={faBolt} className="mr-2 text-blue-300" />
              Driving sustainable transport, from last mile to local manufacturing
            </span>

            <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
              The global shift to electric vehicles is accelerating—but most
              solutions are built for wealthy markets, not for small island
              states, dense urban zones, or emerging economies.
              <span className="font-semibold text-blue-700">
                {" "}
                Prodesign Innovation is solving that gap.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Cloudinary Image Section with Text Overlay */}
      <div className="relative h-screen bg-cover bg-center bg-no-repeat" 
           style={{backgroundImage: "url('https://res.cloudinary.com/dbhnlfdva/image/upload/v1750417463/hero_qznp2j.png')"}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Innovative Electric Solutions
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We're designing and prototyping{" "}
                <span className="font-semibold text-blue-300">
                  low-cost, high-efficiency electric transport platforms
                </span>
                —engineered for local assembly, short-range use, and
                affordability.
              </p>
              <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                <p className="text-lg font-bold text-white">
                  This is not just an environmental solution—it's a business
                  opportunity in a fast-growing, underserved segment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue with Gray Background */}
      <div className="bg-gray-400 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Project Details */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Electric{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Scooters
                </span>
              </h2>
              <div className="inline-flex items-center gap-2 bg-blue-900/70 text-blue-100 px-4 py-2 rounded-full text-sm mb-6 border border-blue-800/50">
                <FontAwesomeIcon icon={faBolt} />
                <span>
                  Rethinking last-mile transport with compact electric solutions
                </span>
              </div>
              <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                Since 2021, our engineering team has been developing multiple
                prototypes of electric scooters tailored for short-range,
                high-frequency use—perfect for delivery, service, and urban
                commuting.
              </p>
            </div>

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-600/50 mb-12"
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
                      <div className="w-full bg-gray-600 rounded-full h-3">
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

          {/* Scooter Models Showcase */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Scooter Models
                </span>
              </h2>
              <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                Discover our complete range of electric scooters, designed for every rider and every adventure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scooterModels.map((model) => (
                <div
                  key={model.id}
                  className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => setSelectedModel(model)}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-gray-100 p-6 flex items-center justify-center">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{model.title}</p>
                    <p className="text-blue-600 font-semibold text-sm">{model.tagline}</p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      <span>View Specifications</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedModel && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedModel(null)}>
              <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedModel.name}</h2>
                    <p className="text-gray-600">{selectedModel.title}</p>
                  </div>
                  <button
                    onClick={() => setSelectedModel(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl p-6 flex items-center justify-center mb-6">
                        <img
                          src={selectedModel.image}
                          alt={selectedModel.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">{selectedModel.tagline}</h3>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-6">{selectedModel.description}</p>
                      
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {selectedModel.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {selectedModel.summary && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <p className="text-gray-700 italic">{selectedModel.summary}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Future Models Section */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Future Models
              </span>{" "}
              in Development
            </h2>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Our modular platform enables rapid development of diverse electric
              vehicles tailored to specific use cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureVehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-600/50 hover:border-cyan-500/30 transition-all duration-500"
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

          {/* Investment Section */}
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
}

export default ElectricMobility;