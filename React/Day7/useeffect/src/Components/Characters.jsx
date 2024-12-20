import React, { useEffect, useState } from 'react'

const Characters = () => {

  const[apiData, setApiData] = useState()
  let api = "https://hp-api.onrender.com/api/characters"

  useEffect(() => {
    // fetch(api)
    // .then((res) => {
    //   return res.json()
    // })
    // .then((data) => {
    //   console.log(data)
    // })

    async function getData()
    {
      let res = await fetch(api)
      let data = await res.json()
      console.log(data)
      setApiData(data)
    }

    getData()
    
  },[])

  return (
    <div className='testing' style={{display : "grid", gridTemplateColumns : "1fr 1fr 1fr"}}>

      {apiData && apiData.map((item) => {
        return (<div key={item.id} style={{border : "1px solid black", width : "300px"}}>
          <img style={{width : "75%"}} src={item.image ? item.image : "https://ik.imagekit.io/hpapi/harry.jpg"} alt="" />
          <h3>{item.name}</h3>
        </div>
        )
      })}
{/* 
      {apiData ? (apiData.map((item) => {
        console.log(item)
      })) : ""} */}
    </div>
  )
}

export default Characters