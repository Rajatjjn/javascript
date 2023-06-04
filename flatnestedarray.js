function flat(arr) {
    let flatten = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) == false) {
        flatten.push(arr[i]);
      } else {
        flatten = flatten.concat(flat(arr[i]));
      }
    }
    return flatten;
  }
  
  console.log(flat(["a",[1,2,3],["b","c",["s","rajat",["dfrr","deep2",["deep3",["deep4"]]]]]]));