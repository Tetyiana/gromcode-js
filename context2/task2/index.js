export const  wallet ={
  transactions:[5, 8, 16, 397, 2],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());