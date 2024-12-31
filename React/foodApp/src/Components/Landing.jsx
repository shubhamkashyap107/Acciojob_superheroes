import React from 'react'
import logo from "../assets/logo.png"
import veggie from "../assets/veggie.avif"
import sushi from "../assets/sushi.avif"

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



        <div className='flex relative'>
            <img className='absolute left-0 h-[450px] w-[250px]' src={veggie} alt="" />
            <div className='border h-[100%] border-black w-[70%] mx-auto items-center gap-10 flex flex-col'>
                <h1 className='text-[48px] text-white text-center'>Order food & groceries. Discover <br/> best restaurants. Swiggy it!</h1>
                <div className='w-[50%] relative' >
                    <input className='w-[100%] h-[56px] rounded-lg p-4' type="text"  placeholder='Search for restaurant, item or more'/>
                    <i class="fa-solid fa-magnifying-glass text-black absolute top-5 right-5" ></i>
                </div>
            </div>
            <img className='absolute right-0 h-[450px] w-[250px]' src={sushi} alt="" />
        </div>
    </div>
  )
}

export default Landing