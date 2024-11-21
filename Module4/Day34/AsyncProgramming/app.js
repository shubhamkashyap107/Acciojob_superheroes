// setInterval(() => {
//     console.log("Hello from SI")
// }, 2000)

// const id = setInterval(() => {
//     console.log("Hello from SI 2")
// }, 4000)


// clearInterval(id)

// console.log("OKAY")


// setInterval(() => {
//     prompt("Enter username")
// }, 2000)

// setTimeout(() => {
//     console.log("Hello from SI")
// }, 2000)

// setTimeout(() => {
//     console.log("Hello from ST2")
// }, 4000)



// let num = 1;

// const ID = setInterval(() => {
//     if(num == 101)
//     {
//         clearInterval(ID)
//         return
//     }

//     console.log(num)
//     num++
    

// })


// function mySetInterval(time, count)
// {
//     for(let i = 1; i <= count; i++)
//     {
//         setTimeout(() => {
//             console.log(i)
//         },  time * i)
//     }
// }


function mySetInterval(time, count, i)
{
    if(count == i)
    {
        return
    }

    setTimeout(() => {
        console.log(count)
        mySetInterval(time, count + 1 , i)
    }, time)

}

mySetInterval(2000, 0, 5)




