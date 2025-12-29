import { motion } from "framer-motion";

export default function InfiniteScrollText() {
  const text = "VIVITSU - 25 | 24 Hour Hackathon | Cash Prize: 1 Lakhs";

  return (
    <div className="w-full overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap items-center text-8xl"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={index}
            className="flex items-center mr-10"
            style={{
              fontFamily: "'Lucida Sans', 'Arial', sans-serif", // Set Lucida Sans font
              background: `linear-gradient(45deg, #1e3c72, #2a5298, #6a82fb, #fc5c7d)`, // Gradient for text
              backgroundSize: "400% 400%", // Larger gradient size for animation
              animation: "gradientShift 5s ease infinite", // Animate the gradient
              WebkitBackgroundClip: "text", // Ensure the background is clipped to the text
              color: "transparent", // Make the text color transparent so gradient shows
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>

      {/* CSS for gradient animation */}
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 100% 0;
            }
            50% {
              background-position: 0 100%;
            }
            100% {
              background-position: 100% 0;
            }
          }
        `}
      </style>
    </div>
  );
}
