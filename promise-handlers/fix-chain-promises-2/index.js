const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then(response => {
    return response.json(); // Получаем данные из ответа сервера
  })
  .then(result => {
    console.log(result); // { name: 'John', age: 20 }

    return result; // Возвращаем результат для передачи в следующий обработчик
  })

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);