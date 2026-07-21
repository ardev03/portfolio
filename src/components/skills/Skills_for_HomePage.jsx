import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataList } from '../../storeAPI/ContextApi';
import { PiLessThanBold,PiGreaterThanBold } from "react-icons/pi";
import { FaArrowRight,FaHtml5, FaGithub } from "react-icons/fa6";
const HomePageSkills = () => {

  const {skillsData}= useContext(DataList)
  return (
    <div className='w-full my-9 py-8'>
      <div className='max-w-7xl mx-auto  bg-zinc-800  items-center flex justify-between '>
      <h1 className=' text-3xl flex lg:flex-row  text-white mx-2'><PiLessThanBold /><PiGreaterThanBold /> Skills</h1>
      <Link to="AllSkills">
       <button className='w-60  bg-blue-500 items-center h-15 text-2xl text-white flex  justify-center  rounded-2xl gap-2'>more skills <FaArrowRight /></button>
      </Link>
       </div>
      <div className='max-w-7xl mx-auto  bg-zinc-800   px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-4 '>
        {skillsData.map((skills) =>{
              const Logo = skills.logo;

              return(
                <div key={skills.name} className=' text-white sm:w-50 md:w-50 lg:w-40 h-60 rounded-3xl items-center  flex justify-center  '>
              
                <h3 className=' text-3xl'>
                    <Logo className={`py-3 px-3 text-8xl text-amber-700 ${skills.color}`}
                    />
                    {skills.name}</h3>
               </div>
              )
            })}
         
      </div>
     
    </div>
  )
}
export default HomePageSkills;
