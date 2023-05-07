const arrAverage = (arr) =>
  Array.isArray(arr) ? arr.reduce((a, b) => a + b) / arr.length : null;
