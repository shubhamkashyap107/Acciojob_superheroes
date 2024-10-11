//linear

// let arr = [11,22,33,44,55,66,77]

// let target = 57


// function search(arr, target){

//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] == target)
//         {
//             return i
//         }
//     }

//     return -1

// }
// let ans = search(arr, target)
// console.log(ans)

// // binary

// let arr = [11,33,44,55,77,345,678678,999999]
// let target = 999999

// function binarySearch(arr, target){

//     let start = 0
//     let end = arr.length - 1

//     while(start <= end)
//     {
//         let mid = Math.floor((start + end) / 2)

//         if(arr[mid] == target)
//         {
//             return mid
//         }
//         else if(target < arr[mid])
//         {
//             end = mid - 1
//         }
//         else if(target > arr[mid])
//         {
//             start = mid + 1
//         }

//     }

//     return -1

// }


// console.log(binarySearch(arr, target))




let str = ["glad", "monkey"]
let ans = []

let row1 = "qwertyuiop"
let row2 = "asdfghjkl"
let row3 = "zxcvbnm"

function getStrings(arr) {

    for(let item of arr)
    {
        let flag = true;
        console.log(item)
        for(let i  = 0; i < item.length; i++)
        {
            if(!row1.includes(item.charAt(i)))
            {
                flag = false;
                break;
            }
        }
        if(flag == true)
        {
            ans.push(item)
            break;
        }



        for(let i  = 0; i < item.length; i++)
            {
                if(!row2.includes(item.charAt(i)))
                {
                    flag = false;
                    break;
                }
            }
            if(flag == true)
            {
                ans.push(item)
                break;
            }


  
            for(let i  = 0; i < item.length; i++)
                {
                    if(!row3 .includes(item.charAt(i)))
                    {
                        flag = false;
                        break;
                    }
                }
                if(flag == true)
                {
                    ans.push(item)
                    break;
                }




    }

}


let ans2 = getStrings(str)
console.log(ans2)