import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../Utils/TodosSlice'

const Todo = () => {

    
    const dispatch = useDispatch()

    const sliceData = useSelector((s) => {
        return s.Todos
    })

    // console.log(sliceData)
    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")


  return (
    <div className=' flex'>
        <div className="space-y-4 w-[50%] p-10">
            <input
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
                type="text"
                placeholder="Enter task title"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
            value={desc}
            onChange={(e) => {
                setDesc(e.target.value)
            }}
                placeholder="Enter task description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
            ></textarea>
            <button onClick={() => {
                dispatch(addTodo({title : title, desc : desc}))
                setTitle("")
                setDesc("")
            }} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Add Task
            </button>
        </div>
        <div className='w-[50%] mt-2'>
            {sliceData && sliceData.map((item) => {
                return (
                    <div className='border w-[100%] flex justify-between'>
                        <div>

                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        </div>

                        <button onClick={() => {
                            dispatch(deleteTodo({title : item.title}))
                        }} className='border bg-red-400'>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo