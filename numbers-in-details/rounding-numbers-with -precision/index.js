'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

const superRound = (num, prec) => {
  // put your code here

  let numberOfZeros = 10 ** prec;
  console.log(numberOfZeros);
  return [Math.floor(num * numberOfZeros) / numberOfZeros, Math.trunc(num * numberOfZeros) / numberOfZeros, Math.ceil(num * numberOfZeros) / numberOfZeros, Math.round(num * numberOfZeros) / numberOfZeros, +(num).toFixed(prec)]
};
// examples
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
