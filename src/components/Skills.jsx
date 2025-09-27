import { motion } from "framer-motion";
import { skillsData } from "../assets/asset.js";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="bg-dark-400 rounded-2xl p-6 transition duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <item.icon className="text-purple w-12 h-12 mr-6" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((language, index) => (
                  <span key={index} className="py-1 px-3 rounded-full text-sm bg-dark-300 font-semibold">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
