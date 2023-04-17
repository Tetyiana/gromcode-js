const getSpecialNumbers = (numbers) =>
  numbers.slice().filter((num) => num % 3 === 0);

const arr = [1, 5, 3, 8, 6, 9, 10];
console.log(getSpesialNumbers(arr));
