import React, { useEffect, useState } from 'react'

const Electronics = () => {

  const[data, setData] = useState([])

  useEffect(() => {
    async function getData()
    {
      let res = await fetch("http://localhost:8080/items/electronics")
      let data = await res.json()
      console.log(data)
      setData(data)
    }
    getData()
  }, [])

  return (
    <div>
      {data && data.map((items) => {
        return (
          <div style={{display : "flex", alignItems : "center", border : "1px solid black", justifyContent : "space-between", width : "400px"}}>
            <h1>{items.name}</h1>
            <p>{items.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Electronics