/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  // put your code here
  const newObj = Object.assign({}, obj1, obj2);
  return newObj;
  // console.log(obj1);
  // console.log(obj2);
}

function mergeObjectsV2(obj1, obj2) {
  // put your code here
  const newObj = Object.assign({}, obj2, obj1);
  // console.log(newObj);
  // console.log(obj1);
  // console.log(obj2);
  return newObj;
}

function mergeObjectsV3(obj1, obj2) {
  // put your code here
  const newObj = { ...obj1, ...obj2 };
  // console.log(obj1);
  // console.log(obj2);
  // console.log(newObj);
  return newObj;
}

function mergeObjectsV4(obj1, obj2) {
  // put your code here
  const newObj = { ...obj2, ...obj1 };
  // console.log(obj1);
  // console.log(obj2);
  // console.log(newObj);
  return newObj;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
