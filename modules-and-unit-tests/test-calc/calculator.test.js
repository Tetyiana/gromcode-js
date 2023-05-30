import { calc } from "./calculator.js";

it('перевірка типу аргумента ', () => {
 const result = calc();
  expect(result).toBe(null);
});

it('перевірка суми', () => {
  const result = calc ('3 + 3');
  expect(result).toBe('3 + 3 = 6');
});
it('перевірка різниці', () => {
  const result = calc ('5 - 2');
  expect(result).toBe('5 - 2 = 3');
});
it('перевірка множення', () => {
  const result = calc ('5 * 3');
  expect(result).toBe('5 * 3 = 15');
});
it('перевірка ділення', () => {
  const result = calc ('6 / 2');
  expect(result).toBe('6 / 2 = 3');
});