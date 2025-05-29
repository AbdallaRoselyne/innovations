import React, { useState } from "react";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const ElectricMobility = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section id="electric-mobility" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-prodesign-blue mb-4">
            Electric Mobility
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving the future with sustainable transportation solutions
          </p>
        </div>

        <div className="mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Our Electric Mobility Projects
            </h3>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Electric Scooters
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Since 2021 we have been researching and prototyping
                      several models of electric scooter which can be used as
                      the last mile transportation. Two prototypes are ready and
                      under testing phase. Production shall begin in early 2023.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Prototype Ready
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        Testing Phase
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-prodesign-blue hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      Other Models in Development
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-prodesign-blue rounded-full"></div>
                        <span className="text-gray-700">
                          Electric cargo scooter
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-prodesign-blue rounded-full"></div>
                        <span className="text-gray-700">
                          Electric delivery vehicle
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-prodesign-blue rounded-full"></div>
                        <span className="text-gray-700">
                          Electric passenger vehicle
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-prodesign-blue text-white p-8 rounded-xl shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
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
              {/* Video Container with Enhanced Styling */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                {/* Loading Placeholder */}
                {!isVideoLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                      <p className="text-lg">Loading Video...</p>
                    </div>
                  </div>
                )}

                {/* Video Element */}
                <video
                  src={`${CLOUDINARY_URL}/video/upload/q_auto/Scooter_2_clmmtj.mp4`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onLoadedData={() => setIsVideoLoaded(true)}
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%237C3AED;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3C/svg%3E"
                />

                {/* Video Overlay with Play Button Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>

                {/* Corner Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
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

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Video Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-gray-600">Prototypes</div>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">0</div>
                <div className="text-sm text-gray-600">CO₂ Emissions</div>
              </div>
              <div className="text-center bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Electric</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobility;
