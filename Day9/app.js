// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")
// console.log("NAAM")



// function naam()
// {
//     console.log("Shubham")
// }




// function naam()
// {
//     for(let i = 0; i < 10; i++)
//     {
//         console.log("HEHE")
//     }
// }


// naam()
// naam()
// naam()
// naam()


// let func = function (){
//     console.log("Hello from functional expression")
// }

// func()
// abc()

// func()
// var func = () => {
//     console.log("Billa") // undefined
//     // return "hello from inside the function"
//     return 28
//     console.log("OK")
// }

// func()

// console.log(func)

// console.log(func())

// let retVal = func()
// console.log(retVal)


// func()




// let n1 = Number(prompt("ENter a number a "))
// let n2 = Number(prompt("ENter a number b"))


// function sum(a, b){ //parameters
//     var x = 22
//     return a + b
    
// }


// let ans = sum()
// console.log(ans)


// let ans = sum(n1, n2) // arguments
// console.log(ans)
// console.log(a)
// console.log(x)



// function sum(){
//     let n1 = Number(prompt("ENter a number a "))
//     let n2 = Number(prompt("ENter a number b"))


//     console.log(n1 + n2)
// }

// sum()

// {
//     var x = 22
// }


// console.log(x)


function outer(){

    console.log("Hello from function outer")
   function inner(){
    console.log("Hello from inner")
    // return 27
   }
//    inner()
   return inner
//    return inner()
}


// let iFn = outer()
// console.log(iFn())


// let count = 1

// function example(){
//     if(count === 10) return

//     count++
//     console.log("OKAY")
//     example()
// }


//  example()



// let fn = (a, b) => {

// }


// fn(10,12)



// let abc = function(a, b){

// }

// abc(1,2)



// area of circle

// let r = Number(prompt("Enter radius"))
// let pi = Math.PI


// function areaOfCircle(r, pi){
//     return (pi * r * r)
// }

// alert(areaOfCircle(r, pi))


//Check Palindrome

// let str = prompt("Enter your string")
// function checkPalindrome(str){
//     if(str.length == 0)
//     {
//         return "Is a Palindrome"
//     }
//     let start = 0
//     let end = str.length - 1

//     while(start < end)
//         {
//             if(str.charAt(start) !== str.charAt(end))
//             {
//                 return "Not a Palindrome"    
//             }
//             else
//             {
//                 start++
//                 end--
//             }
//         }
        
//         if(start >= end)
//         {
//             return "Is a palindrome"
//         }
// }

// let ans = checkPalindrome(str)

// console.log(ans)


let str = prompt("Enter the string")

function shubham(str){
    let ans = ""


    for(let i = 0; i < str.length; i++)
    {
        ans = ans + str.charAt(i)
    }


    return ans

}




console.log(shubham(str))





