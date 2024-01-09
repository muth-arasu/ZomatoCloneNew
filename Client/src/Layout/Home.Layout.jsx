import React from 'react'
//components
import Navber from '../Components/Navbar'
import FoodTab from '../Components/FoodTab'
import DeliveryCarousel from '../Components/Delivery/DeliveryCarousel'


const HomeLayout = (props) => {
    return (<>
        <Navber />
        <FoodTab/>
        <div className='container mx-auto px-4 lg:px-20'>
        {props.children}
        </div>

    </>)
}
export default HomeLayout