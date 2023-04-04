function getSum(n, m) {
  let sum = 0;
  for (let i = n; i <= m; i += 1) {
    if (i % 2 === 1) continue;
    sum += i;
  }
  return sum;
}
