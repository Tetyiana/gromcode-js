const flatArray = (numbers) =>
  numbers
    .slice()
    .flat()
    .sort((a, b) => a - b);
const arr = [2, [8, 1, 66], 28, [33]];
console.log(flatArray(arr));
