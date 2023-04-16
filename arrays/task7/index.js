'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumOfArr += arr[i];
  }
  if (sumOfArr > 100) {
    return true;
  }
  return false;
};

// examples
// checkSum([10, 10, 10]); // ===> false
// checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
