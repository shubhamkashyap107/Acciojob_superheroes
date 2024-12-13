
// const Cards = (props) => {
const Cards = ({name, img, d}) => {


    // const{name, img, d} = props

  return (
    <div className='d-flex flex-column align-items-center border m-4 p-3' style={{width : "250px"}}>
       <img style={{width : "50%", borderRadius : "50%"}} src={img} alt="" /> 

       <div>
        <h3>{name}</h3>
        <p>{d}</p>
       </div>
    </div>
  )
}

export default Cards