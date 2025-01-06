import React from 'react'
import Card from './Card'

const TopRestaurants = ({data}) => {
  return (
    <div className='mx-auto w-[80vw] h-fit' >
      <h2 className='font-bold text-2xl'>Top restaurant chains in Delhi</h2>
    <div style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none", 
    }} className='mt-5 flex overflow-scroll'>
        {data && data.map((item) => {
          // console.log(item)
          return <Card id={item.info.id} c="tr" time={item.info.sla.slaString} area={item.info.areaName} name={item.info.name} rating={item.info.avgRating} img={item.info.cloudinaryImageId} cuisines={item.info.cuisines} />
        })}
    </div>
    
    </div>
  )
}

export default TopRestaurants