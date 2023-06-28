export function finishList() {
  const finishListElem = document.querySelector(".list");
  const liElem = document.createElement("li");
  liElem.append('1');
  liElem.prepend('8');
  liElem.before.document.querySelector(".special")('4');
  liElem.after.document.querySelector(".special")('6');
}


