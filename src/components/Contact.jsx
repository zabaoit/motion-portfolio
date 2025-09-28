import { motion } from "framer-motion";
import { FaLocationDot, FaPhoneFlip, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your name
                </label>
                <input
                  className="border border-dark-400 w-full bg-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  className="border border-dark-400 w-full bg-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your name
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="border border-dark-400 w-full bg-dark-400 rounded-lg px-4 py-3 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" w-full bg-purple rounded-lg px-6 py-3 font-medium hover:bg-purple-700 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* info */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="flex items-start">
              <div className="text-2xl mr-4">
                <FaLocationDot />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">District 5, Tp. HCM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">
                <MdEmail />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">nguyengiabao8407@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4">
                <FaPhoneFlip />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">84+ 038 319 8407</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex  space-x-4">
                <a
                  href="https://github.com/zabaoit"
                  target="_blank"
                  className="w-12 h-12 bg-dark-400 rounded-full flex items-center justify-center hover:bg-purple transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/zabaoit"
                  target="_blank"
                  className="w-12 h-12 bg-dark-400 rounded-full flex items-center justify-center hover:bg-purple transition-colors"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/nguy%E1%BB%85n-gia-b%E1%BA%A3o-613aa2233/"
                  target="_blank"
                  className="w-12 h-12 bg-dark-400 rounded-full flex items-center justify-center hover:bg-purple transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
