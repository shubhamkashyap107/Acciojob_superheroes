import React from 'react'

// const SaysHi = (obj) => {
const SaysHi = ({name, age}) => {

    // console.log(obj)
    // console.log(obj.name)
    // const{name, age} = obj 

    // let name = "Shubham"

  return (
    <div>
        <h1>Hello , welcome {name} whose age is {age}</h1>
    </div>
  )
}

export default SaysHi