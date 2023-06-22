const fruit = [
  {
    apple: 4,
    orange: 8,
    banana: 3,
  },
  {
    lemon: 8,
    pine: 4,
    citrus: 5,
  },
  {
    apple: 7,
    banana: 8,
    pine: 7,
  },
];

const count = {};
fruit.forEach((value) => {
  // console.log(value)
  for (each in value) {
     console.log(each)
     console.log(value)
    if (count[each]) {
      count[each] = count[each] + value[each];
    } else {
      count[each] = value[each];
    }
  }
});
console.log(count);
