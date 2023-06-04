//1
function student(name,color){
    this.name=name
    this.color=color

}

student.prototype.age="67"
const data=new student("arun","black")
console.log(data.color)

//2

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.age = 15;

var studObj1 = new Student();
alert(studObj1.age); // 15

var studObj2 = new Student();
alert(studObj2.age); // 15

//3
// Constructor function
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype of the Person constructor
  Person.prototype.sayHello = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  // Creating a new object using the Person constructor
  var john = new Person('John');
  
  // Calling the sayHello method on the john object
  john.sayHello(); // Output: Hello, my name is John
  