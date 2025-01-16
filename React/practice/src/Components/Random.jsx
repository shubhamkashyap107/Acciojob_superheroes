import React, { useEffect, useState } from 'react'

const Random = () => {

  const products = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99, inStock: true, rating: 4.5 },
    { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 49.99, inStock: false, rating: 4.2 },
    { id: 3, name: "Office Chair", category: "Furniture", price: 129.99, inStock: true, rating: 4.7 },
    { id: 4, name: "Running Shoes", category: "Footwear", price: 75.0, inStock: true, rating: 4.8 },
    { id: 5, name: "Notebook", category: "Stationery", price: 2.99, inStock: true, rating: 4.0 },
    { id: 6, name: "Smartphone", category: "Electronics", price: 699.0, inStock: false, rating: 4.6 },
    { id: 7, name: "Desk Lamp", category: "Lighting", price: 19.99, inStock: true, rating: 4.3 },
    { id: 8, name: "Backpack", category: "Accessories", price: 34.99, inStock: true, rating: 4.7 },
    { id: 9, name: "Electric Kettle", category: "Appliances", price: 29.99, inStock: true, rating: 4.4 },
    { id: 10, name: "Yoga Mat", category: "Fitness", price: 20.0, inStock: true, rating: 4.8 },
    { id: 11, name: "Gaming Keyboard", category: "Electronics", price: 89.99, inStock: false, rating: 4.5 },
    { id: 12, name: "Wall Clock", category: "Decor", price: 14.99, inStock: true, rating: 4.2 },
    { id: 13, name: "Cookware Set", category: "Kitchen", price: 99.99, inStock: true, rating: 4.7 },
    { id: 14, name: "Wireless Earbuds", category: "Electronics", price: 59.99, inStock: true, rating: 4.6 },
    { id: 15, name: "Travel Mug", category: "Kitchen", price: 12.99, inStock: true, rating: 4.3 },
    { id: 16, name: "Electric Drill", category: "Tools", price: 89.99, inStock: false, rating: 4.4 },
    { id: 17, name: "Sleeping Bag", category: "Outdoors", price: 49.99, inStock: true, rating: 4.7 },
    { id: 18, name: "Hair Dryer", category: "Appliances", price: 39.99, inStock: true, rating: 4.5 },
    { id: 19, name: "Basketball", category: "Sports", price: 25.0, inStock: true, rating: 4.6 },
    { id: 20, name: "Sunglasses", category: "Accessories", price: 15.99, inStock: true, rating: 4.3 },
  ];

  const[displayData, setDisplayData] = useState(products)
  
   useEffect(() => {
      console.log("Random comp mounted")
  
      return () => {
        console.log("Random comp unmounted")
      }
  
    }, [])
  return (
    <div>
      <input type="text" onChange={(e) => {
        let filteredArray = products.filter((item) => {
          return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setDisplayData(filteredArray)
      }} />
      <div>
        {displayData.map((item) => {
          return(
            <div className=''>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Random