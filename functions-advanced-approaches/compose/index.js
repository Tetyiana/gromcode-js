const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;
export const compose = (...funcs) => value => {
  return
};
const superFunc = compose(add2, square, half);
// superFunc(4);
