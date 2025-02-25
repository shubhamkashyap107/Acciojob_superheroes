import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import New from './Components/New'
import EditForm from './Components/EditForm'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<EditForm />} />
      </Routes>

    </div>
  )
}

export default App