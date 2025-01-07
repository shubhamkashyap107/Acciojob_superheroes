import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from './Components/Landing'
import AllRestaurants from './Components/AllRestaurants'
import Menu from './Components/Menu'
import CarouselRestaurants from './Components/CarouselRestaurants'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restaurants' element={<AllRestaurants />} />
        <Route path='/menu/:id' element={<Menu />} />
        <Route path='/carrestaurants/:id' element={<CarouselRestaurants  />} />
      </Routes>

    </div>
  )
}

export default App