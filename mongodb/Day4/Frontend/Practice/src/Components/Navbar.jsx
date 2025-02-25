import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='bg-black text-white p-4 flex justify-end gap-3'>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
    </div>
  )
}

export default Navbar