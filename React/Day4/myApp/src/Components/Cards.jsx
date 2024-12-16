import React from 'react'


export const a = 10

export function Abc()
{
    return <h1>ABC</h1>
}


// const Cards = (props) => {
export const Cards = ({name, image}) => {

    // const{name, image} = props

  return (
    <div style={{border : "1px solid black", width : "200px", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center", height : "250px"}}>
        <img style={{borderRadius : "50%", width :"150px", height : "150px", margin :"auto"}} src={image} alt="" />

        <h3>{name}</h3>
    </div>
  )
}

// export default Cards
// export default Abc




