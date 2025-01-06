import React from 'react'
import { Cloudinary_URL } from '../Utils/Constants'

const MenuCard = ({img, name, price, desc, isVeg}) => {
  return (
    <div className='flex h-[200px] p-4 justify-between'>
        <div className='flex flex-col justify-center'>
            <img className='h-[20px] w-[20px]' src={isVeg == "VEG" ? "https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"} alt="" />
            <h1>{name}</h1>
            <h2>₹{price}</h2>
            <p className='text-gray-400'>{desc.length > 170 ? desc.slice(0, 170) + "..." : desc}</p>
        </div>
        <img className='rounded-lg' src={Cloudinary_URL + img} alt="" />
    </div>
  )
}

export default MenuCard

