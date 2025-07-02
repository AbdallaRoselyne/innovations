import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Play,
  Pause,
  Maximize,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [videoStates, setVideoStates] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoRefs = useRef({});
  const galleryRef = useRef(null);

  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

  const galleryItems = [
    {
      id: 1,
      type: "video",
      name: "BIM Integration with Augmented Reality",
      category: "Digital construction",
      src: "MyVideo_1_wutn7p",
      alt: "BIM AR Integration",
      tags: ["VR", "prototype", "BIM"],
    },
    {
      id: 2,
      type: "video",
      name: "Electrical Scooter Video",
      category: "Electric mobility",
      src: "electric-scooter_zozkiu.mp4",
      alt: "Electric scooter",
      tags: ["scooter", "electric", "mobility"],
    },
    {
      id: 3,
      type: "image",
      name: "Seedlings in Vertical Indoor Farm",
      category: "Clean farming",
      src: "seedlings-2_jaz2aw.jpg",
      alt: "Clean Farming",
      tags: ["vertical", "farming", "sustainable"],
    },
    {
      id: 4,
      type: "video",
      name: "Automated BIM Coordination & Compliance",
      category: "Digital construction",
      src: "Digital-Construction-Video_uy1bb0",
      alt: "Construction Video",
      tags: ["BIM", "modeling", "construction"],
    },
    {
      id: 5,
      type: "image",
      name: "Model 001",
      category: "Electric mobility",
      src: "Three_wheel_Scooter_kdsfdm.png",
      alt: "Electric Scooter",
      tags: ["scooter", "electric", "prototype"],
    },
    {
      id: 6,
      type: "image",
      name: "Vertical Indoor Farm",
      category: "Clean farming",
      src: "vertical-farm_figzcd.jpg",
      alt: "Vertical indoor farm",
      tags: ["container", "farming", "innovation"],
    },
    {
      id: 7,
      type: "video",
      name: "Interactive User Manuals",
      category: "Digital construction",
      src: "interactive_sq5pte.mp4",
      alt: "interactive user manuals",
      tags: ["manuals", "interactive", "construction"],
    },
    {
      id: 8,
      type: "image",
      name: "Model 002",
      category: "Electric mobility",
      src: "image_5_atsbxp.png",
      alt: "EV Prototype",
      tags: ["prototype", "electric", "scooter"],
    },
    {
      id: 9,
      type: "image",
      name: "Energy-Efficient Grow Lighting",
      category: "Clean farming",
      src: "grow_lights_vnxg0c.jpg",
      alt: "Energy-efficient grow lights",
      tags: ["grow lights", "LED", "farming"],
    },
    {
      id: 10,
      type: "image",
      name: "Automated Container Farm",
      category: "Clean farming",
      src: "container_dfex3i.jpg",
      alt: "Electric Scooter Prototype",
      tags: ["Container", "farming", "vegetables"],
    },
    {
      id: 11,
      type: "image",
      name: "Model 003",
      category: "Electric mobility",
      src: "Mountain_Scooter_ygvfzb.png",
      alt: "Model 003",
      tags: ["scooter", "electric", "prototype"],
    },

    {
      id: 12,
      type: "image",
      name: "Model 004",
      category: "Electric mobility",
      src: "Kids_Scooter-B1_bh2b9s.png",
      alt: "Model 004",
      tags: ["scooter", "electric", "prototype"],
    },
    {
      id: 15,
      type: "image",
      name: "Model 005",
      category: "Electric mobility",
      src: "image_6_jmalij.png",
      alt: "Model 005",
      tags: ["scooter", "electric", "prototype"],
    },
  ];

  const generateCloudinaryUrl = (src, transformations = {}) => {
    const {
      width = 400,
      height = 300,
      quality = "auto",
      format = "auto",
      crop = "fill",
      gravity = "auto",
      blur,
      effect,
      overlay,
    } = transformations;

    let transformString = `w_${width},h_${height},c_${crop},g_${gravity},q_${quality},f_${format}`;

    if (blur) transformString += `,e_blur:${blur}`;
    if (effect) transformString += `,e_${effect}`;
    if (overlay) transformString += `,l_${overlay}`;

    return `${CLOUDINARY_URL}/image/upload/${transformString}/${src}`;
  };

  const generateVideoUrl = (src, transformations = {}) => {
    const { width = 800, height = 450, quality = "auto" } = transformations;

    let transformString = `w_${width},h_${height},q_${quality}`;
    return `${CLOUDINARY_URL}/video/upload/${transformString}/${src}`;
  };

  const filteredItems = galleryItems.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesTab && matchesSearch;
  });

  const toggleVideoPlay = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates((prev) => ({
          ...prev,
          [id]: { ...prev[id], playing: true },
        }));
      } else {
        video.pause();
        setVideoStates((prev) => ({
          ...prev,
          [id]: { ...prev[id], playing: false },
        }));
      }
    }
  };

  const openLightbox = (item, index) => {
    setSelectedMedia(item);
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredItems.length
        : (currentIndex - 1 + filteredItems.length) % filteredItems.length;

    setCurrentIndex(newIndex);
    setSelectedMedia(filteredItems[newIndex]);

    // Pause any playing video when navigating
    if (selectedMedia?.type === "video") {
      const video = videoRefs.current[selectedMedia.id];
      if (video && !video.paused) {
        video.pause();
      }
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const lightboxRef = useRef(null);

  // Handle touch events for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      navigateLightbox("next");
    }
    if (touchStart - touchEnd < -50) {
      navigateLightbox("prev");
    }
  };

  // Focus the lightbox when opened
  useEffect(() => {
    if (selectedMedia && lightboxRef.current) {
      lightboxRef.current.focus();
      setIsLoading(true);
    }
  }, [selectedMedia]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedMedia) {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedMedia]);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Fixed padding to account for fixed header */}
      <div className="pt-20 lg:pt-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header with responsive text sizes */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Innovation Showcase
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Explore our cutting-edge projects in digital construction, electric
            mobility, and clean farming
          </p>
        </div>

        {/* Responsive controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
          {/* Search bar - full width on mobile, auto on larger screens */}
          <div className="w-full sm:w-auto sm:flex-1 sm:max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search
                  className={`h-5 w-5 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`block w-full pl-10 pr-3 py-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    : "bg-white border-gray-300 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                }`}
              />
            </div>
          </div>

          {/* Filter tabs - centered on mobile, right-aligned on larger screens */}
          <div className="flex space-x-2 overflow-x-auto w-full sm:w-auto">
            {[
              "all",
              "Digital construction",
              "Electric mobility",
              "Clean farming",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab === "all" ? "All" : tab.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Dark mode toggle - hidden on smallest screens */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`hidden sm:block p-2 rounded-full ${
              darkMode
                ? "bg-gray-700 text-yellow-300"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Gallery Grid - Responsive columns */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Media container with consistent aspect ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.type === "image" ? (
                  <>
                    <img
                      src={generateCloudinaryUrl(item.src, {
                        width: 800,
                        height: 600,
                        quality: "auto:best",
                        format: "auto",
                      })}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onClick={() => openLightbox(item, index)}
                    />
                  </>
                ) : (
                  <div className="relative h-full w-full">
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      src={generateVideoUrl(item.src)}
                      className="w-full h-full object-cover cursor-pointer"
                      muted
                      loop
                      playsInline
                      onClick={() => openLightbox(item, index)}
                      onLoadedMetadata={() => {
                        setVideoStates((prev) => ({
                          ...prev,
                          [item.id]: { playing: false, muted: true },
                        }));
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideoPlay(item.id);
                        }}
                        className={`p-2 sm:p-3 rounded-full backdrop-blur-sm ${
                          videoStates[item.id]?.playing
                            ? "bg-black/30"
                            : "bg-black/50"
                        }`}
                      >
                        {videoStates[item.id]?.playing ? (
                          <Pause className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        ) : (
                          <Play className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openLightbox(item, index);
                        }}
                        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Always visible caption for both images and videos */}
              <div
                className={`p-3 sm:p-4 min-h-[72px] ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h3
                  className={`text-base sm:text-lg font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.category}
                </p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        darkMode
                          ? "bg-gray-700/80 text-gray-200"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div
            className={`text-center py-16 sm:py-20 rounded-xl ${
              darkMode ? "bg-gray-800/50" : "bg-white"
            }`}
          >
            <div className="text-5xl mb-4">🧐</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-500">
              Try different search terms or filters
            </p>
          </div>
        )}

        {/* Enhanced Lightbox Component */}
        {selectedMedia && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
              darkMode ? "bg-gray-900/95" : "bg-black/95"
            } backdrop-blur-md transition-opacity duration-300`}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeLightbox();
              if (e.key === "ArrowLeft") navigateLightbox("prev");
              if (e.key === "ArrowRight") navigateLightbox("next");
            }}
            tabIndex={0}
            ref={lightboxRef}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close media viewer"
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox("prev")}
              aria-label="Previous media"
              className="absolute left-4 p-3 text-white hover:bg-white/20 rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateLightbox("next")}
              aria-label="Next media"
              className="absolute right-4 p-3 text-white hover:bg-white/20 rounded-full transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Media Container */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}

              <div
                className={`transition-opacity duration-200 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              >
                {selectedMedia.type === "image" ? (
                  <img
                    src={generateCloudinaryUrl(selectedMedia.src, {
                      width: window.innerWidth < 768 ? 600 : 1200,
                      height: window.innerWidth < 768 ? 400 : 800,
                      quality: "auto:best",
                      format: "auto",
                    })}
                    alt={selectedMedia.alt}
                    className="w-full h-full object-contain rounded-lg"
                    onLoad={() => setIsLoading(false)}
                    onTouchStart={(e) => handleTouchStart(e)}
                    onTouchMove={(e) => handleTouchMove(e)}
                    onTouchEnd={handleTouchEnd}
                  />
                ) : (
                  <video
                    src={generateVideoUrl(selectedMedia.src, {
                      width: window.innerWidth < 768 ? 800 : 1200,
                      height: window.innerWidth < 768 ? 450 : 675,
                      quality: "auto:best",
                    })}
                    className="w-full h-full object-contain rounded-lg"
                    controls
                    autoPlay
                    muted
                    playsInline
                    onCanPlay={() => setIsLoading(false)}
                  />
                )}
              </div>

              {/* Media Info - Enhanced Text Appearance */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center max-w-[90%] bg-gradient-to-t from-black/80 to-transparent w-full py-6 px-4 rounded-b-lg">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1 drop-shadow-md">
                  {selectedMedia.name}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-2 drop-shadow-md">
                  {selectedMedia.category}
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {selectedMedia.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        darkMode
                          ? "bg-gray-700/80 text-gray-200"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {selectedMedia.tags.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">
                      +{selectedMedia.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
