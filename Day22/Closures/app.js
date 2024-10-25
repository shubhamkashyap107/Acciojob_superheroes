// function a()
// {
//     var b = 1;
//     return function c()
//     {
//         console.log(b)
//     }
// }


// var fn = a()
// fn()



function counter()
{
    var count = 0

    return {
        get : () => {
            console.log(count)
        },
        inc : () => {
            count++
        },
        dec : () => {
            count--
        }

    }
    
}


// var cntr = counter()
// cntr.get()
// cntr.inc()
// cntr.inc()
// cntr.inc()
// cntr.inc()
// cntr.inc()
// cntr.inc()
// cntr.get()



// function counter(req)
// {
//     var count = 0

//     if(req == "get")
//     {
//         return function()
//         {
//             console.log(count)
//         }
//     }
//     else if(req == "inc")
//     {
//         return function()
//         {
//             count = count + 1
//             return count
//         }
//     }
//     else if(req == "dec")
//     {
//         return function()
//         {
//             count--
//         }
//     }
    
// }


// var getCount = counter("get")
//  var incCount = counter("inc")
// var decCount = counter("dec")

// getCount()

// let ans = incCount()
// console.log(ans)
