import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'


//HOC
import HomeLayoutHOC from './HOC/Home.HOC'

//Components
import temp from './Components/temp'
import Home from './Page/Home'



function App() {
  

  return (
    <>

      <HomeLayoutHOC path="/" exact component={temp} />
      <HomeLayoutHOC path="/:type" exact component={Home} />
      {/* <Routes><Route path='/*' element={<Navigate to='delivery'/> }  /> </Routes> */}
    </>
  )
}

export default App
