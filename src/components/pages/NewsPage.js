import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCalendarAlt,
  faArrowLeft,
  faClock,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NewsPage = () => {
  const location = useLocation();
  const [selectedNews, setSelectedNews] = useState(null);

  const newsArticles = [
    {
      id: 1,
      title: "Revolutionary Green Technology Breakthrough",
      excerpt:
        "Prodesign Innovation unveils groundbreaking sustainable energy solution that could transform the industry.",
      content: `
        <p class="mb-6 text-gray-700 leading-relaxed">In a major breakthrough for sustainable technology, Prodesign Innovation has developed a revolutionary green energy solution that promises to reshape how we think about renewable resources.</p>
        
        <p class="mb-6 text-gray-700 leading-relaxed">The new technology, which has been in development for over two years, combines advanced materials science with innovative engineering approaches to create a system that is both highly efficient and environmentally friendly.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <p class="text-blue-800 italic">"This breakthrough represents a quantum leap in sustainable energy solutions, with performance metrics exceeding industry standards by 40%."</p>
        </div>
        
        <p class="mb-6 text-gray-700 leading-relaxed">The breakthrough technology offers several key advantages over existing solutions, including improved efficiency rates, reduced manufacturing costs, and enhanced durability.</p>
        
        <p class="text-gray-700 leading-relaxed">Prodesign Innovation plans to begin pilot programs with select partners in the coming months, with broader commercial availability expected by next year.</p>
      `,
      images: [
        "https://res.cloudinary.com/dxn2hjf3e/image/upload/v1777449040/salad2_pjypkj_fdjd2n.jpg",
        "https://res.cloudinary.com/dxn2hjf3e/image/upload/v1777442790/1000018453_oyh3v0_rgv5v8.jpg",
      ],
      date: "2024-03-15",
      readTime: "5 min read",
    },
  ];

  const handleNewsClick = (article) => {
    setSelectedNews(article);
    window.scrollTo(0, 0);
  };

  const handleBackToNews = () => {
    setSelectedNews(null);
    window.scrollTo(0, 0);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (selectedNews) {
    return (
      <>
        <Helmet>
          <title>{selectedNews.title} - Prodesign Innovation</title>
          <meta name="description" content={selectedNews.excerpt} />
        </Helmet>

        <div className="font-sans bg-white min-h-screen flex flex-col">
          <Header />
          <div className="pt-20 lg:pt-24"></div>

          <main className="flex-grow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <button
                onClick={handleBackToNews}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200 group"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="mr-2 transition-transform duration-200 group-hover:-translate-x-1"
                />
                All News
              </button>

              <div className="mb-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="mr-2 text-blue-500"
                    />
                    {formatDate(selectedNews.date)}
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-2 text-blue-500"
                    />
                    {selectedNews.readTime}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  {selectedNews.title}
                </h1>

                <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
                  <div className="relative aspect-video w-full">
                    <img
                      src={selectedNews.images[0]}
                      alt={selectedNews.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-2/3">
                  <div className="prose prose-lg max-w-none">
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                    />
                  </div>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
                    <div className="relative aspect-video w-full">
                      <img
                        src={selectedNews.images[1]}
                        alt={`${selectedNews.title} details`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      More News
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {newsArticles
                        .filter((article) => article.id !== selectedNews.id)
                        .slice(0, 2)
                        .map((article) => (
                          <div
                            key={article.id}
                            className="cursor-pointer group"
                            onClick={() => handleNewsClick(article)}
                          >
                            <div className="rounded-lg overflow-hidden mb-3 aspect-video">
                              <img
                                src={article.images[0]}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                              <span>{formatDate(article.date)}</span>
                              <span className="mx-2">•</span>
                              <span>{article.readTime}</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {article.title}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/3">
                  <div className="bg-gray-50 p-6 rounded-xl sticky top-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Recent Updates
                    </h3>
                    <div className="space-y-6">
                      {newsArticles
                        .filter((article) => article.id !== selectedNews.id)
                        .slice(0, 3)
                        .map((article) => (
                          <div
                            key={article.id}
                            className="cursor-pointer group"
                            onClick={() => handleNewsClick(article)}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                                  <img
                                    src={article.images[0]}
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500 mb-1">
                                  {formatDate(article.date)}
                                </div>
                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                  {article.title}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer currentPath={location.pathname} />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>News - Prodesign Innovation</title>
        <link rel="canonical" href="https://innovations.mu/news" />
        <meta
          name="description"
          content="Stay updated on Prodesign Innovation's latest projects, news, and green technology updates."
        />
      </Helmet>

      <div className="font-sans bg-white min-h-screen flex flex-col">
        <Header />
        <div className="pt-20 lg:pt-24"></div>

        <main className="flex-grow">
          <div className="relative">
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://res.cloudinary.com/dxn2hjf3e/image/upload/v1777449039/analog-classic_wyk1dt.jpg"
                alt="Innovation background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-6 mb-8 border border-white/20">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="text-white text-4xl"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Innovation News
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Discover the latest breakthroughs, projects, and developments
                from Prodesign Innovation
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
            <div
              className="bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => handleNewsClick(newsArticles[0])}
            >
              <div className="md:flex">
                <div className="md:w-2/3 relative aspect-video">
                  <img
                    src={newsArticles[0].images[0]}
                    alt={newsArticles[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:w-1/3">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{formatDate(newsArticles[0].date)}</span>
                    <span className="mx-2">•</span>
                    <span>{newsArticles[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Read full story</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ml-2 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Latest Updates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
                  onClick={() => handleNewsClick(article)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.images[0]}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span>{formatDate(article.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center text-blue-600 font-medium text-sm">
                      <span>Continue reading</span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="ml-2 text-xs"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium shadow-sm hover:shadow-md">
                View More Articles
              </button>
            </div>
          </div>

          <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Stay Informed
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                  Bookmark this page or check back regularly for the latest
                  updates from Prodesign Innovation
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer currentPath={location.pathname} />
      </div>
    </>
  );
};

export default NewsPage;