const obj = {
  name: "rajat",
  age: 44,
  occupation: "senior software engineer",
};

const entries = Object.entries(obj);
//entries.forEach(([key,value])=>console.log(key,value))   
console.log(entries);
// output
//  [
//    [ 'name', 'rajat' ],
//   [ 'age', 44 ],
//   [ 'occupation', 'senior software engineer' ]
// ]
