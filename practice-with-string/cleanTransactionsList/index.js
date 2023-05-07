const cleanTransactionsList = arr =>
  arr.filter(el => isFinite(el)).map(el => `$${Number.parseFloat(el).toFixed(2)}`);
const arr = ['1.29', 17, ' 2.368', '  ;', '19 doll']
console.log(cleanTransactionsList(arr));
