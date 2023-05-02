const getFiniteNumbers = arr => {
  const newArr = arr.slice().filter((num) => Number.isFinite(num) === true);
  return newArr;
};
const getFiniteNumbersV2 = arr => {
  const newArr = arr.slice().filter((num) => isFinite(num) === true);
  return newArr;
};
const getNaN = arr => {
  const newArr = arr.slice().filter((num) => Number.isNaN(num) === true);
  return newArr;
};
const getNaNV2 = arr => {
  const newArr = arr.slice().filter((num) => isNaN(num) === true);
  return newArr;
};
const getIntegers = arr => {
  const newArr = arr.slice().filter((num) => Number.isInteger(num) === true);
  return newArr;
};
const arr = [2, 'text', 17, ' 34', 'NaN', NaN, 128.6, 35.2];
// console.log(getFiniteNumbers(arr));
// console.log(getNaN(arr));
// console.log(getNaNV2(arr));
console.log(getIntegers(arr));