// class Model{
//     constructor(data){
//         this.data = data
//     }
// }
// class View{
//     render(data){
//         console.log(data)
//     }
// }
// class MVC{
//     constructor(m, v){
//         this.model = m
//         this.view = v
//     }
//     showData(){
//         this.view.render(this.model.data)
//     }
// }
// let model = new Model("This is some secret data")
// let view = new View()
// let controller = new MVC(model, view)
// controller.showData()


// console.log(model)
// console.log(view)
// console.log(controller)


// class Singleton{

//     static instance = false

//     constructor(){
//         if(Singleton.instance)
//         {
//             return Singleton.instance
//         }
//         Singleton.instance = this
//         this.num = Math.random()
//     }
// }

// let s1 = new Singleton()
// let s2 = new Singleton()
// let s3 = new Singleton()

// console.log(s1)
// console.log(s2)
// console.log(s3)


class Car{
    constructor(brand)
    {
        this.brand = brand
    }
}



class CarFactory{
    constructor(b)
    {
        return new Car(b)
    }
}

let newCar = new CarFactory("BMW")
console.log(newCar)
















