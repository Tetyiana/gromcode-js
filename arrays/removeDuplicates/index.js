function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let duplicatesArray = Array.from(new Set(array));
  return duplicatesArray;
}
removeDuplicates([1, 2, 3, 5, 1, 6, 2, 5, 6, 7]);
