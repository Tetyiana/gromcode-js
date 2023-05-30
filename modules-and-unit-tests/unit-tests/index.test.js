function reverseArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

it ('якщо аргумент не масив' () => {
  const result = reverseArray('Array');
   expect(result).toEqual(null);
 });