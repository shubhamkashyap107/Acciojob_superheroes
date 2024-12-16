import React from 'react'

export const Group = () => {
  return (
    <div>
        <button onClick={() => {
            console.log(1)
        }}>1</button>
        <button onClick={() => {
            console.log(2)
        }}>2</button>
        <button onClick={() => {
            console.log(3)
        }}>3</button>
    </div>
  )
}
