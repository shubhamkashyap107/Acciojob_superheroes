class Model{
    constructor(data){
        this.data = data
    }
}
class View{
    render(data){
        console.log(data)
    }
}
class MVC{
    constructor(m, v){
        this.model = m
        this.view = v
    }
    showData(){
        this.view.render(this.model.data)
    }
}
let model = new Model("This is some secret data")
let view = new View()
let controller = new MVC(model, view)
controller.showData()


// console.log(model)
// console.log(view)
// console.log(controller)
