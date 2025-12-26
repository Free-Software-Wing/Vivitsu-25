import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const domains = [
  {
    id: 1,
    title: "Open Innovation",
    description:
      "Build groundbreaking solutions across any domain. Let your creativity run wild and innovate without boundaries.",
    gif: "https://i.gifer.com/74pZ.gif",
    backText: "Example Problem Statement: Design a hyperlocal solution to connect surplus food from restaurants to local shelters efficiently.",
  },
  {
    id: 2,
    title: "Health Care",
    description:
      "Create innovative solutions for healthcare challenges. From patient care to medical technology, make a difference in healthcare.",
    gif: "https://i.gifer.com/7BZb.gif",
    backText: "Example Problem Statement: Create an AI-powered diagnostic tool for early detection of skin diseases using smartphone cameras.",
  },
  {
    id: 3,
    title: "Smart Education",
    description:
      "Revolutionize learning through technology. Develop solutions that make education more accessible, engaging, and effective.",
    gif: "https://i.gifer.com/Ybin.gif",
    backText: "Example Problem Statement: Develop an AI tutor that adapts to the learning pace and style of neurodivergent students.",
  },
  {
    id: 4,
    title: "FinTech",
    description:
      "Revolutionize the financial world with technology. Build secure, scalable, and inclusive financial solutions for the future economy.",
    gif: "https://images.squarespace-cdn.com/content/v1/5feb53185d3dab691b47361b/1609930695341-BFSP2KYY1MI5SJVKUDO1/35f32-dataprivacyandregulationfintechs.gif",
    backText: "Example Problem Statement: Create a decentralized identity verification system for seamless cross-border payments.",
  },
  {
    id: 5,
    title: "Sustainable and Agro-Tech",
    description:
      "Bridge technology with nature. Develop sustainable solutions for smart farming, environmental conservation, and renewable energy.",
    gif: "https://cdn.dribbble.com/userupload/24439185/file/original-2c9b06bf14c1c8732d59221e3c498f9f.gif",
    backText: "Example Problem Statement: Design a smart irrigation system that optimizes water usage based on real-time weather data.",
  },
];

const DomainsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const nextDomain = () => {
    setCurrentIndex((prev) => (prev + 1) % domains.length);
    setFlippedIndex(null);
  };

  const prevDomain = () => {
    setCurrentIndex((prev) => (prev - 1 + domains.length) % domains.length);
    setFlippedIndex(null);
  };

  const getPosition = (index) => {
    const diff = (index - currentIndex + domains.length) % domains.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -4) return "right";
    if (diff === -1 || diff === 4) return "left";
    return "hidden";
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {domains.map((domain, index) => {
          const position = getPosition(index);
          const isCenter = position === "center";
          const isFlipped = isCenter && flippedIndex === index;

          return (
            <div
              key={domain.id}
              className={`absolute w-full max-w-3xl transition-all duration-500 ease-in-out ${position === "center"
                ? "opacity-100 transform translate-x-0 scale-100 z-20"
                : position === "right"
                  ? "opacity-50 transform translate-x-[60%] scale-95 z-10"
                  : position === "left"
                    ? "opacity-50 transform -translate-x-[60%] scale-95 z-10"
                    : "opacity-0 transform scale-75 z-0"
                }`}
              onClick={() => isCenter && setFlippedIndex(isFlipped ? null : index)}
            >
              <div
                className={`relative w-full h-[400px] rounded-2xl border border-blue-800/30 transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""
                  }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/30 backdrop-blur-lg p-10 rounded-2xl text-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    src={domain.gif}
                    alt={domain.title}
                    className="w-40 h-40 mx-auto mb-6"
                  />
                  <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-[0_0_15px_#00FFFF]">
                    {domain.title}
                  </h3>
                  <p className="text-lg text-gray-300">{domain.description}</p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900 text-white rounded-2xl p-6 text-xl font-bold rotate-y-180"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-2xl">{domain.backText}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevDomain}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-cyan-500/40 hover:bg-cyan-500/70 p-4 rounded-full transition-all drop-shadow-[0_0_15px_#00FFFF]"
      >
        <ChevronLeft className="w-10 h-10 text-white" />
      </button>
      <button
        onClick={nextDomain}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-cyan-500/40 hover:bg-cyan-500/70 p-4 rounded-full transition-all drop-shadow-[0_0_15px_#00FFFF]"
      >
        <ChevronRight className="w-10 h-10 text-white" />
      </button>
    </div>
  );
};

export default DomainsCarousel;

