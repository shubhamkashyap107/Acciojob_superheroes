import React, { useState } from 'react'

const Search = () => {


    const[val, setVal] = useState("")
    // console.log(val)
    const[data, setData] = useState([])

  return (
    <div>

        <div className='p-4 flex gap-4'>

        <input value={val} className='border border-black w-4/12 h-[50px] rounded-lg' type="number" onChange={(e) => {
            setVal(e.target.value)
        }} />
        <button onClick={() => {
            async function getData()
            {
                let res = await fetch("https://dog-api.kinduff.com/api/facts?number=" + val)
                let data = await res.json()
                // console.log(data)
                setData(data.facts)
                setVal("")
            }
            getData()
        }}>🔍</button>
        
        </div>

        <div>
            {data && data.map((item) => {
                return <div className='border p-4 m-3'>{item}</div>
            })}
        </div>
    </div>
  )
}

export default Search