import React from 'react'
import { Cloudinary_URL } from '../Utils/Constants'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../Utils/CartSlice'
import { useDispatch } from 'react-redux'

const FinalCard = ({name, img, price, resName, resId, rating, isVeg}) => {
    
    const dispatch = useDispatch()

    const nav = useNavigate()

    if(rating== undefined || name == undefined|| img == undefined || resName == undefined || resId == undefined )
    {
        return
    }

  return (
    <div className='border rounded-3xl p-4 w-[400px] mt-4'>
        <div className='flex  justify-between cursor-pointer ' onClick={() => {
            nav(`/menu/${resId}`)
        }}>
            <div>

            <h3>By {resName}</h3>
            <p><i class="fa-solid fa-star"></i> {rating}</p>
            
            </div>

            <i class="fa-solid fa-caret-down fa-rotate-270"></i>

        </div>
        <div className='flex items-center  justify-between '>
            <div className=' h-fit ml-4'>
            <h1>{name}</h1>
            <p className='mt-3'>₹{price}</p>
            </div>

            <div>

            <img className='h-[150px] w-[150px] rounded-xl' src={Cloudinary_URL + img} alt="" />
            <button onClick={() => {
                        dispatch(addToCart({name, price, isVeg, img}))
                      }}  className='border bg-white rounded-lg relative bottom-10 left-9 text-green-500 px-5 py-2'>ADD</button>
            

            </div>
        </div>

    </div>
  )
}

export default FinalCard