import { useContext, useState } from 'react'
import bgImage from '../../assets/background2.jpg';
import { SiK3S } from 'react-icons/si';
import { DataList } from '../../storeAPI/ContextApi';
import { PiLessThanBold,PiGreaterThanBold } from "react-icons/pi";
import { FaArrowRight,FaHtml5, FaGithub } from "react-icons/fa6";
 function AllSkills() {

     const {skillsData} = useContext(DataList);
    
      
  return (

    <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="max-w-7xl mx-auto mt-16">

    <div className="text-center mb-16">

        <p className="uppercase tracking-[6px] text-blue-400 font-semibold">
            Technologies
        </p>

        <h1 className="text-5xl font-bold text-white mt-4">
            My Skills
        </h1>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
            I enjoy building responsive and scalable web applications using
            modern frontend technologies while continuously learning new
            tools and best practices.
        </p>

    </div>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {skillsData.map((skill) => {

            const Logo = skill.logo;

            return (

                <div
                    key={skill.name}
                    className="
                    group
                    backdrop-blur-xl
                    bg-white/5
                    border border-white/10
                    rounded-3xl
                    p-8
                    hover:border-blue-500
                    hover:-translate-y-2
                    transition-all duration-500
                    shadow-xl
                    "
                >

                    <div className="flex items-center justify-between">

                        <Logo
                            className={`text-6xl ${skill.color}
                            group-hover:scale-110
                            transition`}
                        />

                        <span className="text-blue-400 font-bold text-xl">
                            {skill.level}%
                        </span>

                    </div>

                    <h2 className="text-white text-2xl font-semibold mt-8">
                        {skill.name}
                    </h2>

                    <div className="w-full h-3 rounded-full bg-zinc-700 mt-6 overflow-hidden">

                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                            style={{
                                width: `${skill.level}%`
                            }}
                        />

                    </div>

                </div>

            )

        })}

    </div>

</div>
    </div>
  )
}
export default AllSkills;