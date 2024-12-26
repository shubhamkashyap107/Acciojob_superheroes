import React, { useCallback, useMemo, useState } from 'react'

const Momos = () => {

    const[val, setVal] = useState(0)
    const[count, setCount] = useState(0)


    let isPrime = useCallback((num) => {
        if (num <= 1) {
            return false;
          }
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
             return false;
            }
          }
          return true;
    }, []) 


    // let isPrime = useCallback(function(num) {
    //     if (num <= 1) {
    //       return false;
    //     }
    //     for (let i = 2; i <= Math.sqrt(num); i++) {
    //       if (num % i === 0) {
    //        return false;
    //       }
    //     }
    //     return true;
    //    }, [])


  let findNthPrime = useCallback(function (n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }, [])

   
  
//    let ans = findNthPrime(val)

   let ans = useMemo(() => {return findNthPrime(val)}, [val])

  return (
    <div>
        <div>

        <h3>Nth prime number is : {ans}</h3>
        <input type="number" value={val} onChange={(e) => {
            setVal(e.target.value)
        }} />
        
        </div>
        <div>
            <h3>The count is : {count}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
        </div>
    </div>
  )
}

export default Momos