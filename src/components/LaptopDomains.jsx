import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Laptop({ neonTextClass, neonGlowClass }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 120;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //const clampedProgress = Math.min(scrollProgress, 70);
  const laptopAngle = Math.max(0, 300 - (300 * Math.min(scrollProgress, 63)) / 63);

  return (
    <div className="min-h-[150vh] relative bg-transparent flex flex-col items-center justify-center">
      {/* Neon Text Background */}
      <div className="absolute top-1/3 left-0 w-full flex justify-center">
        <h1 className={`text-9xl font-bold uppercase tracking-widest ${neonTextClass}`}>
          OUR TEAM
        </h1>
      </div>

      <div className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden">
        {/* Laptop Container */}
        <div
          className={`relative w-[1000px] h-[600px] transform-gpu ${neonGlowClass}`}
          style={{ perspective: "1500px" }}
        >
          {/* Laptop Screen */}
          <div
            className="absolute w-full h-[600px] bg-gray-800 rounded-t-xl border-4 border-gray-700 transform-gpu origin-bottom"
            style={{
              transform: `rotateX(${-laptopAngle}deg)`,
              transition: "transform 0.1s ease-out",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="absolute inset-2 bg-black rounded overflow-hidden">
              <div className="animate-fade-up">
                <div className="bg-gradient-to-b from-black to-gray-900 py-20 text-white w-full overflow-hidden">
                  <div className="container mx-auto flex flex-col md:flex-row items-center max-w-6xl px-6">
                    <div className="md:w-1/2 text-left">
                      <h2 className="text-4xl font-bold">OUR TEAM</h2>
                      <div className="w-16 h-1 bg-blue-500 mt-2"></div>
                      <p className="text-gray-300 mt-4 text-lg">
                        Meet the passionate individuals driving innovation and
                        excellence.
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
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="absolute bottom-0 w-full h-[20px] bg-gray-700 rounded-b-xl transform-gpu" />
        </div>

        {/* Scroll Indicator */}
        {scrollProgress < 70 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
            <p className="text-center mb-2">Scroll to open</p>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
              <div className="w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-scroll" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Laptop.propTypes = {
  neonTextClass: PropTypes.string,
  neonGlowClass: PropTypes.string,
};

Laptop.defaultProps = {
  neonTextClass: "neon-text",
  neonGlowClass: "neon-glow",
};

export default Laptop;  