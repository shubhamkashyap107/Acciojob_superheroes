import React from 'react'

const Button = ({num}) => {
  return (
    <button onClick={() => {
        console.log(num)
    }}>{num}</button>
  )
}

export default Button