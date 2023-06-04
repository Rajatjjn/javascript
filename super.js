class Employee{
    
    login(){
        console.log("ou are logged in")
    }
    logout(){
        console.log("ou are logged out")
    }
    requestleaves(leaves){
console.log(`employee request ${leaves}`);
    }
}

class  Programmer extends Employee{

    requestcofee(x){
        console.log(`employ need ${x} cofee`)
    }
    requestleaves(leaves){
        super.requestleaves(leaves)   // by using super i can access the employee properties
        console.log("one extra is granted")
        // console.log(`employee request ${leaves+1} (one extra)`);   //method overriding
            }
}
e=new Programmer()
e.requestleaves(4)
