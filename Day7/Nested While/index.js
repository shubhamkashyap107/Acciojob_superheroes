// let i = 1

// while(i <= 5)
// {
//     console.log(i)
//     let j = 1

//     while(j <= 5)
//     {
//         console.log("i : " + i + " j : " + j)

//         j++
//     }

//     i++
// }

// n = 5
// *
// * *
// * * *
// * * * *
// * * * * *

// * 
// * *
// * * *
// * * * *
// * * * * *

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

//     1
//    121
//   12321
//  1234321
// 123454321

//     *
//    ***
//   *****
//  *******
// *********

let num = Number(prompt("Enter your number"))
let i = 1;

while(i <= num)
{
    let spaces = num - i
    let ans = ""
    let j1 = 1
    while(j1 <= spaces)
    {
        ans += " "
        j1++
    }

    // let stars = 2 * i - 1
    // let j2 = 1
    // while(j2 <= stars)
    // {
    //     ans += "*"
    //     j2++
    // }
    let val = 1;
    while(val < i)
    {
        ans += val
        val++
    }
    while(val >= 1)
    {
        ans += val
        val--
    }
    console.log(ans)
    i++
}






// n = 3
// *
// * * 
// * * * 

// let n = Number(prompt("Enter number"))

// let i = 1;

// while(i <= n)
// {
    
//     console.log("* ".repeat(i)) // i -> 5 = * * * * * 
//     i++
// }

// while(i <= n)
//     {
//         let j = 1;
//         let ans = ""
    
//         while(j <= i)
//         {
//             ans += "* "
//             j++;
//         }
//         console.log(ans)
//         i++
//     }


// let n = Number(prompt("Enter number"))
// let i = 1;

// while(i <= n)
// {
//     let j = 1;
//     let ans = ""
//     let val = 1
//     while(j <= i)
//     {
//         ans += val + " "
//         j++
//         val++
//     }
//     console.log(ans)
//     i++
// }




    // i = 3
    // j = 3
    //1
    //12
    //123

// *
// **
// **
// ***
// ***
// ***
// ****
// ****
// ****
// ****
// *****
// *****
// *****
// *****
// *****


// let i = 1;
// let n = prompt()

// while(i <= n)
// {
//     let j = 1;
//     while(j <= 10)
//     {
//         let ans = i * j
//         console.log(`${i} * ${j} = ${ans}`)
//         j++
//     }
//     i++
// }