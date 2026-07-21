import React from 'react'
import profile from '../../assets/profile.jpeg'


export default function ProfileImage() {
 
  return (
    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-2/3 mx-auto">
  <img
    src={profile}
    alt="Profile"
    className="w-full h-auto object-cover rounded-lg"
  />
</div>
  )


}
