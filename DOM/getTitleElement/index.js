export function getTitleElement() {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

getTitleElement();

export function getInputElement() {
  const inputElement = document.querySelector('input[type="text"]');
  console.dir(inputElement);
  return inputElement;
};
getInputElement();