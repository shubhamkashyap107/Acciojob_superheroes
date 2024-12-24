import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const Products = () => {

    const[data, setData] = useState([])
    const[searchQuery, setSearchQuery] = useState("")
    const[displayData, setDisplayData] = useState([])
    const[showLoader , setShowLoader] = useState(true)

    useEffect(() => {
        async function getData()
        {
            let res = await fetch("https://dummyjson.com/products")
            let d = await res.json()
            console.log(d)
            setData(d.products)
            setDisplayData(d.products)
        }

        getData()
    }, [])


  return (
    <div >


        <input type="text" className='w-6/12 m-2 border' onChange={(e) => {
            // setSearchQuery(e.target.value)


            let filteredData = data.filter((item) => {
                return item.title.toLowerCase().includes(e.target.value.toLowerCase())
            })

            // console.log(filteredData)
            setDisplayData(filteredData)

        }} />


        <div className='grid grid-cols-4'>

        {
            displayData && displayData.map((item) => {
                return (
                    <div className='border p-2 rounded-lg'>

                        {showLoader && <div className='h-[200px] flex items-center justify-center'><Loader /></div>}
                        

                        <img onLoad={() => {
                            setShowLoader(false)
                        }} className='w-[300px]' src={item.thumbnail} alt="" />


                        <h3>{item.title}</h3>
                        <p className='w-[250px]'>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                )
            })
        }

</div>

    </div>
  )
}

export default Products