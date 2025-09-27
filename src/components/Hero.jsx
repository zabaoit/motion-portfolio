import { motion } from "framer-motion";
import { assets } from "../assets/asset.js";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="Home"
      className="min-h-screen pt-20 pb-6 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] flex items-center"
    >
      <div className="container mx-auto px-6 flex  flex-col md:flex-row items-center justify-between">
        {/* intro */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {" "}
            Hi, I'm <span className="text-purple">Zabaoit</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">Full Stack Developer</h2>
          <p className="text-lg text-gray-300 mb-8">
            I build modern, responsive web apps with clean design and efficient code.
          </p>
          <div className="flex space-x-4">
            <a
              href="#Project"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#Contact"
              className="py-3 px-6 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* img */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative ">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              src={assets.profileImg}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full z-10 object-cover "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
