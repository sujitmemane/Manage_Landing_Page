import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import {RiCloseLine,RiMenu3Line} from 'react-icons/ri'
import './navbar.css'
const Navbar = () => {
  const [menu,setMenu]=useState(false)
  function onClose(){
  setMenu(false)
  }
  function onOpen(){
setMenu(true)
  }
  return (
   <nav className="container mx-auto p-6 relative">
    <div className="flex items-center justify-between">
       <div className="pt-2">
        <img src={logo} alt='logo' />
       </div>
       <div className=" hidden  md:flex space-x-10">
        <a href='#' className='hover:text-darkGrayishBlue'> Pricing </a>
        <a href='#' className='hover:text-darkGrayishBlue'> Product  </a>
        <a href='#' className='hover:text-darkGrayishBlue'> About Us </a>
        <a href='#' className='hover:text-darkGrayishBlue'> Carrers  </a>
        <a href='#' className='hover:text-darkGrayishBlue'> Community </a>
       </div>
       <a href="#" className=" hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
        Get Started
        </a>
       <div className='md:hidden'>
          {
            menu ?  <RiCloseLine color='#2d2e32' fontWeight='bold'
              size={27} onClick={onClose} />:<RiMenu3Line color='#2d2e32' fontWeight='bold'
              size={27} onClick={onOpen}/>
          }
          { menu &&
            (<div className='flex flex-col space-y-4 absolute min-w-max right-0 bg-white p-5 z-10 rounded  scale-up-center '>
              <a href='#' className='hover:text-darkGrayishBlue'> Pricing </a>
              <a href='#' className='hover:text-darkGrayishBlue'> Product  </a>
              <a href='#' className='hover:text-darkGrayishBlue'> About Us </a>
              <a href='#' className='hover:text-darkGrayishBlue'> Carrers  </a>
              <a href='#' className='hover:text-darkGrayishBlue'> Community </a>
             </div>)
          }
        </div>
    </div>
   </nav>
  )
}

export default Navbar
