function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let cloneArr = arr.slice();
  return cloneArr;
}
cloneArr([1, 2, 3, 4]);