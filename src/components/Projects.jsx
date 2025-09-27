import { motion } from "framer-motion";
import { projectData } from "../assets/asset.js";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Project"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-center mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectData.map((item, index) => (
            <div
              key={index}
              className="bg-dark-400 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />

              {/* project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400  mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((language, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-dark-300 text-sm">
                      {language}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center justify-between w-25 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition-colors"
                >
                  <item.icon />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
