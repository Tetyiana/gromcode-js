'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
// eslint-disable-next-line consistent-return
function squareArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((el) => el ** 2);
}

// examples
console.log(squareArray([1, 6, -4, 0, 10])); // ===> [100, 100, 100]
squareArray([0, 0, 1, 3]); // ===> [0, 0, 1, 9]
squareArray([-1, 0, -1, 1]); // ===> [1, 0, 1, 1]
squareArray([1, 6, -4, 0, 10]);