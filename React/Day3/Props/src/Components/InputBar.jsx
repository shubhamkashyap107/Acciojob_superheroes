import React from 'react'

const InputBar = ({type, placeholder}) => {
  return (
    <input className='form-control m-2' type={type} placeholder={placeholder} />
  )
}

export default InputBar