import React from 'react';

function Highlights() {
  return (
    <div className="flex flex-col items-center text-center my-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 font-playfair-display">EVENT HIGHLIGHTS</h1>
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-5 max-w-5xl">
        {[
          { src: "video1.gif", text: "24 Hours Hackathon" },
          { src: "img7.png", text: "Food and Wifi" },
          { src: "video2.gif", text: "Open Source Software" },
          { src: "video4.gif", text: "Increase Your Network" },
          { src: "video6.gif", text: "Fun Activities" },
          { src: "video5.gif", text: "Culturals" },
          { src: "video3.gif", text: "Hangout With Friends" }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-32 w-32 md:h-48 md:w-48 rounded-full bg-white flex justify-center items-center overflow-hidden">
              <img src={item.src} alt={item.text} className="h-full w-full object-cover" />
            </div>
            <div className="text-lg md:text-xl font-bold mt-3">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
