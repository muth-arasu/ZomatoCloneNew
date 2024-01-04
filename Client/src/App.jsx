import { useState } from 'react'

//HOC
import HomeLayoutHOC from './HOC/Home.HOC'

//Components
import temp from './Components/temp'


function App() {
  

  return (
    <>
      <HomeLayoutHOC path="/" exact component={temp} />
    </>
  )
}

export default App
