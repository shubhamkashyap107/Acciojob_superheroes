import React, {lazy, Suspense} from 'react'
import {Link , Routes, Route} from "react-router-dom"
import Loader from './Components/Loader'
const A = lazy(() => import("./Components/A")) 
const B = lazy(() => import("./Components/B")) 
const C = lazy(() => import("./Components/C")) 
const TestComp = lazy(() => import("./Components/TestComp")) 

const App = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Test</Link>
        <Link to={"/a"}>A</Link>
        <Link to={"/b"}>B</Link>
        <Link to={"/c"}>C</Link>
      </div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<TestComp />} />
            <Route path='/a' element={<A />} />
            <Route path='/b' element={<B />} />
            <Route path='/c' element={<C />} />
          </Routes>
        </Suspense>
    </div>
  )
}

export default App