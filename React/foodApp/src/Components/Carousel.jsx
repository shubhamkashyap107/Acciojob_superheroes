import React, { useEffect, useState } from 'react'
import { API, Cloudinary_URL } from '../Utils/Constants'


const Carousel = () => {

    const[data, setData] = useState([])
   
    useEffect(() => {
        async function getData()
        {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data.data.cards[0].card.card.imageGridCards.info)
            setData(data.data.cards[0].card.card.imageGridCards.info)
        }

        getData()
    }, [])
    

  return (
    <div  style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none", 
    }} className='flex overflow-scroll w-[100vw]'>
        {data && data.map((item) => {
            return <img src={Cloudinary_URL + item.imageId} />
        })}
    </div>
  )
}

export default Carousel