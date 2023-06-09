'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  let newArr = arr.slice();
  for (let i in newArr) {
    newArr[i] = newArr[i] ** 2;
  }
  return newArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]