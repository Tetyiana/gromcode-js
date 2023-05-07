const filterNames = (arr, text) =>
  arr.filter((arr) => arr.length > 5 && arr.includes(text));
console.log(filterNames(['Olivya', 'Nastya', 'Oleksandr', 'Petya'], 'ya'));