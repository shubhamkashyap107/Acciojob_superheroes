import React, { useState } from 'react'

const Exercise1 = () => {
  
  const[val, setVal] = useState("")
  const[displayVar, setDisplayVar] = useState("")
  
    return (
    <div>
        <input type="text" value={val} onChange={(e) => {
            setVal(e.target.value)
        }} />

        <button onClick={() => {
            setDisplayVar(val)
        }}>Click me</button>

     
        <h1>{displayVar}</h1>
    </div>
  )
}

export default Exercise1