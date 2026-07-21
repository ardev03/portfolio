import {React, useContext} from 'react'
import { DataList } from '../../storeAPI/ContextApi'

const NavLogo = () => {
  const {logo} = useContext(DataList)
  return (
    <div className="flex items-center w-full md:w-1/2 lg:w-1/3 px-4 py-3">
  <img
    src={logo}
    alt="Logo"
    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-19 lg:h-19"
  />

  <span className="ml-3 text-lg sm:text-xl lg:text-2xl font-bold text-white ">
    ARUN RANA
  </span>
</div>
  )
}

export default NavLogo
