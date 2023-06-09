'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  // put your code here
  // eslint-disable-next-line prefer-const
  let specialNumbers = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) specialNumbers.push(i);
  }
  return specialNumbers;
}

// examples
// getSpecialNumbers(1, 10); // ==> [3, 6, 9]
// getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]
