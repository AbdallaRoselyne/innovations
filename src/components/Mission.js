import React from "react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-prodesign-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Prodesign Innovation is the R&D arm of Prodesign and is led by
              Vikram Bhujun.
            </h3>
            <p className="text-gray-600 mb-6">
              Our mission is to combat climate change. We are creating products
              and services that will improve efficiency, use clean energy and
              reduce waste.
            </p>
            <p className="text-gray-600 mb-6">
              Backed with our 25 years of engineering knowhow, we develop
              prototypes which are ready and tested for mass production.
              Investors are welcome to contact us for partnering.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <video
              src="/shutterstock_8799457.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
