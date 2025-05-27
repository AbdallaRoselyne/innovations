import React from "react";

const ElectricMobility = () => {
  return (
    <section id="electric-mobility" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prodesign-blue mb-4">
            Electric Mobility
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="mb-12">
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            The main cause of climate change is burning fossil fuels such as
            oil, gas, and coal. They are by far the largest contributor to
            global climate change, accounting for over 75 per cent of global
            greenhouse gas emissions and nearly 90 per cent of all carbon
            dioxide emissions (UN).
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Transport is one of the most pollutant sectors: it provides more
            than a quarter of greenhouse gas emissions, according to the latest
            study from the European Environment Agency (AEMA). Replacing fuel
            combustion vehicles with electric vehicles is one of the best
            alternatives in order to reduce CO2 emissions and fight climate
            change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Electric Mobility Projects
            </h3>

            <div className="space-y-6">
              <div className="border-l-4 border-prodesign-blue pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Electric Scooters
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Since 2021 we have been researching and prototyping several
                  models of electric scooter which can be used as the last mile
                  transportation. Two prototypes are ready and under testing
                  phase. Production shall begin in early 2023.
                </p>
              </div>

              <div className="border-l-4 border-prodesign-blue pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Other Models in Development
                </h4>
                <ul className="text-gray-600 text-lg list-disc pl-5 leading-relaxed">
                  <li>Electric cargo scooter</li>
                  <li>Electric delivery vehicle</li>
                  <li>Electric passenger vehicle</li>
                </ul>
              </div>

              <div className="bg-prodesign-blue text-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">
                  Looking for Investors
                </h4>
                <p>
                  We have several other models under design and one of our key
                  objective is to develop an electric single passenger car,
                  designed and manufactured in Mauritius.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="/scooter.jpg"
                alt="EV Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <video
                src="/Scooter-video.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobility;
