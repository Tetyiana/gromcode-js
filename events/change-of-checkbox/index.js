const paginationButtons = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  const pageNumber = event.target.dataset.pageNumber;
  console.log(pageNumber);
}

paginationButtons.forEach(function (button) {
  button.addEventListener('click', handleClick);
});
