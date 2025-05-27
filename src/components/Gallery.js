import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  //gallery images
  const galleryItems = [
    {
      id: 1,
      type: "video",
      name: "Virtual Reality Prototype",
      category: "Digital construction",
      src: "MyVideo_1.mp4",
      alt: "Digital Construction",
    },
    {
      id: 2,
      type: "video",
      name: "Electrical Scooter",
      category: "Electric mobility",
      src: "/scooter_2.mp4",
      alt: "Electric scooter",
    },
    {
      id: 3,
      type: "image",
      name: "Seedlings in Vertical Farm",
      category: "Clean farming",
      src: "/seedlings-2.jpg",
      alt: "Clean Farming",
    },
    {
      id: 4,
      type: "video",
      name: "BIM Modelling",
      category: "Digital construction",
      src: "/Digital-Construction-Video.mp4",
      alt: "Construction Video",
    },
    {
      id: 5,
      type: "image",
      name: "Electric Scooter",
      category: "Electric mobility",
      src: "/scooter.jpg",
      alt: "Electric Scooter",
    },
    {
      id: 6,
      type: "image",
      name: "Container Farm",
      category: "Clean farming",
      src: "/vertical-farm.jpg",
      alt: "Vertical Farm",
    },
    {
      id: 7,
      type: "image",
      name: "Digital twin feedback loop",
      category: "Digital construction",
      src: "prototype.jpg",
      alt: "BIM Model",
    },
    {
      id: 8,
      type: "image",
      name: "Electric Scooter",
      category: "Electric mobility",
      src: "/Electric Scooter -01-Original.jpg",
      alt: "EV Prototype",
    },
    {
      id: 9,
      type: "image",
      name: "Grow Lights",
      category: "Clean farming",
      src: "/grow_lights.jpg",
      alt: "Grow Lights",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prodesign-blue mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {[
              "all",
              "Digital construction",
              "Electric mobility",
              "Clean farming",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-prodesign-blue text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } ${tab === "all" ? "rounded-l-lg" : ""} ${
                  tab === "Clean farming" ? "rounded-r-lg" : ""
                }`}
              >
                {tab === "all"
                  ? "All"
                  : tab === "Digital construction"
                  ? "Digital Construction"
                  : tab === "Electric mobility"
                  ? "Electric Mobility"
                  : "Clean Farming"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
            >
              {item.name && (
                <div className="absolute top-0 left-0 w-full bg-prodesign-blue bg-opacity-70 text-white p-4 z-10">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              )}

              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  type="video/mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition duration-300">
                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
