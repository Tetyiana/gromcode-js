export function getTitleElement() {
  titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};
getTitleElement();

export function getInputElement() {
  inputElement = document.querySelector('input[type="text"]');
  console.dir(inputElement);
  return inputElement;
};
getInputElement();