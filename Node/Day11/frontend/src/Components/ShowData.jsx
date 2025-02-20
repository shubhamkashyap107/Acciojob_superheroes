import React from 'react'

const ShowData = ({data, uiUpdater}) => {
  return (
    <div>
        {data && data.map((item) => {
            // console.log(item)
            const{name, category, price, stock, title, year, genre, director, rating, email, age, role, id} = item
            // console.log(name, rating, role)
            return (
                <div>
                    {category ? (<div>
                        <h2>{name}</h2>
                        <p>{category}</p>
                        <p>{price}</p>
                        <p>{stock}</p>
                        <button>Delete</button>
                    </div>) : ""}
                    {genre ? (<div>
                        <h2>{title}</h2>
                        <p>{genre}</p>
                        <p>{director}</p>
                        <p>{year}</p>
                        <p>{rating}</p>
                        <button onClick={() => {
                            async function deleteObj()
                            {
                                let res = await fetch(`http://localhost:8080/movies/${id}`, {
                                    method : "DELETE"
                                })

                                let data = await res.json()
                                uiUpdater(data)
                            }
                            deleteObj()
                        }}>Delete</button>

                    </div>) : ""}
                    {role ? (<div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>{age}</p>
                        <p>{role}</p>
                        <button>Delete</button>

                    </div>) : ""}
                </div>
            )
        })}
    </div>
  )
}

export default ShowData