

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const buttonEnable = document.querySelector(".submit-button");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";

    const registerAccount = () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const name = document.getElementById("name").value;

      const userData = { email, password, name };
      console.log(userData);
      return fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userData),
      });
    };
    const isValid = form.reportValidity();

    if (!isValid) {
      buttonEnable.disabled = true;
      return;
    }

    registerAccount().then((responseData) => {
      buttonEnable.disabled = false;
      form.reset();
      alert(JSON.stringify(responseData));
    });
  });
});

