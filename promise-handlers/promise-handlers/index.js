'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  // put your code here
  const promise = new Promise((resolv, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolv({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });

  return promise;

};
