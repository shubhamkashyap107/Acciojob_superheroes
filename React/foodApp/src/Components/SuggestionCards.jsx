import React from 'react'
import { Cloudinary_URL } from '../Utils/Constants'


const SuggestionCards = ({name, img, type}) => {
  return (
    <div className='flex gap-3 items-center m-2'>
        
        <img className='h-[100px] w-[100px] rounded-lg' src={Cloudinary_URL + img} alt="" />

        <div>
            <p>{name}</p>
            <p className='text-gray-500'>{type}</p>
        </div>

    </div>
  )
}

export default SuggestionCards