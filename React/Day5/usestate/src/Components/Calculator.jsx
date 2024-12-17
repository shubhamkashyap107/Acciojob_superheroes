import React, { useState } from 'react'

const Calculator = () => {

    const[val, setVal] = useState(0)
    function btnClickHandler(e)
    {
        if(val == "0")
        {
            setVal(e.target.innerText)
        }
        else
        {
            setVal(val + e.target.innerText)
        }

    }


  return (
    <div className='border rounded-2xl p-9 w-[30vw] mx-auto  mt-32 flex flex-col items-center bg-black'>
        <input className='w-[100%] h-12 border bg-white text-right text-3xl' type="text" disabled value={val}  />


        <div className='grid grid-cols-4 w-fit gap-x-6 gap-y-4 mt-4'>
            <button onClick={() => {
                setVal(0)
            }} className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'>C</button>
            <button onClick={() => {
 
                let temp = String(val)
                setVal(temp.slice(0,-1))
            }} className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'>X</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'  onClick={btnClickHandler}>%</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400' onClick={btnClickHandler}>/</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'  onClick={btnClickHandler}>7</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'  onClick={btnClickHandler}>8</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>9</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400' onClick={btnClickHandler}>*</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>4</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>5</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>6</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400' onClick={btnClickHandler}>-</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>1</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>2</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>3</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400' onClick={btnClickHandler}>+</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>0</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>.</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400' onClick={btnClickHandler}>**</button>
            <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400' onClick={() => {
                if(!val)
                {
                    return
                }
                let ans = eval(val)
                setVal(ans)
            }}>=</button>
        </div>
    </div>
  )
}

export default Calculator