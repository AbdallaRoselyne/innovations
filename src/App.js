import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import WorkSection from "./components/WorkSection";
import DigitalConstruction from "./components/DigitalConstruction";
import ElectricMobility from "./components/ElectricMobility";
import CleanFarming from "./components/CleanFarming";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <Hero />
      <Mission />
      <WorkSection />
      <DigitalConstruction />
      <ElectricMobility />
      <CleanFarming />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
