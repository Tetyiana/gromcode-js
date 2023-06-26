export const getTitleElement () {
  titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}
getTitleElement();

export const getInputElement (){
  inputElement = document.querySelector('input[type="text"]');
  console.dir(inputElement);
  return inputElement;
}
getInputElement();