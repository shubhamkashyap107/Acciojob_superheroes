import React, { useState } from 'react'

const Sidebar = () => {

    const[toggleSidebar, setToggleSidebar] = useState(true)
    console.log(toggleSidebar)

  return (
    <div>
        <button onClick={() => {
            setToggleSidebar(!toggleSidebar)
        }}>📝</button>
        {/* <div className={`h-[100vh] bg-red-200 ${toggleSidebar ? "w-[5%]" : "w-[20%]"}` }> */}
        <div className={"h-[100vh] bg-red-200 "  + (toggleSidebar ? "w-[5%]" : "w-[20%]") }>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        <div className='border p-4'><span>🏡</span><span className={`ml-4 ${toggleSidebar ? "hidden" : ""}`}>Home</span></div>
        </div>
    </div>
  )
}

export default Sidebar