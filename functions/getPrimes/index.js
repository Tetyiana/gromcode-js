function getPrimes(num) {
  for (let n = 2; n <= num; n += 1) {
    let div = 0;
    for (let i = 1; i <= n; i += 1) {
      if (n % i === 0) {
        div += 1;
      }
    }
    if (div <= 2) {
      console.log(n);
    }
  }
}
getPrimes(15);
