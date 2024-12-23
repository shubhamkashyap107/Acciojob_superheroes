import React from 'react'
import Example from './Components/Example'
import Navbar from './Components/Navbar'
import {Routes , Route} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Cats from './Components/Cats'
import Users from './Components/Users'
import Comments from './Components/Comments'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
        <Route path="/cats" element={<Cats />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>

    </div>
  )
}

export default App