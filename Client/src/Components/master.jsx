import React from 'react'
import { useParams } from 'react-router-dom'


const master = () => {
    const {type} = useParams()
  return (
    <>
      {type}
    </>
  )
}

export default master
