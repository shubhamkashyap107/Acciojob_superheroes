// function fibo(n)
// {

//     if(n == 0)
//     {
//         return 0
//     }

//     if(n == 1)
//     {
//         return 1
//     }

//     return fibo(n - 1) + fibo(n - 2)
// }

// console.log(fibo(6))





function printArray(arr, n) {
    let str = ""
    printArrayRecursive(arr, 0, n, str);
  }
  
function printArrayRecursive(arr, i, n, str) {


    if(i == n)
    {
        console.log(str)
        return 
    }


    str += arr[i] + " "
    printArrayRecursive(arr, i + 1, n, str)
}