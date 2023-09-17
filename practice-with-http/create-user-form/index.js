document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  const submitButton = document.querySelector(".submit-button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const body = { email, name, password };

    const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";

    register("POST", baseUrl, body)
      .then((response) => {
        alert(JSON.stringify(response));
        form.reset();
      });
  });

  form.addEventListener("input", function () {
    if (form.checkValidity()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  function register(method, url, body = null) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }).then((response) => response.json());
  }
});
