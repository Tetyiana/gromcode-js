function reverseArray(arr) {
  // put your code here
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}
