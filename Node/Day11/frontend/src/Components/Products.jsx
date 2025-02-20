import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'

const Products = () => {

  const[data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/products")
      const data = await res.json()
      setData(data)
    }
    getData()
  }, [])

  return (
    <div>
      <ShowData data={data} />
      <div></div>
    </div>
  )
}

export default Products