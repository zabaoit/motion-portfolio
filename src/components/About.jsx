import { motion } from "framer-motion";
import { assets, aboutDatas } from "../assets/asset.js";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="About"
      className="py-20"
    >
      <div className="container mx-auto px-6">
        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          3rd-year IT Student – Focus on Full-Stack Development
        </p>

        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* img */}
          <div className="md:w-1/2  rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              src={assets.profileImg}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse nam rerum vel, illo deserunt aperiam
                assumenda vero minus alias est iste ratione hic maiores suscipit earum, perferendis explicabo harum
                nemo? Nesciunt assumenda veniam amet expedita!
              </p>
              <p className="text-gray-300 mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt amet hic unde quibusdam
                pariatur quisquam fuga dolorum est, omnis tempora repellat, voluptatum voluptates laudantium doloribus
                molestias repellendus eveniet explicabo?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutDatas.map((aboutData, index) => (
                  <div
                    key={index}
                    className="bg-dark-400 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer "
                  >
                    <div className="text-purple text-3xl mb-4">
                      <aboutData.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{aboutData.title}</h3>
                    <p className="text-gray-400">{aboutData.technologies}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
