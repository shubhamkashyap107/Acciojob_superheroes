// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < arr.length; i++)
// {
//     arr[i] = arr[i] * 2
// }

// console.log(arr)


// let Narr = arr.map(function(item, index){
//     console.log(item, index)
//     return index * 2
// })


// let Narr = arr.map((item, index) => {
//     // return item * 2
//     return item % 2 == 0
// })

// console.log(arr)
// console.log(Narr)



// let arr = [1,2,3,4,-5,6,-7,8,-9,-10]

// let Narr = arr.filter((item, index) => {
//     // return item > 0
//     // return item < 0
//     // return item % 2 == 0
//     // return item % 2 != 0
//     return index % 2 == 0
// })


// console.log(Narr)


let arr = [23,987,3456,67,78,5,34,23,23,90]

let sum = arr.reduce((accumulator, item) => {
    return accumulator * item
})


console.log(sum)