// let obj = {
//     name : "Abhishek Bhaiya",
//     age : 23,
//     cartoons : ["Chota Bheem", "Ben 10", "Barbie"],
//     inner : {
//         name : "SHubham",
//         greet : function(){
//             console.log(this.name, obj.age)
//         }
//     }
// }



// function xyz(){
//     console.log(this.name)
// }

// obj.xyz = xyz

// console.log(obj)
// console.log(obj.name)
// console.log(obj["age"])
// // obj.greet("SHubham")
// // obj.abc()

// obj.inner.greet()
// obj.xyz()


// let obj = {
//     age : 16,
// }


// obj.name = "Shubham"


// delete obj.age
// console.log(obj)

// obj.age = 32
// console.log(obj)





// let obj ={
//     data : "qwerty",
//     obj2 : {
//         data2 : "qwertyu",
//         obj3 : {
//             data3 : "asdfghj",
//             obj4 : {
//                 ans : "Winner"
//             }
//         }
//     }
// }

// let obj ={
//     data : "qwerty",
//     obj2 : {
//         data2 : "qwertyu",
//         obj3 : {
//             data3 : "asdfghj",
//             ans : "winner"
//         }
//     }
// }

// let ans = obj?.obj2?.obj3?.obj4?.ans
// console.log(obj.obj2.obj3.obj4.ans)

// console.log(ans)



// for(let i = 0; i < 100; i++)
// {
//     console.log(i)
// }


// let x;
// console.log(x.a)




// let ob = {
//     1 : "sdfjk",
//     2 : 89,
//     3 : true
// }

// for(let i = 0; i < 3; i++)
// {
//     let ans = ob[i]
//     console.log(ans)
// }




// let obj = {
//     name : "kjhsdfjks",
//     age : 54,
//     isHandsome : false,

// }






// for(let item of obj)
// {
//     console.log(obj[item])
// }




// for(let item in obj)
// {
//     console.log(item, obj[item])
// }

// for(let item in obj)
// {
//     console.log(item, obj.item)
// }


// let json = {
//     "name" : "shubham",
//     "age" : 23,
//     "flag" : true
// }


// let obj = {
//     name : "ksdghfisd",
//     age : 45,
//     greet : "function(){console.log('Hello')}"
// }
// console.log(obj)

// let json = JSON.stringify(obj)

// console.log(json)

// let newObj = JSON.parse(json)


// console.log(newObj)



// let arr = [1,2,3,4,5]
// let arr2 = [10,22,33,44,55,66]

// arr.push(arr2)
// console.log(arr)


// arr = [...arr, ...arr2]
// console.log(arr)

// console.log(...arr2)


// let obj = {
//     name : "khjsbdf",
//     name : "jfkytfkutd",
// }

// console.log(obj.name)


// let obj = {
//     name : "iusdgfiugsd"
// }
// let obj2 = {
//     age : 45,
//     name : "Shubham"
// }




// let newObj = {
//     ...obj, ...obj2,random : 7878978
// }
// console.log(newObj)






// let arr = [1,2,3,4,5]
// let arr2 = [11,22,33,44]



// // arr.push(arr2)


// let newArr = [...arr, arr2]
// arr2.push("qwerty")


// console.log(newArr)





// let obj = {
//     name : "Shubham",
//     age : 24
// }

// let obj2 = {
//     lastname : "Kashyap",
//     company : "google"
// }


// let nobj = {
//     ...obj,
//     ...obj2
// }


// obj2.company = "Amazon"

// console.log(nobj)

// let obj = {
//     name : "Shubham",
//     age : 24
// }

// let obj2 = {
//     lastname : "Kashyap",
//     company : "google"
// }

// let nobj = {
//     ...obj,
//     obj2
// }

// let nobj = {
//     ...obj,
//     obj2 : {
//         lastname : "iysgdfig",
//         company :'kusdhfshdf'
//     }
// }


// // console.log(obj2)
// obj2.company = "qwerty"
// console.log(nobj)


// let original = { name: "Shubham", skills: { primary: "JavaScript" } };
// let shallowCopy = { ...original };  // Shallow copy using spread operator


// let obj = {
//     name : "Rizwan",
//     age : 23,
//     favColor : "Red",
//     bank : {
//         accountNumber : "12345678",
//         balance : 6666676676876
//     }
// }


// let newObj = structuredClone(obj)
// console.log(newObj)
// obj.bank.balance = 89
// console.log(newObj)


// let newObj = {...obj}
// console.log(newObj)

// newObj.bank.balance = 0
// // obj.bank.balance = 565656565
// console.log(newObj)
// console.log(obj)



let obj = {
    name : "sdfjk",
    arr : [1,2,3,4,5]
}



// let newObj = {
//     ...obj
// }

// console.log(newObj)


// obj.arr.push(true)


// console.log(newObj)



let newObj = structuredClone(obj)

console.log(newObj)

obj.arr.push("kjshdfgkhjdfg")

console.log(newObj)