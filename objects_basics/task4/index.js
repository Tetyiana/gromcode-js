const user = {
  name: 'Tom',
  age: 17,
};
user.hobby = 'football';
/* присвой объекту свойство hobby со значением 'football' с помощью точки */

const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
user[anotherKey] = false;
/* присвой объекту свойство 'favorite music' со значением 'rock' */
user['favorite music'] = 'rock';
/* присвой объекту свойство 'address', которое будет пустым объкетом */
const address = {};
user.address = address;
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */

address.country = 'Ukraine';
/* присвой объекту в 'address' свойство 'building', со значением 17 */
address.building = 17;
/* выведи в консоль итоговый объект user */
console.log(user);