function findDivCount(a, b, n) {
  let sum = 0;
  for (let index = a; index <= b; index += 1) {
    if (index % n === 0)
      sum += 1;
  }
  return sum;
}
