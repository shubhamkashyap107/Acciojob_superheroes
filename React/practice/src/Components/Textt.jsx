import React, { useEffect, useState } from 'react';

const Textt = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [showUsernameWarning, setShowUsernameWarning] = useState(false);


  useEffect(() => {
    console.log('Text component mounted');

    return () => {
      console.log('Text component unmounted');
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border rounded-lg max-w-sm w-full bg-white shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <div className="flex flex-col gap-4">
          <input
          value={username}
            onChange={(e) => {
              if(e.target.value.length >= 8)
              {
                setShowUsernameWarning(false)
              }
              setUsername(e.target.value)}}
            className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-green-300 outline-none"
            type="text"
            placeholder="Username"
          />
          <p className={'text-red-500 text-xs ml-2 ' + (showUsernameWarning ? "" : "hidden")}>Username should contain atleast 8 letters</p>
          <div className="flex items-center border rounded-lg p-2">
            <input

            value={password}
              onChange={(e) => {
                if(e.target.value.length >= 8)
                {
                  setShowPasswordWarning(false)
                }
                setPassword(e.target.value)}}
              className="w-full outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => {
              setShowPassword(!showPassword)
            }} className="cursor-pointer">👀</span>


          </div>
          <p className={'text-red-500 text-xs ml-2 ' + (showPasswordWarning  ? "" : "hidden")}>Password should contain atleast 8 letters</p>
          <button onClick={() => {

            if(username.length < 8 || password.length < 8)
            {
              if(username.length < 8)
              {
                setShowUsernameWarning(true)
              }

              if(password.length < 8)
                {
                  setShowPasswordWarning(true)
                }

                return
            }
           



            if(localStorage.getItem("Userdata") == null)
            {
                let userObj = {
                  username, password
              }
              let arr = []
              arr.push(userObj)
              localStorage.setItem("Userdata", JSON.stringify(arr))
              setUsername("")
              setPassword("")
            }
            else
            {
              let eArr = localStorage.getItem("Userdata")
              eArr = JSON.parse(eArr)
              // console.log(typeof(eArr))
              let userObj = {
                username, password
              }
              eArr.push(userObj)
              localStorage.setItem("Userdata", JSON.stringify(eArr))
              setUsername("")
              setPassword("")
            

            }


            
          }} className="bg-green-500 text-white rounded-lg py-2 w-full hover:bg-green-600 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Textt;
