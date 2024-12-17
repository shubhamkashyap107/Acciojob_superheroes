import { useState } from "react"

const Counter = () => {
    // let count = 0
    let[count, setCount] = useState(0)

  return (
    <div>
        <div>{count}</div>

        <button onClick={() => {
            // count++
            setCount(count + 1)
        }}>Increment</button>

        <button onClick={() => {
            // count = 0
            setCount(0)
        }}>Reset</button>

        <button onClick={() => {
            // count--
            if(count == 0)
            {
                return 
            }
            setCount(count - 1)
        }}>Decrement</button>
    </div>
  )
}

export default Counter