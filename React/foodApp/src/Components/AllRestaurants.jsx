import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import TopRestaurants from './TopRestaurants'
import { API } from '../Utils/Constants'

const AllRestaurants = () => {
    const [apiData, setApiData] = useState()

     
      useEffect(() => {
          async function getData()
          {
              const res = await fetch(API)
              const data = await res.json()
              setApiData(data)
              console.log(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            
          }
  
          getData()
      }, [])
  return (
    <div>
      <Navbar />
      <Carousel data={apiData && apiData.data.cards[0].card.card.imageGridCards.info} />
      {/* <Carousel data={apiData ? apiData.data.cards[0].card.card.imageGridCards.info : []} /> */}
      <hr className='w-[80vw] mx-auto mt-5 mb-10' />
      <TopRestaurants data={apiData ? apiData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants : []} />
    </div>
  )
}

export default AllRestaurants