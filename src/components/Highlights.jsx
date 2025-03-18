import React from 'react';

function Highlights() {
  return (
    <div className="flex flex-col items-center text-center my-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5 font-playfair-display text-white">
        EVENT HIGHLIGHTS
      </h1>
<br /><br />
      <div className="flex flex-col items-center gap-10 mt-6">
        {/* First Row */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
          <HighlightItem img="video1.gif" text="24 Hours Hackathon" />
          <HighlightItem img="img7.png" text="Food and Wifi" />
          <HighlightItem img="video2.gif" text="Open Source Software" />
          <HighlightItem img="video4.gif" text="Increase Your Network" />
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
          <HighlightItem img="video6.gif" text="Fun Activities" />
          <HighlightItem img="video5.gif" text="Culturals" />
          <HighlightItem img="video3.gif" text="Hangout With Friends" />
        </div>
      </div>
      <br /><br />
    </div>
  );
}

const HighlightItem = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="h-40 w-40  md:h-48 md:w-48 lg:h-52 lg:w-52 rounded-full bg-white flex justify-center items-center shadow-lg">
        <img src={img} alt={text} className="h-full w-full rounded-full object-cover" />
      </div>
      <div className="text-white text-lg font-bold mt-3 text-center">{text}</div>
    </div>
  );
};

export default Highlights;
