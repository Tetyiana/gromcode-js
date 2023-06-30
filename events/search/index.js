const searchElem = document.querySelector('.search__btn');
const searchElemValue = document.querySelector('.search__input');
searchElem.addEventListener('click', () => {
  console.log(searchElemValue.value);
})
