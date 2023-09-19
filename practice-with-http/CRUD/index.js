const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/users";
const users = {
  id,
  email,
  firstName,
  lastName,
  age
}
function getUsersList() {
  return fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(users),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  }).then((response) => {
    return response.json();
  });
}

export function getUserById(userId) {
  const url = `${baseUrl}/${userId}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
}

export function createUser(user) {
  return fetch(baseUrl, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((response) => {
      return response.json();
    })
    .then((createdUser) => {
      return createdUser;
    })
}



export function deleteUser(userId) {
  const url = `${baseUrl}/${userId}`;

  return fetch(url, {
    method: 'DELETE',
  })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      return { message: 'Пользователь успешно удален' };
    })
}
export function updateUser(userId, updatedUser) {
  const url = `${baseUrl}/${userId}`;

  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((response) => {
      return response.json();
    })
    .then((updatedUserData) => {
      return updatedUserData;
    })
}

// // examples
// getUsersList().then(users => {
//   console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('User created');
// });

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('2').then(() => {
//   console.log('User updated');
// });
