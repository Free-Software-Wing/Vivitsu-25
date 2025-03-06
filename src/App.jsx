import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Faqs from "./components/Faqs.jsx";
import EventHighlight from "./components/EventHighlight.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import VivitsuMain from "./pages/VivitsuMain.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
// Particle Background Component

function App() {
  return (
    <>
      {/* Particle Background */}
      <ParticleBackground />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<EventHighlight />} />
        <Route path="/vivitsu" element={<VivitsuMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
