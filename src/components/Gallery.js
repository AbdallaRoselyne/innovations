import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
} from "lucide-react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [videoStates, setVideoStates] = useState({});

  const videoRefs = useRef({});

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
      name: "Seedlings in Vertical Farm",
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
      name: "Model 003",
      category: "Electric mobility",
      src: "scooter3_v76kl8.jpg",
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
      name: "Model 003",
      category: "Electric mobility",
      src: "scooter5_bafl3x.jpg",
      alt: "EV Prototype",
      tags: ["prototype", "electric", "scooter"],
    },
    {
      id: 9,
      type: "image",
      name: "Advanced Grow Lights",
      category: "Clean farming",
      src: "grow_lights_vnxg0c.jpg",
      alt: "Grow Lights",
      tags: ["grow lights", "LED", "farming"],
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
    const {
      width = 800,
      height = 450,
      quality = "auto",
      format = "mp4",
    } = transformations;

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

  const toggleVideoMute = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setVideoStates((prev) => ({
        ...prev,
        [id]: { ...prev[id], muted: video.muted },
      }));
    }
  };

  const openLightbox = (item) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedMedia) {
        closeLightbox();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedMedia]);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-prodesign-blue bg-clip-text text-transparent mb-4 md:mb-6">
            Innovation Gallery
          </h2>
          <div className="w-20 md:w-32 h-1 bg-gray-800 mx-auto rounded-full"></div>
          <p className="mt-4 md:mt-6 text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Explore our cutting-edge projects in digital construction, electric
            mobility, and clean farming
          </p>
        </div>

        <div className="mb-8 md:mb-12 space-y-4 md:space-y-6">
          <div className="flex justify-center px-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
              <input
                type="text"
                placeholder="Search by name or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 md:pl-10 pr-4 py-2 md:py-3 text-sm md:text-base border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
            </div>
          </div>

          <div className="flex justify-center px-2">
            <div className="w-full max-w-4xl overflow-x-auto">
              <div className="flex sm:inline-flex rounded-2xl p-1 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl min-w-max mx-auto">
                {[
                  "all",
                  "Digital construction",
                  "Electric mobility",
                  "Clean farming",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab
                        ? "bg-prodesign-blue text-white shadow-lg transform translate-y-[-1px] sm:translate-y-[-2px]"
                        : "text-gray-700 hover:bg-white/50"
                    }`}
                  >
                    {tab === "all" ? "All Projects" : tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {item.type === "image" ? (
                  <img
                    src={generateCloudinaryUrl(item.src, {
                      width: window.innerWidth < 640 ? 300 : 400,
                      height: window.innerWidth < 640 ? 225 : 300,
                      quality: "auto:good",
                      effect: "sharpen:100",
                    })}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative">
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      src={generateVideoUrl(item.src, {
                        width: window.innerWidth < 640 ? 600 : 800,
                        height: window.innerWidth < 640 ? 338 : 450,
                        quality: "auto:good",
                      })}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onLoadedMetadata={() => {
                        setVideoStates((prev) => ({
                          ...prev,
                          [item.id]: { playing: false, muted: true },
                        }));
                      }}
                    />

                    <div className="absolute bottom-2 left-2 flex gap-1 md:gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideoPlay(item.id);
                        }}
                        className="p-1.5 md:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        {videoStates[item.id]?.playing ? (
                          <Pause className="w-3 h-3 md:w-4 md:h-4" />
                        ) : (
                          <Play className="w-3 h-3 md:w-4 md:h-4" />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleVideoMute(item.id);
                        }}
                        className="p-1.5 md:p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                      >
                        {videoStates[item.id]?.muted ? (
                          <VolumeX className="w-3 h-3 md:w-4 md:h-4" />
                        ) : (
                          <Volume2 className="w-3 h-3 md:w-4 md:h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-1.5 md:px-2 py-0.5 md:py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => openLightbox(item)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Maximize className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 md:py-16 px-4">
            <div className="text-gray-400 text-4xl md:text-6xl mb-4">🔍</div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2">
              No results found
            </h3>
            <p className="text-sm md:text-base text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 md:p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-2 md:top-4 right-2 md:right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="max-w-5xl max-h-[90vh] w-full">
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
                />
              )}

              <div className="mt-2 md:mt-4 text-center text-white px-4">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                  {selectedMedia.name}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {selectedMedia.category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
