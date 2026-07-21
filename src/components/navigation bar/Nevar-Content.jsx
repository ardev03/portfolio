import react from "react";
import NavLogo from "./NavLogo"
import bgImage from '../../assets/background2.jpg'
import{ Link } from 'react-router-dom'
const NavigationBar =() =>{
     
   const DownloadCVFile =() =>{
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Arun-Rana-Resume.pdf';
    link.click();
   }
  return(
   <div className="w-full h-20 text-white  px-4bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: `url(${bgImage})` }}>
  <div className="max-w-7xl mx-auto h-full flex items-center justify-between">

    {/* Logo */}
    <NavLogo/>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center gap-8 text-lg lg:text-xl font-bold">
      <Link to='/'>
       <span className="cursor-pointer hover:text-blue-600">Home</span>
      </Link>
     <Link to='AllSkills'>
      <span className="cursor-pointer hover:text-blue-600">Skills</span>
     </Link>
     
      <Link to="AllProjects">
      <span className="cursor-pointer hover:text-blue-600">Projects</span>
      </Link>
       <Link to="About">
       <span className="cursor-pointer hover:text-blue-600">About</span>
       </Link>
      

      <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
       onClick={DownloadCVFile}>
        Download CV
      </button>
    </div>

    {/* Mobile Menu Icon */}
    <button className="md:hidden text-3xl">
      ☰
    </button>

  </div>
</div>
  )
}
export default NavigationBar;