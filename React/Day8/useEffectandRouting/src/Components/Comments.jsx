import React, { useEffect, useState } from 'react'


const Comments = () => {
     const[data, setData] = useState([])
    
        useEffect(() => {

            const ID = setInterval(() => {
                console.log("POPUP")
            }, 2000)

            async function getData()
            {
                let res = await fetch("https://dummyjson.com/comments")
                let data = await res.json()
                console.log(data)
                setData(data.comments)
            }
    
            getData()



            return () => {
                clearInterval(ID)
            }
        }, [])
  return (
    <div className='grid grid-cols-4'>
        {data && data.map((item) => {
            return (
                <div className='border w-[300px] p-4 rounded-lg m-2'>
                    <p>{item.body}</p>
                    <h3>{item.user.fullName}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default Comments