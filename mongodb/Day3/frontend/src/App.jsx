// import React from 'react'
// import C from './Components/C'
// import { createContext } from 'react'

// export const userContext = createContext()

// const App = () => {

//   let userData = {status : "USer logged in"}



//   return (
//     <userContext.Provider value={userData}>

//     <div>
//       {/* <C userData={userData} /> */}
//       <C  />
//     </div>

//     </userContext.Provider>
//   )
// }

// export default App
import React, { useContext } from 'react'
import { useGLobal, userKaContext } from './Components/Global'

const App = () => {

  // const obj = useContext(userKaContext)
  // const {status} = useContext(userKaContext)

  const{status} = useGLobal()

  return (
    <>
    {/* <div>{obj.status}</div> */}
    <div>{status}</div>
    </>
  )
}

export default App