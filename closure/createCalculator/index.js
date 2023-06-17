export const createCalculator = () => {
  // put your code here
  const memo = 0;
  let result = 0;
  function add(num) {
    return (result = memo + num);
  }
  function decrease(num) {
    return (result= memo - num);
  }
  function reset() {return(result = memo);}
  function getMemo() {
    return result;
  }
  return { add, decrease, reset, getMemo };
};
