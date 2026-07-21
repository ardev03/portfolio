import { createContext, useState } from "react";
import Logo from "../assets/Logo.png";

import { PiLessThanBold,PiGreaterThanBold } from "react-icons/pi";
import { FaArrowRight,FaHtml5, FaGithub } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";


export const DataList = createContext();

const DataListProvider = ({ children }) => {
  const [logo, setLogo] = useState(Logo);
      

  const skillsData = [
    {
      name: "HTML",
      logo: FaHtml5,
      color: "text-orange-600",
      level:90,
    },
    {
      name: "Tailwind CSS",
      logo: SiTailwindcss,
      color: "text-cyan-400",
      level:75,
    },
    {
      name: "JavaScript",
      logo: AiOutlineJavaScript,
      color: "text-yellow-400",
      level:80,
    },
    {
      name: "React",
      logo: GrReactjs,
      color: "text-blue-400",
      level:80,
    },
    {
      name: "Git",
      logo: FaGitAlt,
      color: "text-orange-500",
      level:70,

    },
    {
      name: "GitHub",
      logo: FaGithub,
      color: "text-white",
      level:75,
    },
    {
      name: "Vite",
      logo: TbBrandVite,
      color: "text-purple-500",
      level:75,
    },
  ];  

  const futureProjects = [
  {
    name: "AI Job Portal",
    description:
      "An AI-powered job portal that recommends jobs based on skills, experience, and resume analysis with personalized job matching.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
  },
  {
    name: "Expense Tracker",
    description:
      "A personal finance application to track income, expenses, budgets, and generate insightful financial reports with interactive charts.",
    tech: ["React", "Tailwind CSS", "Firebase", "Chart.js"],
  },
  {
    name: "E-Commerce Platform",
    description:
      "A modern online shopping platform featuring authentication, shopping cart, payment integration, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
];

 
  return (
    <DataList.Provider value={{ 
      logo, 
      setLogo,
      skillsData,
      futureProjects,
      }}>
      {children}
    </DataList.Provider>
  );
};

export default DataListProvider;