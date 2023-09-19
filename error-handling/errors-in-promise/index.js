const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(function onSuccess1(data) {
    throw new Error("Error with data");
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message); // Выводим ошибку 'Error with data' (Тест 1)
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(function onError2(error) {
    console.error('onError2', error.message); // Выводим ошибку 'Something went wrong'
    return Promise.reject(new Error('Server error')); // Возвращаем новый rejected промис (Тест 2)
  })
  .then(function onSuccess2(data) {
    console.log('onSuccess2', data); // Не должно выполниться (Тест 3)
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message); // Выводим ошибку 'Server error' (Тест 2)
  });




