const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('click', () => {
  if (checkboxElem.checked === true) {
    console.log('true');
  }
  console.log('false');
})