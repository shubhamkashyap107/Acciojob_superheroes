import React from 'react'
import {Link, Route, Routes} from "react-router-dom"
import Electronics from './Components/Electronics'
import Furniture from './Components/Furniture'
import Expensive from './Components/Expensive'


const App = () => {
  return (
    <div>
      <nav>
        <Link to={"/items/electronics"}>Electronics</Link>
        <Link to={"/items/furniture"}>Furniture</Link>
        <Link to={"/items/expensive"}>Expensive</Link>
      </nav>

      <Routes>
        <Route path='/items/electronics' element={<Electronics />} />
        <Route path='/items/furniture' element={<Furniture />} />
        <Route path='/items/expensive' element={<Expensive />} />
      </Routes>


    </div>
  )
}

export default App