const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";

const registerAccount = () => {
  const email = document.getElementsByName("email").value;
  const password = document.getElementsByName("password").value;
  const name = document.getElementsByName("name").value;

  const userData = { email, password, name };

  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = form.reportValidity();

    if (!isValid) {
      return;
    }
    registerAccount().then((responseData) => {
      const buttonEnable = document.querySelector(".submit-button");
      buttonEnable.disabled = false;
      form.reset();
      alert(JSON.stringify(responseData));
    });
  });
});
