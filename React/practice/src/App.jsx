import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Textt from './Components/Textt'
import MyNumber from './Components/MyNumber'
import Random from './Components/Random'
import Search from './Components/Search'
import Navbar from './Components/Navbar'


const App = () => {



  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/text' element={<Textt />} />
        <Route path='/mynumber' element={<MyNumber />} />
        <Route path='/search' element={<Search />} />
        <Route path='/random' element={<Random />} />
      </Routes>

      </div>
  )
}

export default App