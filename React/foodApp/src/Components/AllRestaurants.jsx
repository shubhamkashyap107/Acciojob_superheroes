import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import TopRestaurants from './TopRestaurants'
import { API } from '../Utils/Constants'

const AllRestaurants = () => {
    const[data, setData] = useState([])
    const[data2, setData2] = useState([])

     
      useEffect(() => {
          async function getData()
          {
              const res = await fetch(API)
              const data = await res.json()
              console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
              setData(data.data.cards[0].card.card.imageGridCards.info)
              setData2(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
          }
  
          getData()
      }, [])
  return (
    <div>
      <Navbar />
      <Carousel data={data} />
      <hr className='w-[80vw] mx-auto mt-5' />
      <TopRestaurants data={data2} />
    </div>
  )
}

export default AllRestaurants