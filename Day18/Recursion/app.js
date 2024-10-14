// function fn(n)
// {
//     if(n == 0)
//     {
//         return 
//     }
//     console.log("Stree 2")
   
//     fn(n - 1)
// }

// let n = 5
// fn(n)


// for(let i = 1; i < 11; i++)
// {
//     console.log("Stree 2")
// }



// let n = prompt("Enter N")

// function printToN(n)
// {

//     if(n == 0)
//     {
//         return 
//     }

   
//     printToN(n--)
//     console.log(n)
// }

// printToN(n)



// let n = prompt("Enter N")



// function factorial(n)
// {
//     if(n == 1)
//     {
//         return 1
//     }
//     if(n == 0)
//     {
//         return 1
//     }


//     return n * factorial(n - 1)
// }


// console.log(factorial(n))


let str = prompt("")

function reverseStr(str)
{
    if(str.length == 0)
    {
        return str
    }
    return reverseStr(str.slice(1)) + str.charAt(0)
}


let ans = reverseStr(str)
console.log(ans)


