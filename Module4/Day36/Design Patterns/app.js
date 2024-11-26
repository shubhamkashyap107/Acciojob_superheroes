// function counter()
// {
//     let count = 0;

//     return {

//         incrementCount : () => {
//             count++
//         },

//         decrementCount : function(){
//             count--
//         },

//         getCount : () => {
//             return count
//         }

//     }

// }


// let c1 = counter()
// console.log(c1.getCount())
// c1.incrementCount()
// c1.incrementCount()
// c1.incrementCount()
// c1.incrementCount()
// c1.incrementCount()
// console.log(c1.getCount())






class Classroom{
    constructor(){
        this.students = []
    }
    present(student){
        this.students.push(student)
    }
    notify(news)
    {
        this.students.forEach((s) => {
            console.log(s.name)
            s.tellNews(news)
        })
    }
}
class Student{
    constructor(n)
    {
        this.name = n
    }

    tellNews(news)
    {
        console.log("Our teacher told us that " + news)
    }
}


let clsRoom = new Classroom()
let s1 = new Student("Harsh")
let s2 = new Student("Vashu")
clsRoom.present(s1)
clsRoom.present(s2)
// console.log(clsRoom.students)
clsRoom.notify("Kal chutti hai")