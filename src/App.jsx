import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import EventHighlight from "./components/EventHighlight.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import VivitsuMain from "./pages/VivitsuMain.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import Team from "./pages/Team.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import { useState } from "react";

// Particle Background Component

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  return (
    <>
      {/* Particle Background */}
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventHighlight />} />
        <Route path="/vivitsu" element={<VivitsuMain />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin" element={
          isAdminLoggedIn ? <AdminPanel /> : <AdminLogin onLogin={() => setIsAdminLoggedIn(true)} />
        } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
