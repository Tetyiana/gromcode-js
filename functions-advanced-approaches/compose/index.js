const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

export const compose = (...funcs) => value => {
  return funcs.reduce((result, func) => func(result), value);
};

const superFunc = compose(add2, square, half);

