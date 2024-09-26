// let n = 0;
// let i = 1

// do{
//     console.log("Shubham")
//     i++
// }
// while(i <= n)



// Guess the number


let ans = Math.floor(Math.random() * 10)

let tries = 3

do {
    let guess = Number(prompt("Guess the number"))


    if(guess == ans)
    {
        alert("Hurray")
        break;
    }

    tries--

    if(tries == 0)
    {
        alert("Game over!!")
    }
} while (true && tries > 0);