import React from 'react'
import calculater from '../../image/calculater.png'
import FlowerWebsite from '../../image/Flower-website.png'
import Game from '../../image/Game.png'
import myntra from '../../image/myntra-website-clone.png'
import todoapp from '../../image/TodoApp.png'
import { BsJavascript } from 'react-icons/bs'

 function MyAllProjectes() {

        const projectData = [
  {
    name: "Flower Website",
    message:
      "A responsive flower decoration website featuring service listings, product showcase, image gallery, and a modern user interface designed to provide a smooth browsing experience.",
    image: FlowerWebsite,
    link: "https://ardev03.github.io/flowerwebsite/",
    skills: {
      html: "HTML",
      css: "CSS",
      tailwind: "Tailwind CSS",
      javascript: "JavaScript",
      boodstreo: "BoodStrap"
    },
  },

  {
    name: "Myntra Clone",
    message:
      "A responsive e-commerce website inspired by Myntra with product listings, category navigation, shopping bag functionality, and an interactive user interface.",
    image: myntra,
    link: "https://ardev03.github.io/myntra-functional-clone/",
    skills: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      boodstreo: "BoodStrap"
    },
  },

  {
    name: "Cricket Game",
    message:
      "An interactive browser-based cricket game built with JavaScript featuring score tracking, game logic, and a responsive interface for an engaging user experience.",
    image: Game,
    link: "https://ardev03.github.io/cricket-game/",
    skills: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      boodstreo: "BoodStrap"
    },
  },

  {
    name: "Todo App",
    message:
      "A task management application with add, edit, delete, and local storage functionality, allowing users to manage daily tasks efficiently with persistent data.",
    image: todoapp,
    link: "https://ardev03.github.io/todo-app/",
    skills: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      boodstreo: "BoodStrap"
    },
  },

  {
    name: "Calculator",
    message:
      "A responsive calculator application supporting basic arithmetic operations with a clean interface, fast calculations, and an intuitive user experience.",
    image: calculater,
    link: "https://ardev03.github.io/calculator/",
    skills: {
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
    },
  },
];
  return (
    <>
  <div className="w-full min-h-screen py-20">

  {/* Heading */}
  <div className="max-w-7xl mx-auto text-center px-6">

    <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
      Portfolio
    </p>

    <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-8">
      A collection of projects that demonstrate my frontend development
      skills, problem-solving ability, and experience building responsive
      web applications.
    </p>

  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {projectData.map((project) => (

      <div
        key={project.name}
        className="group bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 transition-all duration-500 hover:-translate-y-2"
      >

        {/* Image */}
        <div className="overflow-hidden h-56">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-6">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold text-white">
              {project.name}
            </h2>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Live →
            </a>

          </div>

          <p className="text-zinc-400 mt-4 leading-7">
            {project.message}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-6">

            {Object.values(project.skills).map((skill) => (

              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
              >
                {skill}
              </span>

            ))}

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-zinc-700 hover:border-blue-500 text-white py-3 rounded-xl transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    ))}

  </div>

</div>
   </>
  )
}
export default MyAllProjectes;