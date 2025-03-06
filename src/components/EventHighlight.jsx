import React, { useState } from "react";

const highlights = [
  { title: "24 Hour Hackathon", img: "/images/hackathon.png", text: "Details about the hackathon..." },
  { title: "Open Source Softwares", img: "/images/open-source.png", text: "Learn more about open-source software..." },
  { title: "Food and WiFi", img: "/images/food-wifi.png", text: "Enjoy free food and WiFi..." },
  { title: "Hangout with friends", img: "/images/hangout.png", text: "A great place to chill and network..." },
  { title: "Increase Your Network", img: "/images/network.png", text: "Meet new people and expand your network..." },
  { title: "Music and Dance Performance", img: "/images/music-dance.png", text: "Exciting music and dance performances..." },
  { title: "Fun Activities", img: "/images/fun-activities.png", text: "Participate in fun activities and games..." },
];

const EventHighlight = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center text-center mt-25 my-10">
      <h2 className="text-3xl font-bold mb-6">Event Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-lg border border-gray-200 bg-white transition-transform hover:scale-105 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            {highlight.img && (
              <img
                src={highlight.img}
                alt={highlight.title}
                className="w-24 h-24 mb-3"
              />
            )}
            <p className="text-lg font-medium">{highlight.title}</p>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-700 transition-opacity duration-300">
                {highlight.text}
              </p>
            )}
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
        READ MORE
      </button>
    </div>
  );
};

export default EventHighlight;
