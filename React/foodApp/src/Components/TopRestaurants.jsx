import React from 'react'
import Card from './Card'

const TopRestaurants = ({data}) => {
   console.log(data)
  return (
    <div className='mx-auto w-[80vw] h-fit' >
      <h2>Top restaurant chains in Delhi</h2>
    <div style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none", 
    }} className='flex overflow-scroll'>
        {data && data.map((item) => {
          return <Card time={item.info.sla.slaString} area={item.info.areaName} name={item.info.name} rating={item.info.avgRating} img={item.info.cloudinaryImageId} cuisines={item.info.cuisines} />
        })}
    </div>
    
    </div>
  )
}

export default TopRestaurants