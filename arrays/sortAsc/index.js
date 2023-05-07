function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  array.sort(function (a, b) {
    return b - a;
  });
  return array;
}
sortDesc([1, 3, 8, 4, -1]);