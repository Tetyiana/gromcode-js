function reverseArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}

it('перевірка типу аргумента ', () => {
  const result = reverseArray('arr');
   expect(result).toEqual(null);
 });
 it('test reverse array', () => {
  const result = reverseArray([1, 2, 3]);
   expect(result).toEqual([3, 2, 1]);
 });
 it('test reverse array', () => {
  const result = reverseArray([6, 2, 1]);
   expect(result).toEqual([1, 2, 6]);
 });

 const withdraw = (clients, balances, client, amount) =>
  (balances[clients.indexOf(client)] >= amount)
    ? (balances[clients.indexOf(client)] -= amount)
    : -1;

    it('якщо баланс менший транзакції ', () => {
        const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
         expect(result).toEqual(-1);
       });
       it('якщо транзакція проведена', () => {
        const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
         expect(result).toEqual(37);
       });
       it('якщо баланс менший транзакції', () => {
        const result = withdraw(['Ann', 'John', 'User'], [1400, 50, -6], 'John', 50);
         expect(result).toEqual(0);
       });
const getAdults = obj => {
  // put your code here
  const adults = {};
  for (let key in obj) {
    if (obj[key] >= 18) adults[key] = obj[key];
  }
  return adults;
};
        it('вибрати повнолітніх(>=18)', () => {
          const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
           expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
         });

         it('вибрати повнолітніх(>=18)', () => {
          const result = getAdults({ Ann: 56, Andrey: 7 });
           expect(result).toEqual( { Ann: 56 });
         });
         it('вибрати повнолітніх(>=18)', () => {
          const result = getAdults({ Ann: 8, Andrey: 7 });
           expect(result).toEqual( {  });
         });
