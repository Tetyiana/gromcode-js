import getMinSquaredNumber from "./getMinSquaredNumber.js";

it("строка поверне null", () => {
  const result = getMinSquaredNumber('text');
  expect(result).toBe(null);
});

it('пустий масив поверне null', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toBe(null);
});
it('квадрат мінімального числа з массиву', () => {
  const result = getMinSquaredNumber([1.2, 3.684, -6, 3, 100]);
  expect(result).toBeCloseTo(1.44);
});
