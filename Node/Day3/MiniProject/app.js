const fs = require("fs")

let arr = process.argv.slice(2)
// console.log(arr)

let command = arr[0] // create, read, update, delete
let fileName = arr[1]
let data = arr[2]


if(command == "create")
{
    if(fileName == undefined || data == undefined)
    {
        console.log("Please enter a valid file name and file data")
        return;
    }
    fs.writeFileSync(fileName, data)
    console.log("File created successfully")
}
else if(command == "read")
{
    try 
    {
        if(fileName == undefined)
        {
            console.log("Please enter a valid file name ")
            return;
        }
        const data = fs.readFileSync(fileName, "utf-8")
        console.log(data)
    } 
    catch (error) 
    {
        console.log("Please enter valid file name")
    }
}
else if(command == "update")
{
try {
    if(fileName == undefined || data == undefined)
        {
            console.log("Please enter a valid file name and file data")
            return;
        }
    
        fs.appendFileSync(fileName, data + "\n")
        console.log("File updated successfully")
} catch (error) {
    console.log("Please enter valid filename and data")
}
}
else if(command == "delete")
{
    try {
        if(fileName == undefined)
            {
                console.log("Please enter a valid file name")
                return
            }
            fs.unlinkSync(fileName)
    } catch (error) {
    console.log("Please enter valid filename")
    }
}
else
{
    console.log("Please enter a valid command")
}



console.log("Important code")