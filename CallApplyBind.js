const person = {
    name: 'John',
    greet: function(message, punctuation) {
      console.log(`${message} ${this.name}${punctuation}`);
    }
  };
  
  const johnGreet = person.greet;
  const jane = { name: 'Jane' };
  
  johnGreet.call(jane, 'Hello', '!');     // Output: Hello Jane!
  johnGreet.apply(jane, ['Hi', '!']);     // Output: Hi Jane!
  const johnGreetBound = johnGreet.bind(jane, 'Hey');
  johnGreetBound('!!!');                  // Output: Hey Jane!!!
  