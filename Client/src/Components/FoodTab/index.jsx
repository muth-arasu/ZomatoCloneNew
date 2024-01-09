import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames'
//react-icons
import { FiShoppingBag } from "react-icons/fi";
import { BiDrink } from "react-icons/bi";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";





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
                <div className={type === item.id ? 'relative flex flex-col items-center text-xl text-red-500' : 'flex flex-col items-center text-xl'} >
                  <div className={type === item.id && ' absolute -top-3.5 h-full w-full border-red-500 border-t-2 '} />
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

  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      imgDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imgActive: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor:"bg-mustard-50",
      isActive: false
    },
    {
      id: `diningout`,
      imgDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imgActive:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png" ,
      name: "Dining out",
      activeColor:"bg-purple-50",
      isActive: false
    },
    {
      id: `nightlife`,
      imgDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imgActive:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Nightlife",
      activeColor:"bg-red-50",
      isActive: false
    },
  ])
  const { type } = useParams()

  return (<>
    <div className=' hidden lg:flex items-center container px-20 mx-auto gap-20'>


      {
        allTypes.map((item) => {
          return (<>
              <Link to={`/${item.id}`}>
              <div className={classnames(' flex items-center gap-3 pb-4 transition duration-700 ease-in-out',{'border-red-500 border-b-2 w-full h-full ':type===item.id})}>
              <div className={classnames('w-14 h-14 p-2 bg-grey-50 rounded-full',{[`${item.activeColor}`] : type === item.id})}>
                <img src={ item.id===type ? item.imgActive : item.imgDefault} alt={item.name}
                  className='w-full h-full' />
              </div>
              <h3 className='text-2xl text-gray-500 font-normal'>{item.name}</h3>
            </div>

              </Link>
          </>)
        })
      }
    </div>
  </>)
}





const FoodTab = () => {
  return (
    <>
     <div className='mt-3'>
     <MobileTab />
      <LargeTab />
     </div>

    </>
  )
}

export default FoodTab
