// import React from 'react'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import About from './Components/About'
// import Parent from './Components/Parent'

// const App = () => {

//   const navigate = useNavigate()

//   return (
//     <div>
//       {/* <Counter name={"qwerty"} /> */}
//       {/* <Example /> */}
//       {/* <Momos /> */}
//       {/* <Navigation /> */}

//       {/* <button onClick={() => {
//             navigate("/about")
//         }}>Go to some page</button>

//       <Routes>
//         <Route path='/about' element={<About />} />
//       </Routes> */}


//         <Parent />


//     </div>
//   )
// }

// export default App



import React from 'react'
// import Test from './Components/Test'

import {Test, TestAgain} from "./Components/Test"
import SaysHi from './Components/SaysHi'

const App = () => {
  return (
    <div>
      <Test />
      <TestAgain />
      <TestThree />

      <SaysHi name="Shubham" age={32} />
      <SaysHi name="Kashyap" age={32} />
      <SaysHi name="Gabbar" age={32} />
      <SaysHi name="Daku" age={32} />
      {SaysHi({name : "Hehe", age : 65})}
    </div>
  )
}

export default App


function TestThree()
{
  return (
    <div>Test 3</div>
  )
}

