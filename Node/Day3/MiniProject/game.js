let guess = process.argv[2]
let fs = require("fs")
let num = Math.floor(Math.random() * 10)
console.log(num)

if(guess == num)
{
    fs.unlinkSync("os.txt")
}