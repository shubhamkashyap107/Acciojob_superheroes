// let str = "qwerty"

// console.log(str.__proto__ == String.prototype)
// console.log(str.__proto__ == Number.prototype)
// console.log(str.__proto__ == Boolean.prototype)
console.log("qwerty".__proto__.__proto__.__proto__)
console.log(true.__proto__.__proto__.__proto__)
// console.log(null.__proto__)
// console.log(undefined.__proto__)
let p = new Promise(() => {

})

console.log(p.__proto__.__proto__.__proto__)
console.log(function(){}.__proto__.__proto__.__proto__)

let str = "123456"
let obj = {}
console.log(obj.__proto__ == Object.prototype)
console.log(obj.__proto__.__proto__)
let arr = []
console.log(arr.__proto__ == Array.prototype)