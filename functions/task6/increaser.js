function increaser(a, index) {
  if (a > index) {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    return (a += index);
  }
  return a;
}
increaser(8, 2);
