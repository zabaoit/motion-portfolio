import { useState } from "react";
import { navMenu } from "../assets/asset.js";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-3xl font-bold text-white">
            Zabao<span className="text-purple">it</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          {navMenu.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              className="relative text-white/80 transition duration-300 hover:text-purple group"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* mobile button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
          ) : (
            <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-400 rounded-lg p-4 flex flex-col space-y-3 justify-center text-center">
          {navMenu.map((item, index) => (
            <a onClick={() => setShowMenu(!showMenu)} key={index} href={`#${item}`} className="relative text-white/80 ">
              <span>{item}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
