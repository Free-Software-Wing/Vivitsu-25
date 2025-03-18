import { motion } from "framer-motion";

export default function InfiniteScrollText() {
  const text =
    "🔥 VIVITSU - 25 🔥 🚀 24 Hour Hackathon 🚀 🌟 Cash Prize : 2 Lakhs 🌟";

  return (
    <div className="w-full overflow-hidden bg-black text-white py-4">
      <motion.div
        className="flex whitespace-nowrap items-center font-bold"
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
            className="flex items-center mr-8 sm:mr-12 md:mr-16 lg:mr-20 text-lg sm:text-l md:text-xl lg:text-3xl"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
