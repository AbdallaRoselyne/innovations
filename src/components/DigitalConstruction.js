import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faVrCardboard, faBookOpen, faProjectDiagram, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DigitalConstruction = () => {
  const projects = [
    {
      title: "Automated BIM coordination process",
      description: "We are researching on automating design verification process on BIM. Through coding we are able to automatically check fire code compliance, streamline clash detection.",
      icon: faCode
    },
    {
      title: "Integration of VR and AR with BIM",
      description: "We have been able to integrate BIM with Augmented reality on a small area. BIM models can be superimposed in a room and allow contractors to build complex plant rooms exactly, reducing waste and time.",
      icon: faVrCardboard
    },
    {
      title: "Interactive user manual",
      description: "We have produced an interactive user guide for building owners. This guide is easy to use and contains information on how to operate and maintain installation through an interactive web browser.",
      icon: faBookOpen
    },
    {
      title: "Construction digital twin",
      description: "We are working to improve building design, construction and operations through the study of digital twins. This is a project co-funded by the Mauritius Research and Innovations Council.",
      icon: faProjectDiagram
    },
    {
      title: "Construction procurement platform",
      description: "We are developing an online procurement platform for the construction industry which will provide more opportunities to contractors and suppliers.",
      icon: faShoppingCart
    }
  ];

  return (
    <section id="digital-construction" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Abstract SVG background */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3b82f6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Construction</span>
          </h2>
          <div className="relative inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <svg className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-2" viewBox="0 0 100 10">
              <path d="M0,5 Q25,10 50,5 T100,5" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="0,100" className="animate-draw" />
            </svg>
          </div>
        </div>

        <div className="mb-12 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
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

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <svg className="w-8 h-8 mr-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Featured Projects
            </h3>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-x-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={project.icon} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Video container with decorative SVG elements */}
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-xl h-full">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
              
              <video
                src="/MyVideo_2.mp4"
                className="w-full h-full object-cover mix-blend-multiply"
                autoPlay
                muted
                loop
                playsInline
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalConstruction;