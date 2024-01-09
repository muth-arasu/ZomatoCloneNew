import React from 'react'
import { TbStarFilled } from "react-icons/tb";
const DeliveryCard = ({card}) => {
  return (
    <>
     <div className='p-3 w-1/3 h-84 mt-12'>
     <div className='bg-white p-3  rounded-lg hover:shadow-2xl '>
        <div className='w-full h-48 rounded-lg relative'>
            <div className='absolute px-2 bg-grey-800 text-white opacity-70 text-sm top-3 rounded-sm'><span>Promoted</span></div>
            <div className='absolute px-2 bg-blue-600 text-white text-sm bottom-3 rounded-sm'><span>{card.offer}</span></div>
            <img src={card.img}
             alt="food" className='w-full h-full rounded-lg object-cover' />
        </div>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-xl font-medium text-grey-700 '>{card.title}</span>
                <span className='px-1 bg-green-600 text-white text-md text-center flex items-center gap-1 rounded-sm mt-3'>{card.ratings}<TbStarFilled size={13}/></span>
            </div>
            <div className='flex items-top justify-between '>
                <span className='text-md font-light text-grey-300 '>{card.subtitle}</span>
                <div className='flex flex-col items-end text-md font-light text-grey-300 '><span >{card.payment} </span>
                    <span className='font-medium text-xs text-grey-600'>{card.timing} </span>
                </div>
            </div>
            <hr className='mt-6 ' />
            <div className='flex items-center justify-between   mb-3 gap-3'>
                <div className='w-20 h-6 ronded-sm'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp"
                     alt="max-delivery" className='w-full h-full object-cover rounded-sm' />
                </div>
                <p className='text-sm text-grey-300'>Follow all Max Safety measures to ensure your food is safe</p>
            </div>
        </div>

      </div>
     </div>

    </>
  )
}

export default DeliveryCard

