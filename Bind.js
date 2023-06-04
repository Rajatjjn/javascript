const obj={
    name:"rajat",
    detaill:function(){
        return (`my name is ${this.name}`)
    }
}
console.log(obj.detaill());   //rajat
const data=obj.detaill   //The function gets invoked at the global scope
console.log(data())         //undefined
const secdata=data.bind(obj)   
console.log(secdata())
 