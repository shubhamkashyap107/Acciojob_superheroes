import React, { useEffect, useState } from 'react'
import Child from './Child'

const Middle = React.memo(() => {
    const[count, setCount] = useState(0)

        useEffect(() => {
            console.log("Middle la use effect fired")
        })
  
    return (
      <div>
          <h3>{count}</h3>
          <button onClick={() => {
              setCount(count + 1)
          }}>Increment Middle</button>


          <Child />
      </div>
    )
})

export default Middle