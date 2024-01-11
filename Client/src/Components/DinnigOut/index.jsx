import React from 'react'
//components
import DO_HeroCarousel from './DO_HeroCarousel'

//React icons
import { MdOutlineArrowRight } from "react-icons/md";
import NL_Card from '../NightLife/Nl_card';


const DiningOut = () => {
  return (
    <>
      <div className='mt-6 mb-6'>
        <h1 className='text-3xl font-medium text-grey-700 mt-6 mb-6'>Collections</h1>
        <div className='text-xl text-grey-700 font-light flex items-center justify-between mb-3'>
          <h6 className=''>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</h6>
          <div className='text-red-300 text-lg flex items-center'><span>All collections in Coimbatore</span> <MdOutlineArrowRight size={22}/></div>
        </div>
        <DO_HeroCarousel/>
        <div>
          <NL_Card/>
        </div>
      </div>
    </>
  )
}

export default DiningOut
