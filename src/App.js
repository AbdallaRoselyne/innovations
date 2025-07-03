import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WorkSection from "./components/WorkSection";
import DigitalConstruction from "./components/DigitalConstruction";
import ElectricMobility from "./components/ElectricMobility";
import CleanFarming from "./components/CleanFarming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WhyDifferent from "./components/WhyDifferent";
import GalleryPage from "./components/pages/GalleryPage";
import NewsPage from "./components/pages/NewsPage";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="font-sans bg-white">
              <Header />
              <Hero />
              <Mission />
              <WhyDifferent />
              <WorkSection />
              <DigitalConstruction />
              <ElectricMobility />
              <CleanFarming />
              <AboutUs />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
