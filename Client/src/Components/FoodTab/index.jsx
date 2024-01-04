import React, { useEffect, useState } from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { BiDrink } from "react-icons/bi";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';




const MobileTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <FiShoppingBag />,
      name: "Delivery",
      isActive: false
    },
    {
      id: `diningout`,
      icon: <IoFastFoodOutline />,
      name: "Dining out",
      isActive: false
    },
    {
      id: `nightlife`,
      icon: <BiDrink />,
      name: "Nightlife",
      isActive: false
    },
  ])
  const { type } = useParams()



  return (
    <>
      <div className='lg:hidden bg-white shadow-lg  p-3 fixed bottom-0 z-10 w-full flex items-center justify-between px-2 text-grey-600 border-t-2 md:justify-evenly'>

        {
          allTypes.map((item) => {
            return (<>
           <Link to={`/${item.id}`}>
           <div className= {type===item.id ? 'relative flex flex-col items-center text-xl text-red-500':'flex flex-col items-center text-xl'} >
               <div className={type===item.id && ' absolute -top-3.5 h-full w-full border-red-500 border-t-2 '}/>
                {item.icon}
                <h3 className='text-lg'>{item.name}</h3>
              </div>
           </Link>
            </>)
          })
        }
      </div>
    </>)
}

const LargeTab = () => {
  return (<>
    <div className='flex items-center container px-20 mx-auto gap-20'>
      <div className='hidden lg:flex items-center gap-3 '>
        <div className='w-14 h-14 p-2 bg-grey-50 rounded-full'>
          <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="Delivery"
            className='w-full h-full' />
        </div>
        <h3 className='text-2xl text-gray-500 font-normal'>Delivery</h3>
      </div>
      <div className='hidden lg:flex items-center gap-3 '>
        <div className='w-14 h-14 p-2 bg-grey-50 rounded-full'>
          <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="Delivery"
            className='w-full h-full' />
        </div>
        <h3 className='text-2xl text-gray-500 font-normal'>Dining Out</h3>
      </div>
      <div className='hidden lg:flex items-center gap-3 '>
        <div className='w-14 h-14 p-2 bg-grey-50 rounded-full'>
          <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="Delivery"
            className='w-full h-full' />
        </div>
        <h3 className='text-2xl text-gray-500 font-normal'>Nightllife</h3>
      </div>
    </div>
  </>)
}





const FoodTab = () => {
  return (
    <>
      <MobileTab />
      <LargeTab />

    </>
  )
}

export default FoodTab
