import React from 'react'
//components
import Navber from '../Components/Navbar'
import FoodTab from '../Components/FoodTab'


const HomeLayout = (props) => {
    return (<>
        <Navber />
        <div className='container mx-auto px-4 lg:px-20'>
            
        {props.children}
        </div>
        <FoodTab/>

    </>)
}
export default HomeLayout