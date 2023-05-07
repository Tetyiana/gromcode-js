function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let duplicatesArray = Array.from(new Set(array));
  // return duplicatesArray.length;
  console.log(duplicatesArray.length);
}
uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]);