import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Domains() {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const products = [
    {
      name: "Open Innovation",
      image: "https://i.gifer.com/74pZ.gif",
      description: "for Problem Statements",
      problems: ["Problem 1: Description here", "Problem 2: Description here", "Problem 3: Description here"],
    },
    {
      name: "Heritage and Cultural Preservation",
      image: "https://i.gifer.com/HAFq.gif",
      description: "for Problem Statements",
      problems: ["Problem A: Description here", "Problem B: Description here"],
    },
    {
      name: "Legal Awareness and Civic Governance",
      image: "https://i.gifer.com/Lrbo.gif",
      description: "for Problem Statements",
      problems: ["Problem X: Description here", "Problem Y: Description here"],
    },
    {
      name: "Smart Education",
      image: "https://i.gifer.com/Ybin.gif",
      description: "for Problem Statements",
      problems: ["Problem 101: Description here", "Problem 102: Description here"],
    },
    {
      name: "Healthcare",
      image: "https://i.gifer.com/7BZb.gif",
      description: "for Problem Statements",
      problems: ["Problem M: Description here", "Problem N: Description here"],
    },
  ];

  const nextProduct = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length); 
  };

  const prevProduct = () => {
    setIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length); 
  };

  return (
    <>
    <div className="bg-gray-900">
    <h1 className="text-4xl font-bold mb-4 text-center text-white">DOMAIN</h1>
    <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      
      <button
        onClick={nextProduct} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400"
      >
        <FaArrowLeft />
      </button>

      <div className="relative w-80 h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full flex flex-col items-center"
          >
            <img
              src={products[index].image}
              alt={products[index].name}
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{products[index].name}</h2>

       
            <div className="mt-2">
              <button
                onClick={() => setShowPopup(true)}
                className="text-blue-500 hover:underline"
              >
                Click here
              </button>{" "}
              {products[index].description}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevProduct} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400"
      >
        <FaArrowRight />
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black w-80 text-center">
            <h3 className="text-xl font-bold">{products[index].name} - Problem Statements</h3>
            <ul className="text-left mt-2">
              {products[index].problems.map((problem, i) => (
                <li key={i} className="mb-2">⚡ {problem}</li>
              ))}
            </ul>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-700 rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
}
