import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'


const New = () => {

    const nav = useNavigate()

    const [data, setData] = useState({ name: "", age: "", password: "" })
    console.log(data)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-4">Add New User</h2>

                <input 
                    onChange={(e) => setData({ ...data, name: e.target.value })} 
                    type="text" 
                    value={data.name} 
                    placeholder="Name" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    onChange={(e) => setData({ ...data, age: e.target.value })} 
                    type="text" 
                    value={data.age} 
                    placeholder="Age" 
                    className="w-full p-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input 
                    onChange={(e) => setData({ ...data, password: e.target.value })} 
                    type="text" 
                    value={data.password} 
                    placeholder="Password" 
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button onClick={() => {

                    if(data.name == "" || data.age == "" || data.password == "")
                    {
                        return
                    }

                    async function addUser() {
                        const res = await fetch("http://localhost:8080/users", {
                            method : "POST",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify(data)
                        })
                        const json = await res.json()

                        if(json.msg == "true")
                        {
                            nav("/")
                        }
                        
                    }
                    addUser()
                }} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Add User
                </button>
            </div>
        </div>
    )
}

export default New
