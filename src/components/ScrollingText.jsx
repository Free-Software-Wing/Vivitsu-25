import { motion } from "framer-motion";

export default function InfiniteScrollText() {
  const text = "🔥 VIVITSU - 25 🔥 🚀 24 Hour Hackathon 🚀 🌟 Cash Prize : 2 Lakhs 🌟";

  return (
    <div className="w-full overflow-hidden bg-black text-white py-4">
      <motion.div
        className="flex whitespace-nowrap items-center text-2xl font-bold"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <span key={index} className="flex items-center mr-10">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
