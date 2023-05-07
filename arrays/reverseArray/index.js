function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let reverseArr = arr.slice();
  reverseArr.reverse();
  console.log(reverseArr);
}
reverseArray([1, 2, 3, 4]);