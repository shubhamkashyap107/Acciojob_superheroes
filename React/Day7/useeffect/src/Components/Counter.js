import React, { useEffect, useState } from 'react'

const Counter = () => {

    const[count, setCount] = useState(0)
    const[count2, setCount2] = useState(0)
    useEffect(() => {
        console.log("Use effect fired")
    }, [count])

  return (
    <div>
        <div>{count}</div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment Count 1</button>
        <button onClick={() => {
            setCount2(count2 + 1)
        }}>Increment Count 2
        </button>
    </div>
  )
}

export default Counter