import { FaSchool, FaCode, FaReact, FaNodeJs, FaGithub, FaUsers } from "react-icons/fa6";
import profileImg from "../assets/profile.avif";
import { FaProjectDiagram } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

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
