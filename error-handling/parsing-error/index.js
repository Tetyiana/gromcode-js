// window.addEventListener('error', function onUnhandledError(err) {
//   console.error('error', err.message);
// });

// let userParsingResult;

// try {
//   const user = JSON.parse(userParsingResult);
//   console.log('User data: ', user);
//   userParsingResult = 'success';
// } catch (e) {
//   userParsingResult = 'error';
// } finally {
//   console.log(`User parsing finished with ${userParsingResult}`);
// }

// let productParsingResult;

// try {
//   const product = JSON.parse(productParsing);
//   console.log('Product data: ', product);
//   productParsingResult = 'success';
// } catch (e) {
//   productParsingResult = 'error';
// } finally {
//   console.log(`Product parsing finished with ${productParsingResult}`);
// }
window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;
let userJson = '{"id": 1, "name": "John", "email": "john@example.com"}'; // Валидный JSON

try {
  const user = JSON.parse(userJson);
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;
let productJson = '{"id": 2, "name": "Product", "price": "invalid"}'; // Сломанный JSON

try {
  const product = JSON.parse(productJson);
  console.log('Product data: ', product);
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}

