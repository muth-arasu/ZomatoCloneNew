import React from 'react'
//react icons
import { MdOutlineArrowRight } from "react-icons/md";



const CarouselCard = ({img,title,subtitle}) => {
  return (
   <>
    
    <div className='relative rounded-lg lg:w-64 lg:h-80 w-24 h-36'>
      <div className='absolute  w-full h-96 bg-gradient-to-r from-grey-900 to-grey-0 z-10 rounded-lg'/>
      <div className='absolute text-white font-medium text-md z-10 flex flex-col bottom-3 left-1 z-20 left-3 rounded-lg'><span>{ title}</span>
      <span className='flex items-center text-sm'>{subtitle }<MdOutlineArrowRight size={20}/></span>
      </div>  
      <img src={img}
      alt="Taj" className='w-full h-full object-cover rounded-lg '/>
    </div>
    
   </>
  )
}

export default CarouselCard
