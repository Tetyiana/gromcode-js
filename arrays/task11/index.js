function checer(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if ((Math.min(...arr) + Math.max(...arr)) > 1000) {
    return true;
  }
  return false;
}
checer([10000, 2, 3, 4]);
