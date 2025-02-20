import React, { useEffect, useState } from 'react'
import ShowData from './ShowData'

const Users = () => {

    const[data, setData] = useState([])
  
    useEffect(() => {
      async function getData() {
        const res = await fetch("http://localhost:8080/users")
        const data = await res.json()
        setData(data)
      }
      getData()
    }, [])
  return (
    <div>
      <div>
        <ShowData data={data} />
      </div>
      <div></div>
    </div>
  )
}

export default Users