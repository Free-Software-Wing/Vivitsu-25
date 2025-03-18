import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 shadow-md backdrop-blur-md bg-black md:bg-black/90"
    style={{maxWidth: "100rem"}}>
            <div className="flex justify-between items-center px-8 py-4">

          {/* Left Section: Logos */}
          <div className="flex items-center space-x-4 gap-1.5">
            <img src="goka.jpeg" alt="Logo 1" className="h-12" />
            <img src="fsw_logo.png" alt="Logo 2" className="h-12" />
          </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FaBars className="text-2xl text-white" />}
        </div>

        {/* Right Section: Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 text-white text-lg fixed md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-black md:bg-transparent shadow-md md:shadow-none transition-transform duration-300 ease-in-out gap-10 ${
            isOpen
              ? "translate-y-0 flex flex-col items-center justify-center"
              : "-translate-y-full"
          } md:translate-y-0`}
        >
          {/* Close Button in Mobile View */}
          {isOpen && (
            <div
              className="absolute top-4 right-6 text-2xl cursor-pointer md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes className="text-white" />
            </div>
          )}

          {[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }, { name: "Events", path: "/events" }, { name: "Team", path: "/team" }, { name: "Magazines", path: "/magazines" },{ name: "Faqs", path: "/faqs" },{ name: "vivitsu", path: "/vivitsu" }, { name: "Join Us", path: "/join-us" }].map((item, index) => (
            <li key={index} className="w-full md:w-auto">
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block w-full p-4 md:p-0 text-center hover:bg-gray-700 md:hover:bg-transparent hover:text-blue-600  hover:scale-110  transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 md:hidden bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
