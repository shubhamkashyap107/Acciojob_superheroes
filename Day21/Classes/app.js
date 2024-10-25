// let user = {
//     username : "Chikni Chameli",
//     email : "cc@gmail.com",
//     password : "nhibataungi"
// }



// let db = []
// db.push(user)

class Animal{

    #color

    constructor(naam, awaz, rang = "Black"){
        this.name = naam
        this.sound = awaz
        this.#color = rang
    }


     tellSound()
    {
        console.log(`${this.name} makes a ${this.sound} sound`)
    }

    getColor()
    {
        return this.#color
    }

    setColor(rang)
    {
        this.#color = rang
    }


}

// let dog = new Animal("Dog", "Woof", "Neela")
// let cat = new Animal("Cat", "Meow", "Peela")

// console.log(dog, cat)

// dog.tellSound()
// cat.tellSound()

// console.log(cat)
// cat.sound = "Mehhhh"
// console.log(cat.#color)
// cat.#color = "Red"

// console.log(cat.getColor())
// cat.setColor("Red")
// console.log(cat.getColor())

class Animal{
    constructor(name, sound)
    {
        this.name = name
        this.sound = sound
    }

    // speaks()
    // {
    //     console.log(`${this.name} makes a ${this.sound} sound`)  //speaks()
    // }

    // speaks(hehe)  // speaks("ksgdkfg")
    // {
    //     console.log("ANVI")
    // }
}


class Dog extends Animal{
    constructor(name, sound, breed)
    {
        super(name, sound)
        this.breed = breed
    }

    speaks()
    {
        console.log("Kutta boli aur launde")
    }
}

class Cat extends Animal 
{
    constructor(name, sound, color)
    {
        super(name, sound)
        this.color = color
    }


    // speaks()
    // {
    //     console.log("Billi boli hi")
    // }
}

let kutta = new Dog("Buso", "Woof", "Desi")
// console.log(kutta)
// kutta.speaks()

let billi = new Cat("Tom", "Meow", "Blue")
// console.log(billi.name)
// billi.speaks()
// console.log(billi)
// billi.speaks("kjghsdkjhf")


billi.speaks()












