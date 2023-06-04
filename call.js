function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = {
    name: 'John'
  };
  
  greet.call(person, 'Hello');
  // Output: Hello, John!
  