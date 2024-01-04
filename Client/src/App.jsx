import { useState } from 'react'

//HOC
import HomeLayoutHOC from './HOC/Home.HOC'

//Components
import temp from './Components/temp'
import master from './Components/master'



function App() {
  

  return (
    <>
      <HomeLayoutHOC path="/" exact component={temp} />
      <HomeLayoutHOC path="/:type" exact component={master} />
    </>
  )
}

export default App
