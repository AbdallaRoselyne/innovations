import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  //gallery images
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "construction",
      src: "/gallery/construction-1.jpg",
      alt: "Digital Construction",
    },
    {
      id: 2,
      type: "image",
      category: "ev",
      src: "/gallery/ev-1.jpg",
      alt: "Electric Vehicle",
    },
    {
      id: 3,
      type: "image",
      category: "farming",
      src: "/gallery/farming-1.jpg",
      alt: "Clean Farming",
    },
    {
      id: 4,
      type: "video",
      category: "construction",
      src: "/Digital Construction Video.mp4",
      alt: "Construction Video",
    },
    {
      id: 5,
      type: "image",
      category: "ev",
      src: "/gallery/ev-2.jpg",
      alt: "Electric Scooter",
    },
    {
      id: 6,
      type: "image",
      category: "farming",
      src: "/IMG_20220531_073514.jpg",
      alt: "Vertical Farm",
    },
    {
      id: 7,
      type: "image",
      category: "construction",
      src: "/gallery/construction-2.jpg",
      alt: "BIM Model",
    },
    {
      id: 8,
      type: "video",
      category: "ev",
      src: "/gallery/ev-vid.mp4",
      alt: "EV Prototype",
    },
    {
      id: 9,
      type: "image",
      category: "farming",
      src: "/IMG_20250407_141313913.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-prodesign-blue mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {["all", "construction", "ev", "farming"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-prodesign-blue text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } ${tab === "all" ? "rounded-l-lg" : ""} ${
                  tab === "farming" ? "rounded-r-lg" : ""
                }`}
              >
                {tab === "all"
                  ? "All"
                  : tab === "construction"
                  ? "Digital Construction"
                  : tab === "ev"
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
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-64 object-cover"
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
