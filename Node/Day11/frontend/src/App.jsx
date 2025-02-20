import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Movies from './Components/Movies'
import Users from './Components/Users'
import Products from './Components/Products'

const App = () => {
  return (
    <div>

      <Navbar />


      <Routes>
        <Route path='/movies' element={<Movies />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      
    </div>
  )
}

export default App