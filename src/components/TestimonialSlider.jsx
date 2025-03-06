import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "lorem lorem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Dr. Avi",
    position: "HOD, AIML Dept.",
  },
  {
    quote:
      "lorem lorem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet",
    author: "Prof. Avi. Kumar",
    position: "Faculty, CSE Dept.",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full bg-gradient-to-r from-blue-200 to-blue-400 rounded-2xl p-8 px-12 mt-8">
      <div className="relative w-0.8 max-w-3xl p-10 bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-lg flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center"
        >
          <span className="text-5xl font-bold">❝</span>
          <p className="text-lg md:text-xl max-w-2xl relative z-10">{testimonials[currentIndex].quote}</p>
          <span className="text-5xl font-bold">❞</span>
          <div className="mt-4 flex flex-col items-center font-semibold relative z-10">
            ~ {testimonials[currentIndex].author}
            <span className="text-sm opacity-80">{testimonials[currentIndex].position}</span>
            <div className="w-16 mt-2 rounded-md h-1 bg-white"></div>
          </div>
        </motion.div>
      </div>
      <button
        onClick={prevTestimonial}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent w-12 h-12 flex items-center justify-center rounded-full text-blue-600 text-xl hover:bg-gray-200 transition-all"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent w-12 h-12 flex items-center justify-center rounded-full text-blue-600 text-xl hover:bg-gray-200 transition-all"
      >
        <FaChevronRight />
      </button>
      <div className="flex mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
