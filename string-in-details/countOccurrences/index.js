// const countOccurrences = (text = '', str) => {
//   // put your code here
//   if (str === '') {
//     return null;
//   }
//   return text.split(str).length - 1;
// };

const countOccurrences = (text = '', str) => str === "" ? null : text.split(str).length - 1;
