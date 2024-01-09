import React from 'react'
import { useParams } from 'react-router-dom'
//components
import DeliveryMaster from './Delivery'


const master = () => {
    const {type} = useParams()
  return (
    <>
      {type ==='delivery' && <DeliveryMaster/> }
    </>
  )
}

export default master
