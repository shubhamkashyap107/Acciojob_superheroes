let obj = {
    name : "Kaalia",
    age : 10,
    greet : () => {
        console.log("Hellooo!!")
    }
}

// console.log(obj)


let JSONobj = JSON.stringify(obj)
console.log(JSONobj)


let normalObj = JSON.parse(JSONobj)
console.log(normalObj)