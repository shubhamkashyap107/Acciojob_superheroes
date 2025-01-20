import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../utils/ProductsSlice'

const Products = () => {

  const[name, setName] = useState("")
  const[price, setPrice] = useState("")
  const d = useDispatch()

  return (
    <div>
      <div>
        <input onChange={(e) => {
          setName(e.target.value)
        }} type="text" placeholder='name' />
        <input onChange={(e) => {
          setPrice(e.target.value)
        }} type="number" placeholder='price' />
        <button onClick={() => {
          d(addProducts({name, price}))
        }}>Add Product</button>
      </div>
    </div>
  )
}

export default Products