// let arr = [1,2,3,4]
// let arr2= [[1,2,3,4,5,6], [true, false], [{}, function(){}]]


// // for(let item of arr2)
// // {
// //     console.log(item)
// // }


// for(let i = 0; i < arr2.length; i++)
// {
//     for(let j = 0; j < arr2[i].length; j++)
//     {
//         console.log(arr2[i][j])
//     }
// }



let row = prompt("Enter number of rows");

let arr = []

for(let i = 0; i < row; i++)
{
    let inner = []
    let col = prompt("Enter number of cols");
    for(let j = 0; j < col; j++)
    {
        let val = prompt(`Enter element for row -> ${i + 1} and col -> ${j + 1}`)
        inner.push(val)
    }

    // console.log(inner)
    arr.push(inner)
}

console.log(arr)












