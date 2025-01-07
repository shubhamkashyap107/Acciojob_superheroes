import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SuggestionCards from './SuggestionCards'


const Search = () => {

    const[query, setQuery] = useState("") 
    const[suggestions, setSuggestions] = useState([])

    useEffect(() => {
        async function getData()
        {
            const res = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.65200&lng=77.16630&str=${query}&trackingId=null&includeIMItem=true`)
            const data = await res.json()
            setSuggestions(data.data.suggestions)
            console.log(data.data.suggestions)
        }

        getData()
    }, [query])

  return (
    <div>
        <Navbar />
        
        <div className='w-8/12 mx-auto'>

        <div className=' relative mx-auto' >
            <input onChange={(e) => {
                if(e.target.value == "")
                {
                    setSuggestions([])
                }
                setQuery(e.target.value)
            }} className='w-[100%] border  h-[56px] rounded-lg p-4' type="text"  placeholder='Search for restaurant, item or more'/>
            <i class="fa-solid fa-magnifying-glass text-black absolute top-5 right-5" ></i>
        </div>
        
        {suggestions && <div className='border'>
            {suggestions.map((item) => {
                return <SuggestionCards name={item.text} type={item.type} img={item.cloudinaryId} />
            })}
            </div>}
        
        </div>

    </div>
  )
}

export default Search