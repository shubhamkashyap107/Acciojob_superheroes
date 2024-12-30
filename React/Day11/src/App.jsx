import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import CompA from './Components/CompA'


export const exampleContext = createContext()

const App = () => {

    // const[isDarkMode, setIsDarkMode] = useState(false)
    let username = "kitty"
    let highscore = 5600

  return (
    <exampleContext.Provider value={{username, highscore}}>

    <div>
      {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Search isDarkMode={isDarkMode} /> */}


      <CompA  />

    </div>
      </exampleContext.Provider>
  )
}

export default App