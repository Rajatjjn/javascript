function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
  }
  
  const person = {
    name: 'John',
    age: 30
  };
  
  introduce.apply(person, ['John', 30]);
  // Output: My name is John and I am 30 years old.
  