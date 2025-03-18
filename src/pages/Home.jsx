import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x513d9a,
          color2: 0xa18686,
          size: 1.4,
          backgroundColor: 0x1e182b,
          THREE: THREE, // Explicitly pass THREE.js
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Main Container with Vanta Background */}
      <div ref={vantaRef} className="relative w-full h-200 overflow-hidden">
        {/* Heading Section */}
        <motion.div
          className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl font-bold mb-2 h-25 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            style={{ textShadow: "0px 0px 20px rgba(0, 174, 255, 0.8)" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            Free Software Wing!
          </motion.h1>

          <motion.p
            className="text-lg mt-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            Promoting open-source innovation, collaboration, and software freedom.
          </motion.p>
        </motion.div>

        {/* Logo */}
        <img
          src="fsw_logo.png"
          alt="Logo"
          className="absolute top-1/2 right-10 transform -translate-y-1/2 w-40 md:block hidden z-10 animate-pulse"
        />
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col items-center py-20 px-5 w-full bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">WHO WE ARE?</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-2xl mt-2"></div>
        </div>
        <br /><br />
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Vision Card */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg max-w-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-blue-400">VISION</h3>
            <p className="text-gray-300 mt-2">
              To revolutionize the technology landscape by providing cutting-edge solutions that empower businesses to thrive in the digital era.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-800 shadow-lg p-6 rounded-lg max-w-lg transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-blue-400">MISSION</h3>
            <p className="text-gray-300 mt-2">
              Our mission is to deliver exceptional tech solutions that address complex challenges with simplicity and elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-20 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left px-5">
            <h2 className="text-4xl font-bold">OUR TEAM</h2>
            <div className="w-16 h-1 bg-blue-500 mt-2"></div>
            <p className="text-gray-300 mt-4 text-lg">
              Meet the passionate individuals driving innovation and excellence.
            </p>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center hover:scale-105 transition-transform duration-300">
            <img
              src="group_pic.jpg"
              alt="Team"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* Join Community Section */}
      <div className="bg-black py-20 flex justify-center">
        <div className="bg-white/10 p-8 rounded-2xl shadow-lg text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-400">FSW COMMUNITY</h2>
          <p className="mt-4 text-gray-300">
            Join our growing community of tech enthusiasts and developers.
          </p>
          <br/>
          <button className="mt-6 bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition hover:scale-105 active:scale-95">
            JOIN US NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
