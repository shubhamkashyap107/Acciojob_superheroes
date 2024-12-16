import React from 'react'

const Input = ({p, t = "text"}) => {



  return (
    <input type={t} placeholder={p}  onChange={(e) => {
        console.log(e.target.value)
    }} />
  )
}

export default Input