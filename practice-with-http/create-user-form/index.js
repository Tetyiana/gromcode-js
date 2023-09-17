const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";
document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  const form = document.querySelector(".login-form");
  const submitButton = document.querySelector(".submit-button");

  form.addEventListener("submit", function () {
    if (form.reportValidity()) {
      submitButton.setAttribute("disabled", false);
    }

    const email = document.getElementById("email").value;
    const name = document.getElementsByName("name").value;
    const password = document.getElementsByName("password").value;
    const body = { email, name, password };

    function register(method, url, body = null) {
      return new Promise(() => {
        fetch(url, {
          method,
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json;charset=utf-8" },
        })
          .then((response) => {
            return response.json();
          })
      });
    }

    register("POST", baseUrl, body)
      .then((response) => {
        alert(JSON.stringify(response));
        form.reset();
        submitButton.setAttribute("disabled", 'true');
      });
  });
});


