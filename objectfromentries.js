const arr=[
    [ 'name', 'rajat' ],
    [ 'age', 44 ],
    [ 'occupation', 'senior software engineer' ]
  ]
  const entries=Object.fromEntries(arr)
  console.log(entries)
  // output  { name: 'rajat', age: 44, occupation: 'senior software engineer' }