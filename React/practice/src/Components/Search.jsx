import React, { useEffect, useState } from 'react'

const Search = () => {

  const[btnClicked, setBtnClicked] = useState(1)

  const[query, setQuery] = useState("")
   useEffect(() => {
      console.log("Search comp mounted")
  
      return () => {
        console.log("Search comp unmounted")
      }
  
    }, [])

    useEffect(() => {
      fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.65200&lng=77.16630&str=${query}&trackingId=null&includeIMItem=true`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
    }, [btnClicked])

  return (
    <div>
      <input type="text" onChange={(e) => {
        // console.log(e.target.value)
        setQuery(e.target.value)
      }} />
      <button onClick={() => {
        if(query.length == 0) return
        setBtnClicked(btnClicked + 1)
      }}>Search</button>
    </div>
  )
}

export default Search