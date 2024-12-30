import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white flex justify-between p-4'>
        <h3>LOGO</h3>

        <div className='flex gap-5'>
            <button>☀️</button>
            <button>🌙</button>
        </div>
    </div>
  )
}

export default Navbar