import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Search from './Components/Search'

const App = () => {

    const[isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Search isDarkMode={isDarkMode} />
    </div>
  )
}

export default App