import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

const Contect = () => {
  return (
   <div className="w-full bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">

    {/* Left Section */}
    <div className="flex items-center gap-4 text-center lg:text-left">
      <div className="bg-blue-600 p-4 rounded-full text-3xl">
        <FaTelegramPlane />
      </div>

      <div>
        <h3 className="text-2xl font-bold">Let's Work Together</h3>
        <p className="text-gray-400 mt-2">
          Have a project in mind? Feel free to contact me.
        </p>
      </div>
    </div>

    {/* Contact Info */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <AiTwotoneMail className="text-blue-400 text-xl" />
        <span>arunrana8882072@gmail.com</span>
      </div>

      <div className="flex items-center gap-3">
        <BsTelephoneForward className="text-blue-400 text-xl" />
        <span>+91 8882072164</span>
      </div>

      <div className="flex items-center gap-3">
        <IoLocationSharp className="text-blue-400 text-xl" />
        <span>Noida, Delhi</span>
      </div>
    </div>

    {/* Button */}
    <div>
      <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold">
        Get In Touch
      </button>
    </div>

  </div>
</div>
  )
}
export default  Contect;