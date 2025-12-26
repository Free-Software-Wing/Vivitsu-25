import { useEffect, useRef } from "react";

const PortalEffectSlider = () => {
  const photoWrapperRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const wrapper = photoWrapperRef.current;
    let scrollAmount = 0;
    const speed = 1.5; // Slightly increased speed

    const scrollGallery = () => {
      if (wrapper) {
        scrollAmount += speed;
        if (scrollAmount >= wrapper.scrollWidth / 2) {
          scrollAmount = 0;
        }
        wrapper.scrollLeft = scrollAmount;
      }
      animationFrameRef.current = requestAnimationFrame(scrollGallery);
    };

    scrollGallery();

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  // Use public path to access images
  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  return (
    <div className="container mx-auto text-center p-10">
      {/* Bigger Title with More Gap */}
      <h1 className="text-4xl font-bold mb-10 text-white drop-shadow-[0_0_15px_#00FFFF]">
        Insights of VIVITSU 2025
      </h1>

      {/* Image Slider */}
      <div className="overflow-hidden whitespace-nowrap" ref={photoWrapperRef}>
        <div className="flex space-x-10 w-max"> {/* Increased space-x */}
          {images.map((src, index) => (
            <div key={index} className="photo w-80 h-56 flex-shrink-0"> {/* Made images bigger */}
              <img
                src={src}
                alt={`Insight ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalEffectSlider;
