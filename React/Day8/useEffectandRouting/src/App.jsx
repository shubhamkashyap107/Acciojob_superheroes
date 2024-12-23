import React from 'react'
import Example from './Components/Example'
import Navbar from './Components/Navbar'
import {Routes , Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App