const getAdults = (userObj) => (Object.entries(userObj)
  .filter(user => user[1] >= 18)
  .map(user => user[0]));


console.log(getAdults({ 'John Doe': 7, Tom: 17, Bob: 8 }));