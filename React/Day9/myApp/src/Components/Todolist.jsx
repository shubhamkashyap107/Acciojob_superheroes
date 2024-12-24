import React, { useState } from 'react';

const Todolist = () => {

   const [tasks, setTasks] = useState([]);
   const [val, setVal] = useState("");
   const [val2, setVal2] = useState("");

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 mt-20">
            <input 
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="text"  
                placeholder="Enter task title"
                onChange={(e) => setVal(e.target.value)}
                value={val}
            />

            <textarea 
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter task description"
                onChange={(e) => setVal2(e.target.value)}
                value={val2}
            ></textarea>

            <button 
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors" 
                onClick={() => {
                    let newTask = {
                        title: val,
                        desc: val2
                    };

                    // setTasks(newTask)

                    // let arr = []
                    // arr.push(newTask)
                    // setTasks(arr)

                    setTasks([...tasks, newTask]);
                    setVal("")
                    setVal2("")
                }}
            >
                Add Task
            </button>
        </div>

        <div className="mt-6 w-1/2">
            {tasks && tasks.map((item, index) => {
                return (
                    <div key={index} className="p-4 mb-4 bg-gray-200 rounded-lg shadow">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-gray-700">{item.desc}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Todolist;
