
import { useNavigate } from 'react-router-dom'
import {  Cloudinary_URL } from '../Utils/Constants'


const Carousel = ({data}) => {

  const nav = useNavigate()
    

  return (
    <>
    <h2 className='text-[24px] font-bold ml-40'>What's on your mind?</h2>
    <div  style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none", 
    }} className='flex overflow-scroll w-[80vw] mx-auto'>
        {data && data.map((item) => {
          let str = item.action.link.slice(35).split("?")
          // console.log(str[0])
            return <img onClick={() => {
              nav(`/carrestaurants/${str[0]}`)
            }} className='h-[288px] w-[360px]' src={Cloudinary_URL + item.imageId} />
        })}
    </div>
    </>
  )
}

export default Carousel