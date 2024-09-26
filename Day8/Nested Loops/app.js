
//* * * * * 
//* * * * * 
//* * * * * 
//* * * * * 
//* * * * * 


// n = 5
// let i = 1;

// while(i <= n)
// {
//     let j = 1;
//     let ans = ""


//     while(j <= n)
//     {
//         ans += "*"
//         j++
//     }

//     console.log(ans)
//     i++

// }


//1 1 1 1 1
//2 2 2 2 2 
//3 3 3 3 3 
//4 4 4 4 4 
//5 5 5 5 5 


// n = 5
// let i = 1;

// while(i <= n)
// {
//     let j = 1;
//     let ans = ""


//     while(j <= n)
//     {
//         ans += i
//         j++
//     }

//     console.log(ans)
//     i++

// }



//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5
//1 2 3 4 5

// n = 5
// let i = 1;

// while(i <= n)
// {
//     let j = 1;
//     let ans = ""


//     while(j <= n)
//     {
//         ans += j
//         j++
//     }

//     console.log(ans)
//     i++

// }






//1
//22
//333
//4444
//55555



// n = 5


// let i = 1;

// while(i <= n)
// {
//     let j = 1;
//     let ans = ""


//     while(j <= i)
//     {
//         ans += i
//         j++
//     }

//     console.log(ans)
//     i++

// }




// *****
// ****
// ***
// **
// *



// let n = Number(prompt("ENter number"))

// let i = 1;


// while(i <= n)
// {
//     let ans = ""
//     let j = 1;


//     while(j <= n - i + 1)
//     {
//         ans += "*   "
//         j++
//     }


//     console.log(ans)
//     i++
// }





//     *
//    ***
//   *****
//  *******
// *********

// spaces -> n - i
// stars -> 2i - 1

// let n = 9
// let i = 1;

// while(i <= n)
// {
//     let spaces = n - i
//     let j1 = 1;
//     let ans = ""

//     while(j1 <= spaces)
//     {
//         ans += " "
//         j1++
//     }

//     let stars = (2 * i) - 1
//     let j2 = 1
//     while(j2 <= stars)
//     {
//         ans += "*"
//         j2++
//     }

//     console.log(ans)


//     i++
// }








//    1
//   121
//  12321
// 1234321
//123454321



let n = 9
let i = 1;

while(i <= n)
{
    let spaces = n - i
    let j1 = 1;
    let ans = ""

    while(j1 <= spaces)
    {
        ans += " "
        j1++
    }

   let val = 1;
   while(val < i)
   {
    ans += val
    val++
   }

   while(val >= 1)
   {
    ans+= val
    val--
   }

    console.log(ans)


    i++
}

