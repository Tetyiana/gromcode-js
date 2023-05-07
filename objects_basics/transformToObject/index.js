const transformToObject = arr => {
  // put your code here
  let obj = {};
  arr.forEach(element => {
    obj[element] = element
  });
  return obj;
};

// examples
transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
