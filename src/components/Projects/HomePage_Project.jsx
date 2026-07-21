import React, { useContext, } from 'react'
import{ Link } from 'react-router-dom'
import { DataList } from '../../storeAPI/ContextApi'

const  HomePageProject = () => {
  const {futureProjects} = useContext(DataList)
  return (
     <div className="w-full  py-16">
  {/* Heading */}
  <div className="max-w-7xl mx-auto text-white px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

    <Link to="AllProjects" >
    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      View All Projects
    </button>
    </Link>
  </div>
    <h1 className="text-5xl text-white text-center mt-20 mb-12">
  Future Projects
</h1>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

  {futureProjects.map((project) => (

    <div
      key={project.name}
      className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
        Coming Soon
      </div>

      <h2 className="text-2xl font-bold text-white mt-6">
        {project.name}
      </h2>

      <p className="text-zinc-400 mt-4 leading-7">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <button
        disabled
        className="mt-8 w-full py-3 rounded-xl bg-zinc-800 text-zinc-400 cursor-not-allowed"
      >
        Coming Soon
      </button>
    </div>

  ))}

</div>

 
  </div>

  )
}
export default HomePageProject;