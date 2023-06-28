
export function squaredNumbers() {
  const listItems = document.querySelectorAll('.number');
  listItems.forEach((item) => {
    const number = parseInt(item.dataset.number, 10);
    const squaredNumber = number ** 2;
    item.dataset.squaredNumber = squaredNumber;
  });
}


