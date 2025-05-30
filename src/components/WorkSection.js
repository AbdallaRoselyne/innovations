import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCar, faLeaf, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WorkSection = () => {
  const workItems = [
    {
      title: "Digital Construction",
      description: "Reducing waste and inefficiency in construction through digital tools.",
      link: "digital-construction",
      icon: faBuilding,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Electrical Vehicles",
      description: "Developing clean mobility solutions for a sustainable future.",
      link: "electric-mobility",
      icon: faCar,
      color: "from-emerald-500 to-emerald-700"
    },
    {
      title: "Clean Farming",
      description: "Innovative agricultural technologies for food security.",
      link: "clean-farming",
      icon: faLeaf,
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <section id="work" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* SVG Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" fill="none" stroke="#3b82f6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Innovations</span>
          </h2>
          
          {/* Animated SVG underline */}
          <div className="relative inline-block">
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <svg className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-2" viewBox="0 0 100 10">
              <path d="M0,5 Q25,10 50,5 T100,5" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="0,100" className="animate-draw" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* SVG decoration */}
              <svg className="absolute top-4 right-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300`}>
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-white transition-colors duration-300"
                >
                  Learn more
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;