import { motion } from "framer-motion";

export default function SponsorsPage() {
  const sponsors = [
    { name: "Sponsor 1", logo: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/8dc95c38771799.576e331775ca5.jpg", link: "https://www.monsterenergy.com/en-in/ "},
    { name: "Sponsor 2", logo: "https://via.placeholder.com/150", link: "https://example.com" },
    { name: "Sponsor 3", logo: "https://via.placeholder.com/150", link: "https://example.com" },
    { name: "Sponsor 4", logo: "https://via.placeholder.com/150", link: "https://example.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌟 Our Sponsors 🌟
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
          >
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-40 h-40 object-contain rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
            <p className="mt-2 text-lg font-semibold">{sponsor.name}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
