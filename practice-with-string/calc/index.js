const calc = exspression => {
  const [a, operator, b] = exspression.split(' ');
  console.log([a, operator, b]);
  let result;
  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${exspression} = ${result}`;
}
console.log(calc(6 * 2));
