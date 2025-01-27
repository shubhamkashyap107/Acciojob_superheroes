const fs = require("fs")


// let ans = fs.readFileSync("./test.txt", "utf-8")
// console.log(ans)


// fs.readFile("./test.txt", "utf-8" ,(err, data) => {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data)
//     }
// })

// console.log("HEllo ji")



// fs.writeFileSync("./c.txt", "Data two")



// fs.writeFile("./b.txt", "123", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
// })


// console.log("HEllo ji")



// fs.appendFileSync("./b.txt", "hello my name is okay 3\n")


// fs.appendFile("./d.txt", "this is the new data \n", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
// })


// console.log("Hello")


// fs.mkdirSync("newFolder")



// fs.mkdir("nf2", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
// })



// fs.unlinkSync("./c.txt")
// fs.unlink("./b.txt", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
// })

// fs.rmdir("./nf2", (err) => {
//     if(err)
//     {
//         console.log(err)
//     }
// })
fs.rmdirSync("./newFolder")