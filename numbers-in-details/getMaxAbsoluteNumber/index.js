const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.max(...arr.map(el => Math.abs(el)));
};

// examples
getMaxAbsoluteNumber([-10, 10, -10]); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777