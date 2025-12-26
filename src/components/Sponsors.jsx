import { motion } from "framer-motion";

export default function SponsorsPage() {
  const sponsors = [
    {
      name: "CodeGnan",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQE2dFd6hMRZmw/company-logo_200_200/company-logo_200_200/0/1630626957056/codegnan_logo?e=2147483647&v=beta&t=DN4ALlhbDlbf9h0bk23HqwWMhtkTgVlKZlrgCMBPoLE",
      link: "https://codegnan.com/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 relative bg-transparent">
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-md"></div>

      <motion.h1
        className="text-6xl font-extrabold text-white relative z-10 tracking-wide text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Sponsors
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12 relative z-10 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-56 h-56 object-contain rounded-xl shadow-2xl border border-purple-500/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
            <p className="mt-4 text-2xl font-semibold text-white drop-shadow-lg">
              {sponsor.name}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
