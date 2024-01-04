import React from 'react'
import Navber from '../Components/Navbar'

const HomeLayout = (props) => {
    return (<>
        <Navber />
        <div className='container mx-auto px-4 lg:px-20'>
        {props.children}
        </div>
    </>)
}
export default HomeLayout