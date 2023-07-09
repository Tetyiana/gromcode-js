const calc = initValue => {
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
    substract(number) {
      result -= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    }
  };
  return this;
};