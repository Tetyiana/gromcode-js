export function finishForm() {
  const finishFormElem = document.querySelector(".login-form");
  const inputElemLogin = document.createElement("input");
  inputElemLogin.type = "text";
  inputElemLogin.name = "login"
  finishFormElem.prepend(inputElemLogin);
  const inputElemPassword = document.getElementsByTagName('password');
  inputElemPassword.type = 'password';
}



