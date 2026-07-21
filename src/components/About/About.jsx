import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

 function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white flex flex-col lg:flex-row items-center gap-12">

  {/* Left Section */}
  <div className="w-full lg:w-1/2 flex flex-col gap-6">

    <h1 className="text-3xl md:text-4xl font-bold">
      About Me
    </h1>

    <p className="text-gray-300 leading-8 text-base md:text-lg">
      Hi, I'm Arun Rana, a passionate Frontend Web Developer with a strong
      foundation in HTML, CSS, JavaScript, React.js, Tailwind CSS,
      Bootstrap, Core Java, and MySQL. I enjoy building modern,
      responsive, and user-friendly web applications that provide a smooth
      user experience.
    </p>

    <button className="w-fit flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300">
      More About Me
      <GoArrowRight />
    </button>

  </div>

  {/* Right Section */}
  <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-zinc-900 rounded-xl p-6 text-center shadow-lg">
      <h1 className="text-4xl mb-4">🏆</h1>
      <h2 className="text-3xl font-bold">1+</h2>
      <p className="text-gray-400 mt-2">
        Years Experience
      </p>
    </div>
      
       <Link to='AllProjects'>
    <div className="bg-zinc-900 rounded-xl p-6 text-center shadow-lg">
      <h1 className="text-4xl mb-4">💻</h1>
      <h2 className="text-3xl font-bold">8+</h2>
      <p className="text-gray-400 mt-2">
        Projects Completed
      </p>
    </div>
            </Link>

    <Link to='AllSkills'>
    <div className="bg-zinc-900 rounded-xl p-6 text-center shadow-lg sm:col-span-2 lg:col-span-1">
      <h1 className="text-4xl mb-4">🚀</h1>
      <h2 className="text-3xl font-bold">9+</h2>
      <p className="text-gray-400 mt-2">
        Technologies Mastered
      </p>
    </div>
           </Link>
  </div>

</div>
  )
}
export default About;