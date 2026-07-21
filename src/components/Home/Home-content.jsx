import React from 'react'
import { useContext } from "react";
import ProfileImage from '../Home/Home-profile-image'
import bgImage from '../../assets/background2.jpg';
import { FaHandSparkles, FaInstagramSquare, FaGithub, FaLinkedin  } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import About from '../About/About';
import HomePageSkills from '../skills/Skills_for_HomePage';
import HomePageProject from '../Projects/HomePage_Project';
import Contect from '../About/contect';
import Footer from '../footer/Footer';
import AllProjects from '../Projects/AllProjects';
import { DataList } from '../../storeAPI/ContextApi';
import { Link } from 'react-router-dom';
function HomeContent() {
  const {logo} = useContext(DataList)
  return (
    <div
  className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

    {/* Left Content */}
    <div className="w-full mt-15 lg:w-1/2 text-white text-center lg:text-left">

      <h4 className="inline-flex items-center gap-2 border-2 border-white rounded-full px-4 py-2 font-semibold">
        <FaHandSparkles className="text-amber-300 text-2xl" />
        Hi, I'm
      </h4>

      <h1 className="mt-6 font-bold leading-tight ">
        <span className="block text-5xl sm:text-6xl lg:text-7xl">
          ARUN
        </span>

        <span className="block text-4xl sm:text-5xl lg:text-6xl">
          RANA
        </span>
      </h1>

      <h3 className="mt-4 text-2xl sm:text-3xl font-bold">
        Frontend Developer
      </h3>

      <p className="mt-5 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
        I build responsive, user-friendly web applications with modern technologies.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        
        <Link to="AllProjects">
        <button className="bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-xl flex items-center justify-center gap-2">
          View My Work
          <FaArrowRight />
        </button>
              </Link>

         <Link to="About">     
        <button className="bg-gray-500 hover:bg-gray-600 px-8 py-3 rounded-xl">
          Contact Me
        </button>
          </Link>
      </div>
      <div className='w-full h-25 mt-30 '> 
        <span className=' items-center '>let's connect</span>
        
       <button className=' ml-10 '><FaInstagramSquare className='w-12 h-12 text-gray-400 '/></button>

       <a href="https://github.com/"><button className=' ml-10'><FaGithub  className='w-12 h-12'/></button></a> 

         <a href="https://www.linkedin.com/in/arun-rana-6052782aa?utm_source=share_via&utm_content=profile&utm_medium=member_android"><button className=' ml-10'><FaLinkedin  className='w-12 h-12' /></button></a>
      </div>

    </div>

    {/* Right Image */}
    <div className="w-full lg:mt-8 lg:w-1/2 flex justify-center">
      <ProfileImage />
    </div>

  </div >
  <About></About>
  <HomePageSkills></HomePageSkills>
  <HomePageProject></HomePageProject>
</div>
  )
}

export default HomeContent;