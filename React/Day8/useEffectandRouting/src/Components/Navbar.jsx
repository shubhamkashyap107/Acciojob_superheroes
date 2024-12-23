import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black h-[70px] flex justify-between items-center'>
      <Link to={"/home"}>
        <h3 className='text-white mx-3'>Logo</h3>
      </Link>

        <div className='mx-3'>

        {/* <a className='text-white m-2' href="/Home">Home</a>
        <a className='text-white m-2' href="/About">About</a>
        <a className='text-white m-2' href="/Contact">Contact</a> */}
        
          <Link className='text-white m-2' to={"/home"}>Home</Link>
          <Link className='text-white m-2' to={"/about"}>About</Link>
          <Link className='text-white m-2' to={"/contact"}>Contact</Link>


        </div>
    </div>
  )
}

export default Navbar