const increaseEvenEl = (arr, delta) =>
  Array.isArray(arr) ? arr.map((x) => (x % 2 === 0 ? x + delta : x)) : null;
