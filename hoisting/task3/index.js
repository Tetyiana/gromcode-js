let arr = [];

export const createArrayOfFunctions = (num) => {
  if (!num) {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }
  
  arr.length = num;
  for (let i = 0; i < num; i++) {
    arr[i] = function() {
      return i;
    };
  }
  return arr;
};