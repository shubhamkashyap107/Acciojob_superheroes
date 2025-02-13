import React, { useState } from 'react'
const Todo = () => {
    const[taskData,setTaskData] = useState("")
    const[descriptionData,setDescriptionData] = useState("")
    const[data, setData] = useState([])
  return (
<div className='flex'>

    <div className=" w-[50%] flex flex-col items-center mx-auto p-6 gap-4 bg-gray-100 shadow-lg rounded-lg">
      <input
      value={taskData}
        type="text"
        placeholder="Task Title"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>{setTaskData(e.target.value)
            // console.log(e.target.value);
            
        }} />
      <textarea
      value={descriptionData}
      onChange={(e) => {
        setDescriptionData(e.target.value)
      }}
        name="Details"
        placeholder="Task Details"
        className="w-full p-2 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button onClick={() => {

        if(taskData == "" || descriptionData == "")
        {
          return
        }

        async function addData()
        {
          const res = await fetch("http://localhost:8080/addtaskdata", {
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify({
              taskData, descriptionData
            })
          })
          let data = await res.json()
          console.log(data)
          setData(data)
          setTaskData("")
          setDescriptionData("")

        }

        addData()


      }} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Send
      </button>
    </div>

    <div className="w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
  {data &&
    data.map((item, index) => 
    {
      console.log(item)
      return       <div
      key={index}
      className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-800">{item.taskData}</h2>
      <p className="text-gray-600">{item.descriptionData}</p>
      <button onClick={() => {
        async function deletetask() {
          let res = await fetch(`http://localhost:8080/delete/${item.ID}`, {
            method : "DELETE"
          })
          let data = await res.json()
          setData(data)
        }
        deletetask()
      }} className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Delete
      </button>
    </div>
    })}
</div>


</div>

  )
}
export default Todo