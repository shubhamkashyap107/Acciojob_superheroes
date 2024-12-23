import React, { useEffect, useState } from 'react'

const Cats = () => {


    const[data, setData] = useState([])

    useEffect(() => {
        async function getData()
        {
            let res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            let data = await res.json()
            setData(data)
            console.log(data)
        }

        getData()
    }, [])

  return (
    <div>
        {
            data && data.map((obj) => {
                return <img className='w-[250px]' src={obj.url} />
            })
        }
    </div>
  )
}

export default Cats