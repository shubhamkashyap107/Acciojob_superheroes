import React from 'react'
// import Ok from './Components/Cards'
// import Ok2 from './Components/Cards'
import {Abc, a, Cards} from "./Components/Cards" 
import { Group } from './Components/Group'
import Button from './Components/Button'
import Input from './Components/Input'
import Dabba from './Components/Dabba'




const App = () => {


    function buttonClickHandler()
    {
        console.log("Button 2 pressed")
    }

  return (
    <div>
        {/* <Abc />
        <Cards image="https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww" name="Oggy" />
        <Cards image="https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Tom" />
        {Cards({image : "", name : "xyz"})} */}

            {/* <button onClick={()=> {
                console.log("Button dab gaya")
            }}>Click Me</button> */}

            {/* <button onClick={function(){
                console.log("Btn clicked")
            }}>Click Me</button> */}

            {/* <button onClick={buttonClickHandler}>Click me 2</button> */}

                {/* <Group /> */}
{/* 
                <Button num={1} />
                <Button num={2} />
                <Button num={13} /> */}
{/* 


            <Input p="Enter username"  />
            <Input p="Enter Password" t="password" /> */}


            <Dabba h="200" w="200px" bg="black" />
            <Dabba h="200" w="200px" bg="pink" />
            <Dabba h="100" w="200px" bg="red" />
            <Dabba h="300" w="200px" bg="blue" />
            <Dabba h="600" w="200px" bg="green" />


    </div>
  )
}

export default App