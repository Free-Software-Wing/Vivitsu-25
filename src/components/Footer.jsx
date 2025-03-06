import React from "react";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* About Section */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <h2 className="text-xl font-bold">Free Software Wing - GRIET</h2>
          <p className="text-gray-400 mt-2 max-w-sm mx-auto md:mx-0">
            FSW GRIET is committed to promoting free and open-source software by empowering students, fostering innovation, and advocating digital freedom.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://instagram.com/fsw_griet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com/in/free-software-wing-griet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 w-full md:w-1/3">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contribute" className="hover:text-white">Contribute</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="text-gray-400 mt-2 space-y-2">
            <p className="flex justify-center md:justify-start items-center gap-2">
              <FaMapMarkerAlt /> GRIET, Hyderabad
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2">
              <FaEnvelope /> fsw@griet.ac.in
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
