// function abc(){
//     console.log("Hello from abc")
// }
// abc()


// function abc(){

// }

// (function(a, b){
//     console.log("Hello from IIFE")
//     console.log(a + b)
//     return true
// }(1,2))


// var fn = function(){
//     return true
// }()
// console.log(fn)



// var fn = function(){

// }

// fn()




//HOFs





function calculator(fn, a, b)
{
    fn(a, b)
}
function sum(a, b)
{
    console.log(a + b)
}
function sub(a, b)
{
    console.log(a - b)
}
function mul(a, b)
{
    console.log(a * b)
}
function div(a, b)
{
    console.log(a / b)
}

function mod(a, b)
{
    console.log(a % b)
}

calculator(sum, 11, 22)
calculator(sub, 11, 22)
calculator(mul, 11, 22)
calculator(div, 11, 22)
calculator(mod, 11, 22)



// function calculator(operator) // "+", "-" // calculator("+", "-")
// {
//     if(operator == "+")
//     {
//         return function(a, b)  
//         {
//             console.log(a + b)
//         }
//     }
//     else if(operator == "-")
//     {
//         return function(a, b)
//         {
//             console.log(a - b)
//         }
//     }

//     else if(operator == "/")
//     {
//         return function(a, b)
//         {
//             console.log(a / b)
//         }
//     }
//     else if(operator == "*")
//     {
//         return function(a, b)
//         {
//             console.log(a * b)
//         }
//     }
//     else if(operator == "%")
//     {
//         return function(a, b)
//         {
//             console.log(a % b)
//         }
//     }
// }


// let sum = calculator("+")
// sum(11,22)