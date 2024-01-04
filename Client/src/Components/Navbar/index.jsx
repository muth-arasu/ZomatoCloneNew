import React from 'react'

//react-icons
import { IoPersonSharp } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";



const MobileNav = () => {
  return (<>
    <div className='flex w-full items-center  justify-between px-2 lg:hidden '>
      <div className='w-28 h-8'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo.png'
          className='w-full h-full' />
      </div>
      <div className='flex gap-2 items-center'>
        <button className='bg-red-400 p-1 rounded-full md:p-2'>Use Login</button>
        <span className='border border-grey-400 text-red-400 text-xl rounded-full p-1 md:p-2 '><IoPersonSharp/></span>
      </div>
    </div>
  </>)

}

const LargeNav = () => {
  return (<>
    <div className=' hidden w-full items-center justify-around px-12  lg:flex  '>
      <div className='w-4/5 flex items-center gap-12'>
        <div className='w-28 h-8'>
          <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo.png'
            className='w-full h-full' />
        </div>
        <div className='shadow-md px-3 py-2 w-full border border-greyHueDown-200 rounded-md flex gap-3'>
          <div className='flex gap-3  border-r-2 border-grey-300 pr-3'>
            <span className='text-2xl text-red-400 '><TiLocation /></span>
            <input type="text" className='w-full focus:outline-none' placeholder='coimbatore' />
            <span className='text-2xl text-red-400'><IoMdArrowDropdown /></span>
          </div>
          <div className='w-full flex items-center gap-3'>

            <span className='text-2xl text-grey-400 '><RiSearch2Line /></span>
            <input type="text" className='w-96 focus:outline-none' placeholder='search for restaurent, cuisines or a dish' />
          </div>

        </div>
      </div>
      <div className='flex items-center gap-5 '>
        <button className='text-xl text-grey-500 hover:text-grey-900'>Login</button>
        <button className='text-xl text-grey-500 hover:text-grey-900'>SignUp</button>
        
      </div>

    </div>
  </>)
}

const Navber = () => {
  return (
    <>
      <nav className='p-4 bg-white shadow-md w-full'>
       <MobileNav />
        <LargeNav />

      </nav>
    </>
  )
}

export default Navber
