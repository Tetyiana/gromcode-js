const m = 6;
const n = 18;
let result = 1;
for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
}
console.log('Result:'+ result);