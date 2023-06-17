'use strict';

// put your code here
export function makeCounter(){
  let count=0;
  return function() {
    return count ++;
  }
};
const counter1 = makeCounter();
const counter2 = makeCounter();
