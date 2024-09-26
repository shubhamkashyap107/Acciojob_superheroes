// let n = 50

// let i = 1;

// while(i <= n)
// {
//     if(i % 5 == 0)
//     {
//         i++
//         continue
//     }


//     console.log(i)
//     i++
// }



// let num = prompt("Enter a number")
// let character = prompt("Enter a character")

// let i = 1

// while(i <= num)
// {
//     let ui = prompt("Enter your string")


//     if(ui.includes(character))
//     {
//         i++
//         continue
//     }


//     console.log(ui)
//     i++
// }





// let num = prompt("Enter a number")
// let character = prompt("Enter a character")

// let i = 1



// while(i <= num)
// {
//     let ui = prompt("Enter your string")


//     if(ui.includes(character))
//     {
//         i++
//         alert("Game over")
//         break
//     }


//     console.log(ui)
//     i++
// }



while(true)
{
    let number = prompt("Enter your number")
    let root = Math.sqrt(number)
    let str = String(root)

    if(!str.includes("."))
    {
        alert(`${number} is a perfect square`)
        break
    }
    


}