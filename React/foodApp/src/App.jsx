import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from './Components/Landing'
import AllRestaurants from './Components/AllRestaurants'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restaurants' element={<AllRestaurants />} />
      </Routes>

    </div>
  )
}

export default App