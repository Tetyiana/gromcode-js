export function getSection(num) {
  const elemOfChild = document.querySelector('.box');
  if (elemOfChild) {
    const spanElement = elemOfChild.querySelector(`span[data-number='${num}']`);
    if (spanElement) {
      const parentElement = spanElement.parentElement;
      return parentElement.getAttribute('data-section');
    }
  }
}

