// let i = 1;

// while(i <= 10)
// {
//     console.log(i)
//     i++;
// }



// while(true)
// {
//     console.log("gyuedfguisd")
// }


// let num = Number(prompt("Enter your number"))


// let i = 1;

// while(i <= num)
// {
//     // console.log("i") // i i i i i 
//     console.log(i) 
//     i++;
// }



// let num = Number(prompt("Enter your number"))


// let i = 1;
// let sum = 0;


// while(i <= num)
// {
//     if(i % 2 == 0)
//     {
//         sum += i        //1 2 3 4 5 6 7 8 9 10
//     }
//     i++;
// }


// console.log(sum)



// let n = prompt("Enter a number:");
// let sum = 0;
// let i = 2;
// while (i <= n) {
//  sum += i;
//   i += 2;
// }
// console.log("Sum", sum);




// let ans = 4

// while(true)
// {
//     let guess = prompt("Enter a number between 1-10")

//     if(guess == ans)
//     {
//         alert("Hurray! Right answer!!")
//         break;
//     }
// }


// let n=Number(prompt("enter the no. from 1-10"))
// let ans=5;
// while(n!=ans)
// {
//    n = prompt("Enter number again")
//    if(n == ans)
//    {
//     alert("Correct ans")
//     break
//    }
// }




// let num=Number(prompt('enter a number between 1 to 10'))
// let ans=6;

// while(num!=ans){
//     num=prompt('please enter a number again!')
//     if (ans==num){
//         console.log('hurray!!!')
//     }
// }


// let num = 4;
// let i = 2; // 3 4 5 6 7 8 9 10 11 12 13 14 15 16


// while(i * i <= num)
// {
//     if(num % i == 0)
//     {
//         console.log("Not a prime number")
//         break;
//     }
//     i++;
// }


let UI = Number(prompt("Enter your number..."))
let largest = 0;

while(UI > 0)
{
    let digit = UI % 10;
    if(digit > largest)
    {
        largest = digit
    }
    UI = Math.floor(UI / 10)

}



console.log(`The largest digit is ${largest}`)
















