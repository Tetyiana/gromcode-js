const getParsedIntegers = arr => {
  const newArr = arr.map(el => Number.parseInt(el, 10) / 10);
  return newArr;
};
const getParsedIntegersV2 = arr => {
  const newArr = arr.map(el => parseInt(el, 10) / 10);
  return newArr;
};
const getParsedFloats = arr => {
  const newArr = arr.map(el => Number.parseFloat(el));
  return newArr;
};
const getParsedFloatsV2 = arr => {
  const newArr = arr.map(el => parseFloat(el));
  return newArr;
};
const arr = [2, 137.6, 17, 12.4, 128.6, 35.2];

console.log(getParsedFloatsV2(arr));