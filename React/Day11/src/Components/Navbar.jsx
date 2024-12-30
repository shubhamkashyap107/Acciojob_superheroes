import React, { useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    // const[isDarkMode, setIsDarkMode] = useState(false)
    // console.log(isDarkMode)

  return (
    <div className={'flex justify-between p-4 ' + (isDarkMode ? "bg-white text-black" : "bg-black text-white")}>
        <h3>LOGO</h3>

        <div className='flex gap-5'>
            <button onClick={() => {
                setIsDarkMode(false)
            }}>☀️</button>
            <button onClick={() => {
                setIsDarkMode(true)
            }}>🌙</button>
        </div>
    </div>
  )
}

export default Navbar