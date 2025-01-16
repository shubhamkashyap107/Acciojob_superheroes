import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className='bg-blue-400'>
        <h2>LOGO</h2>
        <div>
            <Link to={"/mynumber"}>My Number</Link>
            <Link to={"/search"}>Search</Link>
            <Link to={"/random"}>Random</Link>
            <Link to={"/text"}>Text</Link>
        </div>
    </div>
  )
}

export default Navbar