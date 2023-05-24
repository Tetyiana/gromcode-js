export default (arr) =>
  (!Array.isArray || arr.length === 0) ? null :
    (Math.min(...arr.map((el) => Math.abs(el))) ** 2);

// getMinSquaredNumber("1.2, 3.684, -6, 3, 100");