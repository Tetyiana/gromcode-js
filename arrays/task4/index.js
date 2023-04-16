'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  // put your code here
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  let newNumbers = numbers.slice();
  let shiftNewNumbers = newNumbers.shift();
  let pushNewNumbers = newNumbers.push(shiftNewNumbers);
  return newNumbers;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
