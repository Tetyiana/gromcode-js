'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = users => {
  const userPromises = users.map(async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user`);
    }
    const userData = await response.json();
    return userData.blog;
  });
  return Promise.all(userPromises);
};

// // examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
