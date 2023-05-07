'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  // put your code here
  // eslint-disable-next-line no-restricted-syntax
  for (let i in arr) {
    if (arr[i] == num) return true;
  }
  return false;
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false