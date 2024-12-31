import React from 'react'
import logo from "../assets/logo.png"

const Landing = () => {
  return (
    <div className='bg-[#ff5200] h-[100vh]'>
       
        <div className='flex justify-between py-12 px-20'>
            <img src={logo} alt="" className='h-[48px]' />


            <div className='flex text-white items-center gap-6'>
                <p>Swiggy Corporate</p>
                <p>Partner with us</p>
                <button className='text-white border px-8 py-4 rounded-lg'>
                    Get the App<i className="fa-solid fa-arrow-right fa-rotate-by mx-2" >
                        </i></button>
                <button className='bg-black rounded-lg text-white px-8 py-4'>Sign In</button>
            </div>
        </div>

    </div>
  )
}

export default Landing