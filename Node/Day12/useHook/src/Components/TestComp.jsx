// import React, { use, useEffect } from 'react'

// const TestComp = () => {

//     async function getData() {
//         let res = await fetch("https://hp-api.onrender.com/api/characters")
//         // let data = await res.json()
//         return res.json()
//         // console.log(data)
//     }

//     const data = use(getData())
//     console.log(data)


//     // useEffect(() => {
//     //     async function getData() {
//     //         let res = await fetch("https://hp-api.onrender.com/api/characters")
//     //         let data = await res.json()
//     //         console.log(data)
//     //     }
//     //     getData()
//     // }, [])

//   return (
//     <div>
//         {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolores cupiditate accusantium, quo perspiciatis fugiat veritatis incidunt reprehenderit quisquam velit nisi, cumque, animi asperiores. Ea voluptatum placeat porro cum commodi? */}

//         {data.map((item) => {
//             return <h2>{item.actor}</h2>
//         })}

//     </div>
//   )
// }

// export default TestComp


import React from 'react'

const TestComp = () => {
  return (
    <div>TestComp</div>
  )
}

export default TestComp