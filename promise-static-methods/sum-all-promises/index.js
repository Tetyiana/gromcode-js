
const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

export const resultPromise = Promise.all([promiseNumber1, promiseNumber2, promiseNumber3])
  .then(numbersList => {
    console.log(numbersList);
    return numbersList;
  });

resultPromise.then(result => {
  console.log(result); // [67, 23, 8]
});
