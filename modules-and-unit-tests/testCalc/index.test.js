// import { calc } from "./calculator.js";

// it('перевірка типу аргумента ', () => {
//  const result = calc();
//   expect(result).toEqual(null);
// });

// it('перевірка суми', () => {
//   const result = calc ('3 + 3');
//   expect(result).toEqual('3 + 3 = 6');
// });
// it('перевірка різниці', () => {
//   const result = calc ('5 - 2');
//   expect(result).toEqual('5 - 2 = 3');
// });
// it('перевірка множення', () => {
//   const result = calc ('5 * 3');
//   expect(result).toEqual('5 * 3 = 15');
// });
// it('перевірка ділення', () => {
//   const result = calc ('6 / 2');
//   expect(result).toEqual('6 / 2 = 3');
// });
import { calc } from "./calculator.js";

it("test null", () => {
    const result = calc(54);
    expect(result).toEqual(null);
  });


  it("test addition", () => {
    const result = calc('10 + 2');
    expect(result).toEqual(12);
  });

  it("test addition", () => {
    const result = calc('10 - 2');
    expect(result).toEqual(8);
  });

  it("test addition", () => {
    const result = calc('10 * 2');
    expect(result).toEqual(20);
  });
  it("test addition", () => {
    const result = calc('10 / 2');
    expect(result).toEqual(5);
  });