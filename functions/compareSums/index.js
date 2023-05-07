function sum(from, to) {
  let result = 0;
  for (let num = from; num <= to; num += 1) {
    result += num;
  }
  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return true;
  }
  return false;
}
