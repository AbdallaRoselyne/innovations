import React from "react";

const CleanFarming = () => {
  return (
    <section id="clean-farming" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prodesign-blue mb-4">
            Clean Farming
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="mb-12">
          <p className="text-gray-600 mb-6">
            Farming relies on the use of pesticides, chemical fertilizers and
            water. 70% of our global fresh water is used in agriculture.
            Excessive use of chemicals is polluting our environment and a major
            concern to our health. A high prevalence of cancer has been
            associated with exposure to pesticides in the vegetables we consume.
          </p>
          <p className="text-gray-600">
            We are researching on how new technologies can help in making
            agriculture cleaner. Its not only about organic farming, but how to
            ensure our food security in the future, in face of climate change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Vertical Indoor Farm
              </h3>
              <p className="text-gray-600">
                This project was partially funded by the Mauritius Research and
                Innovation Council in 2021. We developed an indoor vertical farm
                which uses a custom designed lighting system that delivers a
                lighting recipe for the optimal growth of baby leaves and
                microgreens.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Containerised Farm
              </h3>
              <p className="text-gray-600">
                We are currently working on the development of connected mobile
                containerised farms. These farms shall be all connected to our
                IoT platform where data on plant growth from hundreds of farms
                shall be captured on the IoT platform, analysed, using AI to
                improve yield and food safety.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Energy Efficient Grow Lights
              </h3>
              <p className="text-gray-600">
                We are continuing the research to develop other indoor farming
                lighting for optimal growth and high yield of strawberries,
                tomatoes, capsicum and other fruiting plants. We are running
                many planting trials to develop the best spectrum using various
                LED colour combinations.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/IMG_20220531_073514-cpy.jpg"
                alt="Vertical Farming"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/farming-2.jpg"
                  alt="Clean Farming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <img
                  src="/farming-3.jpg"
                  alt="Clean Farming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanFarming;
