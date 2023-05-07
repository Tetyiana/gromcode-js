'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
  // put you code here
  const keyArr = Object.keys(obj).forEach(element => {
    console.log(element);
  });
}

// examples
getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
