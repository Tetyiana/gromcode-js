const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";
const form = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");

document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
});

form.addEventListener("input", function () {
  if (form.reportValidity()) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
});

form.addEventListener("submit", function () {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const body = { email, name, password };

  if (!form.reportValidity()) {
    return;
  }

  function register(method, url, body = null) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }).then((response) => {
      return response.json();
    });
  }

  register("POST", baseUrl, body)
    .then((response) => {
      alert(JSON.stringify(response));
      form.reset();
    });
});
