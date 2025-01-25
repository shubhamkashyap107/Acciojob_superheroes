import React from 'react'
import Todo from './Components/Todo'
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/todolist" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App