const getEvenNumbers = arr => {
  arr.filter(num => num % 2 == 0);
};
it('17 equal 17', () => {
  expect(17).toEqual(17);
});

it('17 is not equal 18', () => {
  expect(17).not.toEqual(18);
});
it('should get only even numbers from array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});