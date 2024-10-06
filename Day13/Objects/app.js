// let obj = {
//     name : "Amit",
//     age : 20,
//     saysHi : function(){
//         console.log("Amit says hi")
//     },
//     saysHi2 : function(){
//         console.log(`${this.name} is ${this.age} years old and has ${this.girfriends.length} gfs`)
//     }
//     ,
//     girfriends : ["Pooja", "Aarti", "Shaanti"],

//     jobs : {
//         first : "Accenture",
//         second : "Google",
//         third : "NASA"
//     }
// }


// obj.newKey = "iusdhfliuasdghf"
// obj.name = "Bhanu"
// delete obj.girfriends
// console.log(obj)

// console.log(obj["name"])
// console.log(obj.name)
// console.log(obj.saysHi())
// console.log(obj.girfriends[2])
// console.log(obj.jobs.second)
// obj.saysHi2()




// let obj = new Object()

// obj.name = "asdfghjk"
// obj.age = 24234
// console.log(obj)


// let obj = {
//     name : "Bheem",
//     age : 10,
//     food : "Laddoo"
// }


// for(let item of obj)
// {
//     console.log(item)
// }

// for(let item in obj)
// {
//     console.log(`${item} -> ${obj[item]} `)
// }


let obj = {
    name : "Bheem",
    age : 10,
    food : "Laddoo",
    friends : ["chutki", "indumati", "raju", "jaggu", "kalia", "dholu-bholu"],
    obj2 :{
        obj3 : {
            ans : "Bheem ki shakti, dhoom machaye"
        }
    }
}

console.log(obj?.obj4?.obj10)
