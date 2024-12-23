import React, { useEffect, useState } from 'react'

const Todos = () => {

    const[data, setData] = useState([])

    useEffect(() => {
        async function getData()
        {
            let res = await fetch("https://jsonplaceholder.typicode.com/todos")
            let data = await res.json()
            setData(data)
        }
        getData()
    }, [])

  return (
    <ul>
        {
            data && data.map((item) => {
                return <li>{item.title}</li>
            })
        }
    </ul>
  )
}

export default Todos