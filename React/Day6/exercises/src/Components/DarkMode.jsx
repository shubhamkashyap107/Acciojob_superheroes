import React, { useState } from 'react'

const DarkMode = () => {

    const[darkMode, setDM] = useState(false)
    // console.log(darkMode)

  return (
    <div style={darkMode == true ? {backgroundColor : "white"} : {backgroundColor : "black"}} >
        <button onClick={() => {
            setDM(true)
        }}>Light Mode</button>
        <button onClick={() => {
            setDM(false)
        }}>Dark Mode</button>
        <p style={darkMode ? {color : "black"} : {color : "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat dolore voluptatibus maxime fugit! Quo veritatis velit voluptatum placeat! A adipisci laboriosam ex nostrum commodi optio blanditiis. Vero, adipisci ipsam!</p>
    </div>
  )
}

export default DarkMode