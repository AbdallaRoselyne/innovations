import React, { useState, useEffect, useRef } from "react";

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    {
      text: "Our mission is to combat climate change by developing products and services that improve efficiency, use clean energy, and reduce waste.",
      delay: "delay-200",
    },
    {
      text: "Backed by 25 years of engineering experience, we design and build production-ready prototypes.",
      delay: "delay-400",
    },
    {
      text: "We're open to investor partnerships to scale our solutions.",
      delay: "delay-600",
    },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Modern Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="font-bold bg-prodesign-blue bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                <span className="font-semibold">Prodesign Innovation</span> is
                the R&D arm of Prodesign and is led by{" "}
                <span className="bg-prodesign-blue bg-clip-text text-transparent font-semibold">
                  Vikram Bhujun
                </span>
                .
              </h3>
              <div className="absolute -left-4 top-0 w-1 h-full bg-prodesign-blue rounded-full" />
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100/50 hover:bg-white/80 hover:shadow-lg transition-all duration-500 ${
                    isVisible
                      ? `opacity-100 translate-x-0 ${point.delay}`
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  {/* Modern bullet */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-3 h-3 bg-prodesign-blue rounded-full group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-prodesign-blue rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D723835840068794&show_text=false"
                    className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Prodesign Mission Video"
                  />
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm font-medium">
                Watch our mission in action
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Extract from MBC: Le Journal Télévisé - 11 Mai 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
