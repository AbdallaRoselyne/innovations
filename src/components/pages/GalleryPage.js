import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Gallery from "../Gallery";
import Header from "../Header";
import Footer from "../Footer";

const GalleryPage = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>Gallery - Prodesign Innovation</title>
        <link rel="canonical" href="https://innovations.mu/gallery" />
        <meta
          name="description"
          content="View our green innovations in digital construction, clean farming, and electric mobility."
        />
      </Helmet>

      <div className="font-sans bg-white">
        <Header />
        <Gallery />
        <Footer currentPath={location.pathname} />
      </div>
    </>
  );
};

export default GalleryPage;
