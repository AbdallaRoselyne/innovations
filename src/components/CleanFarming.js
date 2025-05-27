import React from "react";

const CleanFarming = () => {
  return (
    <section id="clean-farming" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-prodesign-blue mb-4">
            Clean Farming
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="mb-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Farming relies on the use of pesticides, chemical fertilizers and
              water. 70% of our global fresh water is used in agriculture.
              Excessive use of chemicals is polluting our environment and a
              major concern to our health. A high prevalence of cancer has been
              associated with exposure to pesticides in the vegetables we
              consume.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are researching on how new technologies can help in making
              agriculture cleaner. It's not only about organic farming, but how
              to ensure our food security in the future, in face of climate
              change.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {/* Vertical Indoor Farm */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Vertical Indoor Farm
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                This project was partially funded by the Mauritius Research and
                Innovation Council in 2021. We developed an indoor vertical farm
                which uses a custom designed lighting system that delivers a
                lighting recipe for the optimal growth of baby leaves and
                microgreens.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Custom Lighting
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Baby Leaves
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Microgreens
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/vertical-farm.jpg"
                    alt="Vertical Indoor Farm with LED grow lights"
                    className="w-full h-80 md:h-96 object-cover mix-blend-overlay"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Containerised Farm */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/container.jpg"
                    alt="Containerised Farm with hydroponic systems"
                    className="w-full h-80 md:h-96 object-cover mix-blend-overlay"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Containerised Farm
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are currently working on the development of connected mobile
                containerised farms. These farms shall be all connected to our
                IoT platform where data on plant growth from hundreds of farms
                shall be captured on the IoT platform, analysed, using AI to
                improve yield and food safety.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  IoT Connected
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  AI Analytics
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Mobile Farms
                </span>
              </div>
            </div>
          </div>

          {/* Energy Efficient Grow Lights */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Energy Efficient Grow Lights
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are continuing the research to develop other indoor farming
                lighting for optimal growth and high yield of strawberries,
                tomatoes, capsicum and other fruiting plants. We are running
                many planting trials to develop the best spectrum using various
                LED colour combinations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  LED Spectrum
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  High Yield
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Energy Efficient
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/grow_lights.jpg"
                    alt="LED grow lights with various color spectrums for plant growth"
                    className="w-full h-80 md:h-96 object-cover mix-blend-overlay"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-100 text-blue-800 rounded-2xl p-8 md:p-12">
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
    </section>
  );
};

export default CleanFarming;
