import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";
import Faqs from "./components/Faqs.jsx";
import EventHighlight from "./components/EventHighlight.jsx";
import VivitsuMain from "./pages/VivitsuMain.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<VivitsuMain />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<EventHighlight />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
