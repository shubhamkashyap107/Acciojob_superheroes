import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from './Components/User'
import Products from './Components/Products'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/user' element={<User />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App