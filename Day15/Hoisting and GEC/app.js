


// let a = 10

// console.log(a)
// var a = 10
// const a = 10



// var n = 2;

// function square(num){
//     var ans = num * num
//     return ans
// }

// var a1 = square(n)
// var a2 = square(4)


// console.log(obj)
// console.log(obj.namne)

// let obj = {
//     namne : "kshdfkjghsdf"
// }



// let fn = () => {
//     console.log("OKAY")
// }

// fn()


// let a = 22
// console.log(a)





// var n = 22;


// function outer(){
//     var a = 10;
//     function inner(a){
//         var b = 33
//         return a + b
//     }

//     return inner(a)
// }


// var ans = outer()




// var n = 32;

// function a(){
//     var a1 = 32;
//     console.log(a1)
//     return true
// }


// function b(n){
//     var a2 = 22;
//     console.log(a2)
//     return n > 50
// }


// var ans1 = a()
// var ans2 = b(n)




// let student = {
//     name : "John",
//     grade : [85, 92, 78, 94],
//     // getAverageGrade : function(){
//     //     let sum = 0;

//     //     for(let item of this.grade)
//     //     {
//     //         sum += item
//     //     }
    
//     //     console.log("Your average grade is: " + (sum / this.grade.length).toFixed(2))
//     // }

// }


// student.getAverageGrade = function(){
//     let sum = 0;

//     for(let item of this.grade)
//     {
//         sum += item
//     }

//     console.log("Your average grade is: " + (sum / this.grade.length).toFixed(2))
// }

// student.getAverageGrade()


// let library = {
//     books : [
//         {
//             author : "RD SHARMA",
//             title : "Maths",
//             availableCopies : 100
//         },
//         {
//             author : "R.L. Stine",
//             title : "Goosebumps",
//             availableCopies : 100
//         },
//         {
//             author : "Tau Devilal",
//             title : "Champak",
//             availableCopies : 100
//         },
//     ],

//     findBook : function(title){
//           for(let item of this.books)
//             {
//                 if(item.title.toLowerCase().includes(title.toLowerCase()))
//                 {
//                     return item
//                 }
//             }  
//             return {}
//     }
// }


// console.log(library.findBook("maths"))


// let bankAccount = {
//     accountHolder : "John",
//     balance : 9999999,
//     deposit : function(amount){
//         this.balance += amount
//     },
//     withdraw : function(amount){
//         if(amount > this.balance)
//         {
//             return "Invalid Balance"
//         }

//         this.balance -= amount
//     }
// }



// bankAccount.deposit(1)
// console.log(bankAccount)

// // console.log(bankAccount.withdraw(9999999999))

// bankAccount.withdraw(999999)

// console.log(bankAccount)



