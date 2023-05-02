const getTotalPrice = arr =>
  '$' + Math.floor(arr.reduce(function (a, b) { return (a + b) }) * 100) / 100;

