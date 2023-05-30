function reverseArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

it('перевірка типу аргумента ', () => {
  const result = reverseArray(arr);
   expect(result).toEqual(null);
 });