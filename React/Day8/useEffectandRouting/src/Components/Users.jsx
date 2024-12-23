import React, { useEffect, useState } from 'react'

const Users = () => {
     const[data, setData] = useState([])
    
        useEffect(() => {
            async function getData()
            {
                let res = await fetch("https://dummyjson.com/users")
                let data = await res.json()
                // console.log(data.users)
                setData(data.users)
            }
    
            getData()
        }, [])
  return (
    <div className='grid grid-cols-6'>
        {
            data && data.map((obj) => {
                return (
                    <div>
                        <img src={obj.image} alt="" />

                        <p>{obj.firstName} {obj.lastName}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users