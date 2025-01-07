import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Card from './Card'

const CarouselRestaurants = () => {

    const{id} = useParams()
    const[data, setData] = useState([])
    const[details, setDetails] = useState({})

    useEffect(() => {
        async function gd()
        {
            const res = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&collection=${id}&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
            const data = await res.json()
            setData(data.data.cards.slice(3))
            // console.log(data.data.cards.slice(3))
            setDetails(data.data.cards[0].card.card)
        }
        gd()

    }, [])

  return (
    <div>
        <Navbar />
        <div className='p-4 border mb-6 w-fit mx-[30px]'>
            <h1 className='text-[42px] font-bold'>{details.title}</h1>
            <p>{details.description}</p>
        </div>

        <div className='grid grid-cols-4'>
            {data && data.map((item) => {
                let obj = item.card.card.info
                console.log(obj)
                return <Card area={obj.areaName} cuisines={obj.cuisines} id={obj.id} img={obj.cloudinaryImageId} c={"tr"} name={obj.name} time={obj.sla.deliveryTime} rating={obj.avgRating} />
            })}
        </div>
    </div>
  )
}

export default CarouselRestaurants