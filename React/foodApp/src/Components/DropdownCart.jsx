import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DropdownCart = ({setShowDropdown, showDropdown, id}) => {

  const navigate = useNavigate()

  const cartData = useSelector((store) => {
    return store.cart
  })

  let total = 0

  for(let item of cartData)
  {
    total += item.quantity * item.price
  }

  return cartData.length > 0 ?  (

    <div
    onMouseLeave={() => {
      setShowDropdown(false)
    }}
     onMouseEnter={() => {
      clearTimeout(id)
      setShowDropdown(true)
    }} className='h-fit w-[280px] absolute bg-white right-2 z-50 p-2 border-t border-orange-700 shadow-lg'>
      {cartData.map((item) => {
        return <div className='flex text-xs items-center p-2 justify-between'>
            <img className='h-[10px] w-[10px]' src={item.isVeg == "VEG" ? "https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"} alt="" />
            <p>{item.name.length > 20 ? item.name.slice(0,20) + "..." : item.name} X {item.quantity}</p>
            <p className='text-gray-400'>₹{item.price * item.quantity}</p>
        </div>
      })}
        <hr />
      <div className='flex justify-between mt-2'>
        <div>
        <h3>Sub Total</h3>
        <p className='text-gray-400 text-xs'>Extra charges may apply</p>
        
        </div>
        <p className='text-sm'>
        ₹{total}
        </p>
      </div>
      <hr className='mt-2' />
      <button onClick={() => {
        navigate("/checkout")
      }} className='text-white w-[100%] mt-2 p-2  bg-[#ff5200]'>Checkout</button>
    </div>
  ) : ( <div
    onMouseLeave={() => {
      setShowDropdown(false)
    }}
     onMouseEnter={() => {
      clearTimeout(id)
      setShowDropdown(true)
    }} className='h-fit w-[280px] absolute bg-white right-2 z-50 p-4   shadow-lg'>
      
       Cart is Empty
     
     
    </div>)
}

export default DropdownCart