import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-prodesign-blue mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
          <div className="w-20 h-1.5 bg-prodesign-lightblue mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight sm:leading-snug">
              Prodesign Innovation is the R&D arm of Prodesign and is led by
              Vikram Bhujun.
            </h3>

            <div className="space-y-4">
              <p className="text-gray-600 text-base sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-prodesign-blue mr-2 align-middle"></span>
                Our mission is to combat climate change by developing products
                and services that improve efficiency, use clean energy, and
                reduce waste.
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-prodesign-blue mr-2 align-middle"></span>
                Backed by 25 years of engineering experience, we design and
                build production-ready prototypes.
              </p>

              <p className="text-gray-600 text-base sm:text-lg">
                <span className="inline-block w-2 h-2 rounded-full bg-prodesign-blue mr-2 align-middle"></span>
                We're open to investor partnerships to scale our solutions.
              </p>
            </div>
          </div>

          {/* Video Embed - Using iframe directly */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative pb-[56.25%] h-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D723835840068794&show_text=false"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Prodesign Mission Video"
              ></iframe>
            </div>
            <div className="mt-3 text-sm text-gray-500 text-center sm:text-left">
              Watch our mission in action ||  Extract from MBC: Le Journal Télévisé- 11 Mai 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
