export function finishList() {
  const finishListElem = document.querySelector(".list");
  const liElem1 = document.createElement("li");
  liElem1.textContent = '8';
  finishListElem.append
    (liElem1);
  const liElem2 = document.createElement("li");
  liElem2.textContent = '1';
  finishListElem.prepend(liElem2);
  const finishListElemSpecial = document.querySelector(".special");
  const liElem3 = document.createElement("li");
  liElem3.textContent = '4';
  finishListElemSpecial.before(liElem3);
  const liElem4 = document.createElement("li");
  liElem4.textContent = '6';
  finishListElemSpecial.after(liElem4);
}




