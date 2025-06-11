import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faBoxOpen,
  faLightbulb,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const CleanFarming = () => {
  const farmingProjects = [
    {
      title: "Vertical Indoor Farm",
      description:
        "This project was partially funded by the Mauritius Research and Innovation Council in 2021. We developed an indoor vertical farm which uses a custom designed lighting system that delivers a lighting recipe for the optimal growth of baby leaves and microgreens.",
      image: "vertical-farm_figzcd.jpg",
      tags: ["Engineered Lighting", "Scalable", "Optimised Growth"],
      icon: faSeedling,
    },
    {
      title: "Containerised Farm",
      description:
        "We are currently working on the development of connected mobile containerised farms. These farms shall be all connected to our IoT platform where data on plant growth from hundreds of farms shall be captured on the IoT platform, analysed, using AI to improve yield and food safety.",
      image: "container_t2umio.jpg",
      tags: ["Smart farming", "Data driven", "High profitability"],
      icon: faBoxOpen,
    },
    {
      title: "Energy Efficient Grow Lights",
      description:
        "We are continuing the research to develop other indoor farming lighting for optimal growth and high yield of strawberries, tomatoes, capsicum and other fruiting plants. We are running many planting trials to develop the best spectrum using various LED color combinations.",
      image: "grow_lights_vnxg0c.jpg",
      tags: ["Optimised Spectrum", "High efficiency", "Long life"],
      icon: faLightbulb,
    },
  ];

  return (
    <section
      id="clean-farming"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="leaves"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20,50 Q30,20 50,50 T80,50"
              fill="none"
              stroke="#10B981"
              strokeWidth="1"
            />
            <path
              d="M20,60 Q30,30 50,60 T80,60"
              fill="none"
              stroke="#10B981"
              strokeWidth="1"
              transform="translate(10,0)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leaves)" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent">
              Clean
            </span>{" "}
            Farming
          </h2>

          <div className="relative inline-block">
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
            <svg
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-2"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,10 50,5 T100,5"
                stroke="#10B981"
                strokeWidth="2"
                fill="none"
                strokeDasharray="0,100"
                className="animate-draw"
              />
            </svg>
          </div>
        </div>

        <div className="mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Farming relies on the use of pesticides, chemical fertilizers
                and water. 70% of our global fresh water is used in agriculture.
                Excessive use of chemicals is polluting our environment and a
                major concern to our health. A high prevalence of cancer has
                been associated with exposure to pesticides in the vegetables we
                consume.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are researching on how new technologies can help in making
                agriculture cleaner. It's not only about organic farming, but
                how to ensure our food security in the future, in face of
                climate change.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {farmingProjects.map((project, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div
                className={`order-2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mr-4">
                    <FontAwesomeIcon icon={project.icon} className="text-xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`order-1 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                } relative group`}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={`${CLOUDINARY_URL}/image/upload/f_auto,q_auto/${project.image}`}
                    alt={project.title}
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>

                {/* Decorative SVG elements */}
                <svg
                  className="absolute -top-6 -right-6 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M0,0 L100,0 L100,100 L0,100 Z"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    className="group-hover:stroke-dashoffset-0 transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="relative bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Decorative SVG elements */}
              <svg
                className="absolute top-0 left-0 w-24 h-24 opacity-20"
                viewBox="0 0 100 100"
              >
                <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="#10B981" />
              </svg>
              <svg
                className="absolute bottom-0 right-0 w-24 h-24 opacity-20"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="40" fill="#06B6D4" />
              </svg>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Shaping the Future of Agriculture
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Through innovative technology and sustainable practices, we're
                  creating farming solutions that protect our environment while
                  ensuring food security for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanFarming;
