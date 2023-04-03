let sum = 0;
for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}
console.log(((sum - sum % 1234) / 1234) > sum % 1234);
