const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";
document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  const form = document.querySelector(".login-form");
  const submitButton = document.querySelector(".submit-button");

  form.addEventListener("input", function () {
    if (form.checkValidity()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  form.addEventListener("submit", function () {
    if (!form.reportValidity()) {
      return;
    }
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const body = { email, name, password };

    function register(method, url, body = null) {
      return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      }).then((response) => {
        return response.json();
      });
    }

    register("POST", baseUrl, body).then((response) => {
      alert(JSON.stringify(response));
      form.reset();
    });
  });
});
