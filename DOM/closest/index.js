export function getSection(num) {
  const spanElement = document.querySelector(`span[data-number='${num}']`);
  if (spanElement) {
    const parentElement = spanElement.parentElement;
    return parentElement.getAttribute('data-section');
  }
}