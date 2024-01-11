import React from 'react'
import { useParams } from 'react-router-dom'
//components
import DeliveryMaster from '../Components/Delivery'
import DiningOut from '../Components/DinnigOut'
import NightLife from '../Components/NightLife'



const Home = () => {
    const {type} = useParams()
  return (
    <>
      {type ==='delivery' && <DeliveryMaster/> }
      {type ==='diningout' && <DiningOut/> }
      {type ==='nightlife' && <NightLife/> }
    </>
  )
}

export default Home
