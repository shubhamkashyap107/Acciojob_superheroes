import React, { useEffect, useState } from 'react'
import Parent from './Parent'

const Child = React.memo(() => {

    const[count, setCount] = useState(0)

        useEffect(() => {
            console.log("Child la use effect fired")
        })

  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment Child</button>
        {/* <Parent /> */}
    </div>
  )
})

export default Child