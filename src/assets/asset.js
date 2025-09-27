import { FaSchool, FaCode } from "react-icons/fa6";
import profileImg from "../assets/profile.avif";
import { FaProjectDiagram } from "react-icons/fa";

export const assets = {
  profileImg,
};

export const navMenu = ["Home", "About", "Skills", "Project", "Contact"];

export const aboutDatas = [
  {
    icon: FaCode,
    title: "Language",
    technologies: ["Javascript, Typescrypt"],
  },
  {
    icon: FaSchool,
    title: "Education",
    technologies: ["IT Student at Saigon Technology University"],
  },
  {
    icon: FaProjectDiagram,
    title: "Projects",
    technologies: ["Academic & Personal Projects (4+)"],
  },
];
