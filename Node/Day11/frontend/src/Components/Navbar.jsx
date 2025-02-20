import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to={"/products"} >Products</Link>
        <Link to={"/users"} >Users</Link>
        <Link to={"/movies"} >Movies</Link>
    </div>
  )
}

export default Navbar