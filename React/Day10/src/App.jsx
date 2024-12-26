import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './Components/About'
import Parent from './Components/Parent'

const App = () => {

  const navigate = useNavigate()

  return (
    <div>
      {/* <Counter name={"qwerty"} /> */}
      {/* <Example /> */}
      {/* <Momos /> */}
      {/* <Navigation /> */}

      {/* <button onClick={() => {
            navigate("/about")
        }}>Go to some page</button>

      <Routes>
        <Route path='/about' element={<About />} />
      </Routes> */}


        <Parent />


    </div>
  )
}

export default App