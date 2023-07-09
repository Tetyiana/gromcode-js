export const calc = (initValue) => {
  let result = initValue;
  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};


// const result = calc(1).mult(6).div(2).substract(5).result();
// console.log(result);