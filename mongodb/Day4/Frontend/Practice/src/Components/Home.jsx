import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate()
    const [userData, setUserData] = useState([]);
    console.log(userData);

    useEffect(() => {
        async function getData() {
            const res = await fetch("http://localhost:8080/users");
            const json = await res.json();
            setUserData(json);
        }
        getData();
    }, []);

    if(userData.length == 0)
    {
        return <h1>No users found</h1>
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>
            <div className="w-full max-w-3xl space-y-4">
                {userData && userData.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                            <p className="text-gray-600">Age: {item.age}</p>
                            <p className="text-gray-500">Password: {item.password}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button onClick={() => {
                                nav(`/edit/${item.id}`)
                            }} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Edit</button>
                            <button onClick={() => {
                                fetch(`http://localhost:8080/users/${item.id}`, {
                                    method : "DELETE",
                                })
                                .then((res) => {
                                    return res.json()
                                })
                                .then((data) => {
                                    setUserData(data)
                                })
                            }} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;