//inheritence harry youtube video
class Animal{
    constructor(name,color){
      this.name=name
      this.color=color
        
    }
    run(){
      console.log(this.name +" is running")
    }
    shout(){
      console.log(this.name +" is shouting")
    }
  }
  
  class Monkey extends Animal{
    eatbababa(){
      console.log(this.name+" is eating bananan")
    }
  }
  let raj=new Animal("bruno","red")
  let baj=new Monkey("ttttt","grey")
  raj.run()
  raj.shout()
  baj.eatbababa()
 