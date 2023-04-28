const getTotalRevenue = transactions => {
  const arrAmount = transactions.map(el => el.amount);
  const result = arrAmount.reduce(function (a, b) { return (a + b) });
  // console.log(result);
  return result;
};
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310

