import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Wallet,
  Calendar,
  Code,
  Github,
  Trophy,
  Coffee,
  Gitlab,
} from "lucide-react";

const VivitsuDetails = () => {
  return (
    <section id="vivitsu-details" className="py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-poppins mb-4 relative inline-block">
            <span className="relative z-10">
              About <span className="text-primary">Vivitsu</span>
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 h-2 bg-accent w-full rounded z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            ></motion.span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our flagship hackathon that celebrates the spirit of open-source
            innovation and collaboration
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mb-8 text-lg">
                <span className="code-symbol font-mono font-semibold">
                  {"<Vivitsu />"}
                </span>{" "}
                is our flagship hackathon that celebrates the spirit of
                open-source innovation. Over 24 hours, participants collaborate
                to build solutions using free and open-source software tools and
                technologies.
              </p>
              <p className="mb-10 text-lg">
                The event brings together students, developers, designers, and
                tech enthusiasts to create projects that address real-world
                challenges while embracing the principles of software freedom.
              </p>

              <div className="grid grid-cols-2 gap-5">
                <motion.div
                  className="highlight-box p-5 rounded-lg"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-orange-600 text-primary text-2xl mb-3 glow">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold font-poppins text-lg mb-1">
                    200+ Participants
                  </h3>
                  <p className="">From various colleges and backgrounds</p>
                </motion.div>

                <motion.div
                  className="highlight-box p-5 rounded-lg"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                >
                  <div className="text-emerald-600 text-secondary text-2xl mb-3 glow">
                    <Briefcase className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold font-poppins text-lg mb-1">
                    50+ Projects
                  </h3>
                  <p className="">Innovative solutions using FOSS</p>
                </motion.div>

                <motion.div
                  className="highlight-box p-5 rounded-lg"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <div className="text-blue-500 text-2xl mb-3 glow">
                    <Trophy className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold font-poppins text-lg mb-1">
                    ₹1,00,000
                  </h3>
                  <p className="">In prizes and sponsorships</p>
                </motion.div>

                <motion.div
                  className="highlight-box p-5 rounded-lg"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.15 }}
                >
                  <div className="text-green-500 text-2xl mb-3 glow">
                    <Calendar className="h-10 w-10" />
                  </div>
                  <h3 className="font-semibold font-poppins text-lg mb-1">
                    24 Hours
                  </h3>
                  <p className="">Of non-stop innovation</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 -top-4 bg-primary/10 rounded-lg h-full w-full"></div>
              <div className="absolute -right-4 -bottom-4 bg-secondary/10 rounded-lg h-full w-full"></div>

              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Vivitsu Hackathon"
                className="rounded-lg shadow-xl w-full relative z-10 image-responsive"
              />

              {/* Floating tech icons */}
              <motion.div
                className="text-black absolute -top-10 -left-10 bg-white p-3 rounded-full shadow-lg z-20 floating-icon"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Gitlab className="h-10 w-10 text-primary" />
              </motion.div>

              <motion.div
                className="text-amber-900 absolute -bottom-8 left-1/4 bg-white p-3 rounded-full shadow-lg z-20 floating-icon"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Code className="h-10 w-10 text-secondary" />
              </motion.div>

              <motion.div
                className="absolute -right-8 top-1/3 bg-white p-3 rounded-full shadow-lg z-20 floating-icon"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Coffee className="h-10 w-10 text-blue-500" />
              </motion.div>

              {/* Add responsive styles */}
              <style>{`
    @media (max-width: 768px) {
      .image-responsive {
        width: 90%; /* Reduce image size slightly */
        margin: 0 auto; /* Center the image */
      }

      .floating-icon {
        transform: scale(0.8); /* Reduce the size of floating icons */
      }

      .floating-icon.-top-10 {
        top: -5%; /* Adjust position for smaller screens */
        left: -5%;
      }

      .floating-icon.-bottom-8 {
        bottom: -5%;
        left: 20%;
      }

      .floating-icon.-right-8 {
        right: -5%;
        top: 30%;
      }
    }
  `}</style>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivitsuDetails;
