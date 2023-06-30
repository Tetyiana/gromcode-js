const even = document.querySelector('.text-input');
const textOfInput = even.inputElem.value;
even.addEventListener('change', () => {
  console.log(textOfInput);
})