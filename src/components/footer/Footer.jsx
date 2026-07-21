import React from 'react'

const Footer =() =>{
  return (
   <div className="w-full bg-gray-900 text-white py-6">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Left */}
    <h3 className="text-sm md:text-base text-center md:text-left">
      © 2026 Arun Rana. All Rights Reserved.
    </h3>

    {/* Right */}
    <div className="flex gap-6 text-sm md:text-base">
      <a href="#" className="hover:text-blue-400 transition">
        Privacy
      </a>

      <a href="#" className="hover:text-blue-400 transition">
        Terms
      </a>

      <a href="#" className="hover:text-blue-400 transition">
        Contact
      </a>
    </div>

  </div>
</div>
  )
}

export default Footer;
