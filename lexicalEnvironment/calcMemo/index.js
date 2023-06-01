'use strict';

// put your code here
const memo = 0;
let result = 0;
export function add(num) {
  return (result = memo + num);
}

export function decrease(num) {
  return (result= memo - num);
}

export function reset() {return(result = memo);}
export function getMemo(){return (result);} 