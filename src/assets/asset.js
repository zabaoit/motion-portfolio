import { FaSchool, FaCode, FaReact, FaNodeJs, FaGithub, FaUsers } from "react-icons/fa6";
import profileImg from "../assets/profile.avif";
import { FaProjectDiagram } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import todoApp from "../assets/todoApp.avif";
import laptopShop from "../assets/laptopShop.avif";

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

export const skillsData = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description: "Build responsive web interfaces with HTML, CSS, JavaScript, React, and TailwindCSS.",
    technologies: ["Html", "Css", "JavaScript", "React", "Tailwindcss", "Bootsrap"],
  },
  {
    icon: FaNodeJs,
    title: "Backend Development",
    description:
      "Develop server-side applications with Node.js, Express, and REST APIs, ensuring performance and security.",
    technologies: ["Nodejs", "Express", "Rest API"],
  },
  {
    icon: GrMysql,
    title: "Database Management",
    description: "Manage databases, using Prisma for efficient data handling.",
    technologies: ["MySQL", "Sql Server", "MongoDB", "Prisma"],
  },
  {
    icon: FaGithub,
    title: "Tools & Technologies",
    description: "Familiar with Git/GitHub, VS Code, and Postman for version control and API testing.",
    technologies: ["Git & GitHub", "VS Code", "Postman"],
  },
  {
    icon: FaUsers,
    title: "Other Skills",
    description: "Basic knowledge of UI/UX design and strong soft skills in teamwork and communication.",
    technologies: ["Basic UI/UX design", "Soft Skills"],
  },
];

export const projectData = [
  {
    title: "Todo App",
    description:
      "A simple Todo application built with React and styled using Tailwind CSS, featuring task creation, completion, and deletion",
    image: todoApp,
    tech: ["React", "Tailwind Css"],
    icon: FaGithub,
    link: "#",
  },
  {
    title: "Todo App",
    description:
      "A simple Todo application built with React and styled using Tailwind CSS, featuring task creation, completion, and deletion",
    image: todoApp,
    tech: ["React", "Tailwind Css"],
    icon: FaGithub,
    link: "#",
  },
  {
    title: "Todo App",
    description:
      "A simple Todo application built with React and styled using Tailwind CSS, featuring task creation, completion, and deletion",
    image: todoApp,
    tech: ["React", "Tailwind Css"],
    icon: FaGithub,
    link: "#",
  },
  {
    title: "Laptop Shop",
    description: "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image: laptopShop,
    tech: ["Nodejs", "Express", "MySql", "Bootstrap"],
    icon: FaGithub,
    link: "https://github.com/zabaoit/node-pro",
  },
  {
    title: "Laptop Shop",
    description: "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image: laptopShop,
    tech: ["Nodejs", "Express", "MySql", "Bootstrap"],
    icon: FaGithub,
    link: "https://github.com/zabaoit/node-pro",
  },
  {
    title: "Laptop Shop",
    description: "A modern furniture e-commerce platform offering customizable home and office furniture .",
    image: laptopShop,
    tech: ["Nodejs", "Express", "MySql", "Bootstrap"],
    icon: FaGithub,
    link: "https://github.com/zabaoit/node-pro",
  },
];
