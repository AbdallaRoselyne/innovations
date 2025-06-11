import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faMicrochip,
  faCarSide,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const ElectricMobility = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const projects = [
    {
      title: "Electric Scooters",
      description:
        "Since 2021 we have been researching and prototyping several models of electric scooter which can be used as the last mile transportation. Two prototypes are ready and under testing phase. Production shall begin in early 2023.",
      icon: faBolt,
      tags: ["Prototype Ready", "Testing Phase"],
      borderColor: "border-blue-500",
    },
    {
      title: "Other Models in Development",
      description: "",
      icon: faMicrochip,
      items: [
        "Electric cargo scooter",
        "Electric delivery vehicle",
        "Electric passenger vehicle",
      ],
      borderColor: "border-blue-600",
    },
  ];

  return (
    <section
      id="electric-mobility"
      className="py-18 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Floating SVG elements */}
      <svg
        className="absolute top-20 left-10 w-40 h-40 opacity-10 animate-float"
        viewBox="0 0 200 200"
      >
        <path
          d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 180c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"
          fill="#3B82F6"
        />
      </svg>

      <svg
        className="absolute bottom-20 right-10 w-32 h-32 opacity-10 animate-float-delay"
        viewBox="0 0 200 200"
      >
        <polygon points="100,0 200,100 100,200 0,100" fill="#10B981" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Electric
            </span>{" "}
            Mobility
          </h2>

          <div className="relative inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            <svg
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-2"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,10 50,5 T100,5"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="0,100"
                className="animate-draw"
              />
            </svg>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Driving the future with sustainable transportation solutions
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                The main cause of climate change is burning fossil fuels such as
                oil, gas, and coal. They are by far the largest contributor to
                global climate change, accounting for over 75 per cent of global
                greenhouse gas emissions and nearly 90 per cent of all carbon
                dioxide emissions (UN).
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Transport is one of the most pollutant sectors: it provides more
                than a quarter of greenhouse gas emissions, according to the
                latest study from the European Environment Agency (AEMA).
                Replacing fuel combustion vehicles with electric vehicles is one
                of the best alternatives in order to reduce CO2 emissions and
                fight climate change.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 flex items-center">
              <FontAwesomeIcon
                icon={faCarSide}
                className="text-blue-600 mr-3"
              />
              Our Electric Mobility Projects
            </h3>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 ${project.borderColor} hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={project.icon}
                          className="text-xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">
                        {project.title}
                      </h4>
                      {project.description && (
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                      )}
                      {project.tags && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {project.items && (
                        <div className="space-y-3 mt-3">
                          {project.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Investor CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faSearchDollar}
                        className="text-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">
                      Looking for Investors
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      We have several other models under design and one of our
                      key objectives is to develop an electric single passenger
                      car, designed and manufactured in Mauritius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-lg">Loading Video...</p>
                    </div>
                  </div>
                )}

                <video
                  src={`${CLOUDINARY_URL}/video/upload/q_auto/scoooterss_rgpouv.mp4`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>

                {/* Corner Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <span className="text-sm font-semibold text-gray-800">
                    Live Demo
                  </span>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h4 className="text-white font-bold text-lg mb-1">
                    Electric Scooter Prototype
                  </h4>
                  <p className="text-white/80 text-sm">
                    Sustainable last-mile transportation solution
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "2", label: "Prototypes", color: "blue" },
                  { value: "0", label: "CO₂ Emissions", color: "emerald" },
                  { value: "100%", label: "Electric", color: "cyan" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div
                      className={`text-2xl font-bold text-${stat.color}-600`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobility;
