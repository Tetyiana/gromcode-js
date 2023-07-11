'use strict';

// put your code here
export const delay = time => new Promise((resolve) => {
  setTimeout(() => resolve(), time);
});
delay(3000).then(() => console.log('Done'));