import React, { useState } from 'react'
import MenuCard from './MenuCard'

const SubMenu = ({title, items}) => {

    // console.log(items)
    const[showMenu, setShowMenu] = useState(false)
    
  return (
    <div className=" p-4" >
        <div onClick={() => {
        setShowMenu(!showMenu)
    }} className='flex justify-between'>
            <div  className='font-bold'>{title}</div>
            <i className={"fa-solid  " + (showMenu ? "fa-caret-up" : "fa-caret-down")}></i>
        </div>
        {showMenu && <div>
            {items.itemCards && items.itemCards.map((item) => {
                console.log(item)
                return <MenuCard name={item.card.info.name} price={item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100} desc={item.card.info.description} img={item.card.info.imageId} isVeg={item.card.info.itemAttribute.vegClassifier} />
                
            })}

            {
                items.categories && items.categories.map((item) => {
                    return (

                        <>
                        <p>{item.title}</p>
                        <div>
                        {items.itemCards && items.itemCards.map((item) => {
                            return <p>{item.card.info.name}</p>
                        })}
                        </div>
                        </>
                        
                    )
                })
            }
        </div>}

     
    </div>
  )
}

export default SubMenu