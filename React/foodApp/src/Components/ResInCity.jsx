import React from 'react'
import Card from './Card'

const ResInCity = ({data}) => {

  return (
    <div className='w-[80vw] mx-auto'>
        <h2 className='font-bold text-2xl'>Restaurants with online food delivery in Delhi</h2>

        <div className='grid  grid-cols-4 mt-5'>
            {data && data.map((item) => {
              return <Card id={item.info.id} c="ric" time={item.info.sla.slaString} area={item.info.areaName} name={item.info.name} rating={item.info.avgRating} img={item.info.cloudinaryImageId} cuisines={item.info.cuisines} />
            })}
        </div>
    
    </div>
  )
}

export default ResInCity